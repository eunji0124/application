$(function(){

  // Footer Navigation Area
  var target = $('#footer ul li a');

  target.each(function(){
    $(this).hover(
      function(){
        $(this).next().css('display', 'none');
      },
      function(){
        $(this).next().css('display', 'block');
      }    
    )
  });

  // ticket-box Slide Area
  // $('#ticket-box').toggleClass('ticket-act');
  var subMenu = $('#footer ul li:nth-child(2) a');

  subMenu.click(function(){    
    $('#ticket-box').toggleClass('ticket-act');

    event.preventDefault();    
    
  });

  var menuList = $('#footer ul li:not(:nth-child(2))');
  var clickItem = menuList.find('a');

  clickItem.click(function(){    
    $('#ticket-box').removeClass('ticket-act');
  });
  
});