const insertTask = document.getElementById("form1"); // salvo un riferimento al form in una variabile

insertTask.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`ora va`, e);
  const task = document.getElementById(`task`);
  console.log(task.value);

  const taskToAdd = task.value;
  const div1 = document.createElement(`div`);
  div1.classList.add(`taskBlock`);
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  div1.innerHTML = `
  <ul><li>${taskToAdd}  <br>
  <button onclick="deleteButton(event)" id="deleteButton">Delete task</button></li></ul>`;
  task.value = ``;
  div1.style.color = `rgb(${a},${b},${c})`;
  const list = document.getElementById(`list`);
  list.appendChild(div1);
  div1.addEventListener(`click`, function (e) {
    div1.style.textDecorationLine = `line-through`;
    div1.style.color = `red`;
  });
});
const deleteButton = function (e) {
  const button1 = e.target;
  button1.parentElement.remove();
};

// const rexet = function () {
//   const rex = document.getElementsByClassName(`list`);
//   rex.remove();
// };
