//jquery ready function
$(()=>{
    $.getJSON('api', updateFeedback);

    $('#feedbackForm').submit((e)=>{
        e.preventDefault();
        $.post('api', {
            name: $('#feedbackFormName').val(),
            title: $('#feedbackFormTitle').val(),
            message: $('#feedbackFormMessage').val()
        }, updateFeedback)

    });

    //feeedback output
    function updateFeedback(data){
        var output = '';
        
        $.each(data, (key, item)=>{
            output += `<h1>${key} : ${item.name} : ${item.title} : ${item.message}</h1>`
        })
        $('#feedbackMsgs').html(output);
    }







});


