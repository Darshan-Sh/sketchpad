function Grid(){
  for(var i=0;i<16;i++){
    $('table').append('<tr>');
    }
  for(i=0;i<16;i++){
    $('tr').append('<td>');
  }

};
$(document).ready(function(){
  Grid();
  $('td').hover(function(){
    $(this).css('background-color','red');


});
});
