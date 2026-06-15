import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "data", "brain-data.json");
const outputPath = path.join(root, "data.js");

const requiredItemFields = [
  "id",
  "tag",
  "name",
  "desc",
  "status",
  "statusType",
  "impact",
  "downloads",
  "capability",
  "hints"
];

function assertString(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${label} must be a non-empty string`);
  }
}

function validateGroup(group, groupPath) {
  assertString(group.id, `${groupPath}.id`);
  assertString(group.title, `${groupPath}.title`);
  assertString(group.summary, `${groupPath}.summary`);
  if (!Array.isArray(group.items)) {
    throw new Error(`${groupPath}.items must be an array`);
  }

  group.items.forEach((item, itemIndex) => {
    const itemPath = `${groupPath}.items[${itemIndex}]`;
    requiredItemFields.forEach((field) => {
      if (!(field in item)) throw new Error(`${itemPath}.${field} is required`);
    });
    assertString(item.id, `${itemPath}.id`);
    assertString(item.name, `${itemPath}.name`);
    assertString(item.statusType, `${itemPath}.statusType`);
    if (!Number.isFinite(item.downloads)) {
      throw new Error(`${itemPath}.downloads must be a number`);
    }
    if (item.externalLink) {
      assertString(item.externalLink.label, `${itemPath}.externalLink.label`);
      assertString(item.externalLink.url, `${itemPath}.externalLink.url`);
    }
    if (item.mediaImage) {
      assertString(item.mediaImage.src, `${itemPath}.mediaImage.src`);
      assertString(item.mediaImage.alt, `${itemPath}.mediaImage.alt`);
    }
  });
}

function validateExecution(execution) {
  if (!execution || typeof execution !== "object") throw new Error("execution is required");
  if (!Number.isFinite(execution.pageSize)) throw new Error("execution.pageSize must be a number");
  if (!Array.isArray(execution.projects)) throw new Error("execution.projects must be an array");
  execution.projects.forEach((p, i) => {
    const path = `execution.projects[${i}]`;
    ["id", "name", "domain", "priority", "owner", "execUnit", "period", "kanbanStatus", "progress"].forEach((f) => {
      assertString(p[f], `${path}.${f}`);
    });
  });
  if (!Number.isFinite(execution.teamPageSize)) throw new Error("execution.teamPageSize must be a number");
  if (!Array.isArray(execution.team)) throw new Error("execution.team must be an array");
  execution.team.forEach((m, i) => {
    const path = `execution.team[${i}]`;
    assertString(m.id, `${path}.id`);
    assertString(m.type, `${path}.type`);
    assertString(m.name, `${path}.name`);
    assertString(m.role, `${path}.role`);
    assertString(m.avatar, `${path}.avatar`);
    if (m.type === "human") {
      assertString(m.level, `${path}.level`);
      assertString(m.dept, `${path}.dept`);
    }
    if (m.type === "copilot") {
      assertString(m.layer, `${path}.layer`);
      assertString(m.domain, `${path}.domain`);
      assertString(m.nameEn, `${path}.nameEn`);
    }
  });
}

function validateData(data) {
  ["capability", "wiki"].forEach((key) => {
    if (!Array.isArray(data[key])) throw new Error(`${key} must be an array`);
  });

  data.capability.forEach((group, index) => validateGroup(group, `capability[${index}]`));
  validateExecution(data.execution);

  data.wiki.forEach((item, index) => {
    assertString(item.title, `wiki[${index}].title`);
    assertString(item.desc, `wiki[${index}].desc`);
    if (!Array.isArray(item.entries)) throw new Error(`wiki[${index}].entries must be an array`);
  });
}

const raw = await readFile(sourcePath, "utf8");
const data = JSON.parse(raw);
validateData(data);

const output = `window.BRAIN_DATA = ${JSON.stringify(data, null, 2)};\n`;
await writeFile(outputPath, output, "utf8");
console.log(`Synced ${path.relative(root, sourcePath)} -> ${path.relative(root, outputPath)}`);
