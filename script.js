
$(document).ready(function(){
  $('body').prepend('<div id="container"></div>');
  $('#container').prepend('<table></table>');
  $('#container').append('<button onclick="Grid(); return false">New Grid</button>');
  $('table').append('<tr></tr><tr></tr><tr></tr><tr></tr>');
  $('tr').append('<td></td><td></td><td></td><td></td>');
  $('td').css({
    width:"30px",
    height:'30px',
    border:'1px solid black'
  });
  $('td').hover(function(){
  $(this).css('background-color','red');

});
});
function Grid(){
  $('#container').remove();
  $('body').prepend('<div id="container"></div>');
  $('#container').prepend('<table></table>');
  $('#container').append('<button onclick="Grid(); return false">New Grid</button>');
  var r=prompt("Enter number of rows");
  var c=prompt("Enter number of columns");
  for(var i=0;i<r;i++){
    $('table').append('<tr>');
    }
  for(i=0;i<c;i++){
    $('tr').append('<td>');


  }
  $('td').hover(function(){
  $(this).css('background-color','red');
});
};
