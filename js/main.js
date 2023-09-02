let services_link = document.getElementById("services");
let services_submenu = document.querySelector(".services");

  console.log(services_link);
  services_link.onclick = () => {
  console.log(123);
  services_submenu.classList.toggle("open");

  if (cases_submenu.classList.contains("open"))
    cases_submenu.classList.toggle("open");

  if (contacts_cards.classList.contains("open"))
    contacts_cards.classList.toggle("open");

  popup.style.display = "none";
};

let contacts_link = document.querySelector(".comands");
let contacts_cards = document.querySelector(".cards");
let contacts_cards_clsoe = contacts_cards.querySelector(".popup_close");

contacts_link.onclick = () => {
  contacts_cards.classList.toggle("open");

  if (cases_submenu.classList.contains("open"))
    cases_submenu.classList.toggle("open");

  if (services_submenu.classList.contains("open"))
    services_submenu.classList.toggle("open");

  popup.style.display = "none";
};

contacts_cards_clsoe.onclick = () => {
  contacts_cards.classList.remove("open");
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
// page_loader.classList.add("open");

window.onload = () => {
  // page_loader.classList.remove("open");
};

let contact_list_email = document.querySelector(".contact_list_email");
let contact_form = document.querySelector(".contacts_form_popup");

contact_list_email.onclick = () => {
  if (!contact_form.classList.contains("open")) {
    if (!contact_form.classList.contains("close"))
      contact_form.classList.add("open");
  } else {
    contact_form.classList.add("close");
    setTimeout(() => {
      contact_form.classList.remove("close");
      contact_form.classList.remove("open");
    }, 1000);
  }
};

let copy_email = document.querySelector(".copy_email");
copy_email.onclick = () => {
  navigator.clipboard.writeText("example@mail.ru").then(() => {
    copy_email.innerHTML = "Email скопирован в буфер обмена";
    setTimeout(() => {
      copy_email.innerHTML = "example@mail.ru";
    }, 1500);
  });
};
