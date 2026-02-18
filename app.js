const WHATSAPP_NUMBER = "5493812488134"; // solo números
const INSTAGRAM = "cosmos.impresiones";
const CITY = "San Miguel de Tucumán,Tucumán,Argentina";

const makeWaLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const msgBase = "Hola! Soy de Cosmos Impresiones. Quiero consultar por: ";

// Botones WhatsApp
document.querySelector("#waHero").href = makeWaLink(msgBase + "un pedido");
document.querySelector("#waFooter").href = makeWaLink("Hola! Quiero hacer un pedido 😊");
document.querySelector("#waFloat").href = makeWaLink("Hola! Me pasás info y precios?");

// Texto WhatsApp visible
document.querySelector("#waText").textContent = "+" + WHATSAPP_NUMBER;

// Menú mobile
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("is-open"));

// Consultas por producto
document.querySelectorAll(".add").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    window.open(makeWaLink(msgBase + name + ". (Precios: consultar)"), "_blank");
  });
});

// Form -> WhatsApp
const form = document.querySelector("#contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const product = data.get("product");
  const details = data.get("details");

  const text =
    `Hola! Soy ${name}.\n` +
    `Producto: ${product}.\n` +
    `Detalles: ${details}\n` +
    `Ciudad: ${CITY}.\n` +
    `Instagram: @${INSTAGRAM}`;

  window.open(makeWaLink(text), "_blank");
  form.reset();
});

// Año
document.querySelector("#year").textContent = new Date().getFullYear();
