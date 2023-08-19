let services_link = document.getElementById("services");
let services_submenu = document.querySelector(".services");

services_link.onclick = () => {
  services_submenu.classList.toggle("open");
};

let contacts_link = document.querySelector(".comands");
let contacts_cards = document.querySelector(".cards");

contacts_link.onclick = () => {
  contacts_cards.classList.toggle("open");
};

let popup = document.getElementById("why");
let close_popup = popup.querySelector(".popup_close");
let open_popup = document.querySelector('.why');

open_popup.onclick = () => {
  popup.style.display = "flex";
};

close_popup.onclick = () => {
  popup.style.display = "none";
};
