let header = document.createElement("header");
let logo = document.createElement("h3");
let ul = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let service = document.createElement("li");
let contact = document.createElement("li");

header.classList = "header";
logo.classList = "logo";
home.classList = "home li";
about.classList = "about li";
service.classList = "service li";
contact.classList = "contact li";

logo.textContent = "Elzero";
about.textContent = "About";
home.textContent = "Home";
service.textContent = "Service";
contact.textContent = "Contact";

header.appendChild(logo);
ul.appendChild(home);
ul.appendChild(about);
ul.appendChild(service);
ul.appendChild(contact);
header.appendChild(ul);
document.body.appendChild(header);

let style = "padding-inline:20px";

document.body.style.cssText =
  "margin:0;padding:0; box-sizing: border-box; background-color:lightgray; ";

header.style.cssText =
  "background-color:white; display:flex;justify-content:space-between;align-items:center; font-size:20px";

logo.style.cssText = "color:green;justify-content:start; margin:10px";

ul.style.cssText =
  " list-style-type: none;display:flex; justify-content:end; margin:20px";

home.style.cssText = style;
about.style.cssText = style;
service.style.cssText = style;
contact.style.cssText = style;

// --------------- this part is to creat the main ----------------
// let container = document.createElement("div");
// container.classList = "container";
// for (let i = 0; i < 15; i++) {
//   let items = document.createElement("div");
//   items.classList = `item-${i + 1}`;

// }
