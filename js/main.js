(function($){

  $(".choose-week a").click(
    function(){
      $(this).toggleClass('bg-green');
      return false;
    }
  );

})(jQuery);