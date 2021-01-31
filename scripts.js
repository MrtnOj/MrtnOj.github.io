const hamburger = document.querySelector('#nav-hamburger');
const mobileNavBar = document.querySelector('#mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav__link');
const backdrop = document.querySelector('.backdrop');

// Function to open/close mobile sidebar and display backdrop

const burgerClicked = event => {
   mobileNavBar.style.display = 'block';
   backdrop.style.display = 'block'
}

const backDropClicked = event => {
   mobileNavBar.style.display = 'none';
   backdrop.style.display = 'none';
}

hamburger.addEventListener('click', burgerClicked);
backdrop.addEventListener('click', backDropClicked);


// Listening on click events on menu items to close the mobile sidebar menu

for (let i = 0 ; i < mobileNavLink.length; i++) {
   mobileNavLink[i].addEventListener('click', event => {
      mobileNavBar.style.display = 'none';
      backdrop.style.display = 'none'
   })
}
