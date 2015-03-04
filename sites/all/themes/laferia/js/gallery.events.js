(function ($) {
  Drupal.behaviors.laferiaGallery = {
    attach: function (context, settings) {
      $('.gallery', context).once('Gallery', function () {
        $(this).find('.image_gallery').each(function(){
	        index = $(this).index();
	        index = index + 1;
	        $(this).addClass('item-' + index);
        });
        $(this).find('.image_gallery:first').addClass('first');
        $(this).find('.image_gallery').last().addClass('last');
      });
    }
  };

})(jQuery);
