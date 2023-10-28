var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
//making a variable called mainEl
//querySelector = is any of the element tags for ex. ('main' )
const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.setBackgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList = ('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');
 document.getElementById('top-menu').style.height = "100%";

 topMenuEl.setBackgroundColor = 'var(--top-menu-bg)';
 topMenuEl.classList = ('flex-around');
