// setInterval(reloadIntroAnimation, 35000, "intro1", "intro1Animation");
// setInterval(reloadIntroAnimation, 35000, "intro2", "intro2Animation");
// setInterval(reloadIntroAnimation, 35000, "intro3", "intro3Animation");
// setInterval(reloadIntroAnimation, 35000, "intro4", "intro4Animation");

// function reloadIntroAnimation(el, introClass) {
//     let element = document.getElementById(el);
//     element.classList.remove(introClass);
//     void element.offsetWidth; // Trigger a reflow to restart the animation
//     element.classList.add(introClass);
// }

// setTimeout(blinkColor, 4500, "ABOUTHIMARA");
// setTimeout(blinkColor, 10500, "APARTMENTS");
// setTimeout(blinkColor, 16500, "BOATTRIPS");
// setTimeout(blinkColor, 22500, "CONTACT");

// function blinkColor(el) {
//     document.getElementById(el).style.backgroundColor = "rgba(0, 0, 20, 0.3)";
//     setTimeout(() => {
//         document.getElementById(el).style.backgroundColor = "rgba(12, 175, 200, 0.3)"; 
//     }, 2000);
// }

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);


window.addEventListener("load", function() {

    
    // const photos1 = document.querySelectorAll('.photo1');
    // for (let i = 0, j = 0; i < photos1.length; i++, j -= 100) {
    //     photos1[i].style.left = `${j}%`;
    // }
    // let currentPhoto1 = 0;
    // setTimeout(function() {
    //     photos1[currentPhoto1].classList.add('active1'); 
    //     const carousel = setInterval(showNextPhoto1, 3000);
    //     get("intro").style.opacity = "1";
    //     function showNextPhoto1() {
    //         if (currentPhoto1 === 12) {
    //             clearInterval(carousel);
    //             photos1[currentPhoto1].classList.remove('active1'); 
    //             get("intro").style.opacity = "0";
    //         }
    //         else {
    //             photos1[currentPhoto1].classList.remove('active1'); 
    //             currentPhoto1 = (currentPhoto1 + 1) % photos1.length;
    //             photos1[currentPhoto1].classList.add('active1'); 
    //         }
    //       }
    //   }, 15000);
 

    
    const navIcon = get("navIconDiv");
    const darkContainer = get("darkContainer");
    let menuState = "closed";
    navIcon.addEventListener("touchstart", function(event) {
        if (event.changedTouches[0]) {
            if (menuState === "closed") {
                get('menuDiv').classList.remove("closeMenu");
                get('menuDiv').classList.add("openMenu");
                menuState = "open";
                get("darkContainer").style.opacity = "0.9";
            }
            else if (menuState === "open") {
                get('menuDiv').classList.remove("openMenu");
                get('menuDiv').classList.add("closeMenu");
                menuState = "closed";
                get("darkContainer").style.opacity = "0";
            }
        }
    }, false);

    setTimeout(lightUpBest1, 2200);
    function lightUpBest1() {
        const bestSpans1 = document.getElementsByClassName("lightdown1");
        for (let i = 0, j = 200; i < bestSpans1.length; i++, j+=200) {
            setTimeout(incrOpacity, j, bestSpans1[i]);
            function incrOpacity(el) {
                el.className = "lightup1";
            }
        }
    }

    setTimeout(lightUpBest2, 2400);
    function lightUpBest2() {
        const bestSpans2 = document.getElementsByClassName("lightdown2");
        for (let i = 0, j = 200; i < bestSpans2.length; i++, j+=200) {
            setTimeout(incrOpacity, j, bestSpans2[i]);
            function incrOpacity(el) {
                el.className = "lightup2";
            }
        }
    }

    setTimeout(lightUpBest3, 4400);
    function lightUpBest3() {
        const bestSpans3 = document.getElementsByClassName("lightdown3");
        for (let i = 0, j = 200; i < bestSpans3.length; i++, j+=200) {
            setTimeout(incrOpacity, j, bestSpans3[i]);
            function incrOpacity(el) {
                el.className = "lightup3";
            }
        }
    }

    // setTimeout(lightUpBest2(), 5000);
    // function lightUpBest2() {
    //     const bestSpans2 = document.querySelectorAll(".lightdown2");
    //     for (let i = 0, j = 300; i < bestSpans2.length; i++, j*=i) {
    //         setTimeout(incrOpacity(bestSpans2[i]), j);
    //         function incrOpacity(el) {
    //             get(el).className = "lightup2";
    //         }
    //     }
    // }



});


