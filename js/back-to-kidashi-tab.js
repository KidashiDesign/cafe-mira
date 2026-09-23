/**
 * Sticky "Back to Kidashi Design" side tab.
 * Include this script on any page (see css/style.css for the .kidashi-tab styles).
 * Target URL can be overridden per page without touching this file:
 *   <script src="js/back-to-kidashi-tab.js" data-kidashi-url="https://www.kidashidesign.com/"></script>
 * or by setting window.KIDASHI_TAB_URL before this script runs.
 */
(function () {
  "use strict";

  var DEFAULT_URL = "https://www.kidashidesign.com/";
  var TAB_ID = "kidashiBackTab";
  var scriptEl = document.currentScript;

  function init() {
    if (document.getElementById(TAB_ID)) return;

    var url =
      (scriptEl && scriptEl.getAttribute("data-kidashi-url")) ||
      window.KIDASHI_TAB_URL ||
      DEFAULT_URL;

    var link = document.createElement("a");
    link.id = TAB_ID;
    link.className = "kidashi-tab";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Back to Kidashi Design website");

    var icon = document.createElement("span");
    icon.className = "kidashi-tab__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" ' +
      'stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';

    var text = document.createElement("span");
    text.className = "kidashi-tab__text";
    text.textContent = "Back to Kidashi Design";

    link.appendChild(icon);
    link.appendChild(text);
    document.body.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
