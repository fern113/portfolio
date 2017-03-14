$(document).ready( function() 
{
   $.ajax({
      method: "GET",
      cache: false,
      url:"./fern.json",
      dataType: "json",
      success: success,
      error : error
   });
   
});

function myProject(data){
    var htmlString = '<div class= "myProject"></div>';
         htmlString += '<h2 class="myP"> +data.name+</h2>';
          htmlString += '<li id="tic-tac-toe"> </li>';
           htmlString += '<li id="counter"></li>';
            htmlString += '<li id="portfolio"> </li>';
             htmlString += '</div>';
    return  htmlString;
}

function error() {
    alert ("error");
}
   
function  success(data) {
  for (i=0; i<=data.length; i++);{
    alert(data[i].title);
  } 
}
	