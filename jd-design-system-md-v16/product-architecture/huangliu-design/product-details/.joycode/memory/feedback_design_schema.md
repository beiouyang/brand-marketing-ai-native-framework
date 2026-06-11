---
name: design-schema 公共命名规范强制使用
description: '商详组件 / 楼层 / 区域 / 模块 / 类型 / 横切 / 场景相关输出,必须实时 grep 源 JSON,禁止凭记忆或自创命名'
type: feedback
---

涉及"商详楼层 / 区域 / 模块 / ytype / xtype / scene"时,必须实时读取源 JSON,不得依赖快照。

**Why:** 用户 2026-06-05 验收指出:把字段抄到规则会"快照漂移";正确做法是规则只写结构+流程,字段值实时读源,用脚本保一致性。

**How to apply:**
- 数据源:`JD-ProductDetails-web/brain-frontend/public/design-schema/{instances,Ytype,Xtype,scene}.json`
- 查询:每次先 grep_search/read_file 源 JSON,禁止凭记忆列 id/label
- 0 命中=拦截:反问是否新增 schema,不自创
- 代码用 id(en),展示用 name/label(中文)
- 规则文件 `.joycode/rules/01-design-schema.md` 只写结构+顶层 key 索引,不抄 module 列表
- 校验:`node scripts/check-design-schema.mjs`(4 份 JSON 自洽 + SHA256 指纹)
- CI:`brain-frontend/package.json` 已加 `prebuild` 钩子
- 当前基线(2026-06-05):116 modules / 14 areas / 11 ytype / 20 scenes;instances SHA `b2543ee3d332b2ab`