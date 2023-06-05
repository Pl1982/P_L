//on recupper l element HTML a pour pouvoir ajouter la classe open au click//
let burgerBtn = document.querySelector('.link-burger');
//on recupper l element Html balis ul avec le menu pour ajouter la classe open au click sur l element burgerBtn//
let navbarLinks = document.querySelector('.navbar-links ul');

if (burgerBtn && navbarLinks) {
      burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('open');
            navbarLinks.classList.toggle('open');
      });
}
