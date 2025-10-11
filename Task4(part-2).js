const box =
document.querySelector("#box");
const button =
document.querySelector("#changeBtn");
button.addEventListener("click", function () {
    box.computedStyleMap.width="300px";
    box.Style.fontsize="22px";
    box.Style.color="white";
    box.Style.backgroundColor="purple;"
});
