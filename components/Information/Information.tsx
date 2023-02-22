import styles from "@/styles/Information/information.module.css";
import { useEffect, useState } from "react";

const Information = ({ innerWith }: any) => {
  console.log('innerWith: ', innerWith);
  return (
    <>
      <div className={styles.information} id="infor">
        <div className={styles.first_block}>
          <span className={styles.first_title}>
            <h1 className={styles.text_gradient}>Dịch vụ PBN -
            </h1>
            Chiến lược thúc đẩy tăng trưởng traffic mạnh mẽ sau 2- 3 tháng
          </span>
          <span className={styles.first_description}>
            <strong></strong>Với chi phí sử dụng hợp lý cùng tác dụng mạnh mẽ
            trong việc tăng thứ hạng, uy tín của website trong thời gian ngắn đã
            khiến cho dịch vụ PBN được nhiều anh em quan tâm trong thời gian gần
            đây.
          </span>
          <span className={styles.first_description}>
            Vậy sử dụng PBN như thế nào để mang lại hiệu quả cao nhất? Cùng
            dichvupbn.com - đơn vị cung cấp dịch vụ PBN uy tín nhất với hệ thống
            PBN khổng lồ lên đến 15.000 website chia sẻ tất tần tật những thông
            tin quan trọng liên quan về PBN.
            <strong></strong>
          </span>
          <br />
          <button
            className={styles.btn_contact}
            onClick={() => document?.getElementById("prices")?.scrollIntoView()}
          >
            <img src="/images/tag.svg" width={28} height={28} />
            <p>Bảng giá</p>
          </button>
        </div>
        <div className={styles.image_block}>
          <img src="/images/bg-1.png" />
        </div>
      </div>
      {/* okee */}
      <div className={styles.benefit}>
        <div className={styles.first_block}>
          <span className={styles.second_title}>
            Tìm hiểu
            <h2 className={styles.text_gradient_1}> KHÁI NIỆM PBN LÀ GÌ?</h2>
          </span>

          <span className={styles.second_description}>
            PBN là viết tắt của cụm từ Private Blog Network - Hệ thống website
            vệ tinh. PBN bao gồm một hệ thống các website có giá trị cao về các
            chỉ số SEO như DA, DA, CF, TF cùng với đó là lưu lượng truy cập và
            một vài thông tin khác. Lịch sử nội dung tốt, lượng truy cập cao là
            2 yếu tố quan trọng nhất để đảm bảo một hệ thống các backlink sạch
            và mạnh.{" "}
            <span style={{ color: "#5708CD", fontWeight: "600" }}> </span>{" "}
          </span>
          <br />
        </div>

        <div className={styles.image_block} style={{ justifyContent: "start" }}>
          <img src="/images/bg-2.png" />
        </div>
      </div>
      {/* okee */}
      <div className={styles.value_block}>
        <div className={styles.thirth_block}>
          <span className={styles.thirth_title}> Vai trò của </span>
          <h2 className={styles.text_gradient_1}> PBN trong SEO</h2>
        </div>

        <div className={styles.images_values_block}>
          <div className={styles.custom}>
            <div className={styles.images_block}>
              <img
                src="/images/antoantuyetdoi.png"
                width={240}
                height={190}
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 className={styles.title}>
                Nguồn Backlink chất lượng an toàn
              </h3>

              <p className={styles.description} >
                Hiện nay PBN được đánh giá là một trong những nguồn backlink
                chất lượng, an toàn nhất hiện nay. Vì việc lấy link seo từ các
                diễn đàn đã không còn hiệu quả như trước kia, thậm chí website
                còn dễ bị google phạt nếu đi quá nhiều backlink từ các diễn đàn
                kém chất lượng.
              </p>
              <p className={styles.description} style={{ display: innerWith > 767 ? "unset" : "none" }}>                Do vậy, các dịch vụ PBN được xem là giải pháp thay thế hiệu quả,
                an toàn với mức chi phí đầu tư khá hợp lý. Hạn chế được tối đa
                tình trạng bị các thuật toán của google phạt sau mỗi lần update.
              </p>
            </div>
            <div className={styles.images_block}>
              <img
                src="/images/tietkiemchiphi.png"
                width={240}
                height={190}
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 className={styles.title}>
                Tăng thứ hạng từ khóa
              </h3>

              <p className={styles.description}>
                Với hệ thống website chất lượng với đa dạng các lĩnh vực, các hệ
                thống dịch vụ PBN có thể giúp thúc đẩy website của bạn tăng
                trưởng mạnh mẽ chỉ sau thời gian ngắn.
              </p>
              <p className={styles.description} style={{ display: innerWith > 767 ? "unset" : "none" }}>
                Thậm chí, trong một vài trường hợp hiệu quả thấy rõ sau một vài
                ngày sử dụng. Điều này đã được chứng minh qua rất nhiều case
                thực tế mà Dichvupbn.com đã thực hiện.
              </p>
            </div>
            <div className={styles.images_block}>
              <img
                src="/images/hieuqua-benvung.png"
                width={240}
                height={190}
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 className={styles.title}>
                Tăng uy tín Website , thương hiệu
              </h3>
              <p className={styles.description}>
                Nhìn chung, tác dụng của hệ thống PBN giống như một phương pháp
                PR thương hiệu, doanh nghiệp trên mạng lưới internet.
              </p>
              <p className={styles.description} style={{ display: innerWith > 767 ? "unset" : "none" }}>
                Với việc được nhiều website nhắc đến, sự uy tín và mức độ phổ
                biến của thương hiệu, doanh nghiệp sẽ càng được mở rộng hơn.
                Không chỉ đối với google mà còn đối với người dùng hiện nay.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Có nên suer dụng  dịch vụ PBN hay không */}
      <div className={styles.use_services}>
        <div className={styles.title}>
          <p className={styles.title_one}>Có nên sử dụng</p>
          {/* <span>Dịch vụ PBN hay không</span> */}
          <h3>Dịch vụ PBN hay không</h3>

          <p className={styles.decs} style={{ display: innerWith > 767 ? "unset" : "none" }}>
            Đối với các dụng các dịch vụ PBN, tất nhiên sẽ có ưu thế hơn so với
            các cá nhân chuyên bán nhỏ lẻ. Bởi các đơn vị chuyên cung cấp PBN
            hiện nay đều có nguồn tài nguyên dồi dào với hệ thống các website
            chất lượng với đa dạng lĩnh vực, nhu cầu.
          </p>
        </div>

        <div className={styles.main}>
          <div className={styles.box}>
            <div className={styles.content}>
              <p className={styles.desc_top}>
                Chủ động quản lý được các backlinks
              </p>
              <p className={styles.desc_one}>
                Khi bạn mua link trên các trang web hoặc Guest Post từ các cá
                nhân đơn lẻ, bạn sẽ gặp khó khăn khi quản lý các backlinks, thậm
                chí có những bên không thực hiện đúng như cam kết ban đầu. Họ có
                thể bán lại website, và việc bị gỡ link là điều hoàn toàn có thể
                xảy ra. Trường hợp này khá phổ biến hiện nay, và bạn không thể
                làm gì vì không có sự ràng buộc chắc chắn nào ở đây.
              </p>
              <p className={styles.desc_one}>
                Nhưng với các bên cung cấp dịch vụ PBN, bạn có thể dễ dàng kiểm
                tra số lượng backlink trỏ về trang web của mình và thậm chí có
                thể quản lý cả nội dung, theo dõi thứ hạng và nhiều vấn đề khác.
                Các đơn vị chuyên cung cấp dịch vụ PBN uy tín có thể hỗ trợ bạn
                điều này.
              </p>
              <p className={styles.desc_one}>
                SEOer có khả năng quản lý, tư vấn và chọn chính xác Anchor Text
                của liên kết và đảm bảo các liên kết được tối ưu hóa và có liên
                quan. Do đó, việc nhanh chóng thêm các liên kết ngược có thể tạo
                ra lợi ích ngay lập tức hoặc rất nhanh, dẫn đến cải thiện thứ
                hạng trên SERP (Trang kết quả của công cụ tìm kiếm).
              </p>
            </div>
            <div className={styles.images}>
              <img height={270} src="/images/image-20.png" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.images} style={{ alignItems: "unset" }}>
              <img height={270} src="/images/image-19.png" />
            </div>
            <div className={styles.content}>
              <p className={styles.desc_top}>
                Có được một hệ thống backlinks chất lượng
              </p>
              <p className={styles.desc_one}>
                Khi bạn sử dụng một hệ thống PBN, bạn sẽ nhận được các liên kết
                trỏ từ các bài viết và các chủ đề liên quan đến nội dung, chủ đề
                của trang web mà bạn bạn sở hữu.
              </p>
              <p className={styles.desc_one}>
                Từ nội dung của các website đó, các chủ đề content có liên quan
                với nhau giúp việc seo offpage của bạn trở nên hiệu quả hơn.
                Điều này sẽ giúp tăng sự uy tín, độ tin cậy của website của bạn
                đối với bộ máy tìm kiếm của Google.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Information;
