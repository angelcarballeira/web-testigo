window.onload = function () {
  swal({ text: 'Bienvenido a nuestra página', button: 'Ingresar' });

  $('#onload').fadeOut();

  // $('body').removeClass('hidden');
  let hiddenClass = document.getElementsByClassName('hidden');
  hiddenClass.classList.remove('hidden');
};
