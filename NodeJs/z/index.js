(function() {
  const chatbotId = document.currentScript.getAttribute("data-chatbot-id");

  // Create chat bubble
  const bubble = document.createElement("div");
  bubble.innerText = "💬 ";
  bubble.style.position = "fixed";
  bubble.style.bottom = "20px";
  bubble.style.right = "20px";
  bubble.style.background = "#007bff";
  bubble.style.color = "#fff";
  bubble.style.padding = "10px";
  bubble.style.borderRadius = "50%";
  bubble.style.cursor = "pointer";
  document.body.appendChild(bubble);

  // On click → open chat window
  bubble.onclick = function() {
    const iframe = document.createElement("iframe");
    iframe.src = `https://yourdomain.com/chat?chatbotId=${chatbotId}`;
    iframe.style.position = "fixed";
    iframe.style.bottom = "80px";
    iframe.style.right = "20px";
    iframe.style.width = "300px";
    iframe.style.height = "400px";
    iframe.style.border = "1px solid #8d8c8cff";
    iframe.style.borderRadius = "10px";
    iframe.style.zIndex = "9999";
    document.body.appendChild(iframe);
  };
})();
