import styles from "@/styles/WhyShouldUseOut/whyshoulduseuout.module.css";
import { useState } from 'react';
import arr from './data';

const WhyShouldUseOut = (props: any) => {
  const [buttonSpan, setButtonSpan] = useState(0);
  const [pTagColor, setPTagColor] = useState(0);
  return (
    <>
      <div className={styles.why_use}>
        <div className={styles.title}>
          <p className={styles.title_one}>Tại sao nên sử dụng</p>
          <span>Dịch vụ PBN bên ngoài mà không tự xây dựng?</span>
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
            <div className={styles.box} style={{ backgroundColor: "#5708CD" }}>
              <p className={buttonSpan === 0 ? styles.childOne : styles.childTwo} onClick={() => { setButtonSpan(0) }} >
                Tiết kiệm chi phí thực hiện và nhân sự quản lý
              </p>
            </div>
            <div className={styles.box}>
              <p className={buttonSpan === 1 ? styles.childOne : styles.childTwo} onClick={() => { setButtonSpan(1) }} >
                Tránh được các vấn đề liên quan đến kỹ thuật SEO
              </p>
            </div>
            <div className={styles.box}>
              <p className={buttonSpan === 2 ? styles.childOne : styles.childTwo} onClick={() => { setButtonSpan(2) }}>
                Không cần mua các công cụ theo dõi Website
              </p>
            </div>
          </div>
          <div className={styles.twomain}>
            <div className={styles.title} style={{ display: buttonSpan === 0 ? 'block' : "none" }}>
              <p>
                Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời gian.
                Những chi phí mà bạn phải bỏ ra để xây dựng có thể kể đến như
                tên miền, hosting, content, nhân sự quản lý.
              </p>
              <p>
                Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần mua tên
                miền với giá 200-750.000; hosting 1 năm khoản 500.000-2.000.000,
                content 30 bài khoản 6-10 triệu, chi phí thuê nhân sự… Vậy, để
                đầu tư một website bạn sẽ mất đâu đó từ 8-15 triệu.
              </p>
              <p>
                Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu, dao động từ
                3-6 tháng tùy chủ đề. Một vài chủ đề khó thời gian sẽ lâu hơn
                rất nhiều.
              </p>
              <p>
                Như vậy, để xây dựng một PBN bài bản, có thể áp dụng được sẽ mất
                rất nhiều thời gian và chi phí. Và thay vì phải bỏ một số tiền
                lớn để tự xây dựng hệ thống PBN, việc thuê dịch vụ PBN sẽ là
                giải pháp hợp lý, tối ưu mà bạn có thể lựa chọn.
              </p>
            </div>
            <div className={styles.image} style={{ display: buttonSpan === 0 ? 'flex' : "none" }}>
              <img height={270} src="/images/image-1.png" />
            </div>
            <div className={styles.title} style={{ display: buttonSpan === 1 ? 'block' : "none" }}>
              <p>
                Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần mua tên
                miền với giá 200-750.000; hosting 1 năm khoản 500.000-2.000.000,
                content 30 bài khoản 6-10 triệu, chi phí thuê nhân sự… Vậy, để
                đầu tư một website bạn sẽ mất đâu đó từ 8-15 triệu.

              </p>
              <p>
                Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời gian.
                Những chi phí mà bạn phải bỏ ra để xây dựng có thể kể đến như
                tên miền, hosting, content, nhân sự quản lý.
              </p>
              <p>
                Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu, dao động từ
                3-6 tháng tùy chủ đề. Một vài chủ đề khó thời gian sẽ lâu hơn
                rất nhiều.
              </p>
              <p>
                Như vậy, để xây dựng một PBN bài bản, có thể áp dụng được sẽ mất
                rất nhiều thời gian và chi phí. Và thay vì phải bỏ một số tiền
                lớn để tự xây dựng hệ thống PBN, việc thuê dịch vụ PBN sẽ là
                giải pháp hợp lý, tối ưu mà bạn có thể lựa chọn.
              </p>
            </div>
            <div className={styles.image} style={{ display: buttonSpan === 1 ? 'flex' : "none" }}>
              <img height={270} src="/images/image-1.png" />
            </div>
            <div className={styles.title} style={{ display: buttonSpan === 2 ? 'block' : "none" }}>
              <p>
                Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời gian.
                Những chi phí mà bạn phải bỏ ra để xây dựng có thể kể đến như
                tên miền, hosting, content, nhân sự quản lý.
              </p>
              <p>
                Như vậy, để xây dựng một PBN bài bản, có thể áp dụng được sẽ mất
                rất nhiều thời gian và chi phí. Và thay vì phải bỏ một số tiền
                lớn để tự xây dựng hệ thống PBN, việc thuê dịch vụ PBN sẽ là
                giải pháp hợp lý, tối ưu mà bạn có thể lựa chọn.

              </p>
              <p>
                Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu, dao động từ
                3-6 tháng tùy chủ đề. Một vài chủ đề khó thời gian sẽ lâu hơn
                rất nhiều.
              </p>
              <p>
                Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần mua tên
                miền với giá 200-750.000; hosting 1 năm khoản 500.000-2.000.000,
                content 30 bài khoản 6-10 triệu, chi phí thuê nhân sự… Vậy, để
                đầu tư một website bạn sẽ mất đâu đó từ 8-15 triệu.
              </p>
            </div>
            <div className={styles.image} style={{ display: buttonSpan === 2 ? 'flex' : "none" }}>
              <img height={270} src="/images/image-1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.why_use}>
        <div className={styles.title}>
          <p className={styles.title_one}>Tại sao nên sử dụng</p>
          <span>Hệ thống PBN của Dịch vụ PBN</span>
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} onClick={() => setPTagColor(0)} style={{ background: pTagColor === 0 ? "#5708cd" : "white" }}>
                    <p style={{ color: pTagColor === 0 ? "white" : "rgba(188, 156, 235, 1)" }} >Tỷ lệ Google phát hiện footprint cực kỳ thấp</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 0 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 0 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 1 ? "#5708cd" : "white" }} onClick={() => setPTagColor(1)}>
                    <p style={{ color: pTagColor === 1 ? "white" : "rgba(188, 156, 235, 1)", }}>Các liên kết được đặt một cách phù hợp và tự nhiên </p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 1 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 1 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 2 ? "#5708cd" : "white" }} onClick={() => setPTagColor(2)}>
                    <p style={{ color: pTagColor === 2 ? "white" : "rgba(188, 156, 235, 1)" }}>Tính độc đáo và số lượng của website trong hệ thống </p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 2 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 2 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 3 ? "#5708cd" : "white" }} onClick={() => setPTagColor(3)}>
                    <p style={{ color: pTagColor === 3 ? "white" : "rgba(188, 156, 235, 1)" }}>Premium Web Hosting</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 3 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.titleMobile}>
                  <div className={styles.content} style={{ display: pTagColor === 3 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 4 ? "#5708cd" : "white" }} onClick={() => setPTagColor(4)}>
                    <p style={{ color: pTagColor === 4 ? "white" : "rgba(188, 156, 235, 1)" }}>Domain</p>

                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 4 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 4 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 5 ? "#5708cd" : "white" }} onClick={() => setPTagColor(5)}>
                    <p style={{ color: pTagColor === 5 ? "white" : "rgba(188, 156, 235, 1)" }}>IP Lớp A, B, C</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 5 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.titleMobile}>
                  <div className={styles.content} style={{ display: pTagColor === 5 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.custom}>
                  <div className={styles.customBorder} style={{ background: pTagColor === 6 ? "#6708cd" : "white" }} onClick={() => setPTagColor(6)}>
                    <p style={{ color: pTagColor === 6 ? "white" : "rgba(188, 156, 235, 1)" }}>Tùy chỉnh tự nhiên</p>
                    {/* <img src="/images/prenext.svg" height={27} width={27} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: pTagColor === 6 ? "rotate(90deg)" : "unset" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 15.5V9.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 11.5L12 8.5L15 11.5" stroke="#BC9CEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.titleMobile} >
                  <div className={styles.content} style={{ display: pTagColor === 6 ? "block" : "none" }}>
                    <div className={styles.titleMobileaa}>
                      <div>
                        <p>
                          Đầu tư một hệ thống PBN khá tốn kém và mất nhiều thời
                          gian. Những chi phí mà bạn phải bỏ ra để xây dựng có
                          thể kể đến như tên miền, hosting, content, nhân sự
                          quản lý.
                        </p>
                        <p>
                          Lấy một ví dụ đơn giản, nếu xây 1 website bạn sẽ cần
                          mua tên miền với giá 200-750.000; hosting 1 năm khoảng
                          500.000-2.000.000, content 30 bài khoản 6-10 triệu,
                          chi phí thuê nhân sự… Vậy, để đầu tư một website bạn
                          sẽ mất đâu đó từ 8-15 triệu.
                        </p>
                        <p>
                          Chưa kể, thời gian thực hiện cũng sẽ sẽ mất khá lâu,
                          dao động từ 3-6 tháng tùy chủ đề. Một vài chủ đề khó
                          thời gian sẽ lâu hơn rất nhiều.
                        </p>
                        <p>
                          Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                          được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                          phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                          việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu
                          mà bạn có thể lựa chọn.
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
                <div className={styles.customBorder} style={{ background: pTagColor === 7 ? "#5708cd" : "white" }} onClick={() => setPTagColor(7)}>
                  <div className={styles.twomain}>
                    <div className={styles.title}>
                      <p>
                        {arr[pTagColor]?.descone}
                      </p>
                      <p>
                        {arr[pTagColor]?.desctwo}
                      </p>
                      <p>
                        {arr[pTagColor]?.descthree}
                      </p>
                      <p>
                        Như vậy, để xây dựng một PBN bài bản, có thể áp dụng
                        được sẽ mất rất nhiều thời gian và chi phí. Và thay vì
                        phải bỏ một số tiền lớn để tự xây dựng hệ thống PBN,
                        việc thuê dịch vụ PBN sẽ là giải pháp hợp lý, tối ưu mà
                        bạn có thể lựa chọn.
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
