$(function() {

    // 3 var that hold the solitaire game
    var deck = [
            { id: '10c', suite: 'clubs', color: 'black', value: 10, name: "10 of clubs", image: "playing_cards/png-cards-1.3/10_of_clubs.png" },
            { id: '10d', suite: 'diamonds', color: 'red', value: 10, name: "10 of diamonds", image: "playing_cards/png-cards-1.3/10_of_diamonds.png" },
            { id: '10h', suite: 'hearts', color: 'red', value: 10, name: "10 of hearts", image: "playing_cards/png-cards-1.3/10_of_hearts.png" },
            { id: '10s', suite: 'spades', color: 'black', value: 10, name: "10 of spades", image: "playing_cards/png-cards-1.3/10_of_spades.png" },
            { id: '2c', suite: 'clubs', color: 'black', value: 2, name: "2 of clubs", image: "playing_cards/png-cards-1.3/2_of_clubs.png" },
            { id: '2d', suite: 'diamonds', color: 'red', value: 2, name: "2 of diamonds", image: "playing_cards/png-cards-1.3/2_of_diamonds.png" },
            { id: '2h', suite: 'hearts', color: 'red', value: 2, name: "2 of hearts", image: "playing_cards/png-cards-1.3/2_of_hearts.png" },
            { id: '2s', suite: 'spades', color: 'black', value: 2, name: "2 of spades", image: "playing_cards/png-cards-1.3/2_of_spades.png" },
            { id: '3c', suite: 'clubs', color: 'black', value: 3, name: "3 of clubs", image: "playing_cards/png-cards-1.3/3_of_clubs.png" },
            { id: '3d', suite: 'diamonds', color: 'red', value: 3, name: "3 of diamonds", image: "playing_cards/png-cards-1.3/3_of_diamonds.png" },
            { id: '3h', suite: 'hearts', color: 'red', value: 3, name: "3 of hearts", image: "playing_cards/png-cards-1.3/3_of_hearts.png" },
            { id: '3s', suite: 'spades', color: 'black', value: 3, name: "3 of spades", image: "playing_cards/png-cards-1.3/3_of_spades.png" },
            { id: '4c', suite: 'clubs', color: 'black', value: 4, name: "4 of clubs", image: "playing_cards/png-cards-1.3/4_of_clubs.png" },
            { id: '4d', suite: 'diamonds', color: 'red', value: 4, name: "4 of diamonds", image: "playing_cards/png-cards-1.3/4_of_diamonds.png" },
            { id: '4h', suite: 'hearts', color: 'red', value: 4, name: "4 of hearts", image: "playing_cards/png-cards-1.3/4_of_hearts.png" },
            { id: '4s', suite: 'spades', color: 'black', value: 4, name: "4 of spades", image: "playing_cards/png-cards-1.3/4_of_spades.png" },
            { id: '5c', suite: 'clubs', color: 'black', value: 5, name: "5 of clubs", image: "playing_cards/png-cards-1.3/5_of_clubs.png" },
            { id: '5d', suite: 'diamonds', color: 'red', value: 5, name: "5 of diamonds", image: "playing_cards/png-cards-1.3/5_of_diamonds.png" },
            { id: '5h', suite: 'hearts', color: 'red', value: 5, name: "5 of hearts", image: "playing_cards/png-cards-1.3/5_of_hearts.png" },
            { id: '5s', suite: 'spades', color: 'red', value: 5, name: "5 of spades", image: "playing_cards/png-cards-1.3/5_of_spades.png" },
            { id: '6h', suite: 'hearts', color: 'red', value: 6, name: "6 of hearts", image: "playing_cards/png-cards-1.3/6_of_hearts.png" },
            { id: '6d', suite: 'diamonds', color: 'red', value: 6, name: "6 of diamonds", image: "playing_cards/png-cards-1.3/6_of_diamonds.png" },
            { id: '6h', suite: 'hearts', color: 'red', value: 6, name: "6 of hearts", image: "playing_cards/png-cards-1.3/6_of_hearts.png" },
            { id: '6s', suite: 'spades', color: 'black', value: 6, name: "6 of spades", image: "playing_cards/png-cards-1.3/6_of_spades.png" },
            { id: '7c', suite: 'clubs', color: 'black', value: 7, name: "7 of clubs", image: "playing_cards/png-cards-1.3/7_of_clubs.png" },
            { id: '7d', suite: 'diamonds', color: 'red', value: 7, name: "7 of diamonds", image: "playing_cards/png-cards-1.3/7_of_diamonds.png" },
            { id: '7h', suite: 'hearts', color: 'red', value: 7, name: "7 of hearts", image: "playing_cards/png-cards-1.3/7_of_hearts.png" },
            { id: '7s', suite: 'spades', color: 'black', value: 7, name: "7 of spades", image: "playing_cards/png-cards-1.3/7_of_spades.png" },
            { id: '8c', suite: 'clubs', color: 'black', value: 8, name: "8 of clubs", image: "playing_cards/png-cards-1.3/8_of_clubs.png" },
            { id: '8d', suite: 'diamonds', color: 'red', value: 8, name: "8 of diamonds", image: "playing_cards/png-cards-1.3/8_of_diamonds.png" },
            { id: '8h', suite: 'hearts', color: 'red', value: 8, name: "8 of hearts", image: "playing_cards/png-cards-1.3/8_of_hearts.png" },
            { id: '8s', suite: 'spades', color: 'black', value: 8, name: "8 of spades", image: "playing_cards/png-cards-1.3/8_of_spades.png" },
            { id: '9c', suite: 'clubs', color: 'black', value: 9, name: "9 of clubs", image: "playing_cards/png-cards-1.3/9_of_clubs.png" },
            { id: '9d', suite: 'diamonds', color: 'red', value: 9, name: "9 of diamonds", image: "playing_cards/png-cards-1.3/9_of_diamonds.png" },
            { id: '9h', suite: 'hearts', color: 'red', value: 9, name: "9 of hearts", image: "playing_cards/png-cards-1.3/9_of_hearts.png" },
            { id: '9s', suite: 'spades', color: 'black', value: 9, name: "9 of spades", image: "playing_cards/png-cards-1.3/9_of_spades.png" },
            { id: '11c', suite: 'clubs', color: 'black', value: 11, name: "jack of clubs", image: "playing_cards/png-cards-1.3/jack_of_clubs.png" },
            { id: '11d', suite: 'diamonds', color: 'red', value: 11, name: "jack of diamonds", image: "playing_cards/png-cards-1.3/jack_of_diamonds.png" },
            { id: '11h', suite: 'hearts', color: 'red', value: 11, name: "jack of hearts", image: "playing_cards/png-cards-1.3/jack_of_hearts.png" },
            { id: '11s', suite: 'spades', color: 'black', value: 11, name: "jack of spades", image: "playing_cards/png-cards-1.3/jack_of_spades.png" },
            { id: '13c', suite: 'clubs', color: 'black', value: 13, name: "king of clubs", image: "playing_cards/png-cards-1.3/king_of_clubs.png" },
            { id: '13d', suite: 'diamonds', color: 'red', value: 13, name: "king of diamonds", image: "playing_cards/png-cards-1.3/king_of_diamonds.png" },
            { id: '13h', suite: 'hearts', color: 'red', value: 13, name: "king of hearts", image: "playing_cards/png-cards-1.3/king_of_hearts.png" },
            { id: '13s', suite: 'spades', color: 'black', value: 13, name: "king of spades", image: "playing_cards/png-cards-1.3/king_of_spades.png" },
            { id: '12c', suite: 'clubs', color: 'black', value: 12, name: "queen of clubs", image: "playing_cards/png-cards-1.3/queen_of_clubs.png" },
            { id: '12d', suite: 'diamonds', color: 'red', value: 12, name: "queen of diamonds", image: "playing_cards/png-cards-1.3/queen_of_diamonds.png" },
            { id: '12h', suite: 'hearts', color: 'red', value: 12, name: "queen of hearts", image: "playing_cards/png-cards-1.3/queen_of_hearts.png" },
            { id: '12s', suite: 'spades', color: 'black', value: 12, name: "queen of spades", image: "playing_cards/png-cards-1.3/queen_of_spades.png" },
            { id: '1c', suite: 'clubs', color: 'black', value: 1, name: "ace of clubs", image: "playing_cards/png-cards-1.3/ace_of_clubs.png" },
            { id: '1d', suite: 'diamonds', color: 'red', value: 1, name: "ace of diamonds", image: "playing_cards/png-cards-1.3/ace_of_diamonds.png" },
            { id: '1h', suite: 'hearts', color: 'red', value: 1, name: "ace of hearts", image: "playing_cards/png-cards-1.3/ace_of_hearts.png" },
            { id: '1s', suite: 'spades', color: 'black', value: 1, name: "ace of spades", image: "playing_cards/png-cards-1.3/ace_of_spades.png" }
        ]
        // adding z-index to deck //
        // deck.each(function(index) {
        //     $('.start_deck').css('z-index', i + 1);
        // });

    // Shuffled Deck //
    var shuffledDeck = [];

    // waste pale //
    var waste = []

    // holds the top 4 divs //
    var foundation = [];


    //counts the move
    // var moveCounter =
    //     counts the time
    //     keeps score
    // var score =

    // Connect Name //
    var storeUserInfo = [];

    $("#play").on('click', function() {
        var userName = $('#user').val();
        var storeEmail = $('#email').val();
        $('#name').append(userName);
        $('.land').fadeOut();
    })

    // shuffles the deck //
    var shuffle = function(cards) {
        var i = 0
        var j = 0
        temp = []
        for (i = cards.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }
        shuffledDeck = deck;

        return temp;
    }

    // Distributes the shuffled cards onto the field //
    function distribute() {
        var pile = []
        for (var i = 0; i < 5; i++) {
            var cardColumn = shuffledDeck.slice(shuffledDeck.length - 1 - i);
            pile.push('.cardColumn');
        }


    } // end of distribution

    function drawPiles() {
        pile.forEach(function(value, index) {
            $('.cardColumn').append('<img />');

            pile.forEach(function(card) {
                $('.cardColumn').last();
                var newCard = $('<img class="cardColumn" />' + card.id);
                newCard.attr('src', card.image);
                $('.cardColumn').append(newCard);
            });
        });
    }




    ///////////////////////// BUTTONS ////////////////////////////////////

    // Instructions box //
    $('#instructions').on('click', function() {
        $('#rules').show();
    });
    $('#x').on('click',function(){
        $('#rules').fadeOut();

    })

    // reset button //
    $('.solitaire').append("<button class='reset'/>");
    $('.reset').html('reset');





    ////////// DECKS ////////////////////////

    // start deck //
    $(".solitaire").append("<div class='start_deck' >");
    $('.reset').click('click', function() {
        $('.start_deck').empty();
        deck.forEach(function(nc) {
            var newCard = $('<img  width="16vw" height="30vh" />');
            newCard.attr('src', nc.image);
            $('.start_deck').append(newCard);
        });
        shuffle(deck);
        distribute();

    });


    // waste pile //
    $('.solitaire').append('<div class="waste"</div>')


    // foundation //
    $('#foundation').append("<div id='hearts'/>");
    $('#foundation').append("<div id='diamonds'/>");
    $('#foundation').append("<div id='spades'/>");
    $('#foundation').append("<div id='clubs'/>");

    //////// START DECK ////////////



    //////// PILE /////////////////

    // moves the cards from waste to pile //
    $('.waste').on('click', function() {

        $('#colOne').on('click', function() {
            $('').append();
        });
        $('#colTwo').on('click', function() {
            $('.waste').append();
        });
        $('#colThree').on('click', function() {
            $('.waste').append();
        });
        $('#colFour').on('click', function() {
            $('.waste').append();
        });
    })


    ////// LOGIC //////
    function validateMove(start_deck, pile) {
        if (start_deck.color !== pile.color && (start_deck.value === pile.value - 1)) {
            return true
        } else {
            return false
        }
    }


    // check for win //
    function checkForWin() {
        if ($('#foundation').length === 52)
            alert('You win');
    }


    ///////  CSS ///////////////
    $('.start_deck').css({
        display: 'inline-block',
        width: '13vw',
        height: '30vh',
        backgroundColor: 'transparent',
        boxSize: 'content-box'
    })

    $('.waste').css({
        display: 'inline-block',
        width: '13vw',
        height: '30vh',
    })

    $('.reset').css({
        position: 'relative',
        bottom: '26vh',
        width: '8vw',
        height: '3vw',
        fontWeight: '800',
        fontSize: '100%',
        color: 'red',
        backgroundColor: "transparent",
    })



















});
