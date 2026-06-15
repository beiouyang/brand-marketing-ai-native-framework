(function () {
  const data = window.BRAIN_DATA;
  const allItems = data.capability.flatMap((group) =>
    group.items.map((item) => ({ ...item, group: group.title, groupId: group.id }))
  );

  const capabilityGrid = document.getElementById("capability-grid");
  const wikiGrid = document.getElementById("wiki-grid");
  const wikiMeta = document.getElementById("wiki-meta");
  const kanbanTbody = document.getElementById("kanban-tbody");
  const kanbanPagination = document.getElementById("kanban-pagination");
  const teamGrid = document.getElementById("team-grid");
  const teamPagination = document.getElementById("team-pagination");
  const executionTitle = document.getElementById("execution-title");
  const executionSummary = document.getElementById("execution-summary");
  const executionProjectView = document.getElementById("execution-project-view");
  const executionCardsView = document.getElementById("execution-cards-view");
  const searchInput = document.getElementById("global-search");
  const modal = document.getElementById("detail-modal");
  const orchestrationModal = document.getElementById("orchestration-modal");
  const navLinks = [...document.querySelectorAll(".nav-links a")];

  const runtimeProjects = [...(data.execution?.projects || [])];
  let pendingOrchestrationPlan = null;
  let typewriterController = null;

  /** 首页需求层 hints 候选池（均为具体工作需求表述） */
  const HERO_HINTS_POOL = {
    h01: "618 主视觉全渠道多尺寸延展与批量切图",
    h02: "双11 大促会场模块搭建与上线节奏对齐",
    h03: "裂变拉新玩法封控风险评估与方案修订",
    h04: "Joy IP 联名物料品牌一致性审查",
    h05: "会员日朋友圈分享图生成与渠道适配",
    h06: "品牌短剧剧本分镜脚本拆解与镜头稿输出",
    h07: "搜索品专页换肤与最新品牌规范适配",
    h08: "抽奖互动 Lottie 动效制作与研发交付",
    h09: "新业务 Logo 提案品牌规范合规评审",
    h10: "竞品视觉调性标签拆解与策略参考输出",
    h11: "年货节资源位排期与传播触点策略",
    h12: "频道小游戏方案编排与人审卡点确认",
    h13: "主会场 Banner 批量导出与规范命名",
    h14: "频道头图拼贴风格批量生图与模板沉淀",
    h15: "商品 15 秒短视频脚本撰写与分镜准备",
    h16: "设计需求 Copilot 路由与编排输出单生成",
    h17: "3D 立影页面 vibe 动效预演与对齐",
    h18: "大促运营话术三版渠道投放文案改写",
    h19: "新品牌发布会视觉调性定案与物料方向",
    h20: "主视觉 8 尺寸标准投放延展包制作",
    h21: "App 16.0 频道改版视觉规范落地与走查",
    h22: "直播切片素材批量包装与渠道分发",
    h23: "互动签到 H5 动效页面设计与研发联调",
    h24: "品牌会员体系视觉触点统一升级",
    h25: "外投信息流素材 A/B 测试稿批量产出",
    h26: "Joy 情绪资产多场景变体生成与归档",
    h27: "大促零动效资源位氛围换肤与切图交付",
    h28: "Design Wiki 规范版本同步与命名校验"
  };

  const TYPEWRITER_PAUSE_MS = 4000;

  const HERO_HINTS_ALL_IDS = [
    "h01", "h02", "h03", "h04", "h05", "h06", "h07", "h08",
    "h09", "h10", "h11", "h12", "h13", "h14", "h15", "h16",
    "h17", "h18", "h19", "h20", "h21", "h22", "h23", "h24",
    "h25", "h26", "h27", "h28"
  ];

  /** 首页 hint 按钮（约 5 行 × 3 列） */
  const HERO_HINTS_DISPLAY = HERO_HINTS_ALL_IDS.slice(0, 15).map((id) => HERO_HINTS_POOL[id]);

  /** 打字机轮播（全量） */
  const HERO_HINTS_TYPEWRITER = HERO_HINTS_ALL_IDS.map((id) => HERO_HINTS_POOL[id]);

  const EXECUTION_COPY = {
    project: {
      title: "团队项目看板",
      summary: "人类设计师 + 专家 Copilot 协作执行 · 按编排层路由的真实项目进展"
    },
    team: {
      title: "团队成员",
      summary: "品牌与营销设计部 · 人类体验设计师编组协作"
    },
    copilot: {
      title: "Copilot",
      summary: "专家 Copilot · 按编排层路由与人类设计师协作执行"
    }
  };

  const kanbanState = {
    status: "进行中",
    page: 1,
    pageSize: data.execution?.pageSize || 10
  };

  const cardsState = {
    page: 1,
    pageSize: data.execution?.teamPageSize || 10
  };

  const executionState = {
    mode: "project"
  };

  const capabilityState = {
    filter: "all"
  };

  const teamLookup = buildTeamLookup();

  function buildTeamLookup() {
    const humans = {};
    const copilots = {};
    (data.execution?.team || []).forEach((member) => {
      if (member.type === "human") humans[member.name] = member;
      if (member.type === "copilot") copilots[member.nameEn] = member;
    });
    return { humans, copilots };
  }

  function copilotAvatarStyle(memberId) {
    const index = Number(String(memberId || "").split("-")[1]) || 1;
    const hue = (index * 37) % 360;
    return `--copilot-hue:${hue}`;
  }

  function execAvatarChip(member) {
    const isCopilot = member.type === "copilot";
    const label = isCopilot ? member.nameEn : member.name;
    const style = isCopilot ? ` style="${copilotAvatarStyle(member.id)}"` : "";
    return `
      <span class="exec-chip ${isCopilot ? "exec-chip-copilot" : "exec-chip-human"}">
        <span class="exec-avatar ${isCopilot ? "exec-avatar-copilot" : "exec-avatar-human"}"${style} aria-hidden="true">${member.avatar}</span>
        <span class="exec-chip-label">${label}</span>
      </span>
    `;
  }

  function formatExecUnit(raw) {
    let remaining = String(raw || "").trim();
    const parts = [];

    while (remaining.length) {
      const humanMatch = remaining.match(/^👤\s*([\u4e00-\u9fa5]+)\s*/);
      if (humanMatch) {
        const member = teamLookup.humans[humanMatch[1]];
        parts.push(member ? execAvatarChip(member) : `<span class="exec-fallback">👤 ${humanMatch[1]}</span>`);
        remaining = remaining.slice(humanMatch[0].length);
        continue;
      }

      const copilotMatch = remaining.match(/^🤖\s*([A-Za-z]+)\s*/);
      if (copilotMatch) {
        const member = teamLookup.copilots[copilotMatch[1]];
        parts.push(member ? execAvatarChip(member) : `<span class="exec-fallback">🤖 ${copilotMatch[1]}</span>`);
        remaining = remaining.slice(copilotMatch[0].length);
        continue;
      }

      const plusMatch = remaining.match(/^\+(\s*)/);
      if (plusMatch) {
        parts.push('<span class="exec-sep">+</span>');
        remaining = remaining.slice(plusMatch[0].length);
        continue;
      }

      const arrowMatch = remaining.match(/^→(\s*)/);
      if (arrowMatch) {
        parts.push('<span class="exec-sep">→</span>');
        remaining = remaining.slice(arrowMatch[0].length);
        continue;
      }

      break;
    }

    return `<span class="exec-unit">${parts.join("")}</span>`;
  }

  function getCapabilityGroups() {
    if (capabilityState.filter === "all") return data.capability;
    return data.capability.filter((group) => group.id === capabilityState.filter);
  }

  function renderCapability() {
    if (!capabilityGrid) return;

    const groups = getCapabilityGroups();
    const isSingle = capabilityState.filter !== "all";
    capabilityGrid.classList.toggle("capability-grid-single", isSingle);
    renderGroups(capabilityGrid, groups);
    bindCards();
  }

  function bindCapabilityTabs() {
    document.querySelectorAll(".capability-mode-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        capabilityState.filter = tab.dataset.filter;
        document.querySelectorAll(".capability-mode-tab").forEach((btn) => {
          const active = btn.dataset.filter === capabilityState.filter;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-selected", active ? "true" : "false");
        });
        renderCapability();
      });
    });
  }

  function renderGroups(container, groups) {
    container.innerHTML = groups.map((group) => `
      <section class="lane" data-group="${group.id}">
        <div class="lane-header">
          <h3>${group.title}</h3>
          <p>${group.summary}</p>
        </div>
        <div class="cards">
          ${group.items.map(cardTemplate).join("")}
        </div>
      </section>
    `).join("");
  }

  function cardTemplate(item) {
    return `
      <button class="skill-card" type="button" data-id="${item.id}">
        <span class="status ${item.statusType}">${item.status}</span>
        <span class="card-top">
          <span class="tag">${item.tag}</span>
        </span>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <span class="impact">${formatImpact(item.impact)}</span>
      </button>
    `;
  }

  function formatImpact(impact) {
    return `💡 ${String(impact || "").replace(/^💡\s*/, "")}`;
  }

  function getKanbanFiltered() {
    return runtimeProjects.filter((p) => p.kanbanStatus === kanbanState.status);
  }

  function renderKanban() {
    if (!kanbanTbody || !data.execution) return;

    const filtered = getKanbanFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / kanbanState.pageSize));
    if (kanbanState.page > totalPages) kanbanState.page = totalPages;

    const start = (kanbanState.page - 1) * kanbanState.pageSize;
    const pageItems = filtered.slice(start, start + kanbanState.pageSize);

    document.querySelectorAll(".kanban-tab").forEach((tab) => {
      const status = tab.dataset.status;
      const count = runtimeProjects.filter((p) => p.kanbanStatus === status).length;
      const active = status === kanbanState.status;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.textContent = `${status} (${count})`;
    });

    kanbanTbody.innerHTML = pageItems.length
      ? pageItems.map((row) => `
        <tr>
          <td class="kanban-name">${row.name}</td>
          <td><span class="kanban-domain">${row.domain}</span></td>
          <td><span class="priority-pill ${row.priority.toLowerCase()}">${row.priority}</span></td>
          <td>${row.owner}</td>
          <td class="kanban-exec">${formatExecUnit(row.execUnit)}</td>
          <td>${row.period}</td>
          <td class="kanban-progress">${row.progress}</td>
        </tr>
      `).join("")
      : `<tr><td colspan="7" class="kanban-empty">暂无项目</td></tr>`;

    renderKanbanPagination(totalPages);
  }

  function renderPagination(container, state, totalPages, onChange) {
    if (!container) return;

    const pages = [];
    for (let i = 1; i <= totalPages; i += 1) pages.push(i);

    container.innerHTML = `
      <button type="button" class="page-btn page-prev" ${state.page <= 1 ? "disabled" : ""} aria-label="上一页">‹</button>
      ${pages.map((n) => `
        <button type="button" class="page-btn page-num ${n === state.page ? "is-active" : ""}" data-page="${n}" aria-label="第 ${n} 页" ${n === state.page ? 'aria-current="page"' : ""}>${n}</button>
      `).join("")}
      <button type="button" class="page-btn page-next" ${state.page >= totalPages ? "disabled" : ""} aria-label="下一页">›</button>
    `;

    container.querySelector(".page-prev")?.addEventListener("click", () => {
      if (state.page > 1) onChange(state.page - 1);
    });
    container.querySelector(".page-next")?.addEventListener("click", () => {
      if (state.page < totalPages) onChange(state.page + 1);
    });
    container.querySelectorAll(".page-num").forEach((btn) => {
      btn.addEventListener("click", () => onChange(Number(btn.dataset.page)));
    });
  }

  function renderKanbanPagination(totalPages) {
    if (!kanbanPagination) return;
    renderPagination(kanbanPagination, kanbanState, totalPages, (page) => {
      kanbanState.page = page;
      renderKanban();
    });
  }

  function bindKanbanTabs() {
    document.querySelectorAll(".kanban-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        kanbanState.status = tab.dataset.status;
        kanbanState.page = 1;
        renderKanban();
      });
    });
  }

  function getTeamMembers(mode) {
    const all = data.execution?.team || [];
    if (mode === "copilot") return all.filter((m) => m.type === "copilot");
    if (mode === "team") return all.filter((m) => m.type === "human");
    return all;
  }

  function teamCardTemplate(member, mode) {
    if (member.type === "copilot") {
      return `
        <article class="team-card team-card-copilot">
          <div class="team-card-row">
            <div class="team-avatar team-avatar-copilot" style="${copilotAvatarStyle(member.id)}" aria-hidden="true">${member.avatar}</div>
            <div class="team-card-body">
              <h3 class="team-name">${member.nameEn || member.name}</h3>
              <p class="team-meta"><span class="team-layer">${member.layer}</span> · ${member.domain}</p>
              <p class="team-copilot-type">${member.name}</p>
              <div class="team-bio-block">
                <span class="team-bio-label">能力简介</span>
                <p class="team-bio">${member.role}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    const titleLine = member.title ? ` · <span class="team-title">${member.title}</span>` : "";
    return `
      <article class="team-card team-card-human">
        <div class="team-card-row">
          <div class="team-avatar" aria-hidden="true">${member.avatar}</div>
          <div class="team-card-body">
            <h3 class="team-name">${member.name}</h3>
            <p class="team-meta">${member.level} · ${member.role}${titleLine}</p>
            <p class="team-dept">${member.dept}</p>
          </div>
        </div>
      </article>
    `;
  }

  function renderCards() {
    if (!teamGrid || !data.execution?.team) return;

    const mode = executionState.mode;
    const members = getTeamMembers(mode);
    const isCopilot = mode === "copilot";
    const totalPages = Math.max(1, Math.ceil(members.length / cardsState.pageSize));
    if (cardsState.page > totalPages) cardsState.page = totalPages;

    const start = (cardsState.page - 1) * cardsState.pageSize;
    const pageItems = members.slice(start, start + cardsState.pageSize);
    const rowCount = Math.max(1, Math.ceil(pageItems.length / 5));

    teamGrid.classList.toggle("team-grid-copilot", isCopilot);
    teamPagination?.classList.toggle("team-pagination-copilot", isCopilot);
    teamGrid.style.setProperty("--team-grid-rows", String(rowCount));

    teamGrid.innerHTML = pageItems.length
      ? pageItems.map((member) => teamCardTemplate(member, mode)).join("")
      : `<p class="team-empty">暂无成员</p>`;

    renderPagination(teamPagination, cardsState, totalPages, (page) => {
      cardsState.page = page;
      renderCards();
    });
  }

  function setExecutionMode(mode) {
    executionState.mode = mode;
    const copy = EXECUTION_COPY[mode];

    document.querySelectorAll(".execution-mode-tab").forEach((tab) => {
      const active = tab.dataset.mode === mode;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    if (executionTitle) executionTitle.textContent = copy.title;
    if (executionSummary) executionSummary.textContent = copy.summary;
    if (executionProjectView) executionProjectView.hidden = mode !== "project";
    if (executionCardsView) executionCardsView.hidden = mode === "project";

    if (mode === "team" || mode === "copilot") {
      cardsState.page = 1;
      renderCards();
    }
  }

  function bindExecutionModeTabs() {
    document.querySelectorAll(".execution-mode-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        setExecutionMode(tab.dataset.mode);
      });
    });
  }

  function wikiProgressBar(value, { compact = false } = {}) {
    const pct = Math.max(0, Math.min(100, Number(value) || 0));
    return `
      <span class="wiki-progress ${compact ? "wiki-progress-compact" : ""}" aria-label="进度 ${pct}%">
        <span class="wiki-progress-track"><span class="wiki-progress-fill" style="width:${pct}%"></span></span>
        <span class="wiki-progress-value">${pct}%</span>
      </span>
    `;
  }

  function renderWiki() {
    const meta = data.wikiMeta || {};

    if (wikiMeta) {
      wikiMeta.innerHTML = meta.overallProgress != null
        ? `
          <div class="wiki-progress-banner">
            <div class="wiki-progress-banner-head">
              <p class="wiki-progress-kicker">${meta.initiative || "Design Wiki 建设"}</p>
              ${wikiProgressBar(meta.overallProgress)}
            </div>
            ${meta.summary ? `<p class="wiki-progress-summary">${meta.summary}</p>` : ""}
          </div>
        `
        : "";
    }

    wikiGrid.innerHTML = data.wiki.map((item) => `
      <article class="wiki-card">
        <div class="wiki-card-head">
          <h3>${item.title}</h3>
          ${item.progress != null ? wikiProgressBar(item.progress, { compact: true }) : ""}
        </div>
        <p>${item.desc}</p>
        <ul>
          ${item.entries.map((entry) => {
            const name = entry[0];
            const tag = entry[1];
            const progress = entry[2];
            return `
              <li>
                <span class="wiki-entry-name">${name}</span>
                <span class="wiki-entry-meta">
                  ${progress != null ? `<span class="wiki-entry-progress">${progress}%</span>` : ""}
                  <span class="wiki-entry-tag">${tag}</span>
                </span>
              </li>
            `;
          }).join("")}
        </ul>
      </article>
    `).join("");
  }

  function bindCards() {
    document.querySelectorAll(".skill-card").forEach((card) => {
      card.addEventListener("click", () => {
        const item = allItems.find((entry) => entry.id === card.dataset.id);
        if (item) openModal(item);
      });
    });
  }

  function openModal(item) {
    document.getElementById("modal-kicker").textContent = `${item.group} / ${item.tag}`;
    document.getElementById("modal-title").textContent = item.name;
    document.getElementById("modal-desc").textContent = item.desc;
    document.getElementById("modal-status").textContent = item.status;
    document.getElementById("modal-status").className = `status ${item.statusType}`;
    document.getElementById("modal-downloads").textContent = `Downloads ${item.downloads.toLocaleString("zh-CN")}`;
    document.getElementById("modal-capability").textContent = item.capability;
    document.getElementById("modal-impact").textContent = formatImpact(item.impact);
    document.getElementById("modal-hints").textContent = item.hints || "这里可以放团队常用提问 输入模板或调用建议";
    renderModalLink(item.externalLink);
    renderModalMedia(item.mediaImage);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function renderModalMedia(mediaImage) {
    const media = document.querySelector(".modal-media");
    const panel = media.closest(".modal-panel");
    const image = document.getElementById("modal-media-image");
    const placeholder = document.getElementById("modal-media-placeholder");

    if (!mediaImage || !mediaImage.src) {
      panel.classList.remove("has-media-image");
      media.classList.remove("has-image");
      image.hidden = true;
      image.removeAttribute("src");
      image.alt = "";
      placeholder.hidden = false;
      return;
    }

    panel.classList.add("has-media-image");
    media.classList.add("has-image");
    image.src = mediaImage.src;
    image.alt = mediaImage.alt || "";
    image.hidden = false;
    placeholder.hidden = true;
  }

  function renderModalLink(externalLink) {
    const section = document.getElementById("modal-link-section");
    const link = document.getElementById("modal-link");
    const label = document.getElementById("modal-link-label");

    if (!externalLink || !externalLink.url) {
      section.hidden = true;
      link.removeAttribute("href");
      label.textContent = "";
      return;
    }

    section.hidden = false;
    link.href = externalLink.url;
    label.textContent = externalLink.label || externalLink.url;
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function normalize(text) {
    return String(text || "").toLowerCase().replace(/\s+/g, "");
  }

  function applySearch(rawQuery) {
    const query = normalize(rawQuery);
    let visible = 0;

    document.querySelectorAll(".skill-card").forEach((card) => {
      const item = allItems.find((entry) => entry.id === card.dataset.id);
      const haystack = normalize([item.name, item.tag, item.desc, item.status, item.impact, item.group].join(" "));
      const matched = !query || haystack.includes(query);
      card.hidden = !matched;
      if (matched) visible += 1;
    });

    document.querySelectorAll(".lane").forEach((lane) => {
      const shown = [...lane.querySelectorAll(".skill-card")].some((card) => !card.hidden);
      lane.hidden = !shown;
    });

    return visible;
  }

  function typeTitle() {
    const target = document.getElementById("type-title");
    const text = target.dataset.text;
    let index = 0;
    const timer = window.setInterval(() => {
      target.textContent = text.slice(0, index);
      index += 1;
      if (index > text.length) window.clearInterval(timer);
    }, 48);
  }

  function inferDemandDomain(demand) {
    if (/品牌|Logo|IP|Joy|规范|竞品|调研|联名/.test(demand)) return "品牌";
    if (/互动|小游戏|Lottie|签到|H5|抽奖|动效|玩法/.test(demand)) return "互动";
    if (/视频|分镜|3D|短视频|直播|剧本|多媒体|立影/.test(demand)) return "多媒体";
    if (/618|大促|Banner|分享|会场|年货|品专|营销|头图|延展|切图|外投|资源位/.test(demand)) return "营销";
    return "通用";
  }

  function inferDemandRouting(domain, replanIndex = 0) {
    const alternates = {
      品牌: [
        { owner: "欧阳蓓", copilot: "Iris", human: "欧阳蓓", skills: ["brand-brief-copilot", "ip-asset-generator", "validation-contract-generator"] },
        { owner: "谭灿", copilot: "Finn", human: "谭灿", skills: ["joy-asset-generator", "brand-strategy-copilot", "wiki-sync"] },
        { owner: "欧阳蓓", copilot: "Bri", human: "欧阳蓓", skills: ["brand-brief-copilot", "scout-research", "validation-contract-generator"] }
      ],
      营销: [
        { owner: "徐健", copilot: "Max", human: "蔡璐", skills: ["promo-batch-resize", "share-image-generator", "hero-image-generator"] },
        { owner: "王蕾", copilot: "Hero", human: "王蕾", skills: ["hero-image-generator", "share-image-generator", "pixel-pack-export"] },
        { owner: "徐健", copilot: "Cam", human: "徐健", skills: ["promo-strategy-copilot", "promo-batch-resize", "channel-adaptation"] }
      ],
      互动: [
        { owner: "翁婷", copilot: "Zig", human: "翁婷", skills: ["mini-game-generator", "lottie-delivery", "interaction-workflow"] },
        { owner: "翁婷", copilot: "Gigi", human: "翁婷", skills: ["mini-game-generator", "competitor-trend", "interaction-workflow"] },
        { owner: "翁婷", copilot: "Lumi", human: "翁婷", skills: ["lottie-delivery", "motion-precheck", "interaction-workflow"] }
      ],
      多媒体: [
        { owner: "谭灿", copilot: "Cora", human: "谭灿", skills: ["storyboard-script", "3d-preview", "short-video-workflow"] },
        { owner: "谭灿", copilot: "Neo", human: "谭灿", skills: ["3d-preview", "vibe-coding", "short-video-workflow"] },
        { owner: "谭灿", copilot: "Leo", human: "谭灿", skills: ["storyboard-script", "multimedia-workflow", "short-video-workflow"] }
      ],
      通用: [
        { owner: "欧阳蓓", copilot: "Rex", human: "欧阳蓓", skills: ["orchestration-router", "skill-policy-writer", "qa-metrics-report"] },
        { owner: "欧阳蓓", copilot: "Flux", human: "胥浩", skills: ["workflow-orchestration", "human-gate-planner", "qa-metrics-report"] },
        { owner: "欧阳蓓", copilot: "Ora", human: "欧阳蓓", skills: ["orchestration-output", "kanban-writer", "skill-policy-writer"] }
      ]
    };
    const options = alternates[domain] || alternates.通用;
    return options[replanIndex % options.length];
  }

  function buildOrchestrationTasks(demand, domain, routing) {
    const base = [
      { id: "T1", title: "需求结构化与 Brief 缺口识别", skill: "Demi · 需求解析", autonomy: "L3" },
      { id: "T2", title: "Design Wiki 规范预检与命名校验", skill: "Vera · 规则治理", autonomy: "L3" }
    ];
    const domainTask = {
      品牌: { id: "T3", title: "品牌视觉一致性审查与资产变体输出", skill: `${routing.copilot} · 品牌能力`, autonomy: "L2" },
      营销: { id: "T3", title: "营销物料批量化生成与多尺寸延展", skill: `${routing.copilot} · 推广`, autonomy: "L2" },
      互动: { id: "T3", title: "互动玩法方案生成与动效体验输出", skill: `${routing.copilot} · 互动`, autonomy: "L2" },
      多媒体: { id: "T3", title: "分镜/预演工作流拆解与多媒体交付", skill: `${routing.copilot} · 多媒体`, autonomy: "L2" },
      通用: { id: "T3", title: "Skill 路由与任务队列编排", skill: `${routing.copilot} · 编排路由`, autonomy: "L3" }
    };
    return [
      ...base,
      domainTask[domain] || domainTask.通用,
      { id: "T4", title: `人机协作执行 · 👤 ${routing.human}`, skill: "人工精修与体验把关", autonomy: "L1" },
      { id: "T5", title: "validation_contract 预检与 G 级卡点报告", skill: "Quinn · 质检度量", autonomy: "L3" },
      { id: "T6", title: "编排输出单写入看板与进展同步", skill: "Ora · 编排输出", autonomy: "L3" }
    ];
  }

  function formatDemandPeriod(replanIndex = 0) {
    const start = new Date();
    start.setDate(start.getDate() + replanIndex * 2);
    const end = new Date(start);
    end.setDate(end.getDate() + 14);
    const fmt = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    return `${fmt(start)}–${fmt(end)}`;
  }

  function shortProjectName(demand, max = 28) {
    const text = String(demand || "").trim();
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1)}…`;
  }

  function decomposeDemand(rawDemand, replanIndex = 0) {
    const demand = String(rawDemand || "").trim();
    const domain = inferDemandDomain(demand);
    const routing = inferDemandRouting(domain, replanIndex);
    const tasks = buildOrchestrationTasks(demand, domain, routing);
    const gateG3 = replanIndex % 2 === 0
      ? (domain === "品牌" || domain === "营销" ? "G3 规范预检" : "G3 体验走查")
      : "G3 人机协作复核";
    const gates = ["G1 Brief 确认", "G2 方案评审", gateG3, "G4 终审归档"];
    const execUnit = `👤 ${routing.human} + 🤖 ${routing.copilot}`;
    const priority = /618|大促|P0|主会场|紧急/.test(demand) ? "P0" : domain === "通用" ? "P2" : "P1";
    const progressPrefix = replanIndex > 0 ? `Rex 重新规划 v${replanIndex + 1}` : "Rex 已完成编排拆解";

    return {
      demand,
      replanIndex,
      projectName: shortProjectName(demand),
      domain,
      priority,
      owner: routing.owner,
      execUnit,
      period: formatDemandPeriod(replanIndex),
      tasks,
      gates,
      skills: routing.skills,
      copilot: routing.copilot,
      progress: `${progressPrefix}，待启动 · 首节点 ${tasks[0].id} ${tasks[0].title}`
    };
  }

  function renderOrchestrationContent(plan) {
    return `
      <section class="orch-block">
        <h4>原始需求</h4>
        <p class="orch-demand">${plan.demand}</p>
      </section>
      <section class="orch-block">
        <h4>编排摘要</h4>
        <div class="orch-meta">
          <span class="orch-pill">项目名 ${plan.projectName}</span>
          <span class="orch-pill">${plan.domain}</span>
          <span class="orch-pill">${plan.priority}</span>
          <span class="orch-pill">负责人 ${plan.owner}</span>
          <span class="orch-pill orch-pill-accent">${plan.execUnit}</span>
          <span class="orch-pill">周期 ${plan.period}</span>
          ${plan.replanIndex > 0 ? `<span class="orch-pill orch-pill-accent">重新规划 v${plan.replanIndex + 1}</span>` : ""}
        </div>
      </section>
      <section class="orch-block">
        <h4>任务拆解 T1–T6</h4>
        <ul class="orch-list">
          ${plan.tasks.map((task) => `
            <li>
              <span class="orch-task-id">${task.id}</span>
              <span>${task.title}</span>
              <span class="orch-task-skill">${task.skill} · ${task.autonomy}</span>
            </li>
          `).join("")}
        </ul>
      </section>
      <section class="orch-block">
        <h4>Skill 路由</h4>
        <div class="orch-tags">
          ${plan.skills.map((skill) => `<span class="orch-tag">${skill}</span>`).join("")}
        </div>
      </section>
      <section class="orch-block">
        <h4>人审卡点</h4>
        <div class="orch-meta">
          ${plan.gates.map((gate) => `<span class="orch-pill">${gate}</span>`).join("")}
        </div>
      </section>
    `;
  }

  function refreshOrchestrationContent(plan, { animate = false } = {}) {
    const content = document.getElementById("orch-content");
    content.innerHTML = renderOrchestrationContent(plan);
    if (animate) {
      content.classList.remove("is-replanning");
      void content.offsetWidth;
      content.classList.add("is-replanning");
    }
  }

  function openOrchestrationModal(plan) {
    pendingOrchestrationPlan = plan;
    refreshOrchestrationContent(plan);
    orchestrationModal.classList.add("is-open");
    orchestrationModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function replanOrchestration() {
    if (!pendingOrchestrationPlan) return;
    const nextIndex = (pendingOrchestrationPlan.replanIndex || 0) + 1;
    const plan = decomposeDemand(pendingOrchestrationPlan.demand, nextIndex);
    pendingOrchestrationPlan = plan;
    refreshOrchestrationContent(plan, { animate: true });
  }

  function closeOrchestrationModal() {
    orchestrationModal.classList.remove("is-open");
    orchestrationModal.setAttribute("aria-hidden", "true");
    pendingOrchestrationPlan = null;
    if (!modal.classList.contains("is-open")) document.body.style.overflow = "";
  }

  function confirmOrchestrationPlan() {
    if (!pendingOrchestrationPlan) return;
    const plan = pendingOrchestrationPlan;

    runtimeProjects.unshift({
      id: `p-new-${Date.now()}`,
      name: plan.projectName,
      domain: plan.domain,
      priority: plan.priority,
      owner: plan.owner,
      execUnit: plan.execUnit,
      period: plan.period,
      kanbanStatus: "待启动",
      progress: plan.progress
    });

    closeOrchestrationModal();
    searchInput.value = "";
    typewriterController?.syncVisibility();

    kanbanState.status = "待启动";
    kanbanState.page = 1;
    setExecutionMode("project");
    renderKanban();
    document.getElementById("execution-layer").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitDemandOrchestration() {
    const demand = searchInput.value.trim();
    if (!demand) {
      searchInput.focus();
      return;
    }
    openOrchestrationModal(decomposeDemand(demand));
  }

  function fillSearchDemand(text, { lockTypewriter = false } = {}) {
    searchInput.value = text;
    if (lockTypewriter) typewriterController?.lock();
    typewriterController?.syncVisibility();
    searchInput.focus();
  }

  function renderHeroHints(hints) {
    const container = document.getElementById("hero-hints");
    if (!container) return;
    const arrow = '<svg class="hint-arrow" viewBox="0 0 22.088 22.448" aria-hidden="true"><use href="#hint-arrow-symbol"></use></svg>';
    container.innerHTML = hints
      .map(
        (text) =>
          `<button type="button" data-query="${text.replace(/"/g, "&quot;")}">${text}${arrow}</button>`
      )
      .join("");
    container.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        fillSearchDemand(button.dataset.query, { lockTypewriter: true });
      });
    });
  }

  function initSearchTypewriter(hints) {
    const overlay = document.getElementById("search-typewriter");
    if (!overlay || !hints.length) return { lock() {}, syncVisibility() {} };

    let hintIndex = 0;
    let charIndex = 0;
    let timerId = 0;
    let paused = false;
    let locked = false;

    function syncOverlayVisibility() {
      const hidden = locked || paused || Boolean(searchInput.value) || document.activeElement === searchInput;
      overlay.classList.toggle("is-hidden", hidden);
      if (hidden) overlay.textContent = "";
    }

    function schedule(ms, fn) {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(fn, ms);
    }

    function tick() {
      syncOverlayVisibility();
      if (locked || paused || searchInput.value || document.activeElement === searchInput) {
        schedule(120, tick);
        return;
      }

      const hint = hints[hintIndex];
      charIndex += 1;
      overlay.textContent = hint.slice(0, charIndex);

      if (charIndex >= hint.length) {
        schedule(TYPEWRITER_PAUSE_MS, () => {
          hintIndex = (hintIndex + 1) % hints.length;
          charIndex = 0;
          overlay.textContent = "";
          tick();
        });
        return;
      }

      schedule(56, tick);
    }

    searchInput.addEventListener("focus", () => {
      paused = true;
      syncOverlayVisibility();
    });

    searchInput.addEventListener("blur", () => {
      paused = false;
      if (!locked && !searchInput.value) tick();
    });

    searchInput.addEventListener("input", syncOverlayVisibility);

    tick();

    return {
      lock() {
        locked = true;
        window.clearTimeout(timerId);
        syncOverlayVisibility();
      },
      syncVisibility: syncOverlayVisibility
    };
  }

  function initUI() {
    renderCapability();
    bindCapabilityTabs();
    renderKanban();
    bindKanbanTabs();
    bindExecutionModeTabs();
    setExecutionMode("project");
    renderWiki();
    bindCards();
    bindNavigationState();
    typeTitle();
    renderHeroHints(HERO_HINTS_DISPLAY);
    typewriterController = initSearchTypewriter(HERO_HINTS_TYPEWRITER);

    document.querySelector(".search").addEventListener("submit", (event) => {
      event.preventDefault();
      submitDemandOrchestration();
    });

    document.getElementById("orch-confirm")?.addEventListener("click", confirmOrchestrationPlan);
    document.getElementById("orch-replan")?.addEventListener("click", replanOrchestration);
    orchestrationModal?.addEventListener("click", (event) => {
      if (event.target.hasAttribute("data-orch-close")) closeOrchestrationModal();
    });

    modal.addEventListener("click", (event) => {
      if (event.target.hasAttribute("data-close")) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (orchestrationModal?.classList.contains("is-open")) closeOrchestrationModal();
      else if (modal.classList.contains("is-open")) closeModal();
    });
  }

  function bindNavigationState() {
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    function updateActiveLink() {
      const current = sections.reduce((active, section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 ? section : active;
      }, sections[0]);

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
      });
    }

    navLinks.forEach((link) => {
      if (link.getAttribute("href") !== "#demand-layer") return;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.history.replaceState(null, "", "#demand-layer");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
  }

  function initDonut() {
    const canvas = document.getElementById("donut-canvas");
    const ctx = canvas.getContext("2d", { alpha: true });
    const pointer = { x: -9999, y: -9999, active: false };
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;

    function particleCount() {
      if (window.innerWidth < 720) return 1300;
      if (window.innerWidth < 1180) return 1900;
      return 3200;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function createParticles() {
      const count = particleCount();
      particles = [];
      const tube = .48;
      const radius = 1.45;
      for (let i = 0; i < count; i += 1) {
        const theta = (i / count) * Math.PI * 2 * 55;
        const phi = (i % 233) / 233 * Math.PI * 2;
        const jitter = Math.sin(i * 12.9898) * .018;
        const x = (radius + (tube + jitter) * Math.cos(phi)) * Math.cos(theta);
        const y = (radius + (tube + jitter) * Math.cos(phi)) * Math.sin(theta);
        const z = (tube + jitter) * Math.sin(phi);
        particles.push({
          ox: x,
          oy: y,
          oz: z,
          x,
          y,
          z,
          vx: 0,
          vy: 0,
          vz: 0,
          size: .65 + (i % 7) * .08,
          hot: i % 17 === 0
        });
      }
    }

    function rotate(point, ax, ay, az) {
      let { x, y, z } = point;
      const cx = Math.cos(ax);
      const sx = Math.sin(ax);
      const cy = Math.cos(ay);
      const sy = Math.sin(ay);
      const cz = Math.cos(az);
      const sz = Math.sin(az);

      let y1 = y * cx - z * sx;
      let z1 = y * sx + z * cx;
      y = y1;
      z = z1;

      let x1 = x * cy + z * sy;
      z1 = -x * sy + z * cy;
      x = x1;
      z = z1;

      x1 = x * cz - y * sz;
      y1 = x * sz + y * cz;
      return { x: x1, y: y1, z };
    }

    function project(point) {
      const scaleBase = Math.min(width, height) * .15;
      const depth = 4.2;
      const perspective = depth / (depth + point.z);
      return {
        x: width * .52 + point.x * scaleBase * perspective,
        y: height * .47 + point.y * scaleBase * perspective,
        p: perspective
      };
    }

    function animate() {
      frame += .008;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const ax = .78 + Math.sin(frame * .7) * .06;
      const ay = frame * .9;
      const az = frame * .22;
      const influence = Math.min(width, height) * .16;

      for (const particle of particles) {
        const base = rotate({ x: particle.x, y: particle.y, z: particle.z }, ax, ay, az);
        const screen = project(base);

        if (pointer.active) {
          const dx = screen.x - pointer.x;
          const dy = screen.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < influence) {
            const force = (1 - distance / influence) * .035;
            const safeDistance = Math.max(distance, 18);
            particle.vx += (dx / safeDistance) * force;
            particle.vy += (dy / safeDistance) * force;
            particle.vz += (particle.hot ? .018 : -.012) * force * 60;
          }
        }

        particle.vx += (particle.ox - particle.x) * .012;
        particle.vy += (particle.oy - particle.y) * .012;
        particle.vz += (particle.oz - particle.z) * .012;
        particle.vx *= .88;
        particle.vy *= .88;
        particle.vz *= .88;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        const alpha = Math.max(.12, Math.min(.86, (base.z + 1.2) / 2.6));
        ctx.beginPath();
        ctx.fillStyle = particle.hot
          ? `rgba(85, 230, 209, ${alpha * .72})`
          : `rgba(218, 32, 90, ${alpha * .52})`;
        ctx.arc(screen.x, screen.y, particle.size * screen.p, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(animate);
    }

    function setPointer(event) {
      const touch = event.touches && event.touches[0];
      pointer.x = touch ? touch.clientX : event.clientX;
      pointer.y = touch ? touch.clientY : event.clientY;
      pointer.active = true;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", setPointer);
    window.addEventListener("pointerleave", () => { pointer.active = false; });
    window.addEventListener("touchmove", setPointer, { passive: true });
    window.addEventListener("touchend", () => { pointer.active = false; });
    window.addEventListener("scroll", () => {
      const fade = Math.max(.22, 1 - window.scrollY / 520);
      canvas.style.opacity = fade.toFixed(2);
    }, { passive: true });

    resize();
    animate();
  }

  initUI();
  initDonut();
})();
