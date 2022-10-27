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
          open: $(document).on('click',function(divclose){
            var tg = (divclose.target).closest(".ui-dialog");
            var c_item = (divclose.target).closest(".card-item");
            // console.log(tg);
            if(tg == null && c_item == null){
              $('#dialog').dialog("close");
            }
          }),
          buttons: {
            "Tải về": function () {
              var url = "../pdf/" + fileName;
              var req = new XMLHttpRequest();
              req.open("GET", url , true);
              req.responseType = "blob";
            
              req.onload = function (event) {
                var blob = req.response;
                // console.log(blob.size);
                var link=document.createElement('a');
                link.href=window.URL.createObjectURL(blob);
                link.download="staspi_" + new Date() + ".pdf";
                link.click();
              };
            
              req.send();
              },
          },
          
          open: function () {
            // var windowWidth = window.innerWidth *0.79;
            // var windowHeight = window.innerHeight * 0.5;
            // var embed = '<iframe ';
            //     embed += 'src="';
            //     embed += '../pdf/' + fileName + '#toolbar=0' + '" ';
            //     // embed += 'type = "' + 'application/pdf" ';
            //     embed += 'height ="'+ windowHeight + '"' + ' width ="' + windowWidth + '"' + '>'
            //     embed += '</iframe>'
            //     console.log(embed);

            // $("#dialog").html(embed);

              var url = '../pdf/' +fileName;
              // console.log(url);
              var pdfjsLib = window['pdfjs-dist/build/pdf'];
              pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js';

              var pdfDoc = null,
                  pageNum = 1,
                  pageRendering = false,
                  pageNumPending = null,
                  scale = 1.17;
              function renderPage(num, canvas) {
                  // console.log("check canvas:",canvas);
                var ctx = canvas.getContext('2d');
                pageRendering = true;
                // Using promise to fetch the page
                pdfDoc.getPage(num).then(function(page) {
                  var viewport = page.getViewport({scale: scale});
                  canvas.height = viewport.height;
                  canvas.width = viewport.width;

                  // Render PDF page into canvas context
                  var renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                  };
                  var renderTask = page.render(renderContext);

                  // Wait for rendering to finish
                  renderTask.promise.then(function() {
                    pageRendering = false;
                    if (pageNumPending !== null) {
                      // New page rendering is pending
                      renderPage(pageNumPending);
                      pageNumPending = null;
                    }
                  });
                });
              }

              pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
                pdfDoc = pdfDoc_;

                const pages = parseInt(pdfDoc.numPages);

                var canvasHtml = '';
                for (var i = 0; i < pages; i++) {
                  canvasHtml += '<canvas id="canvas_' + i + '"></canvas>';
                }
                // console.log("check",canvasHtml);
                document.getElementById('dialog').innerHTML = canvasHtml;

                for (var i = 0; i < pages; i++) {
                  var canvas = document.getElementById('canvas_' + i);
                  renderPage(i+1, canvas);
                }
              });
          },
        });
      });
  })
});