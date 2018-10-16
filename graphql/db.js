let movies = [
    {
        id: 0,
        name: "Life is beutiful",
        score: 10
    },
    {
        id: 1,
        name: "E.T.",
        score: 9
    },
    {
        id: 2,
        name: "Yongari",
        score: 2
    },
    {
        id: 3,
        name: "D-war",
        score: 3
    }
];

export const getMovies = () => movies;

export const getById = id  => {
    const filteredMovie= movies.filter(movie => id === movie.id);
    return filteredMovie[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}