const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.children;

console.log(Number of categories: ${categoriesItems.length});

for (const item of categoriesItems) {
const categoryTitle = item.firstElementChild.textContent;
const categoryElements = item.lastElementChild.children.length;
console.log(Category: ${categoryTitle});
console.log(Elements: ${categoryElements});
}