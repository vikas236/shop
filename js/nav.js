const navW = (() => {
  function hamAnimation() {
    const body = document.querySelector("body");
    const ham = document.querySelector(".ham");
    const sidebar = document.querySelector(".sidebar");

    ham.addEventListener("click", () => {
      ham.classList.toggle("active");

      if (ham.classList.contains("active")) {
        sidebar.classList.add("active");
      } else {
        sidebar.classList.remove("active");
      }
    });
  }
  hamAnimation();
})();

export default navW;
