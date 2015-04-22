$(function() {
    $( ".drag" ).draggable({ revert: "invalid" });
    $( "#dropzone" ).droppable({
      drop: function( event, ui ) {
        var item = event.toElement.id;
        $('#dropzone').html('You dropped '+item);
        validateThis(event);
        // $( this )
        //   .addClass( "ui-state-highlight" )
        //   .find( "p" )
        //     .html( "Dropped!" );
        
      }
    });
    var validateThis = function () {
       //do stuff
       
    }

    var picList =   [
                        {word: 'apple', file: 'apple1.jpg'},
                        {word: 'ball', file: 'ball.jpg'},
                        {word: 'cat', file: 'cat1.jpg'},
                        {word: 'cheese', file: 'cheese.jpg'},
                        {word: 'cloud', file: 'chris.jpg'},
                        {word: 'cow', file: 'cow1.jpg'},
                        {word: 'dog', file: 'dog1.jpg'},
                        {word: 'grass', file: 'grass.jpg'},
                        {word: 'hash', file: 'hash.jpg'},
                        {word: 'pepper', file: 'pepper.jpg'},
                        {word: 'rainbow', file: 'rainbow.jpg'},
                        {word: 'salt', file: 'salt.jpg'},
                        {word: 'worm', file: 'worm.jpg'},
                    ]

});

