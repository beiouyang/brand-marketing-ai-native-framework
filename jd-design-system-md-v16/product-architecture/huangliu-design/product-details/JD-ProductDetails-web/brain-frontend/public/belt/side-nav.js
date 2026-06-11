/* 右侧功能导航 rail —— 自动注入到引用本脚本的页面，并按当前页高亮 */
(function () {
  "use strict";

  var ICONS = {
    upload:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 20h14"/></svg>',
    assets:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/></svg>',
    dash:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6" rx="1"/><rect x="13" y="7" width="3" height="10" rx="1"/></svg>',
  };

  var ITEMS = [
    {
      no: "01",
      label: "腰带上传",
      href: "index.html",
      match: ["index.html", ""],
      icon: ICONS.upload,
      subTitle: "腰带上传 · 主流程",
      subs: ["品牌色配置与映射", "IP / 价促信息编排", "腰带预览与 AI 审核", "发布上线"],
    },
    {
      no: "02",
      label: "资产库",
      href: "assets.html",
      match: ["assets.html"],
      icon: ICONS.assets,
      subTitle: "腰带资产库",
      subs: [
        "历史腰带方案沉淀",
        "品牌色 / 活动色资产",
        "模板资产",
        "氛围图资产",
        "异常案例资产",
        "高转化案例资产",
      ],
    },
    {
      no: "03",
      label: "数据看板",
      href: "dashboard.html",
      match: ["dashboard.html"],
      icon: ICONS.dash,
      subTitle: "数据看板 · 效果沉淀",
      subs: ["Top10 腰带排名", "整体表现概览", "多端表现对比", "方案效果对比", "设计问题监控", "AI 优化建议"],
    },
  ];

  function currentFile() {
    var p = location.pathname.split("/").pop();
    return (p || "index.html").toLowerCase();
  }

  function build() {
    if (document.querySelector(".sideNav")) return;
    var cur = currentFile();

    var nav = document.createElement("nav");
    nav.className = "sideNav";
    nav.setAttribute("aria-label", "功能导航");

    ITEMS.forEach(function (it) {
      var a = document.createElement("a");
      var active = it.match.indexOf(cur) !== -1;
      a.className = "sideNav__item" + (active ? " is-active" : "");
      a.href = it.href;
      a.setAttribute("aria-current", active ? "page" : "false");
      a.innerHTML =
        '<span class="sideNav__no">' + it.no + "</span>" +
        '<span class="sideNav__ico">' + it.icon + "</span>" +
        '<span class="sideNav__label">' + it.label + "</span>" +
        '<span class="sideNav__pop"><div class="sideNav__popTitle">' +
        it.subTitle +
        '</div><div class="sideNav__popList">' +
        it.subs.map(function (s) { return "<span>" + s + "</span>"; }).join("") +
        "</div></span>";
      nav.appendChild(a);
    });

    document.body.appendChild(nav);

    // 导航固定在页面最左侧，向右推开正文，避免遮挡
    requestAnimationFrame(function () {
      var navW = nav.offsetWidth || 172;
      var curPad = parseFloat(getComputedStyle(document.body).paddingLeft) || 0;
      document.body.style.paddingLeft = (curPad + navW) + 'px';
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
