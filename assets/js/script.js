$(function() {

function addAnchorLink(){
  $('h3').each(function(i){
    var sectionId = "section";  
    sectionId = sectionId+i;
    $(this).attr('id',sectionId);
    $(this).wrap('<a href="#'+sectionId+'" class="anchorLink"></a>');
    $(this).prepend('<ion-icon name="ios-link"></ion-icon>');
  });
  $('h3').hover(function(){
    $(this).find('ion-icon').toggle(); 
  });
}
addAnchorLink();

});
