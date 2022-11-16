// const host = "http://localhost:1337";
const host = 'https://admin-staspi.herokuapp.com';

var load = "<div class= 'load-wrap'>";
load += "<div class = 'load'>";
load += "<div class= 'line'></div>";
load += "<div class= 'line'></div>";
load += "<div class= 'line'></div>";
load += "</div>";
load += "</div>";

var keyword = document.getElementById("keyword");
var but = document.getElementById("sb");

var hlPost = document.getElementById("highlight-post");

$(Document).ready(() => {
  let url = window.location;
  // console.log(linkShare);
  // console.log(`>>>> ready, url: ${url}, id: ${$.urlParam("id")}`);
  var id = $.urlParam("id");
  renderBlog(id);
});

$.urlParam = function (name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};
const renderBlog = async (id) => {
  const linkShare = window.location.href;
  try {
    await fetch(`${host}/api/Posts/${id}?populate=*`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const json = JSON.parse(data.data.attributes.content);
        const dt = data.data.attributes;
        const arrayTag = data.data.attributes.tags;
        // console.log(dt);
        console.log(arrayTag);
        // console.log("check json", data);
        var html = '<a href="">Bài viết nổi bật</a>';
        html += `<h3>${dt.title}</h3>`;
        html += `<img class="img-post" alt="" src='${host}${dt.thumbImage.data.attributes.formats.medium.url}'>`;
        html += "<div class='content'>";
        html += jsonToHtml(json);
        html += "</div>";
        html += '<div class="interactive">';
        html += '<div class="item-views">';
        html += '<span class="ti-eye"></span>';
        html += "<p>400 Views</p>";
        html += "</div>";
        html += '<div class="item-contact">';
        html += "<p>Share:</p>";
        html +=
          '<a class="share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=' +
          linkShare +
          '" target="_blank">';
        html += '<span class="ti-facebook"></span>';
        html += "</a>";
        html +=
          "<a class='share-mail' " +
          "href='mailto:?subject=Bài viết từ staspi&amp;body=Gửi bạn bài viết từ staspi:" +
          linkShare +
          "'>";
        html += '<span class="ti-email"></span>';
        html += "</a>";
        html += "</div>";
        html += '<div class="item-tag">';
        html += "<p>Tag:#VinhDau</p>";
        html += "</div>";
        html += "</div>";
        html += '<div class="block-owner">';
        html += '<div class="avt">';
        html += '<span class="ti-user"></span>';
        html += "</div>";
        html += '<div class="right-block">';
        html +=
          "<h2>Admin</h2><p>Cảm ơn bạn đã dành thời gian đọc bài viết của chúng tôi.</p></div>";
        html += "</div>";

        let color = 0;
        //load tag
        renderTag(arrayTag);
        // console.log(tag);
        document.getElementById("main-post").innerHTML = html;
      });
  } catch (e) {
    console.log(e);
  }
};
const renderTag = (arrayTag) => {
  color = 0;
  var arr = arrayTag.map((item) => {
    htmlTag = "";
    color++;
    if (color > 3) {
      color = 1;
    }
    return `<a href="#" class="color${color}">${item.tag}</a>`;
  });
  document.getElementById("tag").innerHTML = arr.join("");
};
//render json form editorjs to html
function jsonToHtml(obj) {
  html = "";
  obj["blocks"].forEach(function (block, index) {
    switch (block["type"]) {
      case "paragraph":
        html += "<p>" + block["data"]["text"] + "</p>";
        break;

      case "header":
        html +=
          "<h" +
          block["data"]["level"] +
          ">" +
          block["data"]["text"] +
          "</h" +
          block["data"]["level"] +
          ">";
        break;

      case "raw":
        html += block["data"]["html"];
        break;

      case "list":
        lsType = block["data"]["style"] == "ordered" ? "ol" : "ul";
        html += "<" + lsType + ">";
        block["data"]["items"].forEach(function (item, index) {
          html += "<li>" + item + "</li>";
        });
        html += "</" + lsType + ">";
        break;

      case "code":
        html +=
          '<pre><code class="language-' +
          block["data"]["lang"] +
          '">' +
          block["data"]["code"] +
          "</code></pre>";
        break;

      case "image":
        html +=
          '<img src="' +
          host +
          block["data"]["file"]["url"] +
          '" />' +
          "<div class = decription >" +
          block.data.caption +
          "</div>";
        break;

      default:
        break;
    }
  });
  // console.log(html);
  return html;
}
const fetchBlogData = async () => {
  let blogData = await fetch(`${host}/api/Posts?populate=thumbImage`)
    .then((data) => data.json())
    .then((datajson) => {
      blog = datajson;
      // console.log(datajson);
    });
  return blog;
};

const displayHTMLBlog = async () => {
  const blogData = await fetchBlogData();
  // console.log(blogData);
  var items = blogData.data;
  // console.log("check load item",load);
  hlPost.innerHTML = load;
  setTimeout(() => {
    renderHightLightPost(items);
  }, 1500);
};
const renderHightLightPost = (hlPost) => {
  // console.log("check from hlPost", items);
  html = "";
  const post = hlPost.map((item) => {
    var image = item.attributes.thumbImage.data.attributes.formats;
    // console.log("check item before map", item);

    html += '<div class="item-post">';
    html += '<div class="item-left">';
    html += "<a href =" + "/page/blogs/child-blog.html?id=" + item.id + ">";
    html += `<img src="${host}${image.medium.url}"></a>`;
    html += "</div>";
    html += '<div class="item-right">';
    html += "<a href =" + "/page/blogs/child-blog.html?id=" + item.id + ">";
    html += `<h2>${item.attributes.title}</h2>`;
    html += "</div>";
    html += "</div>";
    return html;
  });
  document.getElementById("highlight-post").innerHTML = html;
};

var searching = async (e) => {
  e.preventDefault();
  keySearch = keyword.value.toLowerCase();
  console.log(keySearch);

  let searchData = await fetch(
    `${host}/api/Posts?populate[0]=thumbImage&filters[title][$containsi][1]=${keySearch}`
  )
    .then((data) => data.json())
    .then((datajson) => {
      console.log("check data s", datajson);
      var items = datajson.data;
      hlPost.innerHTML = load;
      setTimeout(() => {
        renderHightLightPost(items);
      }, 1500);
    });
};
but.addEventListener("click", (e) => searching(e));

displayHTMLBlog();
