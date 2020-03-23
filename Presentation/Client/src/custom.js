
    $(document).ready( () => {
      $('.sidenav').sidenav();

      // $('.card').hover( () =>  {
      //   $(this).addClass('animate');
      // },() =>  { $(this).removeClass('animate'); })

      const cards = document.querySelectorAll('.card');
      cards.forEach(c => c.addEventListener('hover', function() {
        $(this).addClass('animate');
      }, function() {$(this).removeClass('animate'); }))
    });

