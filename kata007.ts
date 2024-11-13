enum Category {
    "Électronique" = "Électronique",
    "Sport" = "Sport",
    "Livres" = "Livres"
}

type CategoryName = keyof typeof Category;

type Product = {
    id: number,
    name: string,
    category: CategoryName,
    price: number,
    rating: number
}

const products: Product[] = [
    { id: 1, name: "Smartphone XY", category: "Électronique", price: 799.99, rating: 4.6 },
    { id: 2, name: "Basketball Pro Ball", category: "Sport", price: 29.99, rating: 4.2 },
    { id: 3, name: "Casque Audio Sans Fil", category: "Électronique", price: 199.99, rating: 4.8 },
    { id: 4, name: "Série de Romans Fantasy", category: "Livres", price: 59.99, rating: 4.5 },
    { id: 5, name: "Montre Connectée", category: "Électronique", price: 249.99, rating: 4.4 },
];

function sortByRating(products: Product[]): Product[] {
    return products.toSorted((productA: Product, productB: Product) => productB.rating - productA.rating);
}

function filterByCategory(products: Product[], category: CategoryName): Product[] {
    return products.filter((product: Product) => product.category === category);
}

console.log(sortByRating(products));

console.log(filterByCategory(products, "Électronique"));