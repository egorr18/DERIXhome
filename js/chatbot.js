const chatbotButton = document.getElementById("chatbot-button");

if (chatbotButton) {
  chatbotButton.addEventListener("click", () => {
    if (window.trackChatbotOpen) {
      window.trackChatbotOpen();
    }
    window.open("https://t.me/DERIXhomebot", "_blank");
  });
}
