$(document).ready(function() 
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


function error() {
    alert ("error");
}
   
function  success(data) {
  for (i=0; i<=data.length; i++) {
    
    document.getElementById("link1").href=data[0].url;
    document.getElementById("pic1").src=data[0].thumb;
    document.getElementById("link2").href=data[1].url;
    document.getElementById("pic2").src=data[1].thumb;
    document.getElementById("link3").href=data[2].url;
    document.getElementById("pic3").src=data[2].thumb;
    document.getElementById("link4").href=data[3].url;
    document.getElementById("pic4").src=data[3].thumb;
        //alert (data[i].title);
        //renderProject(data);
  } 
}
/*function renderProject(data)
{
    $('#pic1').html(jsonObject.thumb[1]);
   document.getElementById("pic1").src = data[0].thumb;
   document.getElementById("pic2").src = data[1].thumb;
   document.getElementById("pic4").src = data[3].thumb;
   document.getElementById("pic3").src = data[2].thumb;
    $('#pic3').html(jsonObject.thumb[3]);
}
 */   
	
/*function renderMyProject(singleProject){
    var variablefortheid = "project"+singleProject.id;
    var htmlString = '';
          htmlString += '<li id="'+variablefortheid+'">';
          htmlString += '';
          htmlString += '</li>';
    return  htmlString;
}*/