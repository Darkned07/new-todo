const list = document.getElementById("list");
const form = document.querySelector("form");
const input = document.querySelector("input");
const small = document.querySelector("small");
const span = document.querySelector("span");

function addItem(text) {
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "delete";
  button.setAttribute("id", "delete");
  item.textContent = text;
  item.classList.add("item");
  item.appendChild(button);
  list.appendChild(item);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim().length === 0) {
    alert("malumot kiritmadingiz qaytadan urunib koring.");
  } else if (input.value.trim().length < 4) {
    alert("malumot 4tadan kam qayta urunib koring.");
  } else {
    addItem(input.value);
    input.value = "";
    span.classList.add("span");
  }
});

function alert(message) {
  small.classList.remove("ad");
  small.textContent = message;
  setTimeout(() => {
    small.classList.add("ad");
  }, 2000);
}

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "delete") {
    e.target.parentElement.remove();
    if (e.target.getElementsByTagName("ul").length === 0) {
      span.classList.remove("span");
    }
  }
});
