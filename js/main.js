(function($){

  'use strict'



  var weekday=  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      month = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];


  $(document).on("click", ".choose-week a", function(){
      $(this).toggleClass('bg-green');
      return false;
    }
  );

/*
|------------------------------------------------------------------------------------
| Init date for the-date
|------------------------------------------------------------------------------------
*/
    $(".the-date a").click(
      function(){
        var
          dateObj         = $('.the-date'),
          currentDate     = dateObj.find('.current-date'),
          currentDateText = currentDate.text(),
          currentDateObj  = new Date(currentDateText + 24*60*60*1000);

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

/*
|------------------------------------------------------------------------------------
| Click on add-shift in Profile > Hours 
|------------------------------------------------------------------------------------
*/
  $("#add-shift").click(
    function(){
      var
        shiftTable        = $('#shift-table'),
        shiftTableLastRow = shiftTable.find('tr.demo'),
        shiftTableClone   = shiftTableLastRow.clone().removeClass('demo');

      shiftTableClone.find(".bg-green").each(function(){
        $(this).removeClass('bg-green');
      });

      shiftTableClone.appendTo(shiftTable);
      
      return false;

    }
  );

/*
|------------------------------------------------------------------------------------
| Click on delete row
|------------------------------------------------------------------------------------
*/
  $(document).on("click", '#shift-table .delete-btn', function(){
      var
        _this = $(this);
        _this.closest("tr").remove();
    }
  );      

})(jQuery);