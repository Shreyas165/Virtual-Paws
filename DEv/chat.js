// Placeholder responses for the pet avatar
const petResponses = [
  "Hello! How are you today? 🐾",
  "I love spending time with you!",
  "Did you bring me any treats? 😋",
  "Let's play a game sometime!",
  "You are my best friend! ❤️"
];

// Function to send a message
function sendMessage() {
  const userMessage = document.getElementById('user-message').value;
  if (userMessage.trim() === "") return;

  // Add user message to chat
  addMessage(userMessage, 'user-message');

  // Clear the input field
  document.getElementById('user-message').value = "";

  // Simulate pet response after a short delay
  setTimeout(() => {
    const randomResponse = petResponses[Math.floor(Math.random() * petResponses.length)];
    addMessage(randomResponse, 'pet-message');
  }, 1000);
}

// Function to add messages to the chat
function addMessage(text, className) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${className}`;
  messageDiv.innerText = text;
  chatMessages.appendChild(messageDiv);

  // Scroll to the latest message
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Load avatar and name from the home page if available
window.onload = function() {
  const avatarSrc = sessionStorage.getItem('selectedAvatar') || "https://placekitten.com/200/200";
  const petName = sessionStorage.getItem('petName') || "Your Pet";

  document.getElementById('chat-avatar-img').src = avatarSrc;
  document.getElementById('chat-avatar-name').innerText = petName;
};
