const tabLinks = [
  {
    id: 1,
    title: "ADPU",
  },
  {
    id: 2,
    title: "Akademiya",
  },
  {
    id: 3,
    title: "Xatirələr",
  },
  {
    id: 4,
    title: "Portretlər",
  },
  {
    id: 5,
    title: "Ailə şəkilləri",
  },
  {
    id: 6,
    title: "Heydər Əliyev",
  },
  {
    id: 7,
    title: "Onomastika və konfranslar",
  },
  {
    id: 8,
    title: "Diplomlar",
  },
];
const tabViews = [
  {
    id: 1,
    views: [
      {
        id: 1,
        img: "assets/images/gallery/gallery_1.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 1",
      },
      {
        id: 2,
        img: "assets/images/gallery/gallery_2.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 2",
      },
      {
        id: 3,
        img: "assets/images/gallery/gallery_3.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 3",
      },
      {
        id: 4,
        img: "assets/images/gallery/gallery_4.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 4",
      },
    ],
  },
  {
    id: 2,
    views: [
      {
        id: 5,
        img: "assets/images/gallery/gallery_5.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 5",
      },
      {
        id: 6,
        img: "assets/images/gallery/gallery_6.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 6",
      },
      {
        id: 7,
        img: "assets/images/gallery/gallery_7.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 7",
      },
      {
        id: 8,
        img: "assets/images/gallery/gallery_8.png",
        text: "Afad Qurbanov Elmlər Akademiyasında auditoriya qarşısında çıxış edərkən 8",
      },
    ],
  },
  {
    id: 3,
    views: [
      {
        id: 9,
        img: "assets/images/gallery/gallery_9.png",
      },
      {
        id: 10,
        img: "assets/images/gallery/gallery_10.png",
      },
    ],
  },
  {
    id: 4,
    views: [
      {
        id: 11,
        img: "assets/images/gallery/gallery_11.png",
      },
      {
        id: 12,
        img: "assets/images/gallery/gallery_12.png",
      },
    ],
  },
  {
    id: 5,
    views: [
      {
        id: 13,
        img: "assets/images/gallery/gallery_13.png",
      },
      {
        id: 14,
        img: "assets/images/gallery/gallery_14.png",
      },
    ],
  },
];

function createLightGallery() {
  $("#lightGallery").lightGallery({
    selector: ".gallery_item",
  });
}


// function changeView(){
//   hideGallery();
//   $("#lightGallery").data("lightGallery").destroy(true);
//   setTimeout(() => {
//     createLightGallery();
//   }, 0);
//   const tabLinkId = e.currentTarget.id,
//     gallery_item = document.querySelectorAll(".gallery_item");

//   gallery_item.forEach((item) => {
//     item.remove();
//   });

//   e.currentTarget.classList.add("active");

//   tabViews.forEach((tab, i) => {
//     if (tabLinkId == tab.id) {
//       tab.views.forEach((view, i) => {
//         galleryItems.innerHTML += `
//           <a href=${view.img} class="gallery_item">
//           <img src=${view.img} alt=${view.text} />
//           <div class="gallery_text">
//            <p>
//              ${view.text}
//            </p>
//           </div>
//         </a>
//         `;
//       });

//     }
//   });
// }

const galleryItems = document.querySelector(".gallery_items");
const galleryList = document.querySelector(".gallery_list");

$(document).ready(function () {
  createLightGallery();
  
});

function hideGallery() {
  [...galleryList.children].forEach((item) => {
    item.classList.remove("active");
    lightGallery;
  });
}
//GALLERY LIST
//Light Gallery

tabLinks.map((item) => {
  galleryList.innerHTML += `
    <li id='${item.id}' class='gallery_tabbarItem'><a>${item.title}</a></li>
  `;
});
//GALLERY CONTENT
console.log(tabViews, "qqqqqq");
tabViews.forEach((tab, i) => {
  console.log(tab);
  // tab.views.forEach((view, i) => {
  //   galleryItems.innerHTML += `
  //     <a href=${view.img} class="gallery_item">
  //     <img src=${view.img} alt=${view.text} />
  //     <div class="gallery_text">
  //       <p>
  //         ${view.text}
  //       </p>
  //     </div>
  //   </a>
  //   `;
  // });
});

[...galleryList.children][0].classList.add("active");
[...galleryList.children].forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(tabViews[0].views);
    hideGallery();
    $("#lightGallery").data("lightGallery").destroy(true);
    setTimeout(() => {
      createLightGallery();
    }, 0);
    const tabLinkId = e.currentTarget.id,
      gallery_item = document.querySelectorAll(".gallery_item");

    gallery_item.forEach((item) => {
      item.remove();
    });

    e.currentTarget.classList.add("active");

    tabViews.forEach((tab, i) => {
      if (tabLinkId == tab.id) {
        tab.views.forEach((view, i) => {
          galleryItems.innerHTML += `
            <a href=${view.img} class="gallery_item">
            <img src=${view.img} alt=${view.text} />
            <div class="gallery_text">
             <p>
               ${view.text}
             </p>
            </div>
          </a>
          `;
        });
      }
    });
  });
});
