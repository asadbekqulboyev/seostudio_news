
$(".seo_section .button").click(function (e) {
  e.preventDefault();

  // Matnni ko‘rsatish/yashirish
  $(".seo_section .hiden_text").toggleClass("no-after");

  // Tugma matnini almashtirish
  if ($(".seo_section .hiden_text").hasClass("no-after")) {
    $(this).text("Свернуть текст");
  } else {
    $(this).text("Развернуть текст");
  }
});

$(".analytics_page_item .button.no_bg").click(function (e) {
  e.preventDefault();
  $(this).prev(".hiden_text").toggleClass("no-after");
  if ($(this).prev(".hiden_text").hasClass("no-after")) {
    $(this).text("Свернуть текст");
    
    $(this).parents('.analytics_page_item').css({'align-items': 'start !important'})
    
  } else {
    $(this).text("Развернуть текст");
    $(this).parents('.analytics_page_item').removeClass('align-items-start')
  }
});
Inputmask('+7 (999) 999-99-99').mask($('input[type="tel"]'))
