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

});

