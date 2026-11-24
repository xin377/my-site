// 找到原来的名言卡片
const quotes = document.querySelectorAll("main > article");

// 找到显示区域和按钮
const display = document.getElementById("random-quote");
const button = document.getElementById("quote-button");

// 随机选择并显示一条名言
function showRandomQuote() {
    if (quotes.length === 0) {
        display.textContent = "Add some quotes first.";
        return;
    }

    const index = Math.floor(Math.random() * quotes.length);

    display.replaceChildren(quotes[index].cloneNode(true));
}

// 点击按钮时，重新随机选择
button.addEventListener("click", showRandomQuote);

// 页面打开时，先显示一条
showRandomQuote();