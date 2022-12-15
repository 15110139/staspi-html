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
    image: "/images/component-service.jpg",
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
            text: `Địa chỉ: 158/14 Trần Huy Liệu, P.8,<br>
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

let dataOverallMarketing = {
  vi: {
    title: "Marketing tổng thể",
    subTitle:
      "Chúng tôi cung cấp các giải pháp Marketing toàn diện, bao gồm tiếp cận khách hàng tiềm năng, quảng bá sản phẩm và xây dựng thương hiệu với mục đích tăng trưởng doanh thu, phát triển doanh nghiệp trên đa nền tảng. ",
    placeholderAdvise: "Nhập số điện thoại",
    buttonAdvise: "Nhận tư vấn",
  },
  en: {
    title: "Overall marketing",
    subTitle:
      "We provide comprehensive overall marketing strategies, including tactics to reach potential customers, market products, build brand awareness in order to generate more revenue, and grow your business on different digital platforms.",
    placeholderAdvise: "phone number",
    buttonAdvise: "get Advice",
  },
};
let dataOverallMarketingStrategies = {
  vi: {
    title: "Lý do cần kế hoạch Marketing tổng thể?",
    item: [
      {
        content: "Đẩy mạnh hiệu quả truyền thông",
      },
      {
        content: "Tiết kiệm chi phí Marketing",
      },
      {
        content: "Tăng khả năng tiếp cận khách hàng tiềm năng",
      },
      {
        content: "Củng cố vị trí của thương hiệu trên thị trường",
      },
    ],
  },
  en: {
    title: "The importance of overall marketing strategies",
    item: [
      {
        content: "Boost marketing results",
      },
      {
        content: "Save costs for marketing",
      },
      {
        content: "Increase your potential customer reach",
      },
      {
        content: "Strengthen your market position",
      },
    ],
  },
};

let dataWhyChooseUsOMS = {
  vi: {
    title: "Tại sao chọn chúng tôi",
    content:
      "Dịch vụ Marketing tổng thể tại Staspi giúp tiếp cận khách hàng hiệu quả hơn, tăng doanh thu và nhận thức thương hiệu. Chúng tôi tin rằng khách hàng sẽ hoàn toàn hài lòng về những hiệu quả vượt trội mà dịch vụ của Staspi mang lại.<br>Ngoài ra, sự chuyên nghiệp là tiêu chí hàng đầu tại Staspi. Mọi số liệu từ chiến dịch sẽ được gửi cho khách hàng. Đồng thời, Staspi cũng cam kết sẽ làm đúng như timeline, kế hoạch đã đề ra trước đó.",
    button: "Tìm hiểu thêm",
    item: [
      {
        content: "Kế hoạch bám sát thực tế",
      },
      {
        content: "Chủ động đề xuất giải pháp",
      },
      {
        content: "Tối ưu hóa tổng chi phí",
      },
      {
        content: "Giải quyết vấn đề nhanh chóng",
      },
    ],
  },
  en: {
    title: "Why choose us?",
    content:
      "Overall marketing service at Staspi helps to reach more customers, increase sales and promote brand awareness. We believe you will be delighted with the outstanding results Staspi's services bring out.</br>In addition, professionalism is Staspi’s top priority. As a result, any results from the campaign, whether they are good or bad, will be sent to the client. At the same time, Staspi also committed to following the timeline and plan set out earlier.",
    button: "Learn more",
    item: [
      {
        content: "Offer practical marketing strategies",
      },
      {
        content: "Proactively provide support",
      },
      {
        content: "Keep marketing costs to a minimum",
      },
      {
        content: "Solve problems quickly",
      },
    ],
  },
};
let dataWhyChooseUsWebDesign = {
  vi: {
    title: "Tại sao chọn chúng tôi",
    content:
      "Với đội ngũ chuyên nghiệp, Staspi tư vấn và hỗ trợ khách hàng thiết kế giao diện website phù hợp nhất, từ đó lên kế hoạch tỉ mỉ và triển khai xây dựng. Website tại Staspi tuân theo các tiêu chí: chuẩn SEO, an toàn, thân thiện với người dùng và mang tính thẩm mỹ cao.<br>Bên cạnh đó, Staspi cung cấp nhiều tính năng khác nhau tùy vào mục đích của Website như: bán sản phẩm, quảng bá dịch vụ, elearning,... Sau khi hoàn thành Website, chúng tôi cũng hướng dẫn khách hàng tận tình trong quá trình quản lý và sử dụng. ",
    button: "Tìm hiểu thêm",
    item: [
      {
        content: "Thời gian triển khai nhanh chóng",
      },
      {
        content: "Website thân thiện người dùng",
      },
      {
        content: "Tương thích trên tất cả thiết bị",
      },
      {
        content: "Giao diện thu hút, chuyên nghiệp",
      },
    ],
  },
  en: {
    title: "Why choose us?",
    content:
      "Staspi will lead your digital marketing strategies and actively advises on tactics to design the most well-thought-out website you should leverage; then, we will plan and implement the whole project. Staspi provides websites complying with the criteria: SEO practices, high security, user-friendly website, responsive design, and visually appealing appearance.<br>Besides, websites delivered by Staspi are packed with many unique features depending on the website's purpose, such as: selling products, promoting services, and elearning,... After completing the website, we also teach customers how to use and manage the website ",
    button: "Learn more",
    item: [
      {
        content: "Fast<br> implementation",
      },
      {
        content: "User<br>friendly",
      },
      {
        content: "Compatible with multiple devices",
      },
      {
        content: "Professional and attractive website design",
      },
    ],
  },
};
let dataWhyChooseUsAAM = {
  vi: {
    title: "Tại sao chọn chúng tôi",
    content:
      "Với đội ngũ nhân viên có kinh nghiệm lâu năm trong vận hành tài khoản trên Amazon và có kiến thức vững chắc về nền tảng này, Staspi sẽ mang đến cho khách hàng các kế hoạch bán hàng và tiếp thị hiệu quả, mang lại doanh thu cao với ngân sách tiết kiệm.<br>Là một đối tác chính thức của Amazon, Staspi còn hỗ trợ khách hàng liên hệ trực tiếp với Amazon để được hỗ trợ giải quyết vấn đề phát sinh kịp thời. Với các điều trên, Staspi tự tin là một trong những đơn vị quản lý tài khoản Amazon uy tín và chuyên nghiệp nhất trên thị trường.",
    button: "Tìm hiểu thêm",
    item: [
      {
        content: "Kế hoạch bán hàng cụ thể, thực tiễn",
      },
      {
        content: "Linh hoạt tối ưu quảng cáo, chi phí",
      },
      {
        content: "Đội ngũ chuyên viên dày dặn kinh nghiệm",
      },
      {
        content: "Hỗ trợ liên hệ trực tiếp Amazon",
      },
    ],
  },
  en: {
    title: "Why choose us?",
    content:
      "With our dedicated team of experts with extensive experience and knowledge in advertising on Amazon, Staspi is dedicated to guiding you through all the roadblocks in selling products on Amazon and scaling up your Amazon online business presence, thereby maximizing potential revenue through our strategic insights and planning.<br>As an Amazon partner agency, Staspi can help customers get in touch with Amazon for timely and effective problem solving. With all mentioned above, Staspi is proud of being one of the most professional and reliable Amazon Account Management agencies.",
    button: "Learn more",
    item: [
      {
        content: "Strategic and pragmatic plans",
      },
      {
        content: "Flexible listing optimization",
      },
      {
        content: "knowledgeable and experienced team",
      },
      {
        content: "Help contact Amazon",
      },
    ],
  },
};
let dataADSOverallMareting = {
  vi: {
    title: "Marketing tổng thể",
    allButton: "liên hệ ngay",
    item: [
      {
        title: "Quản lý Trang Mạng Xã Hội",
        content:
          "Sáng tạo nội dung nhằm tối ưu các trang mạng xã hội, giúp doanh nghiệp tăng độ uy tín và được biết đến nhiều hơn, từ đó tăng doanh thu đáng kể",
      },
      {
        title: "Tối Ưu Hóa Công Cụ Tìm Kiếm",
        content:
          "Tăng chất lượng và lưu lượng truy cập website bằng cách tăng khả năng hiển thị của website trên các công cụ tìm kiếm như Google, Yahoo,... ",
      },
      {
        title: "Phát Triển Kênh Tiktok",
        content:
          "Đề xuất nội dung viral nhằm tăng tương tác trên kênh Tiktok cho các cá nhân, doanh nghiệp.... Quản lý kênh Tiktok, sản xuất video nhằm phát triển kênh",
      },
      {
        title: "Thiết Kế Và Chỉnh Sửa",
        content:
          "Thiết kế các ấn phẩm truyền thông, đồ họa, in ấn cho các trang mạng xã hội, website,... dựa vào nhu cầu của khách hàng ",
      },
      {
        title: "Chạy Quảng Cáo",
        content:
          "Khai thác khách hàng tiềm năng từ Facebook, Google, Instagram,... bằng các chiến dịch quảng cáo tối ưu về mặt chi phí, đảm bảo kế hoạch đề ra.",
      },
      {
        title: "Phát Triển Kênh Youtube",
        content:
          "Đề xuất ý tưởng phát triển kênh Youtube cho doanh nghiệp. Tìm kiếm và lên kế hoạch đăng tải nội dung thu hút người dùng",
      },
    ],
  },
  en: {
    title: "Overall Marketing",
    allButton: "Contact now",
    item: [
      {
        title: "Social Media Management",
        content:
          "Create content to optimize social media pages, help businesses grow their visibility, build relationship with customers and ultimately generate more leads",
      },
      {
        title: "Search Engine Optimization",
        content:
          "Take steps to help your website rank higher on search engines such as Google, Yahoo,... by improving website quality and user experience",
      },
      {
        title: "Tiktok Marketing",
        content:
          "Provide all trendy content to stay ahead of the curve and get the most engagement from business videos. We also edit the videos and monitor the account daily.",
      },
      {
        title: "Graphic Design & Video Editing",
        content:
          "Design captivating social media graphics, from logo design to print design and everything between",
      },
      {
        title: "Social Media Advertising",
        content:
          "Attract potential customers from Facebook, Google, Instagram… by cost-saving and creative advertising campaign",
      },
      {
        title: "Youtube Marketing",
        content:
          "Propose ideas to develop business's youtube channel. Conduct research and make precise plans to attract more viewers and followers",
      },
    ],
  },
};

let dataADSWebDesign = {
  vi: {
    title: "Dịch vụ thiết kế website",
    allButton: "liên hệ ngay",
    item: [
      {
        title: "Thiết Kế Giao Diện",
        content:
          "Thiết kế giao diện Website đẹp, đầy đủ tính năng. Hỗ trợ tư vấn và đề xuất các lựa chọn phù hợp với mong muốn và mục đích sử dụng website của khách hàng",
      },
      {
        title: "Tối Ưu Nội Dung",
        content:
          "Đăng tải nội dung giới thiệu doanh nghiệp, sản phẩm theo ngôn ngữ Tiếng Việt/Anh lên website. Sáng tạo bài viết chuẩn SEO",
      },
      {
        title: "Lập Trình Website",
        content:
          "Nhận các dữ liệu của website và xây dựng hệ thống website hoàn chỉnh. Trang bị các công cụ hỗ trợ khách hàng quản trị website một cách dễ dàng hơn",
      },
      {
        title: "Thiết Kế Hình Ảnh",
        content:
          "Thiết kế banner, poster, hình ảnh sản phẩm, hình pop-up và các hình ảnh cần thiết khác cho website của doanh nghiệp",
      },
      {
        title: "Thiết Kế Landing Page",
        content:
          "Thiết kế Landing Page chuẩn SEO nhằm hỗ trợ chạy quảng cáo. Landing Page được thiết kế bởi Staspi luôn được tối ưu hóa và mang lại tỷ lệ chuyển đổi",
      },
      {
        title: "Thuê Hosting",
        content:
          "Cung cấp Hosting bảo mật, an toàn với chi phí thấp nhất. Ngoài ra chúng tôi cũng hỗ trợ mua tên miền (domain) cho doanh nghiệp",
      },
    ],
  },
  en: {
    title: "Website design services",
    allButton: "Contact now",
    item: [
      {
        title: "Layout design",
        content:
          "Build a fully-functional website with an attractive design. We also offer free consultations for customers to explore their needs and goals.",
      },
      {
        title: "Content optimization",
        content:
          "Create and structure content in both English and Vietnamese for website, including content for blog posts to increase lead generation",
      },
      {
        title: "Website coding",
        content:
          "Collect data to create a complete website packed with many features helping customers manage the website more easily.",
      },
      {
        title: "Graphic design",
        content:
          "Design banner, poster, product images, pop-ups and other graphics necessary for business's website",
      },
      {
        title: "Landing page design",
        content:
          "Build SEO-Friendly landing pages for running ads, increasing traffic to your website. Landing pages designed by Staspi can optimize your",
      },
      {
        title: "Web hosting",
        content:
          "Provide secure and scalable hosting at an affordable price. Besides, we also help customers find and buy a perfect domain for their brand.",
      },
    ],
  },
};
let dataFrmMarketingContact = {
  vi: {
    title: "Đăng ký dịch vụ Marketing tại Staspi ngay ngày hôm nay!",
    subTitle:
      "Bạn còn thắc mắc và phân vân? Điền vào biểu mẫu để nhận tư vấn miễn phí ngay từ chúng tôi!",
    button: "Đăng kí tư vấn",
    placeholder: [
      {
        title: "họ và tên",
      },
      {
        title: "Số điện thoại",
      },
      {
        title: "dịch vụ đăng ký",
      },
      {
        title: "lời nhắn ......",
      },
    ],
  },
  en: {
    title: "Try our marketing service today!",
    subTitle:
      "You have questions? Fill out the form below to get free consultation from Staspi now!",
    button: "Get free consultation",
    placeholder: [
      {
        title: "Name",
      },
      {
        title: "Phone Number",
      },
      {
        title: "Note ......",
      },
      {
        title: "Your questions",
      },
    ],
  },
};
let dataFrmWebDesignContact = {
  vi: {
    title: "Đăng ký dịch vụ thiết kế website tại Staspi ngay ngày hôm nay!",
    subTitle:
      "Bạn còn thắc mắc và phân vân? Điền vào biểu mẫu để nhận tư vấn miễn phí ngay từ chúng tôi!",
    button: "Đăng kí tư vấn",
    placeholder: [
      {
        title: "họ và tên",
      },
      {
        title: "Số điện thoại",
      },
      {
        title: "dịch vụ đăng ký",
      },
      {
        title: "lời nhắn ......",
      },
    ],
  },
  en: {
    title: "Try our web design service today!",
    subTitle:
      "You have questions? Fill out the form below to get free consultation from Staspi now!",
    button: "Get free consultation",
    placeholder: [
      {
        title: "Name",
      },
      {
        title: "Phone Number",
      },
      {
        title: "Note ......",
      },
      {
        title: "Your questions",
      },
    ],
  },
};
let dataFrmAAMContact = {
  vi: {
    title:
      "Đăng ký dịch vụ quản lý tài khoản Amazon tại Staspi ngay ngày hôm nay!",
    subTitle:
      "Bạn còn thắc mắc và phân vân? Điền vào biểu mẫu để nhận tư vấn miễn phí ngay từ chúng tôi!",
    button: "Đăng kí tư vấn",
    placeholder: [
      {
        title: "họ và tên",
      },
      {
        title: "Số điện thoại",
      },
      {
        title: "dịch vụ đăng ký",
      },
      {
        title: "lời nhắn ......",
      },
    ],
  },
  en: {
    title: "Try our amazon account management service today!",
    subTitle:
      "You have questions? Fill out the form below to get free consultation from Staspi now!",
    button: "Get free consultation",
    placeholder: [
      {
        title: "Name",
      },
      {
        title: "Phone Number",
      },
      {
        title: "Note ......",
      },
      {
        title: "Your questions",
      },
    ],
  },
};

let dataWebDesign = {
  vi: {
    title: "Thiết Kế Website",
    subTitle:
      "Staspi đáp ứng mọi yêu cầu của khách hàng về website như thiết kế giao diện, tối ưu hóa nội dung website, tăng trải nghiệm người truy cập website,... Chúng tôi có thể làm website cho đa dạng ngành nghề như website bán hàng, giới thiệu doanh nghiệp,... chuẩn SEO một cách dễ dàng, nhanh chóng với chi phí tối ưu nhất.",
    placeholderAdvise: "Nhập số điện thoại",
    buttonAdvise: "Nhận tư vấn",
  },
  en: {
    title: "Website design",
    subTitle:
      "We turnkey the entire process of designing and building a high-performing website, including creating layout, optimizing website content, increasing user experience,... We offer many types of websites, such as business website, blog website, eCommerce website,... Staspi also helps you achieve higher organic rankings at an affordable price through SEO practices.",
    placeholderAdvise: "phone number",
    buttonAdvise: "get Advice",
  },
};
let dataAAM = {
  vi: {
    title: "Quản lý tài khoản<br>Amazon",
    subTitle:
      "Staspi cung cấp dịch vụ đăng ký và quản lý tài khoản trên trang Thương mại điện tử lớn nhất thế giới Amazon. Đồng thời chúng tôi cũng hỗ trợ đưa ra những giải pháp chạy quảng cáo, tối ưu trang bán hàng, sản phẩm,... trên Amazon với chi phí hợp lý nhất.",
    placeholderAdvise: "Nhập số điện thoại",
    buttonAdvise: "Nhận tư vấn",
  },
  en: {
    title: "Amazon Account Management",
    subTitle:
      "Staspi sets up Amazon business accounts and offers strategies to manage these accounts on Amazon - the largest eCommerce company. Besides, we also handle all processes involving advertising, product listings, listing optimization,...",
    placeholderAdvise: "phone number",
    buttonAdvise: "get Advice",
  },
};

let dataWebDesignStrategies = {
  vi: {
    title: "Lý do cần xây dựng Website?",
    item: [
      {
        content: "Cung cấp đầy đủ thông tin của doanh nghiệp",
      },
      {
        content: "Quảng bá sản phẩm và dịch vụ 24/7",
      },
      {
        content: "Tăng phạm vị và khả năng tiếp cận khách hàng",
      },
      {
        content: "Nâng cao tính chuyên nghiệp",
      },
    ],
  },
  en: {
    title: "The importance of building a website",
    item: [
      {
        content: "To provide general information on business",
      },
      {
        content: "To sell and market your products/services 24/7",
      },
      {
        content: "Increase visibility and reach to potential customers",
      },
      {
        content: "Enhance your professional image",
      },
    ],
  },
};
let dataAAMStrategies = {
  vi: {
    title: "Lý do cần quản lý tài khoản Amazon?",
    item: [
      {
        content: "Quảng cáo được tối ưu hơn nhờ vào kế hoạch vận hành phù hợp",
      },
      {
        content: "Thu hút được đúng tệp khách hàng tiềm năng của doanh nghiệp",
      },
      {
        content: "Thúc đẩy quyết định mua hàng",
      },
      {
        content:
          "Các số liệu được thu thập đầy đủ hơn nhằm phục vụ mục đích marketing",
      },
    ],
  },
  en: {
    title: "The importance of Amazon Account Management",
    item: [
      {
        content: "Drive more leads with our strategic plans",
      },
      {
        content:
          "Attract and reach out to the right target customers of your business",
      },
      {
        content: "Accelerate buyer purchase decision",
      },
      {
        content: "Collect data essential for marketing campaigns",
      },
    ],
  },
};

let dataADSAAM = {
  vi: {
    title: "Dịch vụ thiết kế website",
    allButton: "liên hệ ngay",
    item: [
      {
        title: "Chuẩn hóa listing",
        content:
          "Tối ưu 4 yếu tố: tiêu đề, bullet points, từ khóa và hình ảnh trên trang sản phẩm của khách hàng nhằm thu hút khách hàng và tăng khả năng hiển thị",
      },
      {
        title: "Thiết kế gian hàng",
        content:
          "Dựa trên phong cách được định vị bởi khách hàng, Staspi sẽ xây dựng cửa hàng trực tuyến của doanh nghiệp trên Amazon bắt mắt và thu hút",
      },
      {
        title: "Lên kế hoạch bán hàng",
        content:
          "Lên kế hoạch bán hàng và tiếp thị sản phẩm chi tiết, cụ thể nhằm. Dựa vào kế hoạch bán hàng, chủ doanh nghiệp sẽ giảm thiểu được rủi ro và chi phí",
      },
      {
        title: "Vận hành tài khoản",
        content:
          "Đăng ký tài khoản, xác thực thông tin doanh nghiệp trên Amazon. Theo dõi, vận hành tài khoản và liên tục cập nhật các thuật toán mới của Amazon",
      },
      {
        title: "Nghiên cứu thị trường",
        content:
          "Nghiên cứu sản phẩm, thị trường, đối thủ,... nhằm điều chỉnh sản phẩm và chạy quảng cáo phù hợp, tăng khả năng tiếp cận của doanh nghiệp",
      },
      {
        title: "Tối ưu quảng cáo",
        content:
          "Nghiên cứu, triển khai các chiến dịch quảng cáo trên Amazon với mục tiêu tăng doanh số và nhận thức thương hiệu của khách hàng",
      },
    ],
  },
  en: {
    title: "Amazon Account Management",
    allButton: "Contact now",
    item: [
      {
        title: "Listing Optimization",
        content:
          "Optimize: headings, bullet points, keywords and images on product pages to improve conversion rates and viewability",
      },
      {
        title: "Branded Amazon store building",
        content:
          "Based on the preference of customers, Staspi will build your online business on Amazon that is eye-catching and appealing",
      },
      {
        title: "Sales Planning",
        content:
          "Do detailed and specific sales and marketing planning. Based on the sales plan, businesses can manage the potential risks and reduce costs",
      },
      {
        title: "Account Management",
        content:
          "Register and protect your business account on Amazon. Monitor and operate your account and keep up-to-date with new Amazon algorithms",
      },
      {
        title: "Market Research",
        content:
          "Conduct research into products, markets, competitors, ... to adjust products and run successful ads, in that way, eliciting favorable customer feedback and attracting more customers",
      },
      {
        title: "Advertising Optimization",
        content:
          "Implement advertising campaigns on Amazon to increase sales and brand awareness of your businesses",
      },
    ],
  },
};

let hiringPage = {
  vi: {
    titleInfo: "Thông tin về Staspi",
    titleWorkEnvi: "Môi trường làm việc",
    titleHiringPost: "Bài viết tuyển dụng",
    subTitleInfo:
      "Staspi Agency cung cấp giải pháp, định hướng marketing cho các doanh nghiệp trong và ngoài Việt Nam. Chúng tôi cam kết mang đến cho khách hàng những dịch vụ quảng cáo hiệu quả ,với trải nghiệm tuyệt vời nhất.<br>Bạn có muốn đồng hành cùng Staspi trên con đường phát triển bản thân và tìm kiếm những giải pháp Marketing đột phá? Hãy liên hệ ngay với chúng tôi nhé!",
  },
  en: {
    titleInfo: "About Staspi's team",
    titleWorkEnvi: "Working environment",
    titleHiringPost: "Recruitment Posts",
    subTitleInfo:
      "Staspi Agency offers comprehensive marketing solutions to businesses across the world. We are committed to providing our customers with not only effective and creative advertising strategies but also the exceptional experience.<br>Do you want to accompany Staspi on the path of self-development and search for breakthrough Marketing solutions? Contact us now!",
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
function renderHTMLOurServices() {
  // var itemService = document.getElementsByClassName("flexbox-item");
  const componentService = document.querySelector(".flexbox-service");
  var html = "";
  for (var i = 0; i < dataOurService[localLanguage].item.length; i++) {
    html += `<div class="flexbox-item">`;
    html += `<a href="${dataOurService[localLanguage].item[i].slugs}">`;
    html += `<div class="img_flex">`;
    html += `<img src="../images/${dataOurService[localLanguage].item[i].image}" alt="" />`;
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
//function render html overall marketing
function renderHTMLOverallMarketing() {
  const contentOverallMarking = document.querySelectorAll(
    ".content-overall-marketing"
  );
  const subTitleOverallMarketing = document.querySelectorAll(
    ".subtitle-overall-marketing"
  );
  const placeholderOverallMarketing =
    document.getElementsByName("phone-number");
  const buttonSubmitPhone = document.querySelectorAll(".content-submit-phone");
  for (let i = 0; i < contentOverallMarking.length; i++) {
    contentOverallMarking[i].innerHTML =
      dataOverallMarketing[localLanguage].title;
  }
  for (let i = 0; i < subTitleOverallMarketing.length; i++) {
    subTitleOverallMarketing[i].innerHTML =
      dataOverallMarketing[localLanguage].subTitle;
  }
  for (let i = 0; i < placeholderOverallMarketing.length; i++) {
    placeholderOverallMarketing[i].placeholder =
      dataOverallMarketing[localLanguage].placeholderAdvise;
  }
  for (let i = 0; i < buttonSubmitPhone.length; i++) {
    buttonSubmitPhone[i].innerHTML =
      dataOverallMarketing[localLanguage].buttonAdvise;
  }
}

//function render html OverallMarketingStrategies dataOverallMarketingStrategies
function renderHTMLOMStrategies() {
  let title = document.getElementById("title-omstrategies");
  let item = document
    .getElementById("component-omstrategies")
    .getElementsByTagName("li");
  title.innerText = dataOverallMarketingStrategies[localLanguage].title;
  for (
    let i = 0;
    i < dataOverallMarketingStrategies[localLanguage].item.length;
    i++
  ) {
    item[i].innerText =
      dataOverallMarketingStrategies[localLanguage].item[i].content;
  }
}

//function render html why choose us dataWhyChooseUsOMS
function renderHTMLWhyChooseUSOMS() {
  let title = document.getElementById("title-service2");
  let content = document.getElementById("content-sv2");
  let button = document.getElementById("btn-sv2");
  let item = document
    .getElementById("service2-component")
    .querySelectorAll(".title-sv2-item");
  title.innerText = dataWhyChooseUsOMS[localLanguage].title;
  content.innerHTML = dataWhyChooseUsOMS[localLanguage].content;
  button.innerText = dataWhyChooseUsOMS[localLanguage].button;
  for (let i = 0; i < dataWhyChooseUsOMS[localLanguage].item.length; i++) {
    item[i].innerText = dataWhyChooseUsOMS[localLanguage].item[i].content;
  }
}
//function render html ads overall marketing dataADSOverallMareting
function renderHTMLADSOverallMarketing() {
  let title = document.getElementById("title-sv3");
  let titleItem = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".title-item-sv3");
  let contentItem = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".content-item-sv3");
  let button = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".btn-item-sv3");

  title.innerText = dataADSOverallMareting[localLanguage].title;
  for (let i = 0; i < dataADSOverallMareting[localLanguage].item.length; i++) {
    titleItem[i].innerText =
      dataADSOverallMareting[localLanguage].item[i].title;
    contentItem[i].innerText =
      dataADSOverallMareting[localLanguage].item[i].content;
    button[i].innerText = dataADSOverallMareting[localLanguage].allButton;
  }
}

// render html marketing contact dataFrmMarketingContact
function renderHTMLFrmMarketingContact() {
  let title = document.getElementById("title-sv5");
  let subTitle = document.getElementById("sub-title-sv5");
  let button = document.getElementById("btn-sv5");
  let inputPlaceholderName = document.getElementsByName("name")[0];
  let inputPlaceholderPhone = document.getElementsByName("phone")[0];
  let inputPlaceholderNote = document.getElementsByName("message")[0];
  title.innerText = dataFrmMarketingContact[localLanguage].title;
  subTitle.innerText = dataFrmMarketingContact[localLanguage].subTitle;
  button.innerText = dataFrmMarketingContact[localLanguage].button;
  let defaultOption = document.getElementById("default-option-sv5-om");
  inputPlaceholderName.placeholder =
    dataFrmMarketingContact[localLanguage].placeholder[0].title;
  inputPlaceholderPhone.placeholder =
    dataFrmMarketingContact[localLanguage].placeholder[1].title;
  inputPlaceholderNote.placeholder =
    dataFrmMarketingContact[localLanguage].placeholder[2].title;
  defaultOption.innerText =
    dataFrmMarketingContact[localLanguage].placeholder[3].title;
}
//render html web design
function renderHTMLWebDesign() {
  const contentWebDesign = document.querySelectorAll(".content-web-design");
  const subTitleWebDesign = document.querySelectorAll(".subtitle-web-design");
  const placeholderWebDesign = document.getElementsByName("phone-number");
  const buttonSubmitPhone = document.querySelectorAll(".content-submit-phone");
  for (let i = 0; i < contentWebDesign.length; i++) {
    contentWebDesign[i].innerHTML = dataWebDesign[localLanguage].title;
  }
  for (let i = 0; i < subTitleWebDesign.length; i++) {
    subTitleWebDesign[i].innerHTML = dataWebDesign[localLanguage].subTitle;
  }
  for (let i = 0; i < placeholderWebDesign.length; i++) {
    placeholderWebDesign[i].placeholder =
      dataWebDesign[localLanguage].placeholderAdvise;
  }
  for (let i = 0; i < buttonSubmitPhone.length; i++) {
    buttonSubmitPhone[i].innerHTML = dataWebDesign[localLanguage].buttonAdvise;
  }
}
//function render html OverallMarketingStrategies dataOverallMarketingStrategies
function renderHTMLWebDesignStrategies() {
  let title = document.getElementById("title-web-design-strategies");
  let item = document
    .getElementById("component-web-design-strategies")
    .getElementsByTagName("li");
  title.innerText = dataWebDesignStrategies[localLanguage].title;
  for (let i = 0; i < dataWebDesignStrategies[localLanguage].item.length; i++) {
    item[i].innerText = dataWebDesignStrategies[localLanguage].item[i].content;
  }
}
function renderHTMLWhyChooseUSWebDesign() {
  let title = document.getElementById("title-service2");
  let content = document.getElementById("content-sv2");
  let button = document.getElementById("btn-sv2");
  let item = document
    .getElementById("service2-component")
    .querySelectorAll(".title-sv2-item");
  title.innerText = dataWhyChooseUsWebDesign[localLanguage].title;
  content.innerHTML = dataWhyChooseUsWebDesign[localLanguage].content;
  button.innerText = dataWhyChooseUsWebDesign[localLanguage].button;
  for (
    let i = 0;
    i < dataWhyChooseUsWebDesign[localLanguage].item.length;
    i++
  ) {
    item[i].innerHTML = dataWhyChooseUsWebDesign[localLanguage].item[i].content;
  }
}

//function render html ads WebDesign dataADSOverallMareting
function renderHTMLADSWebDesign() {
  let title = document.getElementById("title-sv3");
  let titleItem = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".title-item-sv3");
  let contentItem = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".content-item-sv3");
  let button = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".btn-item-sv3");

  console.log(button);
  title.innerText = dataADSWebDesign[localLanguage].title;
  for (let i = 0; i < dataADSWebDesign[localLanguage].item.length; i++) {
    titleItem[i].innerText = dataADSWebDesign[localLanguage].item[i].title;
    contentItem[i].innerText = dataADSWebDesign[localLanguage].item[i].content;
    button[i].innerHTML = dataADSWebDesign[localLanguage].allButton;
  }
}
// render html marketing contact dataFrmMarketingContact
function renderHTMLFrmWebDesign() {
  let title = document.getElementById("title-sv5");
  let subTitle = document.getElementById("sub-title-sv5");
  let button = document.getElementById("btn-sv5");
  let inputPlaceholderName = document.getElementsByName("name")[0];
  let inputPlaceholderPhone = document.getElementsByName("phone")[0];
  let inputPlaceholderNote = document.getElementsByName("message")[0];
  title.innerText = dataFrmWebDesignContact[localLanguage].title;
  subTitle.innerText = dataFrmWebDesignContact[localLanguage].subTitle;
  button.innerText = dataFrmWebDesignContact[localLanguage].button;
  let defaultOption = document.getElementById("default-option-sv5-om");
  inputPlaceholderName.placeholder =
    dataFrmWebDesignContact[localLanguage].placeholder[0].title;
  inputPlaceholderPhone.placeholder =
    dataFrmWebDesignContact[localLanguage].placeholder[1].title;
  inputPlaceholderNote.placeholder =
    dataFrmWebDesignContact[localLanguage].placeholder[2].title;
  defaultOption.innerText =
    dataFrmWebDesignContact[localLanguage].placeholder[3].title;
}

//render html web design
function renderHTMLAmazonAccountManager() {
  const contentWebDesign = document.querySelectorAll(".content-sv1");
  const subTitleWebDesign = document.querySelectorAll(".subtitle-sv1");
  const placeholderWebDesign = document.getElementsByName("phone-number");
  const buttonSubmitPhone = document.querySelectorAll(".content-submit-phone");
  for (let i = 0; i < contentWebDesign.length; i++) {
    contentWebDesign[i].innerHTML = dataAAM[localLanguage].title;
  }
  for (let i = 0; i < subTitleWebDesign.length; i++) {
    subTitleWebDesign[i].innerHTML = dataAAM[localLanguage].subTitle;
  }
  for (let i = 0; i < placeholderWebDesign.length; i++) {
    placeholderWebDesign[i].placeholder =
      dataAAM[localLanguage].placeholderAdvise;
  }
  for (let i = 0; i < buttonSubmitPhone.length; i++) {
    buttonSubmitPhone[i].innerHTML = dataAAM[localLanguage].buttonAdvise;
  }
}
//function render html OverallMarketingStrategies dataOverallMarketingStrategies
function renderHTMLAAMStrategies() {
  let title = document.getElementById("title-sv4-strategies");
  let item = document
    .getElementById("component-sv4-strategies")
    .getElementsByTagName("li");
  title.innerText = dataAAMStrategies[localLanguage].title;
  for (let i = 0; i < dataAAMStrategies[localLanguage].item.length; i++) {
    item[i].innerText = dataAAMStrategies[localLanguage].item[i].content;
  }
}
function renderHTMLWhyChooseUSAAM() {
  let title = document.getElementById("title-service2");
  let content = document.getElementById("content-sv2");
  let button = document.getElementById("btn-sv2");
  let item = document
    .getElementById("service2-component")
    .querySelectorAll(".title-sv2-item");
  title.innerText = dataWhyChooseUsAAM[localLanguage].title;
  content.innerHTML = dataWhyChooseUsAAM[localLanguage].content;
  button.innerText = dataWhyChooseUsAAM[localLanguage].button;
  for (let i = 0; i < dataWhyChooseUsAAM[localLanguage].item.length; i++) {
    item[i].innerHTML = dataWhyChooseUsAAM[localLanguage].item[i].content;
  }
}

//function render html ads WebDesign dataADSOverallMareting
function renderHTMLADSAAM() {
  let title = document.getElementById("title-sv3");
  let titleItem = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".title-item-sv3");
  let contentItem = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".content-item-sv3");
  let button = document
    .getElementById("component-item-sv3")
    .querySelectorAll(".btn-item-sv3");

  console.log(button);
  title.innerText = dataADSAAM[localLanguage].title;
  for (let i = 0; i < dataADSAAM[localLanguage].item.length; i++) {
    titleItem[i].innerText = dataADSAAM[localLanguage].item[i].title;
    contentItem[i].innerText = dataADSAAM[localLanguage].item[i].content;
    button[i].innerHTML = dataADSAAM[localLanguage].allButton;
  }
}
// render html marketing contact dataFrmMarketingContact
function renderHTMLFrmAAM() {
  let title = document.getElementById("title-sv5");
  let subTitle = document.getElementById("sub-title-sv5");
  let button = document.getElementById("btn-sv5");
  let inputPlaceholderName = document.getElementsByName("name")[0];
  let inputPlaceholderPhone = document.getElementsByName("phone")[0];
  let inputPlaceholderNote = document.getElementsByName("message")[0];
  title.innerText = dataFrmAAMContact[localLanguage].title;
  subTitle.innerText = dataFrmAAMContact[localLanguage].subTitle;
  button.innerText = dataFrmAAMContact[localLanguage].button;
  let defaultOption = document.getElementById("default-option-sv5-om");
  inputPlaceholderName.placeholder =
    dataFrmAAMContact[localLanguage].placeholder[0].title;
  inputPlaceholderPhone.placeholder =
    dataFrmAAMContact[localLanguage].placeholder[1].title;
  inputPlaceholderNote.placeholder =
    dataFrmAAMContact[localLanguage].placeholder[2].title;
  defaultOption.innerText =
    dataFrmAAMContact[localLanguage].placeholder[3].title;
}
//html render component hiring page hiringPage
function renderHTMLHiringPage() {
  let titleInfo = document.getElementById("title-info-hiring");
  let contentInfo = document.getElementById("content-info-hiring");
  let titleWorkEnvi = document.getElementById("title-work-envi");
  let titleRecruitPost = document.getElementById("title-recruit-post");
  titleInfo.innerText = hiringPage[localLanguage].titleInfo;
  contentInfo.innerHTML = hiringPage[localLanguage].subTitleInfo;
  titleWorkEnvi.innerText = hiringPage[localLanguage].titleWorkEnvi;
  titleRecruitPost.innerText = hiringPage[localLanguage].titleHiringPost;
}
