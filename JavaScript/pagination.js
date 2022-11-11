let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;
const host = "http://localhost:1337";
var listItems = [];
const getUser = async () => {
    try{
        await fetch(`${host}/api/Posts?populate=thumbImage`).then(
            res => {
                return res.json();
            }
        ).then(
            data => {
                var topic = document.getElementById("topic");
                var items = data.data;
                let totalPages = Math.ceil(items.length / perPage);
                listItems.push(items);
                var load = "<div class= 'load-wrap'>"
                load += "<div class = 'load'>";
                load += "<div class= 'line'></div>";
                load += "<div class= 'line'></div>";
                load += "<div class= 'line'></div>";
                load += "</div>";
                load += '</div>';
                // console.log("check load item",load);
                topic.innerHTML = load;
                setTimeout(()=> {
                    initRender(items, totalPages); 
                },1500)
                
            }
        )
    }catch(e){
        console.log(e);
    }
    
}
getUser();


var keyword = document.getElementById('keyword');
var but = document.getElementById("sb");

var searching = (e) => {
    e.preventDefault();
    keySearch = keyword.value.toLowerCase();
    if(listItems.indexOf(keySearch) === -1){
        console.log("no match");
    }else{
        console.log("oke");
    }
}
but.addEventListener("click",(e)=>searching(e));
var clearPageItem = () => {
    const prePage = document.querySelector('.topic .pagination .pre-page');
    const nxtPage = document.querySelector('.topic .pagination .nxt-page');
    if(totalPages === 0 || totalPages === 1){
        prePage.style.display = 'none';
        nxtPage.style.display = 'none';
     }
}

function initRender(items, totalPage) {
    // clearPageItem();
    renderTopic(items);
    renderListPage(totalPage);
}


function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(items.length / perPage);
}

getCurrentPage(1);

function renderTopic(topic) {
    html = "";
    const content = topic.map((item, index) => {
        var image = item.attributes.thumbImage.data.attributes.formats;
        if (index >= start && index < end) {
            html += '<div class="item-topic">';
            html += '<a class = onclick-image href = ' + "/page/blogs/" + item.attributes.slug + '>';
            html +=
                "<img  src=" + host +
                image.medium.url +
                " class = " +
                "'" +
                "image-item" +
                "'" +
                ">";
            html += "</a>"
            // html += "<div class = 'show-more'>";
            // html += "<h5>Xem thêm</h5>";
            // html += "</div>";
            html += "<a href =" +"/page/blogs/" + item.attributes.slug + ">"
            html +=
                "<div " +
                // "onclick =" +
                // "location.href=" +
                // item.link +
                " class = " +
                "'" +
                "overlay-item" +
                "'" +
                ">";
            html += '<div class = "title-item">'+'<h4>' + item.attributes.title + '</h4>'+ "</div>";
            html += '<p class = "content-item">' + item.attributes.subTitle + "</p>";
            html += '<a class = ' + "'navigation'" + 'href ='+ "/page/blogs/" + item.attributes.slug;
            html += '>'
            html += 'Xem chi tiết'
            html += '</a>'
            html += "</div>";
            html += "</a>"
            html += "<a href =" + item.attributes.slug  + ">";
            html += '<div class = "title-mobile" >' + item.attributes.title + "</div>";
            html += "</a>"
            html += '<div class = "content-mobile">' + item.attributes.subTitle + "</div>";
            html += "</div>";
            return html;
        }
    });
    document.getElementById("topic").innerHTML = html;
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
            getCurrentPage(idPage);
            renderTopic(items);
        };
    }
}

changePage();

$(".nxt-page").on("click", () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $(".nxt-page").addClass("disable");
    } else {
        $(".nxt-page").removeClass("disable");
    }
    // console.log(idPage);
    const btnPre = document.querySelector(".pre-page");
    btnPre.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage);
    renderTopic(items);
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
    const btnNext = document.querySelector(".nxt-page");
    btnNext.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage);
    renderTopic(items);
});