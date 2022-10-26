$('#upload').change(function() {
    var i = $('.text-mask h4').clone();
    // console.log(i);
    
    var file = $('#upload')[0].files[0].name;
    console.log(file);
    $('.text-mask h4').text("Selected file: " + file);
  });