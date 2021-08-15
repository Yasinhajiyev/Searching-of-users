const requestURL = 'https://jsonplaceholder.typicode.com/users';
const searchBar = document.getElementById("searchBar")
const users = document.querySelector(".users ul")
const list = document.createElement("li")
let data = []

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredUsers = data.filter(eachuser => {
        return (
            eachuser.name.includes(searchString) ||
            eachuser.email.includes(searchString)
        );
    })
    user(filteredUsers)
})

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        user(data)
    }
}
xhr.open('GET', requestURL)
xhr.send()

const user = (data) => {

    const htmlstrings = data.map((user) => {
        return `
            <li><h2>${user.name}</h2>
            <h2>${user.email}</h2>
            </li>
            `
    })

    list.innerHTML = htmlstrings;
    users.append(list)

}