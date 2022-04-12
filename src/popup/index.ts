const myinput = document.getElementById('bot_go')!;
myinput.addEventListener('click', run);

function run() {
    chrome.runtime.sendMessage('sermo-bot-v3-run', (a)=>console.log('message send', a));
}