// const host = "http://localhost:1337";
const host = "http://159.223.67.118:1337";

var keyword = document.getElementById("keyword");
var but = document.getElementById("sb");
var load = "<div class= 'load-wrap'>";
load += "<div class = 'load'>";
load += "<div class= 'line'></div>";
load += "<div class= 'line'></div>";
load += "<div class= 'line'></div>";
load += "</div>";
load += "</div>";

const fetchRecruitData = async () => {
  let recruitData = await fetch(`${host}/api/recruits?populate=thumbImage`)
    .then((data) => data.json())
    .then((datajson) => {
      blog = datajson;
      console.log(datajson);
    });
  return blog;
};

const displayHTMLRecruit = async () => {
  const recruitData = await fetchRecruitData();
  console.log(recruitData);
  var recruit = document.getElementById("recruit");
  var items = recruitData.data;
  recruit.innerHTML = load;
  setTimeout(() => {
    initRender(items);
  }, 1500);
};

displayHTMLRecruit();

var searching = async (e) => {
  e.preventDefault();
  keySearch = keyword.value.toLowerCase();
  console.log(keySearch);

  let searchData = await fetch(
    `${host}/api/recruits?populate[0]=thumbImage&filters[title][$containsi][1]=${keySearch}`
  )
    .then((data) => data.json())
    .then((datajson) => {
      console.log("check data s", datajson);

      var recruit = document.getElementById("recruit");
      var items = datajson.data;

      recruit.innerHTML = load;
      setTimeout(() => {
        initRender(items);
      }, 1500);
    });
};
but.addEventListener("click", (e) => searching(e));

function initRender(items) {
  // clearPageItem();
  renderRecruit(items);
}

function renderRecruit(recruit) {
  html = "";
  const content = recruit.map((item) => {
    console.log(item);
    var image = item.attributes.thumbImage.data.attributes.formats;
    html += '<div class="square-form">';
    html += '<div class="left-square">';
    html += `<a href="./recruits/${item.attributes.slug}">`;
    html += `<div class="squares" id="items-hiring" style="background-image: url(${host}${image.small.url})"></div>`;
    html += "</a>";
    html += "</div>";
    html += '<div class="right-content">';
    html += `<a href="./recruits/${item.attributes.slug}">`;
    html += `<h5>${item.attributes.title}</h5></a>`;
    html += `<a href="./recruits/${item.attributes.slug}">`;
    html += '<span>Xem thêm</span><i class="hiring ti-arrow-right"></i>';
    html += "</a>";
    html += "</div>";
    html += "</div>";
    return html;
  });
  document.getElementById("recruit").innerHTML = html;
}
