(function($){

  'use strict'



  var weekday=  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      month = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];


  $(".choose-week a").click(
    function(){
      $(this).toggleClass('bg-green');
      return false;
    }
  );

/*
|------------------------------------------------------------------------------------
| Init date for the-date
|------------------------------------------------------------------------------------
*/
  if ($('.the-date').length>0) {

    // when we click
    $(".the-date a").click(
      function(){
        var
          dateObj = $('.the-date'),
          currentDate = dateObj.find('.current-date'),
          currentDateText = currentDate.text(),
          currentDateObj = new Date(currentDateText + 24*60*60*1000);

          if ($(this).hasClass('tomorrow')) {
            var updateDateObj = new Date(+new Date(currentDateText.replace(/-/g,'/')) + 24*60*60*1000),
            updateDate = weekday[updateDateObj.getDay()]+', '+month[updateDateObj.getMonth()]+' '+updateDateObj.getDate()+', '+updateDateObj.getFullYear();


          }else{
            var updateDateObj = new Date(+new Date(currentDateText.replace(/-/g,'/')) - 24*60*60*1000),
            updateDate = weekday[updateDateObj.getDay()]+', '+month[updateDateObj.getMonth()]+' '+updateDateObj.getDate()+', '+updateDateObj.getFullYear();
          }

        

        currentDate.text(updateDate);
      }
    );

  };

})(jQuery);