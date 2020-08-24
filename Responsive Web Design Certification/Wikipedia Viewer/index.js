function clearInital() {
	$("#initialPrompt").fadeOut('slow');
	$("#search").val('');
}

function randomSearch() {
	alert("Redirecting you to Wikipedia, good luck and happy reading!");
	location.href = "https://en.wikipedia.org/wiki/Special:Random";
}

function clearSearchResults() {
	while(document.getElementById('mainContainer').firstChild) {
		document.getElementById('mainContainer').removeChild(document.getElementById('mainContainer').firstChild);
	}
}

function customSearch(query) {
	clearSearchResults();
	if(query.length > 0) {
		$.ajax({
			url:'https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=30&gapprefix=' + query +'&prop=pageimages|pageterms&wbptterms=description&format=jsonfm&formatversion=2&callback=?',
			data:{format:'json'},
			dataType:'json'
		}).done(function(data) {
			for(index in data.query.pages){
				var a = document.createElement("a");
				var div = document.createElement("div");
				var h3 = document.createElement("h3");
				var p = document.createElement("p");
				
				a.setAttribute('href', encodeURI('https://en.wikipedia.org/wiki/' + data.query.pages[index].title));
				a.appendChild(div);
				h3.innerHTML = data.query.pages[index].title;
				div.appendChild(h3);
				
				if(data.query.pages[index].hasOwnProperty('terms')) { 
					p.innerHTML = data.query.pages[index].terms.description;
					div.appendChild(p);
				}  
				
				div.className = 'searchResult';
				document.getElementById('mainContainer').appendChild(a);
			}//end for loop
		});
	}
}

var delay = null;
$('#search').bind('keyup', function(e) {
	if(delay != null) {
		clearTimeout(delay);
	}
	delay = setTimeout(function() {
		customSearch(document.getElementById("search").value);
	}, 200);
});
