let btn = document.querySelector(".btn");
let h = document.querySelector(".header");
let innerDiv = document.querySelector(".inner-loader");

let a = 0;
let c = (b = Math.floor(Math.random() * 10)) ? b : 1;

btn.addEventListener("click", function () {
    btn.style.pointerEvents = "none";
    let intervalId = setInterval(() => {
        a++;
        h.innerHTML = a + "%";
        innerDiv.style.width = `${a}%`;
    }, c * 10);

    setTimeout(function () {
        clearInterval(intervalId);
        btn.innerHTML = "Downloaded!!";
        btn.style.opacity = "0.5";
        console.log(`Download Time: ${c} secs..`);
    }, c * 1000);
});

