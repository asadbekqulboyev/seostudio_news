
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
    $(this).parents('.analytics_page_item').addClass('align-items-start')
  } else {
    $(this).text("Развернуть текст");
    $(this).parents('.analytics_page_item').removeClass('align-items-start')
  }
});
Inputmask('+7 (999) 999-99-99').mask($('input[type="tel"]'))
$(".analytics_page .comments_item:nth-child(1)").css('height',$('.comments_item:nth-child(2)').height() + $('.comments_item:nth-child(3)').height() + 149 + 'px')
$(".analytics_page .comments_item:nth-child(3)").css('top',$('.comments_item:nth-child(2)').height() + 80 + 'px')
$(".no_content a").click(function (e) {
  e.preventDefault();
  $(this).parents('.no_content').fadeOut(0);
  $(this).parents('.all_content').addClass('open')
  $(this).parents('.all_content').next('.content_btn').addClass('d-flex');
  
})
$('.content_btn').click(function (e) {
  e.preventDefault();
  $(this).prev('.all_content').children('.no_content').fadeIn(0);
  $(this).prev('.all_content').removeClass('open')
  $(this).removeClass('d-flex');
  $(this).prev('.tag_columns.last').toggle({'display':'flex'});
})
$('.content_btn.items_btn').click(function (e) {
  $(this).toggleClass('active')
})
$(".all_content").each(function (index) {
  $(this).css('height',$(this).children('.no_content').height() + 'px')
});
$(window).on('scroll', function () {
  let scrollPos = $(window).scrollTop();

  $('.seo_score_sidebar_items a').each(function () {
    let id = $(this).attr('href'); // masalan, #section1
    let section = $(id);

    if (section.length) {
      let offsetTop = section.offset().top;

      if (scrollPos >= offsetTop - 10) {
        $('.seo_score_sidebar_items a').removeClass('active');
        $(this).addClass('active');
      }
    }
  });
});