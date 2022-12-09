// function onload
setInitLangue();
var localLanguage = localStorage.getItem("language");

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
        slugs: "./page/pages/Service1.html",
        image: "icon-home2.png",
      },
      {
        title: "Website Design",
        content:
          "Create a full-fledged website with unique features tailored to your company and its individual needs. In addition, we also optimize the content and images on the Website.",
        slugs: "./page/pages/Service2.html",
        image: "icon2-home2.png",
      },
      {
        title: "Amazon Account Management",
        content:
          "Create and manage Amazon business account. Our team will offer solutions in running ads, optimizing product listings,... at a reasonable cost.",
        slugs: "./page/pages/Service3.html",
        image: "icon3-home2.png",
      },
      {
        title: "Marketing Course",
        content:
          "Provide quality marketing courses including a strong foundation of Marketing knowledge and case studies.",
        slugs: "#",
        image: "icon4-home2.png",
      },
    ],
  },
};
let dataOurWorkingProcess = {
  vi: {
    title: "Quy trình công việc",
    subTitle:
      "Các dự án tại Staspi được triển khai theo một quy trình nhất quán và chuyên nghiệp. Với 5 bước làm việc được liên kết chặt chẽ, chúng tôi cam kết chất lượng và hiệu quả công việc luôn ở mức cao nhất.",
    image: "./images/component-service.jpg",
    titleButton: "Xem Thêm",
  },
  en: {
    title: "Our Working Process",
    subTitle:
      "Staspi employs a thorough and professional working process. With 5 rigorous steps, we are dedicated to delivering the highest quality and work efficiency.",
    image: "/images/component-service-en.png",
    titleButton: "Learn more",
  },
};
let dataUsDifferent = {
  vi: {
    title: "Điều khác biệt ở Staspi",
    item: [
      {
        id: 0,
        title: "Không ngừng<br>Sáng tạo",
      },
      {
        id: 1,
        title: "Giải quyết<br>Nhanh chóng",
      },
      {
        id: 2,
        title: "Chủ động<br>Hỗ trợ",
      },
    ],
  },
  en: {
    title: "What makes us different?",
    item: [
      {
        id: 0,
        title: "Ceaseless <br>Creativity",
      },
      {
        id: 1,
        title: "Quick <br>solutions",
      },
      {
        id: 2,
        title: "Active <br>support",
      },
    ],
  },
};
let dataBusiness = {
  vi: {
    title: "Data doanh nghiệp",
    subTitle: `Hơn 2 năm thành lập và phát triển, Staspi đã phục vụ hơn 100 khách hàng và đối tác, trong đó có tới 99% khách hàng có đánh giá tốt và hài lòng với dịch vụ của chúng tôi. Ngoài ra, Staspi đã triển khai hơn 50 dự án thành công trên hơn 6 nền tảng Digital Marketing như mạng xã hội, Google, Amazon,...<br><br>
    Những con số trên đã thể hiện được hiệu quả và chất lượng vượt trội mà Staspi mang lại cho khách hàng trong suốt thời gian qua. Vì vậy, chúng tôi tin rằng Staspi sẽ là một trợ thủ đắc lực trên con đường phát triển doanh nghiệp của khách hàng. Với phương châm: “Trải nghiệm càng tốt, sự hài lòng càng cao” - Staspi cam kết rằng khách hàng sẽ có những trải nghiệm tốt nhất và hài lòng tối đa về dịch vụ của chúng tôi.`,
    item: [
      {
        id: 0,
        numberData: "100+",
        content: "Khách hàng, đối tác",
      },
      {
        id: 1,
        numberData: "50+",
        content: "Dự án đã triển khai",
      },
      {
        id: 2,
        numberData: "99%",
        content: "Khách hàng hài lòng về dịch vụ",
      },
      {
        id: 3,
        numberData: "6+",
        content: "Nền tảng",
      },
    ],
  },
  en: {
    title: "Business data",
    subTitle: `Over two years of establishment and development, Staspi has worked with more than 100 customers and partners, of which 99% of customers have good reviews and are satisfied with our services. In addition, Staspi has conducted more than 50 successful projects on more than 6 digital Marketing platforms, such as social networks, Google, and Amazon,...<br><br>
    The above figures have demonstrated the outstanding results and exceptional services that Staspi has delivered to customers. Therefore, we believe that Staspi will be a helpful assistant throughout your business growth journey. With the slogan: "Better experience, better satisfaction" - Staspi ensures that customers will have the best experience and maximum satisfaction.`,
    item: [
      {
        id: 0,
        numberData: "100+",
        content: "customers and partners",
      },
      {
        id: 1,
        numberData: "50+",
        content: "successful projects",
      },
      {
        id: 2,
        numberData: "99%",
        content: "customers satisfaction",
      },
      {
        id: 3,
        numberData: "6+",
        content: "digital platforms",
      },
    ],
  },
};
let dataOurPartner = {
  vi: {
    title: "Đối tác của chúng tôi",
  },
  en: {
    title: "Our partners",
  },
};
let dataClientWeb = {
  vi: {
    title: "Sản phẩm của khách hàng",
  },
  en: {
    title: "Our clients get results",
  },
};

