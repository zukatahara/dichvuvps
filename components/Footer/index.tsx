import styles from "@/styles/Footer/index.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.footerWrapper}>
        <div className={styles.footerColumn}>
          <div className={styles.customImage}>
            <img src="/images/logo.png" />
          </div>

        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnHeading}>Thông tin liên hệ</p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/Call.svg" />
              <span>0387 514 462</span>
            </Link>
          </p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/Mail.svg" />
              <span>Telegram: @trafficuser</span>
            </Link>
          </p>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnHeading}>Thông tin</p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/verify.svg" />
              <span>Giới thiệu</span>
            </Link>
          </p>
          <p className={styles.footerColumnContent}>

            <Link href={"#"}>
              <img src="/images/lock.svg" />
              <span>Chính sách bảo mật</span>
            </Link>
          </p>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnHeading}>Thông tin dịch vụ</p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/send.svg" />
              <span>Dịch vụ Entity</span>
            </Link>
          </p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/send.svg" />
              <span>Dịch vụ backlink tool</span>
            </Link>
          </p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/send.svg" />
              <span>Dịch vụ backlink gov</span>
            </Link>
          </p>
          <p className={styles.footerColumnContent}>
            <Link href={"#"}>
              <img src="/images/send.svg" />
              <span>Dịch vụ backlink báo</span>
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.customPayment}>
        <div className={styles.payment}>
          <div className={styles.main}>
            <div className={styles.box}>
              <div className={styles.leftContent}>
                <div className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M21.9714 10.9876C21.9689 8.8929 21.3669 6.84269 20.2365 5.07924C19.106 3.31578 17.4944 1.91278 15.592 1.03606C13.6896 0.159327 11.576 -0.154488 9.501 0.131691C7.42596 0.41787 5.4762 1.29208 3.88216 2.65102C2.28811 4.00996 1.1164 5.79682 0.505484 7.80043C-0.105429 9.80405 -0.130007 11.9407 0.434658 13.9578C0.999323 15.975 2.12963 17.7883 3.692 19.1835C5.25436 20.5788 7.18349 21.4976 9.2514 21.8314V14.1619H6.46727V10.9876H9.2514V8.58618C9.2514 5.83957 10.8949 4.31618 13.4013 4.31618C14.2236 4.32773 15.0438 4.40047 15.8553 4.53381V7.23539H14.467C14.2312 7.20426 13.9915 7.22638 13.7654 7.30012C13.5393 7.37386 13.3326 7.49735 13.1605 7.66149C12.9885 7.82564 12.8554 8.02627 12.7711 8.24863C12.6868 8.47099 12.6534 8.70943 12.6734 8.94639V10.9876H15.7202L15.2174 14.1619H12.6809V21.8314C15.2675 21.4273 17.6248 20.1128 19.3281 18.1247C21.0314 16.1366 21.9688 13.6056 21.9714 10.9876Z" fill="url(#paint0_linear_961_12306)" />
                    <defs>
                      <linearGradient id="paint0_linear_961_12306" x1="3.21036" y1="3.23555" x2="18.7295" y2="18.7471" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4676ED" />
                        <stop offset="0.19" stop-color="#436DE4" />
                        <stop offset="0.49" stop-color="#3C55CD" />
                        <stop offset="0.87" stop-color="#302EA8" />
                        <stop offset="1" stop-color="#2B1E99" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M10.9999 22.2856C17.0593 22.2856 21.9714 17.3736 21.9714 11.3142C21.9714 5.25485 17.0593 0.342773 10.9999 0.342773C4.94058 0.342773 0.0285034 5.25485 0.0285034 11.3142C0.0285034 17.3736 4.94058 22.2856 10.9999 22.2856Z" fill="url(#paint0_linear_961_12315)" />
                    <path d="M10.9999 22.2856C17.0593 22.2856 21.9714 17.3736 21.9714 11.3142C21.9714 5.25485 17.0593 0.342773 10.9999 0.342773C4.94058 0.342773 0.0285034 5.25485 0.0285034 11.3142C0.0285034 17.3736 4.94058 22.2856 10.9999 22.2856Z" fill="black" fill-opacity="0.2" />
                    <path d="M14.4069 7.16455C14.2584 7.16455 14.1134 7.20856 13.9899 7.29102C13.8665 7.37348 13.7704 7.49069 13.7136 7.62781C13.6568 7.76494 13.6419 7.91582 13.6709 8.06139C13.6998 8.20697 13.7713 8.34068 13.8762 8.44563C13.9812 8.55058 14.1149 8.62205 14.2605 8.65101C14.406 8.67996 14.5569 8.6651 14.6941 8.6083C14.8312 8.5515 14.9484 8.45532 15.0308 8.33191C15.1133 8.2085 15.1573 8.06341 15.1573 7.91499C15.1573 7.71596 15.0782 7.52508 14.9375 7.38435C14.7968 7.24361 14.6059 7.16455 14.4069 7.16455Z" fill="white" />
                    <path d="M11.0525 8.14747C10.4233 8.146 9.808 8.33149 9.28451 8.68039C8.76102 9.02929 8.35302 9.52588 8.11228 10.1071C7.87154 10.6883 7.80894 11.328 7.93241 11.9448C8.05588 12.5617 8.35985 13.128 8.80575 13.5718C9.25165 14.0155 9.81936 14.3168 10.4368 14.4374C11.0543 14.5579 11.6936 14.4923 12.2737 14.2488C12.8537 14.0053 13.3484 13.5949 13.6948 13.0698C14.0412 12.5446 14.2238 11.9284 14.2193 11.2993C14.2134 10.4626 13.8773 9.66212 13.2843 9.07188C12.6913 8.48165 11.8892 8.14943 11.0525 8.14747ZM11.0525 13.348C10.6499 13.3495 10.256 13.2315 9.92056 13.0089C9.58513 12.7864 9.3233 12.4693 9.16823 12.0978C9.01315 11.7263 8.9718 11.3172 9.04943 10.9222C9.12705 10.5272 9.32014 10.1641 9.60426 9.87896C9.88837 9.59379 10.2507 9.39936 10.6454 9.32028C11.0401 9.2412 11.4494 9.28103 11.8215 9.43473C12.1935 9.58844 12.5116 9.84909 12.7354 10.1837C12.9592 10.5183 13.0786 10.9118 13.0786 11.3143C13.0728 11.8492 12.8572 12.3604 12.4782 12.7379C12.0993 13.1154 11.5873 13.3291 11.0525 13.333V13.348Z" fill="white" />
                    <path d="M13.5665 17.7382H8.43349C7.4091 17.7362 6.42724 17.3284 5.70288 16.6041C4.97853 15.8797 4.57071 14.8978 4.56873 13.8734V8.73293C4.57071 7.70854 4.97853 6.72667 5.70288 6.00232C6.42724 5.27797 7.4091 4.87015 8.43349 4.86816H13.5665C14.5909 4.87015 15.5728 5.27797 16.2971 6.00232C17.0215 6.72667 17.4293 7.70854 17.4313 8.73293V13.8734C17.4293 14.8978 17.0215 15.8797 16.2971 16.6041C15.5728 17.3284 14.5909 17.7362 13.5665 17.7382ZM8.43349 6.07637C7.72954 6.07835 7.05498 6.35887 6.55721 6.85665C6.05944 7.35442 5.77891 8.02898 5.77693 8.73293V13.8734C5.77892 14.5767 6.05969 15.2505 6.55767 15.7471C7.05566 16.2436 7.73023 16.5225 8.43349 16.5225H13.5665C14.2698 16.5225 14.9443 16.2436 15.4423 15.7471C15.9403 15.2505 16.2211 14.5767 16.2231 13.8734V8.73293C16.2211 8.02898 15.9406 7.35442 15.4428 6.85665C14.945 6.35887 14.2705 6.07835 13.5665 6.07637H8.43349Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_961_12315" x1="18.7595" y1="3.55466" x2="3.24039" y2="19.0738" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBE18A" />
                        <stop offset="0.21" stop-color="#FCBB45" />
                        <stop offset="0.38" stop-color="#F75274" />
                        <stop offset="0.52" stop-color="#D53692" />
                        <stop offset="0.74" stop-color="#8F39CE" />
                        <stop offset="1" stop-color="#5B4FE9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className={styles.icon}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M10.9999 22.2856C17.0593 22.2856 21.9714 17.3736 21.9714 11.3142C21.9714 5.25485 17.0593 0.342773 10.9999 0.342773C4.94058 0.342773 0.0285034 5.25485 0.0285034 11.3142C0.0285034 17.3736 4.94058 22.2856 10.9999 22.2856Z" fill="url(#paint0_linear_961_12326)" />
                    <path d="M17.0636 7.55468C16.6772 7.7208 16.2712 7.83681 15.8554 7.89988C16.0505 7.89988 16.3357 7.51715 16.4482 7.37457C16.6299 7.15253 16.7674 6.89781 16.8535 6.62413C16.8535 6.62413 16.8535 6.5791 16.8535 6.5641C16.8443 6.55883 16.834 6.55605 16.8234 6.55605C16.8129 6.55605 16.8025 6.55883 16.7934 6.5641C16.3383 6.80711 15.8542 6.9912 15.3526 7.11192C15.3377 7.12048 15.3209 7.12498 15.3038 7.12498C15.2867 7.12498 15.2699 7.12048 15.255 7.11192C15.2189 7.06585 15.1787 7.02315 15.1349 6.98434C14.9252 6.80931 14.6898 6.66757 14.437 6.5641C14.0999 6.42514 13.7352 6.36607 13.3714 6.3915C13.0175 6.41446 12.6723 6.51161 12.3583 6.67666C12.0369 6.84272 11.7543 7.07506 11.5292 7.35835C11.3041 7.64164 11.1416 7.96945 11.0526 8.32013C10.985 8.6595 10.985 9.00885 11.0526 9.34823C11.0526 9.40826 11.0526 9.41577 11 9.40826C9.10074 9.21381 7.34249 8.31729 6.06964 6.89429C6.01711 6.83426 5.98709 6.83426 5.93456 6.89429C5.67909 7.36777 5.58275 7.91089 5.65978 8.44335C5.73681 8.97581 5.98312 9.46935 6.36231 9.85102C6.45986 9.94107 6.55742 10.0311 6.66248 10.1137C6.33333 10.0878 6.01229 9.99857 5.71693 9.85102C5.65689 9.85102 5.62688 9.85102 5.61937 9.89605C5.61223 9.99097 5.61223 10.0863 5.61937 10.1812C5.6763 10.6242 5.85022 11.0441 6.12324 11.3975C6.39627 11.751 6.75854 12.0254 7.17278 12.1924C7.27275 12.2395 7.37885 12.2724 7.48797 12.2899C7.18024 12.3452 6.86514 12.3452 6.55742 12.2899C6.48988 12.2899 6.45986 12.29 6.48988 12.38C6.64976 12.7971 6.91365 13.1663 7.25647 13.4527C7.59929 13.739 8.00964 13.9329 8.44853 14.016C8.53858 14.016 8.62864 14.016 8.71869 14.016C8.80874 14.016 8.71869 14.016 8.71869 14.016C8.336 14.3599 7.87476 14.6047 7.37541 14.7289C6.72432 14.9618 6.03061 15.0514 5.34171 14.9915C5.23665 14.9915 5.21414 14.9915 5.18412 14.9915C5.1541 14.9915 5.18412 15.0366 5.18412 15.0591C5.31977 15.1512 5.46003 15.2364 5.60436 15.3142C6.03652 15.5424 6.49189 15.7235 6.96266 15.8545C8.17598 16.2205 9.46414 16.2613 10.6982 15.9729C11.9322 15.6845 13.0689 15.0769 13.9943 14.2111C14.6543 13.4982 15.1666 12.6617 15.5015 11.7497C15.8363 10.8378 15.9872 9.86855 15.9454 8.89796C15.9454 8.82292 16.0355 8.77789 16.0955 8.74037C16.4595 8.45521 16.7805 8.11906 17.0486 7.74229C17.0935 7.69027 17.1176 7.62342 17.1161 7.55468C17.1161 7.55468 17.1161 7.53216 17.0636 7.55468Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_961_12326" x1="18.7595" y1="3.55466" x2="3.24039" y2="19.0738" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#33CCFF" />
                        <stop offset="1" stop-color="#337FFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.rightContent}>
                <div className={styles.logo}>
                  <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="27" viewBox="0 0 80 27" fill="none">
                      <g clip-path="url(#clip0_961_12332)">
                        <path d="M34.6671 26.1257H28.1865L32.2399 0.957031H38.7201L34.6671 26.1257Z" fill="#00579F" />
                        <path d="M58.1596 1.57153C56.8814 1.06228 54.854 0.5 52.3471 0.5C45.9473 0.5 41.4407 3.92705 41.413 8.82669C41.3599 12.4416 44.6397 14.4495 47.0927 15.6548C49.5999 16.8865 50.4522 17.6904 50.4522 18.7883C50.4267 20.4744 48.4262 21.2516 46.5604 21.2516C43.9731 21.2516 42.5867 20.8509 40.4799 19.9128L39.6266 19.5107L38.7197 25.1605C40.2397 25.8559 43.04 26.473 45.9473 26.5C52.7472 26.5 57.1741 23.126 57.2266 17.9046C57.2524 15.0395 55.5206 12.8441 51.7868 11.0502C49.5202 9.89858 48.1321 9.12207 48.1321 7.94377C48.1587 6.8726 49.3061 5.77545 51.8648 5.77545C53.9716 5.72171 55.5195 6.23025 56.6921 6.73915L57.2783 7.00641L58.1596 1.57153Z" fill="#00579F" />
                        <path d="M66.7726 17.2094C67.3063 15.7634 69.3599 10.1674 69.3599 10.1674C69.333 10.2211 69.8926 8.69476 70.2126 7.75775L70.6655 9.92643C70.6655 9.92643 71.8927 15.951 72.1592 17.2094C71.1464 17.2094 68.0526 17.2094 66.7726 17.2094ZM74.772 0.957031H69.7593C68.2135 0.957031 67.0391 1.41184 66.3721 3.04529L56.7461 26.1254H63.5459C63.5459 26.1254 64.6654 23.019 64.9061 22.3499C65.652 22.3499 72.2669 22.3499 73.2266 22.3499C73.4126 23.2336 73.9998 26.1254 73.9998 26.1254H80.0002L74.772 0.957031Z" fill="#00579F" />
                        <path d="M22.7734 0.957031L16.4268 18.1197L15.7332 14.6389C14.5599 10.6225 10.88 6.25881 6.77344 4.08906L12.5867 26.099H19.4397L29.626 0.957031H22.7734Z" fill="#00579F" />
                        <path d="M10.5333 0.957031H0.106668L0 1.46557C8.13339 3.55418 13.52 8.58871 15.7331 14.64L13.4665 3.07269C13.0933 1.46522 11.9465 1.01006 10.5333 0.957031Z" fill="#FAA61A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_961_12332">
                          <rect width="80" height="26" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="31" viewBox="0 0 110 31" fill="none">
                      <g clip-path="url(#clip0_961_12339)">
                        <path d="M40.9937 6.85107H34.9269C34.5117 6.85107 34.1586 7.15269 34.0939 7.56253L31.6402 23.1195C31.5914 23.4265 31.8291 23.7033 32.1405 23.7033H35.0369C35.452 23.7033 35.8051 23.4016 35.8698 22.9909L36.5316 18.7949C36.5955 18.3842 36.9494 18.0826 37.3637 18.0826H39.2843C43.2806 18.0826 45.5871 16.1487 46.1894 12.3165C46.4609 10.6399 46.201 9.32253 45.4159 8.39995C44.5536 7.38688 43.0243 6.85107 40.9937 6.85107ZM41.6936 12.5329C41.3619 14.7099 39.6985 14.7099 38.0902 14.7099H37.1748L37.817 10.6443C37.8552 10.3986 38.0681 10.2176 38.3164 10.2176H38.736C39.8316 10.2176 40.8651 10.2176 41.3991 10.8421C41.7176 11.2147 41.8152 11.7683 41.6936 12.5329Z" fill="#253B80" />
                        <path d="M59.1288 12.4602H56.2236C55.9761 12.4602 55.7623 12.6412 55.7241 12.8869L55.5955 13.6995L55.3923 13.405C54.7634 12.4922 53.3609 12.187 51.9611 12.187C48.7507 12.187 46.0086 14.6185 45.4746 18.0294C45.1969 19.7309 45.5917 21.3578 46.5569 22.4924C47.4422 23.5356 48.709 23.9703 50.2161 23.9703C52.8029 23.9703 54.2373 22.307 54.2373 22.307L54.1078 23.1143C54.059 23.423 54.2968 23.6998 54.6064 23.6998H57.2233C57.6394 23.6998 57.9907 23.3981 58.0563 22.9874L59.6265 13.0439C59.6761 12.7379 59.4393 12.4602 59.1288 12.4602ZM55.0792 18.1146C54.7989 19.7743 53.4815 20.8885 51.8014 20.8885C50.9578 20.8885 50.2836 20.618 49.8507 20.1052C49.4213 19.596 49.2581 18.8713 49.3947 18.064C49.6564 16.4185 50.9959 15.2679 52.6503 15.2679C53.4753 15.2679 54.146 15.542 54.5878 16.0592C55.0304 16.5817 55.2061 17.3109 55.0792 18.1146Z" fill="#253B80" />
                        <path d="M74.6013 12.4624H71.6819C71.4033 12.4624 71.1416 12.6008 70.9837 12.8323L66.9572 18.7635L65.2504 13.0639C65.1431 12.7072 64.814 12.4624 64.4414 12.4624H61.5725C61.2239 12.4624 60.9817 12.803 61.0926 13.1313L64.3083 22.5682L61.2851 26.836C61.0474 27.1722 61.2869 27.6344 61.6976 27.6344H64.6135C64.8903 27.6344 65.1493 27.4996 65.3063 27.2725L75.0165 13.2564C75.2489 12.921 75.0103 12.4624 74.6013 12.4624Z" fill="#253B80" />
                        <path d="M84.2671 6.85107H78.1994C77.7851 6.85107 77.4321 7.15269 77.3673 7.56253L74.9136 23.1195C74.8648 23.4265 75.1026 23.7033 75.4121 23.7033H78.5259C78.815 23.7033 79.0626 23.4921 79.1078 23.2047L79.8042 18.7949C79.868 18.3842 80.222 18.0826 80.6363 18.0826H82.5559C86.5532 18.0826 88.8588 16.1487 89.462 12.3165C89.7343 10.6399 89.4726 9.32253 88.6875 8.39995C87.8262 7.38688 86.2977 6.85107 84.2671 6.85107ZM84.9671 12.5329C84.6362 14.7099 82.9729 14.7099 81.3637 14.7099H80.4491L81.0922 10.6443C81.1304 10.3986 81.3415 10.2176 81.5908 10.2176H82.0104C83.105 10.2176 84.1394 10.2176 84.6734 10.8421C84.9919 11.2147 85.0886 11.7683 84.9671 12.5329Z" fill="#179BD7" />
                        <path d="M102.401 12.4622H99.4979C99.2486 12.4622 99.0366 12.6432 98.9994 12.8889L98.8707 13.7015L98.6667 13.4069C98.0377 12.4941 96.6361 12.189 95.2363 12.189C92.0259 12.189 89.2848 14.6205 88.7507 18.0314C88.474 19.7328 88.8669 21.3598 89.8321 22.4944C90.7192 23.5376 91.9842 23.9723 93.4914 23.9723C96.0781 23.9723 97.5126 22.309 97.5126 22.309L97.3831 23.1162C97.3343 23.4249 97.572 23.7017 97.8834 23.7017H100.499C100.914 23.7017 101.267 23.4001 101.332 22.9894L102.903 13.0459C102.95 12.7399 102.713 12.4622 102.401 12.4622ZM98.3518 18.1165C98.0732 19.7763 96.7541 20.8905 95.074 20.8905C94.2321 20.8905 93.5561 20.6199 93.1232 20.1072C92.6939 19.598 92.5324 18.8732 92.6673 18.066C92.9307 16.4204 94.2685 15.2699 95.9229 15.2699C96.7479 15.2699 97.4186 15.544 97.8603 16.0611C98.3048 16.5836 98.4804 17.3128 98.3518 18.1165Z" fill="#179BD7" />
                        <path d="M105.827 7.2767L103.336 23.1185C103.288 23.4254 103.525 23.7022 103.835 23.7022H106.338C106.754 23.7022 107.107 23.4006 107.171 22.9898L109.627 7.43372C109.676 7.12678 109.438 6.84912 109.128 6.84912H106.325C106.078 6.85001 105.865 7.03098 105.827 7.2767Z" fill="#179BD7" />
                        <path d="M6.44567 26.725L6.90963 23.7781L5.87616 23.7541H0.941238L4.37075 2.00874C4.3814 1.94309 4.416 1.88188 4.46656 1.83842C4.51713 1.79495 4.58188 1.771 4.6493 1.771H12.9703C15.7327 1.771 17.6391 2.34583 18.6344 3.48043C19.101 4.01269 19.3982 4.5689 19.5419 5.181C19.6927 5.82325 19.6954 6.59059 19.5481 7.52648L19.5374 7.59479V8.19446L20.0041 8.45882C20.397 8.66729 20.7093 8.90592 20.9488 9.17914C21.348 9.63422 21.6062 10.2126 21.7153 10.8983C21.8279 11.6036 21.7907 12.4428 21.6062 13.3929C21.3933 14.4858 21.0491 15.4376 20.5842 16.2165C20.1566 16.9341 19.612 17.5294 18.9653 17.9907C18.3479 18.4289 17.6142 18.7616 16.7848 18.9745C15.9811 19.1838 15.0647 19.2894 14.0596 19.2894H13.412C12.949 19.2894 12.4992 19.4562 12.1462 19.7551C11.7922 20.0603 11.558 20.4772 11.4862 20.9332L11.4374 21.1984L10.6177 26.3924L10.5804 26.5831C10.5707 26.6434 10.5538 26.6736 10.529 26.694C10.5068 26.7126 10.4749 26.725 10.4438 26.725H6.44567Z" fill="#253B80" />
                        <path d="M20.4454 7.66357C20.4206 7.82236 20.3922 7.9847 20.3603 8.15148C19.2629 13.7854 15.5087 15.7317 10.714 15.7317H8.27267C7.6863 15.7317 7.19219 16.1575 7.10082 16.7359L5.8509 24.663L5.49695 26.91C5.43751 27.2897 5.73025 27.6321 6.11348 27.6321H10.4434C10.9561 27.6321 11.3917 27.2595 11.4724 26.7539L11.515 26.5339L12.3303 21.3603L12.3826 21.0765C12.4624 20.5691 12.8989 20.1965 13.4116 20.1965H14.0592C18.2543 20.1965 21.5383 18.4933 22.4982 13.5645C22.8991 11.5056 22.6915 9.7864 21.6306 8.57728C21.3094 8.21269 20.9111 7.91019 20.4454 7.66357Z" fill="#179BD7" />
                        <path d="M19.2983 7.20588C19.1306 7.15709 18.9576 7.11274 18.7802 7.07282C18.6019 7.03379 18.4191 6.99919 18.2311 6.96903C17.5729 6.86258 16.8516 6.81201 16.079 6.81201H9.55705C9.39648 6.81201 9.2439 6.84838 9.10729 6.91403C8.80656 7.05862 8.58301 7.34338 8.5289 7.69201L7.14148 16.4796L7.10156 16.736C7.19293 16.1576 7.68705 15.7318 8.27342 15.7318H10.7147C15.5095 15.7318 19.2637 13.7846 20.361 8.15153C20.3938 7.98475 20.4213 7.82241 20.4462 7.66362C20.1685 7.51637 19.8678 7.3904 19.544 7.28306C19.4641 7.25645 19.3816 7.23072 19.2983 7.20588Z" fill="#222D65" />
                        <path d="M8.52855 7.69255C8.58267 7.34392 8.80622 7.05916 9.10694 6.91545C9.24444 6.84981 9.39613 6.81344 9.5567 6.81344H16.0786C16.8513 6.81344 17.5725 6.864 18.2307 6.97045C18.4188 7.00062 18.6015 7.03521 18.7798 7.07424C18.9573 7.11416 19.1302 7.15852 19.2979 7.20731C19.3813 7.23215 19.4638 7.25787 19.5445 7.2836C19.8683 7.39094 20.169 7.51779 20.4467 7.66416C20.7732 5.58215 20.444 4.16457 19.3183 2.88094C18.0773 1.46779 15.8373 0.862793 12.9711 0.862793H4.65017C4.06468 0.862793 3.56525 1.2886 3.47476 1.86787L0.00887631 23.8368C-0.0594301 24.2715 0.275892 24.6636 0.714118 24.6636H5.8513L7.14113 16.4801L8.52855 7.69255Z" fill="#253B80" />
                      </g>
                      <defs>
                        <clipPath id="clip0_961_12339">
                          <rect width="110" height="29.2742" fill="white" transform="translate(0 0.862793)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="33" viewBox="0 0 43 33" fill="none">
                      <g clip-path="url(#clip0_961_12350)">
                        <path d="M7.79397 32.9276V30.7375C7.79397 29.8997 7.27756 29.3512 6.39105 29.3512C5.9478 29.3512 5.46581 29.4957 5.13445 29.972C4.87624 29.5723 4.50614 29.3512 3.951 29.3512C3.5809 29.3512 3.21081 29.4617 2.91817 29.8615V29.4235H2.14355V32.9276H2.91817V30.9927C2.91817 30.3718 3.24954 30.0783 3.76595 30.0783C4.28237 30.0783 4.54057 30.4058 4.54057 30.9927V32.9276H5.31519V30.9927C5.31519 30.3718 5.68529 30.0783 6.16297 30.0783C6.67938 30.0783 6.93759 30.4058 6.93759 30.9927V32.9276H7.79397ZM19.2842 29.4235H18.0276V28.3646H17.2529V29.4235H16.5515V30.1166H17.2529V31.7241C17.2529 32.5278 17.5843 32.9999 18.4708 32.9999C18.8022 32.9999 19.1723 32.8893 19.4305 32.7447L19.2067 32.0856C18.9829 32.2302 18.7247 32.2684 18.5397 32.2684C18.1696 32.2684 18.0233 32.0473 18.0233 31.6858V30.1166H19.2799V29.4235H19.2842ZM25.8598 29.3469C25.4166 29.3469 25.1196 29.568 24.9346 29.8572V29.4192H24.16V32.9233H24.9346V30.9501C24.9346 30.3675 25.1928 30.0358 25.6748 30.0358C25.8211 30.0358 26.0061 30.0741 26.1568 30.1081L26.3805 29.3767C26.2256 29.3469 26.0061 29.3469 25.8598 29.3469ZM15.9232 29.7126C15.5531 29.4575 15.0367 29.3469 14.4815 29.3469C13.595 29.3469 13.0054 29.7849 13.0054 30.4781C13.0054 31.0607 13.4487 31.3924 14.2233 31.4987L14.5934 31.537C14.9979 31.6093 15.2217 31.7198 15.2217 31.9027C15.2217 32.1579 14.9248 32.3407 14.4084 32.3407C13.892 32.3407 13.4831 32.1579 13.2249 31.975L12.8548 32.5576C13.2593 32.851 13.8145 32.9956 14.3696 32.9956C15.4025 32.9956 15.9963 32.5193 15.9963 31.8644C15.9963 31.2436 15.5143 30.9161 14.7785 30.8055L14.4084 30.7673C14.077 30.729 13.8188 30.6567 13.8188 30.4398C13.8188 30.1847 14.077 30.0401 14.4858 30.0401C14.9291 30.0401 15.3723 30.2229 15.5961 30.3335L15.9232 29.7126ZM36.5324 29.3469C36.0891 29.3469 35.7922 29.568 35.6071 29.8572V29.4192H34.8325V32.9233H35.6071V30.9501C35.6071 30.3675 35.8653 30.0358 36.3473 30.0358C36.4936 30.0358 36.6787 30.0741 36.8293 30.1081L37.0531 29.3852C36.9025 29.3469 36.683 29.3469 36.5324 29.3469ZM26.6344 31.1755C26.6344 32.2344 27.3746 32.9999 28.5194 32.9999C29.0358 32.9999 29.4059 32.8893 29.776 32.6001L29.4059 31.9792C29.1089 32.2004 28.8163 32.3067 28.4806 32.3067C27.8523 32.3067 27.4091 31.8687 27.4091 31.1755C27.4091 30.5164 27.8523 30.0783 28.4806 30.0443C28.812 30.0443 29.1089 30.1549 29.4059 30.3718L29.776 29.7509C29.4059 29.4575 29.0358 29.3512 28.5194 29.3512C27.3746 29.3469 26.6344 30.1166 26.6344 31.1755ZM33.7997 31.1755V29.4235H33.0251V29.8615C32.7669 29.534 32.3968 29.3512 31.9148 29.3512C30.9164 29.3512 30.1418 30.1166 30.1418 31.1755C30.1418 32.2344 30.9164 32.9999 31.9148 32.9999C32.4312 32.9999 32.8013 32.817 33.0251 32.4896V32.9276H33.7997V31.1755ZM30.9551 31.1755C30.9551 30.5546 31.3596 30.0443 32.0267 30.0443C32.655 30.0443 33.0982 30.5206 33.0982 31.1755C33.0982 31.7964 32.655 32.3067 32.0267 32.3067C31.3639 32.2684 30.9551 31.7921 30.9551 31.1755ZM21.6855 29.3469C20.6527 29.3469 19.9125 30.0783 19.9125 31.1713C19.9125 32.2684 20.6527 32.9956 21.7242 32.9956C22.2406 32.9956 22.757 32.851 23.1659 32.5193L22.7958 31.9707C22.4988 32.1919 22.1287 32.3365 21.7629 32.3365C21.281 32.3365 20.8033 32.1153 20.6914 31.4987H23.3122C23.3122 31.3881 23.3122 31.3158 23.3122 31.2053C23.3466 30.0783 22.6796 29.3469 21.6855 29.3469ZM21.6855 30.0061C22.1675 30.0061 22.4988 30.2995 22.572 30.8438H20.7258C20.799 30.3718 21.1303 30.0061 21.6855 30.0061ZM40.9305 31.1755V28.0371H40.1559V29.8615C39.8977 29.534 39.5276 29.3512 39.0456 29.3512C38.0472 29.3512 37.2726 30.1166 37.2726 31.1755C37.2726 32.2344 38.0472 32.9999 39.0456 32.9999C39.562 32.9999 39.9321 32.817 40.1559 32.4896V32.9276H40.9305V31.1755ZM38.0859 31.1755C38.0859 30.5546 38.4904 30.0443 39.1575 30.0443C39.7858 30.0443 40.229 30.5206 40.229 31.1755C40.229 31.7964 39.7858 32.3067 39.1575 32.3067C38.4904 32.2684 38.0859 31.7921 38.0859 31.1755ZM12.1534 31.1755V29.4235H11.3787V29.8615C11.1205 29.534 10.7504 29.3512 10.2685 29.3512C9.27006 29.3512 8.49544 30.1166 8.49544 31.1755C8.49544 32.2344 9.27006 32.9999 10.2685 32.9999C10.7849 32.9999 11.155 32.817 11.3787 32.4896V32.9276H12.1534V31.1755ZM9.27436 31.1755C9.27436 30.5546 9.67888 30.0443 10.3459 30.0443C10.9742 30.0443 11.4175 30.5206 11.4175 31.1755C11.4175 31.7964 10.9742 32.3067 10.3459 32.3067C9.67888 32.2684 9.27436 31.7921 9.27436 31.1755Z" fill="#333333" />
                        <path d="M27.3006 2.81055H15.6641V23.4696H27.3006V2.81055Z" fill="#FF5A00" />
                        <path d="M16.4392 13.1405C16.4392 8.94317 18.4359 5.21791 21.5 2.81095C19.245 1.05889 16.4004 0 13.2976 0C5.94736 0 0 5.87706 0 13.1405C0 20.4039 5.94736 26.2809 13.2976 26.2809C16.4004 26.2809 19.245 25.222 21.5 23.47C18.4316 21.097 16.4392 17.3378 16.4392 13.1405Z" fill="#EB001B" />
                        <path d="M43 13.1405C43 20.4039 37.0526 26.2809 29.7024 26.2809C26.5996 26.2809 23.755 25.222 21.5 23.47C24.6028 21.0588 26.5608 17.3378 26.5608 13.1405C26.5608 8.94317 24.5641 5.21791 21.5 2.81095C23.7507 1.05889 26.5953 0 29.6981 0C37.0526 0 43 5.91534 43 13.1405Z" fill="#F79E1B" />
                      </g>
                      <defs>
                        <clipPath id="clip0_961_12350">
                          <rect width="43" height="33" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={styles.read} >
                  <p>Copyright ©dichvupbn.com</p>
                </div>
              </div>
            </div>
          </div>
        </div></div>

    </div>
  );
};

export default Footer;
