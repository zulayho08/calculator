var form = document.querySelector(`.form`);
var input = document.getElementById(`input`);
var input1 = document.getElementById(`input1`);
var list = document.getElementById(`list`);
var option = document.querySelector(`.option`);
var select = document.getElementById(`select`);
var result = document.getElementById(`result`);

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (select.value == "+") {
    result.value = Number(input.value) + Number(input1.value);
  } else if (select.value == "-") {
    result.value = Number(input.value) - Number(input1.value);
  } else if (select.value == "*") {
    result.value = Number(input.value) * Number(input1.value);
  } else if (select.value == "/") {
    result.value = Number(input.value) / Number(input1.value);
  } else {
    result.value = "False";
  }

  var item = document.createElement(`li`);
  item.textContent = ` ${input.value}  ${select.value}  ${input1.value} = ${result.value}`;
  list.append(item);
  input.value = "";
  input1.value = "";
});
