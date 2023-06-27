


const accordionItems = document.querySelectorAll('.accordion-item');
var activeHover = document.querySelectorAll(".hoverActive");
var SubMenu = document.getElementById("subMenu");

function toggleAccordion() {
  const content = this.nextElementSibling;
  const image = this.querySelector('img');

  this.classList.toggle('active');
  image.classList.toggle('rotate');

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = '0';
    image.style.transform = 'rotate(0deg)';
    activeHover.forEach(function(item) {
      item.classList.remove("activeNavbar");
    });
  } else {
    content.style.maxHeight = '212px';
    content.style.padding = '14px 15px';
    image.style.transform = 'rotate(90deg)';
    activeHover.forEach(function(item) {
      if (item !== this.parentElement) {
        item.classList.remove("activeNavbar");
      }
    }, this.parentElement);
    this.parentElement.classList.toggle("activeNavbar");
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
      if (item !== element) {
        item.classList.remove("activeNavbar");
      }
    });
    element.classList.add("activeNavbar");
  });
});

activeHover.forEach(e => {
  e.addEventListener("click", function(e) {
    e.stopPropagation();
    SubMenu.style.display = "block";
  });
});

window.addEventListener("click", function() {
  SubMenu.style.display = "none";
  activeHover.forEach(function(element) {
    element.classList.remove("activeNavbar");
  });
});
