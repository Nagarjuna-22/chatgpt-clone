const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Dummy response logic
function getBotReply(userText) {
  const responses = {
    hello: "Hi there! How can I assist you?",
    hi: "Hello! What would you like to know?",
    how: "I'm just a demo bot, but I'm doing well!",
    bye: "Goodbye! Have a nice day.",
    default: "That's interesting! Tell me more."
  };

  const lowerText = userText.toLowerCase();
  for (const keyword in responses) {
    if (lowerText.includes(keyword)) {
      return responses[keyword];
    }
  }
  return responses.default;
}

function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage("user", userText);
  userInput.value = "";

  setTimeout(() => {
    const botReply = getBotReply(userText);
    addMessage("bot", botReply);
  }, 500);
}

function addMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send on Enter key
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