let dataTestimonial = {
  vi: {
    title: "Phản hồi từ khách hàng",
    item: [
      {
        id: 0,
        name: "Chị Tracy Trần",
        brand: "Chủ Pro Nails & Skincare",
        comment:
          "Chị thích sự nhiệt tình, năng nổ, siêng năng của các em. Nhờ sự sáng tạo và đoàn kết của các bạn nhân viên tại Staspi, Website và Instagram của chị đã được hoàn thành hết sức xuất sắc. Chị chắc chắn sẽ tiếp tục ủng hộ các hoạt động của Staspi trong tương lai! ",
      },
      {
        id: 1,
        name: "Chị Julie Nguyễn",
        brand: "Chủ Phở 79 DC",
        comment:
          "Rất cảm ơn Hoàng và đội nhóm đã đồng hành cùng chị và hỗ trợ chị hết mình! Các em không những dễ thương mà còn rất nhiệt tình và thân thiện nữa! Love u all! ",
      },
      {
        id: 2,
        name: "Chị Kelly Duong",
        brand: "Chủ EF You Lashes",
        comment: `
        Chị chọn Staspi vì chị thích team của công ty, làm việc rất nhiệt tình, có tinh thần học hỏi, cầu tiến, cầu toàn, thân thiện, dễ thương 🥰 .
        Các em làm việc có kế hoạch rõ ràng.
        Làm việc vì đam mê 👍.
        `,
      },
      {
        id: 3,
        name: "Dr Hieu Vu",
        brand: "Chủ thương hiệu Hylar",
        comment:
          "Tôi đã bị ấn tượng bởi sự chuyên nghiệp và nhiệt tình của Staspi. Staspi triển khai công việc rất có kế hoạch, nhờ vậy nên mọi thứ đều hoàn thành trước thời hạn được đề ra. Điều tôi thích nhất ở Staspi là đội ngũ nhân viên trẻ hết sức năng động, nhiệt tình giải đáp và giúp đỡ khách hàng ở nhiều vấn đề. ",
      },
    ],
  },
  en: {
    title: "Testimonials",
    item: [
      {
        id: 0,
        name: "Mrs. Tracy Tran",
        brand: "Owner of Pro Nails & Skin Care",
        comment:
          "Many thanks to Hoang and the team for accompanying me and supporting me wholeheartedly! They are not only cute but also very active and friendly! Love u all!",
      },
      {
        id: 1,
        name: "Mrs. Julie Nguyen",
        brand: "Owner of Pho DC 79",
        comment:
          "I love that Staspi is always enthusiastic and works very hard to deliver top-quality work. Thanks to the creativity and solidarity of the staff at Staspi, my website, and Instagram have been built. Will definitely continue to support Staspi in the future!",
      },
      {
        id: 2,
        name: "Kelly Duong",
        brand: "EF You Lashes owner",
        comment:
          "I chose Staspi because I love the Staspi team who have worked really hard. They also have a willing-to-learn spirit with great carefulness. Besides, they are friendly people with passion and always have detailed plans before starting any projects 👍",
      },
      {
        id: 3,
        name: "Dr. Henry Vu",
        brand: "Hylar brand owner",
        comment:
          "I was impressed by Staspi's professionalism and enthusiasm. They made a coherent plan to complete everything before the scheduled time. What I like most about Staspi is the young staff, who are very dynamic, and always ready to help customers whether the problem is",
      },
    ],
  },
};
let formContactWithEmail = {
  vi: {
    title: "Để lại email",
    name: "Tên",
    email: "Email",
    phone: "Số điện thoại",
    titleButton: "Gửi liên hệ",
  },
  en: {
    title: "Email",
    name: "Name",
    email: "Email",
    phone: "Phone number",
    titleButton: "Send contact",
  },
};

