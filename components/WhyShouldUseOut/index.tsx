import styles from "@/styles/WhyShouldUseOut/whyshoulduseuout.module.css";
import { useState } from 'react';
// import arr from './data';

const WhyShouldUseOut = ({ innerWith }: any) => {

  const [buttonSpan, setButtonSpan] = useState(0);
  const [pTagColor, setPTagColor] = useState(0);
  return (

    <>
      <div className={styles.why_use}>
        <div className={styles.title}>
          <p className={styles.title_one}>Tại sao nên sử dụng</p>
          <h2>Dịch vụ PBN bên ngoài mà không tự xây dựng?</h2>
          <p className={styles.decs}>
            Nhiều anh em nghĩ việc xây dựng hệ hệ thống PBN khá đơn giản và dễ
            dàng. Tuy nhiên,
            <br />
            khi bắt tay vào thực hiện mới thấy những khó khăn khi vận hành, kèm
            theo mức chi phí
            <br />
            bỏ ra ban đầu khá lớn mà xây xong chưa chắc sử dụng được.
          </p>
        </div>
        <div className={styles.main}>
          <div className={styles.onemain}>
            <div className={styles.box} style={{ background: buttonSpan === 0 ? "transparent" : "linear-gradient(to right, #41d7ec, #c904de)" }}>
              <p className={buttonSpan === 0 ? styles.childOne : styles.childTwo} onClick={() => { setButtonSpan(0) }} >
                Tiết kiệm chi phí thực hiện và nhân sự quản lý
              </p>
            </div>
            <div className={styles.box} style={{ background: buttonSpan === 1 ? "transparent" : "linear-gradient(to right, #41d7ec, #c904de)" }}>
              <p className={buttonSpan === 1 ? styles.childOne : styles.childTwo} onClick={() => { setButtonSpan(1) }} >
                Tránh được các vấn đề liên quan đến kỹ thuật SEO
              </p>
            </div>
            <div className={styles.box} style={{ background: buttonSpan === 2 ? "transparent" : "linear-gradient(to right, #41d7ec, #c904de)" }}>
              <p className={buttonSpan === 2 ? styles.childOne : styles.childTwo} onClick={() => { setButtonSpan(2) }}>
                Không cần mua các công cụ theo dõi Website
              </p>
            </div>
          </div>
          <div className={styles.twomain} style={{ display: buttonSpan === 0 ? 'block' : "none" }}>
            <div className={styles.title} >
              <p>
                Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời gian. Những chi phí mà bạn phải bỏ ra để xây dựng có thể kể đến như tên miền, hosting, content, nhân sự quản lý.

              </p>
              <p>
                Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần mua tên miền với giá 200-750.000; hosting 1 năm khoản 500.000-2.000.000, content 30 bài khoản 6-10 triệu, chi phí thuê nhân sự… Vậy, để đầu tư một website bạn sẽ mất đâu đó từ 8-15 triệu.
              </p>
              <p>
                Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu, dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó thời gian sẽ lâu hơn rất nhiều.

              </p>
              <p>
                Như vậy, để xây dựng một PBN bài bản, có thể áp dụng được sẽ mất rất nhiều thời gian và chi phí. Và thay vì phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN, việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu mà bạn có thể lựa chọn.

              </p>
            </div>
            <div className={styles.image}>
              <img height={270} src="/images/image-1.png" />
            </div>
          </div>
          <div className={styles.twomain} style={{ display: buttonSpan === 1 ? 'block' : "none" }} >
            <div className={styles.title} >
              <p>
                Sử dụng dịch vụ PBN sẽ giúp hạn chế các vấn đề liên quan đến kỹ thuật SEO, backlink hay quản lý domain… Vì các bên cung cấp dịch vụ hiện nay đều có đội ngũ nhân sự kinh nghiệm sẽ quản lý tất cả những điều này.
              </p>

            </div>
            <div className={styles.image}>
              <img height={270} src="/images/image-1.png" />
            </div>
          </div>
          <div className={styles.twomain} style={{ display: buttonSpan === 2 ? 'block' : "none" }}>
            <div className={styles.title}>
              <p>
                Để theo dõi tình hình phát triển của website, thứ hạng từ khóa, độ uy tín thương hiệu… tất nhiên sẽ cần rất nhiều công cụ để theo dõi. Và đương nhiên, những công cụ này thường có chi phí khá đắt. Do vậy, nếu sử dụng dịch vụ PBN sẽ giúp bạn tiết kiệm khá nhiều thời gian và công sức.
              </p>
              <p>
                Một vài công cụ phổ biến, cần thiết trong SEO hiện nay có thể kể đến như:
              </p>
              <p>
                Ahrefs là một công cụ cần thiết để kiểm tra sức mạnh tổng thể của một trang web: backlink, tỷ lệ anchor-text, DR, UR và nhiều chi tiết khác.
                Bạn nên dùng bản chuẩn để đạt hiệu quả tốt nhất tuy nhiên giá hơi mắc. Để giải quyết vấn đề này, bạn có thể mua chúng với một SEOer khác để cùng sử dụng, giá sẽ rẻ hơn.
              </p>
              <p>
                Majestic SEO là công cụ giúp bạn kiểm soát CF, TF và các chủ đề kế thừa trên trang web của bạn.<br />Mozbar Công cụ kiểm tra chỉ số DA, PA của website. Đối với 1 số SEOer thì điểm này có vai trò khác nhau.

              </p>
              <p>
                Ngoài ra, khi xây dựng hệ thống PBN, địa chỉ IP của trang chủ cũng phải được xác minh và Find IP Address rất phù hợp để dễ dàng xác minh địa chỉ IP. Lưu ý các website trong hệ thống PBN không được cùng một IP. Vì nếu trùng sẽ rất dễ dính thuật toán Penguin của Google.

              </p>
              <p>
                Như bạn thấy, để xây dựng một hệ thống website PBN với năng lực cá nhân là cực kỳ khó khăn. Thế nên việc tìm một dịch vụ PBN là điều nên làm để hạn chế tối đa các rủi ro có thể xảy ra.

              </p>
            </div>
            <div className={styles.image}>
              <img height={270} src="/images/image-1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.why_use}>
        <div className={styles.title}>
          <p className={styles.title_one}>Tại sao nên sử dụng</p>
          <h2>Hệ thống PBN của Dịch vụ PBN</h2>
          <p className={styles.decs}>
            Hệ thống PBN của Dịch vụ PBN có những ưu điểm vượt trội mà bạn hoàn
            toàn có thể trải nghiệm và cảm nhận. Chúng tôi đã phục vụ hàng ngàn
            khách hàng và nhận được vô vàng những đánh giá tích cực.
          </p>
        </div>
        <div className={styles.mainTwo}>
          <div className={styles.box}>
            <div className={styles.leftContent}>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 0 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} onClick={() => setPTagColor(0)} style={{ background: pTagColor === 0 ? "#5708cd" : "white" }}>
                    <p style={{ color: pTagColor === 0 ? "white" : "rgba(188, 156, 235, 1)" }} >Tỷ lệ Google phát hiện footprint cực kỳ thấp</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 0 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 0 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }


                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 0 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Mỗi website pbn được xây dựng như một website chính thức, có lượng truy cập và các chỉ số uy tín cao nên việc đặt textlink footer hay backlink trên bài viết sẽ không ảnh hưởng xấu đến website mà còn mang lại sức mạnh ranking vượt trội.
                        </p>
                        <p>Sẽ tùy vào từng dự án cụ thể mà chúng tôi sẽ tư vấn phương án đi link phù hợp nhất.</p>
                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" >
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 1 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 1 ? "#5708cd" : "white" }} onClick={() => setPTagColor(1)}>
                    <p style={{ color: pTagColor === 1 ? "white" : "rgba(188, 156, 235, 1)", }}>Các liên kết được đặt một cách phù hợp và tự nhiên </p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 1 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 1 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 1 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Dựa trên nhu cầu, chủ đề mà website của bạn đang hướng tối, chúng tôi sẽ sản xuất và thêm nội dung chất lượng với các liên kết theo ngữ cảnh phù hợp nhất có thể. Làm tăng tính tự nhiên của backlink, tránh bị Google phạt.
                        </p>
                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 2 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 2 ? "#5708cd" : "white" }} onClick={() => setPTagColor(2)}>
                    <p style={{ color: pTagColor === 2 ? "white" : "rgba(188, 156, 235, 1)" }}>Tính độc đáo và số lượng của website trong hệ thống </p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 2 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 2 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 2 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Chỉ tính riêng số lượng, dichvupbn có đến hơn 5.000 website trong hệ thống với đa dạng các lĩnh vực khác nhau. Chúng tôi tự tin có thể đáp ứng mọi nhu cầu sử dụng dịch vụ PBN từ ngân sách nhỏ đến lớn.
                        </p>
                        <p>
                          Mỗi trang web được xây dựng riêng lẻ và sử dụng logo, màu sắc và thiết kế giao diện người dùng riêng biệt với các giao diện và chủ đề khác nhau, không chồng chéo, v.v.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Điều này làm cho các trang hệ thống PBN trở nên tự nhiên và độc lập hơn. Do đó, chúng có thể được đánh giá như những site chính đang hoạt động bình thường hơn là site vệ tinh.

                        </p>
                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 3 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 3 ? "#5708cd" : "white" }} onClick={() => setPTagColor(3)}>
                    <p style={{ color: pTagColor === 3 ? "white" : "rgba(188, 156, 235, 1)" }}>Premium Web Hosting</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 3 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 3 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }
                  </div>
                </div>
                <div className={styles.titleMobile}>
                  <div className={styles.content} style={{ display: pTagColor === 3 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          dichvupbn luôn đặt các trang web của mình được lưu trữ trên các dịch vụ lưu trữ hoặc chia sẻ lưu trữ chất lượng để tránh bị Google đánh lỗi lập chỉ mục và chịu phạt.
                        </p>

                        <p>
                          Tất cả các trang web của Hệ thống PBN đều được lưu trữ trên server cao cấp với tốc độ  truy cập nhanh và đáng tin cậy.
                        </p>

                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 4 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 4 ? "#5708cd" : "white" }} onClick={() => setPTagColor(4)}>
                    <p style={{ color: pTagColor === 4 ? "white" : "rgba(188, 156, 235, 1)" }}>Domain</p>

                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 4 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 4 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 4 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Tất cả các website Dịch vụ Backlink PBN đều có lịch sử domain trong sạch, không spam, được mua từ các domain lâu đời uy tín và được sàn đấu giá chọn lọc kỹ càng với các chỉ số SEO TF/CF/DA/PA cao.

                        </p>

                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 5 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 5 ? "#5708cd" : "white" }} onClick={() => setPTagColor(5)}>
                    <p style={{ color: pTagColor === 5 ? "white" : "rgba(188, 156, 235, 1)" }}>IP Lớp A, B, C</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 5 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 5 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }
                  </div>
                </div>
                <div className={styles.titleMobile}>
                  <div className={styles.content} style={{ display: pTagColor === 5 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Hệ thống backlink PBN được lưu trữ với các địa chỉ IP riêng biệt. Ưu tiên tạo các trang web ở IP Lớp A, Lớp B, Lớp C. Tất cả thông tin máy chủ DNS  được ẩn và bảo vệ theo hai cách để đảm bảo tính bảo mật tối đa của mạng lưới PBN.

                        </p>


                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bigCustom}>
                <div className={styles.custom} style={{ background: pTagColor === 6 ? "transparent" : "linear-gradient(to right,  #41d7ec, #c904de" }}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 6 ? "#6708cd" : "white" }} onClick={() => setPTagColor(6)}>
                    <p style={{ color: pTagColor === 6 ? "white" : "rgba(188, 156, 235, 1)" }}>Tùy chỉnh tự nhiên</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    {innerWith > 767
                      ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 6 ? "rotate(90deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                      : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 6 ? "rotate(180deg)" : "unset" }}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>)
                    }
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 6 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Một số trang web dịch PBN  được tùy chỉnh để giống với blog của người dùng  nhất có thể, ví dụ: ruy băng trong tiêu đề hoặc thanh bên, tiện ích tín hiệu xã hội trong thanh bên, biểu mẫu đăng ký để nhập vào thanh tìm kiếm trang. . thư điện tử, v.v.

                        </p>


                      </div>
                      <div className={styles.image}>
                        {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.rightContent}>
              <div className={styles.custom}>
                <div className={styles.customBorder}>
                  <div className={styles.twomain} style={{ display: pTagColor === 0 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>
                        Mỗi website pbn được xây dựng như một website chính thức, có lượng truy cập và các chỉ số uy tín cao nên việc đặt textlink footer hay backlink trên bài viết sẽ không ảnh hưởng xấu đến website mà còn mang lại sức mạnh ranking vượt trội.
                      </p>
                      <p>Sẽ tùy vào từng dự án cụ thể mà chúng tôi sẽ tư vấn phương án đi link phù hợp nhất.</p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                  <div className={styles.twomain} style={{ display: pTagColor === 1 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>
                        Dựa trên nhu cầu, chủ đề mà website của bạn đang hướng tối, chúng tôi sẽ sản xuất và thêm nội dung chất lượng với các liên kết theo ngữ cảnh phù hợp nhất có thể. Làm tăng tính tự nhiên của backlink, tránh bị Google phạt.
                      </p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                  <div className={styles.twomain} style={{ display: pTagColor === 2 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>Chỉ tính riêng số lượng, dichvupbn có đến hơn 5.000 website trong hệ thống với đa dạng các lĩnh vực khác nhau. Chúng tôi tự tin có thể đáp ứng mọi nhu cầu sử dụng dịch vụ PBN từ ngân sách nhỏ đến lớn.</p>
                      <p>Mỗi trang web được xây dựng riêng lẻ và sử dụng logo, màu sắc và thiết kế giao diện người dùng riêng biệt với các giao diện và chủ đề khác nhau, không chồng chéo, v.v.</p>
                      <p>Điều này làm cho các trang hệ thống PBN trở nên tự nhiên và độc lập hơn. Do đó, chúng có thể được đánh giá như những site chính đang hoạt động bình thường hơn là site vệ tinh. </p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                  <div className={styles.twomain} style={{ display: pTagColor === 3 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>
                        dichvupbn luôn đặt các trang web của mình được lưu trữ trên các dịch vụ lưu trữ hoặc chia sẻ lưu trữ chất lượng để tránh bị Google đánh lỗi lập chỉ mục và chịu phạt.
                      </p>
                      <p>Tất cả các trang web của Hệ thống PBN đều được lưu trữ trên server cao cấp với tốc độ  truy cập nhanh và đáng tin cậy. </p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                  <div className={styles.twomain} style={{ display: pTagColor === 4 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>
                        Tất cả các website Dịch vụ Backlink PBN đều có lịch sử domain trong sạch, không spam, được mua từ các domain lâu đời uy tín và được sàn đấu giá chọn lọc kỹ càng với các chỉ số SEO TF/CF/DA/PA cao.
                      </p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                  <div className={styles.twomain} style={{ display: pTagColor === 5 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>
                        Hệ thống backlink PBN được lưu trữ với các địa chỉ IP riêng biệt. Ưu tiên tạo các trang web ở IP Lớp A, Lớp B, Lớp C. Tất cả thông tin máy chủ DNS  được ẩn và bảo vệ theo hai cách để đảm bảo tính bảo mật tối đa của mạng lưới PBN.
                      </p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                  <div className={styles.twomain} style={{ display: pTagColor === 6 ? "block" : "none" }}>
                    <div className={styles.title}>
                      <p>
                        Một số trang web dịch PBN  được tùy chỉnh để giống với blog của người dùng  nhất có thể, ví dụ: ruy băng trong tiêu đề hoặc thanh bên, tiện ích tín hiệu xã hội trong thanh bên, biểu mẫu đăng ký để nhập vào thanh tìm kiếm trang. . thư điện tử, v.v.
                      </p>
                    </div>
                    <div className={styles.image}>
                      <img height={270} src="/images/image-1.png" />
                      {/* <img height={270} src="/images/image-1.png" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyShouldUseOut;
