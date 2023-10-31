var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];
//making a variable called mainEl
//querySelector = is any of the element tags for ex. ('main' )
const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add = ("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add = ("flex-around");

//  Iterate over the entire menuLinksarray and for each "link" object:

//  Create an <a>element.
//  On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
//  Set the new element's content to the value of the textproperty of the "link" object.
//  Append the new element to the topMenuElelement.
menuLinks.forEach((link) => {
  const newMenuEl = document.createElement("a");
  newMenuEl.setAttribute("href", link.href);
  newMenuEl.innerText = link.text;
  topMenuEl.appendChild(newMenuEl);
});
/******************************* */
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add = ("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

const topMenuLinks = topMenuEl.querySelectorAll("a");
var showingSubMenu = false;

// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

//5.2
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "A") return; 
  // console.log(evt.target.textContent);
  console.log(e.target.textContent);

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    console.log("remove active");
    return;
  }
  topMenuLinks.forEach(link => link.classList.remove("active"));

  e.target.classList.add("active");
//});

const activeLink = menuLinks.find(
  (link) => link.text === e.target.textContent
);

showingSubMenu = activeLink.hasOwnProperty("sublinks");
if (activeLink.hasOwnProperty("subLinks")) {
  showingSubMenu = true
} else {
  showingSubMenu = false
}


if (showingSubMenu) {
  buildSubMenu(activeLink.subLinks);
  subMenuEl.style.top = "100%";
} else {
  subMenuEl.style.top = 0;
}

if (e.target.textContent == "about") {
  mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
}

});

function buildSubMenu(subLinksArray) {
  console.log("buildingSubMenu");
  subMenuEl.innerHTML = "";

  subLinksArray.forEach(link => {
    const aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.textContent = link.text;
    subMenuEl.appendChild(aEl);
  });
}

subMenuEl.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName !== "A") return;
  console.log(e.target.textContent);

  showingSubMenu = false;
  subMenuEl.style.top = 0;

  for (let link of topMenuLinks) {
    link.classList.remove("active");
  }

  mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
})
