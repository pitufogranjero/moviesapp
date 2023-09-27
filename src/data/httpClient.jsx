require('dotenv').config();
const apiKey = process.env.API_KEY;
const url = "https://api.themoviedb.org/3";
console.log(apiKey)

export function get(path){
    return fetch(url + path, {
        headers: {
            Authorization: apiKey,
            "Content-type": "application/json; charset=utf-8",
        },
    }).then((result) => result.json());
}