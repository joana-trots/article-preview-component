function ClickFunc() {

    let foomobile = document.getElementsByClassName("footnote-mobile")[0];
    let footnote = document.getElementsByClassName("footnote")[0];
    let sharebtn = document.getElementsByClassName("share-btn")[0];
    let social = document.getElementsByClassName("social")[0];
    let sharebtn_active = document.getElementsByClassName("footnote-mobile")[0].getElementsByClassName("share-btn")[0];

    social.classList.add("social-withjs");
    sharebtn.classList.add("share-btn-withjs");
  
    if (window.screen.width <= 666 || window.innerWidth <= 666) {
        footnote.style.display = "none";
        foomobile.style.display = "block";

        document.addEventListener("click", function(e){
            if (sharebtn_active.contains(e.target)){
                foomobile.style.display = "none";
                footnote.style.display = "flex";    
            }
        });  
    }
};

function MouseLeaveFunc(){
    document.getElementsByClassName("social")[0].classList.remove("social-withjs");
    document.getElementsByClassName("share-btn")[0].classList.remove("share-btn-withjs");
}