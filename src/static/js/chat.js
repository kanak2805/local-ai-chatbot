const input = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const chatContainer = document.getElementById("chat-container");
const typing = document.getElementById("typing");
const welcome = document.querySelector(".welcome");

// ---------- Helpers ----------
function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function scrollBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ---------- Auto Resize ----------
input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
});

// ---------- Enter ----------
input.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        sendMessage();

    }

});

// ---------- Copy ----------
function copyText(text) {

    navigator.clipboard.writeText(text);

}

// ---------- Message ----------
function addMessage(sender, text) {

    if (welcome) {

        welcome.style.display = "none";

    }

    const wrapper = document.createElement("div");

    wrapper.className = `message ${sender}`;

    wrapper.innerHTML = `

<div class="message-content">

    <div class="avatar ${sender==="user"?"user-avatar":"ai-avatar"}">

        ${sender==="user"?"👤":"🤖"}

    </div>

    <div class="message-body">

        <div class="sender">

            ${sender==="user"?"You":"AI"}

        </div>

        <div class="bubble">

            ${marked.parse(text)}

        </div>

        <div class="actions">

            <button class="action-btn">

                <i class="ri-file-copy-line"></i>

            </button>

        </div>

        <div class="timestamp">

            ${getTime()}

        </div>

    </div>

</div>

`;

    if(sender==="ai"){

        wrapper.querySelector(".action-btn")
        .addEventListener("click",()=>copyText(text));

    }else{

        wrapper.querySelector(".actions").remove();

    }

    chatContainer.appendChild(wrapper);

    scrollBottom();

}

// ---------- Typing ----------

function showTyping(){

    typing.classList.remove("hidden");

    scrollBottom();

}

function hideTyping(){

    typing.classList.add("hidden");

}

// ---------- Send ----------

async function sendMessage(){

    const message=input.value.trim();

    if(message==="") return;

    addMessage("user",message);

    input.value="";

    input.style.height="auto";

    sendBtn.disabled=true;

    showTyping();

    try{

        const response=await fetch("/chat",{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                message:message

            })

        });

        const data=await response.json();

        hideTyping();

        addMessage("ai",data.response);

    }

    catch(err){

        hideTyping();

        addMessage("ai","⚠️ Unable to connect to server.");

    }

    sendBtn.disabled=false;

    input.focus();

}

// ---------- Button ----------

sendBtn.addEventListener("click",sendMessage);

// ---------- Suggestions ----------

function quickPrompt(text){

    input.value=text;

    sendMessage();

}

/* ===========================
   THEME TOGGLE
=========================== */

const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Restore saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeIcon.className = "ri-sun-line";

} else {

    themeIcon.className = "ri-moon-line";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeIcon.className = "ri-sun-line";
        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.className = "ri-moon-line";
        localStorage.setItem("theme", "light");

    }

});