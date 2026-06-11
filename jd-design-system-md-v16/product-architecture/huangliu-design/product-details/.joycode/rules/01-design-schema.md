# 商详公共命名规范(design-schema)— 强制核心知识库

> ⚠️ **唯一权威来源(Single Source of Truth)**:
> [`JD-ProductDetails-web/brain-frontend/public/design-schema/`](JD-ProductDetails-web/brain-frontend/public/design-schema)
> 包含 4 份 JSON,**任何修改只能改源 JSON**,规则文件本身不抄录字段。
> 检测一致性:`node scripts/check-design-schema.mjs`(见下文)。

## 一、四份 JSON 的契约

| 文件 | 唯一职责 | 顶层结构 | 必读字段 |
|---|---|---|---|
| [`instances.json`](JD-ProductDetails-web/brain-frontend/public/design-schema/instances.json) | 功能定义及标识 | `universalFloors` / `secondaryLayers` | `_schema` + 每个 module 的 `{id,name,ytype,xtype}` |
| [`Ytype.json`](JD-ProductDetails-web/brain-frontend/public/design-schema/Ytype.json) | 类型(Y轴 / 事业群) | `general` + `business.items` | en key + `label` |
| [`Xtype.json`](JD-ProductDetails-web/brain-frontend/public/design-schema/Xtype.json) | 横切(X轴) | `0=无` / `1=有` | — |
| [`scene.json`](JD-ProductDetails-web/brain-frontend/public/design-schema/scene.json) | 场景 | `strategies`(玩法) / `bizScene`(场景) | en key + `label` + `instances[]` |

### `instances.json` 三层结构(`_schema`)
- **depth 层级1-层级**:`universalFloors`(通用楼层)/ `secondaryLayers`(二级承接)
- **area  层级2-区域**:`globalFeatures` / `heroArea` / `card1Area` / `card2Area` / `standaloneFloors` / `contentArea` / `storeArea` / `waistRecommendArea` / `detailArea` / `bottomRecommendArea` / `productSpec` / `secondarySheet` / `secondaryPage` / `dialog`
- **module 层级3-模块**:`items[]` 内每个对象,字段`{ id, name, ytype, xtype }`

### Ytype 全集(只列 key,label 以源 JSON 为准)
`general` `supermarket` `3C` `home` `fashion` `life` `auto` `health` `secondHand` `govEnterprise` `jingXi`

### Xtype 全集
`0`(无) / `1`(有)

### Scene 顶层分组
- `strategies`(玩法):`nationalSubsidy` `reserve` `preSale` `groupBuy` `specialPrice` `applianceGroupBuy`
- `bizScene`(场景):`medicineSetTab` `medicineDiscountTab` `regularBuyTab` `planBuyTab` `onlyMakeTab` `tradeInTab` `try3Tab` `householdServiceTab` `homeCabinetCustomTab` `carMaintenanceTab` `regulaSetTab` `healthPdp` `simCardPdp` `petLivePdp`

> **具体 module 列表(116 项)不在此抄录**,使用前必须 `read_file` 或 `grep_search` 查询源 JSON,杜绝快照漂移。

## 二、强制工作流(每次涉及命名时)

1. **查源不查脑**:任何"商详组件 / 楼层 / 区域 / 模块 / 类型 / 横切 / 场景"相关输出,**先 grep `JD-ProductDetails-web/brain-frontend/public/design-schema/`**,以源 JSON 为唯一答案。
2. **0 命中 = 拦截**:grep 不到则视为非法命名,不得自创。先反问用户是否要新增 schema。
3. **新增模块流程**:
   - 在 `instances.json` 对应区域的 `items[]` 增项,补齐 `{id,name,ytype,xtype}`
   - `ytype` ∈ `Ytype.json` 的 en key
   - `xtype` ∈ {0,1}
   - 若该模块属于某玩法/场景,在 `scene.json[*].instances[]` 中追加其 `id`
   - 运行校验脚本 `node scripts/check-design-schema.mjs` 通过后再提交
4. **代码 / 文案契约**:
   - 代码、变量、props、API、埋点、文件名 → **id**(英文,如 `card1Area.price`、`ytype: "auto"`、`bizScene.healthPdp`)
   - 用户可见文案 → **name** / **label**(中文,如"首卡区·价格"、"汽车"、"健康商详")
5. **跨文件自洽**(脚本自动校验):
   - `scene.json[*].instances[]` ⊆ `instances.json` 中所有 `id` 的并集
   - 每个 module 的 `ytype` ∈ `Ytype.json` 的 en key
   - 每个 module 的 `xtype` ∈ {0,1}
   - module `id` 在 `instances.json` 内全局唯一

## 三、示例对照

- ✅ `heroArea.heroVideo`(主图视频,xtype=1)
- ✅ `card2Area.carProfile`(汽车档,ytype=auto)
- ✅ `bizScene.healthPdp`(健康商详)
- ❌ "主图区里的视频组件"(无 id)
- ❌ `heroArea.video`(自创)
- ❌ "汽车类目的车档"(label 不规范 + 无 id)

##、源 JSON 更新时如何不漂移

本规则文件**只描述结构与流程**,不抄录字段值。源 JSON 任何变化都通过以下机制吸收:

- **读取**:工具调用时以 `read_file` / `grep_search` 实时读源 JSON,而非记忆
- **校验**:`scripts/check-design-schema.mjs` 在 CI / 本地随时跑,发现不一致即报错
- **指纹**:可在 PR 中比对源 JSON SHA256(参见 `.joycode/memory/feedback_design_schema.md`)

---

## 附:一致性校验脚本说明

文件:`scripts/check-design-schema.mjs`
功能:
1. 解析 4 份 JSON,统计 module / scene / ytype / xtype 数量
2. 校验 `scene.instances[]` ⊆ `instances` 的 id 集合
3. 校验所有 module 的 `ytype` 是否合法
4. 校验所有 module 的 `xtype` ∈ {0,1}
5. 校验 module `id` 全局唯一
6. 输出每个文件的 SHA256(用于追踪版本)

退出码:有错 = 1,无错 = 0。建议:
- 接入 lint-staged / pre-commit
- 或在 brain-frontend `package.json` 加 `"check:schema": "node ../../scripts/check-design-schema.mjs"`