//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
}


let users;
const numberOfUsers = 7

// API Users & freinds
const promiseUsers = $.get(`https://randomuser.me/api/?results=${numberOfUsers}`, function (usersData) {

    users = usersData.results[Math.floor(Math.random() * usersData.results.length)]

}).then((users) => {
    const mainUser = users.results[0]
    $(".user-container").append("<div><img id = 'profile-pic' src =" + mainUser.picture.large + "></div>" + " " + "<div class = 'user-info'>" + mainUser.name.first + " " + mainUser.name.last + "<br>" + mainUser.location.city + ", " + mainUser.location.state + "</div></div>");
    
    const friends = users.results.slice(1)
    console.log(friends)
    const frindsMap = friends.map(f => {return `<ul > &#x2022; ${f.name.first} ${f.name.last} </ul>`})
    $(".friends-container").append(frindsMap)
})
    .catch(error => console.log(error))



// API Quotes
const promiseQuotes = $.get(`https://api.kanye.rest`).then((quotes) => {
    console.log(quotes)
    $("p").append(`<br><p class= 'quote-container'>"${quotes.quote}"<br>- Kanye West</p>`)
})
    .catch(error => console.log(error))



// API About me
const promiseAboutMe = $.get(`https://baconipsum.com/api/?type=all-meat&paras=1`)
    .then((aboutMe) => {
        $(".meat-text").append("<br>" + aboutMe)
    })
    .catch(error => console.log(error))


    
// API Pokemons
const numberOfPokemons = 949
const randomPokemon = Math.floor(Math.random() * numberOfPokemons)

const promisePokemon = $.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`).then((pokemons) => {
    console.log(pokemons)
    $(".pokemon-container").append("<img id='pokemon-image' src = "+ pokemons.sprites.front_default +">" +"<div id = 'pokemon-text'> Favorite Pokemon: " + pokemons.name + "</div>")
})
