/*
    // Auth: Md Fokhrul Islam
    // Des : This Program with help to find the discounted prices of three books and also show the main price of the books.
*/
// Element Selector
const button = document.querySelector(".button");
let totalPrice = null;
// Calculate total discound Function
function calculateTotalDiscountedPrice(price1, price2, price3) {
  totalPrice = price1 + price2 + price3;
  let discountPercentage = 0;
  // Get the percentage range of Discount
  if (totalPrice >= 2000) {
    discountPercentage = 10;
  } else if (totalPrice >= 1000) {
    discountPercentage = 5;
  }
  //   Calculate The Discounted Amount
  const discountAmount = (discountPercentage / 100) * totalPrice;
  const totalDiscountedPrice = totalPrice - discountAmount;
  return totalDiscountedPrice;
}
// An EventListener will fired after clicked the calculator button and show the  pricees
button.addEventListener("click", () => {
  // Element Selector
  const book1 = parseFloat(document.querySelector("#book1").value) || 0;
  const book2 = parseFloat(document.querySelector("#book2").value) || 0;
  const book3 = parseFloat(document.querySelector("#book3").value) || 0;
  const mainPrice = document.querySelector(".main-price");
  const disPrice = document.querySelector(".discounted-price");

  // Main Function Called to find the discound of three Books
  const totalDiscountedPrice = calculateTotalDiscountedPrice(
    book1,
    book2,
    book3
  );
  //   Get Result of Main Prices and Discounted Prices
  if (totalPrice < 1000) {
    const result = Math.round(totalPrice);
    mainPrice.innerHTML = `Total Books Price: <span> ${result} </span> Taka`;
    disPrice.innerHTML = `You don't have discount`;
  } else {
    const result = Math.round(totalPrice);
    const result2 = Math.round(totalDiscountedPrice);
    mainPrice.innerHTML = `Total Books Price: <del> ${result}</del> Taka`;
    disPrice.innerHTML = `Discounted Price: <span> ${result2} </span> Taka`;
  }
});
