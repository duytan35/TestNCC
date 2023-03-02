var tabItems = document.getElementsByClassName('tab__item');


function setClick(tabItem) {
    tabItem.addEventListener('click',function(e) {
        for (let temp of tabItems){
            temp.classList.remove('active');
        }
        tabItem.classList.add('active');
    })
}

for (let tabItem of tabItems) {
    setClick(tabItem);
}

var btnToggle = document.getElementsByClassName("btnToggle")[0];
var tab = document.getElementsByClassName("tab")[0];

btnToggle.addEventListener("click", () => {
    if(btnToggle.classList.contains('hiding')) {
        btnToggle.classList.remove('hiding');
        btnToggle.classList.add('showing');
        tab.classList.add("show");
        tab.classList.remove("hide");
    }
    else {
        btnToggle.classList.remove('showing');
        btnToggle.classList.add('hiding');
        tab.classList.add("hide");
        tab.classList.remove("show");
    }
})

addEventListener("resize", () => {
    if(window.innerWidth >= 641) {
        tab.classList.remove("show")
        btnToggle.classList.remove('showing');
    }
});
