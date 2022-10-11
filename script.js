var cover = document.getElementsByClassName("cover")[0];
var videodiv = document.getElementsByClassName("videodiv")[0];
var visible = document.getElementsByClassName("visible")[0];
cover.addEventListener("click", () => {
   // cover.style.display = "none";
   cover.children[0].style.display = "none";
   cover.children[1].style.display = "none";

    
    setTimeout(() => {
        cover.classList.toggle("fade");
        setTimeout(() => {
        cover.style.display = "none";
        visible.style.display = "block";
        }, 1000);
    }, 1000);

    console.log("clicked");
    videodiv.innerHTML = '<video autoplay loop playsinline preload="auto" class="video" id="video"> <source src="./video.mp4" type="video/mp4"> </video>';
    
});
