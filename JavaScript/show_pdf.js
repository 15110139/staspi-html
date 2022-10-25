$(function () {
    var service = ["bg-mkt","bg-website","bg-amazon"]
    $.each(service, function(_,val){
        $("#"+val).click(function () {
        var fileName = val+ ".pdf";
          $("#dialog").dialog({
            modal: true,
            width: "80%",
            height: 500,
            // top:100,
            buttons: {
              "Tải về": function () {
                var url = "../pdf/" + fileName;
                var req = new XMLHttpRequest();
                req.open("GET", url , true);
                req.responseType = "blob";
              
                req.onload = function (event) {
                  var blob = req.response;
                  console.log(blob.size);
                  var link=document.createElement('a');
                  link.href=window.URL.createObjectURL(blob);
                  link.download="staspi_" + new Date() + ".pdf";
                  link.click();
                };
              
                req.send();
                },
            },
            
            open: function () {
              var windowWidth = window.innerWidth *0.79;
              var windowHeight = window.innerHeight * 0.5;
              var embed = '<iframe ';
                  embed += 'src="';
                  embed += '../pdf/' + fileName + '#toolbar=0' + '" ';
                  // embed += 'type = "' + 'application/pdf" ';
                  embed += 'height ="'+ windowHeight + '"' + ' width ="' + windowWidth + '"' + '>'
                  embed += '</iframe>'
                  console.log(embed);

              $("#dialog").html(embed);
            },
          });
        });
    })
  });