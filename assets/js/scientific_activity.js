const tabLinks = [
  {
    id: 1,
    title: "Elmi fəaliyyəti",
    subtitle: [
      {
        id: 10,
        name: "1elmi fealliyet",
      },
      {
        id: 11,
        name: "2elmi fealliyet",
      },
      {
        id: 12,
        name: "3elmi fealliyet",
      },
    ],
  },
  {
    id: 2,
    title: "Türkoloji dilçilik",
  },
  {
    id: 3,
    title: "Təhsil təşkilatçılığı",
  },
  {
    id: 4,
    title: "Onomastika və onomalogiya",
    subtitle: [
      {
        id: 13,
        name: "1elmi fealliyet",
      },
      {
        id: 14,
        name: "2elmi fealliyet",
      },
      {
        id: 15,
        name: "3elmi fealliyet",
      },
    ],
  },
  {
    id: 5,
    title: "Elm təşkilatçılığı",
  },
  {
    id: 6,
    title: "İctimai-siyasi fəaliyyəti",
  },
  {
    id: 7,
    title: "Azərbaycan Dövlət Pedaqoji Universiteti",
  },
  {
    id: 8,
    title: "Azərbaycan Əlifba İslahatı",
  },
];

const tabViews = [
  {
    id: 1,
    content:
      "1Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 2,
    content:
      "2Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 3,
    content:
      "3Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 4,
    content:
      "4Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 5,
    content:
      "5Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 6,
    content:
      "6Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 7,
    content:
      "7Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 8,
    content:
      "8Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 10,
    content:
      "10Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 11,
    content:
      "11Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 12,
    content:
      "12Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 13,
    content:
      "13Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 14,
    content:
      "14Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
  {
    id: 15,
    content:
      "15Müasir Azərbaycan dilçiliyi hazırkı inkişaf səviyyəsinə  birdən-birə gəlib çıxmamışdır. O, mürəkkəb və çətin bir yol  keçmişdir. Bu sahədə ədəbiyyat və mədəniyyət xadimlərimiz  misilsiz xidmətlər göstərmişlər. Azərbaycanda peşəkar dilçilər  yetişənə qədər dilçilik tədqiqatları ilə müqtədir  sənətkarlarımız, şair və tərcüməçilərimiz, dramaturq,  ədəbiyyatşünas, tarixçilərimiz, publisist və pedaqoqlarımız,  müəllimlərimiz məşğul olmuşlar. Dilçiliyin bir elm sahəsi kimi  yaranmağa başlaması, əsasən, XIX yüzilliyə təsadüf edir,  formalaşması isə XX əsrlə bağlıdır. Bu dövrdən və XX əsrin  əvvəllərindən bəhs edərkən",
  },
];

const scientificList = document.querySelector(".scientific_list"),
  scientificText = document.querySelector(".scientific_text"),
  gallery_tabbarItem = document.querySelectorAll(".gallery_tabbarItem"),
  droppedMenu = document.querySelector(".scientific_list .droppedMenu");

function hideScientific() {
  [...scientificList.children].forEach((item) => {
    item.classList.remove("active");
  });
}

tabLinks.map((item) => {
  // console.log(item.subtitle, "2222");
  if (item.subtitle) {
    scientificList.innerHTML += `
    <li id='${item.id}' class='dropItem'>
    <div class="items">
                  <a class="items__title" href="">${item.title}</a>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#262B35"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <ul class="droppedMenu">
                ${item.subtitle
                  .map(
                    (subItem) =>
                      `<li id='${subItem.id}'><a href="#0">${subItem.name}</a></li>`
                  )
                  .join("")}
                </ul>
                <ul class="mobileSubtitle">
                ${item.subtitle
                  .map(
                    (
                      subItem
                    ) => `<li id='${subItem.id}'><a href="singleBook.html">${subItem.name}</a>
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.16663L21.5 8.16663" stroke="#A58921" stroke-width="1.6" stroke-linecap="square"/>
                  <path d="M17.5 3.5L22.1667 8.16667L17.5 12.8333" stroke="#A58921" stroke-width="1.6" stroke-linecap="square"/>
                  </svg>
                  </li>`
                  )
                  .join("")}
                </ul>
               
    </li>
  `;
  } else {
    scientificList.innerHTML += `
        <li id='${item.id}' class='gallery_tabbarItem'>
          <a class="items__title">${item.title}</a>
        </li>
      `;
  }
});

// SUBLIST JS START

[...document.querySelectorAll(".scientific_list .droppedMenu")].forEach(
  (el) => {
    [...el.children].forEach((element) => {
      element.addEventListener("click", (e) => {
        [...el.children].forEach((item) => {
          item.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        e.stopPropagation();
      });
    });
    [...el.children].forEach((element) => {
      element.addEventListener("click", (e) => {
        const subLink = e.currentTarget.id;
        tabViews.forEach((tab) => {
          if (subLink == tab.id) {
            scientificText.innerHTML = `
              <p>${tab.content}</p>
              
            `;
          }

          // else if (tabLinks.subtitle.id == tab.id){
          //   console.log("salam qaqs");
          // }
        });
      });
    });
  }
);
// [...document.querySelectorAll(".scientific_list .mobileSubtitle")].forEach(
//   (el) => {
//     [...el.children].forEach((element) => {
//       element.addEventListener("click", (e) => {
//         [...el.children].forEach((item) => {
//           item.classList.remove("active");
//         });
//         e.currentTarget.classList.add("active");
//         e.stopPropagation();
//       });
//     });
//     [...el.children].forEach((element) => {
//       element.addEventListener("click", (e) => {
//         const subLink = e.currentTarget.id;
//         tabViews.forEach((tab) => {
//           if (subLink == tab.id) {
//             console.log("salam dosdar");
//             scientificText.innerHTML = `
//               <p>${tab.content}</p>
//             `;
//           }

//           // else if (tabLinks.subtitle.id == tab.id){
//           //   console.log("salam qaqs");
//           // }
//         });
//       });
//     });
//   }
// );

// SUBLIST JS END

scientificText.innerHTML = `<p>${tabViews[0].content}</p>`;

[...scientificList.children][0].classList.add("active");
[...scientificList.children].forEach((item, i) => {
  item.addEventListener("click", (e) => {
    hideScientific();
    e.currentTarget.classList.add("active");
  });
});

[...scientificList.children].forEach((item) => {
  item.addEventListener("click", (e) => {
    const tabLinkId = e.currentTarget.id;
    console.log(e.currentTarget);

    (subItem) => {
      subItem.id == tab.id
        ? (scientificText.innerHTML = `
        <p>${tab.content}</p>
        
      `)
        : null;
    };
    tabViews.forEach((tab) => {
      if (tabLinkId == tab.id) {
        scientificText.innerHTML = `
          <p>${tab.content}</p>
          
        `;
      }
    });
  });
});
