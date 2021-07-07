// const accountSid = "AC89eea33beb0cdba3904928aabdacc386";
// const authToken = "e0b2e056c1b0f23218a926e5e1f6d031";
// const client = require("twilio")(accountSid, authToken);

// client.messages
//       .create({body: 'وشحالك', from: '+15406251825', to: '+213672829127'})
//       .then(message => console.log(message.body));
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
