(function ($) {
  Drupal.behaviors.laferiaMobileMenu = {
    attach: function (context, settings) {
      $('#block-system-main-menu', context).once('mobileMenu', function () {
        $(this).parent().parent().prepend('<div id="menu_opener"></div>');
        mobileMenu = $(this).find('.menu').clone();
        mobileMenu.attr('id','mobile_menu');
        mobileMenu.removeClass('menu');
        mobileMenu.addClass('mobile_menu');
        $(this).append(mobileMenu);
          $("#mobile_menu").mmenu({
            "offCanvas": {
            "position": "right"
          }
        });
        
        // Open the mobile on opener icon click.
        $("#menu_opener").click(function(e) {
          $("#mobile_menu").trigger("open.mm");
          e.preventDefault();
        });
      });
    }
  };

})(jQuery);