let dataNavbar = {
  vi: {
    item: [
      {
        id: 0,
        title: "Trang Chủ",
      },
      {
        id: 1,
        title: "Về chúng tôi",
      },
      {
        id: 2,
        title: "Dịch vụ",
      },
      {
        id: 3,
        title: "Báo giá",
      },
      {
        id: 4,
        title: "Tuyển dụng",
      },
      {
        id: 5,
        title: "Bài viết",
      },
      {
        id: 6,
        title: "Liên hệ",
      },
    ],
    itemService: [
      {
        id: 0,
        title: "Marketing tổng thể",
      },
      {
        id: 1,
        title: "Thiết kế website",
      },
      {
        id: 2,
        title: "Quản lý tài khoản Amazon",
      },
      {
        id: 3,
        title: "Đào tạo marketing",
      },
    ],
  },
  en: {
    item: [
      {
        id: 0,
        title: "Home",
      },
      {
        id: 1,
        title: "About Us",
      },
      {
        id: 2,
        title: "Service",
      },
      {
        id: 3,
        title: "Rate cart",
      },
      {
        id: 4,
        title: "Hiring",
      },
      {
        id: 5,
        title: "Blogs",
      },
      {
        id: 6,
        title: "Contact",
      },
    ],
    itemService: [
      {
        id: 0,
        title: "Overall marketing",
      },
      {
        id: 1,
        title: "Website design",
      },
      {
        id: 2,
        title: "Amazon account management",
      },
      {
        id: 3,
        title: "Marketing course",
      },
    ],
  },
};
let footerContent = {
  vi: {
    headItem: [
      {
        text: "Thông tin liên hệ",
        item: [
          {
            text: `Địa chỉ: 158/14 Trần Huy Liệu, P.8,
              Quận Phú Nhuận TP. Hồ Chí Minh `,
          },
          {
            text: `Hotline:0816411445`,
          },
          {
            text: `Email:admin@staspi.com`,
          },
        ],
      },
      {
        text: "Dịch vụ",
        item: [
          {
            text: "Marketing tổng thể",
          },
          {
            text: "Thiết kế website",
          },
          {
            text: "Quản lý tài khoản Amazon",
          },
          {
            text: "Đào tạo marketing",
          },
        ],
      },
      {
        text: "Liên kết",
        item: [],
      },
    ],
  },
  en: {
    headItem: [
      {
        text: "Contact",
        item: [
          {
            text: `Address: 25A Dang Thai Mai,<br> Ward 7, Phu Nhuan District`,
          },
          {
            text: `Hotline:0816411445`,
          },
          {
            text: `Email:admin@staspi.com`,
          },
        ],
      },
      {
        text: "Service",
        item: [
          {
            text: "Overall Marketing",
          },
          {
            text: "Website Design",
          },
          {
            text: "Amazon Account Management",
          },
          {
            text: "Marketing Course",
          },
        ],
      },
      {
        text: "Social Media",
        item: [],
      },
    ],
  },
};

