// Create a business name generator by combining list of adjectives and shop name and another word

/*
Adjectives:
crazy
Amazing 
fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros 
Limited
Hub
*/

function adj(shopname) {
    random = Math.random()

    switch (true) {
        case (random>0.8):
            return ('Crazy'+shopname)
            break;
        case (random>0.4):
            return ('Amazing' + shopname)
            break;
        case (random>0):
            return ('Fire' + shopname)
            break;
    
        default:
            return ('Cool' + shopname)
            break;
    }
}

function anotherWord(shopname) {
    random = Math.random()

    switch (true) {
        case (random>0.8):
            return (shopname+'Bros')
            break;
        case (random>0.4):
            return (shopname + 'Limited')
            break;
    
        default:
            return (shopname + 'Hub')
            break;
    }
}

function BNG(shopName) {
    let bng = adj(shopName)
    bng = anotherWord(bng)
    return bng
}

console.log(BNG(' Foods '));
