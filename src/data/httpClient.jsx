// require('dotenv').config();
// const apiKey = process.env.API_KEY;
// console.log(apiKey)
const url = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(url + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzI4ZjU2MTZjY2YxZWYwMGYxYWY5MWUyMzYxNzNkNyIsInN1YiI6IjY0ZTcxOWY0NTI1OGFlMDBlYWEzNWYwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I2A3HXtDSb-VweCK0gTzGWEt4U7JxSyFBHMFjIGFnLU",
            "Content-type": "application/json; charset=utf-8",
        },
    }).then((result) => result.json());
}