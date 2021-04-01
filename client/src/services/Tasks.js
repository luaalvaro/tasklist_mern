export function getTasks() {

    data = [];

    fetch('http://localhost:3000/')
    .then((response) => { data = response })
    .catch((error) => { console.log(error) })

    return data;
}