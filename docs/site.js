(() => {
  "use strict";

  function setupPrompts() {
    const services = [
      {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        icon: '<i class="fa-brands fa-openai" aria-hidden="true"></i>',
      },
      {
        name: "Claude",
        url: "https://claude.ai/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5M8 3l8 18M3 8l18 8M3 16l18-8M8 21l8-18"/></svg>',
      },
      {
        name: "Gemini",
        url: "https://gemini.google.com/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 1C11 8 8 11 1 12c7 1 10 4 11 11 1-7 4-10 11-11C16 11 13 8 12 1Z"/></svg>',
      },
    ];

    document.querySelectorAll("div.prompts").forEach((group) => {
      if (group.querySelector(":scope > .prompt-heading")) return;
      const items = group.querySelectorAll(":scope > ul > li");
      if (!items.length) return;

      const heading = document.createElement("div");
      heading.className = "prompt-heading";
      const title = document.createElement("strong");
      title.className = "prompt-title";
      title.innerHTML = '<i class="fa-solid fa-comment-dots fa-flip-horizontal" aria-hidden="true"></i>プロンプト例';
      const status = document.createElement("span");
      status.className = "prompt-status";
      status.setAttribute("role", "status");
      status.setAttribute("aria-atomic", "true");
      const links = document.createElement("div");
      links.className = "prompt-links";
      services.forEach((service) => {
        const link = document.createElement("a");
        link.className = `prompt-ai-link prompt-ai-${service.name.toLowerCase()}`;
        link.href = service.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.title = `新しいタブで ${service.name} を開く`;
        link.setAttribute("aria-label", link.title);
        link.innerHTML = service.icon;
        links.appendChild(link);
      });
      heading.append(title, links, status);
      group.prepend(heading);
      let statusTimer;

      items.forEach((item) => {
        item.classList.add("prompt-item");
        const copy = document.createElement("div");
        copy.className = "prompt-copy";
        copy.setAttribute("role", "button");
        copy.tabIndex = 0;
        copy.title = "このプロンプトをコピー";
        const text = document.createElement("div");
        text.className = "prompt-text";
        text.append(...Array.from(item.childNodes));
        const indicator = document.createElement("span");
        indicator.className = "prompt-copy-icon";
        indicator.setAttribute("aria-hidden", "true");
        indicator.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
        copy.append(text, indicator);

        let indicatorTimer;
        const copyPrompt = async () => {
          const value = text.innerText.replace(/\r\n/g, "\n").trim();
          window.clearTimeout(statusTimer);
          window.clearTimeout(indicatorTimer);
          try {
            await navigator.clipboard.writeText(value);
            indicator.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i>';
            status.textContent = "コピーしました";
          } catch (error) {
            indicator.innerHTML = '<i class="fa-solid fa-exclamation" aria-hidden="true"></i>';
            status.textContent = "コピーできませんでした。本文を選択してコピーしてください。";
            console.error("プロンプトをコピーできませんでした。", error);
          }
          indicatorTimer = window.setTimeout(() => {
            indicator.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
          }, 2000);
          statusTimer = window.setTimeout(() => { status.textContent = ""; }, 6000);
        };

        copy.addEventListener("click", (event) => {
          // 本文中のリンクやコードのコピーボタン、文字の選択操作は妨げない。
          // 子のボタンがアイコンを差し替えても、元のイベント経路で判定する。
          if (event.composedPath().some((node) =>
            node instanceof Element && node.matches("a, button, input, textarea, select"),
          )) return;
          if (!window.getSelection().isCollapsed) return;
          copyPrompt();
        });
        copy.addEventListener("keydown", (event) => {
          if (event.target !== copy || (event.key !== "Enter" && event.key !== " ")) return;
          event.preventDefault();
          copyPrompt();
        });

        item.append(copy);
      });
    });
  }

  setupPrompts();
})();
