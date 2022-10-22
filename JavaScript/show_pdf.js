$(function () {
    var service = ["bg-mkt","bg-website","bg-amazon"]
    $.each(service, function(_,val){
        $("#"+val).click(function () {
        var fileName = val+ ".pdf";
          $("#dialog").dialog({
            modal: true,
            // title: fileName,
            width: "100%",
            height: 500,
            top:100,
            buttons: {
              "tải về": function () {
                // console.log("check fileName",fileName);
                // $(this).dialog("close");
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
              var object =
                '<object data="{FileName}#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%">';
              object +=
                'If you are unable to view file, you can download from <a href="{FileName}">here</a>';
              object +=
                ' or download <a target = "_blank" href = "http://get.adobe.com/reader/">Adobe PDF Reader</a> to view the file.';
              object += "</object>";
              object = object.replace(/{FileName}/g, "../pdf/" + fileName);
              console.log(object);
              $("#dialog").html(object);
            },
          });
        });
    })
  });