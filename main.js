$(document).ready(function() {

  // funzione per scorre in basso fino all'ultimo messaggio nella finestra
  scroll_message();

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
      $('.discorso.active').append(new_message)

      // funzione per scorre in basso fino all'ultimo messaggio nella finestra
      scroll_message();

      // resetto l'imput
      $('.invio_messaggio').val('');

    setTimeout(function() {
      // faccio una copia del template del messaggio
      var new_message = $('.template_container .container_message').clone();

      // inserisco nel template la risposta ok

      new_message.children('.message').text('ok');

      // appendo il nuovo messaggio nel contenitore di tutti i messaggi
      $('.discorso.active').append(new_message)

      // funzione per scorre in basso fino all'ultimo messaggio nella finestra
      scroll_message();

      },1000);

    }
 }

    // funzione per scorre in basso fino all'ultimo messaggio nella finestra
    function scroll_message() {
      // faccio scroll nella finestra fino al messaggio inserito
      $('.discorso').scrollTop($('.discorso')[0].scrollHeight);
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

    // recupero i nome del contatto cliccato
    var contact_name = $(this).find('.nome_contatto').text();
     // scrivo il nome del contatto nella finestra di destra in alto
     $('.header_right .nome_contatto').text(contact_name);
     // recupero l'immagine del contatto cliccato
     var src_contatto = $(this).find('img').attr('src');
     // imposto l'immagine del contatto corrente
     $('.header_img_right').children('img').attr('src', src_contatto);


      var dialogo = $(this).attr('data-conversazione');
      var pannello_dialogo = $('.discorso[data-conversazione="'+dialogo+'"]');
    // nascondi tutti i pannelli visibili precedentemente
    $('.discorso').removeClass('active');
    // aggiungo la classe active al pannello corrispondente al contatto cliccato
    pannello_dialogo.addClass('active');

    // funzione per scorre in basso fino all'ultimo messaggio nella finestra
    scroll_message();
  });


//   // intercetto il click sull'icona delle opzioni
//   $('.fa-chevron-down').click(function() {
//   // recupero il pannello delle opzioni corrispondente
//   $(this).siblings('.message_options-panel').toggleClass('active');
// });


});



// var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes();
// document.write(time);
