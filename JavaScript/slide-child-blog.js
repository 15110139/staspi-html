let perPage = 3;
let idPage = 1;
// host = "http://localhost:1337";
 host = 'https://admin-staspi.herokuapp.com';

$(Document).ready(async () => {
  const items = await fetchBlog();
  let start = 0;
  let end = perPage;
  let len = items.data.length;

  var mobileResponsive = () => {
    if (window.innerWidth < 829) {
      perPage = 1;
    } else {
      perPage = 3;
    }
    return perPage;
  };

  mobileResponsive();

  let totalPages = Math.ceil(len / perPage);
  initRender(items, totalPages, start, end);
  getCurrentPage(1, items, start, end);

  $(".nxt-page").on("click", () => {
    idPage++;
    // console.log(items);
    if (idPage > totalPages) {
      idPage = totalPages;
    }
    if (idPage == totalPages) {
      $(".nxt-page").addClass("disable");
    } else {
      $(".nxt-page").removeClass("disable");
    }
    console.log(idPage);
    const btnPre = document.querySelector(".pre-page");
    btnPre.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage, items, start, end);
    renderPost(items, start, end);
    return idPage;
  });

  $(".pre-page").on("click", () => {
    idPage--;
    if (idPage <= 0) {
      idPage = 1;
    }
    if (idPage == 1) {
      $(".pre-page").addClass("disable");
    } else {
      $(".pre-page").removeClass("disable");
    }
    console.log(idPage);
    const btnNext = document.querySelector(".nxt-page");
    btnNext.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage, items, start, end);
    renderPost(items, start, end);
    return idPage;
  });

  function getCurrentPage(indexPage, items) {
    //   console.log("check current page", items);
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(items.data.length / perPage);
  }

  function changePage() {
    const idPages = document.querySelectorAll(".page-number li");
    const a = document.querySelectorAll(".page-number li a");
    for (let i = 0; i < idPages.length; i++) {
      idPages[i].onclick = function () {
        let value = i + 1;
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.classList.add("active");
        if (value > 1 && value < idPages.length) {
          $(".btn-prev").removeClass("btn-active");
          $(".btn-next").removeClass("btn-active");
        }
        if (value == 1) {
          $(".btn-prev").addClass("btn-active");
          $(".btn-next").removeClass("btn-active");
        }
        if (value == idPages.length) {
          $(".btn-next").addClass("btn-active");
          $(".btn-prev").removeClass("btn-active");
        }
        idPage = value;

        getCurrentPage(idPage, items, start, end);
        renderPost(items, start, end);
        return idPage;
      };
    }
  }

  changePage();
});

const fetchBlog = async () => {
  let blogData = await fetch(`${host}/api/Posts?populate=thumbImage`)
    .then((data) => data.json())
    .then((datajson) => {
      blog = datajson;
      // console.log(datajson);
    });
  return blog;
};

// let itemArr = [];

// console.log("check total pages:",totalPages);
var clearPageItem = (totalPages) => {
  const prePage = document.querySelector(".posts .pagination .pre-page");
  const nxtPage = document.querySelector(".posts .pagination .nxt-page");
  if (totalPages === 0 || totalPages === 1) {
    prePage.style.display = "none";
    nxtPage.style.display = "none";
  }
};
function initRender(items, totalPage, start, end) {
  clearPageItem(totalPage);
  renderPost(items, start, end);
  renderListPage(totalPage);
}

function renderPost(post, start, end) {
  html = "";
  postlist = post.data;
  const content = postlist.map((item, index) => {
    // console.log(item);
    if (index >= start && index < end) {
      const image =
        item.attributes.thumbImage.data.attributes.formats.medium.url;
      html += '<div class="item-post">';
      html +=
        "<a class = onclick-image href = " +
        "/page/blogs/child-blog.html?id=" +
        item.id +
        ">";
      html += `<img  src="${host}${image}" class = 'image-item'
                ">`;
      html += "</a>";
      html +=
        "<div " +
        "onclick =" +
        "location.href='" +
        "/page/blogs/child-blog.html?id=" +
        item.id +
        "' class = " +
        "'" +
        "overlay-item" +
        "'" +
        ">";
      html +=
        '<div class = "title-item">' +
        "<h4>" +
        item.attributes.title +
        "</h4>" +
        "</div>";
      html += '<p class = "content-item">' + item.attributes.subTitle + "</p>";
      html +=
        "<a class = navigation href =" +
        "/page/blogs/child-blog.html?id=" +
        item.id +
        ">xem chi tiết </a>";
      html += "</div>";
      html += "<a href =" + item.link + ">";
      html +=
        '<div class = "title-mobile" >' + item.attributes.title + "</div>";
      html += "</a>";
      html +=
        '<div class = "content-mobile">' + item.attributes.subTitle + "</div>";
      html += "</div>";
      return html;
    }
  });
  document.getElementById("post").innerHTML = html;
}

function renderListPage(totalPages) {
  let html = "";
  html += `<li class=" page-item cur-page active"><a class = "page-link">${1}</a></li>`;
  for (let i = 2; i <= totalPages; i++) {
    html += `<li class=" page-item cur-page"><a class = "page-link">${i}</a></li>`;
  }
  if (totalPages === 0) {
    html = "";
  }
  document.getElementById("page-number").innerHTML = html;
}
