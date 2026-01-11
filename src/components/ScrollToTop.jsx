// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // 1) 暂时关掉全局 smooth（你 theme 里开了 scrollBehavior: smooth）
    const prevHtml = html.style.scrollBehavior;
    const prevBody = body.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    // 2) 下一帧再滚动，避免被路由切换/布局动画抢掉
    requestAnimationFrame(() => {
      // window 级别
      window.scrollTo(0, 0);

      // 兼容：有的浏览器用这两个
      html.scrollTop = 0;
      body.scrollTop = 0;

      // 3) 如果你的页面是“容器滚动”（常见于设置了 overflow 的布局）
      //    这里找最可能的滚动容器，逐个置顶
      const candidates = [
        document.querySelector("#root"),
        document.querySelector("main"),
        document.querySelector("[data-scroll-container]"),
      ].filter(Boolean);

      for (const el of candidates) {
        // 只处理真的可滚动容器
        const style = window.getComputedStyle(el);
        const canScroll =
          (style.overflowY === "auto" || style.overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight;

        if (canScroll) {
          const prev = el.style.scrollBehavior;
          el.style.scrollBehavior = "auto";
          el.scrollTop = 0;
          el.style.scrollBehavior = prev || "";
        }
      }

      // 4) 还原 smooth 设置
      html.style.scrollBehavior = prevHtml || "";
      body.style.scrollBehavior = prevBody || "";
    });
  }, [pathname]);

  return null;
}
