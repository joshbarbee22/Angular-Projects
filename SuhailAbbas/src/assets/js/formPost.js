function postToGoogle() {
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    
     
    if(field1 == ""){
        alert('Please Fill Your Name');
        document.getElementById("nameField").focus();
        return false;
    }
    if(field2 == ""){
        alert('Please Fill Your Email');
        document.getElementById("emailField").focus();
        return false;
    }
   


    

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd_KAjoxkFDJh2fka7GIIYF_VYfoiozBxwYSAXSTN5QBTZfWw/formResponse?",
        data: {"entry.23984506": field1, "entry.2066401719": field2},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            {

                $('#success-msg').show();
                $('#form').hide();
                
            }
    });
    return false;
}