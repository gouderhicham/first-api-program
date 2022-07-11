let link = document.querySelector("a");
let img = document.querySelector("div");
link.addEventListener("click", changeUrl);
async function changeUrl() {
    let statement = ""
  statement = "changing"
  console.log(statement);
  const url = await fetch("https://aws.random.cat/meow");
  const http = await url.json();
  const file = await http.file;
  img.style.backgroundImage = `url(${file})`;
  statement = "done"
  console.log(statement);
  if (statement = "changing") {
    link.innerHTML =  "ffe"
  }
  else{
    link.innerHTML = "Click Me"
  }
}