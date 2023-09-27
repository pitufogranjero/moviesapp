require('dotenv').config();
const apiKey = process.env.API_KEY;
console.log(apiKey)

const url = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(url + path, {
        headers: {
            Authorization: apiKey,
            "Content-type": "application/json; charset=utf-8",
        },
    }).then((result) => result.json());
}