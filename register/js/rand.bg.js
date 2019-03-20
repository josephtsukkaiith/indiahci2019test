(function($) {

    $.fn.RandBG = function(options) {

        var settings = $.extend({
            ClassPrefix: "bg",
            count: 7
        }, options);
        
        var index = Math.ceil(Math.random() * settings.count * settings.count) % settings.count;
        
        $(this).addClass(settings.ClassPrefix + index);
    };

}(jQuery));
//This code generates a random background image for the top bar
//Source: http://www.jqueryscript.net/other/jQuery-Plugin-For-Random-Background-Image-randomBackground.html