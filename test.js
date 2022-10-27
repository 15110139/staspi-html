$(function () {

  const modal = document.querySelector('.modal')
  
  const openModalBtn1 = document.querySelector('.open-modal-btn-1')
  
  const openModalBtn2 = document.querySelector('.open-modal-btn-2')
  
  const openModalBtn3 = document.querySelector('.open-modal-btn-3')
  
  const iconCloseModal = document.querySelector('.modal__header i')
  
  const buttonCloseModal = document.querySelector('.modal__footer button')
  
  
  
  var service = ["bg-mkt","bg-website","bg-amazon"];
  
  function toggleModal() {
  
  modal.classList.toggle('hide');
  
  var fileName = this.id;
  
  var url = '../pdf/' +fileName+ ".pdf";
  
console.log(url);
  
var pdfjsLib = window['pdfjs-dist/build/pdf'];
  
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js';
  
  
  var pdfDoc = null,
  
  pageNum = 1,
  
  pageRendering = false,
  
  pageNumPending = null,
  
  scale = 1.17;
  
  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
  
  pdfDoc = pdfDoc_;
  
  const pages = parseInt(pdfDoc.numPages);
  
  var canvasHtml = '';
  
  for (var i = 0; i < pages; i++) {
  
  canvasHtml += '<canvas id="canvas_' + i + '"></canvas>';
  
  }
  
  console.log("check",canvasHtml);
  
  document.getElementsByClassName('modal__body').innerHTML = canvasHtml;
  
  
  for (var i = 0; i < pages; i++) {
  
  var canvas = document.getElementById('canvas_' + i);
  
  renderPage(i+1, canvas);
  
  }
  
  });
  
  function renderPage(num, canvas) {
  
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
  
}
  
  
  openModalBtn1.addEventListener('click', toggleModal)
  
  openModalBtn2.addEventListener('click', toggleModal)
  
  openModalBtn3.addEventListener('click', toggleModal)
  
  iconCloseModal.addEventListener('click', toggleModal)
  
  buttonCloseModal.addEventListener('click', toggleModal)
  
  
  modal.addEventListener('click', (e) => {
  
if (e.target == e.currentTarget) toggleModal();
  
  })
  
  
  });