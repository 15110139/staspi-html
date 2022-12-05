//get tag atribute
// json data about us
let dataAboutUs = {
  vi: {
    title: "Về chúng tôi",
    content: `Staspi Agency cung cấp giải pháp, định hướng marketing cho các doanh nghiệp trong và ngoài Việt Nam. Chúng tôi cam kết mang đến cho khách hàng những dịch vụ quảng cáo hiệu quả ,với trải nghiệm tuyệt vời nhất. <br><br> Với kim chỉ nam<b>“Better Experience, Better Satisfaction"</b> - Chúng tôi đã, đang và sẽ cải tiến các dịch vụ, tạo ra những giá trị vượt xa sự mong đợi của khách hàng.`,
    titleButton: "Xem thêm",
  },
  en: {
    title: "About Us",
    content: `Staspi Agency offers comprehensive marketing solutions to businesses across the world. We are committed to providing our customers with not only effective and creative advertising strategies but also the exceptional experience.<br><br>With the slogan <b>"Better Experience, Better Satisfaction"</b> - We have been and will improve our services, creating values that exceed our customers' expectations.`,
    titleButton: "Learn more",
  },
};
let dataOurService = {
  vi: {
    title: "Các dịch vụ của chúng tôi",
    titleButton: "Tìm hiểu thêm",
    item: [
      {
        title: "Marketing tổng thể",
        content:
          "Xây dựng chiến lược Marketing toàn diện nhằm tăng phủ của thương hiệu, giúp doanh nghiệp tăng trưởng doanh thu",
        slugs: "Service1.html",
        image: "icon-home2.png",
      },
      {
        title: "Thiết kế website",
        content:
          "Lập trình Website với đầy đủ tính năng, đáp ứng nhu cầu phát triển của doanh nghiệp. Đồng thời, tối ưu nội dung và hình ảnh trên Website.",
        slugs: "Service2.html",
        image: "icon2-home2.png",
      },
      {
        title: "Quản lý tài khoản Amazon",
        content:
          "Đăng ký và quản lý tài khoản trên Amazon. Đưa ra những giải pháp chạy quảng cáo, tối ưu trang bán hàng,... với chi phí hợp lý.",
        slugs: "Service3.html",
        image: "icon3-home2.png",
      },
      {
        title: "Đào tạo Marketing",
        content:
          "Cung cấp các khóa học Marketing chất lượng, đem lại kiến thức nền tảng vững chắc và những case study mang tính ứng dụng cao",
        slugs: "#",
        image: "icon4-home2.png",
      },
    ],
  },
  en: {
    title: "Our Services",
    titleButton: "Learn more",
    item: [
      {
        title: "Overall Marketing",
        content:
          "Develop a comprehensive marketing strategy to increase brand awareness and maximize your revenue",
        slugs: "Service1.html",
        image: "icon-home2.png",
      },
      {
        title: "Website Design",
        content:
          "Create a full-fledged website with unique features tailored to your company and its individual needs. In addition, we also optimize the content and images on the Website.",
        slugs: "Service2.html",
        image: "icon2-home2.png",
      },
      {
        title: "Amazon Account Management",
        content:
          "Create and manage Amazon business account. Our team will offer solutions in running ads, optimizing product listings,... at a reasonable cost.",
        slugs: "Service3.html",
        image: "icon3-home2.png",
      },
      {
        title: "Marketing Course",
        content:
          "Provide quality marketing courses including a strong foundation of Marketing knowledge and case studies.",
        slugs: "",
        image: "icon4-home2.png",
      },
    ],
  },
};
//init Language
function setInitLangue() {
  if (!localStorage.language) {
    localStorage.setItem("language", "vi");
  }
}
// function set state button
function setStateButton(localLanguage) {
  if (localLanguage != "vi") {
    languageBtn.checked = "true";
  }
}

// function render html aboutUs
function renderHTMLAboutUs(localLanguage) {
  titleAboutUs.innerHTML = dataAboutUs[localLanguage].title;
  contentAboutUs.innerHTML = dataAboutUs[localLanguage].content;
  buttonAboutUs.innerHTML = dataAboutUs[localLanguage].titleButton;
}
// function render html ourService
function renderHTMLOurService(localLanguage) {
  var itemService = document.getElementsByClassName("flexbox-item");
  const componentService = document.querySelector(".flexbox-service");
  var html = "";
  for (var i = 0; i < dataOurService[localLanguage].item.length; i++) {
    html += `<div class="flexbox-item">`;
    html += `<a href="./page/pages/${dataOurService[localLanguage].item[i].slugs}">`;
    html += `<div class="img_flex">`;
    html += `<img src="./images/${dataOurService[localLanguage].item[i].image}" alt="" />`;
    html += `</div></a>`;
    html += `<div class="flex-content ">`;
    html += `<h5>${dataOurService[localLanguage].item[i].title}</h5>`;
    html += `</div>`;
    html += `<div class="flex-item">`;
    html += `<p>${dataOurService[localLanguage].item[i].content}</p>`;
    html += `</div>`;
    html += `<div class="flex-button">`;
    html += `<a href="./page/pages/${dataOurService[localLanguage].item[i].slugs}">`;
    html += `<button><p>${dataOurService[localLanguage].titleButton}</p></button>`;
    html += `</a>`;
    html += `</div>`;
    html += "</div>";
  }
  componentService.innerHTML = html;
  titleOurService.innerHTML = dataOurService[localLanguage].title;
}
