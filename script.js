document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event triggered");

  const togglePasswordButton = document.querySelector(".toggle-password");

  togglePasswordButton.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const eyeImage = document.querySelector(".eye");
    if (eyeImage.src.includes("assets/invisible.png")) {
      passwordInput.type = "text";
      eyeImage.src = "assets/visible.png";
    } else {
      passwordInput.type = "password";
      eyeImage.src = "assets/invisible.png";
    }
  });
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("nome").value;
  const password = document.getElementById("password").value;
  const form = document.querySelector(".my-form");
  // var data = {
  // name: name,
  // hashed: hashPassword(password),
  // };
  form.style.display = "none";
  const popup = document.querySelector(".popup");
  popup.style.display = "flex";
});



const popup = document.querySelector(".popup");
const user = document.getElementById("nome").value;
popup.innerHTML = `
<p>Why would you even log in '${user}'?</p>
<p>There is nothing to see here</p>
<button class="continue">Continue the journey </button>
`;

const continueButton = document.querySelector(".continue");
let buttonClicked = false;
continueButton.addEventListener("click", function (event) {

  if (!buttonClicked) {
    popup.style.border = "none";
    popup.style.background = "var(--color-primary)";
    buttonClicked = true;
    popup.innerHTML = `
        <p>How brave!</p>
        <p>Are you sure?</p>
        <button class="continue">Actually continue :)</button>`;
  }
    console.log("Redirecting to actual.html");
    window.location.href = "actual.html";
});



