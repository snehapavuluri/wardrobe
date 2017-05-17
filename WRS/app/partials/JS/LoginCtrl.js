function ValidateLogin() {
    if ($("#username").val() == '') {
        $(".ValidateLogin").removeClass('hidden');
    }
    else if ($("#password").val() == '') {
        $(".ValidateLogin").removeClass('hidden');
    }
    else {
        $(".ValidateLogin").addClass('hidden');
        location.href = 'partials/Landing.html';
    }
}

function ForgotPassword() {
    if ($("#fpUsername").val() == '') {
        $(".ValidateForgotPassword").removeClass('hidden');
    }
    else {
        $(".ValidateForgotPassword").addClass('hidden');
        $("#fpUsername").val('');
        BootstrapDialog.show({
            title: 'Success',
            message: 'Email sent successfully.',
            buttons: [{
                label: 'Ok',
                action: function (dialogItself) {
                    dialogItself.close();
                }

            }]
        });
    }
}