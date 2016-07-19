(function($) {
	
	$.fn.centerMe = function (parent) 
		{
			var parent = parent || 'window', top, left;
					
			if(parent == 'window') 
			{
				top = Math.round(($(window).height() - $(this).outerHeight()) / 2) + "px",
				left = Math.round(($(window).width() - $(this).outerWidth()) / 2)  + "px";
			}
			else
			{
				top = Math.round(($(parent).height() - $(this).outerHeight()) / 2) + "px",
				left = Math.round(($(parent).width() - $(this).outerWidth()) / 2)  + "px";				
			}
			
			$(this).css({
				'top': top,
				'left': left
			});			
		}
		

	$.fn.goodies_popme = function (option)
	{	
		if(option === undefined) {
			var topDisplacement = parseInt($(this).css('padding-top').replace("px", "")) + 10,
				leftDisplacement = parseInt($(this).css('padding-left').replace("px", "")) + 10 ;
			
		
			$(document.body).append("<div id='mg-backdrop'></div>");
			$(this).prepend("<div id='mg-pop-me-close'><div id='mg-pop-me-close-inside'></div></div>");
			$(this).css({
				'position'	: 'fixed',
				'z-index' 	: '999'
			});		
			$('#mg-pop-me-close-inside').css({
				'top'  : '-' + topDisplacement + 'px',
				'left' : '-' + leftDisplacement + 'px'
			});	
			$(this).centerMe();				
			$(this).fadeIn(300);
			
			$(this).delegate('#mg-pop-me-close', 'click', function() {
				$(this).parent().hide();
				$('#mg-backdrop, #mg-pop-me-close').remove();
			});
		}
	}		
	
}) (jQuery);