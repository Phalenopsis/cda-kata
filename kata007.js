var Category;
(function (Category) {
    Category["\u00C9lectronique"] = "\u00C9lectronique";
    Category["Sport"] = "Sport";
    Category["Livres"] = "Livres";
})(Category || (Category = {}));
var products = [
    { id: 1, name: "Smartphone XY", category: "Électronique", price: 799.99, rating: 4.6 },
    { id: 2, name: "Basketball Pro Ball", category: "Sport", price: 29.99, rating: 4.2 },
    { id: 3, name: "Casque Audio Sans Fil", category: "Électronique", price: 199.99, rating: 4.8 },
    { id: 4, name: "Série de Romans Fantasy", category: "Livres", price: 59.99, rating: 4.5 },
    { id: 5, name: "Montre Connectée", category: "Électronique", price: 249.99, rating: 4.4 },
];
function sortByRating(products) {
    return products.sort(function (productA, productB) { return productB.rating - productA.rating; });
}
function filterByCategory(products, category) {
    return products.filter(function (product) { return product.category === category; });
}
console.log(sortByRating(products));
console.log(filterByCategory(products, "Électronique"));
