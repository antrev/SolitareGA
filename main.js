$(function() {
    console.log('here')

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
    // image array //
    var imgArr = shuffledDeck;
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
    var waste = "";
    var dragged = "";

    //counts the move
    // var moveCounter =
    //     counts the time
    // var time =
    //     keeps score
    // var score =

    // shuffles the deck //
    function shuffle(cards) {
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

    ///////////////////////// BUTTONS ////////////////////////////////////

    // hide landing page //
    $('button').click('click', function() {
        $('.land').hide(400);
    })

    // reset button //
    $('.solitaire').append("<button class='reset'/>");
    $('.reset').html('reset');
    $('.reset').on('click', function() {
    $('.start_deck').empty();
        shuffle(deck);
    $('.waste').append($('<img  width="13vw" height="30vh" />'));    
        distribute();
    });





    ////////// DECKS ////////////////////////

    // start deck //
    $(".solitaire").append("<div class='start_deck' >");
    $('.reset').click('click', function() {
        deck.forEach(function(nc) {
            var newCard = $('<img  width="13vw" height="30vh" />');
            newCard.attr('src', nc.image);
            $('.start_deck').append(newCard);
        });
    });
    // Distributes the shuffled cards onto the field //
    function distribute() {
        for (var i = 0; i < pile.length; i++) {
            for (var a = 0; a < pile[i].length; a++) {
                pile[i][a] = shuffledDeck[0]
                shuffledDeck.shift();
            }
        }
    }
    // adds images from waste to pile //
    $('.waste').on('click', function() {
        $("#colOne").append('<img  width="13vw" height="30vh"/>');
        $("#colTwo").append('<img  width="13vw" height="30vh"/>');
        $("#colThree").append('<img  width="13vw" height="30vh"/>');
        $("#colFour").append('<img  width="13vw" height="30vh"/>');
        $("#colFive").append('<img  width="13vw" height="30vh"/>');
    });

    // add images to waste //
    // $('.start_deck').on('click',function(){
    	 
    // 	 $('.waste').attr('src',c.image);
    // 	 $('.waste').append()
    //          })
    // waste pile //
$('.solitaire').append('<div class="waste"</div>')


    // foundation //
    $('#foundation').append("<div id='hearts'/>");
    $('#foundation').append("<div id='diamonds'/>");
    $('#foundation').append("<div id='spades'/>");
    $('#foundation').append("<div id='clubs'/>");

    //////// START DECK ////////////

    // $('.start_deck').on('click', function() {
    //     for (var i = 0; i < shuffledDeck.length; i++) {
    //         return waste.shift();
    //     }
    // })


    //////// PILE /////////////////

    // moves the cards from waste to pile //
    $('.waste').on('drag', function() {
        console.log('clicked');
        $('#colOne').drag('drop', function() {

        });
        $('#colTwo').drag('drop', function() {

        });
        $('#colThree').drag('drop', function() {

        });
        $('#colFour').drag('drop', function() {

        });
    })


    ////// LOGIC //////
    // $('.pile').trigger('click', function() {

    // })

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
        color: 'red'
    })



















});
