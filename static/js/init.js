(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $("select").formSelect();
    $('input#input_text, textarea#textarea1').characterCounter();
    $(".sidenav").sidenav({edge: "right"});
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }})

  }); // end of document ready
})(jQuery); // end of jQuery name space
