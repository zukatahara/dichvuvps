import styles from "@/styles/SidebarMobile/index.module.scss";
import { FaTimes } from "react-icons/fa";
import { RiHome5Line } from "react-icons/ri";
import { ImPriceTag } from "react-icons/im";
import { BsStack } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { BiTask } from "react-icons/bi";

const SidebarMobile = (props: { closeButton: () => void }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarClose} onClick={() => props.closeButton()}>
        <FaTimes size={20} />
      </div>
      <div className={styles.sidebarheader}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.sidebarContent}>
        <p
          onClick={() => {
            props.closeButton();
            window.scrollTo(0, 0);
          }}
        >
          <RiHome5Line size={20} />
          <span>Trang chủ</span>
        </p>
        <p
          onClick={() => {
            props.closeButton();
            document.getElementById("infor")?.scrollIntoView();
          }}
        >
          <BiTask size={20} />
          <span>Giới thiệu</span>
        </p>
        <p
          onClick={() => {
            props.closeButton();
            document.getElementById("procedure")?.scrollIntoView();
          }}
        >
          <BsStack size={20} />
          <span>Dịch vụ</span>
        </p>
        <p
          onClick={() => {
            props.closeButton();
            document.getElementById("prices")?.scrollIntoView();
          }}
        >
          <CiMoneyBill size={20} />
          <span>Bảng giá</span>
        </p>
      </div>
      <div className={styles.sidebarButton}>
        <button
          className={styles.btn_contact}
          onClick={() => {
            props.closeButton();
            document.getElementById("footer")?.scrollIntoView();
          }}
        >
          <img src="/images/call-calling.svg" width={20} height={20} />
          <p>Liên hệ</p>
        </button>
        <button
          className={styles.btn_contact}
          onClick={() => {
            props.closeButton();
            document.getElementById("prices")?.scrollIntoView();
          }}
        >
          <ImPriceTag />
          <p>Báo giá</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMobile;
