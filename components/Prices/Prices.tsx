import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Prices/prices.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

export default function Prices() {
  const [width, setWidth] = useState(2000);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width1 = window.innerHeight;
      setWidth(width1);
    });
  }, []);

  return (
    <>
      <div className={styles.prices}>
        <Swiper
          spaceBetween={18}
          slidesPerView={"auto"}
          centeredSlides
          loop
          modules={[Pagination]}
          defaultValue={2}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={styles.prices_card}>
              <button
                className={styles.btn_basic}
                style={{ background: "#FF2626" }}
              >
                <img src="/images/medal-star.svg" width={20} height={20} />
                <p>Gói phổ biến</p>
              </button>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>200 links PBN</p>
                <p
                  className={styles.prices_card_price}
                  style={{ color: "#FF2626" }}
                >
                  14.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#FF2626" }}>GÓI CƠ BẢN</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      200 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button
                  className={styles.btn_contact}
                  style={{ background: "#FF2626" }}
                >
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    8 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>300 links PBN</p>
                <p className={styles.prices_card_price}>
                  21.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI NÂNG CAO</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      300 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    10 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>400 links PBN</p>
                <p className={styles.prices_card_price}>
                  28.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI VIP 1</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      400 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    12 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>500 links PBN</p>
                <p className={styles.prices_card_price}>
                  35.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI VIP 2</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      500 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    15 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>100 links PBN</p>
                <p className={styles.prices_card_price}>
                  7.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI TÂN THỦ</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      100 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    6 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.prices_mobile}>
        <Swiper
          spaceBetween={18}
          slidesPerView={"auto"}
          centeredSlides
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>100 links PBN</p>
                <p className={styles.prices_card_price}>
                  7.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI TÂN THỦ</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      100 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    6 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <button
                className={styles.btn_basic}
                style={{ background: "#FF2626" }}
              >
                <img src="/images/medal-star.svg" width={20} height={20} />
                <p>Gói phổ biến</p>
              </button>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>200 links PBN</p>
                <p
                  className={styles.prices_card_price}
                  style={{ color: "#FF2626" }}
                >
                  14.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#FF2626" }}>GÓI CƠ BẢN</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      200 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button
                  className={styles.btn_contact}
                  style={{ background: "#FF2626" }}
                >
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    8 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>300 links PBN</p>
                <p className={styles.prices_card_price}>
                  21.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI NÂNG CAO</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      300 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    10 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>400 links PBN</p>
                <p className={styles.prices_card_price}>
                  28.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI VIP 1</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      400 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    12 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.prices_card}>
              <div className={styles.prices_card_header}>
                <p style={{ color: "black" }}>500 links PBN</p>
                <p className={styles.prices_card_price}>
                  35.000.000{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                    }}
                  >
                    VND
                  </span>
                </p>
                <div className={styles.prices_card_description}>
                  <p style={{ color: "#5708CD" }}>GÓI VIP 2</p>
                  <ul>
                    <li>
                      <i className={styles.check_icon} />
                      500 backlinks từ 100 domain PBN
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Trỏ về 1-5 Anchor Text khác nhau
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      TF/CF 20-30+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      DA/PA 12+
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Content tiếng Việt (1000 từ)
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Miễn phí quét Full Report Onpage
                    </li>
                    <li>
                      <i className={styles.check_icon} />
                      Nhận file báo cáo
                    </li>
                  </ul>
                </div>
                <button className={styles.btn_contact}>
                  <img src="/images/call-calling.svg" width={20} height={20} />
                  <p>Liên hệ ngay</p>
                </button>
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "520",
                    marginTop: "1rem",
                  }}
                >
                  Hoàn thành trong{" "}
                  <span
                    style={{ color: "rgba(87, 8, 205, 1)", fontWeight: "600" }}
                  >
                    {" "}
                    15 Ngày
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
