function shuffleDeck(a) {
    var j, x, i;
    var a = [
        { id: '10c', suite: 'clubs', color: 'black', value: '10', name: "10 of clubs", image: "playing_cards/png-cards-1.3/10_of_clubs.png" },
        { id: '10d', suite: 'diamonds', color: 'red', value: '10', name: "10 of diamonds", image: "playing_cards/png-cards-1.3/10_of_diamonds.png" },
        { id: '10h', suite: 'hearts', color: 'red', value: '10', name: "10 of hearts", image: "playing_cards/png-cards-1.3/10_of_hearts.png" },
        { id: '10s', suite: 'spades', color: 'black', value: '10', name: "10 of spades", image: "playing_cards/png-cards-1.3/10_of_spades.png" },
        { id: '2c', suite: 'clubs', color: 'black', value: '2', name: "2 of clubs", image: "playing_cards/png-cards-1.3/2_of_clubs.png" },
        { id: '2d', suite: 'diamonds', color: 'red', value: '2', name: "2 of diamonds", image: "playing_cards/png-cards-1.3/2_of_diamonds.png" },
        { id: '2h', suite: 'hearts', color: 'red', value: '2', name: "2 of hearts", image: "playing_cards/png-cards-1.3/2_of_hearts.png" },
        { id: '2s', suite: 'spades', color: 'black', value: '2', name: "2 of spades", image: "playing_cards/png-cards-1.3/2_of_spades.png" },
        { id: '3c', suite: 'clubs', color: 'black', value: '3', name: "3 of clubs", image: "playing_cards/png-cards-1.3/3_of_clubs.png" },
        { id: '3d', suite: 'diamonds', color: 'red', value: '3', name: "3 of diamonds", image: "playing_cards/png-cards-1.3/3_of_diamonds.png" },
        { id: '3h', suite: 'hearts', color: 'red', value: '3', name: "3 of hearts", image: "playing_cards/png-cards-1.3/3_of_hearts.png" },
        { id: '3s', suite: 'spades', color: 'black', value: '3', name: "3 of spades", image: "playing_cards/png-cards-1.3/3_of_spades.png" },
        { id: '4c', suite: 'clubs', color: 'black', value: '4', name: "4 of clubs", image: "playing_cards/png-cards-1.3/4_of_clubs.png" },
        { id: '4d', suite: 'diamonds', color: 'red', value: '4', name: "4 of diamonds", image: "playing_cards/png-cards-1.3/4_of_diamonds.png" },
        { id: '4h', suite: 'hearts', color: 'red', value: '4', name: "4 of hearts", image: "playing_cards/png-cards-1.3/4_of_hearts.png" },
        { id: '4s', suite: 'spades', color: 'black', value: '4', name: "4 of spades", image: "playing_cards/png-cards-1.3/4_of_spades.png" },
        { id: '5c', suite: 'clubs', color: 'black', value: '5', name: "5 of clubs", image: "playing_cards/png-cards-1.3/5_of_clubs.png" },
        { id: '5d', suite: 'diamonds', color: 'red', value: '5', name: "5 of diamonds", image: "playing_cards/png-cards-1.3/5_of_diamonds.png" },
        { id: '5h', suite: 'hearts', color: 'red', value: '5', name: "5 of hearts", image: "playing_cards/png-cards-1.3/5_of_hearts.png" },
        { id: '5s', suite: 'spades', color: 'red', value: '5', name: "5 of spades", image: "playing_cards/png-cards-1.3/5_of_spades.png" },
        { id: '6h', suite: 'hearts', color: 'red', value: '6', name: "6 of hearts", image: "playing_cards/png-cards-1.3/6_of_hearts.png" },
        { id: '6d', suite: 'diamonds', color: 'red', value: '6', name: "6 of diamonds", image: "playing_cards/png-cards-1.3/6_of_diamonds.png" },
        { id: '6h', suite: 'hearts', color: 'red', value: '6', name: "6 of hearts", image: "playing_cards/png-cards-1.3/6_of_hearts.png" },
        { id: '6s', suite: 'spades', color: 'black', value: '6', name: "6 of spades", image: "playing_cards/png-cards-1.3/6_of_spades.png" },
        { id: '7c', suite: 'clubs', color: 'black', value: '7', name: "7 of clubs", image: "playing_cards/png-cards-1.3/7_of_clubs.png" },
        { id: '7d', suite: 'diamonds', color: 'red', value: '7', name: "7 of diamonds", image: "playing_cards/png-cards-1.3/7_of_diamonds.png" },
        { id: '7h', suite: 'hearts', color: 'red', value: '7', name: "7 of hearts", image: "playing_cards/png-cards-1.3/7_of_hearts.png" },
        { id: '7s', suite: 'spades', color: 'black', value: '7', name: "7 of spades", image: "playing_cards/png-cards-1.3/7_of_spades.png" },
        { id: '8c', suite: 'clubs', color: 'black', value: '8', name: "8 of clubs", image: "playing_cards/png-cards-1.3/8_of_clubs.png" },
        { id: '8d', suite: 'diamonds', color: 'red', value: '8', name: "8 of diamonds", image: "playing_cards/png-cards-1.3/8_of_diamonds.png" },
        { id: '8h', suite: 'hearts', color: 'red', value: '8', name: "8 of hearts", image: "playing_cards/png-cards-1.3/8_of_hearts.png" },
        { id: '8s', suite: 'spades', color: 'black', value: '8', name: "8 of spades", image: "playing_cards/png-cards-1.3/8_of_spades.png" },
        { id: '9c', suite: 'clubs', color: 'black', value: '9', name: "9 of clubs", image: "playing_cards/png-cards-1.3/9_of_clubs.png" },
        { id: '9d', suite: 'diamonds', color: 'red', value: '9', name: "9 of diamonds", image: "playing_cards/png-cards-1.3/9_of_diamonds.png" },
        { id: '9h', suite: 'hearts', color: 'red', value: '9', name: "9 of hearts", image: "playing_cards/png-cards-1.3/9_of_hearts.png" },
        { id: '9s', suite: 'spades', color: 'black', value: '9', name: "9 of spades", image: "playing_cards/png-cards-1.3/9_of_spades.png" },
        { id: '11c', suite: 'clubs', color: 'black', value: '11', name: "jack of clubs", image: "playing_cards/png-cards-1.3/jack_of_clubs.png" },
        { id: '11d', suite: 'diamonds', color: 'red', value: '11', name: "jack of diamonds", image: "playing_cards/png-cards-1.3/jack_of_diamonds.png" },
        { id: '11h', suite: 'hearts', color: 'red', value: '11', name: "jack of hearts", image: "playing_cards/png-cards-1.3/jack_of_hearts.png" },
        { id: '11s', suite: 'spades', color: 'black', value: '11', name: "jack of spades", image: "playing_cards/png-cards-1.3/jack_of_spades.png" },
        { id: '13c', suite: 'clubs', color: 'black', value: '13', name: "king of clubs", image: "playing_cards/png-cards-1.3/king_of_clubs.png" },
        { id: '13d', suite: 'diamonds', color: 'red', value: '13', name: "king of diamonds", image: "playing_cards/png-cards-1.3/king_of_diamonds.png" },
        { id: '13h', suite: 'hearts', color: 'red', value: '13', name: "king of hearts", image: "playing_cards/png-cards-1.3/king_of_hearts.png" },
        { id: '13s', suite: 'spades', color: 'black', value: '13', name: "king of spades", image: "playing_cards/png-cards-1.3/king_of_spades.png" },
        { id: '12c', suite: 'clubs', color: 'black', value: '12', name: "queen of clubs", image: "playing_cards/png-cards-1.3/queen_of_clubs.png" },
        { id: '12d', suite: 'diamonds', color: 'red', value: '12', name: "queen of diamonds", image: "playing_cards/png-cards-1.3/queen_of_diamonds.png" },
        { id: '12h', suite: 'hearts', color: 'red', value: '12', name: "queen of hearts", image: "playing_cards/png-cards-1.3/queen_of_hearts.png" },
        { id: '12s', suite: 'spades', color: 'black', value: '12', name: "queen of spades", image: "playing_cards/png-cards-1.3/queen_of_spades.png" },
        { id: '1c', suite: 'clubs', color: 'black', value: '1', name: "ace of clubs", image: "playing_cards/png-cards-1.3/ace_of_clubs.png" },
        { id: '1d', suite: 'diamonds', color: 'red', value: '1', name: "ace of diamonds", image: "playing_cards/png-cards-1.3/ace_of_diamonds.png" },
        { id: '1h', suite: 'hearts', color: 'red', value: '1', name: "ace of hearts", image: "playing_cards/png-cards-1.3/ace_of_hearts.png" },
        { id: '1s', suite: 'spades', color: 'black', value: '1', name: "ace of spades", image: "playing_cards/png-cards-1.3/ace_of_spades.png" }
    ]
    
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}

function drawPiles(piles) {
    piles.forEach(function(pile) {
        $('.piles').append('<div class="pile" />');

        pile.forEach(function(card) {
            var $pile = $('.pile').last();
            var newCard = $('<img class="card" card_id=' + card.id + ' />');
            newCard.attr('src', card.image);
            $pile.append(newCard);
        });
    });
}

function drawDeck(deck) {
    var card = deck[deck.length - 1]
    var newCard = $('<img class="card" card_id=' + card.id + ' />');
    newCard.attr('src', card.image);
    $('.deck').append(newCard);
}

$(document).ready(function() {
    var deck = shuffleDeck(),
        piles = [];

    for (var i = 1; i < 6; i++) {
        var pile = deck.splice(deck.length - 1 - i, i);
        piles.push(pile);
    }

    drawDeck(deck);
    drawPiles(piles);
});
