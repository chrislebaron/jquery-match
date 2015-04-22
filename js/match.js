$(function() {
  var score = 0;
  var picList =   [
                        {word: 'Apple', phrase: 'an apple', file: 'apple1.jpg'},
                        {word: 'Ball', phrase: 'a ball', file: 'ball.jpg'},
                        {word: 'Cat', phrase: 'a cat', file: 'cat1.jpg'},
                        {word: 'Cheese', phrase: 'cheese', file: 'cheese.jpg'},
                        {word: 'Cloud', phrase: 'a cloud', file: 'cloud1.jpg'},
                        {word: 'Cow', phrase: 'a cow', file: 'cow1.jpg'},
                        {word: 'Dog', phrase: 'a dog', file: 'dog1.png'},
                        {word: 'Grass', phrase: 'grass', file: 'grass.jpg'},
                        {word: 'Hash', phrase: 'a hash', file: 'hash.jpg'},
                        {word: 'Pepper', phrase: 'pepper', file: 'pepper.jpg'},
                        {word: 'Rainbow', phrase: 'a rainbow', file: 'rainbow1.png'},
                        {word: 'Salt', phrase: 'salt', file: 'salt.jpg'},
                        {word: 'Worm', phrase: 'a worm', file: 'worm.jpg'},
                    ]
    // Generate the page
    // Choose a random picture as an answer
    var generateGame = function() {
      $('#picture-div').empty();
      $('#feedback').html('Drag the picture that matches the word above to the box below.');
      var options = Array();

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
        $('#picture-div').append('<img id="'+options[i].word+'" class="drag" alt="'+options[i].phrase+'" src="images/'+options[i].file+'">')
      }
      // Move and validate stuff
    $( ".drag" ).draggable({ revert: "invalid" });
    $( "#dropzone" ).droppable({
      drop: function( event, ui ) {
        var item = event.toElement;
        
        validateThis(item);
        // $( this )
        //   .addClass( "ui-state-highlight" )
        //   .find( "p" )
        //     .html( "Dropped!" );
        
      }
    });
    var validateThis = function (item) {
      if(item.id===answer.word){
        console.log('Correct!');
        $('#feedback').html('Yes! This is '+item.alt+'!');
        $( ".drag" ).draggable("disable");
        $('#dropzone').addClass("answer-correct");
        score++;
        ;
      }
      else{
        console.log('Incorrect!');
        $('#feedback').html('Woah there. That is not '+answer.phrase+'. That was '+item.alt+'! Try again.');
        $(item).hide();
        $('#dropzone').addClass("answer-wrong");
        if(score>0){
          score--;
        }
      }
       console.log(score);
       
    }
    }
    generateGame();

    

});

