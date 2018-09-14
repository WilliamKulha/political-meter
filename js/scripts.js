var userTotalScore = function(val1, val2, val3, val4, val5, val6) {
  return (val1 + val2 + val3 + val4 + val5 + val6);
}

$(document).ready(function(){
  $('form#userInput').submit(function(event){
    event.preventDefault();
    var government = parseInt($('input:radio[name=GovInLifeRadios]:checked').val());
    var america = parseInt($('input:radio[name=AmInfluenceRadios]:checked').val());
    var taxes = parseInt($('input:radio[name=taxesRadios]:checked').val());
    var fox = parseInt($('input:radio[name=foxRadios]:checked').val());
    var abortion = parseInt($('input:radio[name=abortionRadios]:checked').val());
    var obama = parseInt($('input:radio[name=obamaRadios]:checked').val());
    var finalScore = userTotalScore(government, america, taxes, fox, abortion, obama);

    if (finalScore >= 15) {
      $('div.hider').slideUp();
      $('div#dem').show();
    } else if (finalScore <= 14 && finalScore >= 9) {
      $('div.hider').slideUp();
      $('div#center').show();
    } else {
      $('div.hider').slideUp();
      $('div#repub').show();
    }

  });
});
