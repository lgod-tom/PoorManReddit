$(function(){
  
  $.get('https://www.reddit.com/r/aww/.json', function(somethingElse){
    

    for(i=0; i<=9; i++){
    var title = somethingElse.data.children[i].data.title;
    var dogStory = $("<h1></h1>").text(title);

    var url = somethingElse.data.children[i].data.thumbnail;
    console.log(somethingElse.data.children[i].data);

    var dogImage = $("<img />").attr("src", url);
          $('div').append([dogStory, dogImage]);
      }
  });
  
});