let dataAboutUs2 = {
  vi: {
    item: [
      {
        title: "Sứ mệnh",
        item: [
          {
            content:
              "<p>Staspi được sinh ra với sứ mệnh đồng hành cùng khách hàng trên chặng đường đưa hình ảnh chuyên nghiệp của doanh nghiệp đến với khách hàng mục tiêu với những giải pháp và chiến lược Marketing hiệu quả.<p>",
          },
          {
            content:
              "<p>Sự thành công của mỗi thương hiệu sẽ là những cột mốc đánh dấu từng bước Staspi hoàn thành sứ mệnh của mình.<p>",
          },
        ],
      },
      {
        title: "Tầm nhìn",
        item: [
          {
            content:
              "<p>Đến năm 2030, Staspi hướng đến trở thành công ty dẫn đầu về cung cấp các giải pháp Marketing tổng quát và tư vấn chiến lược phát triển vượt trội cho doanh nghiệp vừa và nhỏ ở thị trường Mỹ và Việt Nam.</p>",
          },
          {
            content:
              "<p>Chúng tôi luôn sẵn sàng đổi mới theo nhịp biến chuyển của thị trường, đặc biệt là những thay đổi trong hành vi và nhận thức của khách hàng. Từ đó xây dựng chiến lược phù hợp nhằm đưa công ty lên những tầm cao mới.</p>",
          },
        ],
      },
      {
        title: "Giá trị cốt lõi",
        item: [
          {
            content: "<p>1. Trải nghiệm khách hàng là ưu tiên hàng đầu</p>",
          },
          {
            content: "<p>2. Tôn trọng, và được tôn trọng</p>",
          },
          {
            content: "<p>3. Chia sẻ, để được chia sẻ</p>",
          },
          {
            content: "<p>4. Tiến lên, để không bị thụt lùi</p>",
          },
          {
            content: "<p>5. Tự tin, chủ động, sáng tạo</p>",
          },
        ],
      },
      {
        title: "Dịch vụ Staspi",
        item: [
          {
            content: `<a href="./pages/Service2.html" target="_blank"><p>1. Thiết kế website</p></a>`,
          },
          {
            content: `<a href="./pages/Service1.html" target="_blank"><p>2. Marketing tổng thể</p></a>`,
          },
          {
            content: `<a href="./pages/Service3.html" target="_blank"><p>3. Quản lý tài khoản Amazon</p></a>`,
          },
          {
            content: `<a><p>4. Đào tạo Marketing và Thương mại điện tử</p></a>`,
          },
        ],
      },
    ],
  },
  en: {
    item: [
      {
        title: "Mission",
        item: [
          {
            content:
              "<p>Staspi was born with the mission to accompany customers on the way to presenting a professional image to their target customers through our effective marketing solutions and strategies.<p>",
          },
          {
            content:
              "<p>The success of your brand will be milestones marking each step of Staspi fulfilling our mission.<p>",
          },
        ],
      },
      {
        title: "Vision",
        item: [
          {
            content:
              "<p>By 2030, Staspi aims to become a leading company providing effective marketing solutions and development strategies for small and medium enterprises in the US and Vietnam markets.</p>",
          },
          {
            content:
              "<p>We are always ready to improve continually in response to the transitioning market, especially fast-paced changes in customer behavior and perception. From there, we develop a suitable strategy to take the company to new heights.</p>",
          },
        ],
      },
      {
        title: "Core values",
        item: [
          {
            content: "<p>1. Customer experience is our top priority</p>",
          },
          {
            content: "<p>2. Respect others to be respected</p>",
          },
          {
            content: "<p>3. Share to be shared</p>",
          },
          {
            content: "<p>4. Move forward so as not to fall back</p>",
          },
          {
            content: "<p>5. Confident, proactive, creative</p>",
          },
        ],
      },
      {
        title: "Our Digital Marketing Expertise",
        item: [
          {
            content: `<a href="./pages/Service2.html" target="_blank"><p>1. Overall Marketing</p></a>`,
          },
          {
            content: `<a href="./pages/Service1.html" target="_blank"><p>2. Website Design</p></a>`,
          },
          {
            content: `<a href="./pages/Service3.html" target="_blank"><p>3. Amazon Account Management</p></a>`,
          },
          {
            content: `<a><p>4. Marketing Course</p></a>`,
          },
        ],
      },
    ],
  },
};

