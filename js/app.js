var acc = $(".accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        for (var j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                $( acc[j] ).removeClass("active");
                $( acc[j] ).next().removeClass("show");
            } else {
                $( this ).toggleClass( "active" );
                $( this ).next().toggleClass( "show" );
            }
        }
    }
}

$('ul.subMenu').hide();

$('.navigation a.dropdown-btn').on('click', function (event) {
    if ($(this).next().css('display') === 'none') {
        $(this).next().slideDown('normal', function () {
            // Animation complete.
        });
        $(this).addClass("active");
    } else {
        $(this).next().slideUp('fast', function () {
            // Animation complete.
        });
        $(this).removeClass("active");
    }

    event.preventDefault();
});
