(function () {
  const { useEffect, useMemo, useRef, useState } = React;
  const h = React.createElement;
  const {
    Alert,
    Avatar,
    Badge,
    Button,
    Card,
    Col,
    ConfigProvider,
    Descriptions,
    Flex,
    Input,
    Layout,
    List,
    Modal,
    Result,
    Row,
    Space,
    Statistic,
    Tag,
    Typography,
    Upload,
    message,
    theme,
  } = antd;
  const {
    CheckCircleOutlined,
    CloudUploadOutlined,
    DeleteOutlined,
    DownloadOutlined,
    ExclamationCircleOutlined,
    SendOutlined,
    UserOutlined,
  } = icons;

  const { Content } = Layout;
  const { Dragger } = Upload;
  const { Paragraph, Text, Title } = Typography;
  const { TextArea } = Input;

  const SPEC = {
    artboardWidth: 1125,
    artboardHeight: 2436,
    scaleRatio: 3,
    logoSubjectX1x: 20,
    logoSubjectY1x: 390,
    logoSquareSubjectY1x: 383,
    logoHeight: 72,
    maxLogoWidth: 390,
    logoPreviewHeight: 72,
    logoPreviewEnlargedHeight: 108,
    logoPreviewMaxWidth: 390,
    logoPreviewEnlargeRatio: 1.3,
    logoMinSubjectRatio: 0.52,
    logoMarginTolerance: 2,
    logoRequiredHeight: 60,
    logoWhiteMinLum: 0.72,
    logoWhiteMinLightRatio: 0.80,
    logoContrastMinRatio: 3,
    logoLightOnDarkLum: 0.42,
    logoDarkOnLightLum: 0.52,
    backgroundToneThreshold: 0.48,
    gap: 24,
    fallbackTagWidth: 216,
    fallbackTagHeight: 72,
    atmosphereWidth: 1125,
    atmosphereHeight: 336,
    atmosphereSourceWidth: 1125,
    atmosphereSourceHeight: 993,
    atmosphereTop: 894,
    coreRecommendedWidth: 728,
    coreRecommendedHeight: 387,
    coreMinSubjectRatio: 0.52,
    coreSafeWidth: 522,
    coreSafeHeight: 336,
    coreSafeTop: 894,
    coreSafeRight: 39,
    foregroundTop: 894,
    foregroundHeight: 276,
    topDecorTop: 1062,
    topDecorHeight: 450,
  };

  const DETAIL_PREVIEW = {
    title: "商详腰部店铺 Logo 预览",
    baseSrc: "./图1:底色.png",
    maskSrc: "./图4:蒙层.png",
    topSrc: "./图5:顶层.png",
    tagSrc: "./图7:标签.png",
    width: 1125,
    height: 2436,
    backgroundTop: 298 * 3,
    backgroundHeight: (812 - 298 - 402) * 3,
    maskTop: 298 * 3,
    maskHeight: (812 - 298 - 422) * 3,
    topLayerTop: 354 * 3,
    topLayerHeight: (812 - 354 - 308) * 3,
    logoX: 20 * 3,
    logoY: 390 * 3,
    logoSquareY: 383 * 3,
    logoGap: 8 * 3,
    logoRatioBands: [
      {
        key: "square",
        label: "正型 Logo",
        min: 0,
        max: 1.2,
        height: 30 * 3,
        top: 311 * 3,
      },
      {
        key: "short",
        label: "短款型 Logo",
        min: 1.2,
        max: 2.5,
        height: 24 * 3,
        top: 314 * 3,
      },
      {
        key: "medium",
        label: "中长型 Logo",
        min: 2.5,
        max: 3.5,
        height: 20 * 3,
        top: 316 * 3,
      },
      {
        key: "long",
        label: "长型 Logo",
        min: 3.5,
        max: 4.5,
        height: 16 * 3,
        top: 318 * 3,
      },
      {
        key: "extraLong",
        label: "超长型 Logo",
        min: 4.5,
        max: Infinity,
        height: 20 * 3,
        maxWidth: 120 * 3,
        top: 316 * 3,
      },
    ],
    coreSafeWidth: 522,
    coreSafeRight: 39,
  };

  const STORE_PREVIEW = {
    title: "店铺 Logo 预览",
    baseSrc: "./店铺图1-底色.png",
    topMaskSrc: "./店铺图3-顶部蒙层.png",
    topLayerSrc: "./店铺图5-顶层.png",
    tagSrc: "./店铺图6-标签.png",
    width: 1125,
    height: 2436,
    backgroundTop: 0,
    backgroundHeight: (812 - 0 - 604) * 3,
    topMaskTop: 0,
    topMaskHeight: (812 - 0 - 724) * 3,
    topLayerTop: 130 * 3,
    topLayerHeight: (812 - 130 - 593) * 3,
    benefitTagX: 16 * 3,
    benefitTagY: 104 * 3,
    benefitTagWidth: (375 - 16 - 254) * 3,
    benefitTagHeight: (812 - 104 - 690) * 3,
    logoX: 36 * 3,
    logoY: 52 * 3,
    logoSquareY: 47 * 3,
    logoGap: 16 * 3,
    logoRatioBands: [
      {
        key: "square",
        label: "正型 Logo",
        min: 0,
        max: 1.2,
        height: 35 * 3,
        top: 49.75 * 3,
      },
      {
        key: "short",
        label: "短款型 Logo",
        min: 1.2,
        max: 2.5,
        height: 30 * 3,
        top: 51.68 * 3,
      },
      {
        key: "medium",
        label: "中长型 Logo",
        min: 2.5,
        max: 3.5,
        height: 27.5 * 3,
        top: 53 * 3,
      },
      {
        key: "long",
        label: "长型 Logo",
        min: 3.5,
        max: 4.5,
        height: 25 * 3,
        top: 53.56 * 3,
      },
      {
        key: "extraLong",
        label: "超长型 Logo",
        min: 4.5,
        max: Infinity,
        maxWidth: 120 * 3,
        top: 56.54 * 3,
      },
    ],
    storeCoreRect: {
      left: 193 * 3,
      top: 77 * 3,
      width: 184 * 3,
      height: 99 * 3,
    },
    coreSafeWidth: 522,
    coreSafeRight: 0,
  };

  const STORE_SCROLL_PREVIEW = {
    title: "店铺上滑 Logo 预览",
    baseSrc: "./店铺上滑-图1-底图.png",
    width: 1125,
    height: 2436,
    logoX: 36 * 3,
    logoGap: 16 * 3,
    logoRatioBands: STORE_PREVIEW.logoRatioBands,
  };

  SPEC.logoX = SPEC.logoSubjectX1x * SPEC.scaleRatio;
  SPEC.logoY = SPEC.logoSubjectY1x * SPEC.scaleRatio;
  SPEC.logoSquareY = SPEC.logoSquareSubjectY1x * SPEC.scaleRatio;
  SPEC.coreSafeLeft = SPEC.artboardWidth - SPEC.coreSafeRight - SPEC.coreSafeWidth;

  const allowedReasons = {
    format: "非透明底 PNG",
    fixedHeight: "高度不是60px（三倍图）",
    edgeMargin: "图形未充满画布，存在上下左右边距",
    notWhite: "不是反白Logo",
    contrastLow: "与背景叠加蒙层后的对比度不足",
    subjectSmall: "Logo主体占比过小",
    toneMismatch: "Logo深浅适配不符合",
  };

  const suggestions = {
    format: "请使用透明底 PNG，主体外区域需保持透明，不要包含矩形背景板或截图裁切底。",
    fixedHeight: "请上传高度固定为60px的三倍图Logo。",
    edgeMargin: "请裁切Logo透明留白，让Logo图形在画布内上下左右尽量充满。",
    notWhite: "请上传反白Logo，主体应为接近白色的图形。",
    contrastLow: "请使用更深的背景图或更清晰的反白Logo，保证Logo与背景叠加黑色蒙层后的对比度不低于3:1。",
    subjectSmall: "请提升 Logo 主体占比，让主体尽可能撑满画布。",
    toneMismatch: "请根据背景深浅上传适配版本：深色背景使用反白Logo，浅色背景使用深色Logo。",
  };

  function getSloganLength(text) {
    return Array.from(text || "").reduce((sum, char) => {
      return sum + (/[\u4e00-\u9fff]/.test(char) ? 2 : 1);
    }, 0);
  }

  function validateSlogan(text) {
    const value = (text || "").trim();
    if (!value) return [];
    return getSloganLength(value) <= 16 ? [] : ["标语需小于等于16个字符，1个汉字按2个字符计算"];
  }

  function formatBytes(bytes) {
    if (!bytes) return "-";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  function contrastRatio(l1, l2) {
    const a = Math.max(l1, l2) + 0.05;
    const b = Math.min(l1, l2) + 0.05;
    return a / b;
  }

  function relativeLuminance(r, g, b) {
    const normalize = (value) => {
      const channel = value / 255;
      return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b);
  }

  function drawCoverImage(context, image, x, y, width, height) {
    const imageRatio = image.naturalWidth / Math.max(image.naturalHeight, 1);
    const targetRatio = width / Math.max(height, 1);
    let sourceWidth = image.naturalWidth;
    let sourceHeight = image.naturalHeight;
    let sourceX = 0;
    let sourceY = 0;

    if (imageRatio > targetRatio) {
      sourceWidth = image.naturalHeight * targetRatio;
      sourceX = (image.naturalWidth - sourceWidth) / 2;
    } else {
      sourceHeight = image.naturalWidth / targetRatio;
      sourceY = (image.naturalHeight - sourceHeight) / 2;
    }

    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
  }

  function averageLuminanceInRect(context, rect) {
    const x = Math.max(0, Math.floor(rect.left));
    const y = Math.max(0, Math.floor(rect.top));
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    const data = context.getImageData(x, y, width, height).data;
    let lumSum = 0;
    const count = width * height;

    for (let index = 0; index < data.length; index += 4) {
      lumSum += relativeLuminance(data[index], data[index + 1], data[index + 2]);
    }

    return lumSum / Math.max(count, 1);
  }

  function getLogoEdgeFill(meta) {
    if (!meta || !meta.analysis.bbox) return false;
    const bbox = meta.analysis.bbox;
    const tolerance = SPEC.logoMarginTolerance;
    return (
      bbox.x <= tolerance &&
      bbox.y <= tolerance &&
      bbox.x + bbox.width >= meta.width - tolerance &&
      bbox.y + bbox.height >= meta.height - tolerance
    );
  }

  function detectTransparentCanvas(data, width, height, bbox, file) {
    if (file.type !== "image/png") {
      return {
        isTransparentPng: false,
        outsideOpaqueRatio: 1,
        outsideTransparentRatio: 0,
      };
    }
    if (!bbox) {
      return {
        isTransparentPng: false,
        outsideOpaqueRatio: 1,
        outsideTransparentRatio: 0,
      };
    }

    let outsideTotal = 0;
    let outsideOpaque = 0;
    const pad = 1;
    const minX = Math.max(0, bbox.x - pad);
    const minY = Math.max(0, bbox.y - pad);
    const maxX = Math.min(width - 1, bbox.x + bbox.width - 1 + pad);
    const maxY = Math.min(height - 1, bbox.y + bbox.height - 1 + pad);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const insideSubjectRegion = x >= minX && x <= maxX && y >= minY && y <= maxY;
        if (insideSubjectRegion) continue;
        outsideTotal += 1;
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 16) outsideOpaque += 1;
      }
    }

    const outsideOpaqueRatio = outsideTotal ? outsideOpaque / outsideTotal : 0;
    return {
      isTransparentPng: outsideOpaqueRatio <= 0.02,
      outsideOpaqueRatio,
      outsideTransparentRatio: outsideTotal ? 1 - outsideOpaqueRatio : 1,
    };
  }

  function computeLogoBackgroundContrast({ atmosphereMeta, logoMeta, maskImage, brandTagSize }) {
    try {
      if (!atmosphereMeta || !atmosphereMeta.image || !logoMeta || !maskImage) return null;
      const logoPreview = getLogoPreviewRender(logoMeta, brandTagSize, DETAIL_PREVIEW);
      if (!logoPreview) return null;

      const canvas = document.createElement("canvas");
      canvas.width = DETAIL_PREVIEW.width;
      canvas.height = DETAIL_PREVIEW.backgroundTop + DETAIL_PREVIEW.backgroundHeight;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return null;
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawCoverImage(
        context,
        atmosphereMeta.image,
        0,
        DETAIL_PREVIEW.backgroundTop,
        DETAIL_PREVIEW.width,
        DETAIL_PREVIEW.backgroundHeight
      );
      context.drawImage(
        maskImage,
        0,
        DETAIL_PREVIEW.maskTop,
        DETAIL_PREVIEW.width,
        DETAIL_PREVIEW.maskHeight
      );

      const backgroundLum = averageLuminanceInRect(context, {
        left: DETAIL_PREVIEW.logoX,
        top: logoPreview.wrapperStyle.top ? parseFloat(logoPreview.wrapperStyle.top) : DETAIL_PREVIEW.logoY,
        width: logoPreview.width,
        height: logoPreview.height,
      });
      const contrast = contrastRatio(logoMeta.analysis.averageLum, backgroundLum);

      return {
        backgroundLum,
        contrast,
        passed: contrast >= SPEC.logoContrastMinRatio,
      };
    } catch (error) {
      return null;
    }
  }

  function readImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const image = new Image();
      image.onload = () => resolve({ image, url: image.src });
      image.onerror = () => {
        reject(new Error("图片读取失败"));
      };
      reader.onerror = () => reject(new Error("图片读取失败"));
      reader.onload = () => {
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function loadImageSrc(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("系统底图读取失败"));
      image.src = src;
    });
  }

  function getSystemLogoBackgroundTone(image) {
    const canvas = document.createElement("canvas");
    const width = 300;
    const height = 132;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const sourceX = Math.max(0, SPEC.logoX - 12);
    const sourceY = Math.max(0, SPEC.logoY - 30);
    context.drawImage(image, sourceX, sourceY, width, height, 0, 0, width, height);
    const data = context.getImageData(0, 0, width, height).data;
    let lumSum = 0;
    const count = width * height;

    for (let index = 0; index < data.length; index += 4) {
      lumSum += relativeLuminance(data[index], data[index + 1], data[index + 2]);
    }

    const luminance = lumSum / count;
    return {
      luminance,
      tone: luminance >= SPEC.backgroundToneThreshold ? "light" : "dark",
    };
  }

  function analyzePixels(image, file) {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0);
    const data = context.getImageData(0, 0, width, height).data;

    let opaque = 0;
    let transparent = 0;
    let borderOpaque = 0;
    let borderTotal = 0;
    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;
    let weightedLum = 0;
    let alphaWeight = 0;
    let lightWeight = 0;
    let edgeStrength = 0;
    let edgeSamples = 0;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const i = (y * width + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        const isBorder = x === 0 || y === 0 || x === width - 1 || y === height - 1;

        if (isBorder) {
          borderTotal += 1;
          if (a > 16) borderOpaque += 1;
        }

        if (a <= 16) {
          transparent += 1;
          continue;
        }

        opaque += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);

        const weight = a / 255;
        const lum = relativeLuminance(r, g, b);
        weightedLum += lum * weight;
        alphaWeight += weight;
        if (lum > 0.42) lightWeight += weight;

        if (x > 0) {
          const prev = (y * width + x - 1) * 4;
          const prevAlpha = data[prev + 3];
          if (prevAlpha > 16) {
            edgeStrength += Math.abs(r - data[prev]) + Math.abs(g - data[prev + 1]) + Math.abs(b - data[prev + 2]);
            edgeSamples += 1;
          }
        }
        if (y > 0) {
          const prev = ((y - 1) * width + x) * 4;
          const prevAlpha = data[prev + 3];
          if (prevAlpha > 16) {
            edgeStrength += Math.abs(r - data[prev]) + Math.abs(g - data[prev + 1]) + Math.abs(b - data[prev + 2]);
            edgeSamples += 1;
          }
        }
      }
    }

    const pixelCount = width * height;
    const bbox =
      opaque > 0
        ? {
            x: minX,
            y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1,
          }
        : null;
    const touchesFullCanvas = minX <= 1 && minY <= 1 && maxX >= width - 2 && maxY >= height - 2;
    const opaqueBorderRatio = borderTotal ? borderOpaque / borderTotal : 1;
    const hasRectBackground = touchesFullCanvas && opaqueBorderRatio > 0.72;
    const transparency = detectTransparentCanvas(data, width, height, bbox, file);
    const transparentRatio = transparent / pixelCount;
    const hasContinuousFilledBackground = hasRectBackground && transparentRatio < 0.01;
    const averageLum = alphaWeight ? weightedLum / alphaWeight : 0;
    const lightRatio = alphaWeight ? lightWeight / alphaWeight : 0;
    const contrast = contrastRatio(averageLum, 0.035);
    const suitableForDark = contrast >= 3 && (averageLum >= 0.32 || lightRatio >= 0.42);
    const sharpness = edgeSamples ? edgeStrength / edgeSamples : 0;

    return {
      transparentRatio,
      opaqueBorderRatio,
      hasRectBackground,
      outsideOpaqueRatio: transparency.outsideOpaqueRatio,
      outsideTransparentRatio: transparency.outsideTransparentRatio,
      isTransparentPng: transparency.isTransparentPng && !hasContinuousFilledBackground,
      bbox,
      averageLum,
      lightRatio,
      contrast,
      suitableForDark,
      sharpness,
    };
  }

  function validateAtmosphere(meta) {
    if (!meta) return [];
    const issues = [];
    if (meta.width !== SPEC.atmosphereSourceWidth || meta.height !== SPEC.atmosphereSourceHeight) {
      issues.push(`尺寸需为 ${SPEC.atmosphereSourceWidth} × ${SPEC.atmosphereSourceHeight}px（3倍图）`);
    }
    return issues;
  }

  function validateCore(meta) {
    if (!meta) return [];
    const issues = [];
    if (!meta.analysis.isTransparentPng) {
      issues.push("需为 PNG 透明底");
    }
    if (!meta.analysis.bbox) {
      issues.push("未识别到完整主体");
    }
    const subjectRatio = meta.analysis.bbox
      ? (meta.analysis.bbox.width * meta.analysis.bbox.height) / Math.max(meta.width * meta.height, 1)
      : 0;
    if (meta.analysis.bbox && subjectRatio < SPEC.coreMinSubjectRatio) {
      issues.push("主体占比过小");
    }
    return issues;
  }

  function createUnifiedAudit({ atmosphereMeta, coreMeta, logoMeta, originalLogoMeta, atmosphereIssues, coreIssues, logoAudit, originalLogoAudit, sloganText, sloganIssues }) {
    const problems = [];
    const advice = [];

    if (!atmosphereMeta) {
      problems.push("背景图未上传");
      advice.push("上传1125×993px背景图");
    } else if (atmosphereIssues.length) {
      atmosphereIssues.forEach((item) => problems.push(`背景图${item}`));
      advice.push("上传1125×993px背景图");
    }

    if (!coreMeta) {
      problems.push("核心视觉元素图未上传");
      advice.push("建议上传728×387px透明底图片。");
    } else if (coreIssues.length) {
      coreIssues.forEach((item) => problems.push(`核心视觉元素图${item}`));
      if (coreIssues.some((item) => item.includes("透明底"))) advice.push("上传PNG透明底核心视觉元素图");
      if (coreIssues.some((item) => item.includes("主体占比"))) advice.push("优化核心视觉元素主体占比，避免主体过小");
      if (coreIssues.some((item) => item.includes("主体"))) advice.push("上传主体清晰完整的核心视觉元素图");
    }

    if (!logoMeta) {
      problems.push("Logo未上传");
      advice.push("上传PNG透明底Logo");
    } else if (logoAudit.issueKeys.length) {
      logoAudit.issueKeys.forEach((key) => problems.push(`Logo${allowedReasons[key]}`));
      logoAudit.advice.forEach((item) => advice.push(item));
    }

    if (!originalLogoMeta) {
      problems.push("原色Logo未上传");
      advice.push("上传PNG透明底原色Logo，高度需为60px");
    } else if (originalLogoAudit.issueKeys.length) {
      originalLogoAudit.issueKeys.forEach((key) => problems.push(`原色Logo${allowedReasons[key]}`));
      originalLogoAudit.advice.forEach((item) => advice.push(item));
    }

    if (sloganText && sloganIssues.length) {
      sloganIssues.forEach((item) => problems.push(item));
      advice.push("请将标语控制在16个字符以内，1个汉字按2个字符计算");
    }

    return {
      passed: problems.length === 0,
      hasAnyUpload: Boolean(atmosphereMeta || coreMeta || logoMeta || originalLogoMeta || sloganText),
      problems,
      advice: Array.from(new Set(advice)),
    };
  }

  function getLogoBand(aspectRatio, previewSpec) {
    const bands = previewSpec.logoRatioBands;
    if (!bands || !bands.length) return null;
    return bands.find((band) => aspectRatio >= band.min && aspectRatio < band.max) || bands[bands.length - 1];
  }

  function getLogoPreviewRender(meta, tagSize, previewSpec = DETAIL_PREVIEW) {
    if (!meta) return null;

    const aspectRatio = meta.width / Math.max(meta.height, 1);
    const band = getLogoBand(aspectRatio, previewSpec);
    const enlarged = !band && aspectRatio <= SPEC.logoPreviewEnlargeRatio;
    let height = band && band.height ? band.height : enlarged ? SPEC.logoPreviewEnlargedHeight : SPEC.logoPreviewHeight;
    let width = band && band.maxWidth && !band.height ? band.maxWidth : aspectRatio * height;

    const maxWidth = band && band.maxWidth ? band.maxWidth : !enlarged ? SPEC.logoPreviewMaxWidth : null;
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
      height = width / Math.max(aspectRatio, 0.01);
    } else if (band && band.maxWidth && !band.height) {
      height = width / Math.max(aspectRatio, 0.01);
    }

    const subjectTop = band ? band.top : enlarged ? previewSpec.logoSquareY : previewSpec.logoY;
    const tagHeight = tagSize && tagSize.height ? tagSize.height : SPEC.fallbackTagHeight;

    return {
      mode: band ? band.key : enlarged ? "enlarged" : "default",
      label: band ? band.label : enlarged ? "方形放大" : "默认",
      ratio: aspectRatio,
      width,
      height,
      wrapperStyle: {
        position: "absolute",
        left: `${previewSpec.logoX}px`,
        top: `${subjectTop}px`,
        width: `${width}px`,
        height: `${height}px`,
        overflow: "visible",
      },
      imageStyle: {
        width: `${width}px`,
        height: `${height}px`,
      },
      brandTagStyle: {
        position: "absolute",
        left: `${previewSpec.logoX + width + previewSpec.logoGap}px`,
        top: `${subjectTop + (height - tagHeight) / 2}px`,
      },
    };
  }

  function getCoreVisualStyle(meta, previewSpec = DETAIL_PREVIEW) {
    if (!meta) return null;
    if (previewSpec.storeCoreRect) {
      const rect = previewSpec.storeCoreRect;
      const scale = Math.max(rect.width / Math.max(meta.width, 1), rect.height / Math.max(meta.height, 1));
      const width = meta.width * scale;
      const height = meta.height * scale;
      return {
        left: `${rect.left + rect.width - width}px`,
        top: `${rect.top + (rect.height - height) / 2}px`,
        width: `${width}px`,
        height: `${height}px`,
      };
    }

    const safeWidth = previewSpec.coreSafeWidth;
    const safeRightOffset = previewSpec.coreSafeRight;
    const scale = safeWidth / Math.max(meta.width, 1);
    const fullWidth = meta.width * scale;
    const fullHeight = meta.height * scale;
    const safeRight = previewSpec.width - safeRightOffset;
    const safeCenterY = previewSpec.backgroundTop + previewSpec.backgroundHeight / 2;

    return {
      left: `${safeRight - fullWidth}px`,
      top: `${safeCenterY - fullHeight / 2}px`,
      width: `${fullWidth}px`,
      height: `${fullHeight}px`,
    };
  }

  function auditLogo(meta, contrastInfo) {
    if (!meta) return { passed: false, issueKeys: [], advice: [], contrastInfo: null };

    const issueKeys = [];
    if (!meta.analysis.isTransparentPng) issueKeys.push("format");
    if (meta.height !== SPEC.logoRequiredHeight) issueKeys.push("fixedHeight");
    if (!meta.analysis.bbox || !getLogoEdgeFill(meta)) issueKeys.push("edgeMargin");
    if (meta.analysis.averageLum < SPEC.logoWhiteMinLum || meta.analysis.lightRatio < SPEC.logoWhiteMinLightRatio) {
      issueKeys.push("notWhite");
    }
    if (contrastInfo && !contrastInfo.passed) {
      issueKeys.push("contrastLow");
    }

    const unique = Array.from(new Set(issueKeys));
    return {
      passed: unique.length === 0,
      issueKeys: unique,
      advice: unique.map((key) => suggestions[key]),
      contrastInfo,
    };
  }

  function auditOriginalLogo(meta) {
    if (!meta) return { passed: false, issueKeys: [], advice: [] };
    const issueKeys = [];
    if (!meta.analysis.isTransparentPng) issueKeys.push("format");
    if (meta.height !== SPEC.logoRequiredHeight) issueKeys.push("fixedHeight");
    const unique = Array.from(new Set(issueKeys));
    return {
      passed: unique.length === 0,
      issueKeys: unique,
      advice: unique.map((key) => suggestions[key]),
    };
  }

  function ReviewTag({ audit }) {
    if (!audit || !audit.hasAnyUpload) return h(Tag, null, "未检测");
    return audit.passed ? h(Tag, { color: "success" }, "审核通过") : h(Tag, { color: "error" }, "需调整");
  }

  function InlineAuditResult({ meta, issues, emptyText = "上传后显示审核结果" }) {
    if (!meta) {
      return h(Alert, { className: "panel-alert", message: emptyText, showIcon: true, type: "info" });
    }
    if (!issues.length) {
      return h(Alert, { className: "panel-alert", message: "审核通过", showIcon: true, type: "success" });
    }
    return h("div", { className: "panel-alert" },
      h(Alert, { message: "审核不通过", showIcon: true, type: "error" }),
      h(List, {
        className: "inline-issue-list",
        dataSource: issues,
        renderItem: (item) => h(List.Item, null, h(Tag, { color: "error" }, item)),
        size: "small",
      })
    );
  }

  function UploadAssetCard({ title, description, accept, meta, issues, onUpload, onRemove }) {
    return h(Card, {
      extra: meta ? h(Tag, { color: issues.length ? "error" : "success" }, issues.length ? "需调整" : "已上传") : h(Tag, null, "待上传"),
      title,
    },
      h(Dragger, {
        accept,
        beforeUpload: onUpload,
        maxCount: 1,
        showUploadList: false,
      },
        h("p", { className: "ant-upload-drag-icon" }, h(CloudUploadOutlined)),
        h("p", { className: "ant-upload-text" }, meta ? "点击替换素材" : "点击上传素材"),
        h("p", { className: "ant-upload-hint" }, description)
      ),
      meta && h("div", { className: "uploaded-file" },
        h(Flex, { align: "center", gap: 12, justify: "space-between" },
          h("div", { className: "min-block" },
            h(Text, { strong: true }, meta.file.name),
            h(Text, { className: "muted-line" }, `${meta.width} × ${meta.height}px · ${formatBytes(meta.file.size)}`)
          ),
          h(Button, { danger: true, icon: h(DeleteOutlined), onClick: onRemove }, "删除")
        ),
        h("div", { className: "logo-chip" }, h("img", { alt: title, src: meta.url }))
      ),
      h(InlineAuditResult, { meta, issues })
    );
  }

  function SloganText({ text, className }) {
    const value = (text || "").trim();
    if (!value) return null;
    return h("div", { className }, value);
  }

  function DetailPreviewLayers({ logoMeta, atmosphereMeta, coreMeta, sloganText, brandTagSize, setBaseMissing, setForegroundMissing, setTopMissing, setTagMissing, setBrandTagSize }) {
    const logoPreview = getLogoPreviewRender(logoMeta, brandTagSize, DETAIL_PREVIEW);
    const coreStyle = getCoreVisualStyle(coreMeta, DETAIL_PREVIEW);

    return h(React.Fragment, null,
      h("img", {
        alt: "商详图1 底色",
        className: "preview-layer layer-base",
        onError: setBaseMissing ? () => setBaseMissing(true) : undefined,
        onLoad: setBaseMissing ? () => setBaseMissing(false) : undefined,
        src: DETAIL_PREVIEW.baseSrc,
      }),
      atmosphereMeta && h("img", {
        alt: "商详图2 上传背景图",
        className: "preview-layer detail-layer-atmosphere",
        src: atmosphereMeta.url,
      }),
      coreMeta && coreStyle && h("img", {
        alt: "商详图3 上传核心视觉元素图",
        className: "preview-layer layer-core",
        src: coreMeta.url,
        style: coreStyle,
      }),
      h("img", {
        alt: "商详图4 蒙层",
        className: "preview-layer detail-layer-mask",
        onError: setForegroundMissing ? () => setForegroundMissing(true) : undefined,
        onLoad: setForegroundMissing ? () => setForegroundMissing(false) : undefined,
        src: DETAIL_PREVIEW.maskSrc,
      }),
      h("img", {
        alt: "商详图5 顶层",
        className: "preview-layer detail-layer-top",
        onError: setTopMissing ? () => setTopMissing(true) : undefined,
        onLoad: setTopMissing ? () => setTopMissing(false) : undefined,
        src: DETAIL_PREVIEW.topSrc,
      }),
      h(SloganText, { className: "detail-slogan-text", text: sloganText }),
      logoMeta && logoPreview && h("div", { className: "logo-row" },
        h("div", { className: "preview-logo-box", style: logoPreview.wrapperStyle },
          h("img", {
            alt: "商详图6 上传 Logo",
            className: "preview-logo",
            src: logoMeta.url,
            style: logoPreview.imageStyle,
          })
        ),
        h("img", {
          alt: "商详图7 标签",
          className: "brand-tag",
          onError: setTagMissing ? () => setTagMissing(true) : undefined,
          onLoad: setBrandTagSize
            ? (event) => {
                setTagMissing(false);
                setBrandTagSize({
                  width: event.currentTarget.naturalWidth || SPEC.fallbackTagWidth,
                  height: event.currentTarget.naturalHeight || SPEC.fallbackTagHeight,
                });
              }
            : undefined,
          src: DETAIL_PREVIEW.tagSrc,
          style: logoPreview.brandTagStyle,
        })
      )
    );
  }

  function StorePreviewLayers({ logoMeta, atmosphereMeta, coreMeta, sloganText, brandTagSize }) {
    const logoPreview = getLogoPreviewRender(logoMeta, brandTagSize, STORE_PREVIEW);
    const coreStyle = getCoreVisualStyle(coreMeta, STORE_PREVIEW);
    const storeCoreRect = STORE_PREVIEW.storeCoreRect;
    const clippedCoreStyle = coreStyle && storeCoreRect
      ? {
          position: "absolute",
          left: `${parseFloat(coreStyle.left) - storeCoreRect.left}px`,
          top: `${parseFloat(coreStyle.top) - storeCoreRect.top}px`,
          width: coreStyle.width,
          height: coreStyle.height,
        }
      : null;

    return h(React.Fragment, null,
      h("img", {
        alt: "店铺图1 底色",
        className: "preview-layer layer-base",
        src: STORE_PREVIEW.baseSrc,
      }),
      atmosphereMeta && h("img", {
        alt: "店铺图2 上传背景图",
        className: "preview-layer store-layer-atmosphere",
        src: atmosphereMeta.url,
      }),
      coreMeta && clippedCoreStyle && h("div", {
        className: "store-core-clip",
        style: {
          left: `${storeCoreRect.left}px`,
          top: `${storeCoreRect.top}px`,
          width: `${storeCoreRect.width}px`,
          height: `${storeCoreRect.height}px`,
        },
      },
        h("img", {
          alt: "店铺图4 上传核心视觉元素",
          className: "store-layer-core",
          src: coreMeta.url,
          style: clippedCoreStyle,
        })
      ),
      h("img", {
        alt: "店铺图3 顶部蒙层",
        className: "preview-layer store-layer-top-mask",
        src: STORE_PREVIEW.topMaskSrc,
      }),
      h("img", {
        alt: "店铺图5 顶层",
        className: "preview-layer store-layer-top",
        src: STORE_PREVIEW.topLayerSrc,
      }),
      h("img", {
        alt: "店铺图6 标签",
        className: "store-benefit-tag",
        src: STORE_PREVIEW.tagSrc,
      }),
      h(SloganText, { className: "store-slogan-text", text: sloganText }),
      logoMeta && logoPreview && h("div", { className: "logo-row" },
        h("div", { className: "preview-logo-box", style: logoPreview.wrapperStyle },
          h("img", {
            alt: "店铺图7 上传 Logo",
            className: "preview-logo",
            src: logoMeta.url,
            style: logoPreview.imageStyle,
          })
        )
      )
    );
  }

  function StoreScrollPreviewLayers({ originalLogoMeta, brandTagSize }) {
    const logoPreview = getLogoPreviewRender(originalLogoMeta, brandTagSize, STORE_SCROLL_PREVIEW);

    return h(React.Fragment, null,
      h("img", {
        alt: "店铺上滑图1 底图",
        className: "preview-layer layer-base",
        src: STORE_SCROLL_PREVIEW.baseSrc,
      }),
      originalLogoMeta && logoPreview && h("div", { className: "logo-row" },
        h("div", { className: "preview-logo-box", style: logoPreview.wrapperStyle },
          h("img", {
            alt: "店铺上滑原色 Logo",
            className: "preview-logo",
            src: originalLogoMeta.url,
            style: logoPreview.imageStyle,
          })
        )
      )
    );
  }

  function PreviewCanvas({ children, previewScale, previewRef }) {
    return h("div", {
      className: "preview-scale-box",
      style: {
        width: SPEC.artboardWidth * previewScale,
        height: SPEC.artboardHeight * previewScale,
      },
    },
      h("div", { className: "preview-scale-inner", style: { transform: `scale(${previewScale})` } },
        h("div", { className: "preview-container phone-artboard", ref: previewRef },
          children
        )
      )
    );
  }

  function PreviewThumbnail({ logoMeta, atmosphereMeta, coreMeta }) {
    return h("div", { className: "xbp-thumb" },
      h("div", { className: "xbp-thumb-inner" },
        h(DetailPreviewLayers, { logoMeta, atmosphereMeta, coreMeta })
      )
    );
  }

  function App() {
    const previewShellRef = useRef(null);
    const previewRef = useRef(null);
    const storePreviewRef = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();
    const [logoMeta, setLogoMeta] = useState(null);
    const [originalLogoMeta, setOriginalLogoMeta] = useState(null);
    const [atmosphereMeta, setAtmosphereMeta] = useState(null);
    const [coreMeta, setCoreMeta] = useState(null);
    const [sloganText, setSloganText] = useState("");
    const [brandTagSize, setBrandTagSize] = useState({
      width: SPEC.fallbackTagWidth,
      height: SPEC.fallbackTagHeight,
    });
    const [previewScale, setPreviewScale] = useState(0.28);
    const [busy, setBusy] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [error, setError] = useState("");
    const [tagMissing, setTagMissing] = useState(false);
    const [baseMissing, setBaseMissing] = useState(false);
    const [foregroundMissing, setForegroundMissing] = useState(false);
    const [topMissing, setTopMissing] = useState(false);
    const [logoBackgroundTone, setLogoBackgroundTone] = useState("dark");
    const [detailMaskImage, setDetailMaskImage] = useState(null);
    const [manualOpen, setManualOpen] = useState(false);
    const [xbpOpen, setXbpOpen] = useState(false);
    const [sendingXbp, setSendingXbp] = useState(false);

    const logoContrastInfo = useMemo(
      () => computeLogoBackgroundContrast({ atmosphereMeta, logoMeta, maskImage: detailMaskImage, brandTagSize }),
      [atmosphereMeta, logoMeta, detailMaskImage, brandTagSize]
    );
    const logoAudit = useMemo(() => auditLogo(logoMeta, logoContrastInfo), [logoMeta, logoContrastInfo]);
    const originalLogoAudit = useMemo(() => auditOriginalLogo(originalLogoMeta), [originalLogoMeta]);
    const atmosphereIssues = useMemo(() => validateAtmosphere(atmosphereMeta), [atmosphereMeta]);
    const coreIssues = useMemo(() => validateCore(coreMeta), [coreMeta]);
    const logoIssues = useMemo(() => logoAudit.issueKeys.map((key) => allowedReasons[key]), [logoAudit]);
    const originalLogoIssues = useMemo(() => originalLogoAudit.issueKeys.map((key) => allowedReasons[key]), [originalLogoAudit]);
    const sloganIssues = useMemo(() => validateSlogan(sloganText), [sloganText]);
    const audit = useMemo(
      () => createUnifiedAudit({
        atmosphereMeta,
        coreMeta,
        logoMeta,
        originalLogoMeta,
        atmosphereIssues,
        coreIssues,
        logoAudit,
        originalLogoAudit,
        sloganText,
        sloganIssues,
      }),
      [atmosphereMeta, coreMeta, logoMeta, originalLogoMeta, atmosphereIssues, coreIssues, logoAudit, originalLogoAudit, sloganText, sloganIssues]
    );
    const logoPreview = useMemo(() => getLogoPreviewRender(logoMeta, brandTagSize), [logoMeta, brandTagSize]);
    const logoPreviewLabel = logoPreview
      ? `${logoPreview.label} · 高 ${(logoPreview.height / SPEC.scaleRatio).toFixed(1).replace(".0", "")}px`
      : "-";
    const metricItems = logoMeta
      ? [
          { label: "文件类型", value: logoMeta.file.type || "-" },
          { label: "文件大小", value: formatBytes(logoMeta.file.size) },
          { label: "实际宽高", value: `${logoMeta.width} × ${logoMeta.height}px` },
          { label: "主体宽高", value: logoMeta.analysis.bbox ? `${logoMeta.analysis.bbox.width} × ${logoMeta.analysis.bbox.height}px` : "-" },
          { label: "预览模式", value: logoPreviewLabel },
          { label: "宽高比", value: logoPreview ? `${logoPreview.ratio.toFixed(2)}:1` : "-" },
          { label: "反白对比度", value: logoContrastInfo ? `${logoContrastInfo.contrast.toFixed(2)}:1` : "上传背景后计算" },
          { label: "透明像素", value: `${Math.round(logoMeta.analysis.transparentRatio * 100)}%` },
        ]
      : [];

    useEffect(() => {
      const shell = previewShellRef.current;
      if (!shell) return undefined;

      const updateScale = () => {
        const rect = shell.getBoundingClientRect();
        const availableWidth = Math.max(rect.width - 32, 280);
        const availableHeight = Math.max(window.innerHeight - rect.top - 48, 640);
        const nextScale = Math.min(0.42, availableWidth / SPEC.artboardWidth, availableHeight / SPEC.artboardHeight);
        setPreviewScale(Math.max(0.18, nextScale));
      };

      updateScale();
      const observer = new ResizeObserver(updateScale);
      observer.observe(shell);
      window.addEventListener("resize", updateScale);
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", updateScale);
      };
    }, []);

    useEffect(() => {
      let mounted = true;
      loadImageSrc(DETAIL_PREVIEW.maskSrc)
        .then((image) => {
          if (!mounted) return;
          setDetailMaskImage(image);
        })
        .catch(() => {
          if (mounted) setDetailMaskImage(null);
        });
      return () => {
        mounted = false;
      };
    }, []);

    useEffect(() => {
      return () => {
        if (logoMeta && logoMeta.url) URL.revokeObjectURL(logoMeta.url);
      };
    }, [logoMeta && logoMeta.url]);

    useEffect(() => {
      return () => {
        if (originalLogoMeta && originalLogoMeta.url) URL.revokeObjectURL(originalLogoMeta.url);
      };
    }, [originalLogoMeta && originalLogoMeta.url]);

    async function handleLogoFile(file) {
      if (!file) return false;
      setBusy(true);
      setError("");
      try {
        const { image, url } = await readImage(file);
        const analysis = analyzePixels(image, file);
        if (logoMeta && logoMeta.url) URL.revokeObjectURL(logoMeta.url);
        setLogoMeta({
          file,
          image,
          url,
          width: image.naturalWidth,
          height: image.naturalHeight,
          analysis,
        });
        messageApi.success("Logo 已完成像素检测");
      } catch (err) {
        setError(err.message || "图片读取失败，请重新上传。");
        messageApi.error("图片读取失败");
      } finally {
        setBusy(false);
      }
      return false;
    }

    async function handleOriginalLogoFile(file) {
      if (!file) return false;
      setBusy(true);
      setError("");
      try {
        const { image, url } = await readImage(file);
        const analysis = analyzePixels(image, file);
        if (originalLogoMeta && originalLogoMeta.url) URL.revokeObjectURL(originalLogoMeta.url);
        setOriginalLogoMeta({
          file,
          image,
          url,
          width: image.naturalWidth,
          height: image.naturalHeight,
          analysis,
        });
        messageApi.success("原色 Logo 已完成检测");
      } catch (err) {
        setError(err.message || "图片读取失败，请重新上传。");
        messageApi.error("图片读取失败");
      } finally {
        setBusy(false);
      }
      return false;
    }

    async function handleMerchantAsset(file, setter, successText) {
      if (!file) return false;
      setBusy(true);
      setError("");
      try {
        const { image, url } = await readImage(file);
        const analysis = analyzePixels(image, file);
        setter({
          file,
          image,
          url,
          width: image.naturalWidth,
          height: image.naturalHeight,
          analysis,
        });
        messageApi.success(successText);
      } catch (err) {
        setError(err.message || "图片读取失败，请重新上传。");
        messageApi.error("图片读取失败");
      } finally {
        setBusy(false);
      }
      return false;
    }

    function removeLogo() {
      if (logoMeta && logoMeta.url) URL.revokeObjectURL(logoMeta.url);
      setLogoMeta(null);
      setError("");
      messageApi.info("已移除当前 Logo");
    }

    function removeOriginalLogo() {
      if (originalLogoMeta && originalLogoMeta.url) URL.revokeObjectURL(originalLogoMeta.url);
      setOriginalLogoMeta(null);
      setError("");
      messageApi.info("已移除当前原色 Logo");
    }

    function removeMerchantAsset(setter, messageText) {
      setter(null);
      setError("");
      messageApi.info(messageText);
    }

    async function downloadPreview() {
      if (!previewRef.current || exporting) return;
      setExporting(true);
      try {
        const canvas = await html2canvas(previewRef.current, {
          backgroundColor: null,
          width: SPEC.artboardWidth,
          height: SPEC.artboardHeight,
          scale: 1,
          useCORS: true,
          imageTimeout: 0,
          logging: false,
        });
        const link = document.createElement("a");
        link.download = `detail-logo-review-preview-${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        messageApi.success("预览图已导出");
      } catch (err) {
        setError("导出失败，请确认背景图、Logo 与 brand-tag.png 均可正常加载。");
        messageApi.error("导出失败");
      } finally {
        setExporting(false);
      }
    }

    function contactAuditor() {
      setManualOpen(false);
      messageApi.success("已打开 IM 聊天窗口，正在联系审核员张三。");
    }

    function sendToXbp() {
      if (sendingXbp) return;
      setSendingXbp(true);
      window.setTimeout(() => {
        setSendingXbp(false);
        setXbpOpen(false);
        messageApi.success("审核结果与当前预览图已发送至 XBP 审核系统。");
      }, 1100);
    }

    return h(Layout, { className: "app-shell" },
      contextHolder,
      h(Content, { className: "app-content" },
        h("header", { className: "app-header" },
          h("div", null,
            h(Badge, { status: "processing", text: h(Text, { className: "header-kicker" }, "AntD Light 规范化审核") }),
            h(Title, { className: "app-title", level: 1 }, "店铺 1+1 素材审核平台"),
            h(Paragraph, { className: "app-subtitle" }, "左侧上传背景、核心视觉元素和 Logo，右侧实时生成商详腰部店铺 Logo 预览与店铺 Logo 预览。")
          ),
          h(Space, { wrap: true },
            h(Tag, { color: "red" }, "3x 预览 1125 × 2436"),
            h(Tag, null, "左侧 5 个输入区"),
            h(Tag, null, "右侧 3 个实时预览")
          )
        ),
        h(Row, { gutter: [24, 24] },
          h(Col, { xs: 24, xl: 9, xxl: 8 },
            h(Space, { className: "side-stack", direction: "vertical", size: 16 },
              h(UploadAssetCard, {
                title: "沉浸式氛围背景图（图2）",
                description: "上传后同时进入商详预览与店铺预览；按对应预览区域左右充满展示。",
                accept: "image/png,image/jpeg,image/webp",
                meta: atmosphereMeta,
                issues: atmosphereIssues,
                onUpload: (file) => handleMerchantAsset(file, setAtmosphereMeta, "图2 已进入右侧预览图层"),
                onRemove: () => removeMerchantAsset(setAtmosphereMeta, "已移除图2"),
              }),
              h(UploadAssetCard, {
                title: "核心视觉元素图（图3）",
                description: "建议上传728×387px透明底图片",
                accept: "image/png,image/webp",
                meta: coreMeta,
                issues: coreIssues,
                onUpload: (file) => handleMerchantAsset(file, setCoreMeta, "图3 已进入右侧预览图层"),
                onRemove: () => removeMerchantAsset(setCoreMeta, "已移除图3"),
              }),
              h(Card, {
                extra: busy ? h(Tag, { color: "processing" }, "检测中") : h(ReviewTag, { audit, logoMeta }),
                title: "Logo 上传",
              },
                h(Dragger, {
                  accept: "image/png,image/jpeg,image/webp",
                  beforeUpload: handleLogoFile,
                  disabled: busy,
                  maxCount: 1,
                  showUploadList: false,
                },
                  h("p", { className: "ant-upload-drag-icon" }, h(CloudUploadOutlined)),
                  h("p", { className: "ant-upload-text" }, logoMeta ? "点击替换，或拖拽新 Logo 到这里" : "拖拽 PNG 到这里，或点击上传"),
                  h("p", { className: "ant-upload-hint" }, "系统会读取 alpha 通道、主体颜色与实际像素尺寸。")
                ),
                logoMeta && h("div", { className: "uploaded-file" },
                  h(Flex, { align: "center", gap: 12, justify: "space-between" },
                    h("div", { className: "min-block" },
                      h(Text, { strong: true }, logoMeta.file.name),
                      h(Text, { className: "muted-line" }, `${logoMeta.width} × ${logoMeta.height}px · ${formatBytes(logoMeta.file.size)}`)
                    ),
                    h(Button, { danger: true, icon: h(DeleteOutlined), onClick: removeLogo }, "删除")
                  ),
                  h("div", { className: "logo-chip" }, h("img", { alt: "上传的店铺 Logo", src: logoMeta.url }))
                ),
                h(InlineAuditResult, { meta: logoMeta, issues: logoIssues }),
                error && h(Alert, { className: "panel-alert", message: error, showIcon: true, type: "error" })
              ),
              h(Card, {
                extra: originalLogoMeta
                  ? h(Tag, { color: originalLogoIssues.length ? "error" : "success" }, originalLogoIssues.length ? "需调整" : "已上传")
                  : h(Tag, null, "待上传"),
                title: "原色 Logo 上传",
              },
                h(Dragger, {
                  accept: "image/png,image/jpeg,image/webp",
                  beforeUpload: handleOriginalLogoFile,
                  disabled: busy,
                  maxCount: 1,
                  showUploadList: false,
                },
                  h("p", { className: "ant-upload-drag-icon" }, h(CloudUploadOutlined)),
                  h("p", { className: "ant-upload-text" }, originalLogoMeta ? "点击替换原色 Logo" : "上传原色 Logo"),
                  h("p", { className: "ant-upload-hint" }, "仅用于第三个店铺上滑预览；审核透明底和60px高度。")
                ),
                originalLogoMeta && h("div", { className: "uploaded-file" },
                  h(Flex, { align: "center", gap: 12, justify: "space-between" },
                    h("div", { className: "min-block" },
                      h(Text, { strong: true }, originalLogoMeta.file.name),
                      h(Text, { className: "muted-line" }, `${originalLogoMeta.width} × ${originalLogoMeta.height}px · ${formatBytes(originalLogoMeta.file.size)}`)
                    ),
                    h(Button, { danger: true, icon: h(DeleteOutlined), onClick: removeOriginalLogo }, "删除")
                  ),
                  h("div", { className: "logo-chip" }, h("img", { alt: "上传的原色 Logo", src: originalLogoMeta.url }))
                ),
                h(InlineAuditResult, { meta: originalLogoMeta, issues: originalLogoIssues })
              ),
              h(Card, {
                extra: sloganText.trim()
                  ? h(Tag, { color: sloganIssues.length ? "error" : "success" }, sloganIssues.length ? "需调整" : "已填写")
                  : h(Tag, null, "待填写"),
                title: "标语",
              },
                h(TextArea, {
                  autoSize: { minRows: 2, maxRows: 3 },
                  maxLength: 32,
                  onChange: (event) => setSloganText(event.target.value),
                  placeholder: "请输入标语，最多16个字符（1个汉字=2个字符）",
                  value: sloganText,
                }),
                h(Text, { className: "muted-line" }, `当前 ${getSloganLength(sloganText.trim())} / 16 字符`),
                sloganIssues.length
                  ? h(Alert, { className: "panel-alert", message: sloganIssues[0], showIcon: true, type: "error" })
                  : h(Alert, { className: "panel-alert", message: "标语会展示在前两个预览区域，第三个预览不展示。", showIcon: true, type: "info" })
              ),
              h(Card, { extra: h(ReviewTag, { audit, logoMeta }), title: "审核结果" },
                h(Space, { className: "full-width", direction: "vertical", size: 16 },
                  h(Result, {
                    className: "compact-result",
                    icon: audit.passed ? h(CheckCircleOutlined) : h(ExclamationCircleOutlined),
                    status: audit.hasAnyUpload ? audit.passed ? "success" : "error" : "info",
                    subTitle: audit.hasAnyUpload
                      ? audit.passed ? "背景图、核心视觉元素图、反白Logo、原色Logo与标语均符合当前规则。" : "请按问题原因调整对应素材后重新上传。"
                      : "上传背景图、核心视觉元素图、反白Logo、原色Logo并填写标语后输出统一审核结果。",
                    title: audit.hasAnyUpload ? audit.passed ? "审核通过" : "审核未通过" : "待上传素材",
                  }),
                  logoMeta && h(Row, { gutter: [10, 10] },
                    metricItems.map((item) => h(Col, { key: item.label, xs: 12 },
                      h(Card, { className: "metric-card", size: "small" },
                        h(Statistic, { title: item.label, value: item.value })
                      )
                    ))
                  ),
                  h(List, {
                    dataSource: audit.hasAnyUpload ? audit.problems.length ? audit.problems : ["审核通过"] : ["上传背景图、核心视觉元素图、反白Logo、原色Logo并填写标语后开始审核"],
                    header: h(Text, { strong: true }, "问题"),
                    renderItem: (item) => h(List.Item, null,
                      !audit.hasAnyUpload
                        ? h(Tag, null, item)
                        : audit.problems.length ? h(Tag, { color: "error" }, item) : h(Tag, { color: "success" }, item)
                    )
                  }),
                  h(Space, { className: "full-width", wrap: true },
                    h(Button, { onClick: () => setManualOpen(true) }, "人工审核"),
                    h(Button, { icon: h(SendOutlined), onClick: () => setXbpOpen(true), type: "primary" }, "发送至 XBP 审核")
                  )
                )
              ),
              h(Card, { title: "修改建议" },
                audit.advice.length
                  ? h(List, {
                      dataSource: audit.advice,
                      renderItem: (item) => h(List.Item, null, h(Alert, { message: item, showIcon: true, type: "warning" })),
                    })
                  : h(Alert, { message: audit.passed ? "当前素材组合可用于线上预览展示。" : "建议会随上传结果实时更新。", showIcon: true, type: audit.passed ? "success" : "info" })
              )
            )
          ),
          h(Col, { xs: 24, xl: 15, xxl: 16 },
            h(Card, {
              className: "preview-card",
              extra: h(Space, { wrap: true },
                h(Tag, null, `缩放 ${Math.round(previewScale * 100)}%`),
                h(Button, { icon: h(DownloadOutlined), loading: exporting, onClick: downloadPreview }, "下载 PNG")
              ),
              title: "实时预览",
            },
              h(Paragraph, { type: "secondary" }, "商详与店铺预览共用左侧上传素材。图1 为底层，其余图层按你提供的一倍图坐标换算为 3 倍图 absolute 定位。"),
              baseMissing && h(Alert, { className: "panel-alert", message: "未找到商详图1:底色.png。", showIcon: true, type: "warning" }),
              foregroundMissing && h(Alert, { className: "panel-alert", message: "未找到图4:蒙层.png。", showIcon: true, type: "warning" }),
              topMissing && h(Alert, { className: "panel-alert", message: "未找到图5:顶层.png。", showIcon: true, type: "warning" }),
              tagMissing && h(Alert, { className: "panel-alert", message: "未找到图7:标签.png。", showIcon: true, type: "warning" }),
              h("div", { className: "preview-matrix", ref: previewShellRef },
                h(Card, { className: "preview-subcard", size: "small", title: DETAIL_PREVIEW.title },
                  h("div", { className: "preview-scroll compact-preview-scroll" },
                    h(PreviewCanvas, { previewScale, previewRef },
                      h(DetailPreviewLayers, {
                        logoMeta,
                        atmosphereMeta,
                        coreMeta,
                        sloganText,
                        brandTagSize,
                        setBaseMissing,
                        setForegroundMissing,
                        setTopMissing,
                        setTagMissing,
                        setBrandTagSize,
                      })
                    )
                  )
                ),
                h(Card, { className: "preview-subcard", size: "small", title: STORE_PREVIEW.title },
                  h("div", { className: "preview-scroll compact-preview-scroll" },
                    h(PreviewCanvas, { previewScale, previewRef: storePreviewRef },
                      h(StorePreviewLayers, {
                        logoMeta,
                        atmosphereMeta,
                        coreMeta,
                        sloganText,
                        brandTagSize,
                      })
                    )
                  )
                ),
                h(Card, { className: "preview-subcard", size: "small", title: STORE_SCROLL_PREVIEW.title },
                  h("div", { className: "preview-scroll compact-preview-scroll" },
                    h(PreviewCanvas, { previewScale },
                      h(StoreScrollPreviewLayers, {
                        originalLogoMeta,
                        brandTagSize,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      ),
      h(Modal, {
        okText: "联系他",
        onCancel: () => setManualOpen(false),
        onOk: contactAuditor,
        open: manualOpen,
        title: "人工审核",
      },
        h(Flex, { align: "center", gap: 16 },
          h(Avatar, { icon: h(UserOutlined), size: 64 }),
          h("div", null,
            h(Title, { level: 4 }, "张三"),
            h(Text, { type: "secondary" }, "商详审核组 · Logo 深色场景规范")
          )
        ),
        h(Descriptions, { className: "modal-descriptions", column: 2, size: "small" },
          h(Descriptions.Item, { label: "员工姓名" }, "张三"),
          h(Descriptions.Item, { label: "ERP 账号" }, "zhangsan01"),
          h(Descriptions.Item, { label: "所属团队" }, "商详审核组"),
          h(Descriptions.Item, { label: "当前状态" }, h(Badge, { status: "success", text: "在线" }))
        )
      ),
      h(Modal, {
        confirmLoading: sendingXbp,
        okText: "发送审核结果",
        onCancel: () => !sendingXbp && setXbpOpen(false),
        onOk: sendToXbp,
        open: xbpOpen,
        title: "发送至 XBP 审核",
        width: 760,
      },
        h("div", { className: "xbp-layout" },
          h(PreviewThumbnail, { logoMeta, atmosphereMeta, coreMeta }),
          h(Space, { className: "full-width", direction: "vertical", size: 12 },
            h(Descriptions, { bordered: true, column: 1, size: "small" },
              h(Descriptions.Item, { label: "当前审核结果" }, h(ReviewTag, { audit, logoMeta })),
              h(Descriptions.Item, { label: "问题原因" },
                audit.problems.length
                  ? audit.problems.map((item) => h(Tag, { key: item, color: "error" }, item))
                  : audit.hasAnyUpload ? h(Tag, { color: "success" }, "审核通过") : h(Tag, null, "待上传素材")
              ),
              h(Descriptions.Item, { label: "修改建议" },
                audit.advice.length ? audit.advice.join(" ") : audit.passed ? "当前素材组合可用于线上预览展示。" : "请先上传素材以生成审核建议。"
              )
            )
          )
        )
      )
    );
  }

  const appTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#22d3ee",
      colorInfo: "#22d3ee",
      colorSuccess: "#43fb95",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorBgLayout: "#0c1324",
      colorBgContainer: "rgba(17,26,47,0.72)",
      colorBgElevated: "#191f31",
      colorBorder: "rgba(255,255,255,0.1)",
      colorBorderSecondary: "rgba(255,255,255,0.08)",
      borderRadius: 6,
      fontFamily: "Inter, PingFang SC, Microsoft YaHei, Arial, sans-serif",
    },
    components: {
      Button: { primaryColor: "#0f172a" },
    },
  };

  ReactDOM.createRoot(document.getElementById("root")).render(
    h(ConfigProvider, { locale: antd.locales && antd.locales.zh_CN, theme: appTheme }, h(App))
  );
})();
