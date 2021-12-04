let discover=document.querySelectorAll(".discover");
discover.forEach(btn=>{
    let tag=btn.children[0];
    btn.addEventListener("mouseover",()=>{
        let nav=document.querySelector('.moreNav');
        if (nav.classList.contains('displayNone')) {
            nav.classList.remove("displayNone"); 
        }
    });
    btn.addEventListener("mouseleave",()=>{
        let nav=document.querySelector('.moreNav');
        if (!nav.classList.contains('displayNone')) {
            nav.classList.add("displayNone"); 
        }
    });
});


let pages=document.querySelectorAll(".pages")
pages.forEach(btn1=>{
    let tag1=btn1.children[0];
    btn1.addEventListener("mouseover",()=>{
        let nav=document.querySelector('.pagenav');
        if (nav.classList.contains('displayNone')) {
            nav.classList.remove("displayNone"); 
        }
    });
    btn1.addEventListener("mouseleave",()=>{
        let nav=document.querySelector('.pagenav');
        if (!nav.classList.contains('displayNone')) {
            nav.classList.add("displayNone"); 
        }
    });
});