function tabIndex() {
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        console.log("Image: " + i);
        images[i].setAttribute("tabindex", "0");
    }
    console.log("Total: " + images.length);
}

function upDate(previewPic) {
    document.querySelector("#image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.querySelector("#image span").innerHTML = previewPic.alt;
}

function unDo() {
    document.querySelector("#image").style.backgroundImage = "url('')";
    document.querySelector("#image span").innerHTML = "Hover over an image below to display here."
}