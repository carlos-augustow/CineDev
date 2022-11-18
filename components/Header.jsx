import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
export default function Header() {
      return (
            <header className={styles.header}>
                  <div className={styles.div_logo}>
                        <Image
                              className={styles.logo}
                              src="/imgs/cinedev_escrito_branco.png"
                              //   height={50}
                              //   width={150}
                              //   layout="fill"
                              alt="logo"
                        />
                  </div>
                  <div className={styles.div_botoes}>
                        <Link href="/main">
                              <div className={styles.btn_login}>
                                    <span>Entrar</span>
                              </div>
                        </Link>
                  </div>
            </header>
      );
}
