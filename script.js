function ClickFunc() {
    document.getElementsByClassName("social")[0].classList.add("social-withjs");
    document.getElementsByClassName("share-btn")[0].classList.add("share-btn-withjs");
};

function MouseLeaveFunc(){
    document.getElementsByClassName("social")[0].classList.remove("social-withjs");
    document.getElementsByClassName("share-btn")[0].classList.remove("share-btn-withjs");
}