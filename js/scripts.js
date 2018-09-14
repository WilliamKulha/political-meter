
$(document).ready(function(){
  $('form#userInput').submit(function(event){
    event.preventDefault();
    var government = parseInt($('input:radio[name=GovInLifeRadios]:checked').val());
    var america = parseInt($('input:radio[name=AmInfluenceRadios]:checked').val());
    var taxes = parseInt($('input:radio[name=taxesRadios]:checked').val());
    var fox = parseInt($('input:radio[name=foxRadios]:checked').val());
    var abortion = parseInt($('input:radio[name=abortionRadios]:checked').val());
    var obama = parseInt($('input:radio[name=obamaRadios]:checked').val());
    debugger;

  })
})