let dataOurServiceBanner = {
  vi: {
    title: "Các dịch vụ <br>của chúng tôi",
    content:
      "Staspi cung cấp đa dạng các dịch vụ Marketing phụ thuộc vào nhu cầu và mục đích riêng biệt của mỗi khách hàng. Mọi giải pháp của chúng tôi đưa ra đều mang tính sáng tạo, hiệu quả, đặc biệt là tối ưu về mặt thời gian và chi phí.",
    button: "Liên hệ ngay",
  },
  en: {
    title: "Our services",
    content:
      "Staspi provides a wide variety of digital marketing services that aligns with your unique needs and goals. We are confident in bringing creative, practical strategies capable of delivering remarkable results with minimum cost and time.",
    button: "Contact now",
  },
};
function renderHTMLServiceBanner() {
  titleBannerService.innerHTML = dataOurServiceBanner[localLanguage].title;
  contentBannerService.innerText = dataOurServiceBanner[localLanguage].content;
  buttonBannerService.textContent = dataOurServiceBanner[localLanguage].button;
}
//init Language
function setInitLangue() {
  if (!localStorage.language) {
    localStorage.setItem("language", "vi");
  }
}
// function set state button
function setStateButton() {
  if (localLanguage != "vi") {
    languageBtn.checked = "true";
  }
}

//function render html navbar
function renderHTMLNavbar() {
  for (let i = 0; i < dataNavbar[localLanguage].item.length; i++) {
    let item = document
      .getElementById("navs")
      .getElementsByClassName("item-navbars")[i];
    item.innerText = dataNavbar[localLanguage].item[i].title;
  }
  for (let i = 0; i < dataNavbar[localLanguage].itemService.length; i++) {
    let item = document
      .getElementById("subnav-service")
      .getElementsByClassName("item-subnav-service")[i];
    item.innerText = dataNavbar[localLanguage].itemService[i].title;
  }
}

// function render html aboutUs
function renderHTMLAboutUs() {
  titleAboutUs.innerHTML = dataAboutUs[localLanguage].title;
  contentAboutUs.innerHTML = dataAboutUs[localLanguage].content;
  buttonAboutUs.innerHTML = dataAboutUs[localLanguage].titleButton;
}

// function render html ourService
function renderHTMLOurService() {
  // var itemService = document.getElementsByClassName("flexbox-item");
  const componentService = document.querySelector(".flexbox-service");
  var html = "";
  for (var i = 0; i < dataOurService[localLanguage].item.length; i++) {
    html += `<div class="flexbox-item">`;
    html += `<a href="${dataOurService[localLanguage].item[i].slugs}">`;
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
    html += `<a href="${dataOurService[localLanguage].item[i].slugs}">`;
    html += `<button><p>${dataOurService[localLanguage].titleButton}</p></button>`;
    html += `</a>`;
    html += `</div>`;
    html += "</div>";
  }
  componentService.innerHTML = html;
  titleOurService.innerHTML = dataOurService[localLanguage].title;
}

//function render our working process
function renderHTMLOurWorkingProcess() {
  titleOurWorkingService.innerHTML = dataOurWorkingProcess[localLanguage].title;
  subTitleOurWorkingService.innerHTML =
    dataOurWorkingProcess[localLanguage].subTitle;
  imageOurWorkingService.src = dataOurWorkingProcess[localLanguage].image;
  buttonHomeOurWorkingService.innerHTML =
    dataOurService[localLanguage].titleButton;
}
function renderHTMLDifferent() {
  titleUsDifferent.innerHTML = dataUsDifferent[localLanguage].title;
  for (let i = 0; i < dataUsDifferent[localLanguage].item.length; i++) {
    let targetItem = document
      .getElementById("all-flex-home11")
      .getElementsByClassName("btn-home11-" + i)[0];
    targetItem.innerHTML = dataUsDifferent[localLanguage].item[i].title;
  }
}

