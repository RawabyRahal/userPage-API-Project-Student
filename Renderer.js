const sourceUser = $('#user-template').html();
const templateUser = Handlebars.compile(sourceUser);

const sourceFriends = $('#freinds-template').html();
const templateFriends = Handlebars.compile(sourceFriends);

const sourceAboutme = $('#aboutme-template').html();
const templateAboutme = Handlebars.compile(sourceAboutme);

const sourceQuote = $('#quote-template').html();
const templateQuote = Handlebars.compile(sourceQuote);

const sourcePokemons = $('#pokemon-template').html();
const templatePokemons = Handlebars.compile(sourcePokemons);


class Renderer {
    constructor() {

    }

    renderData = function (data) {
        
        console.log(data.user)
        $('.user-container').empty()
        $('.friends-container').empty()
        $('.meat-container').empty()
        $('.quote-container').empty()
        $('.pokemon-container').empty()

        //user
        const newHTMLUser = templateUser(data);
        $('.user-container').append(newHTMLUser);

        // friends
        const newHTMLFriends = templateFriends(data);
        $('.friends-container').append(newHTMLFriends);

        // aboutMe
        const newHTMLAboutMe = templateAboutme(data);
        $('.meat-container').append(newHTMLAboutMe);

        // quote
        const newHTMLQuote = templateQuote(data);
        $('.quote-container').append(newHTMLQuote);

        // Pokemon
        data.pokemon.name = data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1)
        console.log(data.pokemon.name)
        const newHTMLPokemon = templatePokemons(data);
        // console.log(data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1))
        $('.pokemon-container').append(newHTMLPokemon);
    }
}

