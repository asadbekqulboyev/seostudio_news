document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone_input");
  Inputmask("+7 (999) 999-99-99").mask(phoneInput);
});
$(".seo_section .button").click(function (e) {
  e.preventDefault();
  $(".seo_section .hiden_text").addClass("no-after");
  $(this).fadeOut(200);
});
