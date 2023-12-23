// your code here
function updateUrl() {
	 var nameValue = document.getElementById('name').value;
	 var yearValue = document.getElementById('year').value;
	var flag = 0;

	  if (nameValue !== null && yearValue !== null) {
    var queryString = "";

    // Add name to the query string if it's not null or empty
    if (nameValue.trim() !== '') {
      queryString += '?name=' + encodeURIComponent(nameValue);
		flag = 1;
    }

    // Add year to the query string if it's not null or empty
    if (yearValue.trim() !== '') {
		if(flag == 0){
			queryString += '?year=' + encodeURIComponent(yearValue);
		} else{
			queryString += "&" + 'year=' + encodeURIComponent(yearValue);
		}
      
    }

    // Update the h3 element with the new URL
			  document.getElementById('url').innerHTML = 'https://localhost:8080/' + queryString;
		  
    
  } else {
   
  }
	
}