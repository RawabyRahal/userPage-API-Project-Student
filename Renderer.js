class Component {
    constructor(templateSelector, containerSelector) {
        this.template = Handlebars.compile($(templateSelector).html())
        this.container = $(containerSelector)
    }
    display(data) {
        this.container.empty()
        this.container.append(this.template(data));
    }
}

class Renderer {
    constructor() {
        this.userCompenent = new Component('#user-template', '.user-container')
        this.friendsCompenent = new Component('#freinds-template', '.friends-container')
        this.aboutmeCompenent = new Component('#aboutme-template', '.meat-container')
        this.quoteCompenent = new Component('#quote-template', '.quote-container')
        this.pokemonsCompenent = new Component('#pokemon-template', '.pokemon-container')
    }
    
    renderData = function (data) {
        data.pokemon.name = data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1)
        this.userCompenent.display(data)
        this.friendsCompenent.display(data)
        this.aboutmeCompenent.display(data)
        this.quoteCompenent.display(data)
        this.pokemonsCompenent.display(data)
    }
}