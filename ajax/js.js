$('document').ready(function(){


  function showCharacters(response) {
    var charactersArray = response.artists.items;

    charactersArray.forEach(function(theCaracter){
      var html = "<li>" + theCaracter.name + "</li>";
      $('.js-characters-list').append(html);
    });
  }

  function showImage(response){
    var charactersImage = response
    debugger


    charactersArray.forEach(function(theCaracter){
      var html = "<li>" + theCaracter.images + "</li>";
      $('.js-characters-list').append(html);
    });


    charactersArray.forEach(function(theCaracter){
      var html = "<li>" + theCaracter.name + "</li>";
      $('.js-characters-list').append(html);
    });
  }

  function handleError(error) {
    console.log(error.responseText);
  }

  $(".js-characters").click(function() {
    var nombre = $("input")
    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/search?type=artist&query=" + nombre.val(),
      showImage: showImage,
      success: showCharacters,
      error: handleError
    });
  });

});
