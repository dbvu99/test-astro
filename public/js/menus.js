$(function(){
    $('#nav-tab a[id^="nav-"]').on('click', function() {
        $('[id^="tab-"]').hide();
        $('#tab-' + this.id.slice(4)).show();
        $(this).addClass('active');
        $('#nav-tab a').not(this).removeClass('active');
    });
});