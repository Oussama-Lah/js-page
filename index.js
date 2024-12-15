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
  "margin:0;padding:0; box-sizing: border-box; background-color:lightgray; color:gray;  ";

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

let container = document.createElement("main");
container.className = "container";

container.style.cssText =
  " margin:20px;display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:20px";

for (let i = 0; i < 15; i++) {
  let div = document.createElement("div");
  let product = document.createElement("p");

  div.className = `element ${i + 1}`;
  product.className = `product ${i + 1}`;
  product.innerHTML = `<span style="font-size:30px ;color:black; margin:13px">${
    i + 1
  }</span></br> Product`;

  div.appendChild(product);
  container.appendChild(div);

  div.style.cssText =
    "width:300px; height:120px;background-color:white; border-radius:4px; display:flex;justify-content:center;align-items:center";
}
document.body.appendChild(container);

//----------------------footer--------------------------

let footer = document.createElement("footer");
footer.textContent = "Copyright 2021";

footer.style.cssText = `font-size:20px; 
background-color:green ;
color:white;
position:fixed;
padding-top:20px;
left:0;
bottom:0;
height:50px ;
width:100% ;
text-align:center `;
document.body.appendChild(footer);
