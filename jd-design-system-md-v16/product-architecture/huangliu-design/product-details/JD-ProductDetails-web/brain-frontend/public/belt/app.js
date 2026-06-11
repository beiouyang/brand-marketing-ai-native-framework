const $ = (id) => document.getElementById(id);

const els = {
  fileInput: $("fileInput"),
  replaceImageBtn: $("replaceImageBtn"),
  cancelImageBtn: $("cancelImageBtn"),
  previewImgToolbar: $("previewImgToolbar"),
  beltBgUploadZone: $("beltBgUploadZone"),
  beltBgFileInput: $("beltBgFileInput"),
  beltBgPreviewImg: $("beltBgPreviewImg"),
  beltBgActions: $("beltBgActions"),
  beltBgReplaceBtn: $("beltBgReplaceBtn"),
  beltBgClearBtn: $("beltBgClearBtn"),
  beltBgHint: $("beltBgHint"),
  beltBgTextColorPicker: $("beltBgTextColorPicker"),
  beltBgTextColorHex: $("beltBgTextColorHex"),
  beltBgTextColorAutoHex: $("beltBgTextColorAutoHex"),
  beltBgTextColorAutoSwatch: $("beltBgTextColorAutoSwatch"),
  beltBgContentColorModeAuto: $("beltBgContentColorModeAuto"),
  beltBgContentColorModeCustom: $("beltBgContentColorModeCustom"),
  previewImg: $("previewImg"),
  previewFrame: $("previewFrame"),
  imgSize: $("imgSize"),
  imgFileName: $("imgFileName"),
  imgInfoSummary: $("imgInfoSummary"),
  sampleInfo: $("sampleInfo"),
  workCanvas: $("workCanvas"),
  palette: $("palette"),
  selectedHex: $("selectedHex"),
  copyBrandBtn: $("copyBrandBtn"),
  kInput: $("kInput"),
  maxSamplesInput: $("maxSamplesInput"),
  minSatInput: $("minSatInput"),
  minLightInput: $("minLightInput"),
  maxLightInput: $("maxLightInput"),
  beltPreview: $("beltPreview"),
  beltPreview3: $("beltPreview3"),
  beltAtmosphereImg3: $("beltAtmosphereImg3"),
  beltPreviewPc: $("beltPreviewPc"),
  beltAtmosphereImgPc: $("beltAtmosphereImgPc"),
  beltPcBrandSlot: $("beltPcBrandSlot"),
  beltPcPromise: $("beltPcPromise"),
  beltPcCountdownRow: $("beltPcCountdownRow"),
  beltBg: $("beltBg"),
  beltText1: $("beltText1"),
  beltText2: $("beltText2"),
  beltLogo: $("beltLogo"),
  copyBeltJsonBtn: $("copyBeltJsonBtn"),
  exportFileBtn: $("exportFileBtn"),
  exportAllBtn: $("exportAllBtn"),
  auditProjectName: $("auditProjectName"),
  auditBusinessLine: $("auditBusinessLine"),
  auditActivityType: $("auditActivityType"),
  auditLaunchDate: $("auditLaunchDate"),
  auditSubmitterErp: $("auditSubmitterErp"),
  beltAuditModal: $("beltAuditModal"),
  beltAuditModalBackdrop: $("beltAuditModalBackdrop"),
  beltAuditModalPanel: $("beltAuditModalPanel"),
  beltAuditModalClose: $("beltAuditModalClose"),
  beltAuditStartBtn: $("beltAuditStartBtn"),
  beltAuditFlow: $("beltAuditFlow"),
  beltAuditFlowGateHint: $("beltAuditFlowGateHint"),
  beltAuditResultBadge: $("beltAuditResultBadge"),
  beltAuditMetricGrid: $("beltAuditMetricGrid"),
  beltAuditNextAction: $("beltAuditNextAction"),
  beltAuditIssues: $("beltAuditIssues"),
  beltAuditAdvice: $("beltAuditAdvice"),
  beltAuditManualBtn: $("beltAuditManualBtn"),
  beltAuditPublishBtn: $("beltAuditPublishBtn"),
  beltAuditTrackingBtn: $("beltAuditTrackingBtn"),
  beltAuditDesignerBtn: $("beltAuditDesignerBtn"),
  beltAuditMount2: $("beltAuditMount2"),
  beltAuditMount3: $("beltAuditMount3"),
  beltAuditMountPc: $("beltAuditMountPc"),
  beltOnlineApp: $("beltOnlineApp"),
  beltOnlineMini: $("beltOnlineMini"),
  beltOnlineWeb: $("beltOnlineWeb"),
  beltAuditCopyBtn: $("beltAuditCopyBtn"),
  beltAuditRerunBtn: $("beltAuditRerunBtn"),
  beltAuditManualModal: $("beltAuditManualModal"),
  beltAuditDesignerModal: $("beltAuditDesignerModal"),
  beltAuditContactBtn: $("beltAuditContactBtn"),
  beltAuditSendDesignerBtn: $("beltAuditSendDesignerBtn"),
  beltAuditDesignerThumb: $("beltAuditDesignerThumb"),
  beltAuditDesignerSummary: $("beltAuditDesignerSummary"),
  pdpPreviewBtn: $("pdpPreviewBtn"),
  onlinePreviewBtn: $("onlinePreviewBtn"),
  pdpPreviewModal: $("pdpPreviewModal"),
  pdpModalBackdrop: $("pdpModalBackdrop"),
  pdpModalClose: $("pdpModalClose"),
  pdpModalCloseFoot: $("pdpModalCloseFoot"),
  pdpBeltMount: $("pdpBeltMount"),
  pdpBeltMountMp: $("pdpBeltMountMp"),
  pdpBeltMountWeb: $("pdpBeltMountWeb"),
  pdpBeltVariantHint: $("pdpBeltVariantHint"),
  pdpModalPanel: $("pdpModalPanel"),
  pdpTerminalTabs: document.querySelector(".pdpTerminalTabs"),
  exportHint: $("exportHint"),
  brandHexInput: $("brandHexInput"),
  applyBrandBtn: $("applyBrandBtn"),
  scenarioGrid: $("scenarioGrid"),
  scenarioTunePanel: $("scenarioTunePanel"),
  scenarioTuneMeta: $("scenarioTuneMeta"),
  tuneL: $("tuneL"),
  tuneC: $("tuneC"),
  tuneLVal: $("tuneLVal"),
  tuneCVal: $("tuneCVal"),
  tuneLRange: $("tuneLRange"),
  tuneCRange: $("tuneCRange"),
  tuneResetBtn: $("tuneResetBtn"),
  tunePreviewHex: $("tunePreviewHex"),
  logoLibrary: $("logoLibrary"),
  logoFileInput: $("logoFileInput"),
  selectedLogoName: $("selectedLogoName"),
  beltCoreLines: $("beltCoreMain"),
  beltCoreMain: $("beltCoreMain"),
  beltCoreSub: $("beltCoreSub"),
  beltCoreMini: $("beltCoreMini"),
  beltCoreSubWrap: $("beltCoreSubWrap"),
  beltChevronBrand: $("beltChevronBrand"),
  beltCoreArea: $("beltCoreArea"),
  beltCoreLines3: $("beltCoreMain3"),
  beltCoreMain3: $("beltCoreMain3"),
  beltCoreSub3: $("beltCoreSub3"),
  beltCoreMini3: $("beltCoreMini3"),
  beltCoreSubWrap3: $("beltCoreSubWrap3"),
  beltCoreArea3: $("beltCoreArea3"),
  benefitLibrary: $("benefitLibrary"),
  discountLibrary: $("discountLibrary"),
  selectedDiscountName: $("selectedDiscountName"),
  leftPriceValue: $("leftPriceValue"),
  leftOriginPrice: $("leftOriginPrice"),
  leftDiscountText: $("leftDiscountText"),
  leftDiscountCount: $("leftDiscountCount"),
  leftCountdownText: $("leftCountdownText"),
  leftCountdownCount: $("leftCountdownCount"),
  leftSoldText: $("leftSoldText"),
  leftSoldCount: $("leftSoldCount"),
  leftPriceSummary: $("leftPriceSummary"),
  selectedBenefitName: $("selectedBenefitName"),
  selectedLineCount: $("selectedLineCount"),
  beltLogoAsset: $("beltLogoAsset"),
  appToast: $("appToast"),
  atmoCardsGrid: $("atmoCardsGrid"),
  atmoItemCardsMount: $("atmoItemCardsMount"),
  atmoGalleryEmpty: $("atmoGalleryEmpty"),
  atmoFileInput: $("atmoFileInput"),
  atmoAiRefFileInput: $("atmoAiRefFileInput"),
  atmoAiRefList: $("atmoAiRefList"),
  atmoAiBtn: $("atmoAiBtn"),
  atmoClearBtn: $("atmoClearBtn"),
  atmoPromptComposer: $("atmoPromptComposer"),
  beltAtmosphereImg: $("beltAtmosphereImg"),
  atmoExportMeta: $("atmoExportMeta"),
  atmoPosX: $("atmoPosX"),
  atmoPosY: $("atmoPosY"),
  atmoScale: $("atmoScale"),
  atmoOpacity: $("atmoOpacity"),
  atmoPosXVal: $("atmoPosXVal"),
  atmoPosYVal: $("atmoPosYVal"),
  atmoScaleVal: $("atmoScaleVal"),
  atmoOpacityVal: $("atmoOpacityVal"),
  atmoLayoutResetBtn: $("atmoLayoutResetBtn"),
};

let toastHideTimer = null;
let auditMetaFormBound = false;

const LOGO_STORAGE_KEY = "beltToolUploadedLogos_v1";
const ATMO_STORAGE_KEY = "beltToolAtmosphere_v1";
const ATMO_LIBRARY_KEY = "beltToolAtmosphereLib_v1";
const ATMO_AI_REF_KEY = "beltToolAtmoAiRefs_v1";
const ATMO_AI_REF_MAX = 8;
const ATMO_PROMPT_KEY = "beltToolAtmoPrompt_v1";
const ATMO_PROMPT_VER_KEY = "beltToolAtmoPromptVer_v1";
const ATMO_PROMPT_VER = "v6";
const ATMO_PROMPT_VARS_KEY = "beltToolAtmoPromptVars_v1";
const DEFAULT_ATMO_PROMPT_VARS = {
  brandElement: "",
  graphicStyle: "",
  primaryColor: "",
  secondaryColor: "",
};
const ATMO_PROMPT_TEMPLATE = `根据上传的品牌图，生成一个用于电商商品详情页价格腰带的氛围icon。
以 {品牌元素} 为核心造型灵感，进行抽象化、符号化、几何化重绘，形成一个 {图形风格} 的装饰图形。
图形用于腰带中部偏右区域，尺寸较大，但透明度低，不遮挡文字。
色彩使用 {主色}、{辅助色} 的同色系渐变或单色明度变化。
整体要求：半透明、弱装饰、轻氛围、扁平化、矢量感、促销氛围、电商 UI 风格。
不要复杂细节，不要真实插画，不要 3D，不要完整 logo 复刻，不要喧宾夺主。`;
/** 内置闪电氛围icon：图库常驻 + 默认选中 */
const BUILTIN_ATMO_ID = "atmo-builtin-lightning";
const BUILTIN_ATMO_ASSET = "./assets/belt-atmosphere-lightning.png";
const BUILTIN_ATMO_NAME = "闪电氛围";
/** 未操作腰带信息时的默认展示（促销红 + 618 + 心动购物季 + 又好又便宜） */
const DEFAULT_BELT_IP_IDS = ["logo-618", "logo-billion-subsidy"];
const DEFAULT_BELT_BENEFIT_IDS = ["benefit-slogan-good"];
/** Figma 氛围槽位（两行/三行 375 宽 · PC 442×52） */
const MOBILE_BELT_W = 375;
const MOBILE_BELT_H_TWO = 64;
const MOBILE_BELT_H_THREE = 82;
const MOBILE_ATMO_FIGMA = { left: 237, top: 0, width: 38, height: 54 };
const PC_ATMO_FIGMA = {
  left: 275,
  top: 0,
  width: 38,
  slotHeight: 52,
  imgTop: -2.23,
  imgHeight: 54.45,
};
/** 旧版默认（58% 中心锚点 + 88% 缩放） */
const LEGACY_ATMO_LAYOUT = { x: 58, y: 0, scale: 88, opacity: 100 };
/** 示意图默认：对齐 Figma left 237 / top 0 / 38×54 / 100% */
const DEFAULT_ATMO_LAYOUT = {
  x: Math.round((MOBILE_ATMO_FIGMA.left / MOBILE_BELT_W) * 1000) / 10,
  y: 0,
  scale: 100,
  opacity: 100,
};
const IP_IDS_KEY = "beltToolIpIds_v1";
const BENEFIT_IDS_KEY = "beltToolBenefitIds_v1";
const DISCOUNT_IDS_KEY = "beltToolDiscountIds_v1";
const DISCOUNT_TEXT_KEY = "beltToolDiscountText_v1";
const LEFT_DISCOUNT_TEXT_MAX = 9;
/** 左侧底栏「优惠信息2」文案：与「优惠信息1」对齐，最多 9 字 */
const LEFT_COUNTDOWN_TEXT_MAX = 9;
/** ② 利益点 chip · 倒计时样式（如「距结束 14:05:06」）：保留 16 字以容纳前缀 + HH:MM:SS */
const BENEFIT_COUNTDOWN_TEXT_MAX = 16;
const LEFT_SOLD_TEXT_MAX = 12;
/** @deprecated 旧版左侧倒计时/已售卡片 id → 默认文案 */
const LEGACY_LEFT_COUNTDOWN_TEXT = {
  "left-cd-end": "距结束 14:05:06",
  "left-cd-time": "14:05:06",
  "left-cd-left": "还剩 02:30:00",
};
const LEGACY_LEFT_SOLD_TEXT = {
  "left-sold-999": "已售999+",
  "left-sold-1w": "已售1万+",
  "left-sold-hot": "热卖10万+",
};
const BENEFIT_TEXT_KEY = "beltToolBenefitText_v1";
const LEGACY_DISCOUNT_BENEFIT_IDS = new Set([
  "benefit-coupon2",
  "benefit-multi",
  "benefit-official",
]);
const LEGACY_BENEFIT_TO_DISCOUNT = {
  "benefit-coupon2": "discount-total",
  "benefit-official": "discount-official",
};
const PERIOD_KEY = "beltToolPeriod_v1";
const LEFT_PRICE_KEY = "beltToolLeftPrice_v1";
const DEFAULT_LEFT_PRICE = {
  price: "996.58",
  originPrice: "1080",
  discountText: "官方立减12元",
  countdownText: "立减5元",
  countdownEnabled: true,
  soldText: "已售999+",
  soldEnabled: true,
};
const SCENARIO_ID_KEY = "beltToolScenarioId_v1";
const SCENARIO_LC_KEY = "beltToolScenarioLC_v1";
const AUDIT_META_KEY = "beltToolAuditMeta_v1";

/** IP 优先级（数值越小优先级越高） */
const IP_LEVEL_ORDER = [
  "大促",
  "平台S级",
  "品类日",
  "事业部S级",
  "平台A级",
  "平台B级",
  "品类S级",
  "品类A级",
  "品类B级",
];

const BENEFIT_CATEGORY_ORDER = ["限时功能", "核心优惠", "营销口号"];

const BELT_DISPLAY_RULES = {
  MAX_LINES: 3,
  MAX_BENEFITS: 1,
  MAX_IP_SELECT: 3,
  MAX_IP_PROMO: 3,
  MAX_IP_DAILY: 2,
  MAX_MIND_ENHANCE: 1,
  MAX_CROSS_IP: 2,
  /** 规范图：第 1 行 7 字，第 2/3 行 9 字 */
  LINE_MAX_CHARS: { line1: 7, line2: 9, line3: 9, crossUnit: 4 },
};

/** 利益点：限时功能 / 领券 / 营销口号 */
const BENEFIT_PRESETS = [
  {
    id: "benefit-countdown",
    category: "限时功能",
    label: "倒计时",
    text: "距结束 14:05:06",
    priority: 1,
    benefitStyle: "countdown",
  },
  {
    id: "benefit-coupon",
    category: "核心优惠",
    label: "多件优惠",
    text: "领¥80补贴",
    priority: 2,
    benefitStyle: "coupon",
  },
  { id: "benefit-slogan-good", category: "营销口号", label: "又好又便宜", text: "又好又便宜", priority: 3 },
];

const BENEFIT_COUNTDOWN_ID = "benefit-countdown";

/** 已废弃：优惠信息并入 ② 利益点 · 核心优惠 P2 */
const DISCOUNT_PRESETS = [];

/** @type {{ img?: HTMLImageElement; imageData?: ImageData; imageObjectUrl?: string; selectedBrandHex?: string; palette?: Array<any>; belt?: any; selectedScenarioId?: string | null; scenarioLC?: { L: number; C: number }; selectedIpIds?: string[]; selectedBenefitIds?: string[]; beltPeriod?: 'promo'|'daily'; uploadedLogos?: Array<any>; lastDisplay?: any; beltBgImage?: string; beltBgImageName?: string }} */
const state = {};

const BELT_BG_IMAGE_KEY = "beltToolBeltBgImage_v1";
const BELT_BG_IMAGE_NAME_KEY = "beltToolBeltBgImageName_v1";
const BELT_BG_IMAGE_MAX_BYTES = 4 * 1024 * 1024;

const PDP_TERMINAL_KEY = "beltTool.pdpTerminal";
const PDP_TERMINALS = ["app", "mp", "web"];
const PDP_TERMINAL_LABELS = { app: "App端", mp: "小程序", web: "Web端" };
const PDP_BELT_INNER_CLASS = {
  app: "pdpPhone__beltInner",
  mp: "pdpMp__beltInner",
  web: "pdpWeb__beltInner",
};
const PDP_WEB_DESIGN_W = 1300;
/** Codex PC 腰带稿：442×52（1:1 还原，非 750×107） */
const PC_BELT_DESIGN_W = 442;
const PC_BELT_DESIGN_H = 52;
const PC_BELT_PAD_X = 24;
const PC_BELT_CONTENT_W = PC_BELT_DESIGN_W - PC_BELT_PAD_X * 2;
const PC_BELT_REF_W = PC_BELT_DESIGN_W;
const PC_BELT_STRIP_H = PC_BELT_DESIGN_H;
/** PC 腰带品牌 IP 最多展示 2 个，按 Figma PC 稿横向组合 */
const PC_BELT_MAX_IP = 2;
/** PC 品牌 IP 视觉高度（稿 18px） */
const PC_BELT_LOGO_SVG_HEIGHT = 18;
/** PC 腰带「心动购物季」品牌字标按宽度缩放（5 字 IP 比短 IP 长，避免溢出） */
const PC_BELT_HEART_SEASON_SCALE = 0.8;
let scaledPreviewLayoutRaf = 0;
let pdpWebScaleObserver = null;
let lastPdpWebScaleCw = 0;

/** 内置矢量 Logo（currentColor 染色，与 textPrimary 一致） */
/** 图库缩略图统一字号（与 viewBox 配合，缩放后视觉一致） */
const LOGO_LIB_SVG_TEXT = {
  family: "PingFang SC, Microsoft YaHei, sans-serif",
  size: 14,
  weight: 800,
};
/** viewBox 高度紧贴 font-size，让 svgHeight 直接等于视觉字号高度（避免缩放后字号被压小） */
/** 字标 SVG：viewBox 高度紧贴 font-size，svgHeight 直接等于视觉字号高度 */
const _logoTextSvg = (vbW, text, fontSize = LOGO_LIB_SVG_TEXT.size, y = 11) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} 14" fill="none"><text x="0" y="${y}" font-family="${LOGO_LIB_SVG_TEXT.family}" font-size="${fontSize}" font-weight="${LOGO_LIB_SVG_TEXT.weight}" fill="currentColor">${text}</text></svg>`;
const LOGO_SVG_INLINE = {
  // ① 大促活动
  "logo-double11": _logoTextSvg(36, "双11"),
  "logo-618": _logoTextSvg(32, "618"),
  "logo-heart-season": _logoTextSvg(78, "心动购物季"),
  // ② 平台 IP
  "logo-billion-subsidy": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 20" fill="none"><text x="0" y="16" font-family="${LOGO_LIB_SVG_TEXT.family}" font-size="20" font-weight="${LOGO_LIB_SVG_TEXT.weight}" fill="currentColor">百亿补贴</text></svg>`,
  "logo-billion-subsidy-short": _logoTextSvg(30, "百亿", 14, 11),
  "logo-spring-new": _logoTextSvg(48, "春上新"),
  "logo-reserve-rush": _logoTextSvg(62, "预约抢购"),
  "logo-hot-best": _logoTextSvg(62, "热销爆品"),
};

/** 品牌 IP 图库缩略图 SVG 渲染高度（px） */
const LOGO_LIBRARY_SVG_HEIGHT = 16;
/** 腰带右侧 logo 矢量高度：日常/大促统一（对齐大促三行） */
const BELT_LOGO_SVG_HEIGHTS = [11, 11, 10];

function getBeltLogoSvgHeights(lineCount) {
  return BELT_LOGO_SVG_HEIGHTS.slice(0, Math.max(1, lineCount));
}

/** 品牌 IP 分组：① 大促活动（节点型）② 平台 IP（常驻型） */
const LOGO_CATEGORIES = [
  { id: "promo", label: "大促活动", desc: "节点型 · 双11 / 618 / 心动购物季 · 最多 1 个", limit: 1 },
  { id: "platform", label: "平台 IP", desc: "常驻型 · 百亿补贴 / 春上新 等 · 最多 2 个", limit: 2 },
];
/** 每个品牌 IP 分类的可选上限（与 LOGO_CATEGORIES.limit 一致，单独导出便于调用） */
const LOGO_CATEGORY_LIMITS = LOGO_CATEGORIES.reduce((acc, c) => {
  acc[c.id] = c.limit;
  return acc;
}, {});
function getLogoCategoryLimit(catId) {
  return Number.isFinite(LOGO_CATEGORY_LIMITS[catId]) ? LOGO_CATEGORY_LIMITS[catId] : 2;
}
function getLogoCategoryLabel(catId) {
  return LOGO_CATEGORIES.find((c) => c.id === catId)?.label || "品牌 IP";
}

const BUILTIN_LOGOS = [
  // ① 大促活动（kind=campaign）
  { id: "logo-double11", name: "双11", shortName: "双11", category: "promo", kind: "campaign", intrinsicW: 20, intrinsicH: 11, ipLevel: "大促", vector: true, mindEnhance: false },
  { id: "logo-618", name: "618", shortName: "618", category: "promo", kind: "campaign", intrinsicW: 19, intrinsicH: 11, ipLevel: "大促", vector: true, mindEnhance: false },
  { id: "logo-heart-season", name: "心动购物季", shortName: "心动购物季", category: "promo", kind: "campaign", intrinsicW: 72, intrinsicH: 11, ipLevel: "大促", vector: true, mindEnhance: false },
  // ② 平台 IP（kind=brand）
  {
    id: "logo-billion-subsidy",
    name: "百亿补贴",
    shortName: "百补",
    category: "platform",
    kind: "brand",
    intrinsicW: 57,
    intrinsicH: 11,
    ipLevel: "平台S级",
    vector: true,
    mindEnhance: false,
    enhanceHint: "美妆加赠",
  },
  { id: "logo-spring-new", name: "春上新", shortName: "春上新", category: "platform", kind: "brand", intrinsicW: 38, intrinsicH: 11, ipLevel: "平台A级", vector: true, mindEnhance: false },
  { id: "logo-reserve-rush", name: "预约抢购", shortName: "预约抢购", category: "platform", kind: "brand", intrinsicW: 56, intrinsicH: 11, ipLevel: "平台A级", vector: true, mindEnhance: false },
  { id: "logo-hot-best", name: "热销爆品", shortName: "热销爆品", category: "platform", kind: "brand", intrinsicW: 65, intrinsicH: 11, ipLevel: "平台A级", vector: true, mindEnhance: false },
];

/** 品牌 IP 矢量切图（运行时通过 fetch 加载并覆盖 LOGO_SVG_INLINE） */
const BRAND_IP_SVG_FILES = {
  "logo-double11": "assets/brand-ip/double11.svg",
  "logo-618": "assets/brand-ip/618.svg",
  "logo-heart-season": "assets/brand-ip/heart-season.svg",
  "logo-billion-subsidy": "assets/brand-ip/billion-subsidy.svg",
  "logo-billion-subsidy-short": "assets/brand-ip/billion-subsidy-short.svg",
  "logo-spring-new": "assets/brand-ip/spring-new.svg",
  "logo-reserve-rush": "assets/brand-ip/reserve-rush.svg",
  "logo-hot-best": "assets/brand-ip/hot-best.svg",
};

/**
 * 品牌 IP 组合规则（参考 docs/brand-ip-logo-composition-rules.md）
 * - 单 Logo：14px 单行；最大宽度 90px
 * - 双 Logo：每行 11px，行距 4px
 * - 三 Logo：上 campaign，下两个 brand 用 x icon 连接
 */
const BRAND_IP_COMBO_RULES = {
  slotWidth: 90,
  overflowWidth: 91,
  singleHeight: 14,
  rowHeight: 11,
  rowGap: 4,
  comboHeight: 27,
  xSize: 6,
  xGap: 2,
};

const BILLION_SUBSIDY_LOGO_ID = "logo-billion-subsidy";
const BILLION_SUBSIDY_SHORT_LOGO = {
  id: "logo-billion-subsidy-short",
  sourceLogoId: BILLION_SUBSIDY_LOGO_ID,
  name: "百亿补贴",
  shortName: "百亿",
  category: "platform",
  kind: "brand",
  intrinsicW: 30,
  intrinsicH: 14,
  ipLevel: "平台S级",
  vector: true,
  mindEnhance: false,
  comboFallback: true,
};

function getLogoKind(logo) {
  if (!logo) return "brand";
  if (logo.kind === "campaign" || logo.kind === "brand") return logo.kind;
  return getLogoCategoryId(logo) === "promo" ? "campaign" : "brand";
}

/**
 * 按 SVG 切图规则选择展示模式。
 * 输入按用户选择顺序的 logos，输出 'empty' | 'single' | 'double' | 'triple'
 */
function resolveBrandIpComboMode(logos) {
  const list = Array.isArray(logos) ? logos.filter(Boolean) : [];
  if (!list.length) return "empty";
  if (list.length === 1) return "single";
  const campaigns = list.filter((l) => getLogoKind(l) === "campaign");
  const brands = list.filter((l) => getLogoKind(l) === "brand");
  if (campaigns.length >= 1 && brands.length >= 2) return "triple";
  if (campaigns.length >= 1 && brands.length === 1) return "double";
  if (brands.length === 2) return "double";
  return "single";
}

/** 把组合规则拆出来便于复用：先 campaign 后 brand，最多 1 + 2 */
function pickBrandIpComboLogos(logos) {
  const list = Array.isArray(logos) ? logos.filter(Boolean) : [];
  const campaign = list.find((l) => getLogoKind(l) === "campaign") || null;
  const brands = list.filter((l) => getLogoKind(l) === "brand").slice(0, 2);
  return { campaign, brands };
}

function getLogoDisplayWidth(logo, height = BRAND_IP_COMBO_RULES.rowHeight) {
  const w = Number(logo?.intrinsicW);
  const h = Number(logo?.intrinsicH);
  if (w > 0 && h > 0) return (w / h) * height;
  return BRAND_IP_COMBO_RULES.slotWidth;
}

function getTripleRow2Width(brands) {
  const [a, b] = brands || [];
  if (!a || !b) return 0;
  return (
    getLogoDisplayWidth(a, BRAND_IP_COMBO_RULES.rowHeight) +
    getLogoDisplayWidth(b, BRAND_IP_COMBO_RULES.rowHeight) +
    BRAND_IP_COMBO_RULES.xSize +
    BRAND_IP_COMBO_RULES.xGap * 2
  );
}

function isBillionSubsidyLogo(logo) {
  return logo?.id === BILLION_SUBSIDY_LOGO_ID || logo?.sourceLogoId === BILLION_SUBSIDY_LOGO_ID;
}

function normalizeTripleBrandLogos(brands, warnings = []) {
  const pair = (brands || []).filter(Boolean).slice(0, 2);
  if (pair.length < 2) return { brands: pair, overflow: false, replaced: false, width: getTripleRow2Width(pair) };

  let next = pair;
  let width = getTripleRow2Width(next);
  let replaced = false;
  if (width > BRAND_IP_COMBO_RULES.overflowWidth) {
    const idx = next.findIndex(isBillionSubsidyLogo);
    if (idx >= 0) {
      next = [...next];
      next[idx] = { ...BILLION_SUBSIDY_SHORT_LOGO };
      replaced = true;
      width = getTripleRow2Width(next);
      warnings.push("三 logo 第二行超宽，百亿补贴已切换为 2 字版 logo");
    }
  }

  const overflow = width > BRAND_IP_COMBO_RULES.overflowWidth;
  if (overflow) {
    warnings.push("三 logo 第二行 logo 宽度超过 91px，logo 放不下，请减少组合或更换更短品牌 IP");
  }
  return { brands: next, overflow, replaced, width };
}

/** 生成同页面唯一的 SVG id 前缀（避免 mask/clipPath 等被其它实例覆盖） */
let _brandIpSvgCounter = 0;
function uniquifyBrandIpSvgIds(svgEl) {
  if (!svgEl) return svgEl;
  const ids = new Set();
  svgEl.querySelectorAll("[id]").forEach((n) => {
    const id = n.getAttribute("id");
    if (id) ids.add(id);
  });
  if (!ids.size) return svgEl;
  const prefix = `bipc${++_brandIpSvgCounter}`;
  const rename = (old) => `${prefix}-${old}`;
  ids.forEach((id) => {
    svgEl.querySelectorAll(`[id="${id}"]`).forEach((n) => n.setAttribute("id", rename(id)));
  });
  svgEl.querySelectorAll("*").forEach((node) => {
    for (const attr of Array.from(node.attributes)) {
      let v = attr.value;
      if (!v || !v.includes("#")) continue;
      let changed = false;
      ids.forEach((id) => {
        if (v.includes(`#${id}`)) {
          v = v.split(`#${id}`).join(`#${rename(id)}`);
          changed = true;
        }
      });
      if (changed) node.setAttribute(attr.name, v);
    }
  });
  return svgEl;
}

/** 渲染 brand-ip-combo 容器：single / double / triple 三种排版模式 */
function renderBrandIpCombo(container, logos, opts = {}) {
  if (!container) return;
  container.innerHTML = "";
  container.classList.remove(
    "brand-ip-combo--empty",
    "brand-ip-combo--single",
    "brand-ip-combo--double",
    "brand-ip-combo--triple",
  );
  if (!container.classList.contains("brand-ip-combo")) {
    container.classList.add("brand-ip-combo");
  }
  const tint = opts.tint || "#ffffff";
  container.style.color = tint;
  const list = Array.isArray(logos) ? logos.filter(Boolean) : [];
  const mode = resolveBrandIpComboMode(list);
  container.classList.add(`brand-ip-combo--${mode}`);
  if (mode === "empty") return;

  const mountInto = (parent, logo, height) => {
    if (!logo) return;
    const markup = getLogoSvgMarkup(logo);
    if (markup) {
      try {
        const tinted = tintSvgMarkup(markup, tint);
        const doc = new DOMParser().parseFromString(tinted, "image/svg+xml");
        const svgEl = doc.documentElement;
        if (svgEl && svgEl.nodeName.toLowerCase() === "svg" && !doc.querySelector("parsererror")) {
          svgEl.removeAttribute("width");
          svgEl.removeAttribute("height");
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
          if (logo.name) svgEl.setAttribute("aria-label", logo.name);
          uniquifyBrandIpSvgIds(svgEl);
          const wrap = document.createElement("span");
          wrap.className = "brand-ip-combo__svg";
          wrap.style.height = `${height}px`;
          wrap.appendChild(svgEl);
          parent.appendChild(wrap);
          return;
        }
      } catch {
        /* fallback below */
      }
    }
    const span = document.createElement("span");
    span.className = "brand-ip-combo__fallback";
    span.style.height = `${height}px`;
    span.style.lineHeight = `${height}px`;
    span.style.color = tint;
    span.textContent = logo.shortName || logo.name || "IP";
    parent.appendChild(span);
  };

  const { campaign, brands: pickedBrands } = pickBrandIpComboLogos(list);
  let brands = pickedBrands;
  let tripleMeta = { overflow: false, replaced: false, width: 0 };
  if (mode === "triple") {
    const warnings = [];
    tripleMeta = normalizeTripleBrandLogos(brands, warnings);
    brands = tripleMeta.brands;
    container.classList.toggle("brand-ip-combo--overflow", tripleMeta.overflow);
    container.classList.toggle("brand-ip-combo--billion-short", tripleMeta.replaced);
    if (warnings.length) {
      container.dataset.warning = warnings[warnings.length - 1];
      container.title = warnings.join("；");
    } else {
      delete container.dataset.warning;
      container.removeAttribute("title");
    }
  } else {
    container.classList.remove("brand-ip-combo--overflow", "brand-ip-combo--billion-short");
    delete container.dataset.warning;
    container.removeAttribute("title");
  }

  if (mode === "single") {
    const only = campaign || brands[0];
    mountInto(container, only, BRAND_IP_COMBO_RULES.singleHeight);
    return;
  }

  if (mode === "double") {
    const row1 = document.createElement("div");
    row1.className = "brand-ip-combo__line";
    const row2 = document.createElement("div");
    row2.className = "brand-ip-combo__line";
    const a = campaign || brands[0];
    const b = campaign ? brands[0] : brands[1];
    mountInto(row1, a, BRAND_IP_COMBO_RULES.rowHeight);
    mountInto(row2, b, BRAND_IP_COMBO_RULES.rowHeight);
    container.append(row1, row2);
    return;
  }

  // triple
  const row1 = document.createElement("div");
  row1.className = "brand-ip-combo__line";
  const row2 = document.createElement("div");
  row2.className = "brand-ip-combo__line brand-ip-combo__line--row2";
  mountInto(row1, campaign, BRAND_IP_COMBO_RULES.rowHeight);
  mountInto(row2, brands[0], BRAND_IP_COMBO_RULES.rowHeight);
  const xIcon = document.createElement("span");
  xIcon.className = "brand-ip-combo__x";
  xIcon.setAttribute("aria-hidden", "true");
  xIcon.innerHTML = `<svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5M5 1L1 5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>`;
  row2.appendChild(xIcon);
  mountInto(row2, brands[1], BRAND_IP_COMBO_RULES.rowHeight);
  container.append(row1, row2);
}

/** 在启动时异步拉取 7 个 SVG 切图覆盖默认字符版 LOGO_SVG_INLINE */
async function preloadBrandIpSvgs() {
  const tasks = Object.entries(BRAND_IP_SVG_FILES).map(async ([id, file]) => {
    try {
      const res = await fetch(file, { cache: "no-cache" });
      if (!res.ok) return false;
      const text = await res.text();
      if (text && /<svg/i.test(text)) {
        LOGO_SVG_INLINE[id] = text;
        return true;
      }
    } catch {
      /* 静默失败，保留字符 fallback */
    }
    return false;
  });
  const results = await Promise.all(tasks);
  return results.some(Boolean);
}

function getLogoCategoryId(logo) {
  if (!logo) return "platform";
  if (logo.category) return logo.category;
  if (logo.uploaded) return logo.uploadCategory || "platform";
  return "platform";
}

/**
 * 业务场景色：H/L/C 为 OKLCH 安全区间；default 为区间内推荐默认值（可微调 L、C）。
 * range.L / range.C 为 [min, max]；range.h 为 [min, max]（色相固定，展示用）。
 */
const SCENARIOS = [
  {
    id: "h-red-promo",
    hueLabel: "H 0°–20° / 340°–360°",
    mind: "促销 · 秒杀",
    use: "心动购物季、国家补贴、限时直降",
    range: { h: [0, 20], L: [0.52, 0.6], C: [0.18, 0.24] },
    default: { L: 0.58, C: 0.21, h: 26 },
    textOnDark: "white",
  },
  {
    id: "h-orange-activity",
    hueLabel: "H 20°–45°",
    mind: "特配 · 团买",
    use: "满减、优惠券、补贴",
    range: { h: [20, 45], L: [0.54, 0.62], C: [0.18, 0.24] },
    default: { L: 0.58, C: 0.21, h: 32 },
  },
  {
    id: "h-yellow-biz",
    hueLabel: "H 60°–80° · 14 亮黄类",
    mind: "外卖",
    use: "京东外卖（亮黄底 · 黑字）",
    // 参考腰带：底 #FFD44C → L≈0.884 C≈0.155；浅黄底用黑字
    range: { h: [60, 95], L: [0.6, 0.9], C: [0.14, 0.18] },
    default: { L: 0.884, C: 0.155, h: 91 },
    logoOnLight: "black",
  },
  {
    id: "h-green-activity",
    hueLabel: "H 140°–160°",
    mind: "超市 · 生鲜 · 健康",
    use: "饮料、鲜花、医药",
    range: { h: [140, 160], L: [0.48, 0.58], C: [0.14, 0.22] },
    default: { L: 0.53, C: 0.18, h: 150 },
  },
  {
    id: "h-cyan-travel",
    hueLabel: "H 170°–200°",
    mind: "酒旅 · 度假",
    use: "酒店、机票",
    range: { h: [170, 200], L: [0.52, 0.6], C: [0.14, 0.22] },
    default: { L: 0.56, C: 0.18, h: 185 },
  },
  {
    id: "h-blue-enterprise",
    hueLabel: "H 210°–240°",
    mind: "企业 · 信任",
    use: "企业服务、酒旅",
    range: { h: [210, 240], L: [0.54, 0.6], C: [0.14, 0.22] },
    default: { L: 0.57, C: 0.18, h: 225 },
  },
  {
    id: "h-purple-night",
    hueLabel: "H 260°–300°",
    mind: "强营销 · 夜间",
    use: "旅游、深夜大促",
    range: { h: [260, 300], L: [0.54, 0.62], C: [0.18, 0.24] },
    default: { L: 0.58, C: 0.21, h: 280 },
  },
  {
    id: "h-pink-special",
    hueLabel: "H 300°–340°",
    mind: "丽人 · 特惠",
    use: "奥莱、母亲节、520",
    range: { h: [300, 340], L: [0.56, 0.64], C: [0.18, 0.24] },
    default: { L: 0.6, C: 0.21, h: 320 },
  },
  {
    id: "achromatic-luxury",
    hueLabel: "H 40°–60° · 13 棕金类",
    mind: "高端 · 会员 · 礼盒",
    use: "尊享会员（深黑底 · 香槟金字）",
    // 腰带底深黑；文字/Logo 参考奢品腰带 #E5C191 → L≈0.831 C≈0.075 h≈74°
    range: { h: [40, 60], L: [0.04, 0.14], C: [0, 0.06] },
    default: { L: 0.06, C: 0.015, h: 54 },
    textOnDark: "goldBrown",
    textAccent: { L: 0.831, C: 0.075, h: 74.4 },
  },
];

