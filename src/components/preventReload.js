const preventReload = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (!link.classList.contains("prevent-reload")) {
      link.classList.add("prevent-reload");
      link.addEventListener("click", (e) => {
        if (link.href === location.href) {
          e.preventDefault();
        }
      });
    }
  });
};

export default preventReload;
