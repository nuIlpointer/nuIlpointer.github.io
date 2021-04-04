$(window).bind("load", () => {
    var introPage = document.createElement("div");
    introPage.setAttribute("style", `
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: #222;
    overflow: hidden;
    clip-path: inset(0 0 0 0);
    transition: clip-path 2s cubic-bezier(0.800, -0.010, 0.135, 1.005);
    `)
    introPage.setAttribute("id", "page-intro");
    document.body.appendChild(introPage);

    var underline = document.createElement("div");
    underline.setAttribute("style", `
    display: block;
    width: 0%;
    left: 0px;
    height: 0.3vh;
    background: #fff;
    position: absolute;
    top: calc(50% + 55px);
    transform: tranlateY(50%);
    `)
    underline.setAttribute("id", "underline");
    introPage.appendChild(underline);

    var text = document.createElement("div");
    text.setAttribute("style", `
    display: none;
    position: absolute;
    width: 100%;
    top: calc(50% + 110px);
    transform: translateY(-50%);
    font-size: 100px;
    color: rgba(0, 0, 0, 0);
    text-shadow: #fff ${parseInt(document.body.clientHeight * 0.03)}px 0px;
    user-select: none;
    font-family: 'Epilogue', sans-serif;
    `)
    text.setAttribute("id", "intro-text");
    text.innerHTML = "nuilpointer";
    introPage.appendChild(text);

    var textmask = document.createElement("div");
    textmask.setAttribute("style", `
    display: block;
    width: 100%;
    height: 20%;
    position: absolute;
    top: calc(50% + 55px + 0.3vh);
    left: 0px;
    background: #222;
    `)
    textmask.setAttribute("id", "textmask");
    introPage.appendChild(textmask);

    $("#underline").animate({ "width": "70%" }, 800, "easeOutQuint").promise().then(() => {
        text.style.display = "block";
        document.getElementById("icon").style.display = "block";
        document.getElementById("nav").style.display = "block";
        document.getElementById("container").style.display = "block";
        $("#intro-text").animate({ "top": "50%" }, 1000, "easeOutQuint").promise().then(() => {
            console.log("hoge")
            introPage.style.clipPath = `inset(0 100% 0 0)`
        })
    })
})