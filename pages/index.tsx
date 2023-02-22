import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Information from "../components/Information/Information";
import Steps from "@/components/Steps/Steps";
import Prices from "@/components/Prices/Prices";
import Question from "@/components/QuestionCard/Question";
import Ticket from "@/components/Ticket/Ticket";
import Footer from "@/components/Footer";
import SidebarMobile from "@/components/SidebarMobile";
import WhyShouldUseOut from './../components/WhyShouldUseOut/index';
import NewStep from "../components/NewStep/index";
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from "inspector";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [innerWith, setInnerWith] = useState(0)
  useEffect(() => {
    setInnerWith(window.innerWidth)

  }, [])
  return (
    <>
      <Head>
        <title>Dich vu PBN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./images/logo-mobile.png" />
        <meta name='dmca-site-verification' content='RGNwL2Z2S2lNYTdUNWp4NUlnRCtzUT090' />
      </Head>
      <Navbar />
      <main className={styles.main} >
        {/* <img
          src="/images/background-blur.png"
          className={styles.background_blur}
        /> */}
        {/* <img
          src="/images/background-blur-2.png"
          className={styles.background_blur_2}
        /> */}
        <Information
          innerWith={innerWith}
        />
        {/* <div className={styles.procedure} id="procedure">
          <p className={styles.title}>Quy trình làm việc </p>
          <br />
          <p className={styles.title_gradient}>
            KHI MUA TRAFFIC CHẤT LƯỢNG CAO
          </p>
          <div className={styles.steps}>
            <Steps
              position="right"
              number="01"
              content="Người dùng sẽ truy cập trực tiếp vào Google.com.vn"
              image="/images/bg-datmuatraffic1.png"
            />
            <Steps
              position="left"
              number="02"
              content="Người dùng gõ đúng từ khóa tìm kiếm mà bạn yêu cầu"
              image="/images/bg-datmuatraffic2.png"
            />
            <Steps
              position="right"
              number="03"
              content="Người dùng sẽ truy cập vào đúng website mà bạn muốn"
              image="/images/bg-datmuatraffic3.png"
            />
            <Steps
              position="left"
              number="04"
              content="Tương tác với website đợi 30 – 60s để lấy code và thoát"
              image="/images/bg-datmuatraffic4.png"
            />
          </div>
        </div> */}
        <div className={styles.prices} id="prices">
          <p className={styles.title}>Bảng giá </p>

          <h2 className={styles.title_gradient}>Mua bán dịch vụ PBN</h2>
          <Prices />
        </div>
        <div style={{ width: "100%" }}>
          <WhyShouldUseOut
            innerWith={innerWith}
          />
        </div>
        <div style={{ width: "100%" }}>
          <NewStep />
        </div>
        <div className={styles.question} id="question">
          <p className={styles.title}>Bạn đang thắc mắc </p>

          <p className={styles.title_gradient}>Về dịch vụ PBN</p>
          <Question
            title="Khái quát về Traffic User?"
            contevnt="Traffic user click chính là traffic được đội ngũ SEO có chuyên môn hỗ trợ tạo ra từ những người dùng thật. Chúng tôi cam kết 100% về người dùng thật."
          />
          <Question
            title="Tăng Traffic User thật mang lại lợi ích gì?"
            content=""
          />
          <Question title="Quy trình mua Traffic User" content="" />
          <Question title="Traffic User click và cách kiểm tra" content="Traffic user click chính là traffic được đội ngũ SEO có chuyên môn hỗ trợ tạo ra từ những người dùng thật. Chúng tôi cam kết 100% về người dùng thật." />
        </div>
        <div className={styles.ticket} id="ticket">
          <p className={styles.title}>Đặt mua </p>

          <h2 className={styles.title_gradient}>PBN CHẤT LƯỢNG CAO</h2>
          <div className={styles.ticketWrapper}>
            <Ticket />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