function getScenarioById(id) {
  return SCENARIOS.find((s) => s.id === id);
}

function getScenarioOklch(s, L, C) {
  const Lc = clamp(L ?? s.default.L, s.range.L[0], s.range.L[1]);
  const Cc = clamp(C ?? s.default.C, s.range.C[0], s.range.C[1]);
  return { L: Lc, C: Cc, h: s.default.h };
}

function getScenarioHex(s, L, C) {
  const hex = oklchToHex(getScenarioOklch(s, L, C));
  return parseBrandColorInput(hex) || "#DB3012";
}

function loadScenarioLCMap() {
  try {
    const raw = localStorage.getItem(SCENARIO_LC_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveScenarioLC(scenarioId, L, C) {
  try {
    const map = loadScenarioLCMap();
    map[scenarioId] = { L: round(L, 3), C: round(C, 3) };
    localStorage.setItem(SCENARIO_LC_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

function resolveScenarioLC(s) {
  const map = loadScenarioLCMap();
  const saved = map[s.id];
  if (saved && Number.isFinite(saved.L) && Number.isFinite(saved.C)) {
    return {
      L: clamp(saved.L, s.range.L[0], s.range.L[1]),
      C: clamp(saved.C, s.range.C[0], s.range.C[1]),
    };
  }
  return { L: s.default.L, C: s.default.C };
}

function updateActiveScenarioChipSwatch() {
  if (!els.scenarioGrid || !state.selectedScenarioId) return;
  const sc = getScenarioById(state.selectedScenarioId);
  if (!sc) return;
  const lc = state.scenarioLC || resolveScenarioLC(sc);
  const hex = getScenarioHex(sc, lc.L, lc.C);
  const btn = els.scenarioGrid.querySelector(
    `[data-scenario-id="${state.selectedScenarioId}"]`,
  );
  if (!btn) return;
  const sw = btn.querySelector(".scenarioChip__swatch");
  if (sw) sw.style.background = hex;
}

function loadUploadedLogos() {
  try {
    const raw = localStorage.getItem(LOGO_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUploadedLogos(list) {
  try {
    localStorage.setItem(LOGO_STORAGE_KEY, JSON.stringify(list.slice(0, 12)));
  } catch {
    setExportHint("上传 Logo 过多或过大，无法全部保存到本机");
  }
}

function normalizeAtmoLayout(layout) {
  const d = DEFAULT_ATMO_LAYOUT;
  const x = Number(layout?.x);
  const y = Number(layout?.y);
  const scale = Number(layout?.scale);
  const opacity = Number(layout?.opacity);
  return {
    x: Number.isFinite(x) ? clamp(x, 0, 100) : d.x,
    y: Number.isFinite(y) ? clamp(y, 0, 100) : d.y,
    scale: Number.isFinite(scale) ? clamp(scale, 30, 150) : d.scale,
    opacity: Number.isFinite(opacity) ? clamp(opacity, 0, 100) : d.opacity,
  };
}

function isAtmoLayoutFigmaDefault(layout) {
  const l = normalizeAtmoLayout(layout);
  return (
    Math.abs(l.x - DEFAULT_ATMO_LAYOUT.x) < 0.6 &&
    l.y === DEFAULT_ATMO_LAYOUT.y &&
    l.scale === DEFAULT_ATMO_LAYOUT.scale &&
    l.opacity === DEFAULT_ATMO_LAYOUT.opacity
  );
}

function isLegacyAtmoLayout(layout) {
  const l = layout || {};
  return l.x === LEGACY_ATMO_LAYOUT.x && l.y === 0 && l.scale === LEGACY_ATMO_LAYOUT.scale;
}

/** 旧版纵向居中(y=50) / 58%+88% 缩放 → 迁移为 Figma 默认 */
function migrateAtmosphereLayoutIfNeeded(atmo) {
  if (!atmo?.layout) return atmo;
  let layout = { ...atmo.layout };
  let changed = false;
  if (layout.y === 50) {
    layout.y = 0;
    changed = true;
  }
  if (isLegacyAtmoLayout(layout)) {
    layout = { ...DEFAULT_ATMO_LAYOUT };
    changed = true;
  }
  return changed ? { ...atmo, layout } : atmo;
}

function getAtmosphereLayout() {
  return normalizeAtmoLayout(state.atmosphereImage?.layout);
}

function setAtmosphereLayout(layout, { persist = true } = {}) {
  if (!state.atmosphereImage?.src) return;
  state.atmosphereImage.layout = normalizeAtmoLayout({
    ...getAtmosphereLayout(),
    ...layout,
  });
  if (persist) saveAtmosphereImage(state.atmosphereImage);
  applyAtmosphereToPreview();
  syncAtmosphereLayoutControls();
  if (state.belt?.atmosphereImage) {
    state.belt.atmosphereImage = { ...state.atmosphereImage };
  }
}

function loadAtmosphereImage() {
  try {
    const raw = localStorage.getItem(ATMO_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data?.src) return null;
    const migrated = migrateAtmosphereLayoutIfNeeded(data);
    const normalized = {
      ...migrated,
      layout: normalizeAtmoLayout(migrated.layout),
    };
    if (migrated !== data) {
      saveAtmosphereImage(normalized);
    }
    return normalized;
  } catch {
    return null;
  }
}

function saveAtmosphereImage(data) {
  try {
    if (!data?.src) {
      localStorage.removeItem(ATMO_STORAGE_KEY);
      return;
    }
    localStorage.setItem(ATMO_STORAGE_KEY, JSON.stringify(data));
  } catch {
    setExportHint("氛围icon过大，无法保存到本机");
  }
}

const LEGACY_ATMO_LIBRARY_KEYS = [
  "beltToolAtmoUploads_v1",
  "beltToolAtmosphereUploads_v1",
  "beltToolAtmoGallery_v1",
];

function normalizeAtmosphereLibraryItem(item) {
  if (!item) return null;
  if (isBuiltinLightningAtmosphere(item)) {
    return {
      id: BUILTIN_ATMO_ID,
      src: resolveBuiltinLightningSrc(),
      name: BUILTIN_ATMO_NAME,
      source: "builtin",
    };
  }
  if (!item.src) return null;
  const id =
    item.id ||
    item.libraryId ||
    `atmo-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  return {
    id,
    src: item.src,
    name: item.name || "氛围icon",
    source: item.source || "upload",
  };
}

/** 将当前选中的氛围icon并入图库（避免仅存在 ATMO_STORAGE 而未写入图库） */
function mergeActiveAtmosphereIntoLibrary() {
  const active = state.atmosphereImage;
  if (!active?.src) return;
  state.uploadedAtmospheres = state.uploadedAtmospheres || [];
  const inLib = state.uploadedAtmospheres.some(
    (x) => x.id === active.libraryId || x.src === active.src,
  );
  if (inLib) return;
  const normalized = normalizeAtmosphereLibraryItem({
    id: active.libraryId,
    src: active.src,
    name: active.name,
    source: active.source || "custom",
  });
  if (!normalized) return;
  state.uploadedAtmospheres.unshift(normalized);
  saveAtmosphereLibrary(state.uploadedAtmospheres);
}

function loadAtmosphereLibrary() {
  let loaded = [];
  try {
    const raw = localStorage.getItem(ATMO_LIBRARY_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    if (Array.isArray(arr) && arr.length) {
      loaded = arr.map(normalizeAtmosphereLibraryItem).filter(Boolean).slice(0, 16);
    }
  } catch {
    /* ignore */
  }
  if (!loaded.length) {
    for (const key of LEGACY_ATMO_LIBRARY_KEYS) {
      try {
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(arr) || !arr.length) continue;
        loaded = arr.map(normalizeAtmosphereLibraryItem).filter(Boolean).slice(0, 16);
        if (loaded.length) break;
      } catch {
        /* ignore */
      }
    }
  }
  return mergeBuiltinLightningIntoLibrary(loaded);
}

function getBuiltinLightningPersistStub() {
  return {
    id: BUILTIN_ATMO_ID,
    name: BUILTIN_ATMO_NAME,
    source: "builtin",
    src: "builtin:regenerate",
  };
}

function saveAtmosphereLibrary(list) {
  const rest = (list || [])
    .filter((x) => x && !isBuiltinLightningAtmosphere(x))
    .slice(0, 15);
  const persistPayload = [getBuiltinLightningPersistStub(), ...rest];
  try {
    localStorage.setItem(ATMO_LIBRARY_KEY, JSON.stringify(persistPayload));
  } catch {
    setExportHint("氛围icon库过大，无法全部保存到本机");
  }
  state.uploadedAtmospheres = mergeBuiltinLightningIntoLibrary(
    persistPayload.map(normalizeAtmosphereLibraryItem).filter(Boolean),
  );
}

function loadAtmoPromptVars() {
  try {
    const ver = localStorage.getItem(ATMO_PROMPT_VER_KEY);
    if (ver !== ATMO_PROMPT_VER) {
      localStorage.setItem(ATMO_PROMPT_VER_KEY, ATMO_PROMPT_VER);
      return { ...DEFAULT_ATMO_PROMPT_VARS };
    }
    const raw = localStorage.getItem(ATMO_PROMPT_VARS_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      return {
        brandElement: String(data.brandElement ?? ""),
        graphicStyle: String(data.graphicStyle ?? ""),
        primaryColor: String(data.primaryColor ?? ""),
        secondaryColor: String(data.secondaryColor ?? ""),
      };
    }
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_ATMO_PROMPT_VARS };
}

function saveAtmoPromptVars(vars) {
  try {
    localStorage.setItem(ATMO_PROMPT_VARS_KEY, JSON.stringify(vars || DEFAULT_ATMO_PROMPT_VARS));
    localStorage.setItem(ATMO_PROMPT_KEY, buildResolvedAtmoPromptFromVars(vars));
  } catch {
    /* ignore */
  }
}

function getAtmoPromptVarsFromUI() {
  const vars = { ...DEFAULT_ATMO_PROMPT_VARS };
  if (!els.atmoPromptComposer) return vars;
  els.atmoPromptComposer.querySelectorAll("[data-atmo-var]").forEach((input) => {
    const key = input.dataset.atmoVar;
    if (key && key in vars) vars[key] = input.value.trim();
  });
  return vars;
}

function atmoVarSizerText(input) {
  const val = String(input?.value ?? "");
  if (val) return val;
  const ph = String(input?.placeholder ?? "")
    .replace(/^\{|\}$/g, "")
    .trim();
  return ph || "\u00a0";
}

function ensureAtmoPromptVarSizer(input) {
  const wrap = input?.closest?.(".atmoPromptVarWrap");
  if (!wrap) return null;
  let sizer = wrap.querySelector(".atmoPromptVarSizer");
  if (!sizer) {
    sizer = document.createElement("span");
    sizer.className = "atmoPromptVarSizer";
    if (input.classList.contains("atmoPromptVar--color")) {
      sizer.classList.add("atmoPromptVarSizer--color");
    }
    sizer.setAttribute("aria-hidden", "true");
    wrap.insertBefore(sizer, input);
  }
  return sizer;
}

function fitAtmoPromptVarInput(input) {
  const sizer = ensureAtmoPromptVarSizer(input);
  if (!sizer) return;
  sizer.textContent = atmoVarSizerText(input);
}

function syncAtmoPromptVarWidths(root) {
  const scope = root || els.atmoPromptComposer;
  if (!scope) return;
  scope.querySelectorAll("[data-atmo-var]").forEach(fitAtmoPromptVarInput);
}

function writeAtmoVarsToUI(vars) {
  const v = vars || DEFAULT_ATMO_PROMPT_VARS;
  if (!els.atmoPromptComposer) return;
  els.atmoPromptComposer.querySelectorAll("[data-atmo-var]").forEach((input) => {
    const key = input.dataset.atmoVar;
    if (key && key in v) input.value = v[key] || "";
  });
  syncAtmoPromptVarWidths();
}

function getAtmoPromptContext() {
  const ui = getAtmoPromptVarsFromUI();
  const inferred = getAtmoPromptBrandContext();
  return {
    brandElement: ui.brandElement || inferred.brandElement,
    graphicStyle: ui.graphicStyle || inferred.graphicStyle,
    primaryColor: ui.primaryColor || inferred.primaryColor,
    secondaryColor: ui.secondaryColor || inferred.secondaryColor,
  };
}

function buildResolvedAtmoPromptFromVars(vars) {
  return fillAtmoPromptTemplate(ATMO_PROMPT_TEMPLATE, vars || getAtmoPromptContext());
}

function buildResolvedAtmoPrompt() {
  return buildResolvedAtmoPromptFromVars(getAtmoPromptContext());
}

function onAtmoPromptVarsChange() {
  const vars = getAtmoPromptVarsFromUI();
  state.atmoPromptVars = vars;
  saveAtmoPromptVars(vars);
}

function inferAtmoGraphicStyle() {
  const sc = getScenarioById(state.selectedScenarioId);
  const mind = sc?.mind || "";
  if (/秒杀|促销|大促|心动/.test(mind)) return "抽象几何光效与斜切折线";
  if (/外卖|亮黄/.test(mind)) return "轻快波浪与箭头曲线";
  if (/奢|夜间|强营销/.test(mind)) return "星芒光晕与细线几何";
  if (/企业|信任|酒旅/.test(mind)) return "稳重折线网格与流线";
  if (/生鲜|健康|超市/.test(mind)) return "圆润叶片与弧线符号";
  return "抽象几何光效与流线装饰";
}

function getAtmoPromptBrandContext() {
  const belt = state.belt || {};
  const brandHex = normalizeHex(state.selectedBrandHex || belt.brand) || "#E1251B";
  const primary = belt.textPrimary || brandHex;
  let secondary = belt.textSecondary;
  if (!secondary || normalizeHex(secondary) === brandHex) {
    const palette = state.palette || [];
    const alt = palette.find((p) => normalizeHex(p.hex) !== brandHex);
    secondary = alt?.hex || brandHex;
  }
  const ipLabels = (state.selectedIpIds || [])
    .map((id) => getLogoById(id))
    .filter(Boolean)
    .map((l) => l.shortName || l.name);
  let brandElement = ipLabels.join("、");
  if (!brandElement && state.palette?.length) {
    const top = state.palette.slice(0, 2).map((p) => p.hex);
    brandElement = `品牌图提取色 ${top.join(" / ")} 的抽象符号`;
  }
  if (!brandElement) {
    const sc = getScenarioById(state.selectedScenarioId);
    brandElement = sc?.use?.split("、")[0] || sc?.mind || "电商促销品牌主视觉";
  }
  return {
    brandElement,
    graphicStyle: inferAtmoGraphicStyle(),
    primaryColor: primary,
    secondaryColor: secondary,
  };
}

function fillAtmoPromptTemplate(template, ctx) {
  const c = ctx || getAtmoPromptBrandContext();
  return String(template || ATMO_PROMPT_TEMPLATE)
    .replace(/\{品牌元素\}/g, c.brandElement)
    .replace(/\{图形风格\}/g, c.graphicStyle)
    .replace(/\{主色\}/g, c.primaryColor)
    .replace(/\{辅助色\}/g, c.secondaryColor);
}

function applyAtmoPromptFromBrand({ save = true, hint = true } = {}) {
  const inferred = getAtmoPromptBrandContext();
  writeAtmoVarsToUI(inferred);
  state.atmoPromptVars = getAtmoPromptVarsFromUI();
  if (save) saveAtmoPromptVars(state.atmoPromptVars);
  if (hint) {
    setExportHint(
      state.selectedBrandHex
        ? "已根据品牌图/色板填充可编辑标签"
        : "请先上传品牌图并提取色板，再填充标签",
    );
  }
  return buildResolvedAtmoPrompt();
}

function fillAtmoPromptFromBrandIfEmpty() {
  const ui = getAtmoPromptVarsFromUI();
  const empty = !Object.values(ui).some(Boolean);
  if (empty) applyAtmoPromptFromBrand({ save: true, hint: false });
}

function resetAtmoPromptFromTemplate() {
  writeAtmoVarsToUI({ ...DEFAULT_ATMO_PROMPT_VARS });
  state.atmoPromptVars = { ...DEFAULT_ATMO_PROMPT_VARS };
  saveAtmoPromptVars(state.atmoPromptVars);
  applyAtmoPromptFromBrand({ hint: false });
  setExportHint("已恢复模板并重新填充可编辑标签");
}

function resolveAtmoPromptForGenerate() {
  return buildResolvedAtmoPrompt();
}

function bindAtmoPromptComposer() {
  if (!els.atmoPromptComposer) return;
  els.atmoPromptComposer.querySelectorAll("[data-atmo-var]").forEach((input) => {
    ensureAtmoPromptVarSizer(input);
    fitAtmoPromptVarInput(input);
    input.addEventListener("input", () => {
      fitAtmoPromptVarInput(input);
      onAtmoPromptVarsChange();
    });
    input.addEventListener("change", onAtmoPromptVarsChange);
  });
}

function initAtmoPromptUI() {
  state.atmoPromptVars = loadAtmoPromptVars();
  const empty = !Object.values(state.atmoPromptVars).some(Boolean);
  if (empty) {
    state.atmoPromptVars = getAtmoPromptBrandContext();
    saveAtmoPromptVars(state.atmoPromptVars);
  }
  writeAtmoVarsToUI(state.atmoPromptVars);
  bindAtmoPromptComposer();
}

function isAtmosphereFileOk(file) {
  return /image\/(png|webp|svg\+xml)|\.(png|webp|svg)$/i.test(file?.type || file?.name || "");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function createAtmosphereLibraryId() {
  return `atmo-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function upsertAtmosphereLibraryItem(item) {
  state.uploadedAtmospheres = state.uploadedAtmospheres || [];
  const idx = state.uploadedAtmospheres.findIndex((x) => x.id === item.id);
  if (idx >= 0) state.uploadedAtmospheres[idx] = item;
  else state.uploadedAtmospheres.unshift(item);
  state.uploadedAtmospheres = state.uploadedAtmospheres.slice(0, 16);
  saveAtmosphereLibrary(state.uploadedAtmospheres);
}

function removeAtmosphereLibraryItem(id) {
  if (id === BUILTIN_ATMO_ID) return;
  state.uploadedAtmospheres = (state.uploadedAtmospheres || []).filter((x) => x.id !== id);
  saveAtmosphereLibrary(state.uploadedAtmospheres);
  const activeId = state.atmosphereImage?.libraryId;
  if (activeId === id) {
    const next = state.uploadedAtmospheres[0];
    if (next) selectAtmosphereLibraryItem(next.id);
    else clearAtmosphereImage();
  }
  renderAtmosphereCards();
}

function getAtmosphereSourceLabel(source) {
  if (source === "upload") return "本地上传";
  if (source === "ai") return "AI 生成";
  if (source === "builtin") return "内置示例";
  return "氛围icon";
}

/** 本地 Canvas 生成闪电 PNG（assets 缺失时仍可预览） */
function createBuiltinLightningDataUrl(beltBg = "#db3012") {
  try {
    return generateAtmosphereFromPrompt("闪电氛围 lightning bolt", beltBg);
  } catch (err) {
    console.error("内置闪电生成失败", err);
    return null;
  }
}

/** Canvas 不可用时的兜底 SVG（保证图库始终能展示闪电卡片） */
const BUILTIN_LIGHTNING_SVG_FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 64"><path fill="rgba(58,58,60,0.92)" d="M52 4 38 30h12L34 60l28-36H48L52 4z"/></svg>',
  );

function resolveBuiltinLightningSrc(beltBg) {
  return BUILTIN_ATMO_ASSET;
}

/** assets 加载失败时的离线兜底（Canvas → SVG） */
function resolveBuiltinLightningFallbackSrc(beltBg) {
  const bg = beltBg || state.belt?.beltBg || state.selectedBrandHex || "#db3012";
  return createBuiltinLightningDataUrl(bg) || BUILTIN_LIGHTNING_SVG_FALLBACK;
}

function getBuiltinLightningAtmosphereItem(beltBg) {
  return {
    id: BUILTIN_ATMO_ID,
    src: resolveBuiltinLightningSrc(beltBg),
    name: BUILTIN_ATMO_NAME,
    source: "builtin",
  };
}

/** 保证预览时有默认 IP / 利益点（右侧核心文案不空） */
function ensureDefaultBeltContentIfEmpty() {
  let changed = false;
  if (!Array.isArray(state.selectedIpIds) || !state.selectedIpIds.length) {
    state.selectedIpIds = enforceLogoCategoryLimits([...DEFAULT_BELT_IP_IDS]);
    saveSelectedIpIds(state.selectedIpIds);
    changed = true;
  } else {
    const trimmed = enforceLogoCategoryLimits(state.selectedIpIds);
    if (trimmed.length !== state.selectedIpIds.length) {
      state.selectedIpIds = trimmed;
      saveSelectedIpIds(trimmed);
      changed = true;
    }
  }
  if (!Array.isArray(state.selectedBenefitIds) || !state.selectedBenefitIds.length) {
    state.selectedBenefitIds = [...DEFAULT_BELT_BENEFIT_IDS];
    saveSelectedBenefitIds(state.selectedBenefitIds);
    changed = true;
  }
  return changed;
}

function isBuiltinLightningAtmosphere(item) {
  return item?.id === BUILTIN_ATMO_ID || item?.source === "builtin";
}

/** 图库始终保留内置闪电（放在首位，上传卡之后） */
function mergeBuiltinLightningIntoLibrary(list) {
  const builtin = getBuiltinLightningAtmosphereItem();
  const rest = (list || []).filter((x) => x?.id !== BUILTIN_ATMO_ID);
  return [builtin, ...rest].slice(0, 16);
}

function shouldUseBuiltinLightningAtmosphere(atmo) {
  if (!atmo?.src) return true;
  if (isBuiltinLightningAtmosphere(atmo)) return true;
  if (atmo.src === BUILTIN_ATMO_ASSET) return true;
  return false;
}

function ensureBuiltinLightningAtmosphere() {
  state.uploadedAtmospheres = mergeBuiltinLightningIntoLibrary(state.uploadedAtmospheres || []);
  saveAtmosphereLibrary(state.uploadedAtmospheres);
  const beltBg = state.belt?.beltBg || state.selectedBrandHex || "#db3012";
  const builtin = getBuiltinLightningAtmosphereItem(beltBg);
  if (!builtin.src) return false;
  if (shouldUseBuiltinLightningAtmosphere(state.atmosphereImage)) {
    setAtmosphereImage(
      {
        ...builtin,
        libraryId: BUILTIN_ATMO_ID,
        layout: normalizeAtmoLayout(state.atmosphereImage?.layout || DEFAULT_ATMO_LAYOUT),
      },
      { persist: true },
    );
    return true;
  }
  return false;
}

/** 点色 / 刷新预览前：内置闪电随腰带底色更新 */
function ensureAtmosphereForPreview() {
  if (!shouldUseBuiltinLightningAtmosphere(state.atmosphereImage)) return;
  const beltBg = state.belt?.beltBg || state.selectedBrandHex || "#db3012";
  const src = resolveBuiltinLightningSrc(beltBg);
  if (!src) return;
  const layout = normalizeAtmoLayout(state.atmosphereImage?.layout || DEFAULT_ATMO_LAYOUT);
  const prevSrc = state.atmosphereImage?.src;
  state.atmosphereImage = {
    src,
    name: BUILTIN_ATMO_NAME,
    source: "builtin",
    libraryId: BUILTIN_ATMO_ID,
    layout,
  };
  if (prevSrc !== src) saveAtmosphereImage(state.atmosphereImage);
}

function getAtmosphereCardItems() {
  const beltBg = state.belt?.beltBg || state.selectedBrandHex || "#db3012";
  const builtin = getBuiltinLightningAtmosphereItem(beltBg);
  const rest = (state.uploadedAtmospheres || [])
    .filter((x) => x && !isBuiltinLightningAtmosphere(x))
    .map(normalizeAtmosphereLibraryItem)
    .filter(Boolean);
  const list = [builtin, ...rest].slice(0, 16);
  const active = state.atmosphereImage;
  if (active?.src) {
    const inLib = list.some(
      (x) => x.id === active.libraryId || x.src === active.src,
    );
    if (!inLib) {
      list.push({
        id: active.libraryId || `active-${String(active.src).slice(-16)}`,
        src: active.src,
        name: active.name || "氛围icon",
        source: active.source || "custom",
      });
    }
  }
  return list.filter((x) => x?.src);
}

function isAtmosphereItemActive(item) {
  const active = state.atmosphereImage;
  if (!active?.src || !item?.src) return false;
  return active.libraryId === item.id || active.src === item.src;
}

function selectAtmosphereLibraryItem(id) {
  const item = getAtmosphereCardItems().find((x) => x.id === id);
  if (!item) return;
  setAtmosphereImage(
    {
      src: item.src,
      name: item.name,
      source: item.source || "upload",
      libraryId: item.id,
      layout: state.atmosphereImage?.layout,
    },
    { hint: `已切换氛围icon：${item.name}` },
  );
  renderAtmosphereCards();
}

function bindAtmosphereCardElement(card, item, beltBg) {
  if (!card || !item?.src) return;
  const active = isAtmosphereItemActive(item);
  card.className =
    "inputSource atmoCard atmoCard--item" +
    (isBuiltinLightningAtmosphere(item) ? " atmoCard--builtin" : "") +
    (active ? " atmoCard--active" : "");
  card.dataset.atmoId = item.id;
  card.setAttribute("role", "listitem");

  const titleEl = card.querySelector(".inputSource__title");
  const descEl = card.querySelector(".inputSource__desc");
  if (titleEl) titleEl.textContent = item.name || "氛围icon";
  if (descEl) {
    descEl.textContent = `${getAtmosphereSourceLabel(item.source)}${active ? " · 使用中" : ""}`;
  }

  const frame = card.querySelector(".atmoPreview__frame");
  const img = card.querySelector(".atmoPreview__img");
  if (frame) {
    frame.style.background = `linear-gradient(135deg, ${beltBg} 0%, ${beltBg} 100%)`;
    applyAtmosphereLayoutToRoot(
      frame,
      active ? getAtmosphereLayout() : DEFAULT_ATMO_LAYOUT,
    );
  }
  if (img) {
    img.alt = item.name || "氛围icon";
    img.classList.remove("hidden");
    img.onerror = () => {
      const fallback = resolveBuiltinLightningFallbackSrc(beltBg);
      if (fallback && img.src !== fallback) img.src = fallback;
    };
    img.src = item.src;
  }

  const useBtn = card.querySelector(".atmoCard__useBtn");
  if (useBtn) {
    useBtn.disabled = active;
    useBtn.textContent = active ? "当前" : "使用";
  }

  if (!card.dataset.bound) {
    card.dataset.bound = "1";
    card.addEventListener("click", (e) => {
      if (e.target.closest(".atmoCard__delBtn") || e.target.closest(".atmoCard__useBtn")) return;
      selectAtmosphereLibraryItem(item.id);
    });
    useBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      selectAtmosphereLibraryItem(item.id);
    });
    card.querySelector(".atmoCard__delBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      const inLib = (state.uploadedAtmospheres || []).some((x) => x.id === item.id);
      if (inLib) removeAtmosphereLibraryItem(item.id);
      else if (isAtmosphereItemActive(item)) clearAtmosphereImage();
    });
  }
}

function createAtmosphereLibraryCard(item, beltBg) {
  const card = document.createElement("div");
  card.className = "inputSource atmoCard atmoCard--item";
  card.innerHTML = `
    <div class="inputSource__head">
      <span class="inputSource__title"></span>
      <span class="inputSource__desc"></span>
    </div>
    <div class="atmoCard__preview">
      <div class="atmoPreview__frame">
        <img class="atmoPreview__img" alt="" loading="lazy" />
      </div>
    </div>
    <div class="atmoCard__actions">
      <button type="button" class="btn btn--sm atmoCard__useBtn">使用</button>
      <button type="button" class="btn btn--ghost btn--sm atmoCard__delBtn">删除</button>
    </div>
  `;
  bindAtmosphereCardElement(card, item, beltBg);
  return card;
}

function ensureBuiltinAtmosphereCard(mount, beltBg) {
  let card =
    mount.querySelector(".atmoCard--builtin") ||
    document.getElementById("atmoBuiltinLightningCard");
  if (!card && mount) {
    card = document.createElement("div");
    card.id = "atmoBuiltinLightningCard";
    card.className = "inputSource atmoCard atmoCard--item atmoCard--builtin";
    card.dataset.atmoId = BUILTIN_ATMO_ID;
    card.setAttribute("role", "listitem");
    card.innerHTML = `
      <div class="inputSource__head">
        <span class="inputSource__title">${BUILTIN_ATMO_NAME}</span>
        <span class="inputSource__desc">内置示例 · 默认展示</span>
      </div>
      <div class="atmoCard__preview">
        <div class="atmoPreview__frame">
          <img class="atmoPreview__img" alt="${BUILTIN_ATMO_NAME}" loading="lazy" />
        </div>
      </div>
      <div class="atmoCard__actions">
        <button type="button" class="btn btn--sm atmoCard__useBtn">使用</button>
      </div>
    `;
    const uploadCard = mount.querySelector(".atmoCard--upload");
    if (uploadCard?.nextSibling) mount.insertBefore(card, uploadCard.nextSibling);
    else mount.appendChild(card);
  }
  const builtin = getBuiltinLightningAtmosphereItem(beltBg);
  bindAtmosphereCardElement(card, builtin, beltBg);
  return card;
}

function renderAtmosphereCards() {
  const mount = els.atmoItemCardsMount || document.getElementById("atmoItemCardsMount");
  if (!mount) return;
  els.atmoItemCardsMount = mount;
  const uploadCard =
    mount.querySelector(".atmoCard--upload") || document.getElementById("atmoUploadCard");
  mount
    .querySelectorAll(".atmoCard--item:not(.atmoCard--upload):not(.atmoCard--builtin)")
    .forEach((el) => el.remove());

  const beltBg = state.belt?.beltBg || state.selectedBrandHex || "#db3012";
  ensureBuiltinAtmosphereCard(mount, beltBg);

  const items = getAtmosphereCardItems().filter((item) => !isBuiltinLightningAtmosphere(item));
  items.forEach((item) => {
    mount.appendChild(createAtmosphereLibraryCard(item, beltBg));
  });

  if (els.atmoGalleryEmpty) {
    els.atmoGalleryEmpty.classList.add("hidden");
    els.atmoGalleryEmpty.setAttribute("aria-hidden", "true");
  }
  if (uploadCard) {
    mount.insertBefore(uploadCard, mount.firstChild);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function syncAtmosphereMetaUI() {
  const atmo = state.atmosphereImage;
  const has = Boolean(atmo?.src);
  renderAtmosphereCards();
  if (els.atmoExportMeta) {
    const l = has ? getAtmosphereLayout() : null;
    els.atmoExportMeta.textContent = has
      ? `${atmo.source || "custom"} · x${l.x}% y${l.y}% · ${l.scale}%`
      : "none";
  }
}

function applyAtmosphereLayoutToRoot(rootEl, layout, variant = "mobile") {
  if (!rootEl) return;
  const l = normalizeAtmoLayout(layout);
  const scale = l.scale / 100;
  const figmaDefault = isAtmoLayoutFigmaDefault(l) || isLegacyAtmoLayout(l);
  rootEl.style.setProperty("--belt-atmo-opacity", String(l.opacity / 100));

  if (variant === "pc") {
    const beltW = PC_BELT_DESIGN_W;
    const beltH = PC_BELT_DESIGN_H;
    const base = PC_ATMO_FIGMA;
    const left = figmaDefault ? base.left : (l.x / 100) * beltW;
    const top = figmaDefault ? base.top : (l.y / 100) * beltH;
    rootEl.style.setProperty("--belt-atmo-slot-left", `${left}px`);
    rootEl.style.setProperty("--belt-atmo-slot-top", `${top}px`);
    rootEl.style.setProperty("--belt-atmo-slot-w", `${base.width * scale}px`);
    rootEl.style.setProperty("--belt-atmo-slot-h", `${base.slotHeight}px`);
    rootEl.style.setProperty("--belt-atmo-img-top", `${base.imgTop * scale}px`);
    rootEl.style.setProperty("--belt-atmo-img-w", `${base.width * scale}px`);
    rootEl.style.setProperty("--belt-atmo-img-h", `${base.imgHeight * scale}px`);
    return;
  }

  const beltH = variant === "three" ? MOBILE_BELT_H_THREE : MOBILE_BELT_H_TWO;
  const base = MOBILE_ATMO_FIGMA;
  const left = figmaDefault ? base.left : (l.x / 100) * MOBILE_BELT_W;
  const top = figmaDefault ? base.top : (l.y / 100) * beltH;
  rootEl.style.setProperty("--belt-atmo-slot-left", `${left}px`);
  rootEl.style.setProperty("--belt-atmo-slot-top", `${top}px`);
  rootEl.style.setProperty("--belt-atmo-slot-w", `${base.width * scale}px`);
  rootEl.style.setProperty("--belt-atmo-slot-h", `${base.height * scale}px`);
}

function syncAtmosphereLayoutControls() {
  const l = getAtmosphereLayout();
  const has = Boolean(state.atmosphereImage?.src);
  if (els.atmoPosX) {
    els.atmoPosX.value = String(l.x);
    els.atmoPosX.disabled = !has;
  }
  if (els.atmoPosY) {
    els.atmoPosY.value = String(l.y);
    els.atmoPosY.disabled = !has;
  }
  if (els.atmoScale) {
    els.atmoScale.value = String(l.scale);
    els.atmoScale.disabled = !has;
  }
  if (els.atmoOpacity) {
    els.atmoOpacity.value = String(l.opacity);
    els.atmoOpacity.disabled = !has;
  }
  if (els.atmoPosXVal) els.atmoPosXVal.textContent = has ? `${l.x}%` : "-";
  if (els.atmoPosYVal) els.atmoPosYVal.textContent = has ? `${l.y}%` : "-";
  if (els.atmoScaleVal) els.atmoScaleVal.textContent = has ? `${l.scale}%` : "-";
  if (els.atmoOpacityVal) els.atmoOpacityVal.textContent = has ? `${l.opacity}%` : "-";
  if (els.atmoLayoutResetBtn) els.atmoLayoutResetBtn.disabled = !has;

  renderAtmosphereCards();
}

/** PC 横条稿氛围：槽位 left 275 / top 0 / 38×52，图内 top -2.23（由 CSS 变量控制） */
function resolvePcBeltAtmosphereLayout(layout) {
  const l = normalizeAtmoLayout(layout);
  if (isAtmoLayoutFigmaDefault(l) || isLegacyAtmoLayout(l)) {
    return {
      ...l,
      x: Math.round((PC_ATMO_FIGMA.left / PC_BELT_DESIGN_W) * 1000) / 10,
      y: 0,
      scale: 100,
    };
  }
  return l;
}

function getPcBeltAtmosphereLayoutRoot() {
  return els.beltPreviewPc;
}

function applyAtmosphereToBeltRoot(rootEl, imgEl) {
  if (!rootEl || !imgEl) return;
  const atmo = state.atmosphereImage;
  if (atmo?.src) {
    const beltBg = state.belt?.beltBg || state.selectedBrandHex || "#db3012";
    imgEl.onerror = () => {
      const fallback = resolveBuiltinLightningFallbackSrc(beltBg);
      if (fallback && imgEl.src !== fallback) {
        imgEl.src = fallback;
        if (isBuiltinLightningAtmosphere(atmo)) {
          state.atmosphereImage = { ...atmo, src: fallback };
          saveAtmosphereImage(state.atmosphereImage);
        }
      }
    };
    imgEl.src = atmo.src;
    imgEl.alt = atmo.name || "氛围icon";
    imgEl.classList.remove("hidden");
    const isPc = rootEl.classList.contains("jd-pc-belt");
    const isThree = rootEl.classList.contains("jd-mobile-three-belt");
    const layout = isPc
      ? resolvePcBeltAtmosphereLayout(getAtmosphereLayout())
      : getAtmosphereLayout();
    const variant = isPc ? "pc" : isThree ? "three" : "two";
    applyAtmosphereLayoutToRoot(
      isPc ? getPcBeltAtmosphereLayoutRoot() || rootEl : rootEl,
      layout,
      variant,
    );
  } else {
    imgEl.removeAttribute("src");
    imgEl.classList.add("hidden");
  }
}

function applyAtmosphereToPreview() {
  ensureAtmosphereForPreview();
  refreshPreviewDomRefs();
  const two = document.getElementById("beltPreview");
  const three = document.getElementById("beltPreview3");
  const pc = document.getElementById("beltPreviewPc");
  const img2 = document.getElementById("beltAtmosphereImg");
  const img3 = document.getElementById("beltAtmosphereImg3");
  const imgPc = document.getElementById("beltAtmosphereImgPc");
  if (two) els.beltPreview = two;
  if (three) els.beltPreview3 = three;
  if (pc) els.beltPreviewPc = pc;
  if (img2) els.beltAtmosphereImg = img2;
  if (img3) els.beltAtmosphereImg3 = img3;
  if (imgPc) els.beltAtmosphereImgPc = imgPc;
  applyAtmosphereToBeltRoot(two || els.beltPreview, img2 || els.beltAtmosphereImg);
  applyAtmosphereToBeltRoot(three || els.beltPreview3, img3 || els.beltAtmosphereImg3);
  applyAtmosphereToBeltRoot(pc || els.beltPreviewPc, imgPc || els.beltAtmosphereImgPc);
  syncAtmosphereMetaUI();
  syncAtmosphereLayoutControls();
}

function setAtmosphereImage(data, { persist = true, hint = "" } = {}) {
  state.atmosphereImage = data?.src
    ? {
        src: data.src,
        name: data.name || "氛围icon",
        source: data.source || "upload",
        prompt: data.prompt || "",
        libraryId: Object.prototype.hasOwnProperty.call(data, "libraryId")
          ? data.libraryId
          : "",
        layout: normalizeAtmoLayout(data.layout || state.atmosphereImage?.layout),
      }
    : null;
  if (persist) saveAtmosphereImage(state.atmosphereImage);
  applyAtmosphereToPreview();
  if (state.belt) {
    state.belt.atmosphereImage = state.atmosphereImage
      ? { ...state.atmosphereImage }
      : null;
  }
  if (hint) setExportHint(hint);
}

/** Canvas 本地示意生成透明氛围icon（无后端 API 时可用） */
function generateAtmosphereFromPrompt(prompt, beltBg) {
  const canvas = document.createElement("canvas");
  canvas.width = 220;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rgb = hexToRgb(beltBg) || { r: 255, g: 255, b: 255 };
  const p = String(prompt || "").toLowerCase();
  const wantLightning = /闪电|lightning|电|bolt/.test(p);
  const wantStar = /星|spark|star/.test(p) || wantLightning;
  const alpha = /淡|轻|low|soft/.test(p) ? 0.22 : 0.38;

  const drawGlow = () => {
    const g = ctx.createRadialGradient(170, 32, 4, 170, 32, 56);
    g.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha * 0.9})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(90, 0, 130, 64);
  };

  const drawLightningBolt = () => {
    const gray = { r: 58, g: 58, b: 60 };
    const fill = `rgba(${gray.r},${gray.g},${gray.b},0.92)`;
    ctx.save();
    ctx.translate(148, 34);
    ctx.rotate((-18 * Math.PI) / 180);
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(8, -22);
    ctx.lineTo(-6, 2);
    ctx.lineTo(6, 2);
    ctx.lineTo(-10, 24);
    ctx.lineTo(14, -4);
    ctx.lineTo(0, -4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  drawGlow();
  if (wantLightning) drawLightningBolt();
  if (wantStar) {
    for (let i = 0; i < 6; i++) {
      const x = 120 + i * 14;
      const y = 12 + (i % 3) * 16;
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha * 0.7})`;
      ctx.fillRect(x, y, 2, 2);
    }
  }

  return canvas.toDataURL("image/png");
}

function loadAtmoAiRefs() {
  try {
    const raw = localStorage.getItem(ATMO_AI_REF_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr)) return [];
    return arr
      .filter((x) => x?.id && x?.src)
      .slice(0, ATMO_AI_REF_MAX)
      .map((x) => ({
        id: x.id,
        src: x.src,
        name: x.name || "参考图",
      }));
  } catch {
    return [];
  }
}

function saveAtmoAiRefs(list) {
  try {
    localStorage.setItem(ATMO_AI_REF_KEY, JSON.stringify((list || []).slice(0, ATMO_AI_REF_MAX)));
  } catch {
    setExportHint("参考图过多，无法全部保存到本机");
  }
}

function renderAtmoAiRefList() {
  const root = els.atmoAiRefList;
  if (!root) return;
  root.innerHTML = "";
  const list = state.atmoAiRefs || [];
  list.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "atmoAiRefChip";
    chip.title = item.name;
    chip.innerHTML = `
      <img class="atmoAiRefChip__img" src="${item.src}" alt="" loading="lazy" />
      <button type="button" class="atmoAiRefChip__remove" aria-label="删除参考图">×</button>
    `;
    chip.querySelector(".atmoAiRefChip__remove")?.addEventListener("click", (e) => {
      e.stopPropagation();
      removeAtmoAiRef(item.id);
    });
    root.appendChild(chip);
  });
}

function removeAtmoAiRef(id) {
  state.atmoAiRefs = (state.atmoAiRefs || []).filter((x) => x.id !== id);
  saveAtmoAiRefs(state.atmoAiRefs);
  renderAtmoAiRefList();
}

async function handleAtmoAiRefUpload(fileList) {
  const files = Array.from(fileList || []).filter((f) =>
    /image\/(png|webp|jpeg|svg\+xml)|\.(png|webp|jpe?g|svg)$/i.test(f?.type || f?.name || ""),
  );
  if (!files.length) {
    showToast("参考图请使用 PNG / WebP / JPG / SVG");
    return;
  }
  state.atmoAiRefs = state.atmoAiRefs || loadAtmoAiRefs();
  let added = 0;
  for (const file of files) {
    if (state.atmoAiRefs.length >= ATMO_AI_REF_MAX) {
      showToast(`参考图最多 ${ATMO_AI_REF_MAX} 张`);
      break;
    }
    try {
      const src = await readFileAsDataUrl(file);
      state.atmoAiRefs.push({
        id: createAtmosphereLibraryId(),
        src,
        name: file.name || "参考图",
      });
      added += 1;
    } catch {
      showToast(`读取失败：${file.name || "图片"}`);
    }
  }
  saveAtmoAiRefs(state.atmoAiRefs);
  renderAtmoAiRefList();
  if (added) setExportHint(`已添加 ${added} 张 AI 参考图`);
}

async function handleAtmosphereUpload(file) {
  if (!file || !isAtmosphereFileOk(file)) {
    showToast("氛围icon请使用透明 PNG / WebP / SVG");
    return;
  }
  try {
    const src = await readFileAsDataUrl(file);
    const item = {
      id: createAtmosphereLibraryId(),
      src,
      name: file.name || "氛围icon",
      source: "upload",
    };
    upsertAtmosphereLibraryItem(item);
    setAtmosphereImage(
      {
        src: item.src,
        name: item.name,
        source: "upload",
        libraryId: item.id,
      },
      { hint: "已上传氛围icon" },
    );
    renderAtmosphereCards();
  } catch {
    showToast(`读取失败：${file.name || "图片"}`);
  }
}

function handleAtmosphereAiGenerate() {
  const prompt = resolveAtmoPromptForGenerate() || "几何光效氛围";
  const beltBg = state.belt?.beltBg || state.selectedBrandHex || "#e1251b";
  const src = generateAtmosphereFromPrompt(prompt, beltBg);
  if (!src) {
    showToast("生成失败，请重试或上传图片");
    return;
  }
  const aiItem = {
    id: createAtmosphereLibraryId(),
    src,
    name: `AI·${prompt.slice(0, 8) || "氛围"}`,
    source: "ai",
  };
  upsertAtmosphereLibraryItem(aiItem);
  setAtmosphereImage(
    {
      src: aiItem.src,
      name: aiItem.name,
      source: "ai",
      prompt,
      libraryId: aiItem.id,
    },
    { hint: "已 AI 生成氛围icon（本地示意）" },
  );
}

function resetAtmosphereLayout() {
  setAtmosphereLayout({ ...DEFAULT_ATMO_LAYOUT }, { persist: true });
  setExportHint("氛围icon位置已恢复为示意图默认");
}

function clearAtmosphereImage() {
  setAtmosphereImage(null, { hint: "已清除当前氛围icon" });
}

function getAllLogos() {
  return [...BUILTIN_LOGOS, ...(state.uploadedLogos || [])];
}

function getLogoById(id) {
  return getAllLogos().find((l) => l.id === id);
}

function getLogoSvgMarkup(logo) {
  if (!logo || logo.textOnly) return "";
  if (logo.svgMarkup) return stripLogoSvgBackground(logo.svgMarkup);
  if (logo.id && LOGO_SVG_INLINE[logo.id]) return LOGO_SVG_INLINE[logo.id];
  return "";
}

function isVectorLogo(logo) {
  if (!logo || logo.textOnly) return false;
  return Boolean(logo.vector || logo.svgMarkup || LOGO_SVG_INLINE[logo.id]);
}

/** 去掉 SVG 中常见的白底/半透明白底矩形 */
function stripLogoSvgBackground(svg) {
  if (!svg) return "";
  let s = svg;
  s = s.replace(
    /<rect\b[^>]*\bfill\s*=\s*["'](?:#fff(?:fff)?|white)["'][^>]*\/?>\s*/gi,
    "",
  );
  s = s.replace(
    /<rect\b[^>]*\bfill\s*=\s*["']rgba?\(\s*255\s*,\s*255\s*,\s*255[^"']*["'][^>]*\/?>\s*/gi,
    "",
  );
  s = s.replace(
    /<rect\b[^>]*(?:fill-opacity|opacity)\s*=\s*["']0?\.?\d+["'][^>]*\bfill\s*=\s*["'](?:#fff(?:fff)?|white)["'][^>]*\/?>\s*/gi,
    "",
  );
  s = s.replace(
    /<rect\b[^>]*\bfill\s*=\s*["'](?:#fff(?:fff)?|white)["'][^>]*(?:fill-opacity|opacity)\s*=\s*["']0?\.?\d+["'][^>]*\/?>\s*/gi,
    "",
  );
  return s;
}

/** 将 currentColor 替换为实际色值，避免 file:// 下继承失效 */
function tintSvgMarkup(svg, color) {
  if (!svg) return "";
  const c = color || "#111111";
  return stripLogoSvgBackground(svg).replace(/currentColor/gi, c);
}

function parseSvgViewBoxSize(svg) {
  const vb = svg.getAttribute("viewBox");
  if (vb) {
    const parts = vb.trim().split(/[\s,]+/).map(Number);
    if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
      return { w: parts[2], h: parts[3] };
    }
  }
  const w = parseFloat(svg.getAttribute("width"));
  const h = parseFloat(svg.getAttribute("height"));
  if (w > 0 && h > 0) return { w, h };
  return { w: 72, h: 24 };
}

/** 可靠挂载 SVG 到腰带（DOMParser，避免 innerHTML 丢字） */
function mountVectorLogo(container, svgMarkup, tint, label, svgHeight = 18, options = {}) {
  if (!container) return false;
  container.innerHTML = "";
  container.style.color = tint;
  const tinted = tintSvgMarkup(svgMarkup, tint);
  try {
    const doc = new DOMParser().parseFromString(tinted, "image/svg+xml");
    const svg = doc.documentElement;
    if (!svg || svg.nodeName.toLowerCase() !== "svg") return false;
    const err = doc.querySelector("parsererror");
    if (err) return false;
    const { w: vbW, h: vbH } = parseSvgViewBoxSize(svg);
    const aspect = vbW / vbH;
    const maxWidth =
      options.maxWidth != null ? options.maxWidth : Math.ceil(svgHeight * aspect);
    const h = String(svgHeight);
    svg.setAttribute("height", h);
    svg.removeAttribute("width");
    svg.style.height = `${h}px`;
    svg.style.width = "auto";
    if (!options.cssSizeOnly) {
      svg.style.maxHeight = `${svgHeight + 4}px`;
      svg.style.maxWidth = maxWidth > 0 ? `${maxWidth}px` : "none";
    }
    svg.style.display = "block";
    if (label) svg.setAttribute("aria-label", label);
    // 仅移动端腰带（在 beltCoreLine 中，cssSizeOnly=true）内，将 <text>
    // 锚点改为 middle 并对齐到 viewBox 中心，消除左右留白导致的视觉偏移，
    // 让所有品牌 IP 在右侧列内严格居中；PC 端继续保持左对齐贴边。
    if (vbW > 0 && options.cssSizeOnly) {
      const cx = vbW / 2;
      svg.querySelectorAll("text").forEach((t) => {
        t.setAttribute("text-anchor", "middle");
        t.setAttribute("x", String(cx));
      });
    }
    container.appendChild(document.importNode(svg, true));
    return true;
  } catch {
    return false;
  }
}

function getIpPriorityRank(ipLevel) {
  const i = IP_LEVEL_ORDER.indexOf(ipLevel || "品类B级");
  return i >= 0 ? i + 1 : 99;
}

function isBenefitTextEditable(preset) {
  if (preset?.benefitStyle === "countdown") return true;
  if (preset?.category === "营销口号") return true;
  if (preset?.benefitStyle === "coupon" || preset?.category === "核心优惠") return true;
  return false;
}

function getBenefitTextMax(preset) {
  if (preset?.benefitStyle === "countdown") return BENEFIT_COUNTDOWN_TEXT_MAX;
  if (preset?.category === "营销口号") {
    return BELT_DISPLAY_RULES.LINE_MAX_CHARS.line1;
  }
  return BELT_DISPLAY_RULES.LINE_MAX_CHARS.line2;
}

function loadBenefitTexts() {
  try {
    const raw = localStorage.getItem(BENEFIT_TEXT_KEY);
    const map = raw ? JSON.parse(raw) : {};
    return map && typeof map === "object" ? map : {};
  } catch {
    return {};
  }
}

function saveBenefitTexts(map) {
  try {
    localStorage.setItem(BENEFIT_TEXT_KEY, JSON.stringify(map || {}));
  } catch {
    setExportHint("利益点文案保存失败");
  }
}

function clampBenefitText(text, preset) {
  return String(text ?? "").slice(0, getBenefitTextMax(preset));
}

function getBenefitPresetText(id) {
  return BENEFIT_PRESETS.find((b) => b.id === id)?.text || "";
}

function getBenefitDisplayText(id) {
  const preset = BENEFIT_PRESETS.find((b) => b.id === id);
  if (!preset) return "";
  const custom = state.benefitTexts?.[id];
  if (custom !== undefined && custom !== null) {
    return clampBenefitText(custom, preset);
  }
  return preset.text;
}

function setBenefitDisplayText(id, text) {
  const preset = BENEFIT_PRESETS.find((b) => b.id === id);
  if (!preset || !isBenefitTextEditable(preset)) return;
  const next = clampBenefitText(text, preset);
  state.benefitTexts = state.benefitTexts || loadBenefitTexts();
  if (next === preset.text) {
    delete state.benefitTexts[id];
  } else {
    state.benefitTexts[id] = next;
  }
  saveBenefitTexts(state.benefitTexts);
}

function getBenefitById(id) {
  const preset = BENEFIT_PRESETS.find((b) => b.id === id);
  if (!preset) return null;
  return { ...preset, text: getBenefitDisplayText(id) };
}

function getDiscountTextMax() {
  return BELT_DISPLAY_RULES.LINE_MAX_CHARS.line2;
}

function loadDiscountTexts() {
  try {
    const raw = localStorage.getItem(DISCOUNT_TEXT_KEY);
    const map = raw ? JSON.parse(raw) : {};
    return map && typeof map === "object" ? map : {};
  } catch {
    return {};
  }
}

function saveDiscountTexts(map) {
  try {
    localStorage.setItem(DISCOUNT_TEXT_KEY, JSON.stringify(map || {}));
  } catch {
    setExportHint("优惠信息文案保存失败");
  }
}

function clampDiscountText(text) {
  const max = getDiscountTextMax();
  return String(text ?? "").slice(0, max);
}

function getDiscountPresetText(id) {
  return DISCOUNT_PRESETS.find((d) => d.id === id)?.text || "";
}

function getDiscountDisplayText(id) {
  const custom = state.discountTexts?.[id];
  if (custom !== undefined && custom !== null) return clampDiscountText(custom);
  return getDiscountPresetText(id);
}

function setDiscountDisplayText(id, text) {
  const preset = DISCOUNT_PRESETS.find((d) => d.id === id);
  if (!preset) return;
  const next = clampDiscountText(text);
  state.discountTexts = state.discountTexts || loadDiscountTexts();
  if (next === preset.text) {
    delete state.discountTexts[id];
  } else {
    state.discountTexts[id] = next;
  }
  saveDiscountTexts(state.discountTexts);
}

function getDiscountById(id) {
  const preset = DISCOUNT_PRESETS.find((d) => d.id === id);
  if (!preset) return null;
  return { ...preset, text: getDiscountDisplayText(id) };
}

function getLine03OfferById(id) {
  return getBenefitById(id) || getDiscountById(id);
}

function loadBeltPeriod() {
  try {
    return localStorage.getItem(PERIOD_KEY) === "daily" ? "daily" : "promo";
  } catch {
    return "promo";
  }
}

function saveBeltPeriod(period) {
  try {
    localStorage.setItem(PERIOD_KEY, period);
  } catch {
    /* ignore */
  }
}

function loadSelectedIpIds() {
  try {
    const raw = localStorage.getItem(IP_IDS_KEY);
    const arr = raw ? JSON.parse(raw) : null;
    if (Array.isArray(arr) && arr.length) {
      const filtered = arr.filter(
        (id) => id !== "logo-text-only" && getLogoById(id),
      );
      if (filtered.length) return enforceLogoCategoryLimits(filtered);
    }
  } catch {
    /* ignore */
  }
  return enforceLogoCategoryLimits([...DEFAULT_BELT_IP_IDS]);
}

function saveSelectedIpIds(ids) {
  try {
    localStorage.setItem(IP_IDS_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

function loadSelectedBenefitIds() {
  try {
    const raw = localStorage.getItem(BENEFIT_IDS_KEY);
    const arr = raw ? JSON.parse(raw) : null;
    if (Array.isArray(arr) && arr.length) {
      return arr.filter((id) => getBenefitById(id) && !LEGACY_DISCOUNT_BENEFIT_IDS.has(id));
    }
  } catch {
    /* ignore */
  }
  return [...DEFAULT_BELT_BENEFIT_IDS];
}

function saveSelectedBenefitIds(ids) {
  try {
    localStorage.setItem(BENEFIT_IDS_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

function loadSelectedDiscountIds() {
  try {
    const raw = localStorage.getItem(DISCOUNT_IDS_KEY);
    const arr = raw ? JSON.parse(raw) : null;
    if (Array.isArray(arr) && arr.length) {
      return arr.filter((id) => getDiscountById(id) && id !== "discount-multi");
    }
  } catch {
    /* ignore */
  }
  const legacy = loadLegacyDiscountIdsFromBenefitStorage();
  return legacy.filter((id) => id !== "discount-multi");
}

function loadLegacyDiscountIdsFromBenefitStorage() {
  try {
    const raw = localStorage.getItem(BENEFIT_IDS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr)) return [];
    const hadBenefitMulti = arr.includes("benefit-multi");
    const migrated = arr
      .filter((id) => LEGACY_BENEFIT_TO_DISCOUNT[id])
      .map((id) => LEGACY_BENEFIT_TO_DISCOUNT[id])
      .filter(Boolean);
    if (migrated.length || hadBenefitMulti) {
      if (migrated.length) saveSelectedDiscountIds(migrated.slice(0, 1));
      let cleaned = arr.filter((id) => !LEGACY_DISCOUNT_BENEFIT_IDS.has(id) && getBenefitById(id));
      if (hadBenefitMulti && !cleaned.includes("benefit-coupon")) {
        cleaned = cleaned.length ? cleaned : ["benefit-coupon"];
      }
      saveSelectedBenefitIds(cleaned.length ? cleaned : ["benefit-countdown"]);
    }
    return migrated.slice(0, 1);
  } catch {
    return [];
  }
}

/** 清理已移除的底部优惠信息模块存储 */
function applyCoreBenefitCouponMigration() {
  state.selectedDiscountIds = [];
  saveSelectedDiscountIds([]);
  state.discountTexts = {};
  saveDiscountTexts({});
}

function saveSelectedDiscountIds(ids) {
  try {
    localStorage.setItem(DISCOUNT_IDS_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

function resolveLeftDiscountTextFromLegacy(data) {
  if (data.discountText) return clampDiscountText(data.discountText);
  if (data.discountId) {
    state.discountTexts = state.discountTexts || loadDiscountTexts();
    return clampDiscountText(getDiscountDisplayText(data.discountId));
  }
  return DEFAULT_LEFT_PRICE.discountText;
}

function resolveLeftCountdownTextFromLegacy(data) {
  if (data.countdownText) {
    const raw = String(data.countdownText).trim();
    if (isLegacyCountdownDefault(raw)) return DEFAULT_LEFT_PRICE.countdownText;
    return raw.slice(0, LEFT_COUNTDOWN_TEXT_MAX);
  }
  if (data.countdownId) {
    try {
      const raw = localStorage.getItem("beltToolLeftCountdownText_v1");
      const map = raw ? JSON.parse(raw) : {};
      if (map?.[data.countdownId]) {
        const val = String(map[data.countdownId]).trim();
        if (isLegacyCountdownDefault(val)) return DEFAULT_LEFT_PRICE.countdownText;
        return val.slice(0, LEFT_COUNTDOWN_TEXT_MAX);
      }
    } catch {
      /* ignore */
    }
    const legacy = LEGACY_LEFT_COUNTDOWN_TEXT[data.countdownId];
    if (legacy && !isLegacyCountdownDefault(legacy)) return legacy;
    return DEFAULT_LEFT_PRICE.countdownText;
  }
  return DEFAULT_LEFT_PRICE.countdownText;
}

/** 兼容历史：旧版默认是时间格式（14:05:06 / 距结束 14:05:06），现已统一为「优惠信息2」文案 */
function isLegacyCountdownDefault(text) {
  const raw = String(text || "").trim();
  if (!raw) return false;
  return /^(距结束|倒计时|还剩)?\s*\d{1,2}\s*:\s*\d{2}(?:\s*:\s*\d{2})?$/u.test(raw);
}

function resolveLeftSoldTextFromLegacy(data) {
  if (data.soldText) return String(data.soldText).slice(0, LEFT_SOLD_TEXT_MAX);
  if (data.soldId) {
    try {
      const raw = localStorage.getItem("beltToolLeftSoldText_v1");
      const map = raw ? JSON.parse(raw) : {};
      if (map?.[data.soldId]) {
        return String(map[data.soldId]).slice(0, LEFT_SOLD_TEXT_MAX);
      }
    } catch {
      /* ignore */
    }
    return LEGACY_LEFT_SOLD_TEXT[data.soldId] || DEFAULT_LEFT_PRICE.soldText;
  }
  return DEFAULT_LEFT_PRICE.soldText;
}

function loadLeftPrice() {
  try {
    const raw = localStorage.getItem(LEFT_PRICE_KEY);
    if (!raw) return { ...DEFAULT_LEFT_PRICE };
    const data = JSON.parse(raw);
    return {
      price: String(data.price ?? DEFAULT_LEFT_PRICE.price),
      originPrice: String(data.originPrice ?? DEFAULT_LEFT_PRICE.originPrice),
      discountText: resolveLeftDiscountTextFromLegacy(data),
      countdownText: resolveLeftCountdownTextFromLegacy(data),
      countdownEnabled: true,
      soldText: resolveLeftSoldTextFromLegacy(data),
      soldEnabled: true,
    };
  } catch {
    return { ...DEFAULT_LEFT_PRICE };
  }
}

function saveLeftPrice(data) {
  try {
    localStorage.setItem(LEFT_PRICE_KEY, JSON.stringify(data || DEFAULT_LEFT_PRICE));
  } catch {
    /* ignore */
  }
}

function getLeftPriceFromUI() {
  return {
    price: String(els.leftPriceValue?.value ?? "").trim(),
    originPrice: String(els.leftOriginPrice?.value ?? "").trim(),
    discountText: clampDiscountText(String(els.leftDiscountText?.value ?? "").trim()),
    countdownText: String(els.leftCountdownText?.value ?? "")
      .trim()
      .slice(0, LEFT_COUNTDOWN_TEXT_MAX),
    countdownEnabled: true,
    soldText: String(els.leftSoldText?.value ?? "")
      .trim()
      .slice(0, LEFT_SOLD_TEXT_MAX),
    soldEnabled: true,
  };
}

function writeLeftPriceToUI(lp) {
  const data = lp || DEFAULT_LEFT_PRICE;
  if (els.leftPriceValue) els.leftPriceValue.value = data.price || "";
  if (els.leftOriginPrice) els.leftOriginPrice.value = data.originPrice || "";
  if (els.leftDiscountText) els.leftDiscountText.value = data.discountText || "";
  if (els.leftCountdownText) els.leftCountdownText.value = data.countdownText || "";
  if (els.leftSoldText) els.leftSoldText.value = data.soldText || "";
  if (els.leftCountdownText) els.leftCountdownText.disabled = false;
  if (els.leftSoldText) els.leftSoldText.disabled = false;
  syncLeftMetaFieldCounts();
}

function syncLeftMetaFieldCount(input, counterEl, max) {
  if (!counterEl) return;
  const len = String(input?.value ?? "").length;
  counterEl.textContent = `${len}/${max}`;
  counterEl.classList.toggle("leftMetaField__count--limit", len >= max);
}

function syncLeftMetaFieldCounts() {
  syncLeftMetaFieldCount(els.leftDiscountText, els.leftDiscountCount, LEFT_DISCOUNT_TEXT_MAX);
  syncLeftMetaFieldCount(els.leftCountdownText, els.leftCountdownCount, LEFT_COUNTDOWN_TEXT_MAX);
  syncLeftMetaFieldCount(els.leftSoldText, els.leftSoldCount, LEFT_SOLD_TEXT_MAX);
}

function getLeftDiscountText() {
  return clampDiscountText(state.leftPrice?.discountText ?? "");
}

function getLeftCountdownText() {
  return String(state.leftPrice?.countdownText ?? "").slice(0, LEFT_COUNTDOWN_TEXT_MAX);
}

/** 腰带必现：倒计时文案（空则用默认） */
function getLeftCountdownDisplayText() {
  const raw = String(state.leftPrice?.countdownText ?? DEFAULT_LEFT_PRICE.countdownText ?? "").trim();
  return raw.slice(0, LEFT_COUNTDOWN_TEXT_MAX) || DEFAULT_LEFT_PRICE.countdownText;
}

/** 腰带必现：已售文案（空则用默认） */
function getLeftSoldDisplayText() {
  const raw = String(state.leftPrice?.soldText ?? DEFAULT_LEFT_PRICE.soldText ?? "").trim();
  return raw.slice(0, LEFT_SOLD_TEXT_MAX) || DEFAULT_LEFT_PRICE.soldText;
}

/** 左侧副行倒计时展示：与两行一致，去掉前缀，优先 HH:MM */
function formatLeftCountdownForSubline(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  const stripped = raw.replace(/^(距结束|倒计时|还剩)\s*/u, "");
  const match = stripped.match(/(\d{1,2})\s*:\s*(\d{2})/);
  if (match) return `${match[1].padStart(2, "0")}:${match[2]}`;
  return stripped;
}

/** 左侧信息区倒计时：有展示文案即视为启用 */
function isLeftCountdownActive() {
  return Boolean(getLeftCountdownDisplayText());
}

function isBenefitCountdownSelected() {
  return (state.selectedBenefitIds || []).includes(BENEFIT_COUNTDOWN_ID);
}

function getLeftSoldText() {
  return getLeftSoldDisplayText();
}

function syncLeftPriceSummary() {
  if (!els.leftPriceSummary) return;
  const lp = state.leftPrice || {};
  const parts = [
    `¥${(lp.price || "-").replace(/^¥/, "")}`,
    lp.originPrice ? `划线¥${lp.originPrice.replace(/^¥/, "")}` : null,
    getLeftDiscountText() || null,
    getLeftCountdownDisplayText() || null,
    getLeftSoldDisplayText() || null,
  ].filter(Boolean);
  els.leftPriceSummary.textContent = parts.length ? parts.join(" · ") : "-";
}

function applyBeltSublineMutedColors(root, scheme) {
  if (!root || !scheme) return;
  const muted = scheme.textSecondary;
  const primary = scheme.textPrimary || "#ffffff";
  /* Figma 2 行：row1 划线价 white/70；row2 满减/倒计时/已售/竖线 white 100% */
  root.querySelectorAll(".jd-mobile-two-belt__origin").forEach((el) => {
    el.style.color = muted;
  });
  root
    .querySelectorAll(".jd-mobile-two-belt__sold, .jd-mobile-two-belt__divider")
    .forEach((el) => {
      el.style.color = primary;
      if (el.classList.contains("jd-mobile-two-belt__divider")) {
        el.style.backgroundColor = primary;
      }
    });
}

/** 两行/三行左侧共用：价格区副行文案（优惠信息1 / 优惠信息2 / 已售）
 *  「优惠信息2」与右侧 ② 利益点的「倒计时」chip 语义独立，互不抑制。 */
function getBeltLeftSublineState() {
  const lp = state.leftPrice || {};
  const discountText = getLeftDiscountText();
  const countdownText = isLeftCountdownActive() ? getLeftCountdownDisplayText() : "";
  const soldText = getLeftSoldDisplayText();
  return {
    discountText,
    countdownText,
    soldText,
    showDiscount: Boolean(discountText),
    showCountdown: Boolean(countdownText),
    showSold: Boolean(soldText),
  };
}

function applyBeltLeftPrice() {
  const lp = state.leftPrice || {};
  const root = document.getElementById("beltPreview") || els.beltPreview;
  if (!root) return;
  els.beltPreview = root;
  const priceIntEl = root.querySelector(".jd-mobile-two-belt__price-int");
  const priceDecEl = root.querySelector(".jd-mobile-two-belt__price-decimal");
  const arrivalTag = root.querySelector(".jd-mobile-two-belt__arrival-tag");
  const originEl = root.querySelector(".jd-mobile-two-belt__origin");
  const badgeEl = root.querySelector(".jd-mobile-two-belt__benefit");
  const timerEl = root.querySelector(".jd-mobile-two-belt__timer");
  const soldEl = root.querySelector(".jd-mobile-two-belt__sold");
  const dealGroup = root.querySelector(".jd-mobile-two-belt__deal-group");
  const dealMidDiv = root.querySelector('.jd-mobile-two-belt__divider[data-divider="mid"]');
  const div1 = root.querySelector('.jd-mobile-two-belt__divider[data-divider="1"]');

  const priceNum = (lp.price || "0").replace(/^¥\s*/, "");
  const { int, decimal } = formatPriceParts(priceNum);
  const hasPrice = Boolean(priceNum && priceNum !== "0");
  const originNum = (lp.originPrice || "").replace(/^¥\s*/, "");
  const sub = getBeltLeftSublineState();
  const showOrigin = Boolean(originNum);
  const showDealGroup = sub.showDiscount || sub.showCountdown;

  if (priceIntEl) priceIntEl.textContent = int;
  if (priceDecEl) {
    priceDecEl.textContent = decimal;
    priceDecEl.classList.toggle("hidden", !decimal);
  }
  if (arrivalTag) arrivalTag.classList.toggle("hidden", !hasPrice);
  if (originEl) {
    originEl.textContent = showOrigin ? `¥${originNum}` : "";
    originEl.classList.toggle("hidden", !showOrigin);
  }
  if (dealGroup) dealGroup.classList.toggle("hidden", !showDealGroup);
  if (dealMidDiv) {
    dealMidDiv.classList.toggle("hidden", !(sub.showDiscount && sub.showCountdown));
  }
  if (badgeEl) {
    badgeEl.textContent = sub.discountText;
    badgeEl.classList.toggle("hidden", !sub.showDiscount);
  }
  if (timerEl) {
    timerEl.textContent = formatLeftCountdownForSubline(sub.countdownText);
    timerEl.classList.toggle("hidden", !sub.showCountdown);
  }
  if (soldEl) {
    soldEl.textContent = sub.soldText;
    soldEl.classList.toggle("hidden", !sub.showSold);
  }

  if (div1) {
    div1.classList.toggle("hidden", !(showDealGroup && sub.showSold));
  }

  syncLeftPriceSummary();
  if (state.belt) {
    state.belt.leftPrice = {
      ...lp,
      discountText: sub.discountText,
      countdownText: sub.countdownText,
      soldText: sub.soldText,
    };
    applyBeltSublineMutedColors(root, applyBeltBgTextOverride(state.belt));
  }
  applyBeltThreeLineLeft(applyBeltBgTextOverride(state.belt) || resolvePreviewScheme());
}

/** 三行腰带左侧标签：底=价格色 textPrimary（亮底 50% 透明），字=腰带底 beltBg */
function getThreeLineLeftTagColors(scheme) {
  const custom = getBeltBgCustomTextHex();
  if (custom) {
    return {
      background: hexToRgbaString(custom, 0.16),
      text: custom,
      icon: custom,
    };
  }
  const priceColor = scheme?.textPrimary || "#e5c191";
  const beltBg = scheme?.beltBg || scheme?.brand || "#1a1208";
  return {
    background: resolveTagBackgroundColor(scheme, priceColor),
    text: beltBg,
    icon: beltBg,
  };
}

/** 拆分到手价整数与小数（对齐 PriceCard priceInt / priceDecimal） */
function formatPriceParts(priceStr) {
  const num = String(priceStr || "0").replace(/^¥\s*/, "").trim();
  const dot = num.indexOf(".");
  if (dot === -1) return { int: num || "0", decimal: "" };
  return {
    int: num.slice(0, dot) || "0",
    decimal: num.slice(dot),
  };
}

/** 三行第 3 行底栏：左侧信息区「优惠信息」文案 + 其后的左侧倒计时 */
function resolveThreeLineRow3DiscountText() {
  return getLeftDiscountText();
}

function resolveThreeLineRow3Content(display) {
  const sub = getBeltLeftSublineState();
  const couponText = resolveThreeLineRow3DiscountText();
  const showCoupon = Boolean(couponText);
  /* 优惠信息2 与右侧倒计时独立，不再因右侧倒计时存在而抑制底栏文案 */
  const showCountdown = sub.showCountdown;
  const showRow = showCoupon || showCountdown;
  return {
    couponText,
    showCoupon,
    showCountdown,
    countdownText: sub.countdownText,
    showChevron: showRow,
    showRow,
  };
}

function applyBeltThreeLineSublineMuted(root, scheme) {
  if (!root || !scheme) return;
  const muted = scheme.textSecondary;
  root.querySelectorAll(
    ".jd-mobile-three-belt__origin, .jd-mobile-three-belt__sold, .jd-mobile-three-belt__divider[data-divider='1']",
  ).forEach((el) => {
    el.style.color = muted;
  });
  root.querySelectorAll(".jd-mobile-three-belt__divider").forEach((el) => {
    el.style.color = muted;
    el.style.backgroundColor = muted;
  });
}

function applyBeltThreeLineLeft(scheme) {
  const root = els.beltPreview3;
  if (!root) return;
  const lp = state.leftPrice || {};
  const display = state.lastDisplay || computeBeltDisplay();
  const sub = getBeltLeftSublineState();
  const row3 = resolveThreeLineRow3Content(display);

  const priceIntEl = root.querySelector(".jd-mobile-three-belt__price-int");
  const priceDecEl = root.querySelector(".jd-mobile-three-belt__price-decimal");
  const arrivalTag = root.querySelector(".jd-mobile-three-belt__arrival-tag");
  const originEl = root.querySelector(".jd-mobile-three-belt__origin");
  const soldEl = root.querySelector(".jd-mobile-three-belt__sold");
  const div1 = root.querySelector('.jd-mobile-three-belt__divider[data-divider="1"]');
  const footerEl = root.querySelector(".jd-mobile-three-belt__footer");
  const labelEl = root.querySelector(".jd-mobile-three-belt__label");
  const reductionTag = root.querySelector(".jd-mobile-three-belt__reduction-tag");
  const couponTextEl = root.querySelector(".jd-mobile-three-belt__coupon-text");
  const timeEl = root.querySelector(".jd-mobile-three-belt__time");
  const divFooter = root.querySelector('.jd-mobile-three-belt__divider[data-divider="footer"]');

  const priceNum = (lp.price || "0").replace(/^¥\s*/, "");
  const { int, decimal } = formatPriceParts(priceNum);
  const originNum = (lp.originPrice || "").replace(/^¥\s*/, "");
  const hasPrice = Boolean(priceNum && priceNum !== "0");

  if (priceIntEl) priceIntEl.textContent = int;
  if (priceDecEl) {
    priceDecEl.textContent = decimal;
    priceDecEl.classList.toggle("hidden", !decimal);
  }
  if (arrivalTag) arrivalTag.classList.toggle("hidden", !hasPrice);
  if (originEl) {
    const showOrigin = Boolean(originNum);
    originEl.textContent = showOrigin ? `¥${originNum}` : "";
    originEl.classList.toggle("hidden", !showOrigin);
  }
  if (soldEl) {
    soldEl.textContent = sub.soldText;
    soldEl.classList.toggle("hidden", !sub.showSold);
  }

  if (div1) {
    div1.classList.toggle("hidden", !(Boolean(originNum) && sub.showSold));
  }

  if (labelEl) labelEl.classList.toggle("hidden", !row3.showRow);
  if (reductionTag) reductionTag.classList.toggle("hidden", !row3.showCoupon);
  if (couponTextEl) couponTextEl.textContent = row3.couponText;
  if (timeEl) {
    timeEl.textContent = formatLeftCountdownForSubline(row3.countdownText);
    timeEl.classList.toggle("hidden", !row3.showCountdown);
  }
  if (divFooter) {
    divFooter.classList.toggle("hidden", !(row3.showCoupon && row3.showCountdown));
  }
  if (footerEl) footerEl.classList.toggle("hidden", !row3.showRow);

  if (scheme) applyBeltThreeLineSublineMuted(root, scheme);
}

/** 三行腰带右侧：与两行共用 display.lines 与 renderBeltCoreLines */
function applyBeltThreeLineRight(scheme, displayIn) {
  if (!els.beltPreview3) return;
  const mainEl = document.getElementById("beltCoreMain3") || els.beltCoreMain3;
  applyBeltRightCoreTo(
    {
      root: els.beltPreview3,
      linesEl: mainEl || els.beltCoreLines3,
      coreAreaEl: els.beltCoreArea3,
      chevronEl: null,
    },
    scheme,
    displayIn,
  );
}

/* ------- 品牌色来源 mode 互斥（颜色输入 / 图片取色 / 腰带背景图）------- */
const BRAND_SOURCE_MODE_KEY = "brandSourceMode";
const BRAND_SOURCE_MODES = ["input", "image", "beltBg"];

function loadBrandSourceMode() {
  try {
    const v = localStorage.getItem(BRAND_SOURCE_MODE_KEY);
    if (BRAND_SOURCE_MODES.includes(v)) return v;
  } catch {
    /* ignore */
  }
  return "input";
}

function saveBrandSourceMode(mode) {
  try {
    localStorage.setItem(BRAND_SOURCE_MODE_KEY, mode);
  } catch {
    /* ignore */
  }
}

// 腰带背景图模式下的「内容颜色」覆盖（hex 字符串；为空表示跟随自动生成）
const BELT_BG_TEXT_COLOR_KEY = "beltBgTextColor";
function loadBeltBgTextColor() {
  try {
    const v = localStorage.getItem(BELT_BG_TEXT_COLOR_KEY);
    if (v && /^#[0-9a-fA-F]{6}$/.test(v)) return v.toUpperCase();
  } catch {
    /* ignore */
  }
  return "";
}
function saveBeltBgTextColor(hex) {
  try {
    if (hex) localStorage.setItem(BELT_BG_TEXT_COLOR_KEY, hex);
    else localStorage.removeItem(BELT_BG_TEXT_COLOR_KEY);
  } catch {
    /* ignore */
  }
}
/** 系统基于颜色规范从腰带背景图主色派生的"推荐文字色"
 *  仅由背景图主色 + 色彩规范计算，不受自定义内容色覆盖影响 */
function getAutoRecommendedTextHex() {
  if (state.brandSourceMode !== "beltBg") return "";
  if (!state.beltBgImage) return "";
  const baseHex = normalizeHex(
    state.selectedBrandHex || state.belt?.brand || state.belt?.beltBg,
  );
  if (!baseHex) return "";
  const mapped = mapBeltFromExtractedColor(baseHex);
  return mapped?.textPrimary ? String(mapped.textPrimary) : "";
}

function syncBeltBgTextColorUI() {
  const hex = state.beltBgTextColor || "";
  const autoHex = getAutoRecommendedTextHex();
  const isCustom = Boolean(hex);

  if (els.beltBgContentColorModeAuto) {
    els.beltBgContentColorModeAuto.checked = !isCustom;
  }
  if (els.beltBgContentColorModeCustom) {
    els.beltBgContentColorModeCustom.checked = isCustom;
  }

  if (els.beltBgTextColorAutoHex) {
    els.beltBgTextColorAutoHex.textContent = autoHex ? autoHex.toUpperCase() : "-";
  }
  if (els.beltBgTextColorAutoSwatch) {
    els.beltBgTextColorAutoSwatch.style.background = autoHex || "transparent";
    els.beltBgTextColorAutoSwatch.style.borderColor = autoHex
      ? "rgba(255,255,255,.55)"
      : "rgba(255,255,255,.25)";
  }

  const customDisplayHex = hex || autoHex || "#FFFFFF";
  if (els.beltBgTextColorPicker) {
    els.beltBgTextColorPicker.value = customDisplayHex;
    els.beltBgTextColorPicker.disabled = !isCustom;
  }
  if (els.beltBgTextColorHex) {
    if (document.activeElement !== els.beltBgTextColorHex) {
      els.beltBgTextColorHex.value = isCustom ? hex : "";
    }
    els.beltBgTextColorHex.disabled = !isCustom;
    els.beltBgTextColorHex.placeholder = autoHex ? autoHex.toUpperCase() : "#FFFFFF";
  }
}

async function applyAutoBeltBgContentColor({ toast = true } = {}) {
  setBeltBgTextColor("", { persist: true });
  if (state.brandSourceMode === "beltBg" && state.beltBgImage) {
    try {
      const dominantHex = await extractDominantHexFromImageSrc(state.beltBgImage);
      if (dominantHex) setSelectedBrand(dominantHex, { scenarioId: null });
    } catch (err) {
      console.warn("自动取色失败", err);
    }
  }
  syncBeltBgTextColorUI();
  const autoHex = getAutoRecommendedTextHex();
  if (toast && autoHex && typeof showToast === "function") {
    showToast(`已自动生成：${autoHex.toUpperCase()}`, { type: "ok", duration: 2400 });
  }
}

function activateCustomBeltBgContentColor(seedHex) {
  const fallback = seedHex || getAutoRecommendedTextHex() || "#FFFFFF";
  const normalized = String(fallback).trim().toUpperCase();
  const valid = /^#[0-9A-F]{6}$/.test(normalized) ? normalized : "#FFFFFF";
  if (els.beltBgContentColorModeCustom) els.beltBgContentColorModeCustom.checked = true;
  setBeltBgTextColor(valid);
}
function setBeltBgTextColor(hex, { persist = true } = {}) {
  const normalized = hex ? String(hex).trim().toUpperCase() : "";
  const valid = /^#[0-9A-F]{6}$/.test(normalized) ? normalized : "";
  state.beltBgTextColor = valid;
  if (persist) saveBeltBgTextColor(valid);
  syncBeltBgTextColorUI();
  // 即时刷新预览（仅 beltBg 模式生效）
  if (state.brandSourceMode === "beltBg") {
    if (typeof refreshBeltPreview === "function") refreshBeltPreview({ forceColorRemap: true });
  }
}

function getBrandSourceMode() {
  if (!BRAND_SOURCE_MODES.includes(state.brandSourceMode)) {
    state.brandSourceMode = "input";
  }
  return state.brandSourceMode;
}

function syncBrandSourceTabsUI(mode) {
  document.querySelectorAll(".brandSourceTab").forEach((btn) => {
    const active = btn.dataset.brandSource === mode;
    btn.classList.toggle("brandSourceTab--active", active);
    btn.setAttribute("aria-selected", String(active));
    btn.tabIndex = active ? 0 : -1;
  });
  document.querySelectorAll("[data-brand-source-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.brandSourcePanel !== mode;
  });
}

function applyBrandSourceForMode(mode) {
  if (mode === "input") {
    const raw = els.brandHexInput?.value ?? "";
    const hex = parseBrandColorInput(raw);
    if (hex) setSelectedBrand(hex, { syncInput: true });
  } else if (mode === "image") {
    const paletteEl = els.palette || document.getElementById("palette");
    const sel = paletteEl?.querySelector(".swatch.swatch--active, .swatch.is-selected");
    const hex =
      sel?.dataset?.hex || sel?.getAttribute?.("data-hex") || state.selectedBrandHex;
    if (hex) setSelectedBrand(hex, { syncInput: true });
  }
  // 仅在 beltBg 模式下 state.beltBgImage 才会被 applyBeltCanvasTheme 应用
  if (typeof syncAllBeltPreviews === "function") syncAllBeltPreviews();
}

function setBrandSourceMode(mode, { skipApply = false, persist = true } = {}) {
  if (!BRAND_SOURCE_MODES.includes(mode)) return;
  state.brandSourceMode = mode;
  if (persist) saveBrandSourceMode(mode);
  syncBrandSourceTabsUI(mode);
  if (!skipApply) applyBrandSourceForMode(mode);
}

/** 两行/三行腰带共用：底色、字色、券标/倒计时 CSS 变量 */
function loadBeltBgImage() {
  try {
    const url = localStorage.getItem(BELT_BG_IMAGE_KEY) || "";
    const name = localStorage.getItem(BELT_BG_IMAGE_NAME_KEY) || "";
    if (url) {
      state.beltBgImage = url;
      state.beltBgImageName = name || "";
    }
  } catch {
    /* ignore */
  }
}

function saveBeltBgImage(dataUrl, name = "") {
  try {
    if (dataUrl) {
      localStorage.setItem(BELT_BG_IMAGE_KEY, dataUrl);
      localStorage.setItem(BELT_BG_IMAGE_NAME_KEY, name);
    } else {
      localStorage.removeItem(BELT_BG_IMAGE_KEY);
      localStorage.removeItem(BELT_BG_IMAGE_NAME_KEY);
    }
  } catch {
    /* localStorage 配额溢出时静默忽略 */
  }
}

function syncBeltBgUploadUI() {
  const has = Boolean(state.beltBgImage);
  if (els.beltBgUploadZone) {
    els.beltBgUploadZone.classList.toggle("is-hasImage", has);
  }
  if (els.beltBgPreviewImg) {
    if (has) {
      els.beltBgPreviewImg.src = state.beltBgImage;
      els.beltBgPreviewImg.style.display = "block";
    } else {
      els.beltBgPreviewImg.removeAttribute("src");
      els.beltBgPreviewImg.style.display = "none";
    }
  }
  if (els.beltBgActions) {
    if (has) {
      els.beltBgActions.removeAttribute("hidden");
    } else {
      els.beltBgActions.setAttribute("hidden", "");
    }
  }
  if (els.beltBgHint) {
    els.beltBgHint.textContent = has
      ? `已应用：${state.beltBgImageName || "自定义背景图"}`
      : "JPG / PNG / WebP · 建议宽度 ≥ 750px";
  }
}

function setBeltBgImage(dataUrl, name = "") {
  state.beltBgImage = dataUrl || undefined;
  state.beltBgImageName = name || "";
  saveBeltBgImage(dataUrl, name);
  syncBeltBgUploadUI();
  refreshBeltPreview({ full: false });
}

function clearBeltBgImage() {
  setBeltBgImage("", "");
  if (els.beltBgFileInput) els.beltBgFileInput.value = "";
  showToast("已移除腰带背景图，恢复纯色底", { type: "ok" });
}

/** 从一张图片 src（dataURL/objectURL）提取一个主色 hex，失败返回 null */
async function extractDominantHexFromImageSrc(src) {
  if (!src) return null;
  try {
    const img = new Image();
    if (!src.startsWith("data:") && !src.startsWith("blob:")) {
      img.crossOrigin = "anonymous";
    }
    img.src = src;
    await img.decode();
    const draw = drawToCanvas(img, 600);
    const { palette } = extractPaletteFromImageData(draw.imageData, {
      k: 5,
      maxSamples: 8000,
      minChroma: 0.04,
      minL: 0.1,
      maxL: 0.95,
    });
    if (palette && palette.length && palette[0]?.hex) {
      return palette[0].hex;
    }
  } catch (err) {
    console.warn("背景图主色提取失败", err);
  }
  return null;
}

async function applyBeltBgFile(file) {
  if (!file) return;
  if (file.size > BELT_BG_IMAGE_MAX_BYTES) {
    showToast("图片过大（>4MB），请压缩后重试");
    return;
  }
  try {
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error);
      reader.onload = () => resolve(String(reader.result || ""));
      reader.readAsDataURL(file);
    });
    if (!dataUrl) {
      showToast("读取图片失败，请换一张重试");
      return;
    }
    setBeltBgImage(dataUrl, file.name || "");
    // 后台计算背景图主色，并按颜色输入模块的色彩派生逻辑应用（textPrimary/Secondary 等）
    const dominantHex = await extractDominantHexFromImageSrc(dataUrl);
    if (dominantHex) {
      setSelectedBrand(dominantHex, { scenarioId: null });
      showToast(`腰带背景图已应用 · 主色 ${dominantHex}`, { type: "ok" });
    } else {
      showToast("腰带背景图已应用（主色提取失败，文字色沿用当前品牌色）", { type: "ok" });
    }
  } catch (err) {
    console.error("腰带背景图载入失败", err);
    showToast("背景图载入失败，请换一张重试");
  } finally {
    if (els.beltBgFileInput) els.beltBgFileInput.value = "";
  }
}

function applyBeltCanvasTheme(rootEl, scheme, { variant = "two" } = {}) {
  if (!rootEl || !scheme) return;
  const isDark = scheme.scheme === "dark";
  const baseBg = makeBeltBackground({
    beltBg: scheme.beltBg,
    brand: scheme.brand,
    scheme: isDark ? "dark" : "light",
  });
  // 腰带背景图仅在「腰带背景图」模式下生效，确保三个来源互斥
  const customBg = state.brandSourceMode === "beltBg" ? state.beltBgImage : null;
  const finalBg = customBg
    ? `url("${customBg}") center/cover no-repeat, ${baseBg}`
    : baseBg;
  // beltBg 模式下若用户手动设置了文字颜色，则覆盖自动取色派生的 textPrimary/textSecondary/logoColor
  const customTextHex = getBeltBgCustomTextHex();
  if (customTextHex) {
    scheme = {
      ...scheme,
      textPrimary: customTextHex,
      textSecondary: hexToRgbaString(customTextHex, 0.62),
      logoColor: customTextHex,
    };
  }
  rootEl.style.setProperty("background", finalBg, "important");
  rootEl.style.setProperty("color", scheme.textPrimary || "#ffffff", "important");
  const tagColors =
    variant === "three" ? getThreeLineLeftTagColors(scheme) : getCouponLabelColors(scheme);
  // 自定义文字色生效时：所有「内容」颜色（文字/数字/icon/标签底色）都由它统一派生
  // 标签/倒计时底色使用文字色的半透明版本，确保与文字色形成对比但又同色系
  const couponText = customTextHex || tagColors.text;
  const couponBg = customTextHex ? hexToRgbaString(customTextHex, 0.16) : tagColors.background;
  const couponIcon = customTextHex || tagColors.icon;
  const countdownBlockBg = customTextHex
    ? hexToRgbaString(customTextHex, 0.18)
    : getCountdownBlockBgColor(scheme);
  const countdownDigit = customTextHex || getCountdownDigitColor(scheme);
  rootEl.style.setProperty("--belt-coupon-text", couponText);
  rootEl.style.setProperty("--belt-coupon-bg", couponBg);
  if (variant === "three") {
    rootEl.style.setProperty("--belt-coupon-icon", couponIcon);
  }
  rootEl.style.setProperty("--belt-countdown-block-bg", countdownBlockBg);
  rootEl.style.setProperty("--belt-countdown-digit", countdownDigit);
  rootEl.style.setProperty("--belt-countdown-colon", scheme.textPrimary);
  rootEl.style.setProperty("--belt-text-secondary", scheme.textSecondary);
  if (variant === "pc") {
    if (els.beltPcChevron) els.beltPcChevron.style.color = scheme.textPrimary;
  } else if (variant === "two") {
    rootEl
      .querySelectorAll(
        ".jd-mobile-two-belt__benefit, .jd-mobile-two-belt__timer, .jd-mobile-two-belt__currency, .jd-mobile-two-belt__price-int, .jd-mobile-two-belt__price-decimal, .jd-mobile-two-belt__arrival-text",
      )
      .forEach((el) => {
        el.style.color = scheme.textPrimary;
      });
    applyBeltSublineMutedColors(rootEl, scheme);
  } else {
    rootEl
      .querySelectorAll(
        ".jd-mobile-three-belt__currency, .jd-mobile-three-belt__price-int, .jd-mobile-three-belt__price-decimal",
      )
      .forEach((el) => {
        el.style.color = scheme.textPrimary;
      });
    applyBeltThreeLineSublineMuted(rootEl, scheme);
  }
  rootEl.classList.toggle("beltCanvas--dark", Boolean(isDark));
}

function applyBeltThreeLinePreview(scheme, displayIn) {
  if (!els.beltPreview3) return;
  const display = displayIn || state.lastDisplay || computeBeltDisplay();
  if (scheme) applyBeltCanvasTheme(els.beltPreview3, scheme, { variant: "three" });
  applyBeltThreeLineLeft(scheme);
  applyBeltThreeLineRight(scheme, display);
}

/** PC 腰带品牌 IP：最多 2 个，超出不展示 */
function resolvePcBeltIps(display) {
  return (display?.ips || []).slice(0, PC_BELT_MAX_IP);
}

function renderPcBeltIpItem(mount, logo, scheme, svgHeightOverride = null) {
  if (!mount || !logo) return;
  const isHeartSeason = logo.id === "logo-heart-season";
  mount.classList.toggle("jd-pc-belt__ip--heart-season", isHeartSeason);
  const tint = scheme?.logoColor || scheme?.textPrimary || "#ffffff";
  const svgHeight = Number.isFinite(svgHeightOverride)
    ? svgHeightOverride
    : isHeartSeason
      ? Math.round(PC_BELT_LOGO_SVG_HEIGHT * PC_BELT_HEART_SEASON_SCALE)
      : PC_BELT_LOGO_SVG_HEIGHT;
  const inner = document.createElement("div");
  inner.className = "jd-pc-belt__ipInner";
  const img = document.createElement("img");
  img.className = "jd-pc-belt__ipImg hidden";
  img.alt = logo.name || "";
  renderLogoIntoLine({
    mountEl: inner,
    imgEl: img,
    textEl: null,
    logo,
    tint,
    svgHeight,
  });
  if (inner.childNodes.length) {
    mount.appendChild(inner);
    return;
  }
  if (!img.classList.contains("hidden")) {
    mount.appendChild(img);
    return;
  }
  const label = document.createElement("span");
  label.className = "jd-pc-belt__ipText";
  label.style.color = tint;
  label.textContent = getIpDisplayLabel(logo, logo.useEnhance);
  mount.appendChild(label);
}

function getLogoComboGroups(ips) {
  const list = (ips || []).filter(Boolean).slice(0, PC_BELT_MAX_IP);
  const campaigns = list.filter((logo) => getLogoCategoryId(logo) === "promo");
  const brands = list.filter((logo) => getLogoCategoryId(logo) !== "promo");
  if (list.length <= 1) return { mode: list.length ? "single" : "none", campaign: null, brands: list };
  if (campaigns.length && brands.length >= 2) {
    return { mode: "triple", campaign: campaigns[0], brands: brands.slice(0, 2) };
  }
  if (campaigns.length && brands.length === 1) {
    return { mode: "double", campaign: campaigns[0], brands: brands.slice(0, 1) };
  }
  return { mode: "double", campaign: null, brands: list.slice(0, 2) };
}

function appendPcComboIp(line, logo, scheme) {
  const item = document.createElement("div");
  item.className = "jd-pc-belt__ip jd-pc-belt__ip--combo";
  renderPcBeltIpItem(item, logo, scheme, 11);
  line.appendChild(item);
}

function renderPcInlineComboIp(line, logo, scheme) {
  const item = document.createElement("span");
  item.className = "jd-pc-belt__inlineLogo";
  renderPcBeltIpItem(item, logo, scheme, PC_BELT_LOGO_SVG_HEIGHT);
  line.appendChild(item);
}

/** PC 双 logo 组合的 × 切图（10.15×10.65），随文字色 currentColor 渲染 */
const PC_INLINE_X_SVG = `<svg viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1.05 1.1L9 9.9M9 1.1L1.05 9.9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

function renderPcBeltBrandSlot(slotEl, ips, scheme, rootEl) {
  if (!slotEl) return;
  const list = (ips || []).slice(0, PC_BELT_MAX_IP);
  const mode = list.length === 0 ? "empty" : list.length === 1 ? "single" : "double";
  const tint = scheme?.logoColor || scheme?.textPrimary || "#ffffff";

  slotEl.innerHTML = "";
  slotEl.classList.remove(
    "brand-ip-combo",
    "brand-ip-combo--empty",
    "brand-ip-combo--single",
    "brand-ip-combo--double",
    "brand-ip-combo--triple",
    "jd-pc-belt__brandSlot--empty",
    "jd-pc-belt__brandSlot--single",
    "jd-pc-belt__brandSlot--double",
    "jd-pc-belt__brandSlot--triple",
  );
  slotEl.classList.add(`jd-pc-belt__brandSlot--${mode}`);
  slotEl.style.color = tint;

  if (rootEl) {
    rootEl.classList.toggle("jd-pc-belt--ips-2", list.length === 2);
    rootEl.classList.toggle("jd-pc-belt--ips-1", list.length === 1);
    rootEl.classList.toggle("jd-pc-belt--ips-0", list.length === 0);
    rootEl.classList.toggle("jd-pc-belt--ip-combo-single", mode === "single");
    rootEl.classList.toggle("jd-pc-belt--ip-combo-double", mode === "double");
    rootEl.classList.toggle("jd-pc-belt--ip-combo-triple", false);
  }

  if (mode === "empty") return;

  if (mode === "single") {
    const item = document.createElement("div");
    item.className = "jd-pc-belt__ip";
    renderPcBeltIpItem(item, list[0], scheme, PC_BELT_LOGO_SVG_HEIGHT);
    slotEl.appendChild(item);
    return;
  }

  const line = document.createElement("div");
  line.className = "jd-pc-belt__inlineCombo";
  renderPcInlineComboIp(line, list[0], scheme);
  const sep = document.createElement("span");
  sep.className = "jd-pc-belt__inlineComboSep";
  sep.style.color = tint;
  sep.setAttribute("aria-hidden", "true");
  sep.innerHTML = PC_INLINE_X_SVG;
  line.appendChild(sep);
  renderPcInlineComboIp(line, list[1], scheme);
  slotEl.appendChild(line);
}

/** 判断利益点是否属于「核心优惠 / 领券按钮」类（PC 端不展示） */
function isCoreCouponBenefit(benefit) {
  if (!benefit) return false;
  if (benefit.benefitStyle === "coupon") return true;
  if (benefit.category === "核心优惠") return true;
  return false;
}

function resolvePcBeltBenefit() {
  const { offer } = resolveLine03BenefitOffer(state.selectedBenefitIds || []);
  if (!offer) return null;
  if (isCoreCouponBenefit(offer)) return null;
  return offer;
}

/**
 * PC 端按 docs/brand-ip-logo-composition-rules.md 第 169–193 行：
 * 倒计时（countdown）与 slogan 可同时上下排列，间距 4px。
 * 这里同时取出可见的 countdown / slogan，二者各自独立渲染；按钮（核心优惠）PC 不展示。
 */
function resolvePcBeltBenefits() {
  const ids = state.selectedBenefitIds || [];
  const list = ids.map((id) => getBenefitById(id)).filter(Boolean);
  const countdown = list.find((b) => b?.benefitStyle === "countdown") || null;
  const slogan =
    list.find(
      (b) =>
        b &&
        !isCoreCouponBenefit(b) &&
        b.benefitStyle !== "countdown" &&
        (b.category === "营销口号" || String(b.id || "").includes("slogan")),
    ) || null;
  return { countdown, slogan };
}

/** PC 腰带利益点：口号 / 领券（对齐 Codex 稿 14px） */
function renderPcBeltPromise(mount, benefit, scheme) {
  if (!mount) return;
  const isCountdown = benefit?.benefitStyle === "countdown";
  const isCoupon =
    benefit?.benefitStyle === "coupon" || benefit?.category === "核心优惠";
  const isTextBenefit =
    benefit &&
    !isCountdown &&
    (isCoupon ||
      benefit.category === "营销口号" ||
      String(benefit.id || "").includes("slogan"));
  mount.classList.toggle("hidden", !isTextBenefit);
  mount.classList.toggle("jd-pc-belt__promise--coupon", Boolean(isCoupon));
  if (!isTextBenefit) return;
  const text = getBenefitDisplayText(benefit.id) || benefit.text || "";
  mount.textContent = text;
  mount.style.color = isCoupon
    ? scheme?.couponText || scheme?.textPrimary || "#ffffff"
    : scheme?.textPrimary || "#ffffff";
}

/** PC 腰带右列倒计时：复用 resolvePcBeltBenefit 中的 countdown */
function renderPcBeltCountdownRow(mount, benefit, scheme) {
  if (!mount) return;
  mount.innerHTML = "";
  const isCountdown = benefit && benefit.benefitStyle === "countdown";
  mount.classList.toggle("jd-pc-belt__countdownRow--empty", !isCountdown);
  if (!isCountdown) return;
  const raw = getBenefitDisplayText(benefit.id) || benefit.text || "";
  mount.appendChild(buildCountdownElement(raw, scheme, "beltPcCountdown"));
}

function applyBeltPcPreview(scheme, displayIn) {
  if (!els.beltPreviewPc) return;
  const display = displayIn || state.lastDisplay || computeBeltDisplay();
  const schemeResolved = scheme ? applyBeltBgTextOverride(scheme) : resolvePreviewScheme();
  const ips = resolvePcBeltIps(display);
  // PC 利益点支持 slogan + countdown 上下同时展示
  const { countdown, slogan } = resolvePcBeltBenefits();
  applyBeltCanvasTheme(els.beltPreviewPc, schemeResolved, { variant: "pc" });
  const primary = schemeResolved?.textPrimary || "#ffffff";
  els.beltPreviewPc.style.setProperty("--pc-belt-benefit-color", primary);
  applyAtmosphereToBeltRoot(els.beltPreviewPc, els.beltAtmosphereImgPc);
  renderPcBeltBrandSlot(els.beltPcBrandSlot, ips, schemeResolved, els.beltPreviewPc);
  renderPcBeltPromise(els.beltPcPromise, slogan, schemeResolved);
  renderPcBeltCountdownRow(els.beltPcCountdownRow, countdown, schemeResolved);
  // PC 端「同时存在」状态：用于触发 CSS :has() 上下排列 + 4px 垂直间距
  els.beltPreviewPc.classList.toggle(
    "jd-pc-belt--benefit-combo",
    Boolean(slogan && countdown),
  );
  const hasBenefit = Boolean(slogan || countdown);
  els.beltPreviewPc.classList.toggle("jd-pc-belt--empty", !ips.length && !hasBenefit);
}

function onLeftPriceChange() {
  syncLeftMetaFieldCounts();
  state.leftPrice = getLeftPriceFromUI();
  saveLeftPrice(state.leftPrice);
  scheduleBeltPreviewRefresh({ full: false });
}

function bindLeftPriceInputs() {
  [els.leftPriceValue, els.leftOriginPrice].forEach((el) => {
    el?.addEventListener("input", onLeftPriceChange);
    el?.addEventListener("change", onLeftPriceChange);
  });
  [
    { input: els.leftDiscountText, max: LEFT_DISCOUNT_TEXT_MAX },
    { input: els.leftCountdownText, max: LEFT_COUNTDOWN_TEXT_MAX },
    { input: els.leftSoldText, max: LEFT_SOLD_TEXT_MAX },
  ].forEach(({ input }) => {
    input?.addEventListener("input", onLeftPriceChange);
    input?.addEventListener("change", onLeftPriceChange);
  });
}

function initLeftPriceUI() {
  state.leftPrice = loadLeftPrice();
  writeLeftPriceToUI(state.leftPrice);
  bindLeftPriceInputs();
  applyBeltLeftPrice();
}

/** 腰带右侧第 3 行：仅使用 ② 利益点（限时 > 核心优惠 > 口号） */
function resolveLine03BenefitOffer(benefitIds) {
  const warnings = [];
  const benefits = (benefitIds || [])
    .map((id) => getBenefitById(id))
    .filter(Boolean)
    .sort((a, b) => a.priority - b.priority);

  if (benefits.length > 1) {
    warnings.push(
      `利益点仅展示 1 个，已保留：${benefits[0].label}，已忽略：${benefits
        .slice(1)
        .map((d) => d.label)
        .join("、")}`,
    );
  }

  const b = benefits[0] || null;
  return { offer: b, benefits: b ? [b] : [], warnings };
}

/** ③ 优惠信息：独立模块，供 PC 腰带 / 状态栏，不参与右侧利益点行竞争 */
function resolveLine03DiscountSelection(discountIds) {
  const warnings = [];
  const discounts = (discountIds || [])
    .map((id) => getDiscountById(id))
    .filter(Boolean)
    .sort((a, b) => a.priority - b.priority);

  if (discounts.length > 1) {
    warnings.push(
      `优惠信息仅展示 1 个，已保留：${discounts[0].label}，已忽略：${discounts
        .slice(1)
        .map((d) => d.label)
        .join("、")}`,
    );
  }

  const d = discounts[0] || null;
  return { discounts: d ? [d] : [], warnings };
}

function setBeltPeriod(period) {
  state.beltPeriod = period === "daily" ? "daily" : "promo";
  saveBeltPeriod(state.beltPeriod);
  document.querySelectorAll('input[name="beltPeriod"]').forEach((el) => {
    el.checked = el.value === state.beltPeriod;
  });
  refreshBeltDisplay();
}

/** 单行宽度精简（按行位 7/9 字） */
function simplifyLineText(text, lineSlot = "line2") {
  const raw = String(text || "").trim();
  const max =
    lineSlot === "line1" || lineSlot === "01"
      ? BELT_DISPLAY_RULES.LINE_MAX_CHARS.line1
      : BELT_DISPLAY_RULES.LINE_MAX_CHARS.line2;
  if (raw.length <= max) return { text: raw, truncated: false, original: raw };
  const compact = raw
    .replace(/\s+/g, "")
    .replace(/倒计时\s*/g, "")
    .replace(/官方立减/g, "立减")
    .replace(/百亿补贴/g, "百补")
    .replace(/超级品牌日/g, "超品日")
    .replace(/心动购物季/g, "购物季")
    .replace(/\|/g, "·");
  if (compact.length <= max) return { text: compact, truncated: true, original: raw };
  return { text: `${compact.slice(0, max - 1)}…`, truncated: true, original: raw };
}

function shortenIpName(name, max = Infinity) {
  const s = String(name || "").trim();
  if (!Number.isFinite(max) || s.length <= max) return s;
  return `${s.slice(0, Math.max(1, max - 1))}…`;
}

function getIpDisplayLabel(logo, useEnhance) {
  if (!logo) return "";
  if (logo.textOnly) return logo.shortName || logo.name;
  if (useEnhance && logo.promoEnhanceText) return logo.promoEnhanceText;
  if (useEnhance && logo.enhanceVariant) return logo.enhanceVariant;
  if (useEnhance && logo.mindEnhance && logo.enhanceHint) {
    return `${logo.shortName || logo.name} ${logo.enhanceHint}`;
  }
  return logo.shortName || logo.name;
}

function getPrimaryEnhanceText(logo) {
  if (!logo) return "";
  if (logo.promoEnhanceText) return logo.promoEnhanceText;
  if (logo.useEnhance && logo.enhanceVariant) return logo.enhanceVariant;
  if (logo.useEnhance && logo.enhanceHint) {
    return `${logo.shortName || logo.name} ${logo.enhanceHint}`;
  }
  return "";
}

/** 构建 01 主IP + 02 组合IP 行 */
function buildIpCompositionRows(ips, period) {
  const warnings = [];
  if (!ips.length) return { rows: [], warnings };

  const primary = ips[0];
  const secondaries = ips.slice(1);
  const rows = [];
  const enhanceText = getPrimaryEnhanceText(primary);
  const useEnhanceLine =
    Boolean(enhanceText) &&
    (primary.useEnhance || (primary.promoEnhanceText && secondaries.length > 0));

  if (useEnhanceLine) {
    rows.push({
      kind: "ip-primary-enhance",
      slot: "01",
      logo: primary,
      label: enhanceText,
      useText: true,
    });
  } else {
    rows.push({
      kind: "ip-primary",
      slot: "01",
      logo: primary,
      label: getIpDisplayLabel(primary, false),
      useText: Boolean(primary.textOnly),
    });
  }

  if (secondaries.length >= 2) {
    const pair = secondaries.slice(0, BELT_DISPLAY_RULES.MAX_CROSS_IP);
    const rest = secondaries.slice(BELT_DISPLAY_RULES.MAX_CROSS_IP);
    if (rest.length) {
      warnings.push(`02 组合行最多 ${BELT_DISPLAY_RULES.MAX_CROSS_IP} 个 IP，已忽略：${rest.map((r) => r.name).join("、")}`);
    }
    const normalized = normalizeTripleBrandLogos(pair, warnings);
    const crossLogos = normalized.brands;
    const a = shortenIpName(crossLogos[0].shortName || crossLogos[0].name);
    const b = shortenIpName(crossLogos[1].shortName || crossLogos[1].name);
    rows.push({
      kind: "ip-cross",
      slot: "02",
      logos: crossLogos,
      label: `${a}×${b}`,
      crossStyle: period === "daily" ? "daily" : "promo",
      overflow: normalized.overflow,
      useShortBillionLogo: normalized.replaced,
    });
  } else if (secondaries.length === 1) {
    const sec = secondaries[0];
    // 仅当用户显式开启「增强心智」时，才走文字增强分支（如 "百补 美妆加赠"）；
    // 默认仍走 logo 切图，避免百亿补贴等带 enhanceHint 的 IP 被错误降级为纯文本。
    if (sec.useEnhance && sec.mindEnhance && sec.enhanceHint) {
      rows.push({
        kind: "ip-secondary-enhance",
        slot: "02",
        logo: sec,
        label: `${sec.shortName || sec.name} ${sec.enhanceHint}`,
        useText: true,
      });
    } else {
      rows.push({
        kind: "ip-secondary",
        slot: "02",
        logo: sec,
        label: getIpDisplayLabel(sec, sec.useEnhance),
        useText: Boolean(sec.textOnly),
      });
    }
  }

  return { rows, warnings };
}

/**
 * 组合形式（规范图）：
 * - 01+02：主IP + Slogan
 * - 01+03：主IP + 倒计时/领券
 * - 01+02+03：主IP + IP组合(02) + 利益点(03) 或 主IP + Slogan + 利益点
 */
function getBenefitLineKind(benefit) {
  if (!benefit) return "benefit";
  if (benefit.benefitStyle === "countdown") return "benefit-countdown";
  if (benefit.benefitStyle === "coupon" || benefit.category === "优惠信息") {
    return "benefit-coupon";
  }
  return "benefit";
}

/** 解析「距结束 14:05:06」等为时分秒块。 */
function parseCountdownDisplay(text) {
  const raw = String(text || "").trim();
  const prefixMatch = raw.match(/^(距结束|倒计时|还剩)\s*/);
  const prefix = prefixMatch ? prefixMatch[1] : "";
  const timeMatch = raw.match(/(\d{1,2})\s*:\s*(\d{2})(?:\s*:\s*(\d{2}))?/);
  if (!timeMatch) {
    return { prefix: prefix || "距结束", hours: "14", minutes: "05", seconds: "06" };
  }
  return {
    prefix: prefix || "距结束",
    hours: timeMatch[1].padStart(2, "0"),
    minutes: timeMatch[2].padStart(2, "0"),
    seconds: (timeMatch[3] || "00").padStart(2, "0"),
  };
}

/** 倒计时冒号：使用价格色（textPrimary），不再使用固定白色切图 */
function createCountdownColon(className) {
  const span = document.createElement("span");
  span.className = `${className} ${className}--dot`;
  span.setAttribute("aria-hidden", "true");
  span.textContent = ":";
  return span;
}

/** 倒计时数字块背景：与价格字色 textPrimary 一致。 */
function getCountdownBlockBgColor(scheme) {
  const custom = getBeltBgCustomTextHex();
  if (custom) return hexToRgbaString(custom, 0.18);
  return scheme?.textPrimary || "#ffffff";
}

/** 倒计时数字色：与腰带底色 beltBg 一致（反色镂空）。 */
function getCountdownDigitColor(scheme) {
  const custom = getBeltBgCustomTextHex();
  if (custom) return custom;
  return scheme?.beltBg || scheme?.brand || "#111111";
}

/** 构建倒计时 DOM（结构对齐 Countdown React 组件） */
function buildCountdownElement(text, scheme, blockClass) {
  const { prefix, hours, minutes, seconds } = parseCountdownDisplay(text);
  const labelColor = scheme?.textPrimary || "#ffffff";

  const container = document.createElement("div");
  container.className = blockClass;
  if (blockClass === "beltCountdown" || blockClass === "beltPcCountdown") {
    container.style.setProperty("--belt-countdown-block-bg", getCountdownBlockBgColor(scheme));
    container.style.setProperty("--belt-countdown-digit", getCountdownDigitColor(scheme));
    container.style.setProperty("--belt-countdown-colon", labelColor);
  }

  const label = document.createElement("span");
  label.className = `${blockClass}__label`;
  label.style.color = labelColor;
  label.textContent = prefix;
  container.appendChild(label);

  const timeGroup = document.createElement("div");
  timeGroup.className = `${blockClass}__timeGroup`;

  [hours, minutes, seconds].forEach((val, i) => {
    if (i > 0) {
      timeGroup.appendChild(createCountdownColon(`${blockClass}__colon`));
    }
    const timeBlock = document.createElement("div");
    timeBlock.className = `${blockClass}__timeBlock`;
    const timeText = document.createElement("span");
    timeText.className = `${blockClass}__timeText`;
    timeText.textContent = val;
    timeBlock.appendChild(timeText);
    timeGroup.appendChild(timeBlock);
  });

  container.appendChild(timeGroup);
  return container;
}

function assembleCompositionPattern(ipRows, benefit, period) {
  const warnings = [];
  const lines = [];
  const primary = ipRows[0] || null;
  const secondary = ipRows[1] || null;

  if (primary) lines.push({ ...primary, priority: 1 });

  if (!benefit) {
    if (secondary) lines.push({ ...secondary, priority: 2 });
    return { lines, pattern: secondary ? "01+02(IP)" : "01", warnings };
  }

  const isSlogan = benefit.category === "营销口号";
  const hasIpCombo = Boolean(secondary);

  if (isSlogan && !hasIpCombo) {
    lines.push({
      kind: "benefit-slogan",
      slot: "02",
      benefit,
      label: benefit.text,
      priority: 2,
    });
    return { lines, pattern: "01+02", warnings };
  }

  if (isSlogan && hasIpCombo) {
    lines.push({ ...secondary, priority: 2 });
    lines.push({
      kind: "benefit-slogan",
      slot: "03",
      benefit,
      label: benefit.text,
      priority: 3,
    });
    const out = trimLinesToMax(lines, warnings);
    return { lines: out, pattern: "01+02+03", warnings };
  }

  if (hasIpCombo) {
    lines.push({ ...secondary, priority: 2 });
    lines.push({
      kind: getBenefitLineKind(benefit),
      slot: "03",
      benefit,
      label: benefit.text,
      priority: 3,
    });
    const out = trimLinesToMax(lines, warnings);
    return { lines: out, pattern: "01+02+03", warnings };
  }

  lines.push({
    kind: getBenefitLineKind(benefit),
    slot: secondary ? "03" : "02",
    benefit,
    label: benefit.text,
    priority: 2,
  });
  return { lines, pattern: "01+03", warnings };
}

function trimLinesToMax(lines, warnings) {
  const out = [...lines];
  while (out.length > BELT_DISPLAY_RULES.MAX_LINES) {
    const dropIdx = out.findIndex((l) => l.kind === "ip-cross" || l.kind === "ip-secondary");
    if (dropIdx >= 0) {
      warnings.push(`超出 3 行，已移除组合行：${out[dropIdx].label}`);
      out.splice(dropIdx, 1);
    } else {
      const removed = out.pop();
      warnings.push(`超出 3 行，已移除：${removed.label}`);
    }
  }
  return out;
}

function finalizeDisplayLines(lines) {
  return lines.map((item, idx) => {
    if (item.kind === "benefit-countdown") {
      const raw = item.label || item.benefit?.text || "";
      return {
        ...item,
        lineIndex: idx + 1,
        text: raw,
        truncated: false,
        original: raw,
      };
    }
    if (typeof item.kind === "string" && item.kind.startsWith("ip-")) {
      const raw = item.label || "";
      return {
        ...item,
        lineIndex: idx + 1,
        text: raw,
        truncated: false,
        original: raw,
      };
    }
    const slot = idx === 0 ? "line1" : "line2";
    const simp = simplifyLineText(item.label, item.slot === "01" ? "line1" : slot);
    return {
      ...item,
      lineIndex: idx + 1,
      text: simp.text,
      truncated: simp.truncated,
      original: simp.original,
    };
  });
}

/** 按规范解析 IP 列表 */
function resolveDisplayIps(selectedIds, period) {
  const warnings = [];
  const maxIp = period === "promo" ? BELT_DISPLAY_RULES.MAX_IP_PROMO : BELT_DISPLAY_RULES.MAX_IP_DAILY;
  const logos = (selectedIds || [])
    .map((id) => getLogoById(id))
    .filter(Boolean)
    .sort((a, b) => getIpPriorityRank(a.ipLevel) - getIpPriorityRank(b.ipLevel));

  let enhanceKept = false;
  const normalized = [];
  logos.forEach((logo) => {
    if (logo.mindEnhance) {
      if (!enhanceKept) {
        enhanceKept = true;
        normalized.push({ ...logo, useEnhance: true });
      } else {
        warnings.push(`增强心智仅保留 1 个，已忽略「${logo.name}」的增强展示`);
        normalized.push({ ...logo, useEnhance: false });
      }
    } else {
      normalized.push({ ...logo, useEnhance: false });
    }
  });

  const dropped = normalized.splice(maxIp);
  if (dropped.length) {
    warnings.push(
      `${period === "promo" ? "大促" : "日常"}至多 ${maxIp} 个 IP，已按优先级移除：${dropped.map((d) => d.name).join("、")}`
    );
  }

  return { ips: normalized, warnings };
}

function buildBeltDisplayLines(ips, line03Offer, period) {
  const warnings = [];
  const { rows: ipRows, warnings: ipRowWarn } = buildIpCompositionRows(ips, period);
  warnings.push(...ipRowWarn);

  const composed = assembleCompositionPattern(ipRows, line03Offer || null, period);
  warnings.push(...composed.warnings);

  const lines = finalizeDisplayLines(composed.lines);
  return { lines, pattern: composed.pattern, warnings };
}

function computeBeltDisplay() {
  const period = state.beltPeriod || "promo";
  const ipRes = resolveDisplayIps(state.selectedIpIds || [], period);
  const benefitRes = resolveLine03BenefitOffer(state.selectedBenefitIds || []);
  const discountRes = resolveLine03DiscountSelection(state.selectedDiscountIds || []);
  const built = buildBeltDisplayLines(ipRes.ips, benefitRes.offer, period);
  return {
    period,
    ips: ipRes.ips,
    benefits: benefitRes.benefits,
    discounts: discountRes.discounts,
    line03Offer: benefitRes.offer,
    lines: built.lines,
    pattern: built.pattern,
    warnings: [
      ...ipRes.warnings,
      ...benefitRes.warnings,
      ...discountRes.warnings,
      ...built.warnings,
    ],
  };
}

function updateSelectionNotes(display) {
  if (els.selectedLogoName) {
    els.selectedLogoName.textContent = display.ips.length
      ? display.ips.map((i) => i.name).join("、")
      : "-";
  }
  if (els.selectedBenefitName) {
    els.selectedBenefitName.textContent = display.benefits.length
      ? display.benefits.map((b) => `${b.label}（${getBenefitDisplayText(b.id) || b.text}）`).join("、")
      : "-";
  }
  if (els.selectedDiscountName) els.selectedDiscountName.textContent = "-";
  if (els.selectedLineCount) {
    els.selectedLineCount.textContent = String(display.lines.length);
  }
}

/**
 * 按分类强制收敛 IP 选择：
 * - promo 类最多保留 LOGO_CATEGORY_LIMITS.promo（1）
 * - platform 类最多保留 LOGO_CATEGORY_LIMITS.platform（2）
 * 保留先入选的（数组顺序在前）项；textOnly 项不计入。
 */
function enforceLogoCategoryLimits(ids) {
  const counters = {};
  const out = [];
  (ids || []).forEach((id) => {
    const logo = getLogoById(id);
    if (!logo) return;
    if (logo.textOnly) {
      out.push(id);
      return;
    }
    const cat = getLogoCategoryId(logo);
    const limit = getLogoCategoryLimit(cat);
    counters[cat] = (counters[cat] || 0) + 1;
    if (counters[cat] <= limit) out.push(id);
  });
  return out;
}

function toggleIp(id) {
  const logo = getLogoById(id);
  if (!logo) return;
  const period = state.beltPeriod || "promo";
  const periodLabel = period === "daily" ? "日常" : "大促";
  let ids = [...(state.selectedIpIds || [])];
  if (logo.textOnly) {
    ids = ids.includes(id) ? [] : [id];
  } else if (ids.includes(id)) {
    ids = ids.filter((x) => x !== id);
  } else {
    const cat = getLogoCategoryId(logo);
    const catLimit = getLogoCategoryLimit(cat);
    const catLabel = getLogoCategoryLabel(cat);
    const catCount = ids.filter((x) => {
      const l = getLogoById(x);
      return l && !l.textOnly && getLogoCategoryId(l) === cat;
    }).length;
    if (catCount >= catLimit) {
      const hint =
        catLimit === 1
          ? `${catLabel}仅可选 1 个，请先取消已选项`
          : `${catLabel}最多选 ${catLimit} 个，请先取消已选项`;
      showToast(hint);
      setExportHint(hint);
      return;
    }
    // 兜底：腰带显示总数上限（场景档期约束，避免极端配置溢出）
    const totalMax = getMaxIpSelectCount(period);
    const ipCount = ids.filter((x) => !getLogoById(x)?.textOnly).length;
    if (ipCount >= totalMax) {
      showToast(
        `${periodLabel}档期下品牌 IP 最多选 ${totalMax} 个，请先取消已选项`,
      );
      setExportHint(
        `${periodLabel}档期 IP 已达上限（${totalMax} 个），请先取消已选 IP`,
      );
      return;
    }
    ids.push(id);
  }
  state.selectedIpIds = ids;
  saveSelectedIpIds(ids);
  refreshBeltDisplay();
  setExportHint(ids.includes(id) ? `已选 IP：${logo.name}` : `已取消 IP：${logo.name}`);
}

function selectBenefit(id) {
  const benefit = getBenefitById(id);
  if (!benefit) return;
  state.selectedBenefitIds = [id];
  saveSelectedBenefitIds([id]);
  refreshBeltDisplay();
  setExportHint(`已选利益点：${benefit.label}`);
}

/**
 * 利益点多选：每个 category（限时功能 / 核心优惠 / 营销口号）至多 1 个。
 * 行为：再次点击当前同 category 的项 → 切换为新项；点击已选项 → 取消该 category。
 * 这样 PC 端可以同时展示「限时功能」+「营销口号」上下组合。
 */
function toggleBenefit(id) {
  const benefit = getBenefitById(id);
  if (!benefit) return;
  const cat = benefit.category || "";
  const current = (state.selectedBenefitIds || []).filter(Boolean);
  const next = [];
  let removed = false;
  current.forEach((existId) => {
    const exist = getBenefitById(existId);
    if (!exist) return;
    if (existId === id) {
      removed = true; // 点击已选项 → 取消
      return;
    }
    if (cat && exist.category === cat) return; // 同 category 替换
    next.push(existId);
  });
  if (!removed) next.push(id);
  state.selectedBenefitIds = next;
  saveSelectedBenefitIds(next);
  refreshBeltDisplay();
  setExportHint(removed ? `已取消利益点：${benefit.label}` : `已选利益点：${benefit.label}`);
}

function selectDiscount(id) {
  const discount = getDiscountById(id);
  if (!discount) return;
  state.selectedDiscountIds = [id];
  saveSelectedDiscountIds([id]);
  refreshBeltDisplay();
  setExportHint(`已选优惠信息：${discount.label}`);
}

function toggleDiscount(id) {
  selectDiscount(id);
}

/** 是否具备可预览的腰带配色（与 resolvePreviewScheme 一致，不强制先点「应用并映射」） */
function canOpenPdpPreview() {
  const scheme = resolvePreviewScheme();
  return Boolean(scheme?.beltBg || scheme?.brand);
}

/** 将配色摘要同步到预览区 KV（场景/取色映射后亦更新） */
function syncPreviewKvPanel(scheme) {
  const s = scheme || resolvePreviewScheme();
  const beltBgEl = document.getElementById("beltBg");
  const beltText1El = document.getElementById("beltText1");
  const beltText2El = document.getElementById("beltText2");
  const beltLogoEl = document.getElementById("beltLogo");
  if (beltBgEl) {
    beltBgEl.textContent = s?.beltBg || "-";
    els.beltBg = beltBgEl;
  }
  if (beltText1El) {
    beltText1El.textContent = s?.textPrimary || "-";
    els.beltText1 = beltText1El;
  }
  if (beltText2El) {
    beltText2El.textContent = s?.textSecondary || "-";
    els.beltText2 = beltText2El;
  }
  if (beltLogoEl) {
    beltLogoEl.textContent = s?.logoColor || "-";
    els.beltLogo = beltLogoEl;
  }
}

/** 将底色/字色立即写入三个腰带画布（不依赖 computeBeltDisplay） */
function applyBrandSchemeToAllPreviews(scheme) {
  if (!scheme?.beltBg) return;
  refreshPreviewDomRefs();
  const two = document.getElementById("beltPreview");
  const three = document.getElementById("beltPreview3");
  const pc = document.getElementById("beltPreviewPc");
  if (two) {
    els.beltPreview = two;
    applyBeltCanvasTheme(two, scheme, { variant: "two" });
  }
  if (three) {
    els.beltPreview3 = three;
    applyBeltCanvasTheme(three, scheme, { variant: "three" });
  }
  if (pc) {
    els.beltPreviewPc = pc;
    applyBeltCanvasTheme(pc, scheme, { variant: "pc" });
  }
  syncPreviewKvPanel(scheme);
  applyAtmosphereToPreview();
}

/**
 * 将品牌色映射并立即刷新腰带预览（场景色卡 / HEX / 取色板共用）
 * @returns {boolean} 是否成功
 */
function commitBrandColorToPreview(hex, { scenarioId = undefined, syncInput = true } = {}) {
  const h = parseBrandColorInput(hex);
  if (!h) return false;

  state.selectedBrandHex = h;
  if (scenarioId !== undefined) {
    state.selectedScenarioId = scenarioId;
    if (!scenarioId) state.scenarioLC = undefined;
  }

  const mapped = mapBeltFromExtractedColor(h);
  if (!mapped?.beltBg) {
    showToast("品牌色映射失败，请检查 HEX 或重新点选场景色", { type: "warn" });
    return false;
  }
  state.belt = mapped;

  const selectedHexEl = document.getElementById("selectedHex");
  if (selectedHexEl) {
    selectedHexEl.textContent = h;
    els.selectedHex = selectedHexEl;
  }
  if (els.copyBrandBtn) els.copyBrandBtn.disabled = false;
  if (syncInput && els.brandHexInput) els.brandHexInput.value = h;
  syncPaletteSelection(h);
  syncScenarioSelection(state.selectedScenarioId);

  ensureDefaultBeltContentIfEmpty();
  ensureAtmosphereForPreview();
  refreshPreviewDomRefs();
  applyBrandSchemeToAllPreviews(mapped);
  try {
    syncBeltPreviewContent(mapped);
  } catch (err) {
    console.error("腰带预览内容同步失败", err);
  }
  if (typeof syncAtmosphereMetaUI === "function") syncAtmosphereMetaUI();
  updatePdpPreviewBtnState();
  return true;
}

/** 同步腰带预览内的价格/利益点等内容（底色已由 applyBrandSchemeToAllPreviews 处理） */
function syncBeltPreviewContent(scheme, displayIn) {
  ensureDefaultBeltContentIfEmpty();
  refreshPreviewDomRefs();
  const schemeResolved = applyBeltBgTextOverride(scheme || getActiveBeltScheme());
  let resolvedDisplay = displayIn;
  try {
    resolvedDisplay = displayIn || computeBeltDisplay();
    state.lastDisplay = resolvedDisplay;
  } catch (err) {
    console.error("腰带展示计算失败", err);
    resolvedDisplay = state.lastDisplay || {
      period: state.beltPeriod || "promo",
      ips: [],
      benefits: [],
      discounts: [],
      lines: [],
      warnings: [],
    };
  }
  applyBeltLeftPrice();
  applyBeltRightCore(schemeResolved, resolvedDisplay);
  applyBeltThreeLinePreview(schemeResolved, resolvedDisplay);
  applyBeltPcPreview(schemeResolved, resolvedDisplay);
  if (isPdpPreviewOpen()) renderPdpBeltMount();
  scheduleScaledPreviewLayouts();
}

let beltPreviewRefreshRaf = 0;

/**
 * 刷新腰带预览（任意字段变更均可调用，不依赖填写顺序）
 * @param {{ full?: boolean, forceColorRemap?: boolean, display?: object }} [opts]
 *   - full: 同步图库/状态栏等（选 IP、利益点、档期时用）
 *   - forceColorRemap: 按当前 HEX 强制重算配色
 */
function refreshBeltPreview({ full = false, forceColorRemap = false, display } = {}) {
  refreshPreviewDomRefs();
  if (!state.leftPrice) initLeftPriceUI();

  let resolvedDisplay = display;
  try {
    resolvedDisplay = display || computeBeltDisplay();
    state.lastDisplay = resolvedDisplay;
    if (full) updateSelectionNotes(resolvedDisplay);
  } catch (err) {
    console.error("腰带展示计算失败", err);
    resolvedDisplay =
      state.lastDisplay || {
        period: state.beltPeriod || "promo",
        ips: [],
        benefits: [],
        discounts: [],
        lines: [],
        warnings: [],
      };
  }

  const scheme = applyBeltBgTextOverride(
    forceColorRemap ? getActiveBeltScheme({ forceRemap: true }) : getActiveBeltScheme(),
  );
  // state.belt 存基础配色；自定义内容色仅在预览/导出渲染时通过 applyBeltBgTextOverride 叠加
  ensureBeltStateFromScheme(
    forceColorRemap ? getActiveBeltScheme({ forceRemap: true }) : getActiveBeltScheme(),
  );
  if (typeof syncAtmosphereMetaUI === "function") syncAtmosphereMetaUI();

  try {
    if (scheme?.beltBg) applyBrandSchemeToAllPreviews(scheme);
    syncBeltPreviewContent(scheme, resolvedDisplay);
  } catch (err) {
    console.error("腰带预览同步失败", err);
  }

  if (full) {
    renderLogoLibrary();
    renderBenefitLibrary();
    renderDiscountLibrary();
    syncBeltRightMeta();
  }
  updatePdpPreviewBtnState();
}

/** 下一帧刷新预览（输入框连打时合并刷新） */
function scheduleBeltPreviewRefresh(opts = {}) {
  cancelAnimationFrame(beltPreviewRefreshRaf);
  beltPreviewRefreshRaf = requestAnimationFrame(() => refreshBeltPreview(opts));
}

/**
 * 统一刷新腰带预览（两行/三行/PC + KV + 氛围），选场景色 / 应用 HEX / 改 IP 利益点后调用
 * @param {object} [display] 已计算的展示结构
 */
function primeBeltPreview(display) {
  refreshBeltPreview({ full: false, display });
}

/** 保证 state.belt 与当前预览配色一致，供导出/商详/ rightCore 使用 */
function ensureBeltStateFromScheme(scheme) {
  const s = scheme || resolvePreviewScheme();
  if (!s?.beltBg) return;
  state.belt = { ...s };
}

const DEFAULT_PREVIEW_SCHEME = {
  brand: "#db3012",
  beltBg: "#db3012",
  scheme: "dark",
  textPrimary: "#ffffff",
  textSecondary: "#ffffff",
  logoColor: "#ffffff",
};

/**
 * 按当前品牌色 HEX + 业务场景重算腰带配色（避免 state.belt 与选中色不一致导致预览不更新）
 * @param {{ forceRemap?: boolean }} [opts]
 */
function getActiveBeltScheme({ forceRemap = false } = {}) {
  const selectedNorm = normalizeHex(state.selectedBrandHex);
  const beltNorm =
    state.belt && normalizeHex(state.belt.brand || state.belt.beltBg);
  const scenarioId = state.selectedScenarioId || null;
  const beltScenario = state.belt?.scenarioId ?? null;
  const inSync =
    !forceRemap &&
    state.belt &&
    selectedNorm &&
    beltNorm === selectedNorm &&
    beltScenario === scenarioId;

  if (inSync) return state.belt;

  let hex = selectedNorm;
  if (!hex && scenarioId) {
    const sc = getScenarioById(scenarioId);
    if (sc) {
      const lc = state.scenarioLC || resolveScenarioLC(sc);
      hex = normalizeHex(getScenarioHex(sc, lc.L, lc.C));
    }
  }
  if (hex) {
    const mapped = mapBeltFromExtractedColor(hex);
    if (mapped) {
      state.belt = mapped;
      return mapped;
    }
    if (forceRemap) return null;
  }
  return state.belt || DEFAULT_PREVIEW_SCHEME;
}

/** 预览用配色：与当前选中 HEX / 场景保持同步 */
function resolvePreviewScheme() {
  return applyBeltBgTextOverride(getActiveBeltScheme());
}

/** 腰带背景图模式下用户自定义的文字色（hex）；空表示跟随系统自动推荐 */
function getBeltBgCustomTextHex() {
  if (state.brandSourceMode !== "beltBg") return null;
  const hex = state.beltBgTextColor ? String(state.beltBgTextColor).trim().toUpperCase() : "";
  return /^#[0-9A-F]{6}$/.test(hex) ? hex : null;
}

/** 在 beltBg 模式且用户设置了自定义文字色时，覆盖 scheme 的文字派生色。
 *  影响价促信息、品牌 IP 及腰带内除底背景/氛围 icon 外的所有内容色。 */
function applyBeltBgTextOverride(scheme) {
  if (!scheme) return scheme;
  const customTextHex = getBeltBgCustomTextHex();
  if (!customTextHex) return scheme;
  return {
    ...scheme,
    textPrimary: customTextHex,
    textSecondary: hexToRgbaString(customTextHex, 0.62),
    logoColor: customTextHex,
  };
}

/** 将配色应用到两行腰带 DOM（背景、字色、券/倒计时变量） */
function applyBeltPreviewStyles(rootEl, scheme) {
  applyBeltCanvasTheme(rootEl, scheme, { variant: "two" });
}

/**
 * 同步两行/三行腰带预览（先于图库重绘，避免选 IP/利益点后预览滞后）
 * @param {object} [display] 已计算的展示结构，缺省时重新计算
 */
function syncAllBeltPreviews(display) {
  const scheme = getActiveBeltScheme();
  if (scheme?.beltBg) applyBrandSchemeToAllPreviews(scheme);
  syncBeltPreviewContent(scheme, display);
}

function isPdpPreviewOpen() {
  return Boolean(els.pdpPreviewModal && !els.pdpPreviewModal.classList.contains("hidden"));
}

function getPdpTerminal() {
  const t = state.pdpTerminal;
  return PDP_TERMINALS.includes(t) ? t : "app";
}

function loadPdpTerminal() {
  try {
    const saved = localStorage.getItem(PDP_TERMINAL_KEY);
    if (PDP_TERMINALS.includes(saved)) state.pdpTerminal = saved;
    else state.pdpTerminal = "app";
  } catch {
    state.pdpTerminal = "app";
  }
}

function savePdpTerminal(terminal) {
  try {
    localStorage.setItem(PDP_TERMINAL_KEY, terminal);
  } catch {
    /* ignore */
  }
}

function getPdpBeltMountEl(terminal) {
  if (terminal === "mp") return els.pdpBeltMountMp;
  if (terminal === "web") return els.pdpBeltMountWeb;
  return els.pdpBeltMount;
}

/** 商详预览腰带源：Web 用 PC 腰带；App/小程序用移动两行或三行 */
function pickBeltPreviewSourceEl(terminal) {
  if (terminal === "web") {
    return { el: els.beltPreviewPc, label: `PC 腰带（${PC_BELT_DESIGN_W}×${PC_BELT_DESIGN_H}）` };
  }
  const lineCount = state.lastDisplay?.lines?.length ?? 0;
  if (lineCount >= 3 && els.beltPreview3) {
    return { el: els.beltPreview3, label: "三行腰带（375×82）" };
  }
  return { el: els.beltPreview, label: "两行腰带（375×64）" };
}

function syncPdpTerminalTabs(terminal) {
  const active = getPdpTerminal();
  els.pdpTerminalTabs?.querySelectorAll("[data-pdp-terminal]").forEach((btn) => {
    const isActive = btn.dataset.pdpTerminal === active;
    btn.classList.toggle("pdpTerminalTabs__btn--active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  document.querySelectorAll(".pdpTerminalPanel").forEach((panel) => {
    const isActive = panel.dataset.pdpTerminal === active;
    panel.classList.toggle("pdpTerminalPanel--active", isActive);
    panel.classList.toggle("hidden", !isActive);
    panel.hidden = !isActive;
  });
  els.pdpModalPanel?.classList.toggle("pdpModal__panel--web", active === "web");
  if (active === "web") {
    ensurePdpWebScaleObserver();
  } else {
    resetPdpWebPreviewScale();
  }
}

function setPdpTerminal(terminal) {
  if (!PDP_TERMINALS.includes(terminal)) return;
  state.pdpTerminal = terminal;
  savePdpTerminal(terminal);
  syncPdpTerminalTabs(terminal);
  renderPdpBeltMount();
  if (terminal === "web") {
    forcePdpWebPreviewScaleLayout();
    requestAnimationFrame(forcePdpWebPreviewScaleLayout);
  }
}

function mountBeltCloneTo(mountEl, source, innerClass) {
  if (!mountEl || !source) return;
  mountEl.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = innerClass;
  const clone = source.cloneNode(true);
  clone.removeAttribute("id");
  clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  wrap.appendChild(clone);
  mountEl.appendChild(wrap);
}

function resetTransformScaledWrap(wrap, inner) {
  if (wrap) wrap.style.height = "";
  if (inner) {
    inner.style.transform = "";
    inner.style.transformOrigin = "";
  }
}

function resetPdpWebPreviewScale() {
  lastPdpWebScaleCw = 0;
  const wrap = document.querySelector(".pdpWebScale");
  const inner = wrap?.querySelector(":scope > .pdpWeb");
  resetTransformScaledWrap(wrap, inner);
  const beltWrap = document.getElementById("pdpBeltMountWeb");
  const beltInner = beltWrap?.querySelector(".pdpWeb__beltInner");
  resetTransformScaledWrap(beltWrap, beltInner);
}

function forcePdpWebPreviewScaleLayout() {
  lastPdpWebScaleCw = 0;
  scheduleScaledPreviewLayouts();
}

function ensurePdpWebScaleObserver() {
  if (!els.pdpModalPanel || typeof ResizeObserver === "undefined") return;
  if (pdpWebScaleObserver) return;
  pdpWebScaleObserver = new ResizeObserver(() => {
    if (!isPdpPreviewOpen() || getPdpTerminal() !== "web") return;
    const wrap = document.querySelector(".pdpWebScale");
    const cw = wrap?.clientWidth || 0;
    if (cw <= 0 || Math.abs(cw - lastPdpWebScaleCw) < 0.5) return;
    scheduleScaledPreviewLayouts();
  });
  pdpWebScaleObserver.observe(els.pdpModalPanel);
}

function teardownPdpWebScaleObserver() {
  pdpWebScaleObserver?.disconnect();
  pdpWebScaleObserver = null;
  lastPdpWebScaleCw = 0;
}

/** Web 商详示意：按容器宽度等比缩放，并同步占位高度避免裁切 */
function syncTransformScaledWrap(wrap, inner, designWidth) {
  if (!wrap || !inner || !designWidth) return;
  const cw = wrap.clientWidth;
  if (cw <= 0) return;
  const scale = cw / designWidth;
  const nextTransform = `scale(${scale.toFixed(6)})`;
  const nextHeight = `${Math.ceil(inner.offsetHeight * scale)}px`;
  if (inner.style.transform === nextTransform && wrap.style.height === nextHeight) return;
  inner.style.transformOrigin = "top left";
  inner.style.transform = nextTransform;
  wrap.style.height = nextHeight;
}

function syncPdpWebPreviewScale() {
  const wrap = document.querySelector(".pdpWebScale");
  const inner = wrap?.querySelector(":scope > .pdpWeb");
  const beltWrap = document.getElementById("pdpBeltMountWeb");
  const beltInner = beltWrap?.querySelector(".pdpWeb__beltInner");
  // 先固定腰带槽高度，再测量整页高度，避免占位高度反复变化
  if (beltWrap && beltInner) {
    syncTransformScaledWrap(beltWrap, beltInner, PC_BELT_DESIGN_W);
  }
  syncTransformScaledWrap(wrap, inner, PDP_WEB_DESIGN_W);
  const cw = wrap?.clientWidth || 0;
  if (cw > 0) lastPdpWebScaleCw = cw;
}

/** 审核页预览：左右两栏 1:1 时，按容器可用宽度等比缩放各端预览，避免溢出 */
function syncBeltAuditPreviewScales() {
  if (!isBeltAuditModalOpen()) return;
  const items = [
    { mount: els.beltAuditMount2, designW: 375 },
    { mount: els.beltAuditMount3, designW: 375 },
    { mount: els.beltAuditMountPc, designW: PC_BELT_DESIGN_W },
  ];
  items.forEach(({ mount, designW }) => {
    if (!mount) return;
    const inner = mount.querySelector(".beltAuditPreviewInner");
    if (!inner) return;
    const cs = getComputedStyle(mount);
    const padX = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
    const padY = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    const padTop = parseFloat(cs.paddingTop) || 0;
    const padLeft = parseFloat(cs.paddingLeft) || 0;
    const available = mount.clientWidth - padX;
    if (available <= 0) return;
    const scale = Math.min(1, available / designW);
    inner.style.transformOrigin = "top left";
    inner.style.transform = `scale(${scale})`;
    const naturalH = inner.offsetHeight;
    const visualW = designW * scale;
    const visualH = naturalH * scale;
    mount.style.height = `${Math.ceil(visualH) + padY}px`;

    // 同步标注层尺寸到腰带视觉区域，使 marker 贴在腰带本体而非容器空白
    const layer = mount.querySelector(".beltAuditAnnotationLayer");
    if (layer) {
      layer.style.left = `${padLeft}px`;
      layer.style.top = `${padTop}px`;
      layer.style.width = `${visualW}px`;
      layer.style.height = `${visualH}px`;
      layer.style.right = "auto";
      layer.style.bottom = "auto";
      layer.style.inset = "auto";
    }
  });
}

function scheduleScaledPreviewLayouts() {
  cancelAnimationFrame(scaledPreviewLayoutRaf);
  scaledPreviewLayoutRaf = requestAnimationFrame(() => {
    if (isPdpPreviewOpen() && getPdpTerminal() === "web") syncPdpWebPreviewScale();
    if (isBeltAuditModalOpen()) {
      syncBeltAuditPreviewScales();
      if (els.beltOnlineApp?.querySelector(".beltAuditOnline__clone")) scaleOnlineClones();
    }
  });
}

function renderPdpBeltMount() {
  const terminal = getPdpTerminal();
  syncPdpTerminalTabs(terminal);
  const { el: source, label } = pickBeltPreviewSourceEl(terminal);
  if (!source) return;
  const mountEl = getPdpBeltMountEl(terminal);
  mountBeltCloneTo(mountEl, source, PDP_BELT_INNER_CLASS[terminal] || PDP_BELT_INNER_CLASS.app);
  if (els.pdpBeltVariantHint) {
    const termLabel = PDP_TERMINAL_LABELS[terminal] || terminal;
    els.pdpBeltVariantHint.textContent = `当前展示：${termLabel} · ${label}`;
  }
  scheduleScaledPreviewLayouts();
}

function openPdpPreviewModal() {
  if (!canOpenPdpPreview()) {
    showToast("请先选择场景颜色、输入品牌色或从图片提取色值");
    return;
  }
  ensureBeltStateFromScheme();
  syncAllBeltPreviews();
  loadPdpTerminal();
  renderPdpBeltMount();
  els.pdpPreviewModal?.classList.remove("hidden");
  document.body.classList.add("pdpModal-open");
  if (getPdpTerminal() === "web") {
    forcePdpWebPreviewScaleLayout();
    requestAnimationFrame(forcePdpWebPreviewScaleLayout);
  } else {
    scheduleScaledPreviewLayouts();
  }
  els.pdpModalClose?.focus();
}

function closePdpPreviewModal() {
  teardownPdpWebScaleObserver();
  resetPdpWebPreviewScale();
  els.pdpPreviewModal?.classList.add("hidden");
  document.body.classList.remove("pdpModal-open");
}

function updatePdpPreviewBtnState() {
  const ready = canOpenPdpPreview();
  if (els.pdpPreviewBtn) els.pdpPreviewBtn.disabled = !ready;
  if (els.onlinePreviewBtn) els.onlinePreviewBtn.disabled = !ready;
  if (els.exportFileBtn) els.exportFileBtn.disabled = !ready;
  if (els.copyBeltJsonBtn) els.copyBeltJsonBtn.disabled = !ready;
  if (els.exportAllBtn) els.exportAllBtn.disabled = !ready;
}

/** WCAG 2.x 对比度（两色相对亮度比） */
function wcagContrastRatio(hexA, hexB) {
  const rgbA = hexToRgb(hexA);
  const rgbB = hexToRgb(hexB);
  if (!rgbA || !rgbB) return null;
  const L1 = relativeLuminance(rgbA);
  const L2 = relativeLuminance(rgbB);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function loadAuditMeta() {
  try {
    const raw = localStorage.getItem(AUDIT_META_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAuditMeta(meta) {
  try {
    localStorage.setItem(AUDIT_META_KEY, JSON.stringify(meta || {}));
  } catch {
    /* ignore */
  }
}

function getAuditMetaFromUI() {
  const terminals = [];
  document.querySelectorAll('input[name="auditTerminal"]:checked').forEach((el) => {
    terminals.push(el.value);
  });
  return {
    projectName: els.auditProjectName?.value?.trim() || "",
    businessLine: els.auditBusinessLine?.value || "",
    activityType: els.auditActivityType?.value || "",
    terminals,
    launchDate: els.auditLaunchDate?.value || "",
    submitterErp: els.auditSubmitterErp?.value?.trim() || "",
  };
}

function syncAuditMetaToUI(meta = state.auditMeta || {}) {
  if (els.auditProjectName) els.auditProjectName.value = meta.projectName || "";
  if (els.auditBusinessLine) els.auditBusinessLine.value = meta.businessLine || "";
  if (els.auditActivityType) els.auditActivityType.value = meta.activityType || "";
  if (els.auditLaunchDate) {
    els.auditLaunchDate.value = meta.launchDate || todayYmdForAudit();
  }
  if (els.auditSubmitterErp) els.auditSubmitterErp.value = meta.submitterErp || "";
  const set = new Set(meta.terminals || ["mobile2", "mobile3", "pc"]);
  document.querySelectorAll('input[name="auditTerminal"]').forEach((el) => {
    el.checked = set.has(el.value);
  });
}

function todayYmdForAudit() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function initAuditMetaForm() {
  state.auditMeta = { ...loadAuditMeta() };
  if (!state.auditMeta.launchDate) state.auditMeta.launchDate = todayYmdForAudit();
  if (!state.auditMeta.terminals?.length) {
    state.auditMeta.terminals = ["mobile2", "mobile3", "pc"];
  }
  syncAuditMetaToUI(state.auditMeta);
  if (auditMetaFormBound) return;
  auditMetaFormBound = true;
  const persist = () => {
    state.auditMeta = getAuditMetaFromUI();
    saveAuditMeta(state.auditMeta);
    if (isBeltAuditModalOpen()) {
      evaluateAuditFlowGate(state.lastBeltAuditReport);
    }
  };
  [
    els.auditProjectName,
    els.auditBusinessLine,
    els.auditActivityType,
    els.auditLaunchDate,
    els.auditSubmitterErp,
  ].forEach((el) => el?.addEventListener("change", persist));
  [
    els.auditProjectName,
    els.auditSubmitterErp,
  ].forEach((el) => el?.addEventListener("input", persist));
  document.querySelectorAll('input[name="auditTerminal"]').forEach((el) => {
    el.addEventListener("change", persist);
  });
}

function buildAuditContext() {
  ensureBeltStateFromScheme();
  const scheme = resolvePreviewScheme();
  const display = computeBeltDisplay();
  const meta = getAuditMetaFromUI();
  state.auditMeta = meta;
  saveAuditMeta(meta);
  return {
    meta,
    scheme,
    display,
    atmosphere: state.atmosphereImage,
    selectedBenefitIds: state.selectedBenefitIds,
    selectedIpIds: state.selectedIpIds,
    selectedScenarioId: state.selectedScenarioId,
    wcagContrastRatio,
    getCountdownBlockBgColor,
    getCountdownDigitColor,
    getBenefitById,
    getBenefitDisplayText,
    getBenefitTextMax,
    isBenefitTextEditable,
    BENEFIT_PRESETS,
    BELT_DISPLAY_RULES,
    hexToOklch,
    getScenarioById,
  };
}

/** 对当前腰带配置做自动化审核（v0.21 规则引擎） */
async function runBeltAutomatedAudit() {
  const ctx = buildAuditContext();
  if (window.BeltAuditV21?.run) {
    return sanitizeAuditReport(await window.BeltAuditV21.run(ctx));
  }
  throw new Error("belt-audit.js 未加载");
}

function __legacyAuditRemoved() {
  const ctx = null;
  void ctx;
}

async function __legacyRunBeltAutomatedAudit_DELETED(ctx) {
  ensureBeltStateFromScheme();
  const scheme = resolvePreviewScheme();
  const display = computeBeltDisplay();
  const items = [];
  const period = display.period || "promo";
  const periodLabel = period === "daily" ? "日常" : "大促";
  const lp = state.leftPrice || getLeftPriceFromUI() || DEFAULT_LEFT_PRICE;

  const push = (item) => items.push(createBeltAuditItem(item));

  if (!scheme?.beltBg && !scheme?.brand) {
    push({
      id: "belt-color",
      level: "error",
      category: "配色",
      title: "未配置腰带底色",
      detail: "请先输入品牌色、选择场景色或从图片提取色值并完成映射。",
    });
  } else {
    push({
      id: "belt-color",
      level: "pass",
      category: "配色",
      title: "腰带底色已配置",
      detail: `beltBg ${scheme.beltBg || scheme.brand}`,
    });
  }

  if (!display.ips.length) {
    push({
      id: "ip-required",
      level: "error",
      category: "内容",
      title: "未选择品牌 IP",
      detail: "请在右侧品牌 IP 图库中至少选择 1 个。",
    });
  } else {
    push({
      id: "ip-required",
      level: "pass",
      category: "内容",
      title: "品牌 IP 已选择",
      detail: display.ips.map((i) => i.name).join("、"),
    });
    const maxIp = getMaxIpSelectCount(period);
    if (display.ips.length > maxIp) {
      push({
        id: "ip-count",
        level: "error",
        category: "内容",
        title: "品牌 IP 数量超限",
        detail: `${periodLabel}档期最多 ${maxIp} 个，当前 ${display.ips.length} 个。`,
      });
    }
  }

  const benefitIds = state.selectedBenefitIds || [];
  if (!benefitIds.length) {
    push({
      id: "benefit-required",
      level: "error",
      category: "内容",
      title: "未选择利益点",
      detail: "请在 ② 利益点中至少选择 1 个（倒计时 / 领券 / 口号）。",
    });
  } else {
    const b = getBenefitById(benefitIds[0]);
    push({
      id: "benefit-required",
      level: "pass",
      category: "内容",
      title: "利益点已选择",
      detail: b ? `${b.label}：${getBenefitDisplayText(b.id) || b.text}` : benefitIds[0],
    });
  }

  const priceNum = String(lp.price || "").replace(/^¥\s*/, "").trim();
  if (!priceNum) {
    push({
      id: "price-required",
      level: "error",
      category: "内容",
      title: "到手价为空",
      detail: "价促信息区需填写到手价。",
    });
  } else {
    push({
      id: "price-required",
      level: "pass",
      category: "内容",
      title: "到手价已填写",
      detail: `¥${priceNum}`,
    });
  }

  const discountRaw = String(lp.discountText ?? "").trim();
  if (discountRaw.length > LEFT_DISCOUNT_TEXT_MAX) {
    push({
      id: "left-discount-len",
      level: "error",
      category: "内容",
      title: "价促文案超长",
      detail: `最多 ${LEFT_DISCOUNT_TEXT_MAX} 字，当前 ${discountRaw.length} 字。`,
    });
  }

  const cdRaw = String(state.leftPrice?.countdownText ?? "").trim();
  if (cdRaw.length > LEFT_COUNTDOWN_TEXT_MAX) {
    push({
      id: "left-countdown-len",
      level: "error",
      category: "内容",
      title: "倒计时文案超长",
      detail: `最多 ${LEFT_COUNTDOWN_TEXT_MAX} 字，当前 ${cdRaw.length} 字。`,
    });
  }

  const soldRaw = String(state.leftPrice?.soldText ?? "").trim();
  if (soldRaw.length > LEFT_SOLD_TEXT_MAX) {
    push({
      id: "left-sold-len",
      level: "error",
      category: "内容",
      title: "已售文案超长",
      detail: `最多 ${LEFT_SOLD_TEXT_MAX} 字，当前 ${soldRaw.length} 字。`,
    });
  }

  benefitIds.forEach((id) => {
    const preset = BENEFIT_PRESETS.find((b) => b.id === id);
    if (!preset || !isBenefitTextEditable(preset)) return;
    const max = getBenefitTextMax(preset);
    const raw = state.benefitTexts?.[id];
    const len = raw !== undefined && raw !== null ? String(raw).length : (preset.text || "").length;
    if (len > max) {
      push({
        id: `benefit-len-${id}`,
        level: "error",
        category: "内容",
        title: `利益点「${preset.label}」文案超长`,
        detail: `最多 ${max} 字，当前 ${len} 字。`,
      });
    }
  });

  const bg = scheme?.beltBg || scheme?.brand;
  const textPrimary = scheme?.textPrimary;
  if (bg && textPrimary) {
    const ratio = wcagContrastRatio(textPrimary, bg);
    if (ratio === null) {
      push({
        id: "contrast-primary",
        level: "warn",
        category: "对比度",
        title: "主文字对比度无法计算",
        detail: "色值格式异常，请检查 beltBg / textPrimary。",
      });
    } else if (ratio < BELT_AUDIT_WCAG_AA) {
      push({
        id: "contrast-primary",
        level: "error",
        category: "对比度",
        title: "主文字对比度不足",
        detail: `textPrimary 与 beltBg 对比度 ${ratio.toFixed(2)}:1，需 ≥ ${BELT_AUDIT_WCAG_AA}:1（WCAG AA）。`,
      });
    } else {
      push({
        id: "contrast-primary",
        level: "pass",
        category: "对比度",
        title: "主文字对比度达标",
        detail: `${ratio.toFixed(2)}:1（≥ ${BELT_AUDIT_WCAG_AA}:1）`,
      });
    }

    const blockBg = getCountdownBlockBgColor(scheme);
    const digitColor = getCountdownDigitColor(scheme);
    const cdRatio = wcagContrastRatio(digitColor, blockBg);
    if (cdRatio !== null) {
      if (cdRatio < BELT_AUDIT_WCAG_AA) {
        push({
          id: "contrast-countdown",
          level: "error",
          category: "对比度",
          title: "倒计时数字对比度不足",
          detail: `数字与底块对比度 ${cdRatio.toFixed(2)}:1，需 ≥ ${BELT_AUDIT_WCAG_AA}:1。`,
        });
      } else {
        push({
          id: "contrast-countdown",
          level: "pass",
          category: "对比度",
          title: "倒计时数字对比度达标",
          detail: `${cdRatio.toFixed(2)}:1`,
        });
      }
    }
  }

  if (state.selectedScenarioId) {
    const sc = getScenarioById(state.selectedScenarioId);
    const o = bg ? hexToOklch(bg) : null;
    if (sc && o) {
      const [Lmin, Lmax] = sc.range.L;
      const [Cmin, Cmax] = sc.range.C;
      const outL = o.L < Lmin - 0.01 || o.L > Lmax + 0.01;
      const outC = o.C < Cmin - 0.005 || o.C > Cmax + 0.005;
      if (outL || outC) {
        push({
          id: "scenario-range",
          level: "warn",
          category: "配色",
          title: "底色超出场景安全区间",
          detail: `${sc.mind}：L ${o.L.toFixed(3)}（${Lmin}–${Lmax}）、C ${o.C.toFixed(3)}（${Cmin}–${Cmax}）`,
        });
      } else {
        push({
          id: "scenario-range",
          level: "pass",
          category: "配色",
          title: "底色在场景安全区间内",
          detail: sc.mind,
        });
      }
    }
  }

  if (!state.atmosphereImage?.src) {
    push({
      id: "atmosphere",
      level: "warn",
      category: "氛围icon",
      title: "未配置氛围icon",
      detail: "建议上传或选择内置氛围icon，以符合腰带规范示意。",
    });
  } else {
    push({
      id: "atmosphere",
      level: "pass",
      category: "氛围icon",
      title: "氛围icon已配置",
      detail: state.atmosphereImage.name || "已选图",
    });
  }

  push({
    id: "pattern",
    level: "pass",
    category: "排版",
    title: "组合形式",
    detail: display.pattern || "-",
  });

  display.lines.forEach((line, idx) => {
    if (line.truncated) {
      push({
        id: `line-trunc-${idx}`,
        level: "warn",
        category: "排版",
        title: `第 ${line.lineIndex || idx + 1} 行文案被截断`,
        detail: `展示「${line.text}」，原文「${line.original || line.label}」`,
      });
    }
  });

  (display.warnings || []).forEach((msg, i) => {
    push({
      id: `compose-warn-${i}`,
      level: "warn",
      category: "排版",
      title: "排版规则提示",
      detail: msg,
    });
  });

  if (display.lines.length > BELT_DISPLAY_RULES.MAX_LINES) {
    push({
      id: "line-count",
      level: "error",
      category: "排版",
      title: "展示行数超限",
      detail: `最多 ${BELT_DISPLAY_RULES.MAX_LINES} 行，当前 ${display.lines.length} 行。`,
    });
  }

  const summary = summarizeBeltAuditReport(items);
  const passed = summary.error === 0;
  const status = passed ? (summary.warn > 0 ? "warn" : "pass") : "fail";

  return {
    version: 1,
    status,
    passed,
    checkedAt: new Date().toISOString(),
    summary,
    items,
    context: {
      beltBg: scheme?.beltBg,
      pattern: display.pattern,
      period,
      lineCount: display.lines.length,
      scenarioId: state.selectedScenarioId || null,
    },
  };
}

function auditBadgeClass(result) {
  if (result === "fail") return "beltAuditBadge--bad";
  if (result === "pass_risk") return "beltAuditBadge--warn";
  if (result === "pass") return "beltAuditBadge--good";
  return "beltAuditBadge--muted";
}

function renderBeltAuditFlow(steps, activeIndex = -1) {
  if (!els.beltAuditFlow) return;
  els.beltAuditFlow.innerHTML = "";
  (steps || []).forEach((step, idx) => {
    const isFailed = Boolean(step.failed);
    const isDone = Boolean(step.done) && !isFailed;
    const isActive = !isDone && !isFailed && idx === activeIndex;
    const row = document.createElement("div");
    const stateClass = isFailed
      ? " beltAuditFlow__item--failed"
      : isDone
        ? " beltAuditFlow__item--done"
        : isActive
          ? " beltAuditFlow__item--active"
          : "";
    row.className = `beltAuditFlow__item${stateClass}`;
    row.setAttribute("role", "listitem");
    const dotContent = isFailed ? "✕" : isDone ? "✓" : String(step.step ?? idx + 1);
    row.innerHTML = `
      <span class="beltAuditFlow__dot" aria-hidden="true">${dotContent}</span>
      <span class="beltAuditFlow__label">${escapeHtml(step.label || "")}</span>
    `;
    els.beltAuditFlow.appendChild(row);
  });
}

const AUDIT_FLOW_FALLBACK_STEPS = [
  { step: 1, label: "运营填写基础信息" },
  { step: 2, label: "AI 自动审核" },
  { step: 3, label: "人工审核" },
  { step: 4, label: "发布上线" },
];

/** 强制 4 步流程，剔除已废弃的「数据追踪」并防止旧缓存报告带出第 5 步 */
function normalizeAuditFlowSteps(rawSteps) {
  const filtered = (Array.isArray(rawSteps) && rawSteps.length ? rawSteps : AUDIT_FLOW_FALLBACK_STEPS)
    .filter((s) => !/数据追踪/.test(String(s.label || "")))
    .slice(0, AUDIT_FLOW_FALLBACK_STEPS.length);
  return AUDIT_FLOW_FALLBACK_STEPS.map((fallback, i) => ({
    ...fallback,
    ...(filtered[i] || {}),
    step: i + 1,
    label: fallback.label,
  }));
}

function sanitizeAuditReport(report) {
  if (!report || typeof report !== "object") return report;
  const flowSteps = normalizeAuditFlowSteps(report.flowSteps);
  return flowSteps === report.flowSteps ? report : { ...report, flowSteps };
}

function isAuditMetaComplete(meta) {
  const m = meta || state.auditMeta || {};
  const terminals = Array.isArray(m.terminals) ? m.terminals : [];
  return Boolean(
    String(m.projectName || "").trim() &&
    String(m.businessLine || "").trim() &&
    String(m.activityType || "").trim() &&
    String(m.launchDate || "").trim() &&
    String(m.submitterErp || "").trim() &&
    terminals.length > 0
  );
}

function setAuditCtrlDisabled(el, disabled, title) {
  if (!el) return;
  el.disabled = Boolean(disabled);
  el.setAttribute("aria-disabled", String(Boolean(disabled)));
  if (title !== undefined) el.title = disabled ? title : "";
}

function getAuditProgress() {
  if (!state.auditProgress) {
    state.auditProgress = { manualDone: false, publishDone: false };
  }
  return state.auditProgress;
}

function resetAuditProgressAfter(stepIndex) {
  const p = getAuditProgress();
  if (stepIndex < 3) p.manualDone = false;
  if (stepIndex < 4) p.publishDone = false;
}

const AUDIT_STAGES = ["meta", "audit", "result", "manual", "publish"];

function computeAuditStage(metaComplete, reportReady, progress) {
  if (!metaComplete) return "meta";
  if (!reportReady) return "audit";
  if (!progress.manualDone) return "result";
  if (!progress.publishDone) return "manual";
  return "publish";
}

function applyAuditStageUI(stage) {
  const stageIdx = AUDIT_STAGES.indexOf(stage);
  if (stageIdx < 0) return;
  if (els.beltAuditModal) els.beltAuditModal.dataset.stage = stage;

  document.querySelectorAll("[data-audit-min-stage]").forEach((el) => {
    const required = el.getAttribute("data-audit-min-stage");
    const requiredIdx = AUDIT_STAGES.indexOf(required);
    if (requiredIdx < 0) return;
    const maxStage = el.getAttribute("data-audit-max-stage");
    const maxIdx = maxStage ? AUDIT_STAGES.indexOf(maxStage) : Infinity;
    el.hidden = stageIdx < requiredIdx || stageIdx > maxIdx;
  });

  document.querySelectorAll("[data-audit-max-stage]:not([data-audit-min-stage])").forEach((el) => {
    const maxStage = el.getAttribute("data-audit-max-stage");
    const maxIdx = AUDIT_STAGES.indexOf(maxStage);
    if (maxIdx < 0) return;
    el.hidden = stageIdx > maxIdx;
  });

  document.querySelectorAll("[data-audit-only-stage]").forEach((el) => {
    const only = el.getAttribute("data-audit-only-stage");
    el.hidden = only !== stage;
  });

  // 进入「发布上线」阶段：渲染商详线上预览效果
  if (stage === "publish") {
    renderBeltOnlinePreview();
  }
}

function evaluateAuditFlowGate(report) {
  const metaComplete = isAuditMetaComplete(state.auditMeta || getAuditMetaFromUI());
  const reportReady = Boolean(report && report.status);
  const progress = getAuditProgress();
  const stage = computeAuditStage(metaComplete, reportReady, progress);
  applyAuditStageUI(stage);

  const base = normalizeAuditFlowSteps(report?.flowSteps);

  // 判断 AI 审核是否未通过（用于 timeline 第 2 步显示红叉）
  const auditFailed = reportReady && (
    report?.passed === false ||
    report?.status === "fail" ||
    report?.result === "fail"
  );

  // 4 步：基础信息 → AI 自动审核 → 人工审核 → 发布上线（上线数据在数据看板沉淀）
  if (base[0]) base[0].done = metaComplete;
  if (base[1]) {
    base[1].done = metaComplete && reportReady;
    base[1].failed = Boolean(auditFailed);
    if (reportReady && report?.nextAction) base[1].action = report.nextAction;
  }
  if (base[2]) base[2].done = metaComplete && reportReady && !auditFailed && progress.manualDone;
  if (base[3]) base[3].done = metaComplete && reportReady && !auditFailed && progress.manualDone && progress.publishDone;

  // AI 审核未通过时，timeline 后续节点保持灰色（不再 active 高亮）
  const activeIndex = auditFailed ? -1 : base.findIndex((s) => !s.done);
  renderBeltAuditFlow(base, activeIndex);

  if (els.beltAuditFlowGateHint) {
    const setHint = (text, gated) => {
      els.beltAuditFlowGateHint.textContent = text;
      els.beltAuditFlowGateHint.classList.toggle("beltAuditTimeline__hint--gate", Boolean(gated));
    };
    if (!metaComplete) {
      setHint(
        "请先完成「① 运营填写基础信息」（项目名称 / 业务线 / 活动类型 / 上线日期 / 提审人 ERP / 上线端），再进入后续步骤。",
        true,
      );
    } else if (!reportReady) {
      setHint("基础信息已填齐，点击下方「进入 AI 自动审核」按钮开始审核。", false);
    } else if (!progress.manualDone) {
      setHint(
        report?.nextAction
          ? `下一步：${report.nextAction}（请点击「人工审核」继续）`
          : "AI 审核已完成，请点击「人工审核」进入下一步。",
        false,
      );
    } else if (!progress.publishDone) {
      setHint("人工审核已通过，请点击「发布上线」推送至线上。", false);
    } else {
      setHint("全部流程已完成。上线效果数据请在左侧「数据看板」查看 Top10 腰带排名。", false);
    }
  }

  setAuditCtrlDisabled(
    els.beltAuditStartBtn,
    !metaComplete,
    !metaComplete ? "请先完成基础信息再进入 AI 审核" : "",
  );

  if (els.beltAuditManualBtn) {
    const prevDisabled = els.beltAuditManualBtn.disabled;
    const manualDisabled = prevDisabled || !metaComplete || !reportReady || progress.manualDone;
    let title = "";
    if (!metaComplete) title = "请先完成基础信息再进入人工审核";
    else if (!reportReady) title = "请先生成 AI 审核结果";
    else if (progress.manualDone) title = "人工审核已完成";
    else if (prevDisabled) title = els.beltAuditManualBtn.title;
    setAuditCtrlDisabled(els.beltAuditManualBtn, manualDisabled, title);
  }

  setAuditCtrlDisabled(
    els.beltAuditPublishBtn,
    !progress.manualDone || progress.publishDone,
    !progress.manualDone ? "请先完成人工审核" : progress.publishDone ? "已发布上线" : "",
  );
  return { metaComplete, reportReady, progress };
}

function renderBeltAuditMetrics(metrics) {
  if (!els.beltAuditMetricGrid) return;
  els.beltAuditMetricGrid.innerHTML = "";
  (metrics || []).forEach(([key, val]) => {
    const cell = document.createElement("div");
    cell.className = "beltAuditMetric";
    cell.innerHTML = `
      <div class="beltAuditMetric__key">${key}</div>
      <div class="beltAuditMetric__val">${val ?? "-"}</div>
    `;
    els.beltAuditMetricGrid.appendChild(cell);
  });
}

function renderBeltAuditIssuesList(issues) {
  if (!els.beltAuditIssues) return;
  els.beltAuditIssues.innerHTML = "";
  // 与腰带预览上的标注 marker 使用一致的过滤与编号（跳过 meta-*）
  const list = (issues || []).filter((it) => !String(it?.id || "").startsWith("meta-"));
  if (!list.length) {
    const empty = document.createElement("li");
    empty.className = "beltAuditIssue beltAuditIssue--pass";
    empty.textContent = "暂无待处理问题";
    els.beltAuditIssues.appendChild(empty);
    return;
  }
  list.forEach((item, idx) => {
    const li = document.createElement("li");
    const level = item.level === "P1" ? "error" : item.level === "P2" ? "warn" : "pass";
    const sev = level === "error" ? "error" : level === "warn" ? "warn" : "pass";
    li.className = `beltAuditIssue beltAuditIssue--${level}`;
    const num = idx + 1;
    li.innerHTML = `
      <div class="beltAuditIssue__head">
        <span class="beltAuditIssue__num beltAuditIssue__num--${sev}">${num}</span>
        <strong class="beltAuditIssue__title">${escapeHtml(item.title || item.category || "问题")}</strong>
      </div>
      ${item.description ? `<div class="beltAuditIssue__desc">${escapeHtml(item.description)}</div>` : ""}
      ${item.suggestion ? `<div class="beltAuditIssue__suggest">建议：${escapeHtml(item.suggestion)}</div>` : ""}
    `;
    els.beltAuditIssues.appendChild(li);
  });
}

function renderBeltAuditAdviceList(advice) {
  if (!els.beltAuditAdvice) return;
  els.beltAuditAdvice.innerHTML = "";
  const list = advice || [];
  if (!list.length) {
    const empty = document.createElement("li");
    empty.className = "beltAuditAdvice";
    empty.textContent = "暂无额外修改建议";
    els.beltAuditAdvice.appendChild(empty);
    return;
  }
  list.forEach((text) => {
    const li = document.createElement("li");
    li.className = "beltAuditAdvice";
    li.textContent = text;
    els.beltAuditAdvice.appendChild(li);
  });
}

function renderBeltAuditPreviews() {
  refreshPreviewDomRefs();
  primeBeltPreview();
  if (els.beltAuditMount2 && els.beltPreview) {
    mountBeltCloneTo(els.beltAuditMount2, els.beltPreview, "beltAuditPreviewInner");
  }
  if (els.beltAuditMount3 && els.beltPreview3) {
    mountBeltCloneTo(els.beltAuditMount3, els.beltPreview3, "beltAuditPreviewInner");
  }
  if (els.beltAuditMountPc && els.beltPreviewPc) {
    mountBeltCloneTo(els.beltAuditMountPc, els.beltPreviewPc, "beltAuditPreviewInner");
  }
  scheduleScaledPreviewLayouts();
  renderBeltAuditAnnotations(state.lastBeltAuditReport);
  renderBeltOnlinePreview();
}

/** 把腰带挂进三端真实 PDP 预览节点（App/小程序/Web），与「商详预览」共用同一套 DOM */
function renderAllPdpBeltMounts() {
  PDP_TERMINALS.forEach((terminal) => {
    const { el: source } = pickBeltPreviewSourceEl(terminal);
    const mountEl = getPdpBeltMountEl(terminal);
    if (!source || !mountEl) return;
    mountBeltCloneTo(
      mountEl,
      source,
      PDP_BELT_INNER_CLASS[terminal] || PDP_BELT_INNER_CLASS.app,
    );
  });
}

/** 把真实 PDP 面板整体克隆进线上预览容器，并等比缩放铺满列宽 */
function mountOnlineClone(frame, selector, designW) {
  if (!frame) return;
  const panel = document.querySelector(selector);
  if (!panel) return;
  frame.innerHTML = "";
  const inner = document.createElement("div");
  inner.className = "beltAuditOnline__clone";
  const clone = panel.cloneNode(true);
  clone.style.width = `${designW}px`;
  clone.style.maxWidth = "none";
  clone.style.margin = "0";
  clone.style.transform = "none";
  clone.removeAttribute("hidden");
  clone.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
  inner.appendChild(clone);
  frame.appendChild(inner);
  frame.dataset.designW = String(designW);
}

function scaleOnlineClones() {
  const frames = [
    { frame: els.beltOnlineApp, designW: 375 },
    { frame: els.beltOnlineMini, designW: 375 },
    { frame: els.beltOnlineWeb, designW: PDP_WEB_DESIGN_W },
  ];
  frames.forEach(({ frame, designW }) => {
    if (!frame) return;
    const inner = frame.querySelector(".beltAuditOnline__clone");
    if (!inner) return;
    const available = frame.clientWidth;
    if (available <= 0) return;
    const scale = Math.min(1, available / designW);
    inner.style.transformOrigin = "top left";
    inner.style.transform = `scale(${scale})`;
    const naturalH = inner.offsetHeight;
    frame.style.height = `${Math.ceil(naturalH * scale)}px`;
  });
}

/** 发布上线后：线上预览效果 = 商详预览三端真实页面（含腰带），保持完全一致 */
function renderBeltOnlinePreview() {
  refreshPreviewDomRefs();
  ensureBeltStateFromScheme();
  syncAllBeltPreviews();
  renderAllPdpBeltMounts();
  mountOnlineClone(els.beltOnlineApp, "#pdpPanelApp .pdpPhone", 375);
  mountOnlineClone(els.beltOnlineMini, "#pdpPanelMp .pdpMp", 375);
  mountOnlineClone(els.beltOnlineWeb, "#pdpPanelWeb .pdpWeb", PDP_WEB_DESIGN_W);
  requestAnimationFrame(() => {
    scaleOnlineClones();
    requestAnimationFrame(scaleOnlineClones);
  });
}

function getIssueAnchor(issue) {
  const id = String(issue?.id || "");
  if (id.startsWith("meta-")) return null;
  if (id.startsWith("ip-")) return "left";
  if (id.startsWith("benefit-") || id === "right-overload") return "right";
  if (id.startsWith("color-countdown")) return "right";
  if (
    id.startsWith("color-text") ||
    id.startsWith("color-contrast") ||
    id === "line-truncated" ||
    id === "compose-warn"
  )
    return "middle";
  if (id.startsWith("color-bg")) return "frame";
  return "frame";
}

function clearBeltAuditAnnotations() {
  document
    .querySelectorAll(".beltAuditAnnotationLayer, .beltAuditPreviewBlock__issues")
    .forEach((n) => n.remove());
}

function renderBeltAuditAnnotations(report) {
  clearBeltAuditAnnotations();
  const items = (report?.issues || []).filter(
    (it) => !String(it.id || "").startsWith("meta-"),
  );
  const numbered = items.map((it, idx) => ({ ...it, __num: idx + 1, __anchor: getIssueAnchor(it) || "frame" }));
  const mounts = [
    els.beltAuditMount2,
    els.beltAuditMount3,
    els.beltAuditMountPc,
  ].filter(Boolean);

  mounts.forEach((mount) => {
    mount.style.position = "relative";
    if (!numbered.length) return;
    const layer = document.createElement("div");
    layer.className = "beltAuditAnnotationLayer";
    layer.setAttribute("aria-hidden", "true");
    const groups = { left: [], middle: [], right: [], frame: [] };
    numbered.forEach((it) => {
      const k = groups[it.__anchor] ? it.__anchor : "frame";
      groups[k].push(it);
    });
    Object.entries(groups).forEach(([key, list]) => {
      if (!list.length) return;
      const group = document.createElement("div");
      group.className = `beltAuditAnnotationGroup beltAuditAnnotationGroup--${key}`;
      list.forEach((it) => {
        const marker = document.createElement("span");
        const sev = it.level === "P1" ? "error" : "warn";
        marker.className = `beltAuditAnnotation beltAuditAnnotation--${sev}`;
        marker.textContent = String(it.__num);
        const tipParts = [it.title || it.id, it.description, it.suggestion].filter(Boolean);
        marker.title = tipParts.join(" · ");
        group.appendChild(marker);
      });
      layer.appendChild(group);
    });
    mount.appendChild(layer);
  });

  // 移除预览块下方的文字说明列表（已统一在左侧"问题原因"卡片展示）
  document.querySelectorAll(".beltAuditPreviewBlock").forEach((block) => {
    block.querySelectorAll(".beltAuditPreviewBlock__issues").forEach((n) => n.remove());
  });

  // 标注层插入后再触发一次缩放同步，确保 layer 尺寸贴合腰带
  scheduleScaledPreviewLayouts();
}

function renderBeltAuditModal(report) {
  if (!report) return;
  const result = report.result || report.status || "unknown";
  const summary = report.summary || { pass: 0, warn: 0, error: 0 };

  if (els.beltAuditResultBadge) {
    const label =
      report.aiResult ||
      (result === "pass"
        ? "通过"
        : result === "pass_risk"
          ? "通过（有风险）"
          : result === "fail"
            ? "不通过"
            : "未检测");
    els.beltAuditResultBadge.textContent = label;
    els.beltAuditResultBadge.className = `beltAuditBadge ${auditBadgeClass(result)}`;
  }

  if (els.beltAuditNextAction) {
    els.beltAuditNextAction.textContent = report.nextAction || "-";
  }

  renderBeltAuditMetrics(report.metrics);
  renderBeltAuditIssuesList(report.issues);
  renderBeltAuditAdviceList(report.advice);

  if (els.beltAuditCopyBtn) els.beltAuditCopyBtn.disabled = false;
  if (els.beltAuditManualBtn) {
    const nextAction = String(report.nextAction || "");
    const auditFailed =
      result === "fail" ||
      report.passed === false ||
      report.needDesignerReview === false ||
      nextAction.includes("返回运营") ||
      nextAction.includes("不进入设计");
    if (auditFailed) {
      els.beltAuditManualBtn.dataset.mode = "return";
      els.beltAuditManualBtn.textContent = "返回上一级修改";
      els.beltAuditManualBtn.classList.remove("btn--primary");
      els.beltAuditManualBtn.classList.add("btn--ghost");
      els.beltAuditManualBtn.title = "AI 审核未通过 · 关闭此页回到腰带配置后重新提审";
    } else {
      els.beltAuditManualBtn.dataset.mode = "manual";
      els.beltAuditManualBtn.textContent = "人工审核";
      els.beltAuditManualBtn.classList.add("btn--primary");
      els.beltAuditManualBtn.classList.remove("btn--ghost");
      els.beltAuditManualBtn.title = "";
    }
    els.beltAuditManualBtn.disabled = false;
    els.beltAuditManualBtn.removeAttribute("aria-disabled");
  }

  evaluateAuditFlowGate(report);

  if (els.beltAuditDesignerSummary && report.submitMeta) {
    const m = report.submitMeta;
    els.beltAuditDesignerSummary.textContent = `${m.projectName || "未命名"} · ${m.businessLine || "-"} · ${m.activityType || "-"}`;
  }
}

function isBeltAuditModalOpen() {
  return Boolean(els.beltAuditModal && !els.beltAuditModal.classList.contains("hidden"));
}

let auditStartInFlight = false;

async function startAuditFromCta() {
  if (auditStartInFlight) return;
  if (!isAuditMetaComplete(state.auditMeta || getAuditMetaFromUI())) {
    showToast("请先完成提审基础信息");
    return;
  }
  auditStartInFlight = true;
  const btn = els.beltAuditStartBtn;
  const prevLabel = btn?.textContent;
  if (btn) {
    btn.disabled = true;
    btn.setAttribute("aria-disabled", "true");
    btn.textContent = "AI 审核中…";
  }
  try {
    await rerunBeltAuditInModal();
  } catch (err) {
    console.warn("AI 审核失败", err);
  } finally {
    auditStartInFlight = false;
    if (btn) {
      btn.textContent = prevLabel || "进入 AI 自动审核";
    }
  }
}

function openBeltAuditModal(report) {
  initAuditMetaForm();
  syncAuditMetaToUI(state.auditMeta || loadAuditMeta());
  state.lastBeltAuditReport = report ? sanitizeAuditReport(report) : null;
  state.auditProgress = { manualDone: false, publishDone: false };
  if (report) {
    renderBeltAuditModal(state.lastBeltAuditReport);
  } else {
    // 没有 report：仅打开 modal，等待用户点击「进入 AI 自动审核」
    evaluateAuditFlowGate(null);
  }
  renderBeltAuditPreviews();
  els.beltAuditModal?.classList.remove("hidden");
  document.body.classList.add("beltAuditPage-open");
  els.beltAuditModalClose?.focus();
  requestAnimationFrame(() => requestAnimationFrame(syncBeltAuditPreviewScales));
}

function closeBeltAuditModal() {
  els.beltAuditModal?.classList.add("hidden");
  document.body.classList.remove("beltAuditPage-open");
  if (typeof clearAuditAutoAdvanceTimers === "function") {
    clearAuditAutoAdvanceTimers();
  }
}

function openBeltAuditSubModal(kind) {
  if (kind === "manual" && els.beltAuditManualBtn?.disabled) return;
  const modal =
    kind === "designer" ? els.beltAuditDesignerModal : els.beltAuditManualModal;
  if (!modal) return;
  if (kind === "designer") {
    const report = state.lastBeltAuditReport;
    if (els.beltAuditDesignerSummary && report?.submitMeta) {
      const m = report.submitMeta;
      els.beltAuditDesignerSummary.textContent = `${m.projectName || "未命名"} · ${m.businessLine || "-"} · ${m.activityType || "-"}`;
    }
    const thumb = els.beltAuditDesignerThumb;
    const source = els.beltPreview || document.getElementById("beltPreview");
    if (thumb && source) {
      mountBeltCloneTo(thumb, source, "beltAuditPreviewInner");
    }
  }
  modal.classList.remove("hidden");
  document.body.classList.add("beltAuditPage-open");
}

function closeBeltAuditSubModals() {
  els.beltAuditManualModal?.classList.add("hidden");
  els.beltAuditDesignerModal?.classList.add("hidden");
  if (
    !isBeltAuditModalOpen() &&
    (!els.pdpPreviewModal || els.pdpPreviewModal.classList.contains("hidden"))
  ) {
    document.body.classList.remove("beltAuditPage-open");
  }
}

async function submitBeltForAudit() {
  if (!canOpenPdpPreview()) {
    showToast("请先完成品牌色映射后再提交审核");
    return;
  }
  initAuditMetaForm();
  state.auditMeta = getAuditMetaFromUI();
  saveAuditMeta(state.auditMeta);
  syncAllBeltPreviews();
  // 进入工作台不再自动跑审核，由用户先完成基础信息再手动点击「进入 AI 自动审核」
  openBeltAuditModal();
}

/** 为「上线效果预览」补齐缺失的基础信息（不覆盖用户已填项），使流程可直达发布阶段 */
function ensureAuditMetaForPreview() {
  const m = getAuditMetaFromUI();
  if (!m.projectName) {
    const scheme = resolvePreviewScheme();
    m.projectName = scheme?.brandName || scheme?.name || "腰带上线预览";
  }
  if (!m.businessLine) m.businessLine = "时尚";
  if (!m.activityType) m.activityType = "大促";
  if (!m.launchDate) m.launchDate = todayYmdForAudit();
  if (!m.submitterErp) m.submitterErp = "preview";
  if (!m.terminals?.length) m.terminals = ["mobile2", "mobile3", "pc"];
  syncAuditMetaToUI(m);
  state.auditMeta = m;
  saveAuditMeta(m);
  return m;
}

/** 单独预览「发布上线结果」：直接打开工作台并跳到发布阶段，仅展示线上三端效果 */
async function previewPublishResult() {
  if (!canOpenPdpPreview()) {
    showToast("请先完成品牌色映射后再预览上线效果");
    return;
  }
  initAuditMetaForm();
  syncAllBeltPreviews();
  let report;
  try {
    report = await runBeltAutomatedAudit();
  } catch (err) {
    console.error("AI 审核失败", err);
    showToast("审核引擎加载失败，请刷新页面重试");
    return;
  }
  openBeltAuditModal(report);
  ensureAuditMetaForPreview();
  const p = getAuditProgress();
  p.manualDone = true;
  p.publishDone = true;
  evaluateAuditFlowGate(report);
  renderBeltAuditPreviews();
  requestAnimationFrame(() => {
    renderBeltOnlinePreview();
    requestAnimationFrame(scaleOnlineClones);
    document
      .querySelector(".beltAuditOnline")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

// 旧的"进入即审核"流程（已下线），保留函数以便单独触发
async function submitBeltForAuditLegacy() {
  if (!canOpenPdpPreview()) {
    showToast("请先完成品牌色映射后再提交审核");
    return;
  }
  initAuditMetaForm();
  state.auditMeta = getAuditMetaFromUI();
  saveAuditMeta(state.auditMeta);
  syncAllBeltPreviews();
  let report;
  try {
    report = await runBeltAutomatedAudit();
  } catch (err) {
    console.error("AI 审核失败", err);
    showToast("审核引擎加载失败，请刷新页面重试");
    return;
  }
  openBeltAuditModal(report);
  if (report.passed) {
    const msg =
      report.summary.warn > 0
        ? `审核通过，有 ${report.summary.warn} 条建议项`
        : "审核通过，可进行商详预览";
    setExportHint(msg);
    showToast(msg, { type: "ok", duration: 3200 });
  } else {
    const msg = `审核未通过：${report.summary.error} 项需修改`;
    setExportHint(msg);
    showToast(msg, { type: "warn", duration: 3600 });
  }
}

function refreshBeltDisplay() {
  refreshBeltPreview({ full: true });
}

function clearLogoLine(mountEl, imgEl, textEl) {
  if (mountEl) {
    mountEl.innerHTML = "";
    mountEl.style.color = "";
  }
  if (imgEl) {
    imgEl.classList.add("hidden");
    imgEl.removeAttribute("src");
    imgEl.style.filter = "";
  }
  if (textEl) textEl.classList.add("hidden");
}

function renderLogoIntoLine({ mountEl, imgEl, textEl, logo, tint, svgHeight, textOnlyLabel }) {
  clearLogoLine(mountEl, imgEl, textEl);
  if (!logo) return;

  if (logo.textOnly) {
    if (!textEl) return;
    textEl.classList.remove("hidden");
    const brandEl = textEl.querySelector(".beltBrand");
    if (brandEl) {
      brandEl.textContent = textOnlyLabel || "国家补贴";
      brandEl.style.color = tint;
    }
    const chev = textEl.querySelector(".beltChevron");
    if (chev) chev.style.color = tint;
    return;
  }

  const markup = getLogoSvgMarkup(logo);
  if (isVectorLogo(logo) && markup) {
    const shown = mountVectorLogo(mountEl, markup, tint, logo.name, svgHeight, {
      cssSizeOnly: Boolean(mountEl?.closest?.(".beltCoreLine")),
    });
    if (!shown && imgEl) {
      imgEl.classList.remove("hidden");
      imgEl.src = vectorLogoDataUrl(logo, tint);
      imgEl.alt = logo.name;
    }
    return;
  }

  if (imgEl && logo.src) {
    imgEl.classList.remove("hidden");
    imgEl.src = logo.src;
    imgEl.alt = logo.name;
  }
}

function syncBeltRightMeta() {
  if (!state.belt) return;
  const display = state.lastDisplay || computeBeltDisplay();
  state.belt.rightCore = {
    period: display.period,
    maxLines: BELT_DISPLAY_RULES.MAX_LINES,
    ips: display.ips.map((logo) => ({
      id: logo.id,
      name: logo.name,
      ipLevel: logo.ipLevel,
      mindEnhance: Boolean(logo.mindEnhance && logo.useEnhance),
      display: getIpDisplayLabel(logo, logo.useEnhance),
    })),
    benefits: display.benefits.map((b) => ({
      id: b.id,
      category: b.category,
      text: b.text,
    })),
    discounts: (display.discounts || []).map((d) => ({
      id: d.id,
      category: d.category,
      text: d.text,
    })),
    line03Offer: display.line03Offer
      ? {
          id: display.line03Offer.id,
          category: display.line03Offer.category,
          text: display.line03Offer.text,
        }
      : null,
    pattern: display.pattern,
    lines: display.lines.map((l) => ({
      kind: l.kind,
      slot: l.slot,
      text: l.text,
      truncated: l.truncated,
    })),
    warnings: display.warnings,
  };
  state.belt.brandLogo = state.belt.rightCore;
  state.belt.atmosphereImage = state.atmosphereImage
    ? { ...state.atmosphereImage }
    : null;
}

/** 矢量 Logo 转 data URI，供 <img> 兜底 */
function vectorLogoDataUrl(logo, tint) {
  const svg = tintSvgMarkup(getLogoSvgMarkup(logo), tint);
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function appendLineText(row, text, color, extraClass = "") {
  const el = document.createElement("span");
  el.className = `beltCoreLine__text${extraClass ? ` ${extraClass}` : ""}`;
  el.style.color = color;
  el.textContent = text;
  row.appendChild(el);
}

/**
 * 右侧领券/优惠信息标签色：字=腰带底 beltBg；深底=白底；亮底=半透明价格色底
 * 自定义文字色时：字=自定义色，底=自定义色半透明
 */
function getCouponLabelColors(scheme) {
  const custom = getBeltBgCustomTextHex();
  if (custom) {
    return {
      text: custom,
      background: hexToRgbaString(custom, 0.16),
    };
  }
  const beltBg = scheme?.beltBg || scheme?.brand || "#1a1208";
  const priceColor = scheme?.textPrimary || "#e5c191";
  return {
    text: beltBg,
    background: resolveTagBackgroundColor(scheme, priceColor),
  };
}

function appendCouponLabel(row, text, scheme) {
  const { text: textColor, background: bgColor } = getCouponLabelColors(scheme);
  const el = document.createElement("span");
  el.className = "beltCoreLine__text beltCoreLine__text--coupon";
  el.style.color = textColor;
  el.style.backgroundColor = bgColor;
  el.textContent = String(text || "").replace(/\|/g, "·");
  row.appendChild(el);
}

function appendCountdownLabel(row, text, scheme) {
  row.appendChild(buildCountdownElement(text, scheme, "beltCountdown"));
}

function renderBenefitChipCountdownHtml(text) {
  const { prefix, hours, minutes, seconds } = parseCountdownDisplay(text);
  const colon = `<span class="benefitChipCountdown__colon benefitChipCountdown__colon--dot" aria-hidden="true">:</span>`;
  const blocks = [hours, minutes, seconds]
    .map(
      (val, i) =>
        `${i > 0 ? colon : ""}<div class="benefitChipCountdown__timeBlock"><span class="benefitChipCountdown__timeText">${val}</span></div>`,
    )
    .join("");
  return `<div class="benefitChipCountdown"><span class="benefitChipCountdown__label">${prefix}</span><div class="benefitChipCountdown__timeGroup">${blocks}</div></div>`;
}

/**
 * 三 Logo 组合行：真实品牌 IP SVG + × + SVG。
 * 遵循 Figma 规则：第二行 logo 高度 11px，× 固定尺寸，不再用纯文字替代 logo。
 */
function appendIpCrossLogo(wrap, logo, tint, svgHeight) {
  const item = document.createElement("span");
  item.className = "beltCoreLine__crossLogo";

  if (logo?.textOnly) {
    const text = document.createElement("span");
    text.className = "beltCoreLine__crossText";
    text.style.color = tint;
    text.textContent = logo.shortName || logo.name || "";
    item.appendChild(text);
    wrap.appendChild(item);
    return;
  }

  const mount = document.createElement("span");
  mount.className = "beltCoreLine__crossMount";
  const img = document.createElement("img");
  img.className = "beltCoreLine__crossImg hidden";
  img.alt = logo?.name || "";
  renderLogoIntoLine({
    mountEl: mount,
    imgEl: img,
    textEl: null,
    logo,
    tint,
    svgHeight,
  });

  if (mount.childNodes.length) item.appendChild(mount);
  else if (!img.classList.contains("hidden")) item.appendChild(img);
  else {
    const text = document.createElement("span");
    text.className = "beltCoreLine__crossText";
    text.style.color = tint;
    text.textContent = logo?.shortName || logo?.name || "";
    item.appendChild(text);
  }

  wrap.appendChild(item);
}

function renderIpCrossSplitRow(row, line, tint, svgHeight) {
  row.classList.add("beltCoreLine--ip-cross-split");
  row.classList.toggle("beltCoreLine--ip-cross-overflow", Boolean(line.overflow));
  row.classList.toggle("beltCoreLine--ip-cross-billionshort", Boolean(line.useShortBillionLogo));
  if (line.overflow) {
    row.title = "三 logo 第二行 logo 宽度超过 91px，logo 放不下";
  }
  const wrap = document.createElement("div");
  wrap.className = "beltCoreLine__crossWrap";
  const [logoA, logoB] = line.logos || [];

  appendIpCrossLogo(wrap, logoA, tint, svgHeight);

  const sep = document.createElement("span");
  sep.className = "beltCoreLine__crossSep";
  sep.style.color = tint;
  sep.textContent = "×";
  sep.setAttribute("aria-hidden", "true");
  wrap.appendChild(sep);

  appendIpCrossLogo(wrap, logoB, tint, svgHeight);
  row.appendChild(wrap);
}

function renderIpLogoRow(row, line, tint, svgHeight) {
  const mount = document.createElement("div");
  mount.className = "beltCoreLine__mount";
  const img = document.createElement("img");
  img.className = "beltCoreLine__img hidden";
  img.alt = line.logo.name;
  renderLogoIntoLine({
    mountEl: mount,
    imgEl: img,
    textEl: null,
    logo: line.logo,
    tint,
    svgHeight,
  });
  if (mount.childNodes.length) row.appendChild(mount);
  else if (!img.classList.contains("hidden")) row.appendChild(img);
  else appendLineText(row, line.text, tint);
}

function applyBeltCoreLogoVars(root, heights) {
  if (!root) return;
  const [h1, h2, h3] = heights || BELT_LOGO_SVG_HEIGHTS;
  root.style.setProperty("--belt-core-logo-h-1", `${h1}px`);
  root.style.setProperty("--belt-core-logo-h-2", `${h2}px`);
  root.style.setProperty("--belt-core-logo-h-3", `${h3}px`);
}

/**
 * 右侧 IP/利益点 整体自适应：当内容横向或纵向溢出可用空间时整体等比缩小，
 * 避免 cross 行被挤断换行；最小缩放保留到 0.6。
 * 实现：先临时去掉 area 及其子节点的宽度约束量测自然尺寸，再恢复并按比例 scale。
 */
function fitBeltCoreAreaScale(root) {
  if (!root) return;
  const area = root.querySelector(".beltCoreArea");
  if (!area) return;
  area.style.transform = "";
  area.style.transformOrigin = "";
  const apply = () => {
    const right = area.parentElement;
    const body =
      root.querySelector(".jd-mobile-three-belt__upper") ||
      root.querySelector(".beltCanvas__body");
    let availW = right?.clientWidth || 0;
    let availH = 0;
    if (body) {
      const cs = window.getComputedStyle(body);
      const padT = parseFloat(cs.paddingTop) || 0;
      const padB = parseFloat(cs.paddingBottom) || 0;
      availH = Math.max(0, body.clientHeight - padT - padB);
    }
    availW = Math.max(0, availW - 1);
    availH = Math.max(0, availH - 2);
    if (!availW || !availH) return;

    // 临时解除宽度约束量测自然尺寸；try/finally 保证一定恢复
    const constrained = area.querySelectorAll(
      ".beltCoreMain, .beltCoreSub, .beltCoreMini, .beltCoreSubWrap, .beltCoreLine, .beltCoreLine__crossWrap, .beltCoreLine__text",
    );
    const savedRight = right
      ? { mw: right.style.maxWidth, w: right.style.width }
      : null;
    const savedArea = { mw: area.style.maxWidth, w: area.style.width };
    const saved = [];
    let naturalW = 0;
    let naturalH = 0;
    try {
      if (right) {
        right.style.maxWidth = "none";
        right.style.width = "max-content";
      }
      area.style.maxWidth = "none";
      area.style.width = "max-content";
      constrained.forEach((el) => {
        saved.push({ el, mw: el.style.maxWidth, w: el.style.width });
        el.style.maxWidth = "none";
        if (el.classList.contains("beltCoreLine__crossWrap")) {
          el.style.width = "max-content";
        }
      });
      void area.offsetWidth;
      naturalW = area.scrollWidth;
      naturalH = area.scrollHeight;
    } finally {
      saved.forEach(({ el, mw, w }) => {
        el.style.maxWidth = mw || "";
        el.style.width = w || "";
      });
      area.style.maxWidth = savedArea.mw || "";
      area.style.width = savedArea.w || "";
      if (right && savedRight) {
        right.style.maxWidth = savedRight.mw || "";
        right.style.width = savedRight.w || "";
      }
    }

    if (!naturalW || !naturalH) return;
    if (naturalW <= availW && naturalH <= availH) return;
    const scale = Math.max(
      0.6,
      Math.min(availW / naturalW, availH / naturalH, 1),
    );
    if (scale < 1) {
      area.style.transform = `scale(${scale})`;
      area.style.transformOrigin = "center center";
    }
  };
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(apply);
  } else {
    apply();
  }
}

/** 单 IP 单独出现时，第 1 行 SVG 放大到 14px，与 textOnly fallback 字号一致；
 *  多 IP 组合时（≥2 行 IP）保持默认 [11,11,10] 紧凑高度。 */
const BELT_LOGO_SVG_HEIGHTS_SINGLE_IP = [14, 11, 10];

function buildBeltCoreLineRow(line, idx, lines, scheme, logoHeights) {
  const tint = scheme?.logoColor || scheme?.textPrimary || "#111111";
  const subTint = scheme?.textSecondary || tint;
  const row = document.createElement("div");
  row.className = `beltCoreLine beltCoreLine--${line.kind}`;
  if (line.lineIndex === 1) row.classList.add("beltCoreLine--row1");
  if (line.truncated) row.title = `原文：${line.original}`;

  const textKinds = new Set([
    "ip-primary-enhance",
    "ip-secondary-enhance",
    "ip-cross",
    "benefit-slogan",
    "benefit",
    "benefit-coupon",
  ]);

  if (line.kind === "ip-primary" || line.kind === "ip-secondary") {
    if (line.logo?.textOnly || line.useText) appendLineText(row, line.text, tint);
    else {
      const lineIdx = Math.max(0, (line.lineIndex || idx + 1) - 1);
      const svgHeight = logoHeights[lineIdx] ?? logoHeights[0] ?? 11;
      renderIpLogoRow(row, line, tint, svgHeight);
    }
  } else if (line.kind === "ip-primary-enhance" || line.kind === "ip-secondary-enhance") {
    appendLineText(row, line.text, tint, "beltCoreLine__text--enhance");
  } else if (line.kind === "ip-cross" && line.logos?.length >= 2) {
    renderIpCrossSplitRow(row, line, tint, logoHeights[1] ?? logoHeights[0] ?? 11);
  } else if (line.kind === "ip-cross") {
    appendLineText(row, line.text, tint, "beltCoreLine__text--cross");
  } else if (line.kind === "benefit-coupon") {
    appendCouponLabel(row, line.text, scheme);
  } else if (line.kind === "benefit-countdown") {
    appendCountdownLabel(row, line.text, scheme);
  } else if (textKinds.has(line.kind)) {
    appendLineText(
      row,
      line.text,
      line.kind === "benefit-slogan" ? subTint : subTint,
      line.kind === "benefit-slogan" ? "beltCoreLine__text--slogan" : "",
    );
  }
  return row;
}

function getBeltIpComboMode(lines) {
  const ipLines = (lines || []).filter((l) => String(l.kind).startsWith("ip"));
  if (!ipLines.length) return "none";
  if (ipLines.some((l) => l.kind === "ip-cross" && l.logos?.length >= 2)) return "triple";
  if (ipLines.length >= 2) return "double";
  return "single";
}

function applyBeltIpComboMode(root, mode) {
  if (!root) return;
  const area = root.querySelector(".beltCoreArea");
  [root, area].filter(Boolean).forEach((el) => {
    el.classList.toggle("beltIpCombo--none", mode === "none");
    el.classList.toggle("beltIpCombo--single", mode === "single");
    el.classList.toggle("beltIpCombo--double", mode === "double");
    el.classList.toggle("beltIpCombo--triple", mode === "triple");
  });
}

function renderBeltCoreLines(container, lines, scheme, { chevronEl, root } = {}) {
  const tint = scheme?.logoColor || scheme?.textPrimary || "#111111";
  const safeLines = lines || [];
  const ipLineCount = safeLines.filter((l) => String(l.kind).startsWith("ip")).length;
  const comboMode = getBeltIpComboMode(safeLines);
  const logoHeights =
    ipLineCount === 1 ? BELT_LOGO_SVG_HEIGHTS_SINGLE_IP : BELT_LOGO_SVG_HEIGHTS;
  if (root) {
    applyBeltCoreLogoVars(root, logoHeights);
    root.classList.toggle("beltCanvas--multi-ip", ipLineCount >= 2);
    applyBeltIpComboMode(root, comboMode);
  }

  const mainEl = root?.querySelector("#beltCoreMain, #beltCoreMain3");
  const subEl = root?.querySelector("#beltCoreSub, #beltCoreSub3");
  const miniEl = root?.querySelector("#beltCoreMini, #beltCoreMini3");
  const subWrap = root?.querySelector("#beltCoreSubWrap, #beltCoreSubWrap3");
  const isThreeBelt = root?.classList.contains("jd-mobile-three-belt");
  const useSplitLayout = Boolean(
    (root?.classList.contains("jd-mobile-two-belt") || isThreeBelt) && mainEl && subEl,
  );

  if (useSplitLayout) {
    mainEl.innerHTML = "";
    subEl.innerHTML = "";
    if (miniEl) miniEl.innerHTML = "";

    const slots = [mainEl, subEl, miniEl].filter(Boolean);
    (lines || []).forEach((line, idx) => {
      const slot = slots[Math.min(idx, slots.length - 1)];
      if (!slot) return;
      slot.appendChild(buildBeltCoreLineRow(line, idx, lines, scheme, logoHeights));
    });

    if (subWrap) subWrap.classList.toggle("hidden", (lines?.length || 0) < 2);
    if (miniEl) miniEl.classList.toggle("hidden", (lines?.length || 0) < 3);

    if (!isThreeBelt) {
      const hasBrandIp = (lines || []).some((l) => String(l.kind).startsWith("ip"));
      const chevron = chevronEl ?? els.beltChevronBrand;
      if (chevron) {
        const showChevron = hasBrandIp && (lines?.length || 0) >= 2;
        chevron.classList.toggle("hidden", !showChevron);
        if (showChevron) chevron.style.color = tint;
      }
    }
    fitBeltCoreAreaScale(root);
    return;
  }

  if (!container) return;
  container.innerHTML = "";
  (lines || []).forEach((line, idx) => {
    container.appendChild(buildBeltCoreLineRow(line, idx, lines, scheme, logoHeights));
  });

  const hasBrandIp = (lines || []).some((l) => String(l.kind).startsWith("ip"));
  const chevron = chevronEl ?? els.beltChevronBrand;
  if (chevron) {
    chevron.classList.toggle("hidden", !hasBrandIp);
    if (hasBrandIp) chevron.style.color = tint;
  }
  fitBeltCoreAreaScale(root);
}

function applyBeltRightCoreTo(
  { root, linesEl, coreAreaEl, chevronEl },
  scheme,
  displayIn,
) {
  if (!root || !linesEl) return;
  const display = displayIn || state.lastDisplay || computeBeltDisplay();
  const schemeResolved = scheme ? applyBeltBgTextOverride(scheme) : resolvePreviewScheme();
  const lineCount = display.lines?.length ?? 0;

  if (coreAreaEl) {
    coreAreaEl.classList.toggle("beltCoreArea--lines3", lineCount >= 3);
  }
  root.classList.toggle("beltCanvas--lines3", lineCount >= 3);

  renderBeltCoreLines(linesEl, display.lines, schemeResolved, { chevronEl, root });
}

function applyBeltRightCore(scheme, displayIn) {
  const root = document.getElementById("beltPreview") || els.beltPreview;
  const linesEl =
    document.getElementById("beltCoreMain") ||
    document.getElementById("beltCoreLines") ||
    els.beltCoreMain ||
    els.beltCoreLines;
  const coreAreaEl = document.getElementById("beltCoreArea") || els.beltCoreArea;
  const chevronEl = document.getElementById("beltChevronBrand") || els.beltChevronBrand;
  if (!root || !linesEl) return;
  els.beltPreview = root;
  els.beltCoreMain = document.getElementById("beltCoreMain") || linesEl;
  els.beltCoreLines = els.beltCoreMain;
  els.beltCoreSub = document.getElementById("beltCoreSub");
  els.beltCoreMini = document.getElementById("beltCoreMini");
  els.beltCoreSubWrap = document.getElementById("beltCoreSubWrap");
  els.beltCoreArea = coreAreaEl;
  els.beltChevronBrand = chevronEl;
  const display = displayIn || state.lastDisplay || computeBeltDisplay();
  state.lastDisplay = display;
  applyBeltRightCoreTo({ root, linesEl, coreAreaEl, chevronEl }, scheme, display);
}

/** @deprecated 兼容旧调用 */
function applyBrandLogoToPreview(scheme) {
  applyBeltRightCore(scheme);
}

function createLogoLibraryItem(logo, tint = "#eaeaea", opts = {}) {
  const selectedIds = opts.selectedIds ?? state.selectedIpIds ?? [];
  const onPick = opts.onPick || ((l) => toggleIp(l.id));
  const picked = selectedIds.includes(logo.id);
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "logoItem" + (picked ? " logoItem--active" : "");
  btn.dataset.logoId = logo.id;

  const thumb = document.createElement("div");
  thumb.className = "logoItem__thumb";
  const svgMarkup = getLogoSvgMarkup(logo);
  if (
    svgMarkup &&
    mountVectorLogo(thumb, svgMarkup, tint, logo.name, LOGO_LIBRARY_SVG_HEIGHT, {
      cssSizeOnly: true,
    })
  ) {
    /* vector thumb */
  } else if (logo.src) {
    const img = document.createElement("img");
    img.className = "logoItem__img";
    img.src = logo.src;
    img.alt = logo.name || "";
    thumb.appendChild(img);
  } else {
    thumb.classList.add("logoItem__thumb--fallback");
    thumb.textContent = logo.shortName || logo.name || "IP";
  }

  const displayName = logo.shortName || logo.name;
  const enhanceTag = logo.mindEnhance ? " · 增强心智" : "";
  const levelTag = logo.ipLevel || "IP";
  const tagText = opts.tag || `${levelTag}${enhanceTag}`;

  const nameEl = document.createElement("div");
  nameEl.className = "logoItem__name";
  nameEl.textContent = displayName;
  nameEl.title = logo.name;

  const tagEl = document.createElement("div");
  tagEl.className = "logoItem__tag";
  tagEl.textContent = tagText;
  tagEl.title = tagText;

  btn.append(thumb, nameEl, tagEl);
  btn.addEventListener("click", () => {
    onPick(logo);
    setExportHint(`已选 Logo：${logo.name}`);
  });
  return btn;
}

function renderOfferChip(btn, item, selectedIds, onToggle) {
  const active = selectedIds.includes(item.id);
  btn.className = "benefitChip" + (active ? " benefitChip--active" : "");
  const mainHtml =
    item.benefitStyle === "countdown"
      ? renderBenefitChipCountdownHtml(item.text)
      : `<span class="benefitChip__text">${item.text}</span>`;
  btn.innerHTML = `
    <span class="benefitChip__cat">${item.category} · P${item.priority}</span>
    ${mainHtml}
  `;
  btn.addEventListener("click", () => onToggle(item.id));
}

function mountEditableTextCard({
  preset,
  selectedIds,
  onToggle,
  getText,
  setText,
  max,
  datasetKey,
  onTextInput,
  chipClass = "discountChip",
}) {
  const card = document.createElement("div");
  const active = selectedIds.includes(preset.id);
  const chipClasses = chipClass.split(/\s+/).filter(Boolean);
  const chipRoot = chipClasses[0] || "discountChip";
  card.className =
    chipClasses.join(" ") + (active ? ` ${chipRoot}--active` : "");
  card.dataset[datasetKey] = preset.id;
  card.setAttribute("role", "button");
  card.tabIndex = 0;

  const cat = document.createElement("span");
  cat.className = "discountChip__cat";
  cat.textContent = `${preset.category} · P${preset.priority}`;

  const input = document.createElement("input");
  input.type = "text";
  input.className = "discountChip__input";
  input.value = getText(preset.id);
  input.maxLength = max;
  input.placeholder = preset.text;
  input.setAttribute("aria-label", `${preset.label}文案`);

  const counter = document.createElement("span");
  counter.className = "discountChip__count";
  const syncCounter = () => {
    counter.textContent = `${input.value.length}/${max}`;
    counter.classList.toggle("discountChip__count--limit", input.value.length >= max);
  };
  syncCounter();

  input.addEventListener("click", (e) => e.stopPropagation());
  input.addEventListener("keydown", (e) => e.stopPropagation());
  input.addEventListener("input", () => {
    setText(preset.id, input.value);
    syncCounter();
    if (onTextInput) {
      onTextInput(preset.id);
      return;
    }
    const selectedNow =
      datasetKey === "benefitId"
        ? state.selectedBenefitIds || []
        : state.selectedDiscountIds || [];
    if (!selectedNow.includes(preset.id)) {
      onToggle(preset.id);
      return;
    }
    scheduleBeltPreviewRefresh({ full: false });
  });

  const selectCard = () => onToggle(preset.id);
  card.addEventListener("click", (e) => {
    if (e.target === input) return;
    selectCard();
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (e.target === input) return;
      selectCard();
    }
  });

  card.append(cat, input, counter);
  return card;
}

function renderBenefitLibrary() {
  if (!els.benefitLibrary) return;
  if (bindStaticBenefitLibrary()) return;
  try {
    const selected = state.selectedBenefitIds || [];
    if (state.belt) {
      els.benefitLibrary.style.setProperty(
        "--belt-countdown-block-bg",
        getCountdownBlockBgColor(state.belt),
      );
      els.benefitLibrary.style.setProperty(
        "--belt-countdown-digit",
        getCountdownDigitColor(state.belt),
      );
      els.benefitLibrary.style.setProperty("--belt-countdown-colon", state.belt.textPrimary);
    }
    const frag = document.createDocumentFragment();
    BENEFIT_PRESETS.forEach((preset) => {
      if (isBenefitTextEditable(preset)) {
        const max = getBenefitTextMax(preset);
        frag.appendChild(
          mountEditableTextCard({
            preset,
            selectedIds: selected,
            onToggle: toggleBenefit,
            getText: getBenefitDisplayText,
            setText: setBenefitDisplayText,
            max,
            datasetKey: "benefitId",
            chipClass: "benefitChip benefitChip--editable",
          }),
        );
        return;
      }
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.benefitId = preset.id;
      renderOfferChip(btn, getBenefitById(preset.id) || preset, selected, toggleBenefit);
      frag.appendChild(btn);
    });
    els.benefitLibrary.innerHTML = "";
    els.benefitLibrary.appendChild(frag);
  } catch (err) {
    console.error("利益点图库渲染失败", err);
  }
}

function renderDiscountLibrary() {
  if (!els.discountLibrary) return;
  els.discountLibrary.innerHTML = "";
}

function createLogoUploadCard(category) {
  const cat = LOGO_CATEGORIES.find((c) => c.id === category) || LOGO_CATEGORIES[1];
  const label = document.createElement("label");
  label.className = "logoItem logoItem--upload";
  label.dataset.uploadCategory = cat.id;
  label.title = `上传${cat.label} Logo · PNG / SVG · 单张`;
  const inputId = `logoFileInput-${cat.id}`;
  label.setAttribute("for", inputId);
  const name = document.createElement("span");
  name.className = "logoItem__name";
  name.textContent = "上传 Logo";
  const tag = document.createElement("span");
  tag.className = "logoItem__tag";
  tag.textContent = `本地上传 · ${cat.label}`;
  const input = document.createElement("input");
  input.id = inputId;
  input.className = "logoItem__fileInput";
  input.type = "file";
  input.accept = "image/png,image/jpeg,image/svg+xml,image/webp";
  label.append(name, tag, input);
  return label;
}

/** 按分类（大促活动 / 平台 IP）渲染品牌 IP 图库；每组独立上传入口 */
function renderLogoLibrary() {
  const libTint = state.belt?.textPrimary || "#eaeaea";
  if (!els.logoLibrary) return;
  try {
    els.logoLibrary.innerHTML = "";
    els.logoLibrary.classList.add("logoLibrary--grouped");
    const uploaded = state.uploadedLogos || [];
    LOGO_CATEGORIES.forEach((cat) => {
      const group = document.createElement("section");
      group.className = "logoGroup";
      group.dataset.category = cat.id;
      const head = document.createElement("header");
      head.className = "logoGroup__head";
      const title = document.createElement("span");
      title.className = "logoGroup__title";
      title.textContent = cat.label;
      const desc = document.createElement("span");
      desc.className = "logoGroup__desc";
      desc.textContent = cat.desc;
      head.append(title, desc);

      const body = document.createElement("div");
      body.className = "logoGroup__body";

      const grid = document.createElement("div");
      grid.className = "logoGroup__grid";
      BUILTIN_LOGOS.filter((l) => getLogoCategoryId(l) === cat.id).forEach((logo) => {
        grid.appendChild(
          createLogoLibraryItem(logo, libTint, { selectedIds: state.selectedIpIds }),
        );
      });
      uploaded
        .filter((l) => getLogoCategoryId(l) === cat.id)
        .forEach((logo) => {
          grid.appendChild(createLogoLibraryItem(logo, libTint));
        });

      const uploadSlot = document.createElement("div");
      uploadSlot.className = "logoGroup__upload";
      uploadSlot.appendChild(createLogoUploadCard(cat.id));

      body.append(grid, uploadSlot);
      group.append(head, body);
      els.logoLibrary.appendChild(group);
    });
  } catch (err) {
    console.error("品牌 IP 图库渲染失败", err);
  }
}

/** 兼容旧调用：分组渲染不再使用静态绑定，统一走 renderLogoLibrary */
function bindStaticLogoLibrary() {
  renderLogoLibrary();
  return true;
}

function refreshDomRefs() {
  els.scenarioGrid = $("scenarioGrid");
  els.benefitLibrary = $("benefitLibrary");
  els.logoLibrary = $("logoLibrary");
}

/** 预览区 DOM 在布局调整后重新挂载，避免 els 为空导致预览/KV 不更新 */
function refreshPreviewDomRefs() {
  els.beltPreview = $("beltPreview");
  els.beltPreview3 = $("beltPreview3");
  els.beltAtmosphereImg = $("beltAtmosphereImg");
  els.beltAtmosphereImg3 = $("beltAtmosphereImg3");
  els.beltPreviewPc = $("beltPreviewPc");
  els.beltAtmosphereImgPc = $("beltAtmosphereImgPc");
  els.beltPcBrandSlot = $("beltPcBrandSlot");
  els.beltPcPromise = $("beltPcPromise");
  els.beltPcCountdownRow = $("beltPcCountdownRow");
  els.beltCoreMain = $("beltCoreMain");
  els.beltCoreLines = els.beltCoreMain || $("beltCoreLines");
  els.beltCoreSub = $("beltCoreSub");
  els.beltCoreMini = $("beltCoreMini");
  els.beltCoreSubWrap = $("beltCoreSubWrap");
  els.beltChevronBrand = $("beltChevronBrand");
  els.beltCoreArea = $("beltCoreArea");
  els.beltCoreMain3 = $("beltCoreMain3");
  els.beltCoreLines3 = els.beltCoreMain3;
  els.beltCoreSub3 = $("beltCoreSub3");
  els.beltCoreMini3 = $("beltCoreMini3");
  els.beltCoreSubWrap3 = $("beltCoreSubWrap3");
  els.beltCoreArea3 = $("beltCoreArea3");
  els.beltBg = $("beltBg");
  els.beltText1 = $("beltText1");
  els.beltText2 = $("beltText2");
  els.beltLogo = $("beltLogo");
  els.atmoExportMeta = $("atmoExportMeta");
  els.pdpPreviewBtn = $("pdpPreviewBtn");
  els.onlinePreviewBtn = $("onlinePreviewBtn");
  els.exportFileBtn = $("exportFileBtn");
  els.copyBeltJsonBtn = $("copyBeltJsonBtn");
  els.exportAllBtn = $("exportAllBtn");
}

function renderCatalogPanels() {
  refreshDomRefs();
  try {
    bindScenarioChips() || renderScenarioChips();
  } catch (err) {
    console.error("多业务颜色规范渲染失败", err);
  }
  try {
    bindStaticLogoLibrary() || renderLogoLibrary();
  } catch (err) {
    console.error("品牌 IP 图库渲染失败", err);
  }
  try {
    bindStaticBenefitLibrary() || renderBenefitLibrary();
  } catch (err) {
    console.error("利益点图库渲染失败", err);
  }
  renderDiscountLibrary();
}

async function handleLogoUpload(file) {
  if (!file) return;
  const maxMb = 2;
  if (file.size > maxMb * 1024 * 1024) {
    setExportHint(`Logo 请小于 ${maxMb}MB`);
    return;
  }
  const dataUrl = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
  const id = `upload-${Date.now()}`;
  const isSvg =
    file.type === "image/svg+xml" || /\.svg$/i.test(file.name || "");
  let svgMarkup = "";
  if (isSvg && typeof dataUrl === "string") {
    try {
      const raw = decodeURIComponent(dataUrl.split(",")[1] || "");
      svgMarkup = stripLogoSvgBackground(
        raw
          .replace(/fill\s*=\s*["']#[^"']+["']/gi, 'fill="currentColor"')
          .replace(/stroke\s*=\s*["']#[^"']+["']/gi, 'stroke="currentColor"'),
      );
    } catch {
      svgMarkup = "";
    }
  }
  const item = {
    id,
    name: file.name.replace(/\.[^.]+$/, "").slice(0, 24) || "上传Logo",
    shortName: file.name.replace(/\.[^.]+$/, "").slice(0, 10) || "上传",
    src: dataUrl,
    uploaded: true,
    uploadCategory: state.lastLogoUploadCategory || "platform",
    category: state.lastLogoUploadCategory || "platform",
    vector: Boolean(svgMarkup),
    svgMarkup: svgMarkup || undefined,
    ipLevel: state.lastLogoUploadCategory === "promo" ? "大促" : "平台B级",
    mindEnhance: false,
  };
  state.uploadedLogos = state.uploadedLogos || loadUploadedLogos();
  state.uploadedLogos.unshift(item);
  saveUploadedLogos(state.uploadedLogos);
  toggleIp(id);
  setExportHint("已上传并选中 Logo");
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function round(n, p = 0) {
  const m = 10 ** p;
  return Math.round(n * m) / m;
}

function normalizeHex(hex) {
  const h = String(hex || "").trim().replace(/^#/, "").toUpperCase();
  if (!/^[0-9A-F]{6}$/.test(h)) return null;
  return `#${h}`;
}

/** 支持 `#RRGGBB`、`RRGGBB`、简写 `#RGB`。 */
function parseBrandColorInput(raw) {
  let h = String(raw || "").trim().replace(/^#/, "").toUpperCase();
  if (!h) return null;
  if (/^[0-9A-F]{3}$/.test(h)) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (!/^[0-9A-F]{6}$/.test(h)) return null;
  return `#${h}`;
}

function rgbToHex(r, g, b) {
  const to = (x) => x.toString(16).padStart(2, "0").toUpperCase();
  return `#${to(clamp(Math.round(r), 0, 255))}${to(clamp(Math.round(g), 0, 255))}${to(
    clamp(Math.round(b), 0, 255),
  )}`;
}

function hexToRgb(hex) {
  const h = normalizeHex(hex);
  if (!h) return null;
  const n = parseInt(h.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function hexToRgbaString(hex, alpha = 1) {
  const rgb = hexToRgb(hex);
  if (!rgb) return String(hex || "");
  const a = clamp(Number(alpha), 0, 1);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;
}

/** 亮色腰带底：标签底色 50% 透明；深底保持实色 */
function resolveTagBackgroundColor(scheme, baseColor) {
  const color = baseColor || scheme?.textPrimary || "#111111";
  if (scheme?.scheme === "light") {
    return hexToRgbaString(color, 0.5);
  }
  return color;
}

function srgbToLinear(c) {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(v) {
  const x = v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
  return clamp(Math.round(x * 255), 0, 255);
}

/**
 * OKLab / OKLCH（Björn Ottosson），在感知均匀空间做审核与聚类，最终仍输出 sRGB HEX。
 * L ∈ [0,1]，C 约 [0, 0.4]，h ∈ [0,360)。
 */
function linearSrgbToOklab(lr, lg, lb) {
  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;
  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);
  return {
    L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  };
}

function oklabToLinearSrgb({ L, a, b }) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  return {
    r: +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    g: -1.2684380046 * l + 2.6097574011 * m - 0.341319396 * s,
    b: -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  };
}

function rgbToOklab(rgb) {
  const lr = srgbToLinear(rgb.r);
  const lg = srgbToLinear(rgb.g);
  const lb = srgbToLinear(rgb.b);
  return linearSrgbToOklab(lr, lg, lb);
}

function oklabToRgb(oklab) {
  let { r, g, b } = oklabToLinearSrgb(oklab);
  r = clamp(r, 0, 1);
  g = clamp(g, 0, 1);
  b = clamp(b, 0, 1);
  return {
    r: linearToSrgb(r),
    g: linearToSrgb(g),
    b: linearToSrgb(b),
  };
}

function oklabToOklch(oklab) {
  const C = Math.sqrt(oklab.a * oklab.a + oklab.b * oklab.b);
  let h = (Math.atan2(oklab.b, oklab.a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { L: oklab.L, C, h };
}

function oklchToOklab({ L, C, h }) {
  const hr = (h * Math.PI) / 180;
  return {
    L,
    a: C * Math.cos(hr),
    b: C * Math.sin(hr),
  };
}

function rgbToOklch(rgb) {
  return oklabToOklch(rgbToOklab(rgb));
}

function oklchToRgb(oklch) {
  return oklabToRgb(oklchToOklab(oklch));
}

function hexToOklch(hex) {
  const rgb = hexToRgb(hex);
  return rgb ? rgbToOklch(rgb) : null;
}

function oklchToHex(oklch) {
  const rgb = oklchToRgb(oklch);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

/** sRGB 相对亮度 Y ∈ [0,1]（WCAG），用于感知上的明暗判断。 */
function relativeLuminance(rgb) {
  const toLin = (c) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const R = toLin(rgb.r);
  const G = toLin(rgb.g);
  const B = toLin(rgb.b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

/** 规范表「红色框」色相：H 345°–25°（促销红），深底上固定纯白字/Logo。 */
function isRedBoxHue(h) {
  return h >= 345 || h <= 25;
}

function shouldUsePureWhiteOnDark(hexBg, scenarioId) {
  const sc = scenarioId && SCENARIOS.find((s) => s.id === scenarioId);
  if (sc?.textOnDark === "white") return true;
  const o = hexToOklch(hexBg);
  return Boolean(o && isRedBoxHue(o.h));
}

/** 是否接近黑/深棕底（奢品腰带等）；高饱和促销色不算近黑。 */
function isNearBlackBg(hexBg) {
  const o = hexToOklch(hexBg);
  if (!o) return false;
  if (o.C >= 0.1 || isRedBoxHue(o.h)) return false;
  const rgb = hexToRgb(hexBg);
  if (!rgb) return false;
  const Y = relativeLuminance(rgb);
  return Y < 0.2 || o.L < 0.32;
}

/** 深黑底奢品腰带文字色（参考第二张图 #E5C191 / #D9B48F） */
const LUXURY_GOLD_ON_BLACK_ACCENT = { L: 0.831, C: 0.075, h: 74.4 };

/**
 * 深底 + 近黑背景：文字/Logo 用香槟金米色（#E5C191），与奢品腰带参考一致。
 */
function accentTextOnDarkBg() {
  return luxuryGoldTextPair();
}

/**
 * 浅底 → 黑字；深底 → 白字（促销橙/红）或香槟金字（近黑奢品底）。
 * 高饱和色用相对亮度 Y 判断深浅；近黑底单独走 accent。
 */
function luxuryGoldTextPair(accent = LUXURY_GOLD_ON_BLACK_ACCENT) {
  const primary = oklchToHex(accent);
  const secondary = oklchToHex({
    L: clamp(accent.L - 0.038, 0, 1),
    C: clamp(accent.C * 0.88, 0, 0.42),
    h: accent.h,
  });
  return { primary, secondary };
}

function goldBrownTextPair(accent) {
  return luxuryGoldTextPair(accent);
}

function contrastTextForBg(hexBg, brandHex, scenarioId = null) {
  const rgb = hexToRgb(hexBg);
  const brand = parseBrandColorInput(brandHex) || hexBg;
  const sc = scenarioId && getScenarioById(scenarioId);
  if (!rgb) return { scheme: "light", primary: "#000000", secondary: "#333333", nearBlackLuxury: false };
  if (sc?.textOnDark === "goldBrown" && sc.textAccent) {
    const pair = goldBrownTextPair(sc.textAccent);
    return { scheme: "dark", nearBlackLuxury: true, ...pair };
  }
  const o = hexToOklch(hexBg);
  const Y = relativeLuminance(rgb);
  const chromatic = o && o.C >= 0.06;
  const lightBg = chromatic ? Y > 0.45 : (o?.L ?? 0) > 0.58 && Y > 0.38;
  if (lightBg) {
    if (sc?.textOnLight === "goldBrown" && sc.textAccent) {
      const pair = goldBrownTextPair(sc.textAccent);
      return { scheme: "light", nearBlackLuxury: false, ...pair };
    }
    return { scheme: "light", primary: "#000000", secondary: "#333333", nearBlackLuxury: false };
  }
  if (shouldUsePureWhiteOnDark(hexBg, scenarioId)) {
    return {
      scheme: "dark",
      nearBlackLuxury: false,
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    };
  }
  if (isNearBlackBg(hexBg)) {
    const accent = accentTextOnDarkBg(brand);
    return { scheme: "dark", nearBlackLuxury: true, ...accent };
  }
  return {
    scheme: "dark",
    nearBlackLuxury: false,
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
  };
}

function pickLogoColor({ scheme, brandHex, textPrimary, nearBlackLuxury, scenarioId }) {
  const sc = scenarioId && getScenarioById(scenarioId);
  if (sc?.textOnDark === "goldBrown" || sc?.textOnLight === "goldBrown") return textPrimary;
  if (scheme === "light" && sc?.logoOnLight === "black") return "#000000";
  if (scheme === "dark") return nearBlackLuxury ? textPrimary : "#FFFFFF";
  return brandHex;
}

/** 在 OKLCH 内微调后输出 HEX（保持色相 h）。 */
function tweakOklch(hex, { dL = 0, dC = 0, Cmul = 1 }) {
  const o = hexToOklch(hex);
  if (!o) return hex;
  const next = {
    L: clamp(o.L + dL, 0, 1),
    C: clamp(o.C * Cmul + dC, 0, 0.42),
    h: o.h,
  };
  return oklchToHex(next);
}

function makeBeltBackground({ beltBg, brand, scheme }) {
  // OKLCH：同色相下微调 L / C，生成轻微渐变与高光（预览用，导出 beltBg 仍为纯色 HEX）
  const dark = scheme === "dark";
  const left = tweakOklch(beltBg, dark ? { dL: -0.03, Cmul: 1.06 } : { dL: -0.02, Cmul: 1.05 });
  const right = tweakOklch(beltBg, dark ? { dL: 0.03, Cmul: 0.94 } : { dL: 0.015, Cmul: 0.96 });
  const shine = tweakOklch(brand || beltBg, dark ? { dL: 0.08, Cmul: 0.92 } : { dL: 0.06, Cmul: 0.9 });
  return `linear-gradient(90deg, ${left} 0%, ${beltBg} 45%, ${right} 100%), radial-gradient(420px 120px at 22% 35%, ${shine}40 0%, transparent 60%)`;
}

function mapBeltFromExtractedColor(extractedHex) {
  const hex = normalizeHex(extractedHex);
  if (!hex) return null;
  const oklch = hexToOklch(hex);
  const scenarioId = state.selectedScenarioId || null;
  const text = contrastTextForBg(hex, hex, scenarioId);
  const sc = scenarioId && getScenarioById(scenarioId);
  return {
    brand: hex,
    beltBg: hex,
    scheme: text.scheme,
    textPrimary: text.primary,
    textSecondary: text.secondary,
    logoColor: pickLogoColor({
      scheme: text.scheme,
      brandHex: hex,
      textPrimary: text.primary,
      nearBlackLuxury: text.nearBlackLuxury,
      scenarioId,
    }),
    ...(sc?.textAccent
      ? {
          textAccentOklch: {
            l: round(sc.textAccent.L, 3),
            c: round(sc.textAccent.C, 3),
            h: round(sc.textAccent.h, 1),
          },
        }
      : {}),
    beltBgOklch: oklch
      ? { l: round(oklch.L, 4), c: round(oklch.C, 4), h: round(oklch.h, 2) }
      : undefined,
    ...(sc
      ? {
          scenarioId: sc.id,
          scenarioMind: sc.mind,
          scenarioHueLabel: sc.hueLabel,
          beltBgRange: {
            L: [sc.range.L[0], sc.range.L[1]],
            C: [sc.range.C[0], sc.range.C[1]],
            h: [sc.range.h[0], sc.range.h[1]],
          },
          beltBgAdjusted: state.scenarioLC
            ? { l: round(state.scenarioLC.L, 3), c: round(state.scenarioLC.C, 3) }
            : { l: round(sc.default.L, 3), c: round(sc.default.C, 3) },
          recommendOklch: oklch
            ? { l: round(oklch.L, 4), c: round(oklch.C, 4), h: round(oklch.h, 2) }
            : {
                l: round(sc.default.L, 4),
                c: round(sc.default.C, 4),
                h: round(sc.default.h, 2),
              },
        }
      : {}),
  };
}

async function writeClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function setExportHint(msg) {
  if (els.exportHint) els.exportHint.textContent = msg;
}

function getMaxIpSelectCount(period = state.beltPeriod || "promo") {
  return period === "daily"
    ? BELT_DISPLAY_RULES.MAX_IP_DAILY
    : BELT_DISPLAY_RULES.MAX_IP_PROMO;
}

function showToast(message, { type = "warn", duration = 2800 } = {}) {
  const el = els.appToast;
  if (!el || !message) return;
  el.textContent = message;
  el.classList.remove("hidden", "appToast--ok");
  if (type === "ok") el.classList.add("appToast--ok");
  clearTimeout(toastHideTimer);
  toastHideTimer = setTimeout(() => {
    el.classList.add("hidden");
    el.classList.remove("appToast--ok");
  }, duration);
}

function renderOutputs() {
  const brandHex = state.selectedBrandHex;
  if (!brandHex) return;
  if (!commitBrandColorToPreview(brandHex, { scenarioId: state.selectedScenarioId, syncInput: true })) {
    return;
  }
  try {
    const display = state.lastDisplay || computeBeltDisplay();
    updateSelectionNotes(display);
    syncBeltRightMeta();
    renderLogoLibrary();
    setExportHint("可复制 JSON、文件导出，或点击「进入AI审核流程」");
  } catch (err) {
    console.error("腰带附属面板同步失败", err);
  }
}

function syncScenarioSelection(scenarioId) {
  if (!els.scenarioGrid) return;
  els.scenarioGrid.querySelectorAll(".scenarioChip").forEach((el) => {
    const id = el.dataset.scenarioId;
    el.classList.toggle("scenarioChip--active", Boolean(scenarioId) && id === scenarioId);
  });
}

function syncPaletteSelection(selectedHex) {
  const norm = parseBrandColorInput(selectedHex);
  if (!norm || !els.palette) return;
  const swatches = els.palette.querySelectorAll(".swatch");
  if (!swatches.length) return;
  let matched = false;
  swatches.forEach((el) => {
    const hx = el.dataset.hex;
    const ok = hx && parseBrandColorInput(hx) === norm;
    el.classList.toggle("swatch--active", ok);
    if (ok) matched = true;
  });
  if (!matched) swatches.forEach((el) => el.classList.remove("swatch--active"));
}

function updateScenarioTunePanel() {
  const sc = state.selectedScenarioId && getScenarioById(state.selectedScenarioId);
  if (!els.scenarioTunePanel) return;
  if (!sc) {
    els.scenarioTunePanel.classList.add("scenarioTune--idle");
    if (els.scenarioTuneMeta) {
      els.scenarioTuneMeta.textContent = "请先点选上方业务色规范卡片，再微调 L / C";
    }
    return;
  }
  els.scenarioTunePanel.classList.remove("scenarioTune--idle", "hidden");
  const lc = state.scenarioLC || { L: sc.default.L, C: sc.default.C };
  if (els.scenarioTuneMeta) {
    els.scenarioTuneMeta.textContent = `${sc.mind} · H ${sc.range.h[0]}°–${sc.range.h[1]}°（固定） · 可调 L / C`;
  }
  if (els.tuneL) {
    els.tuneL.min = String(sc.range.L[0]);
    els.tuneL.max = String(sc.range.L[1]);
    els.tuneL.step = "0.01";
    els.tuneL.value = String(lc.L);
  }
  if (els.tuneC) {
    els.tuneC.min = String(sc.range.C[0]);
    els.tuneC.max = String(sc.range.C[1]);
    els.tuneC.step = "0.01";
    els.tuneC.value = String(lc.C);
  }
  if (els.tuneLRange) {
    els.tuneLRange.textContent = `安全 L：${sc.range.L[0]} – ${sc.range.L[1]}`;
  }
  if (els.tuneCRange) {
    els.tuneCRange.textContent = `安全 C：${sc.range.C[0]} – ${sc.range.C[1]}`;
  }
  if (els.tuneLVal) els.tuneLVal.textContent = round(lc.L, 2);
  if (els.tuneCVal) els.tuneCVal.textContent = round(lc.C, 2);
  const hex = getScenarioHex(sc, lc.L, lc.C);
  if (els.tunePreviewHex) {
    els.tunePreviewHex.textContent = hex;
    els.tunePreviewHex.style.background = hex;
    els.tunePreviewHex.style.color = contrastTextOn(hex);
  }
}

function contrastTextOn(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#111";
  const y = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return y > 0.55 ? "#111111" : "#ffffff";
}

function applyScenarioTuneFromSliders() {
  const sc = state.selectedScenarioId && getScenarioById(state.selectedScenarioId);
  if (!sc || !els.tuneL || !els.tuneC) return;
  const L = clamp(parseFloat(els.tuneL.value), sc.range.L[0], sc.range.L[1]);
  const C = clamp(parseFloat(els.tuneC.value), sc.range.C[0], sc.range.C[1]);
  state.scenarioLC = { L, C };
  saveScenarioLC(sc.id, L, C);
  if (els.tuneLVal) els.tuneLVal.textContent = round(L, 2);
  if (els.tuneCVal) els.tuneCVal.textContent = round(C, 2);
  const hex = getScenarioHex(sc, L, C);
  if (!commitBrandColorToPreview(hex, { scenarioId: sc.id, syncInput: true })) return;
  updateScenarioTunePanel();
  updateActiveScenarioChipSwatch();
}

function selectScenario(s) {
  if (!s?.id) return;
  try {
    localStorage.setItem(SCENARIO_ID_KEY, s.id);
  } catch {
    /* ignore */
  }
  state.scenarioLC = resolveScenarioLC(s);
  const hex = getScenarioHex(s, state.scenarioLC.L, state.scenarioLC.C);
  if (!commitBrandColorToPreview(hex, { scenarioId: s.id, syncInput: true })) return;
  updateScenarioTunePanel();
  updateActiveScenarioChipSwatch();
  fillAtmoPromptFromBrandIfEmpty();
  setExportHint(`已选业务场景：${s.mind}（L/C 可在安全区间内微调，输出仍为 HEX）`);
}

function setSelectedBrand(hex, { syncInput = true, scenarioId = undefined, skipTunePanel = false, skipAtmoFill = false } = {}) {
  if (!commitBrandColorToPreview(hex, { scenarioId, syncInput })) return;
  if (!skipTunePanel) updateScenarioTunePanel();
  try {
    const display = state.lastDisplay || computeBeltDisplay();
    updateSelectionNotes(display);
    syncBeltRightMeta();
    renderLogoLibrary();
  } catch (err) {
    console.error("品牌色附属面板同步失败", err);
  }
  if (!skipAtmoFill) fillAtmoPromptFromBrandIfEmpty();
  if (typeof syncBeltBgTextColorUI === "function") syncBeltBgTextColorUI();
}

function applyBrandColorFromInput() {
  const raw = els.brandHexInput?.value ?? "";
  const h = parseBrandColorInput(raw);
  if (!h) {
    setExportHint("请输入有效 HEX，例如 F70000、#FF6600 或 #F60");
    return;
  }
  setSelectedBrand(h, { scenarioId: null });
  setExportHint("已应用品牌色并完成映射（OKLCH → HEX）");
}

let brandHexInputTimer = 0;

/** 品牌色输入框实时预览（无需先点「应用并映射」） */
function onBrandHexInputLive() {
  clearTimeout(brandHexInputTimer);
  brandHexInputTimer = setTimeout(() => {
    const raw = els.brandHexInput?.value ?? "";
    const h = parseBrandColorInput(raw);
    if (!h) return;
    commitBrandColorToPreview(h, { scenarioId: state.selectedScenarioId, syncInput: false });
  }, 150);
}

/** 文档级委托：保证场景色卡点击一定能触发（不依赖 bind 时机） */
function bindGlobalScenarioChipClicks() {
  if (document.body.dataset.scenarioDelegateBound === "1") return;
  document.body.dataset.scenarioDelegateBound = "1";
  document.body.addEventListener(
    "click",
    (e) => {
      const chip = e.target.closest?.(".scenarioChip[data-scenario-id]");
      if (!chip) return;
      const sc = getScenarioById(chip.dataset.scenarioId);
      if (!sc) return;
      e.preventDefault();
      selectScenario(sc);
    },
    true,
  );
}

/** 绑定 index.html 内嵌的静态场景色卡片（不依赖 JS 重建 DOM） */
function bindScenarioChips() {
  if (!els.scenarioGrid) return false;
  const buttons = els.scenarioGrid.querySelectorAll(".scenarioChip[data-scenario-id]");
  if (!buttons.length) return false;

  buttons.forEach((btn) => {
    const s = getScenarioById(btn.dataset.scenarioId);
    if (!s) return;
    try {
      const lc = state.scenarioLC && state.selectedScenarioId === s.id ? state.scenarioLC : resolveScenarioLC(s);
      const hex = getScenarioHex(s, lc.L, lc.C);
      const sw = btn.querySelector(".scenarioChip__swatch");
      if (sw) sw.style.background = hex;
      btn.setAttribute("aria-label", `${s.mind}，默认 ${hex}`);
    } catch (err) {
      console.error(`场景色更新失败: ${s?.id}`, err);
    }
  });

  syncScenarioSelection(state.selectedScenarioId);
  return true;
}

function renderScenarioChips() {
  if (!els.scenarioGrid) return;
  if (bindScenarioChips()) return;

  const frag = document.createDocumentFragment();
  let built = 0;
  SCENARIOS.forEach((s) => {
    try {
      const hex = getScenarioHex(s);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "scenarioChip" + (s.textOnDark === "white" ? " scenarioChip--redBox" : "");
      btn.dataset.scenarioId = s.id;
      btn.setAttribute("aria-label", `${s.mind}，默认 ${hex}`);
      btn.innerHTML = `
      <div class="scenarioChip__swatch" style="background:${hex}"></div>
      <div class="scenarioChip__body">
        <div class="scenarioChip__hue">${s.hueLabel}</div>
        <div class="scenarioChip__mind">${s.mind}</div>
        <div class="scenarioChip__use">${s.use}</div>
        <div class="scenarioChip__range">L ${s.range.L[0]}–${s.range.L[1]} · C ${s.range.C[0]}–${s.range.C[1]} · 可调</div>
      </div>
    `;
      btn.addEventListener("click", () => selectScenario(s));
      frag.appendChild(btn);
      built += 1;
    } catch (err) {
      console.error(`场景色卡片渲染失败: ${s?.id}`, err);
    }
  });
  if (!built) return;
  els.scenarioGrid.innerHTML = "";
  els.scenarioGrid.appendChild(frag);
  syncScenarioSelection(state.selectedScenarioId);
}

/** 绑定 index.html 内嵌的利益点卡片 */
function bindStaticBenefitLibrary() {
  if (!els.benefitLibrary) return false;
  const cards = els.benefitLibrary.querySelectorAll("[data-benefit-id]");
  if (!cards.length) return false;

  const selected = state.selectedBenefitIds || [];
  if (state.belt) {
    els.benefitLibrary.style.setProperty(
      "--belt-countdown-block-bg",
      getCountdownBlockBgColor(state.belt),
    );
    els.benefitLibrary.style.setProperty(
      "--belt-countdown-digit",
      getCountdownDigitColor(state.belt),
    );
    els.benefitLibrary.style.setProperty("--belt-countdown-colon", state.belt.textPrimary);
  }

  cards.forEach((card) => {
    const id = card.dataset.benefitId;
    const preset = BENEFIT_PRESETS.find((b) => b.id === id);
    if (!preset) return;
    const active = selected.includes(id);
    card.classList.toggle("benefitChip--active", active);

    if (!isBenefitTextEditable(preset)) {
      if (preset.benefitStyle === "countdown" && card.tagName === "BUTTON" && card.dataset.bound !== "1") {
        renderOfferChip(card, getBenefitById(id) || preset, selected, toggleBenefit);
        card.dataset.bound = "1";
      }
      return;
    }
    const input = card.querySelector(".discountChip__input");
    const counter = card.querySelector(".discountChip__count");
    const max = getBenefitTextMax(preset);
    if (input && !input.dataset.bound) {
      input.dataset.bound = "1";
      input.value = getBenefitDisplayText(id);
      const syncCounter = () => {
        if (counter) {
          counter.textContent = `${input.value.length}/${max}`;
          counter.classList.toggle(
            "discountChip__count--limit",
            input.value.length >= max,
          );
        }
      };
      syncCounter();
      input.addEventListener("click", (e) => e.stopPropagation());
      input.addEventListener("keydown", (e) => e.stopPropagation());
      input.addEventListener("input", () => {
        setBenefitDisplayText(id, input.value);
        syncCounter();
        if (!selected.includes(id)) {
          selectBenefit(id);
          return;
        }
        scheduleBeltPreviewRefresh({ full: false });
      });
    }
    if (card.dataset.bound === "1") return;
    card.dataset.bound = "1";
    const selectCard = () => toggleBenefit(id);
    card.addEventListener("click", (e) => {
      if (e.target === input) return;
      selectCard();
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (e.target === input) return;
        selectCard();
      }
    });
  });
  return true;
}

function scoreAccentCandidate({ oklch, weight }) {
  const L = clamp(oklch.L, 0, 1);
  const C = clamp(oklch.C, 0, 0.42);
  const midLight = 1 - Math.abs(L - 0.55) / 0.55;
  const vivid = C / 0.35;
  const score = weight * (0.62 * vivid + 0.28 * clamp(midLight, 0, 1) + 0.1);
  return score;
}

function kmeansOklab(points, k, iterations = 12) {
  if (points.length === 0) return [];
  const n = points.length;
  const kk = clamp(k, 1, Math.min(12, n));

  // init: sample evenly across list for stability
  const centroids = [];
  for (let i = 0; i < kk; i++) {
    const idx = Math.floor((i / kk) * (n - 1));
    centroids.push({ ...points[idx].oklab });
  }

  const assign = new Array(n).fill(0);

  for (let it = 0; it < iterations; it++) {
    // assignment
    for (let i = 0; i < n; i++) {
      let best = 0;
      let bestD = Infinity;
      const p = points[i].oklab;
      for (let c = 0; c < kk; c++) {
        const cc = centroids[c];
        const d =
          (p.L - cc.L) ** 2 +
          (p.a - cc.a) ** 2 +
          (p.b - cc.b) ** 2;
        if (d < bestD) {
          bestD = d;
          best = c;
        }
      }
      assign[i] = best;
    }

    // update
    const sums = Array.from({ length: kk }, () => ({
      L: 0,
      a: 0,
      b: 0,
      w: 0,
    }));
    for (let i = 0; i < n; i++) {
      const c = assign[i];
      const w = points[i].w;
      sums[c].L += points[i].oklab.L * w;
      sums[c].a += points[i].oklab.a * w;
      sums[c].b += points[i].oklab.b * w;
      sums[c].w += w;
    }
    for (let c = 0; c < kk; c++) {
      if (sums[c].w > 0) {
        centroids[c] = {
          L: sums[c].L / sums[c].w,
          a: sums[c].a / sums[c].w,
          b: sums[c].b / sums[c].w,
        };
      }
    }
  }

  // build clusters
  const clusters = Array.from({ length: kk }, () => ({
    centroid: null,
    weight: 0,
    members: 0,
  }));
  for (let c = 0; c < kk; c++) clusters[c].centroid = centroids[c];
  for (let i = 0; i < n; i++) {
    const c = assign[i];
    clusters[c].weight += points[i].w;
    clusters[c].members += 1;
  }
  return clusters.filter((c) => c.weight > 0.0001);
}

function extractPaletteFromImageData(imageData, opts) {
  const { k, maxSamples, minChroma, minL, maxL } = opts;
  const { width, height, data } = imageData;

  // grid sampling with stride to cap maxSamples
  const total = width * height;
  const stride = Math.max(1, Math.floor(Math.sqrt(total / maxSamples)));

  const points = [];
  let sampled = 0;
  for (let y = 0; y < height; y += stride) {
    for (let x = 0; x < width; x += stride) {
      const i = (y * width + x) * 4;
      const a = data[i + 3];
      if (a < 220) continue;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // ignore near-white/near-black early
      if ((r < 6 && g < 6 && b < 6) || (r > 250 && g > 250 && b > 250)) {
        continue;
      }

      const oklab = rgbToOklab({ r, g, b });
      const oklch = oklabToOklch(oklab);
      if (oklch.C < minChroma) continue;
      if (oklch.L < minL || oklch.L > maxL) continue;

      points.push({ oklab, oklch, w: 1 });
      sampled++;
    }
  }

  const clusters = kmeansOklab(points, k, 12);
  const totalW = clusters.reduce((s, c) => s + c.weight, 0) || 1;

  const palette = clusters
    .map((c) => {
      const rgb = oklabToRgb(c.centroid);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      const oklch = oklabToOklch(c.centroid);
      const weight = c.weight / totalW;
      const score = scoreAccentCandidate({ oklch, weight });
      return {
        hex,
        rgb,
        oklch,
        weight,
        score,
      };
    })
    // de-dup near same hex after rounding
    .reduce((acc, cur) => {
      if (!acc.some((x) => x.hex === cur.hex)) acc.push(cur);
      return acc;
    }, [])
    .sort((a, b) => b.score - a.score);

  return { palette, sampled, stride };
}

function renderPalette(palette) {
  els.palette.innerHTML = "";
  if (!palette || palette.length === 0) {
    els.palette.innerHTML =
      '<div class="note" style="grid-column: 1/-1; margin-top: 0;">未找到合适候选色：可降低「色度 C 下限」，或放宽「亮度 L 区间」。</div>';
    return;
  }

  palette.slice(0, 14).forEach((p, idx) => {
    const el = document.createElement("div");
    el.className = "swatch" + (idx === 0 ? " swatch--active" : "");
    el.dataset.hex = p.hex;
    el.innerHTML = `
      <div class="swatch__color" style="background:${p.hex}"></div>
      <div class="swatch__meta">
        <div class="swatch__hex">${p.hex}</div>
        <div class="swatch__score">score ${round(p.score, 3)} · w ${round(p.weight, 3)}</div>
      </div>
    `;
    el.addEventListener("click", () => {
      [...els.palette.querySelectorAll(".swatch")].forEach((n) =>
        n.classList.remove("swatch--active"),
      );
      el.classList.add("swatch--active");
      setSelectedBrand(p.hex, { scenarioId: null });
    });
    els.palette.appendChild(el);
  });

  // default select top1
  setSelectedBrand(palette[0].hex, { scenarioId: null });
}

async function loadImageFromFile(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.src = url;
    await img.decode();
    return img;
  } finally {
    // keep url until image decoded; revoke later by caller if needed
  }
}

function drawToCanvas(img, maxSide = 860) {
  const w0 = img.naturalWidth || img.width;
  const h0 = img.naturalHeight || img.height;
  const scale = Math.min(1, maxSide / Math.max(w0, h0));
  const w = Math.max(1, Math.round(w0 * scale));
  const h = Math.max(1, Math.round(h0 * scale));
  const canvas = els.workCanvas;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  const imageData = ctx.getImageData(0, 0, w, h);
  return { imageData, width: w0, height: h0, drawWidth: w, drawHeight: h, scale };
}

function revokeExtractImageObjectUrl() {
  if (!state.imageObjectUrl) return;
  try {
    URL.revokeObjectURL(state.imageObjectUrl);
  } catch {
    /* ignore */
  }
  state.imageObjectUrl = undefined;
}

function setPreviewImageToolbarVisible(visible) {
  if (!els.previewImgToolbar) return;
  if (visible) {
    els.previewImgToolbar.removeAttribute("hidden");
  } else {
    els.previewImgToolbar.setAttribute("hidden", "");
  }
}

function restoreBrandAfterImageClear() {
  const raw = els.brandHexInput?.value ?? "";
  const h = parseBrandColorInput(raw);
  if (h) {
    setSelectedBrand(h, { scenarioId: null });
    setExportHint("已恢复手动品牌色");
    return;
  }
  let savedId = null;
  try {
    savedId = localStorage.getItem(SCENARIO_ID_KEY);
  } catch {
    savedId = null;
  }
  const sc = (savedId && getScenarioById(savedId)) || getScenarioById("h-red-promo");
  if (sc) selectScenario(sc);
}

function clearExtractImage({ silent = false } = {}) {
  revokeExtractImageObjectUrl();
  state.img = undefined;
  state.imageData = undefined;
  state.palette = undefined;

  if (els.previewImg) {
    els.previewImg.removeAttribute("src");
    els.previewImg.style.display = "none";
  }
  if (els.previewFrame) els.previewFrame.classList.remove("preview__frame--hasImage");
  setPreviewImageToolbarVisible(false);
  if (els.fileInput) els.fileInput.value = "";
  if (els.imgFileName) els.imgFileName.textContent = "-";
  if (els.imgSize) els.imgSize.textContent = "-";
  if (els.sampleInfo) els.sampleInfo.textContent = "-";
  if (els.imgInfoSummary) {
    els.imgInfoSummary.textContent = "选择图片后，下方展示文件信息与采样说明。";
  }
  if (els.palette) els.palette.innerHTML = "";
  if (els.selectedHex) els.selectedHex.textContent = "-";
  if (els.copyBrandBtn) els.copyBrandBtn.disabled = true;

  state.selectedBrandHex = undefined;
  state.selectedScenarioId = null;
  state.scenarioLC = undefined;
  state.belt = undefined;
  restoreBrandAfterImageClear();
  scheduleBeltPreviewRefresh({ full: false });
  if (!silent) showToast("已取消图片，品牌色已恢复为场景/手动输入");
}

async function applyImageFile(file, { isReplace = false } = {}) {
  if (!file) return;
  revokeExtractImageObjectUrl();
  const url = URL.createObjectURL(file);
  state.imageObjectUrl = url;
  const img = new Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = url;
  await img.decode();
  await setImage(img, { fileName: file.name });
  if (els.fileInput) els.fileInput.value = "";
  await onExtract();
  showToast(isReplace ? "已替换图片并自动提取颜色" : "图片已载入并自动提取颜色");
}

async function setImage(img, { fileName } = {}) {
  state.img = img;
  els.previewImg.src = img.src;
  els.previewImg.style.display = "block";
  if (els.previewFrame) els.previewFrame.classList.add("preview__frame--hasImage");
  setPreviewImageToolbarVisible(true);
  if (els.imgFileName) {
    els.imgFileName.textContent = fileName || "已加载图片";
  }
  if (els.imgInfoSummary) {
    els.imgInfoSummary.textContent =
      "已载入图片，将按右侧参数在 OKLCH 空间聚类取色；提取后更新采样说明。";
  }
  els.imgSize.textContent = `${img.naturalWidth || img.width} × ${img.naturalHeight || img.height}`;
  els.sampleInfo.textContent = "待提取";
  els.palette.innerHTML = "";
  els.selectedHex.textContent = "-";
  els.copyBrandBtn.disabled = true;
  els.copyBeltJsonBtn.disabled = true;
  if (els.exportFileBtn) els.exportFileBtn.disabled = true;
  els.exportAllBtn.disabled = true;
  setExportHint("-");
  state.selectedBrandHex = undefined;
  state.selectedScenarioId = null;
  state.scenarioLC = undefined;
  state.palette = undefined;
  state.belt = undefined;
  if (els.brandHexInput) els.brandHexInput.value = "";
  syncScenarioSelection(null);
  updateScenarioTunePanel();
  scheduleBeltPreviewRefresh({ full: false });
}

function getExtractOptions() {
  const minSatUi = clamp(parseInt(els.minSatInput.value, 10) || 18, 0, 100);
  const minLightUi = clamp(parseInt(els.minLightInput.value, 10) || 18, 0, 100);
  const maxLightUi = clamp(parseInt(els.maxLightInput.value, 10) || 92, 0, 100);
  return {
    k: clamp(parseInt(els.kInput.value, 10) || 7, 3, 12),
    maxSamples: clamp(parseInt(els.maxSamplesInput.value, 10) || 12000, 2000, 50000),
    // UI 0–100 映射到 OKLCH 色度 C 下限（约 0–0.32）
    minChroma: (minSatUi / 100) * 0.32,
    minL: minLightUi / 100,
    maxL: maxLightUi / 100,
  };
}

let extractInflight = false;
let extractPendingReason = null;
async function onExtract() {
  if (!state.img) return;
  if (extractInflight) {
    extractPendingReason = "params";
    return;
  }
  extractInflight = true;
  try {
    const draw = drawToCanvas(state.img, 860);
    state.imageData = draw.imageData;

    const opts = getExtractOptions();
    const { palette, sampled, stride } = extractPaletteFromImageData(draw.imageData, opts);
    state.palette = palette;
    els.sampleInfo.textContent = `画布 ${draw.drawWidth}×${draw.drawHeight} · stride ${stride} · 样本 ${sampled}`;
    if (els.imgInfoSummary) {
      els.imgInfoSummary.textContent =
        "已从图片自动提取候选色，请在下方色板点选作为品牌色。";
    }
    renderPalette(palette);
  } finally {
    extractInflight = false;
    if (extractPendingReason) {
      extractPendingReason = null;
      onExtract();
    }
  }
}

let extractParamDebounce = 0;
function scheduleExtractFromParams() {
  if (!state.img) return;
  clearTimeout(extractParamDebounce);
  extractParamDebounce = setTimeout(onExtract, 200);
}

if (els.fileInput) {
  els.fileInput.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isReplace = Boolean(state.img);
    try {
      await applyImageFile(file, { isReplace });
    } catch (err) {
      console.error("图片载入失败", err);
      showToast("图片载入失败，请换一张重试");
      revokeExtractImageObjectUrl();
      if (els.fileInput) els.fileInput.value = "";
    }
  });
}
els.replaceImageBtn?.addEventListener("click", () => {
  if (!state.img) return;
  els.fileInput?.click();
});
els.cancelImageBtn?.addEventListener("click", () => clearExtractImage());

if (els.beltBgFileInput) {
  els.beltBgFileInput.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (file) await applyBeltBgFile(file);
  });
}
els.beltBgReplaceBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  els.beltBgFileInput?.click();
});
els.beltBgClearBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  clearBeltBgImage();
});

document.querySelectorAll('input[name="beltBgContentColorMode"]').forEach((input) => {
  input.addEventListener("change", async () => {
    if (!input.checked) return;
    if (input.value === "auto") {
      await applyAutoBeltBgContentColor({ toast: false });
      return;
    }
    activateCustomBeltBgContentColor(state.beltBgTextColor || getAutoRecommendedTextHex());
  });
});
els.beltBgTextColorPicker?.addEventListener("input", (e) => {
  if (els.beltBgContentColorModeCustom && !els.beltBgContentColorModeCustom.checked) {
    els.beltBgContentColorModeCustom.checked = true;
  }
  const v = (e.target.value || "").toUpperCase();
  setBeltBgTextColor(v);
});
els.beltBgTextColorHex?.addEventListener("focus", () => {
  if (els.beltBgContentColorModeCustom && !els.beltBgContentColorModeCustom.checked) {
    els.beltBgContentColorModeCustom.checked = true;
    if (!state.beltBgTextColor) {
      activateCustomBeltBgContentColor(getAutoRecommendedTextHex());
    }
  }
});
els.beltBgTextColorHex?.addEventListener("input", (e) => {
  if (els.beltBgContentColorModeCustom && !els.beltBgContentColorModeCustom.checked) {
    els.beltBgContentColorModeCustom.checked = true;
  }
  let raw = String(e.target.value || "").trim();
  if (raw && !raw.startsWith("#")) raw = "#" + raw;
  if (/^#[0-9a-fA-F]{6}$/.test(raw)) {
    setBeltBgTextColor(raw.toUpperCase());
  }
});
els.beltBgTextColorHex?.addEventListener("blur", () => {
  syncBeltBgTextColorUI();
});

[els.kInput, els.maxSamplesInput, els.minSatInput, els.minLightInput, els.maxLightInput].forEach(
  (el) => el?.addEventListener("input", scheduleExtractFromParams),
);

document.querySelectorAll(".brandSourceTab").forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.brandSource;
    if (mode) setBrandSourceMode(mode);
  });
});

if (els.applyBrandBtn) els.applyBrandBtn.addEventListener("click", applyBrandColorFromInput);
if (els.brandHexInput) {
  els.brandHexInput.addEventListener("input", onBrandHexInputLive);
  els.brandHexInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") applyBrandColorFromInput();
  });
}

if (els.tuneL) els.tuneL.addEventListener("input", applyScenarioTuneFromSliders);
if (els.tuneC) els.tuneC.addEventListener("input", applyScenarioTuneFromSliders);
if (els.tuneResetBtn) {
  els.tuneResetBtn.addEventListener("click", () => {
    const sc = state.selectedScenarioId && getScenarioById(state.selectedScenarioId);
    if (!sc) return;
    try {
      const map = loadScenarioLCMap();
      delete map[sc.id];
      localStorage.setItem(SCENARIO_LC_KEY, JSON.stringify(map));
    } catch {
      /* ignore */
    }
    state.scenarioLC = { L: sc.default.L, C: sc.default.C };
    const hex = getScenarioHex(sc, sc.default.L, sc.default.C);
    setSelectedBrand(hex, { syncInput: true, scenarioId: sc.id, skipTunePanel: true });
    updateScenarioTunePanel();
    updateActiveScenarioChipSwatch();
    setExportHint(`已恢复 ${sc.mind} 默认 L / C`);
  });
}

if (els.copyBrandBtn) els.copyBrandBtn.addEventListener("click", async () => {
  const ok = await writeClipboard(state.selectedBrandHex || "");
  setExportHint(ok ? "已复制品牌色 HEX" : "复制失败（请手动复制）");
});

els.pdpPreviewBtn?.addEventListener("click", openPdpPreviewModal);
els.onlinePreviewBtn?.addEventListener("click", previewPublishResult);
els.pdpModalClose?.addEventListener("click", closePdpPreviewModal);
els.pdpModalCloseFoot?.addEventListener("click", closePdpPreviewModal);
els.pdpModalBackdrop?.addEventListener("click", closePdpPreviewModal);
els.pdpTerminalTabs?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-pdp-terminal]");
  if (!btn || !els.pdpTerminalTabs?.contains(btn)) return;
  setPdpTerminal(btn.dataset.pdpTerminal);
});
loadPdpTerminal();
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!els.beltAuditManualModal?.classList.contains("hidden")) {
    closeBeltAuditSubModals();
    return;
  }
  if (!els.beltAuditDesignerModal?.classList.contains("hidden")) {
    closeBeltAuditSubModals();
    return;
  }
  if (isBeltAuditModalOpen()) closeBeltAuditModal();
  else if (isPdpPreviewOpen()) closePdpPreviewModal();
});

els.beltAuditModalClose?.addEventListener("click", closeBeltAuditModal);
els.beltAuditModalBackdrop?.addEventListener("click", closeBeltAuditModal);
els.beltAuditStartBtn?.addEventListener("click", startAuditFromCta);
els.beltAuditManualBtn?.addEventListener("click", () => {
  if (els.beltAuditManualBtn?.dataset.mode === "return") {
    closeBeltAuditModal();
    showToast("已返回腰带配置 · 请按问题原因修改后再次提审", { type: "warn", duration: 3200 });
    return;
  }
  openBeltAuditSubModal("manual");
});

let auditAutoAdvanceTimers = [];
function clearAuditAutoAdvanceTimers() {
  auditAutoAdvanceTimers.forEach((id) => clearTimeout(id));
  auditAutoAdvanceTimers = [];
}

els.beltAuditContactBtn?.addEventListener("click", () => {
  const progress = getAuditProgress();
  progress.manualDone = true;
  progress.publishDone = false;
  showToast("人工审核已通过，开始发布上线（演示）", { type: "ok" });
  closeBeltAuditSubModals();
  evaluateAuditFlowGate(state.lastBeltAuditReport);

  // 自动推进：发布上线（演示节奏）；效果数据在数据看板沉淀
  clearAuditAutoAdvanceTimers();
  auditAutoAdvanceTimers.push(
    setTimeout(() => {
      if (!isBeltAuditModalOpen()) return;
      const p = getAuditProgress();
      if (!p.manualDone) return;
      p.publishDone = true;
      showToast("已发布上线，下方展示商详线上预览效果（演示）", { type: "ok" });
      evaluateAuditFlowGate(state.lastBeltAuditReport);
      requestAnimationFrame(() => {
        renderBeltOnlinePreview();
        document
          .querySelector(".beltAuditOnline")
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }, 1500),
  );
});
document.querySelectorAll(".beltAuditSubModalClose").forEach((btn) => {
  btn.addEventListener("click", closeBeltAuditSubModals);
});
els.beltAuditCopyBtn?.addEventListener("click", async () => {
  const report = state.lastBeltAuditReport;
  if (!report) return;
  const ok = await writeClipboard(JSON.stringify(report, null, 2));
  setExportHint(ok ? "已复制审核报告 JSON" : "复制失败（请手动复制）");
  showToast(ok ? "已复制审核报告" : "复制失败", { type: ok ? "ok" : "warn" });
});

function buildBeltExportPayload() {
  ensureBeltStateFromScheme();
  return {
    selectedBrand: state.selectedBrandHex,
    selectedIpIds: state.selectedIpIds || [],
    selectedBenefitIds: state.selectedBenefitIds || [],
    benefitTexts: state.benefitTexts || {},
    selectedDiscountIds: state.selectedDiscountIds || [],
    discountTexts: state.discountTexts || {},
    leftPrice: state.leftPrice || getLeftPriceFromUI(),
    atmosphereLibrary: state.uploadedAtmospheres || [],
    atmoPrompt: buildResolvedAtmoPrompt(),
    atmoPromptVars: state.atmoPromptVars || getAtmoPromptVarsFromUI(),
    atmoAiRefs: state.atmoAiRefs || [],
    beltPeriod: state.beltPeriod || "promo",
    belt: state.belt,
    auditMeta: state.auditMeta || getAuditMetaFromUI(),
    auditReport: state.lastBeltAuditReport || null,
    candidates: (state.palette || []).slice(0, 10).map((p) => ({
      hex: p.hex,
      score: round(p.score, 4),
      weight: round(p.weight, 4),
      oklch: {
        l: round(p.oklch.L, 4),
        c: round(p.oklch.C, 4),
        h: round(p.oklch.h, 2),
      },
    })),
    meta: {
      extractedAt: new Date().toISOString(),
      colorModel: "OKLCH",
      selectedScenarioId: state.selectedScenarioId || null,
      options: getExtractOptions(),
    },
  };
}

function exportBeltToJsonFile() {
  if (!canOpenPdpPreview()) {
    showToast("请先完成品牌色映射后再导出");
    return;
  }
  const payload = buildBeltExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `belt-color-${(state.selectedBrandHex || "unknown").replace("#", "")}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setExportHint("已导出 JSON 文件");
  showToast("已导出 JSON 文件", { type: "ok" });
}

if (els.copyBeltJsonBtn) els.copyBeltJsonBtn.addEventListener("click", async () => {
  const ok = await writeClipboard(JSON.stringify(state.belt, null, 2));
  setExportHint(ok ? "已复制腰带 JSON" : "复制失败（请手动复制）");
});

els.exportFileBtn?.addEventListener("click", exportBeltToJsonFile);
if (els.exportAllBtn) els.exportAllBtn.addEventListener("click", submitBeltForAudit);

async function rerunBeltAuditInModal({ silent = false } = {}) {
  if (!canOpenPdpPreview()) {
    if (!silent) showToast("请先完成品牌色映射");
    return;
  }
  state.auditMeta = getAuditMetaFromUI();
  saveAuditMeta(state.auditMeta);
  state.auditProgress = { manualDone: false, publishDone: false };
  syncAllBeltPreviews();
  try {
    const report = await runBeltAutomatedAudit();
    state.lastBeltAuditReport = report;
    renderBeltAuditModal(report);
    renderBeltAuditPreviews();
    const msg = report.passed
      ? report.summary?.warn > 0
        ? `审核通过，有 ${report.summary.warn} 条建议项`
        : "审核通过"
      : `审核未通过：${report.summary?.error ?? 0} 项需修改`;
    if (!silent) {
      setExportHint(msg);
      showToast(msg, { type: report.passed ? "ok" : "warn", duration: 3200 });
    } else {
      setExportHint(msg);
    }
  } catch (err) {
    console.error("重新审核失败", err);
    if (!silent) showToast("审核失败，请重试");
  }
}

els.beltAuditRerunBtn?.addEventListener("click", () => rerunBeltAuditInModal());

els.logoFileInput?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) handleLogoUpload(file);
  e.target.value = "";
});

/** 文档级监听：分组上传卡片公用该 change 事件（由 data-upload-category 区分） */
document.addEventListener("change", (e) => {
  const input = e.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.id === "logoFileInput") return;
  if (!input.classList.contains("logoItem__fileInput")) return;
  const card = input.closest(".logoItem--upload");
  state.lastLogoUploadCategory = card?.dataset?.uploadCategory || "platform";
  const file = input.files?.[0];
  if (file) handleLogoUpload(file);
  input.value = "";
});

els.atmoFileInput?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) handleAtmosphereUpload(file);
  e.target.value = "";
});
els.atmoAiRefFileInput?.addEventListener("change", (e) => {
  const files = e.target.files;
  if (files?.length) handleAtmoAiRefUpload(files);
  e.target.value = "";
});
els.atmoAiBtn?.addEventListener("click", handleAtmosphereAiGenerate);
els.atmoClearBtn?.addEventListener("click", clearAtmosphereImage);
els.atmoLayoutResetBtn?.addEventListener("click", resetAtmosphereLayout);
if (els.atmoPosX) {
  els.atmoPosX.addEventListener("input", () =>
    setAtmosphereLayout({ x: Number(els.atmoPosX.value) }),
  );
}
if (els.atmoPosY) {
  els.atmoPosY.addEventListener("input", () =>
    setAtmosphereLayout({ y: Number(els.atmoPosY.value) }),
  );
}
if (els.atmoScale) {
  els.atmoScale.addEventListener("input", () =>
    setAtmosphereLayout({ scale: Number(els.atmoScale.value) }),
  );
}
if (els.atmoOpacity) {
  els.atmoOpacity.addEventListener("input", () =>
    setAtmosphereLayout({ opacity: Number(els.atmoOpacity.value) }),
  );
}
document.querySelectorAll('input[name="beltPeriod"]').forEach((el) => {
  el.addEventListener("change", () => {
    if (el.checked) setBeltPeriod(el.value);
  });
});

function bootApp() {
  state.uploadedLogos = loadUploadedLogos();
  state.beltPeriod = loadBeltPeriod();
  loadBeltBgImage();
  syncBeltBgUploadUI();
  state.beltBgTextColor = loadBeltBgTextColor();
  syncBeltBgTextColorUI();
  state.brandSourceMode = loadBrandSourceMode();
  syncBrandSourceTabsUI(state.brandSourceMode);
  // 若启动即为「腰带背景图」模式且已有保存的背景图，异步重新提取一次主色，
  // 让腰带文字色与背景保持协调（同步走 setSelectedBrand 派生逻辑）。
  if (state.brandSourceMode === "beltBg" && state.beltBgImage) {
    (async () => {
      try {
        const hex = await extractDominantHexFromImageSrc(state.beltBgImage);
        if (hex) setSelectedBrand(hex, { scenarioId: null });
      } catch (err) {
        console.warn("初始化背景图主色提取失败", err);
      }
    })();
  }
  state.selectedIpIds = loadSelectedIpIds();
  state.selectedBenefitIds = loadSelectedBenefitIds();
  state.selectedDiscountIds = loadSelectedDiscountIds();
  state.discountTexts = loadDiscountTexts();
  state.benefitTexts = loadBenefitTexts();
  applyCoreBenefitCouponMigration();
  ensureDefaultBeltContentIfEmpty();
  initLeftPriceUI();
  state.uploadedAtmospheres = loadAtmosphereLibrary();
  state.atmosphereImage = loadAtmosphereImage();
  try {
    ensureBuiltinLightningAtmosphere();
    mergeActiveAtmosphereIntoLibrary();
    state.uploadedAtmospheres = mergeBuiltinLightningIntoLibrary(state.uploadedAtmospheres);
    saveAtmosphereLibrary(state.uploadedAtmospheres);
    renderAtmosphereCards();
    initAtmoPromptUI();
    state.atmoAiRefs = loadAtmoAiRefs();
    renderAtmoAiRefList();
    document.querySelectorAll('input[name="beltPeriod"]').forEach((el) => {
      el.checked = el.value === state.beltPeriod;
    });
    renderCatalogPanels();
    bindGlobalScenarioChipClicks();
    (function initDefaultScenario() {
      let savedId = null;
      try {
        savedId = localStorage.getItem(SCENARIO_ID_KEY);
      } catch {
        savedId = null;
      }
      const initSc =
        (savedId && getScenarioById(savedId)) || getScenarioById("h-red-promo");
      if (initSc) selectScenario(initSc);
      else updateScenarioTunePanel();
    })();
    initAuditMetaForm();
    if (!state.selectedBrandHex) {
      const fallback = getScenarioById("h-red-promo");
      if (fallback) selectScenario(fallback);
    }
    refreshBeltDisplay();
    updatePdpPreviewBtnState();
  } catch (err) {
    console.error("应用初始化失败", err);
  } finally {
    syncScenarioSelection(state.selectedScenarioId);
    primeBeltPreview();
  }
}

function startApp() {
  refreshDomRefs();
  refreshPreviewDomRefs();
  bindGlobalScenarioChipClicks();
  bootApp();
  // 启动后异步拉取品牌 IP SVG 切图，到位后刷新图库与腰带预览。
  preloadBrandIpSvgs()
    .then((updated) => {
      if (!updated) return;
      try {
        renderLogoLibrary();
      } catch (err) {
        console.warn("品牌 IP 图库 SVG 切图刷新失败", err);
      }
      try {
        refreshBeltDisplay();
      } catch (err) {
        console.warn("腰带预览 SVG 切图刷新失败", err);
      }
    })
    .catch((err) => console.warn("品牌 IP 切图加载失败", err));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
let scaledPreviewResizeTimer = 0;
window.addEventListener("resize", () => {
  clearTimeout(scaledPreviewResizeTimer);
  scaledPreviewResizeTimer = setTimeout(scheduleScaledPreviewLayouts, 120);
});
els.pdpModalPanel?.addEventListener("transitionend", (e) => {
  if (e.propertyName !== "width") return;
  if (isPdpPreviewOpen() && getPdpTerminal() === "web") forcePdpWebPreviewScaleLayout();
});
window.addEventListener("load", () => {
  refreshPreviewDomRefs();
  primeBeltPreview();
});
