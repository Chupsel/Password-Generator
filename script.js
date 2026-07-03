const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", function () {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const length = Number(document.getElementById("length").value);

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";

  if (document.getElementById("uppercase").checked) characters += uppercase;
  if (document.getElementById("lowercase").checked) characters += lowercase;
  if (document.getElementById("numbers").checked) characters += numbers;
  if (document.getElementById("symbols").checked) characters += symbols;

  if (characters === "") {
    document.getElementById("message").textContent = "Choose at least one option.";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
  let strength = "Weak";

if (length >= 12 && characters.length > 30)
    strength = "Medium";

if (length >= 16 && characters.length > 60)
    strength = "Strong";

const strengthText = document.getElementById("strength");

strengthText.textContent = "Strength: " + strength;

if (strength === "Weak")
    strengthText.style.color = "#ef4444";

if (strength === "Medium")
    strengthText.style.color = "#f59e0b";

if (strength === "Strong")
    strengthText.style.color = "#22c55e";

  document.getElementById("message").textContent = "Password generated!";
}

function copyPassword() {
  const password = document.getElementById("password").value;

  if (password === "") {
    document.getElementById("message").textContent = "Generate a password first.";
    return;
  }

  navigator.clipboard.writeText(password);
  document.getElementById("message").textContent = "Copied!";
}
