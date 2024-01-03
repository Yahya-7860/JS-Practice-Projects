const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const from = document.querySelector(".from");
let to = document.querySelector(".to");
const converter = document.querySelector(".conv");
const dropdown = document.querySelector("#dropdown option");
const dropdown2 = document.querySelector("#dropdown2 option");
let inform = document.querySelector(".inform");

converter.addEventListener("click", () => {
  let entered_data = from.value;
  let from_country = dropdown.innerText.toLowerCase();
  let to_country = dropdown2.innerText.toLowerCase();

  main();

  async function main() {
    let base=`${url}/${from_country}/${to_country}.json`;
    const response = await fetch(base);
    const data = await response.json();
    let rupee=Math.floor(data.inr);
    to.value=Math.floor(entered_data*data.inr) + " ₹";
    inform.style.opacity="1";
    inform.innerText=`1 USD = ${rupee} INR`;
  }

});
