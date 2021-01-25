const nav = document.querySelector("#main");
    const topOfNav = nav.offsetTop;

    function fixedNav() {
      console.log(window.scrollY, topOfNav);
      if (topOfNav <= window.scrollY) {
        document.body.style.paddingTop = '77px';
        nav.classList.add("fixedNav");
      }
      else {
        document.body.style.paddingTop = 0;
        nav.classList.remove("fixedNav");
      }
    }
    addEventListener("scroll", fixedNav)