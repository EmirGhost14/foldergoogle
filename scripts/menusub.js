var el = document.getElementsByClassName('menu-item');
for(var i=0; i<el.length; i++) {
    el[i].addEventListener("mouseover", showSub, false);
    el[i].addEventListener("mouseout", hideSub, false);
}
function showSub(e) {
    if(this.children.length>0) {
        this.children[1].style.height = "auto";
        this.children[1].style.overflow = "visible";
        this.children[1].style.opacity = "1";
    } else {
        return false;
    }
}
function hideSub(e) {
    if(this.children.length>1) {
        this.children[1].style.height = "0";
        this.children[1].style.overflow = "hidden";
        this.children[1].style.opacity = "0";
    } else {
        return false;
    }
}