$(function() {

        // 3 var that hold the solitaire game
        var deck = [
                { name: "10 of clubs", image: "playing cards/png-cards-1.3/10_of_clubs.png" },
                { name: "10 of diamonds", image: "playing cards/png-cards-1.3/10_of_diamonds.png" },
                { name: "10 of hearts", image: "playing cards/png-cards-1.3/10_of_hearts.png" },
                { name: "10 of spades", image: "playing cards/png-cards-1.3/10_of_spades.png" },
                { name: "2 of clubs", image: "playing cards/png-cards-1.3/2_of_clubs.png" },
                { name: "2 of diamonds", image: "playing cards/png-cards-1.3/2_of_diamonds.png" },
                { name: "2 of hearts", image: "playing cards/png-cards-1.3/2_of_hearts.png" },
                { name: "2 of spades", image: "playing cards/png-cards-1.3/2_of_spades.png" },
                { name: "3 of clubs", image: "playing cards/png-cards-1.3/3_of_clubs.png" },
                { name: "3 of diamonds", image: "playing cards/png-cards-1.3/3_of_diamonds.png" },
                { name: "3 of hearts", image: "playing cards/png-cards-1.3/3_of_hearts.png" },
                { name: "3 of spades", image: "playing cards/png-cards-1.3/3_of_spades.png" },
                { name: "4 of clubs", image: "playing cards/png-cards-1.3/4_of_clubs.png" },
                { name: "4 of diamonds", image: "playing cards/png-cards-1.3/4_of_diamonds.png" },
                { name: "4 of hearts", image: "playing cards/png-cards-1.3/4_of_hearts.png" },
                { name: "4 of spades", image: "playing cards/png-cards-1.3/4_of_spades.png" },
                { name: "5 of clubs", image: "playing cards/png-cards-1.3/5_of_clubs.png" },
                { name: "5 of diamonds", image: "playing cards/png-cards-1.3/5_of_diamonds.png" },
                { name: "5 of hearts", image: "playing cards/png-cards-1.3/5_of_hearts.png" },
                { name: "5 of spades", image: "playing cards/png-cards-1.3/5_of_spades.png" },
                { name: "6 of hearts", image: "playing cards/png-cards-1.3/6_of_hearts.png" },
                { name: "6 of diamonds", image: "playing cards/png-cards-1.3/6_of_diamonds.png" },
                { name: "6 of hearts", image: "playing cards/png-cards-1.3/6_of_hearts.png" },
                { name: "6 of spades", image: "playing cards/png-cards-1.3/6_of_spades.png" },
                { name: "7 of clubs", image: "playing cards/png-cards-1.3/7_of_clubs.png" },
                { name: "7 of diamonds", image: "playing cards/png-cards-1.3/7_of_diamonds.png" },
                { name: "7 of hearts", image: "playing cards/png-cards-1.3/7_of_hearts.png" },
                { name: "7 of spades", image: "playing cards/png-cards-1.3/7_of_spades.png" },
                { name: "8 of clubs", image: "playing cards/png-cards-1.3/8_of_clubs.png" },
                { name: "8 of diamonds", image: "playing cards/png-cards-1.3/8_of_diamonds.png" },
                { name: "8 of hearts", image: "playing cards/png-cards-1.3/8_of_hearts.png" },
                { name: "8 of spades", image: "playing cards/png-cards-1.3/8_of_spades.png" },
                { name: "9 of clubs", image: "playing cards/png-cards-1.3/9_of_clubs.png" },
                { name: "9 of diamonds", image: "playing cards/png-cards-1.3/9_of_diamonds.png" },
                { name: "9 of hearts", image: "playing cards/png-cards-1.3/9_of_hearts.png" },
                { name: "9 of spades", image: "playing cards/png-cards-1.3/9_of_spades.png" },
                { name: "jack of clubs", image: "playing cards/png-cards-1.3/jack_of_clubs.png" },
                { name: "jack of diamonds", image: "playing cards/png-cards-1.3/jack_of_diamonds.png" },
                { name: "jack of hearts", image: "playing cards/png-cards-1.3/jack_of_hearts.png" },
                { name: "jack of spades", image: "playing cards/png-cards-1.3/jack_of_spades.png" },
                { name: "king of clubs", image: "playing cards/png-cards-1.3/king_of_clubs.png" },
                { name: "king of diamonds", image: "playing cards/png-cards-1.3/king_of_diamonds.png" },
                { name: "king of hearts", image: "playing cards/png-cards-1.3/king_of_hearts.png" },
                { name: "king of spades", image: "playing cards/png-cards-1.3/king_of_spades.png" },
                { name: "queen of clubs", image: "playing cards/png-cards-1.3/queen_of_clubs.png" },
                { name: "queen of diamonds", image: "playing cards/png-cards-1.3/queen_of_diamonds.png" },
                { name: "queen of hearts", image: "playing cards/png-cards-1.3/queen_of_hearts.png" },
                { name: "queen of spades", image: "playing cards/png-cards-1.3/queen_of_spades.png" },
                { name: "ace of clubs", image: "playing cards/png-cards-1.3/ace_of_clubs.png" },
                { name: "ace of diamonds", image: "playing cards/png-cards-1.3/ace_of_diamonds.png" },
                { name: "ace of hearts", image: "playing cards/png-cards-1.3/ace_of_hearts.png" },
                { name: "ace of spades", image: "playing cards/png-cards-1.3/ace_of_spades.png" }
            ]
            // Shuffled Deck //
        var shuffledDeck = "";

        // waste pale //
        var waste = []

        // holds the top 4 divs //
        var foundation = [
            { ace: [] },
            { diamonds: [] },
            { hearts: [] },
            { spades: [] }
        ];
        // playing field //
        var pile = [
            [''],
            ['', ''],
            ['', '', ''],
            ['', '', '', ''],
            ['', '', '', '', '']
        ];


        //counts the move
        // var moveCounter =
        //     counts the time
        // var time =
        //     keeps score
        // var score =

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

            var pile = [],
                i, a, b, startPoint, endpoint;
            var endPointArray = [0];
            for (i = 0, a = -1, b = 0; i < 15; i++) {
                if (i < 5) {
                    a++;
                    pile[a] = [];

                    var startFromEnd = endPointArray[endPointArray.length - 1];
                    b += 1;

                    startPoint = startFromEnd;
                    endpoint = startPoint + b;
                    endPointArray.push(endpoint);

                    pile[a].push(shuffledDeck.slice(startPoint, endpoint));
                }

            }


            pile.forEach(function(index, value) {
                index.forEach(function(index, value) {
                    index.forEach(function(index, value) {
                        var pileCard = $('<img  width="13vw" height="30vh" />');
                        $('.cardColumn').empty();
                        pileCard.attr('src', index.image);
                        $('.cardColumn').append(pileCard);
                        console.log(pile)
                    });



                });
            });


        };


///////////////////////// BUTTONS ////////////////////////////////////

// hide landing page //
$('button').on('click', function() {
    $('#user').on('change', function() {
        $('.land').fadeOut();
    })

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
        var newCard = $('<img  width="13vw" height="30vh" />');
        newCard.attr('src', nc.image);
        $('.start_deck').append(newCard);
    });
    shuffle(deck);
    distribute();
    // adds images from deck to pile //


});

// add images to waste //


// waste pile //
$('.solitaire').append('<div class="waste"</div>')


// foundation //
$('#foundation').append("<div id='hearts'/>");
$('#foundation').append("<div id='diamonds'/>");
$('#foundation').append("<div id='spades'/>");
$('#foundation').append("<div id='clubs'/>");

//////// START DECK ////////////

// $('.start_deck').on('click', function() {
// var shuffleedDeck = deck
//     for (var i = 0; i < shuffledDeck.length; i++) {
//         return waste.shift();
//     }
// })


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

// Connect Name //
var storeUserInfo = [];

$("#play").on('click', function(e) {
    var userName = $('#user').val();
    var storeEmail = $('#email').val();

})

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
