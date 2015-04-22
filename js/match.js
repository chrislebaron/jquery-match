$(function() {

  var picList =   [
                        {word: 'apple', file: 'apple1.jpg'},
                        {word: 'ball', file: 'ball.jpg'},
                        {word: 'cat', file: 'cat1.jpg'},
                        {word: 'cheese', file: 'cheese.jpg'},
                        {word: 'cloud', file: 'cloud1.jpg'},
                        {word: 'cow', file: 'cow1.jpg'},
                        {word: 'dog', file: 'dog1.png'},
                        {word: 'grass', file: 'grass.jpg'},
                        {word: 'hash', file: 'hash.jpg'},
                        {word: 'pepper', file: 'pepper.jpg'},
                        {word: 'rainbow', file: 'rainbow1.png'},
                        {word: 'salt', file: 'salt.jpg'},
                        {word: 'worm', file: 'worm.jpg'},
                    ]
    // Generate the page
    // Choose a random picture as an answer
    var generateGame = function() {
      $('#picture-div').empty();
      options = Array();
      var answer = picList[Math.floor(Math.random() * picList.length)];
      options.push(answer);
      $('#vocab-div h3').html(answer.word);

      // Choose two more as options
      var numOptions=3;
      var renderOptions = function(numOptions){
        for(i=0; options.length<numOptions;){
          var random = picList[Math.floor(Math.random() * picList.length)];
          if($.inArray(random,options)===-1){
             options.push(random);
          }
        }  
      }
      renderOptions(numOptions);
      // Shuffle!
      options = shuffle(options);


      for(i=0; i<options.length; i++){
        item=i+1;
        $('#picture-div').append('<img id="'+options[i].word+'" class="drag" src="images/'+options[i].file+'">')
      }
      // Move and validate stuff
    $( ".drag" ).draggable({ revert: "invalid" });
    $( "#dropzone" ).droppable({
      drop: function( event, ui ) {
        var item = event.toElement.id;
        
        validateThis(item);
        // $( this )
        //   .addClass( "ui-state-highlight" )
        //   .find( "p" )
        //     .html( "Dropped!" );
        
      }
    });
    var validateThis = function (item) {
      if(item===answer.word){
        console.log('Correct!');
        $('#dropzone').html('Yes! That is a(n) '+item);
      }
      else{
        console.log('Incorrect!');
        $('#dropzone').html('Woah there. That is not a '+answer.word+'. That is a '+item+'! Try again.');
      }
       //do stuff
       
    }
    }
    generateGame();

    

});

