$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    }
  )
})

$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
