import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <a href="/">
          <h3>꿈드림 맛스타그램</h3>
        </a>
      </div>
      <ul className={styles.navbar__menu}>
        <li><a href="/">지도로 보기</a></li>
        <li><a href="/category">분류로 보기</a></li>
      </ul>
    </header>
  )
};

export default Header;