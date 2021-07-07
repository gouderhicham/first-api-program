
const catBtn = document.querySelector(".cat");
const catImg = document.querySelector(".cat-img");

catBtn.addEventListener("click", changePic);
// function
function changePic() {
  console.log("changing...");

  fetch("https://aws.random.cat/meow")
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      catImg.src = res.file;
      console.log("done");
    })
}
