const accordionItems = document.querySelectorAll('.accordion-item');

function toggleAccordion() {
  const content = this.nextElementSibling;
  const image = this.querySelector('img');

  this.classList.toggle('active');
  image.classList.toggle('rotate');

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = '0';
  } else {
    content.style.maxHeight = '212px';
    content.style.padding = '14px 15px';
  }
}

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  content.style.maxHeight = null;
  content.style.padding = '0';

  header.addEventListener('click', toggleAccordion);
});


var activeHover = document.querySelectorAll(".hoverActive");

activeHover.forEach(function(element) {
    element.addEventListener("click", function() {
        activeHover.forEach(function(item) {
            item.classList.remove("activeNavbar");
        });
        element.classList.add("activeNavbar");
    });
});
