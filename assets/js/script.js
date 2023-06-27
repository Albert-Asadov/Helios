// const accordionItems = document.querySelectorAll('.accordion-item');
// var activeHover = document.querySelectorAll(".hoverActive");


// function toggleAccordion() {
//   const content = this.nextElementSibling;
//   const image = this.querySelector('img');

//   this.classList.toggle('active');
//   image.classList.toggle('rotate');

//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//     content.style.padding = '0';
//   } else {
//     content.style.maxHeight = '212px';
//     content.style.padding = '14px 15px';
//   }
// }

// accordionItems.forEach(item => {
//   const header = item.querySelector('.accordion-header');
//   const content = item.querySelector('.accordion-content');

//   content.style.maxHeight = null;
//   content.style.padding = '0';

//   header.addEventListener('click', toggleAccordion);
// });



// activeHover.forEach(function(element) {
//     element.addEventListener("click", function() {
//         activeHover.forEach(function(item) {
//             item.classList.remove("activeNavbar");
//         });
//         element.classList.add("activeNavbar");
//     });
// });

const accordionItems = document.querySelectorAll('.accordion-item');
var activeHover = document.querySelectorAll(".hoverActive");

function toggleAccordion() {
  const content = this.nextElementSibling;
  const image = this.querySelector('img');

  this.classList.toggle('active');
  image.classList.toggle('rotate');

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = '0';
    this.classList.remove('activeNavbar');
  } else {
    content.style.maxHeight = '212px';
    content.style.padding = '14px 15px';
    const activeNavbars = document.querySelectorAll('.activeNavbar');
    activeNavbars.forEach(navbar => {
      navbar.classList.remove('activeNavbar');
    });
    this.classList.add('activeNavbar');
  }
}

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  content.style.maxHeight = null;
  content.style.padding = '0';

  header.addEventListener('click', toggleAccordion);
});

activeHover.forEach(function(element) {
  element.addEventListener("click", function() {
    activeHover.forEach(function(item) {
      item.classList.remove("activeNavbar");
    });
    element.classList.add("activeNavbar");
  });
});
