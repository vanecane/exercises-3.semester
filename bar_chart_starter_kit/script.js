const list = document.querySelector("ul");
const valueArr = [];
setInterval(generateColumns, 1000);

function generateColumns() {
  const randomNum = Math.floor(Math.random() * 101);
  valueArr.push(randomNum);
  if (valueArr.length > 20) {
    //console.log("Nu er arrayet længere end 20");
    valueArr.shift();
  }
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  console.log("GENERATE COLUMNS", valueArr);
}
