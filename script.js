$('.hotspot').each(function () {

    var $this = $(this),
        top = $this.data('top'),
        left = $this.data('left');

    $this.css({
            top: top + "%",
            left: left + "%"
        })
        .addClass('is-visible');

});

$(".hotspots-label").on('click', function (e) {
    $(this).removeClass('is-visible');
    $(this).parents('.image').find('.hotspot').removeClass('is-active');
    e.preventDefault();
});

$('.hotspot').on('click', function (e) {

    var text = $(this).data('text');

    if (!$(this).hasClass('is-active')) {
        $(this).parents('.image').find('.hotspot').removeClass('is-active');
        $(this).addClass('is-active');
        $(this).parents('.image').find('.hotspots-label').html('<strong>' + $(this).text() + '</strong> <span>' + text + '</span>').addClass('is-visible');
    } else {
        $(this).removeClass('is-active');
        $(this).parents('.image').find('.hotspots-label').html('<strong>' + $(this).text() + '</strong> <span>' + text + '</span>').removeClass('is-visible');
    }

    e.preventDefault();
});
