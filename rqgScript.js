
/* the quotes */
var quoteArray = [
  'Now is the winter of our discontent <br> Made glorious summer by this sun of York <br><br> _Richard_<br>',
  'Lord, what fools these mortals be! <br><br> _Puck_<br>',
  'A man can die but once <br><br> _Feeble_<br>',
  'Sigh no more, ladies, sigh no more, <br> Men were deceivers ever; <br> One foot in sea, and one on shore, <br> To one thing constant never <br><br> _Balthazar_<br>',
  'The fool doth think he is wise, <br> but the wise man knows himself to be a fool <br><br> _Touchstone_<br>',
  'There is nothing either good or bad, <br> but thinking makes it so <br><br> _Hamlet_<br>',
  'If music be the food of love, <br> play on <br><br> _Orsino_<br>',
  'Golden lads and girls all must, <br> As chimney-sweepers, come to dust <br><br> _Guiderious_<br>',
  'Misery acquaints a man with strange bedfellows <br><br> _Trinculo_<br>',
  'Do you like Huey Lewis and The News? <br><br> _Patrick_Bateman_<br>',
  'Look at that subtle off-white coloring <br> The tasteful thickness of it <br> Oh, my God <br> It even has a watermark <br><br> _Patrick_Bateman_<br>',
  'I have to return some video tapes <br><br> _Patrick_Bateman_<br>',
  'There is a moment of sheer panic <br> when I realize that Paul\'s apartment overlooks the park <br> and is obviously more expensive than mine <br><br> _Patrick_Bateman_<br>',
  'Ahh, Kos <br> or some say Kosm <br> Do you hear our prayers? <br><br> _Micolash_<br>',
  'You sorry fool <br><br> _Frampt_<br>'
];



/* picks a quote at random */
function generateRandomQuote() {
  var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  return randomQuote;
}



/* prints random quote to the html */
function printRandomQuote() {
  document.getElementById('whereQuotesGo').innerHTML = generateRandomQuote();
}



/* creates a link to tweet the random quote currently shown in the html */
function tweetTheQuote() {
  var phrase = document.getElementById('whereQuotesGo').innerText;
  var tweetTheQuote = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase)
    
  window.open(tweetTheQuote);
}
