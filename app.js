$(function(){
  
  $.get('https://www.reddit.com/r/aww/.json', function(somethingElse){
    

    for(i=0; i<=9; i++){
    var title = somethingElse.data.children[i].data.title;
    var storyTitle = $("<h3></h3>").text(title);

    var picThumb = somethingElse.data.children[i].data.thumbnail;
    //console.log(somethingElse.data.children[i].data);

    var storyImage = $("<img />").attr("src", picThumb);

        $('div').append([storyTitle, storyImage]);

    var picUrl = somethingElse.data.children[i].data.url;
    var titleLink = $("<a></a>").attr("href", picUrl);
    
    $(storyTitle).wrap(titleLink);

      }
  });
  
});