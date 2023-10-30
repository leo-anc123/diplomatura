$(document).ready(function () {
    $window = $(window);
    $('#intro').height($window.height());
    $window.scroll(function () {
        $('div.background').each(function (index, item) {
            var $scroll = $(item);
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});

// $(document) --> Modo que tiene jquery de llamar a los elementos
// $(#intro) --> Llama al id
// $('div.background') --> Llama a los elementos de la clase background
// each --> Recorrer