/* АНАЛІТИКА САЙТУ DERIX HOME */

/* Отримуємо або ініціалізуємо статистику */
function getStats() {
  return JSON.parse(localStorage.getItem("derix_stats")) || {
    pageViews: {},
    chatbotOpens: 0
  };
}

/* Зберігаємо статистику */
function saveStats(stats) {
  localStorage.setItem("derix_stats", JSON.stringify(stats));
}

/* ПЕРЕГЛЯДИ СТОРІНОК */
(function trackPageView() {
  const stats = getStats();
  const page = window.location.pathname.split("/").pop() || "index.html";

  stats.pageViews[page] = (stats.pageViews[page] || 0) + 1;
  saveStats(stats);

  console.log("Page views:", stats.pageViews);
})();

/* ВІДКРИТТЯ ЧАТ-БОТА */
window.trackChatbotOpen = function () {
  const stats = getStats();
  stats.chatbotOpens += 1;
  saveStats(stats);

  console.log("Chatbot opened:", stats.chatbotOpens);
};
