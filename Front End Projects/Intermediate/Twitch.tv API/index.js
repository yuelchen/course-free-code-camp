var apiFeatured = null;
var featured = null;
var choices = null;

window.onload = function(){
  apiFeatured = $.ajax({
    type:'GET', 
    url:'https://wind-bow.glitch.me/twitch-api/streams/featured',
    success:setFeatured
  });
};

$(document).ready(function(){
  populateList('choices');
});

function setFeatured(response){
  featured = response.featured;
}

function appendMainContainer(image, title, status, url){
  var a = document.createElement("a");
  var div = document.createElement("div");
  var img = document.createElement("img");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  img.setAttribute('src', image);
  div.appendChild(img);
  h2.innerHTML = title;
  div.appendChild(h2);
  p.innerHTML = 'Status: ' + status;
  div.appendChild(p);
  div.className = 'searchResult';
  a.setAttribute('href', encodeURI(url));
  a.appendChild(div);
  document.getElementById('mainContainer').appendChild(a);
}

function populateFeatured(){
  for(index in featured){
    var image = featured[index].image;
    var title = featured[index].stream.channel.display_name;
    var status = featured[index].stream.stream_type;
    var url = featured[index].stream.channel.url;
    appendMainContainer(image, title, status, url);
  }//end for loop
}

function populateChoices(){
  choices = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  for(index in choices){
    $.ajax({
      type:'GET', 
      url:'https://wind-bow.glitch.me/twitch-api/channels/' + choices[index],
      success: function(data){
        var image = data.logo;
        var title = data.display_name;
        var status = "N/A";
        var url = data.url;
        appendMainContainer(image, title, status, url);
      }
    });
  }
}

function clearAll(){
  while(document.getElementById('mainContainer').firstChild)
    document.getElementById('mainContainer').removeChild(document.getElementById('mainContainer').firstChild);
}

function populateList(value){
  clearAll();
  if(value === 'choices'){
    populateChoices();
  }
  else if(value === 'featured'){
    populateFeatured();
  }
  else if(value === 'all'){
    populateChoices();
    populateFeatured();
  }
}
