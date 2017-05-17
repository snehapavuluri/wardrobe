function UpdateUserInfo() {
    if ($("#fname").val() == '' || $("#lname").val() == '' || $("#email").val() == ''
     || $("#password").val() == '' || $("#cpassword").val() == '') {
        $(".UpdateUserInfo").removeClass('hidden');
    }
    else {
        $(".UpdateUserInfo").addClass('hidden');
        $(".editFiled").addClass('hidden');
        $(".ansField").removeClass('hidden');
        BootstrapDialog.show({
            title: 'Success',
            draggable: true,
            closable: false,
            message: 'Account details updated successfully.',
            buttons: [{
                label: 'Ok',
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }]
        });

    }
}

function EditUserInfo() {
    $(".ansField").addClass('hidden');
    $(".editFiled").removeClass('hidden');
}