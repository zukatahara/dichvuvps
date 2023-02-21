import styles from "@/styles/Ticket/ticket.module.css"
import CustomTextArea from "../CustomTextArea";
import CustomTextInput from "../CustomTextInput";
import { IoMailOutline } from 'react-icons/io5'

const Ticket = (props: any) => {
  return (
    <>
      <div>
        <div className={styles.homepageOrder} id="contact">
          <div className={styles.homepageOrderForm}>
            <CustomTextInput placeholder='Tên khách hàng' />
            <CustomTextInput placeholder='Email' style={{ marginTop: '24px' }} />
            <CustomTextInput placeholder='Ghi chú' style={{ marginTop: '24px' }} />
            <CustomTextArea placeholder='Nội dung' style={{ marginTop: '24px' }} />
            <div className={styles.homepageOrderFormButton} style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
              <button><IoMailOutline size={25} /><span>Gửi cho chúng tôi</span></button>
            </div>
          </div>
        </div>

      </div>
      {/* <div className={styles.image}>

        <img src="/images/rectangle.png" style={{ height: "100%", width: "100%" }} />
      </div> */}
    </>
  );
};
export default Ticket;
