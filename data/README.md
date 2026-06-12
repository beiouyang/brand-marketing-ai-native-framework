# Skill 卡片数据存储

`brain-data.json` 是后续批量修改 Skill 卡片和弹窗内容的结构化存储源。

## 字段对应

- `application[].items[]`：应用层 Skill 卡片和弹窗内容
- `rules[].items[]`：规则层 Skill 卡片和弹窗内容
- `wiki[]`：原子层 Wiki 卡片内容

Skill 条目字段：

- `id`：稳定唯一标识，后续更新用它定位
- `tag`：卡片上的类型标签，也会出现在弹窗顶部路径中
- `name`：卡片标题和弹窗标题
- `desc`：卡片描述和弹窗顶部灰色描述
- `status`：状态文案
- `statusType`：状态样式，支持 `applied`、`progress`、`research`
- `impact`：卡片底部和弹窗中的价值提效文案
- `downloads`：下载量数字
- `capability`：弹窗“能力介绍”
- `hints`：弹窗“试试这样问我”
- `externalLink`：可选，弹窗“相关链接”，格式为 `{ "label": "...", "url": "..." }`
- `mediaImage`：可选，弹窗左侧预览图，格式为 `{ "src": "./assets/...", "alt": "..." }`

## 更新流程

1. 批量修改 `data/brain-data.json`。
2. 运行同步脚本生成网页使用的 `data.js`：

```bash
node scripts/sync-data.mjs
```

如果当前终端没有全局 `node`，使用 Codex 工作区内置 Node：

```bash
/Users/ouyangbei3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-data.mjs
```

后续我会优先把你给的批量修改落到 `data/brain-data.json`，再同步到 `data.js` 并验证页面。
