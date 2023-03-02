window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

window.addEventListener("load", function() {


      const navIcon = get("navIconDiv");
      const darkContainer = get("darkContainer");
      let menuState = "closed";
      navIcon.addEventListener("touchstart", function(event) {
          if (event.changedTouches[0]) {
              if (menuState === "closed") {
                  get('menuDiv').classList.remove("closeMenu");
                  get('menuDiv').classList.add("openMenu");
                  menuState = "open";
                  darkContainer.style.visibility = "visible";
                  darkContainer.style.opacity = "0.9";
              }
              else if (menuState === "open") {
                  get('menuDiv').classList.remove("openMenu");
                  get('menuDiv').classList.add("closeMenu");
                  menuState = "closed";
                  darkContainer.style.opacity = "0";
                  setTimeout(hideDarkContainer, 600);
                  function hideDarkContainer() {
                    darkContainer.style.visibility = "hidden";
                  }
              }
          }
      }, false);





});


