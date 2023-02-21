import styles from "@/styles/Navbar/header.module.css";
import { useEffect, useState } from "react";
import SidebarMobile from "../SidebarMobile";

const Navbar = (props: any) => {
  const [option, setOption] = useState(0);
  const [sidebarMobile, setSidebarMobile] = useState(false);

  const closeButton = () => {
    setSidebarMobile(false);
  };

  useEffect(() => { }, [option]);
  return (
    <>
      {sidebarMobile && <SidebarMobile closeButton={closeButton} />}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/images/logo.png" />
        </div>
        <ul className={styles.navbar_right}>
          <li
            value={0}
            onClick={(e) => {
              setOption(0);
              setSidebarMobile(false);
              window.scrollTo(0, 0);
            }}
            className={styles.navbar_item}
          >
            Trang chủ
          </li>
          <li
            value={1}
            onClick={(e) => {
              setOption(1);
              setSidebarMobile(false);
              document.getElementById("infor")?.scrollIntoView();
            }}
            className={styles.navbar_item}
          >
            Giới thiệu
          </li>
          <li
            value={2}
            onClick={(e) => {
              setOption(2);
              setSidebarMobile(false);
              document.getElementById("procedure")?.scrollIntoView();
            }}
            className={styles.navbar_item}
          >
            Dịch vụ
          </li>
          <li
            value={3}
            onClick={(e) => {
              setOption(3);
              setSidebarMobile(false);
              document.getElementById("prices")?.scrollIntoView();
            }}
            className={styles.navbar_item}
          >
            Báo giá
          </li>
          <button
            className={styles.btn_contact}
            onClick={() => {
              setSidebarMobile(false);
              document.getElementById("footer")?.scrollIntoView();
            }}
          >
            <img src="/images/call-calling.svg" width={20} height={20} />
            <p>Liên hệ</p>
          </button>
          {/* icon moblie */}
          <button
            style={{
              background: "transparent",
              border: 0,
              display: "none",
              cursor: "pointer",
            }}
            className={styles.menu_icon}
            onClick={() => setSidebarMobile(!sidebarMobile)}
          >
            <img src="/images/icon-menu.svg" />
          </button>
        </ul>
      </div>

    </>
  );
};
export default Navbar;
