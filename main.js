$(document).ready(function() {

  // intercetto il click sull'icona destra dell'area di input del messaggio
  $('.contenitore_icona').click(function() {
    send_message();
  });

  // intercetto il tasto invio
  $('.invio_messaggio').keypress(function(event) {
    console.log(event);
    if(event.which == 13) {
      send_message();
    }
  });


  function send_message() {
    // recupero il messaggio inserito dall'utente
    var messaggio_scritto = $('.invio_messaggio').val();

    // controllo che l'utente non sta inserendo un messaggio vuoto
    if (messaggio_scritto.length > 0) {

      // faccio una copia del template del messaggio
      var new_message = $('.template_container .container_message').clone();

      // inserisco nel template il testo scritto dall'utente
      new_message.children('.message').addClass('mine').text(messaggio_scritto);

      // appendo il nuovo messaggio nel contenitore di tutti i messaggi
      $('.discorso').append(new_message)

      $('.container_messages').scrollTop($('.container_messages')[0].scrollHeight);

      // resetto l'imput
      $('.invio_messaggio').val('');

    setTimeout(function() {
      // faccio una copia del template del messaggio
      var new_message = $('.template_container .container_message').clone();

      // inserisco nel template la risposta ok

      new_message.children('.message').text('ok');

      // appendo il nuovo messaggio nel contenitore di tutti i messaggi
      $('.discorso').append(new_message)


      $('.container_messages').scrollTop($('.container_messages')[0].scrollHeight);

      },1000);

    }
 }

    // intercetto la ricerca
  $('.search').keyup(function(event) {

    // quando l'utente digita recupero la stringa inserita nella ricerca
    var contact_search = $(this).val().tolowerCase();

      // per ogni contatto controlla il nome
      $('.chat').each(function() {

        // recupero il nome del contatto corrente che sto ciclando
        var name = $(this).find('.nome_contatto').text().tolowerCase();
        if(name.includes(contact_search)) {
          $(this).show();
        } else {
          $(this).hide();
        }

      });

  });

  // intercetto il focus nell'imput
  $('.invio_messaggio').focus(function() {
    $('.contenitore_icona i').toggleClass('fas fa-microphone fas fa-paper-plane');
  });
   $('.invio_messaggio').blur(function() {
    $('.contenitore_icona i').toggleClass('fas fa-microphone fas fa-paper-plane');
  });

  // intercetto il click su un contatto della colonna sinistra
  $('.chat').click(function() { 

      var dialogo = $(this).attr('data-conversazione');
      var pannello_dialogo = $('.discorso[data-coversazione="'+dialogo+'"]');
    // nascondi tutti i pannelli visibili precedentemente
    $('.discorso').removeClass('active');
    // aggiungo la classe active al pannello corrispondente al contatto cliccato
    pannello_dialogo.addClass('active');
  });


});



// var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes();
// document.write(time);
