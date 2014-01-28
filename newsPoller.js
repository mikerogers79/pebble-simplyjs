/****************************************
Football Scores updater
Version: 0.3
Created: 1/25/14
By: Mike Rogers
Updated: 1/27/14

Uses the AJAX library and pulls in 
Guardian.co.uk updates for West Ham from API

Next features req'd.

Only pull in headlines which include key words
such as "West Ham"
****************************************/

/**
STANDARD VARS
**/

var numHeadlines = 5;  //headlines to retrieve
var pageFooter = '---';  //footer for the end of the headlines
var articleSeparator = '\n *** \n';  //article delimiter

/**
STANDARD FUNCTIONS
**/

function todayTstamp() {
  
  //get the current date details
  var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var tstamp = days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm; 

return tstamp;  
}

//find a keyword in a string
function findKeyWord(inputString, keyword) {
  
  var isMatch = false;
  var matchPos = inputString.indexOf(keyword);
  
  if(matchPos > -1) {
    
    isMatch = true;
    
  }
  
return isMatch;
}



//loop through all of the headlines
function loopHeadlines(headlines) {
  
  for (var i =0; i < headlines.length; i++) {
    
    
    
  }
  
return;  
}

/**
EXECUTE THIS
**/


//intro text. Display this while results are being retrieved.
simply.text({title:"***",subtitle: "Retrieving News", body: "****"});


//pull the latest west ham headlines
ajax({ url: 'http://content.guardianapis.com/search?q=west+ham+united&section=football', type: 'json'}, function(data){
  
  
//make the page scrollable
simply.scrollable(true); 

  
//set the headline  
  var headlineTxt = 'Football News - Retrieved at ' + todayTstamp();

  
//output the top x results   
  var bodyTxt = "";
  
  for (var x = 0; x < numHeadlines; x++) {
    bodyTxt += data.response.results[x].webTitle + articleSeparator;
  }
  
  simply.style('small');
  simply.text({title:headlineTxt, subtitle: bodyTxt, body: pageFooter});
  simply.vibe();

},function(data){
//output an error message

  simply.body("There has been an error retrieving the headlines",true);  
  simply.vibe();  
});
