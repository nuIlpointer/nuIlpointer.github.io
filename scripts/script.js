window.onload = function() {
    var page = {
        "aboutMeBtn": "aboutMe",
        "downloadsBtn": "downloads",
        "snsBtn": "sns",
        "gadgetsBtn": "gadgets"
    }
    document.querySelectorAll(".navBtn").forEach(obj => {

        obj.addEventListener("click", (e) => {
            document.querySelectorAll(".activeBtn").forEach(current => {
                document.getElementById(page[current.id]).style.display = "none";
                current.style.filter = "brightness(1)";
                current.className = current.className.replace("activeBtn", "");
            })
            obj.className = obj.className + " activeBtn";
            $(`#${page[obj.id]}`).fadeIn(250, function() {
                obj.style.filter = "brightness(1.8)";
            });
            
        })

    })
}