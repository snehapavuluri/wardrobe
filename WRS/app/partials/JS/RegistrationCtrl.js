function ValidateRegistration() {
    if ($("#firstname").val() == '' || $("#lastname").val() == '' || $("#username").val() == ''
     || $("#email").val() == '' || $("#password").val() == '' || $("#cpassword").val() == '') {
        $(".ValidateRegistration").removeClass('hidden');
    }
    else {
        $(".ValidateRegistration").addClass('hidden');
        BootstrapDialog.show({
            title: 'Success',
            draggable: true,
            closable: false,
            message: 'User registration done successfully.',
            buttons: [{
                label: 'Ok',
                action: function (dialogItself) {
                    location.href = 'Login.html';
                }
            }]
        });

    }
}