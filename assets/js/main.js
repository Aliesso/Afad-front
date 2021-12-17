window.addEventListener("DOMContentLoaded", () => {
  //*******************LANGUAGE JS*************************//

  var language = document.querySelector(".language");
  var dropDown = document.getElementsByClassName("dropDown")[0];

  language.addEventListener("click", () => {
    language.classList.toggle("active");
  });

  dropDown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //Header active
  const tabBar = document.querySelector(".nav__list");

  function hideTabs() {
    [...tabBar.children].forEach((item) => {
      item.classList.remove("active");
    });
  }

  [...tabBar.children].forEach((item) => {
    item.addEventListener("click", (e) => {
      hideTabs();
      e.currentTarget.classList.add("active");
    });
  });

  //Mobile DropDown
  const dropedItem = document.querySelector(".droppedItem"),
    dropedMenu = document.querySelector(".droppedMenu"),
    svgRotate = document.querySelectorAll(".dropLink svg");
    dropLink = document.querySelectorAll(".dropLink");

  dropLink.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      parent.classList.toggle("active");
    });
  });
  //*******************HAMBURGER JS*************************//
  const hamburger = () => {
    const mobile_logo = document.querySelector(".hamburger"),
      mobile_menu = document.querySelector(".mobile_items");

    mobile_logo.addEventListener("click", (e) => {
      e.stopPropagation();
      mobile_menu.classList.toggle("active");
    });

    mobile_menu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      mobile_menu.classList.remove("active");
    });
  };
  hamburger();
});
