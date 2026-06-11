/**
 * 商详腰带 AI 审核规则引擎 v0.21（纯前端 · 参考 logo-review-public-site 审核结构）
 */
(function (global) {
  const VERSION = "0.21";
  const WCAG_AA = 4.5;
  const WCAG_MIN = 3;
  const MAX_IP = 3;
  const SLOGAN_MAX = 9;
  const COUPON_BTN_MAX = 7;
  const IP_TEXT_MAX = 7;

  const ACTIVITY_ATMO_ALLOWED = new Set(["大促", "平台S级"]);

  const AUDIT_REASONS = {
    "meta-project": "项目名称为空或格式不合规",
    "meta-business": "未选择业务线",
    "meta-activity": "未选择活动类型",
    "meta-terminal": "未选择上线端",
    "meta-date": "上线日期不合法或早于今天",
    "meta-erp": "提审人 ERP 为空或格式不合规",
    "color-bg-missing": "背景色缺失",
    "color-text-missing": "主文字颜色缺失",
    "color-contrast-p1": "背景色与主文字对比度不足",
    "color-contrast-p2": "背景色与主文字对比度偏低",
    "color-countdown": "倒计时数字与底块对比度不足",
    "atmo-format": "氛围icon 非透明底 PNG",
    "atmo-blur": "氛围icon 存在明显模糊或压缩损伤",
    "atmo-complex": "氛围icon 过于复杂、喧宾夺主",
    "atmo-splus": "S+ 活动上传氛围icon 需设计师复核",
    "ip-count-zero": "未选择品牌 IP",
    "ip-count-over": "IP 数量超过腰带承载上限",
    "ip-crowded": "移动端 IP 组合过于拥挤",
    "benefit-missing": "未选择右侧利益点",
    "benefit-slogan-len": "Slogan 超出字数限制",
    "benefit-coupon-len": "优惠文案超出字数限制",
    "right-overload": "右侧组件组合信息过载",
    "line-truncated": "文案被截断可能影响展示",
    "compose-warn": "排版规则提示",
  };

  const AUDIT_SUGGESTIONS = {
    "meta-project": "请填写项目名称，避免使用 \\ / : * ? \" < > | 等特殊符号。",
    "meta-business": "请选择业务线以匹配默认视觉与审核规则。",
    "meta-activity": "请选择活动类型（大促 / 平台S级 / 品类日等）。",
    "meta-terminal": "请至少勾选一个上线端：移动端 2 行、移动端 3 行、PC。",
    "meta-date": "请填写合法上线日期，且不能早于当前日期。",
    "meta-erp": "请填写提审人 ERP 账号。",
    "color-bg-missing": "请先完成品牌色映射，配置腰带背景色。",
    "color-text-missing": "请配置腰带主文字颜色。",
    "color-contrast-p1":
      "当前背景色与文字颜色对比度不足，可能影响线上可读性。建议调整文字颜色，或使用系统推荐的颜色方案。",
    "color-contrast-p2": "建议提高主文字与背景对比度至 4.5:1 以上。",
    "color-countdown": "建议调整倒计时数字色或底块颜色以满足对比度要求。",
    "atmo-format": "当前氛围icon 不是透明底 PNG，请上传透明底 PNG 文件。",
    "atmo-blur":
      "当前氛围icon 存在明显模糊或压缩损伤，可能影响线上展示质量，请重新上传高清素材。",
    "atmo-complex": "氛围icon 过于复杂，建议简化或转设计师处理。",
    "atmo-splus": "当前为 S+ 活动腰带且上传了氛围icon，AI 审核后仍需设计师复审核。",
    "ip-count-zero": "请在品牌 IP 图库中至少选择 1 个。",
    "ip-count-over": "一个腰带最多展示 3 个 IP，请减少 IP 数量。",
    "ip-crowded": "当前 IP 组合在移动端展示过于拥挤，建议减少 IP 数量或转设计师复核。",
    "benefit-missing": "请在 ② 利益点中选择倒计时 / 领券 / 口号之一。",
    "benefit-slogan-len": "Slogan 最多 9 个汉字。",
    "benefit-coupon-len": "领券/优惠文案最多 9 个汉字。",
    "right-overload":
      "右侧同时展示多类信息，移动端 2 行存在拥挤风险。建议保留 IP 和一个核心利益点。",
    "line-truncated": "请缩短文案或调整组合形式。",
    "compose-warn": "请根据提示调整 IP 或利益点配置。",
  };

  function createIssue({
    id,
    level = "P2",
    severity,
    type,
    category,
    title,
    description,
    scope = ["移动端 2 行", "移动端 3 行", "PC"],
    suggestion,
    designerReview = false,
    reasonKey,
  }) {
    const key = reasonKey || id;
    return {
      id,
      level,
      severity: severity || (level === "P1" ? "error" : "warn"),
      type: type || title,
      category,
      title,
      description: description || AUDIT_REASONS[key] || "",
      scope,
      suggestion: suggestion || AUDIT_SUGGESTIONS[key] || "",
      designerReview,
      reasonKey: key,
    };
  }

  function todayYmd() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function parseYmd(str) {
    const m = String(str || "").trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return null;
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  }

  function validateAuditMeta(meta) {
    const issues = [];
    const name = String(meta?.projectName || "").trim();
    if (!name) {
      issues.push(
        createIssue({
          id: "meta-project",
          level: "P1",
          category: "基础信息",
          title: "项目名称为空",
          reasonKey: "meta-project",
        }),
      );
    } else if (name.length > 50 || /[\\/:*?"<>|]/.test(name)) {
      issues.push(
        createIssue({
          id: "meta-project-fmt",
          level: "P1",
          category: "基础信息",
          title: "项目名称格式不合规",
          description: "建议不超过 50 字，且不含文件名字符。",
          reasonKey: "meta-project",
        }),
      );
    }
    if (!meta?.businessLine) {
      issues.push(
        createIssue({
          id: "meta-business",
          level: "P1",
          category: "基础信息",
          title: "未选择业务线",
          reasonKey: "meta-business",
        }),
      );
    }
    if (!meta?.activityType) {
      issues.push(
        createIssue({
          id: "meta-activity",
          level: "P1",
          category: "基础信息",
          title: "未选择活动类型",
          reasonKey: "meta-activity",
        }),
      );
    }
    const terminals = meta?.terminals || [];
    if (!terminals.length) {
      issues.push(
        createIssue({
          id: "meta-terminal",
          level: "P1",
          category: "基础信息",
          title: "未选择上线端",
          reasonKey: "meta-terminal",
        }),
      );
    }
    const launch = parseYmd(meta?.launchDate);
    if (!launch) {
      issues.push(
        createIssue({
          id: "meta-date",
          level: "P1",
          category: "基础信息",
          title: "上线日期不合法",
          reasonKey: "meta-date",
        }),
      );
    } else {
      const today = parseYmd(todayYmd());
      if (launch < today) {
        issues.push(
          createIssue({
            id: "meta-date-past",
            level: "P1",
            category: "基础信息",
            title: "上线日期早于今天",
            reasonKey: "meta-date",
          }),
        );
      }
    }
    const erp = String(meta?.submitterErp || "").trim();
    if (!erp || !/^[a-zA-Z][a-zA-Z0-9._-]{2,19}$/.test(erp)) {
      issues.push(
        createIssue({
          id: "meta-erp",
          level: "P1",
          category: "基础信息",
          title: "提审人 ERP 不合规",
          reasonKey: "meta-erp",
        }),
      );
    }
    return issues;
  }

  function analyzeAtmosphereSync(src, mimeHint) {
    if (!src) return { ok: false, isPng: false, hasAlpha: false, opaqueBorderRatio: 1 };
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);
        let data;
        try {
          data = ctx.getImageData(0, 0, w, h).data;
        } catch {
          resolve({ ok: false, isPng: false, hasAlpha: false, width: w, height: h });
          return;
        }
        let transparent = 0;
        let borderOpaque = 0;
        let borderTotal = 0;
        const total = w * h;
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            const a = data[i + 3];
            const isBorder = x === 0 || y === 0 || x === w - 1 || y === h - 1;
            if (isBorder) {
              borderTotal += 1;
              if (a > 16) borderOpaque += 1;
            }
            if (a <= 16) transparent += 1;
          }
        }
        const hasAlpha = transparent / total > 0.03;
        const opaqueBorderRatio = borderTotal ? borderOpaque / borderTotal : 1;
        const isPng =
          (mimeHint && /png/i.test(mimeHint)) ||
          (String(src).startsWith("data:image/png") || /\.png(\?|$)/i.test(String(src)));
        resolve({
          ok: true,
          width: w,
          height: h,
          hasAlpha,
          isPng,
          opaqueBorderRatio,
          transparentRatio: transparent / total,
        });
      };
      img.onerror = () => resolve({ ok: false, isPng: false, hasAlpha: false });
      img.src = src;
    });
  }

  function computeScore(issues) {
    let score = 100;
    issues.forEach((it) => {
      if (it.severity === "pass") return;
      if (it.level === "P1") score -= 15;
      else if (it.level === "P2") score -= 5;
    });
    return Math.max(0, Math.min(100, score));
  }

  function resolveOutcome(issues, flags) {
    const p1 = issues.filter((i) => i.level === "P1" && i.severity !== "pass");
    const p2 = issues.filter((i) => i.level === "P2" && i.severity !== "pass");
    const needDesigner =
      flags.mustDesignerReview ||
      flags.complexRight ||
      flags.threeIpCrowded ||
      flags.atmoComplex ||
      flags.cannotJudge ||
      p2.some((i) => i.designerReview);

    if (p1.length > 0) {
      return {
        result: "fail",
        aiResult: "AI不通过",
        passed: false,
        needDesignerReview: false,
        nextAction: "返回运营修改，不进入设计复审核",
      };
    }
    if (flags.cannotJudge || flags.mustDesignerReview) {
      return {
        result: "manual",
        aiResult: "转设计师人工审核",
        passed: true,
        needDesignerReview: true,
        nextAction: "转设计师人工审核",
      };
    }
    if (p2.length > 0 || needDesigner) {
      return {
        result: "pass_risk",
        aiResult: "AI通过但有风险",
        passed: true,
        needDesignerReview: true,
        nextAction: "自动发送设计师复审核",
      };
    }
    return {
      result: "pass",
      aiResult: "AI通过",
      passed: true,
      needDesignerReview: true,
      nextAction: "自动发送设计师复审核",
    };
  }

  async function runBeltAuditV21(ctx) {
    const {
      meta = {},
      scheme,
      display,
      atmosphere,
      wcagContrastRatio,
      getCountdownBlockBgColor,
      getCountdownDigitColor,
      getBenefitById,
      getBenefitDisplayText,
      getBenefitTextMax,
      isBenefitTextEditable,
      BENEFIT_PRESETS,
      BELT_DISPLAY_RULES,
      selectedBenefitIds = [],
      selectedIpIds = [],
      hexToOklch,
      getScenarioById,
      selectedScenarioId,
    } = ctx;

    const issues = [];
    const passItems = [];
    const push = (item) => issues.push(item);
    const pass = (item) => passItems.push(item);

    issues.push(...validateAuditMeta(meta));

    const bg = scheme?.beltBg || scheme?.brand;
    const textPrimary = scheme?.textPrimary;

    if (!bg) {
      push(
        createIssue({
          id: "color-bg",
          level: "P1",
          category: "配色",
          title: "背景色缺失",
          reasonKey: "color-bg-missing",
        }),
      );
    } else {
      pass(
        createIssue({
          id: "color-bg-ok",
          level: "P2",
          severity: "pass",
          category: "配色",
          title: "背景色已配置",
          description: bg,
          suggestion: "",
        }),
      );
    }

    if (!textPrimary) {
      push(
        createIssue({
          id: "color-text",
          level: "P1",
          category: "配色",
          title: "主文字颜色缺失",
          reasonKey: "color-text-missing",
        }),
      );
    }

    if (bg && textPrimary && wcagContrastRatio) {
      const ratio = wcagContrastRatio(textPrimary, bg);
      if (ratio !== null) {
        if (ratio < WCAG_MIN) {
          push(
            createIssue({
              id: "contrast-p1",
              level: "P1",
              category: "配色",
              title: "主文字对比度不足",
              description: `对比度 ${ratio.toFixed(2)}:1，低于 ${WCAG_MIN}:1`,
              reasonKey: "color-contrast-p1",
            }),
          );
        } else if (ratio < WCAG_AA) {
          push(
            createIssue({
              id: "contrast-p2",
              level: "P2",
              category: "配色",
              title: "主文字对比度偏低",
              description: `对比度 ${ratio.toFixed(2)}:1，建议 ≥ ${WCAG_AA}:1`,
              reasonKey: "color-contrast-p2",
            }),
          );
        } else {
          pass(
            createIssue({
              id: "contrast-ok",
              level: "P2",
              severity: "pass",
              category: "配色",
              title: "主文字对比度达标",
              description: `${ratio.toFixed(2)}:1`,
            }),
          );
        }
      }
      if (getCountdownBlockBgColor && getCountdownDigitColor) {
        const cdRatio = wcagContrastRatio(getCountdownDigitColor(scheme), getCountdownBlockBgColor(scheme));
        if (cdRatio !== null && cdRatio < WCAG_AA) {
          push(
            createIssue({
              id: "contrast-cd",
              level: "P1",
              category: "配色",
              title: "倒计时对比度不足",
              reasonKey: "color-countdown",
            }),
          );
        }
      }
    }

    const ips = display?.ips || [];
    if (!ips.length) {
      push(
        createIssue({
          id: "ip-zero",
          level: "P1",
          category: "LOGO / IP",
          title: "未选择品牌 IP",
          reasonKey: "ip-count-zero",
        }),
      );
    } else if (ips.length > MAX_IP) {
      push(
        createIssue({
          id: "ip-over",
          level: "P1",
          category: "LOGO / IP",
          title: "IP 数量超限",
          description: `当前 ${ips.length} 个，上限 ${MAX_IP} 个`,
          reasonKey: "ip-count-over",
        }),
      );
    } else {
      pass(
        createIssue({
          id: "ip-ok",
          severity: "pass",
          level: "P2",
          category: "LOGO / IP",
          title: "IP 已选择",
          description: ips.map((i) => i.name).join("、"),
        }),
      );
    }

    const benefitId = (selectedBenefitIds || [])[0];
    const benefit = benefitId && getBenefitById ? getBenefitById(benefitId) : null;
    if (!benefit) {
      push(
        createIssue({
          id: "benefit-missing",
          level: "P1",
          category: "右侧氛围区",
          title: "未选择利益点",
          reasonKey: "benefit-missing",
        }),
      );
    } else {
      const text = getBenefitDisplayText ? getBenefitDisplayText(benefit.id) : benefit.text;
      if (benefit.category === "营销口号" && text.length > SLOGAN_MAX) {
        push(
          createIssue({
            id: "slogan-len",
            level: "P1",
            category: "右侧氛围区",
            title: "Slogan 超长",
            description: `当前 ${text.length} 字，最多 ${SLOGAN_MAX} 字`,
            reasonKey: "benefit-slogan-len",
          }),
        );
      }
      if (
        (benefit.benefitStyle === "coupon" || benefit.category === "核心优惠") &&
        text.length > BELT_DISPLAY_RULES?.LINE_MAX_CHARS?.line2
      ) {
        push(
          createIssue({
            id: "coupon-len",
            level: "P1",
            category: "右侧氛围区",
            title: "优惠文案超长",
            reasonKey: "benefit-coupon-len",
          }),
        );
      }
    }

    let atmoAnalysis = null;
    const hasAtmo = Boolean(atmosphere?.src);
    const isSPlus = ACTIVITY_ATMO_ALLOWED.has(meta?.activityType);
    if (hasAtmo) {
      atmoAnalysis = await analyzeAtmosphereSync(atmosphere.src, atmosphere.mime || atmosphere.type);
      if (!atmoAnalysis.isPng || !atmoAnalysis.hasAlpha) {
        push(
          createIssue({
            id: "atmo-png",
            level: "P1",
            category: "氛围icon",
            title: "氛围icon 格式不合规",
            reasonKey: "atmo-format",
          }),
        );
      }
      if (atmoAnalysis.opaqueBorderRatio > 0.72 && !atmoAnalysis.hasAlpha) {
        push(
          createIssue({
            id: "atmo-bg",
            level: "P1",
            category: "氛围icon",
            title: "氛围icon 非透明底",
            reasonKey: "atmo-format",
          }),
        );
      }
      if (atmoAnalysis.width && (atmoAnalysis.width < 80 || atmoAnalysis.height < 40)) {
        push(
          createIssue({
            id: "atmo-size",
            level: "P2",
            category: "氛围icon",
            title: "氛围icon 尺寸偏小",
            description: `${atmoAnalysis.width}×${atmoAnalysis.height}px`,
            designerReview: true,
            reasonKey: "atmo-complex",
          }),
        );
      }
      if (isSPlus) {
        push(
          createIssue({
            id: "atmo-splus",
            level: "P2",
            category: "氛围icon",
            title: "S+ 活动氛围icon 需设计师复核",
            designerReview: true,
            reasonKey: "atmo-splus",
          }),
        );
      }
    } else if (isSPlus) {
      push(
        createIssue({
          id: "atmo-missing-splus",
          level: "P2",
          category: "氛围icon",
          title: "S+ 活动未上传氛围icon",
          description: "大促/平台S级建议配置氛围icon",
        }),
      );
    }

    const threeIp = ips.length >= 3;
    const hasCountdown = benefit?.benefitStyle === "countdown";
    const hasCoupon = benefit?.benefitStyle === "coupon";
    const hasSlogan = benefit?.category === "营销口号";
    const complexRight = threeIp && (hasCountdown || hasCoupon || hasSlogan);

    if (complexRight) {
      push(
        createIssue({
          id: "right-overload",
          level: "P2",
          category: "右侧氛围区",
          title: "右侧组合复杂",
          description: "3 个 IP 与 slogan/倒计时/按钮同屏",
          designerReview: true,
          scope: ["移动端 2 行"],
          reasonKey: "right-overload",
        }),
      );
    }

    (display?.lines || []).forEach((line, idx) => {
      if (line.truncated) {
        push(
          createIssue({
            id: `trunc-${idx}`,
            level: "P2",
            category: "排版",
            title: `第 ${line.lineIndex || idx + 1} 行文案被截断`,
            description: `展示「${line.text}」`,
            reasonKey: "line-truncated",
          }),
        );
      }
    });

    (display?.warnings || []).forEach((msg, i) => {
      push(
        createIssue({
          id: `warn-${i}`,
          level: "P2",
          category: "排版",
          title: "排版规则提示",
          description: msg,
          reasonKey: "compose-warn",
        }),
      );
    });

    const flags = {
      mustDesignerReview: isSPlus && hasAtmo,
      complexRight,
      threeIpCrowded: threeIp,
      atmoComplex: hasAtmo && atmoAnalysis && atmoAnalysis.width > 400,
      cannotJudge: false,
    };

    const allIssues = [...issues, ...passItems];
    // 基础信息（meta-*）相关 issue 仅用于门控 timeline 第 ① 步；
    // 不计入审核结果（不参与 outcome / score / summary / advice / issues 列表）。
    const isMetaIssue = (i) => String(i?.id || "").startsWith("meta-");
    const metaIncomplete = issues.some(isMetaIssue);
    const blocking = issues.filter((i) => i.severity !== "pass" && !isMetaIssue(i));
    const outcome = resolveOutcome(blocking, flags);
    const score = computeScore(blocking);

    const issueKeys = [...new Set(blocking.map((i) => i.reasonKey).filter(Boolean))];
    const advice = [...new Set(blocking.map((i) => i.suggestion).filter(Boolean))];

    const summary = {
      pass: passItems.length,
      warn: blocking.filter((i) => i.level === "P2").length,
      error: blocking.filter((i) => i.level === "P1").length,
      p1: blocking.filter((i) => i.level === "P1").length,
      p2: blocking.filter((i) => i.level === "P2").length,
    };

    const metrics = [
      ["审核规则版本", `v${VERSION}`],
      ["AI 审核结果", outcome.aiResult],
      ["审核分数", `${score} 分`],
      ["组合形式", display?.pattern || "-"],
      ["品牌 IP", ips.map((i) => i.name).join("、") || "-"],
      ["利益点", benefit ? benefit.label : "-"],
      ["背景色", bg || "-"],
      ["主文字色", textPrimary || "-"],
      ["氛围icon", hasAtmo ? atmosphere.name || "已配置" : "未配置"],
      ["上线端", (meta.terminals || []).join("、") || "-"],
    ];

    return {
      version: VERSION,
      ...outcome,
      status: outcome.result === "fail" ? "fail" : outcome.result === "pass_risk" ? "warn" : "pass",
      score,
      checkedAt: new Date().toISOString(),
      auditorErp: "AI-AUTO",
      submitMeta: { ...meta },
      summary,
      items: allIssues,
      issues: blocking,
      passes: passItems,
      issueKeys,
      advice,
      metrics,
      context: {
        beltBg: bg,
        pattern: display?.pattern,
        lineCount: display?.lines?.length || 0,
        ipCount: ips.length,
        activityType: meta.activityType,
      },
      flowSteps: [
        { step: 1, label: "运营填写基础信息", done: !metaIncomplete },
        { step: 2, label: "AI 自动审核", done: true, action: outcome.nextAction },
        { step: 3, label: "人工审核", done: false },
        { step: 4, label: "发布上线", done: false },
      ],
    };
  }

  global.BeltAuditV21 = {
    VERSION,
    run: runBeltAuditV21,
    REASONS: AUDIT_REASONS,
    SUGGESTIONS: AUDIT_SUGGESTIONS,
  };
})(typeof window !== "undefined" ? window : globalThis);
