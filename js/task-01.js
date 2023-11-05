// __________Number of categories__________

const categoryList = document.getElementById("categories");
const listItem = document.querySelectorAll(".item");
console.log("Number of categories:", listItem.length);

// __________Heading and elements number__________

const item = document.querySelectorAll("#categories .item");

item.forEach((item) => {
  const headerText = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("li").length;

  console.log(`Categories: ${headerText}`);
  console.log(`Elements: ${numberOfElements}`);
});
