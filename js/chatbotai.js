const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox    ");

let userMessage;
const creatchatli = (message, className) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `  <p>${message}</p>` : ` <span class="mterial-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                        <g>
                            <rect fill="none" height="24" width="24" y="0" />
                        </g>
                        <g>
                            <path
                                d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3C23,10.34,21.66,9,20,9z M7.5,11.5C7.5,10.67,8.17,10,9,10 s1.5,0.67,1.5,1.5S9.83,13,9,13S7.5,12.33,7.5,11.5z M16,17H8v-2h8V17z M15,13c-0.83,0-1.5-0.67-1.5-1.5S14.17,10,15,10 s1.5,0.67,1.5,1.5S15.83,13,15,13z" />
                        </g>
                    </svg></span><p>${message}</p>`;
    chatli.innerHTML = chatContent;
    return chatli;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
//append the user message to the chatbox
    chatbox.appendChild(creatchatli(userMessage, "outgoing"));
}

sendChatBtn.addEventListener("click", handleChat);