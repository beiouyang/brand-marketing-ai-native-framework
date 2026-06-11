#!/usr/bin/env node
/**
 * design-schema 一致性校验脚本
 * 用法: node scripts/check-design-schema.mjs
 * 退出码: 0 = 全部通过 ; 1 = 至少一项失败
 */

import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SCHEMA_DIR = resolve(
  __dirname,
  '../JD-ProductDetails-web/brain-frontend/public/design-schema'
)

const files = ['instances.json', 'Ytype.json', 'Xtype.json', 'scene.json']
const errors = []
const ok = (msg) => console.log(`  ✅ ${msg}`)
const fail = (msg) => {
  errors.push(msg)
  console.log(`  ❌ ${msg}`)
}

console.log('🔍 design-schema 一致性校验')
console.log(`📁 SCHEMA_DIR = ${SCHEMA_DIR}\n`)

// 读取 + SHA256
const json = {}
console.log('① 文件指纹(SHA256 前 16 位)')
for (const f of files) {
  const buf = readFileSync(resolve(SCHEMA_DIR, f))
  const sha = createHash('sha256').update(buf).digest('hex').slice(0, 16)
  json[f] = JSON.parse(buf.toString('utf-8'))
  console.log(`  ${sha}  ${f}`)
}
console.log('')

// 收集所有 instances.id 与 area
const instances = json['instances.json']
const allIds = new Set()
const moduleInfos = []
for (const depthKey of ['universalFloors', 'secondaryLayers']) {
  const depth = instances[depthKey]
  for (const areaKey of Object.keys(depth)) {
    if (areaKey === 'label') continue
    const area = depth[areaKey]
    if (!area || !Array.isArray(area.items)) continue
    for (const m of area.items) {
      moduleInfos.push({ depth: depthKey, area: areaKey, ...m })
      if (allIds.has(m.id)) {
        fail(`重复 id: "${m.id}" 出现在 ${depthKey}.${areaKey}`)
      }
      allIds.add(m.id)
    }
  }
}

// 校验 ytype 合法
const ytypeKeys = new Set([
  'general',
  ...Object.keys(json['Ytype.json'].business?.items ?? {}),
])
console.log(`② Ytype 合法 key (${ytypeKeys.size} 个): ${[...ytypeKeys].join(', ')}`)

// 校验 xtype 合法
const xtypeKeys = new Set(
  Object.keys(json['Xtype.json']).filter((k) => !k.startsWith('_'))
)
console.log(`③ Xtype 合法值: ${[...xtypeKeys].join(', ')}\n`)

console.log(`④ instances 总数: ${moduleInfos.length}`)
let badYtype = 0
let badXtype = 0
for (const m of moduleInfos) {
  if (!ytypeKeys.has(m.ytype)) {
    badYtype++
    fail(`module "${m.id}" 的 ytype="${m.ytype}" 不在 Ytype.json 中`)
  }
  if (!xtypeKeys.has(String(m.xtype))) {
    badXtype++
    fail(`module "${m.id}" 的 xtype=${m.xtype} 不在 {0,1} 中`)
  }
}
if (!badYtype) ok(`所有 module 的 ytype 合法 (${moduleInfos.length}/${moduleInfos.length})`)
if (!badXtype) ok(`所有 module 的 xtype 合法 (${moduleInfos.length}/${moduleInfos.length})`)
ok(`module id 全局唯一 (${allIds.size} 个)`)

// 校验 scene.instances[] ⊆ allIds
console.log('\n⑤ scene.instances[] 引用完整性')
const scene = json['scene.json']
let sceneCnt = 0
let badRef = 0
for (const groupKey of ['strategies', 'bizScene']) {
  const group = scene[groupKey]
  for (const sceneKey of Object.keys(group)) {
    if (sceneKey === 'label') continue
    const s = group[sceneKey]
    if (!s || !Array.isArray(s.instances)) continue
    sceneCnt++
    for (const id of s.instances) {
      if (!allIds.has(id)) {
        badRef++
        fail(`scene "${groupKey}.${sceneKey}" 引用了不存在的 id "${id}"`)
      }
    }
  }
}
if (!badRef) ok(`所有 scene 引用合法 (${sceneCnt} 个 scene)`)

// 收尾
console.log('\n📊 统计')
console.log(`  - depth: ${Object.keys(instances).filter((k) => !k.startsWith('_')).length} 层`)
console.log(`  - area:  ${new Set(moduleInfos.map((m) => `${m.depth}.${m.area}`)).size} 区域`)
console.log(`  - module: ${moduleInfos.length} 个`)
console.log(`  - ytype: ${ytypeKeys.size} 个 key`)
console.log(`  - scene: ${sceneCnt} 个 (strategies + bizScene)`)

if (errors.length) {
  console.log(`\n❌ 失败: ${errors.length} 项不一致`)
  process.exit(1)
} else {
  console.log('\n✅ 全部通过 — 4 份 JSON 自洽,可放心消费')
  process.exit(0)
}