let perPage = 3;
let idPage = 1;
host = "http://localhost:1337";
// const items = [
//     {
//         id: 1,
//         image: "../../images/blog/cover-image/content-marketting-anhbia.png",
//         title: "CONTENT MARKETING LÀ GÌ? Ý TƯỞNG VIẾT CONTENT MARKETING THU HÚT KHÁCH HÀNG",
//         content:
//             "Content marketing là gì? Viết content marketing như thế nào để thú hút khách hàng? Cùng Staspi tìm hiểu những thông tin thú vị về content marketing trong bài viết dưới đây nhé!",
//         link: "'../blogs/content-marketing-la-gi-y-tuong-viet-content-marketing-thu-hut-khach-hang.html'",
//     },
//     {
//         id: 2,
//         image: "../../images/blog/cover-image/content-seo-anhbia.png",
//         title: "LÀM THẾ NÀO ĐỂ VIẾT CONTENT SEO: HƯỚNG DẪN VIẾT CONTENT CHUẨN SEO VỚI 5 BƯỚC ĐƠN GIẢN",
//         content: "Để một bài đăng được lên top tìm kiếm quả thật rất khó, bởi bài viết của bạn phải cạnh tranh với nhiều đối thủ khác trên thị trường. Bên cạnh những thủ thuật thì bài viết chuẩn SEO cũng là một trong những yêu cầu tiên quyết để leo rank trong cuộc đua xếp hạng tìm kiếm. Vậy làm thế nào để viết Content SEO? Trong bài viết này, Staspi sẽ hướng dẫn bạn cách viết content chuẩn SEO chỉ với 5 bước đơn giản có thể áp dụng được ngay.",
//         link: "'../blogs/lam-the-nao-de-viet-content-seo-huong-dan-viet-content-chuan-seo-voi-5-buoc-don-gian.html'",
//     },
//     {
//         id: 3,
//         image: "../../images/blog/cover-image/social-media-anh-bia.jpg",
//         title: "TỔNG HỢP KÍCH THƯỚC CHUẨN HÌNH ẢNH TRÊN CÁC KÊNH SOCIAL MEDIA",
//         content: "Social Media là nền tảng mang đến nhiều tiềm năng phát triển cho doanh nghiệp. Khi biết cách tối ưu hình ảnh chuẩn trên Social Media sẽ mang đến ấn tượng tốt và sự chuyên nghiệp đến với khách hàng. Và dưới đây là tổng hợp kích thước chuẩn hình ảnh trên các kênh Social Media, bạn nhớ lưu lại và áp dụng nhé!",
//         link: "'../blogs/tong-hop-kich-thuoc-chuan-hinh-anh-tren-cac-kenh-social-media.html'",
//     },
//     {
//         id: 4,
//         image: "../../images/blog/cover-image/meo-stnd-tiktok-anhbia.png",
//         title: "MẸO SÁNG TẠO NỘI DUNG TRÊN TIKTOK DỄ LÊN XU HƯỚNG",
//         content: "Tiktok là nền tảng mạng xã hội chia sẻ video ngắn phổ biến hiện nay, đây là sân chơi giải trí hấp dẫn đối với thế hệ Millennial và Gen Z. Nền tảng Tiktok cho thấy sự phát triển mạnh mẽ về độ phổ biến và số lượng người dùng gia tăng nhanh chóng vượt qua cả Facebook, Youtube, Instagram,.... Việc cho phép người dùng dễ dàng sáng tạo nội dung trên Tiktok đã góp phần lớn tạo nên sự thành công của nền tảng này. Vậy, giữa hàng ngàn video được đăng tải mỗi ngày thì làm sao để video của bạn nhận được nhiều sự quan tâm? Trong bài viết dưới đây, Staspi sẽ chia sẻ cho bạn mẹo sáng tạo nội dung trên Tiktok dễ lên xu hướng hiện nay nhé!",
//         link: "'../blogs/meo-sang-tao-noi-dung-tren-tik-tok-de-len-xu-huong.html'",
//     },
//     {
//         id: 5,
//         image: "../../images/blog/cover-image/tang-follow-tiktok-anhbia.png",
//         title: "10+ CÁCH TĂNG FOLLOW TIKTOK MIỄN PHÍ",
//         content: "Tiktok là một trong những ứng dụng phổ biến nhất hiện nay, mọi người từ bé đến lớn đều thích sử dụng nền tảng này. Với hơn 3 tỷ người sử dụng Tiktok, việc có nhiều người theo dõi có thể mở ra nhiều cơ hội cho nhà sáng tạo nội dung cũng như doanh nghiệp. Vậy làm thế nào để tăng follow Tiktok? Hãy cùng Staspi tham khảo ngay 10+ cách tăng follow Tiktok đơn giản, miễn phí sau đây nhé!",
//         link: "'../blogs/10-cach-tang-follow-tik-tok-mien-phi.html'",
//     },
//     {
//         id: 6,
//         image: "../../images/blog/cover-image/tao-video-tiktok-anhbia.png",
//         title: "HƯỚNG DẪN LÀM VIDEO TIKTOK BẰNG ĐIỆN THOẠI",
//         content: "Tiktok là sân chơi mới có số lượng người truy cập nhiều nhất hiện nay, người dùng có thể dễ dàng tham gia chia sẻ đa dạng nội dung thông qua dạng video ngắn. Nếu bạn chưa biết cách làm video tiktok, hãy tham khảo ngay bài chia sẻ dưới đây của Staspi.",
//         link: "'../blogs/huong-dan-lam-tik-tok-don-gian-bang-dien-thoai.html'",
//     },
// ];
$(Document).ready(async () => {
    
   const items = await fetchBlog();
    let start = 0;
    let end = perPage;
    let len = items.data.length;
    let totalPages = Math.ceil(len / perPage);
    initRender(items, totalPages,start,end);
    getCurrentPage(1,items,start,end);
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
var mobileResponsive = () =>{
    if (window.innerWidth < 829){
        perPage = 1;
    }
    else {
        perPage = 3;
    }
    return perPage;
}
// console.log("check total pages:",totalPages);
var clearPageItem = (totalPages) => {
    const prePage = document.querySelector('.posts .pagination .pre-page');
    const nxtPage = document.querySelector('.posts .pagination .nxt-page');
    if(totalPages === 0 || totalPages === 1){
        prePage.style.display = 'none';
        nxtPage.style.display = 'none';
     }
}
function initRender(items, totalPage,start,end) {
    clearPageItem(totalPage);
    renderPost(items,start,end);
    renderListPage(totalPage);
}


function getCurrentPage(indexPage,items,start,end) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(items.length / perPage);
}


function renderPost(post,start,end) {
    html = "";
    postlist = post.data;
    const content = postlist.map((item, index) => {
        console.log(item);
        if (index >= start && index < end) {
            const image = item.attributes.thumbImage.data.attributes.formats.medium.url;
            html += '<div class="item-post">';
            html += "<a class = onclick-image href = " +
            "/page/blogs/child-blog.html?id=" +
            item.id +
            ">";
            html +=
                `<img  src="${host}${image}" class = 'image-item'
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
            html += '<div class = "title-item">' + '<h4>' + item.attributes.title +'</h4>' +"</div>";
            html += '<p class = "content-item">' + item.attributes.subTitle + "</p>";
            html+=  '<a class = navigation href =' + "/page/blogs/child-blog.html?id=" +
            item.id  + '>xem chi tiết </a>'
            html += "</div>";
            html += "<a href =" + item.link  + ">";
            html += '<div class = "title-mobile" >' + item.attributes.title + "</div>";
            html += "</a>"
            html += '<div class = "content-mobile">' + item.attributes.subTitle + "</div>";
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
            renderPost(items);
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
    console.log(idPage);
    const btnPre = document.querySelector(".pre-page");
    btnPre.classList.remove("disable");
    $(".page-number li").removeClass("active");
    $(`.page-number li:eq(${idPage - 1})`).addClass("active");
    getCurrentPage(idPage);
    renderPost(items);
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
    renderPost(items);
});
