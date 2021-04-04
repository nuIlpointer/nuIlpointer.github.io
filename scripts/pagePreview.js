/*
*
* Page preview Generator by nuilpointer
*
*/
//settings:
var width = 640;
var height = 360;

//add URL preview element

var urlPreview = document.createElement("div");
urlPreview.className = "offHover";
urlPreview.setAttribute("style", `display: none; width: ${width}px; height: ${height}px; position: fixed; background: #fff;`)
urlPreview.setAttribute("id", `pagePreviewElement`)

$(window).bind("load", function(){
    document.body.appendChild(urlPreview);
    
    //add listener for Anchor tag.
    var anchorElements = document.querySelectorAll("a");

    anchorElements.forEach(element => {
        element.addEventListener("mouseover", e => {
            if(!document.URL.match(element.getAttribute("href")) && !element.className.match("no-preview")) {
                urlPreview.innerHTML = `<iframe id="pagePreviewIframe" width="${width}" height="${height}" src="${element.getAttribute("href")}" style=" border: 10px solid #181818; border-radius: 8px;"></iframe>`
                urlPreview.style.display = "inline";
                urlPreview.style.top = e.clientY;
                urlPreview.style.left = e.clientX;
                urlPreview.className = "onHover";
            }
        });
        element.addEventListener("mouseout", e => {
            setTimeout(() => {
                if(!document.getElementById("pagePreviewElement").className.match("onHover")) {
                    urlPreview.innerHTML = "";
                    urlPreview.style.display = "none";
                }
            }, 1000);
        });
    })

    urlPreview.addEventListener("mouseover", e => {
        urlPreview.className = "onHover";
    });

    urlPreview.addEventListener("mouseout", e => {
        urlPreview.className = "offHover";
        setTimeout(() => {
            if(!document.getElementById("pagePreviewElement").className.match("onHover")) {
                urlPreview.innerHTML = "";
                urlPreview.style.display = "none";
                urlPreview.className = "onHover";
            }
        }, 1000);
    });

});