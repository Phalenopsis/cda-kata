"use strict";
/**
 * Écris une fonction JavaScript filterByTitle qui prend en paramètre un tableau d'objets movies et une chaîne de caractères
 * searchedTitle .
 * Cette fonction doit retourner un nouveau tableau contenant uniquement les objets dont la propriété title contient la chaîne de
 * caractères searchedTitle spécifiée en paramètre et doit être insensible à la casse.
Tu pourras tester ta fonction sur ce tableau :
 */
Object.defineProperty(exports, "__esModule", { value: true });
var recentMovies = [
    {
        title: "The Great Adventure",
        releaseDate: "2023-07-15",
        actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"]
    },
    {
        title: "Lost in Time",
        releaseDate: "2023-05-22",
        actors: ["Clara Hughes", "Robert Smith", "Emily Stone"]
    },
    {
        title: "Mystery of the Blue Ocean",
        releaseDate: "2023-08-30",
        actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"]
    },
    {
        title: "Cybernetic",
        releaseDate: "2023-09-12",
        actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"]
    },
    {
        title: "The Hidden World",
        releaseDate: "2023-10-05",
        actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"]
    }
];
function filterByTitle(movies, searchedTitle) {
    return movies.filter(function (movie) { return movie.title.toUpperCase() == searchedTitle.toUpperCase(); });
}
console.log(filterByTitle(recentMovies, "Cybernetic"));
console.log(filterByTitle(recentMovies, "Cybernetics"));
console.log(filterByTitle(recentMovies, "CYBERNETIC"));
console.log(filterByTitle(recentMovies, ""));
