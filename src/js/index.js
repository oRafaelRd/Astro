const tradeThemeButton = document.getElementById("trade-theme");
const body = document.querySelector("body");
const header = document.querySelector("header")
const footer = document.querySelector("footer")


tradeThemeButton.addEventListener("click", () => {
    const universeModeActivated = body.classList.contains("universe-mode");
    body.classList.toggle("universe-mode");
    header.classList.toggle("background-change")
    footer.classList.toggle("background-change")

})
