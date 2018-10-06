import config from "../../config/config";
import store from "../store";

const baseURL = config.env().domain + config.env().api_path;

export function get(path) {
    // console.log('=> ' + store.state.token)
    return fetch(`${baseURL}/${path}`, {
        method: "GET",
        headers: new Headers({
            'Content-type': "application/json; charset=UTF-8",
            'Authorization': `Bearer ${store.state.token}`
        })
    }).then(response => response.json());
}

export function post(path, data) {
    return fetch(`${baseURL}/${path}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': "application/json; charset=UTF-8",
            'Authorization': `Bearer ${store.state.token}`
        }
    }).then(response => response.json())
}