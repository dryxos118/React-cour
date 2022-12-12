// données locales
export const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// const btnN = document.querySelector(".btnN");
// const btnR = document.querySelector(".btnR");
// const btnP = document.querySelector(".btnP");
// const btns = document.querySelectorAll(".btn");
// const names = document.querySelector("#name");
// const jobs = document.querySelector("#job");
// const imgs = document.querySelector("#img-person");
// const infos = document.querySelector("#info");

// let currentItem = 0;

// console.log(btnN);
// console.log(btnP);
// console.log(btnR);

// function contenu(person) {
//   const item = reviews[person];

//   imgs.src = item.img;
//   names.textContent = item.name;
//   jobs.textContent = item.job;
//   infos.textContent = item.text;
// }

// contenu(currentItem);

// btns.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     let oldItem = currentItem;

//     if (e.currentTarget.classList.contains("Next")) {
//       currentItem++;

//       if (currentItem === reviews.length) {
//         currentItem = 0;
//       }
//     }

//     if (e.currentTarget.classList.contains("Prev")) {
//       currentItem--;

//       if (currentItem < 0) {
//         currentItem = reviews.length - 1;
//       }
//     }

//     if (e.currentTarget.classList.contains("Rand")) {
//       while (currentItem === oldItem) {
//         currentItem = Math.floor(Math.random() * reviews.length);
//       }
//     }

//     contenu(currentItem);
//   });
// });
