$(function() {

    // Test code for demonstration work of dialog

    var $overlay = $('.js-overlay');
    var $dialog = $('.js-dialog');

    var $order = $('.js-order');
    var $orderComplete = $('.js-order-complete');

    const OVERLAY_VSIBLE_CLASS = 'overlay__visible';
    const DIALOG_VSIBLE_CLASS = 'dialog__visible';

    const DIALOG_MODAL_VISIBLE_CLASS = 'dialog_modal__visible';

    function dialogOpen() {
        $overlay.addClass(OVERLAY_VSIBLE_CLASS);
        $dialog.addClass(DIALOG_VSIBLE_CLASS);

        $('.js-body').css({ overflow: 'hidden' });
    }

    function dialogClose() {
        $overlay.removeClass(OVERLAY_VSIBLE_CLASS);
        $dialog.removeClass(DIALOG_VSIBLE_CLASS);

        $('.js-body').css({ overflow: 'auto' });
    }

    $('.js-order-open').on('click', function(event) {
        dialogOpen();
        event.preventDefault();
    });

    $('.js-dialog-close').on('click', function(event) {
        dialogClose();
        event.preventDefault();
    });

    $('.js-order-complete-button').on('click', function() {
        $order.removeClass(DIALOG_MODAL_VISIBLE_CLASS);
        $orderComplete.addClass(DIALOG_MODAL_VISIBLE_CLASS);
        event.preventDefault();
    });

    $(document).keyup(function(event) {
        if (event.keyCode === 27) {
            dialogClose();
        }
    });

});
