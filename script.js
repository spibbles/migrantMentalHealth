
window.onload=function(){
  var factList = [
  "Approach your loved ones with warmth, positivity and patience. Make an effort to understand the people in your life who may be struggling.",
              "Check in, Check in, Check in! Regularly check in with your loved ones, and show them that you care.",
              "Make plans together. Ask your loved one to go on walks, to help you with a hobby, or do an activity they used to like",
  "Don't give up on them, even if they push you away. It makes sense to feel frustrated if your loved one refuses to get help, but it's important to maintain communication lines with them",
              "Encourage them to seek professional help. You can't solve all you're loved one's issues, but you can take them to someone who can",
              "Be willing to listen when your loved ones open up to you. It's important to actively and patienty listen - even if its something you don't want to hear.  It can be difficult for a person struggling with a mental illness to talk about their experiences, when they do feel comfortable sharing their feelings with you, cherish it, and hold your criticisms."
              ]

var fact = document.getElementById("suggest");
var myButton = document.getElementById("myButton");
var count = 0;
  
  myButton.addEventListener('click', displayFact);

  function displayFact(){
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length){
      count = 0;
    }
}
  
}

