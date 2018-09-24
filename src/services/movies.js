let movies = [
    { title: "Terminator", genre: "Action", stock: 7, rate: 5 }, 
    { title: "Titanic", genre: "Drama", stock: 2, rate: 2 }, 
    { title: "Omen", genre: "Horror", stock: 1, rate: 3.5 }, 
    { title: "Jigsaw", genre: "Horror", stock: 9, rate: 4.5 }, 
    { title: "Jurassic Park", genre: "Action", stock: 5, rate: 4 }, 
    { title: "Meg", genre: "Action", stock: 5, rate: 4.5 }, 
    { title: "Baby", genre: "Drama", stock: 4, rate: 1 }, 
    { title: "Sex in City", genre: "Comedy", stock: 3, rate: 3.5 }, 
    { title: "MamaMia", genre: "Musical", stock: 10, rate: 5 }, 
    { title: "Vasya", genre: "Comedy", stock: 12, rate: 4 }, 
    { title: "Lolita", genre: "Drama", stock: 6, rate: 2.5 }, 
    { title: "Hatiko", genre: "Drama", stock: 3, rate: 3 } 
];

export const getMovies = () => {
    return movies;
}

export const addMovie = movie => {
    movies.push(movie);
}