// render html business
function renderHTMLDataBusiness() {
  titleDataBusiness.innerHTML = dataBusiness[localLanguage].title;
  subTitleBusiness.innerHTML = dataBusiness[localLanguage].subTitle;
  for (let i = 0; i < dataBusiness[localLanguage].item.length; i++) {
    let item = document
      .getElementById("home-5-right")
      .getElementsByClassName("item-title-" + i)[0];
    item.innerHTML = dataBusiness[localLanguage].item[i].content;
  }
}
function renderHTMLOurPartner() {
  titleOurPartner.innerHTML = dataOurPartner[localLanguage].title;
}

function renderHTMLOurWeb() {
  titleClientWeb.innerHTML = dataClientWeb[localLanguage].title;
}
function renderHTMLComponentTestimonial() {
  titleTestimonial.innerHTML = dataTestimonial[localLanguage].title;
  for (let i = 0; i < dataTestimonial[localLanguage].item.length; i++) {
    let name = document
      .getElementById("sld-feedback")
      .getElementsByClassName("customer-name-" + i)[0];
    let brand = document
      .getElementById("sld-feedback")
      .getElementsByClassName("brand-name-" + i)[0];
    let comment = document
      .getElementById("sld-feedback")
      .getElementsByClassName("comment-" + i)[0];

    name.innerHTML = dataTestimonial[localLanguage].item[i].name;
    brand.innerHTML = dataTestimonial[localLanguage].item[i].brand;
    comment.innerHTML = dataTestimonial[localLanguage].item[i].comment;
  }
}

function renderContactWithEmailForm() {
  let name = document.getElementsByName("name")[0];
  let email = document.getElementsByName("email")[0];
  let phone = document.getElementsByName("phone")[0];
  let button = document.getElementById("contact-email-button");
  titleFormContact.innerHTML = formContactWithEmail[localLanguage].title;
  name.placeholder = formContactWithEmail[localLanguage].name;
  email.placeholder = formContactWithEmail[localLanguage].email;
  phone.placeholder = formContactWithEmail[localLanguage].phone;
  button.innerHTML = formContactWithEmail[localLanguage].titleButton;
}
// function render text footer
function renderFooter() {
  for (let i = 0; i < footerContent[localLanguage].headItem.length; i++) {
    let headerText = document
      .getElementById("top-footer")
      .getElementsByClassName("title-footer-item")[i];
    headerText.innerHTML = footerContent[localLanguage].headItem[i].text;
  }
  for (
    let i = 0;
    i < footerContent[localLanguage].headItem[0].item.length;
    i++
  ) {
    let item = document
      .getElementById("top-footer")
      .getElementsByClassName("item-inf")[i];
    item.innerHTML = footerContent[localLanguage].headItem[0].item[i].text;
  }
  for (
    let i = 0;
    i < footerContent[localLanguage].headItem[1].item.length;
    i++
  ) {
    let item = document
      .getElementById("top-footer")
      .getElementsByClassName("item-service")[i];
    item.innerHTML = footerContent[localLanguage].headItem[1].item[i].text;
  }
}
function renderHTMLComponentAboutUs2() {
  for (let i = 0; i < dataAboutUs2[localLanguage].item.length; i++) {
    let titleItem = document
      .getElementById("component-aboutus-2")
      .getElementsByClassName("title-about-us-2")[i];
    titleItem.innerHTML = dataAboutUs2[localLanguage].item[i].title;
    var htmlItemAboutUs2 = "";
    for (let j = 0; j < dataAboutUs2[localLanguage].item[i].item.length; j++) {
      htmlItemAboutUs2 += dataAboutUs2[localLanguage].item[i].item[j].content;
    }
    let contentItem = document
      .getElementById("component-aboutus-2")
      .getElementsByClassName("content-item")[i];
    contentItem.innerHTML = htmlItemAboutUs2;
  }
}
