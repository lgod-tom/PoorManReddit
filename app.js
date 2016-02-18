$(function(){
  
  $.get('https://www.reddit.com/r/aww/.json', function(somethingElse){
    

    for(i=0; i<=9; i++){
    var title = somethingElse.data.children[i].data.title;
    var storyTitle = $("<h3></h3>").text(title);

    var picThumb = somethingElse.data.children[i].data.thumbnail;
    //console.log(somethingElse.data.children[i].data);

    var storyImage = $("<img />").attr("src", picThumb);
    var imgDiv = $("<div class='thumbImg'></div>");


       imgDiv.append([storyImage, storyTitle]);
       $(".inner").append(imgDiv);



    var picUrl = somethingElse.data.children[i].data.url;
    var titleLink = $("<a class='linkTitles'></a>").attr("href", picUrl);

    $(storyTitle).wrap(titleLink);

      }
  });
  
});