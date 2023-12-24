const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#results");
  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Invalid input";
  } else if (weight == "" || weight < 0 || isNaN(weight))
   {
    result.innerHTML = "Invalid input";
  } else {
    const output = (weight / (height ** 2 / 1000)).toFixed(2);
    if (output < 18.6) {
      result.innerHTML = ` BMI: <span>${output}<span/> : Under Weight `;
    } else if (24.9 > output > 18.6)
     {
      result.innerHTML = ` BMI: <span>${output}<span/> : Normal Range `;
    } else if (output > 24.9)
     {
      result.innerHTML = ` BMI: <span>${output}<span/> : OverWeight `;
    }
  }
});
