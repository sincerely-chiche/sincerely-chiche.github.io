new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    transparent: true,
    showMenu: false,
    hideScrollBtn: false,
  },
  methods: {
    toggleMenu() {},
    navClicked() {
      this.showMenu = false;
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      let pos = e.target.scrollingElement.scrollTop;
      if (pos > 0) {
        this.transparent = false;

        if (pos > 500) this.hideScrollBtn = false;
      } else {
        this.transparent = true;
        this.hideScrollBtn = true;
      }
    });

    var typed = new Typed(".typing", {
      strings: [
        "Web Developer",
        "Mobile Developer",
        "Desktop Developer",
        "Tutor",
        "Web Designer",
      ],
      loop: true,
      backSpeed: 20,
      typeSpeed: 50,
    });
    var typed = new Typed(".typing-2", {
      strings: [
        "Web Developer",
        "Mobile Developer",
        "Desktop Developer",
        "Tutor",
        "Web Designer",
      ],
      loop: true,
      backSpeed: 20,
      typeSpeed: 50,
    });
  },
});
