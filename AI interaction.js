 // 这段代码可以用来嵌入一个简单的AI聊天机器人
document.getElementById('chatbot-container').innerHTML = `
<div id="chatbot">
    <h3>AI助手</h3>
    <textarea id="user-input" placeholder="输入你的问题..."></textarea>
    <button onclick="processInput()">提交</button>
    <div id="response"></div>
</div>
`;

function processInput() {
let userInput = document.getElementById("user-input").value;
let responseDiv = document.getElementById("response");

// 模拟AI回应
responseDiv.innerHTML = "AI助手：这是我理解的回答：<br>" + userInput.split("").reverse().join("");
}
