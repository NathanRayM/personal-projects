const numberInput = document.getElementById("numInput");
const generateBtn = document.getElementById("button");
const newPassword = document.getElementById("newPswrd");

function generatePassword(passLength) {
  let password = "";
  let charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return `New Password: ${password}`;
}

generateBtn.addEventListener("click", function () {
  newPassword.textContent = "";
  newPassword.classList.remove("error");

  const passLength = Number(numberInput.value);
  if (!passLength || passLength < 5 || passLength > 20) {
    newPassword.textContent = "Please enter a number between 5 and 20.";
    newPassword.classList.add("error");
    return;
  }

  const password = generatePassword(passLength);
  newPassword.textContent = password;
});
