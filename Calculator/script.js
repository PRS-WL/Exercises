var input = document.querySelector("input");

function addMe(element) {
  input.value += element.innerText;
}

function equal() {
  v = input.value;
  if (v.startsWith("0") && v.length > 1) {
    v = v.slice(1);
  }
  input.value = eval(v);
}

function clearMe(element) {
  input.value = "";
}
