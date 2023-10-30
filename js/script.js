//making a variable called mainEl
//querySelector = is any of the element tags for ex. ('main' )
const mainEl = document.querySelector('main');

mainEl.style.setBackgroundColor = "var(--main-bg)";
console.log(mainEl)
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add = ("flex-ctr");

const topMenuEl = document.getElementById("#top-menu");
document.getElementById("top-menu").style.height = "100%";

topMenuEl.setBackgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add = ("flex-around");

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//  Iterate over the entire menuLinksarray and for each "link" object:

//  Create an <a>element.
//  On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
//  Set the new element's content to the value of the textproperty of the "link" object.
//  Append the new element to the topMenuElelement.
menuLinks.forEach (link => {
  const newMenuEl =document.createElement("a");
  newMenuEl.setAttribute("href" , link.href);
  newMenuEl.innerText = link.text;
  topMenuEl.appendChild(newMenuEl);
});

const subMenuEl = document.getElementById("#sub-menu");
subMenuEl.style.height = "100%"; 
subMenuEl.style.setBackgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add = ("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

const topMenuLinks = topMenuEl.querySelectorAll("a");
const showingSubMenu = false; 

// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

//5.2
topMenuEl.addEventListener('click' , handleClick); 

evt.preventDefault(); 

  if (evt.target.tagName !== 'A') return; //??
 // console.log(evt.target.textContent);

  if(evt.target.classList.contains('active')){
      evt.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;
  }
  topMenuLinks.forEach(link => {
      link.classList.remove('active');
  });

  if(evt.target){
      evt.target.classList.add('active');

      topMenuLinks.forEach(link => {
        
          if(link.subLinks){showingSubMenu=true;}
          else{showingSubMenu=false};
      });
      if(showingSubMenu===true){
          buildSubMenu(topMenuEl.subLinks);
          subMenuEl.style.top = '100%';
      } else{
          subMenuEl.style.top = 0;
      }
  }
  function buildSubMenu (links) {
      subMenuEl.innerHTML = "";
      links.forEach(link => {
          const newA = links.createElement('a');
          newA.setAttribute('href', link.href);
          newA.textContent = link.text;
          subMenuEl.appendChild(newA);
      });
  }

