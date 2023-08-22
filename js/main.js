let services_link = document.getElementById("services");
let services_submenu = document.querySelector(".services");

services_link.onclick = () => {
  services_submenu.classList.toggle("open");

  if (cases_submenu.classList.contains("open"))
    cases_submenu.classList.toggle("open");

  if (contacts_cards.classList.contains("open"))
    contacts_cards.classList.toggle("open");

  popup.style.display = "none";
};

let contacts_link = document.querySelector(".comands");
let contacts_cards = document.querySelector(".cards");

contacts_link.onclick = () => {
  contacts_cards.classList.toggle("open");

  if (cases_submenu.classList.contains("open"))
    cases_submenu.classList.toggle("open");

  if (services_submenu.classList.contains("open"))
    services_submenu.classList.toggle("open");

  popup.style.display = "none";
};

let popup = document.getElementById("why");
let close_popup = popup.querySelector(".popup_close");
let open_popup = document.querySelector(".why");

open_popup.onclick = () => {
  popup.style.display = "flex";

  if (cases_submenu.classList.contains("open"))
    cases_submenu.classList.toggle("open");

  if (contacts_cards.classList.contains("open"))
    contacts_cards.classList.toggle("open");

  if (services_submenu.classList.contains("open"))
    services_submenu.classList.toggle("open");
};

close_popup.onclick = () => {
  popup.style.display = "none";
};

let cases_link = document.getElementById("cases");
let cases_submenu = document.querySelector(".cases");

cases_link.onclick = () => {
  cases_submenu.classList.toggle("open");

  popup.style.display = "none";

  if (contacts_cards.classList.contains("open"))
    contacts_cards.classList.toggle("open");

  if (services_submenu.classList.contains("open"))
    services_submenu.classList.toggle("open");
};

let page_loader = document.querySelector(".page_loader");
page_loader.classList.add("open");

window.onload = () => {
  page_loader.classList.remove("open");
};
