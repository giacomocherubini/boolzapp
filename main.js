$(document).ready(function() {

  $('.fa-greater-than').click(function() {

  var messaggio_scritto = $('.invio_messaggio').val();

  if (messaggio_scritto.length > 0) {

  var new_message = $('.template_container .container_message').clone();

  new_message.children('.message').addClass('mine').text(messaggio_scritto);

  $('.container_messages').append(new_message)

  console.log(messaggio_scritto);

  $('.invio_messaggio').val('');

 }
  });
 //  $('.fa-greater-than').click(function() {
 //    alert('click');
 // });
});



// var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes();
// document.write(time);
