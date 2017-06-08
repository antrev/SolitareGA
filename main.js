$(function() {
    console.log('here')

    // 3 var that hold the solitaire game
    var deck = [
            { name: "10 of clubs", image: "10_of_clubs.png" },
            { name: "10 of diamonds", image: "10_of_diamonds.png" },
            { name: "10 of hearts", image: "10_of_hearts.png" },
            { name: "10 of spades", image: "10_of_spades.png" },
            { name: "2 of clubs", image: "2 of clubs" },
            { name: "2 of diamonds", image: "2_of_diamonds.png" },
            { name: "2 of hearts", image: "2_of_hearts.png" },
            { name: "2 of spades", image: "2_of_spades.png" },
            { name: "3 of clubs", image: "3_of_clubs.png" },
            { name: "3 of diamonds", image: "3_of_diamonds.png" },
            { name: "3 of hearts", image: "3_of_hearts.png" },
            { name: "3 of spades", image: "3_of_spades.png" },
            { name: "4 of clubs", image: "4_of_clubs.png" },
            { name: "4 of diamonds", image: "4_of_diamonds.png" },
            { name: "4 of hearts", image: "4_of_hearts.png" },
            { name: "4 of spades", image: "4_of_spades.png" },
            { name: "5 of clubs", image: "5_of_clubs.png" },
            { name: "5 of diamonds", image: "5_of_diamonds.png" },
            { name: "5 of hearts", image: "5 _of_hearts.png" },
            { name: "5 of spades", image: "5_of_spades.png" },
            { name: "6 of hearts", image: "6_of_hearts.png" },
            { name: "6 of diamonds", image: "6_of_diamonds.png" },
            { name: "6 of hearts", image: "6_of_hearts.png" },
            { name: "6 of spades", image: "6_of_spades.png" },
            { name: "7 of clubs", image: "7_of_clubs.png" },
            { name: "7 of diamonds", image: "7_of_diamonds.png" },
            { name: "7 of hearts", image: "7_of_hearts.png" },
            { name: "7 of spades", image: "7_of_spades.png" },
            { name: "8 of clubs", image: "8_of_clubs.png" },
            { name: "8 of diamonds", image: "8_of_diamonds.png" },
            { name: "8 of hearts", image: "8_of_hearts.png" },
            { name: "8 of spades", image: "8_of_spades.png" },
            { name: "9 of clubs", image: "9_of_clubs.png" },
            { name: "9 of diamonds", image: "9_of_diamonds.png" },
            { name: "9 of hearts", image: "9_of_hearts.png" },
            { name: "9 of spades", image: "9_of_spades.png" },
            { name: "jack of clubs", image: "jack_of_clubs.png" },
            { name: "jack of diamonds", image: "jack_of_diamonds.png" },
            { name: "jack of hearts", image: "jack_of_hearts.png" },
            { name: "jack of spades", image: "jack_of_spades.png" },
            { name: "king of clubs", image: "king_of_clubs.png" },
            { name: "king of diamonds", image: "king_of_diamonds.png" },
            { name: "king of hearts", image: "king_of_hearts.png" },
            { name: "king of spades", image: "king_of_spades.png" },
            { name: "queen of clubs", image: "queen_of_clubs.png" },
            { name: "queen of diamonds", image: "queen_of_diamonds.png" },
            { name: "queen of hearts", image: "queen_of_hearts.png" },
            { name: "queen of spades", image: "queen_of_spades.png" },
            { name: "ace of clubs", image: "ace_of_clubs.png" },
            { name: "ace of diamonds", image: "ace_of_diamonds.png" },
            { name: "ace of hearts", image: "ace_of_hearts.png" },
            { name: "ace of spades", image: "ace_of_spades.png" }
        ]
       // waste pale 
        var waste = []

// holds the top 4 divs
    var foundation = [
    	{ace:[]},
    	{diamonds:[]},
    	{hearts:[]},
    	{spades:[]}
    ];
//playing field
    var pile = [
    	{colOne: []},
    	{colTwo: []},
    	{colThree: []},
    	{colFour: []},
    	{colFive: []}
    ];

    // }]
    // counts the move
    // var moveCounter = 
    //counts the time
    // var time = 
    //keeps score
    // var score = 


    //hide landing page
    $('button').click('click', function() {
        $('.land').hide(400);
    })

    // shuffles the deck
    function shuffle(deck) {
        var i = 0,
            j = 0,
            temp = []
        for (i = deck.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = deck[i]
            deck[i] = deck[j]
            deck[j] = temp
        }
    }

    //reset button
    $('.solitaire').append("<button class='submit'/>");
    $('.submit').on('click', function() {
  	

    });
 

    //start deck
    $(".solitaire").append("<div class='start_deck' />");

//foundation
$('#foundation').append("<div id='hearts'/>");
$('#foundation').append("<div id='diamonds'/>");
$('#foundation').append("<div id='spades'/>");
$('#foundation').append("<div id='clubs'/>");

    //css
    $()
    

















});
