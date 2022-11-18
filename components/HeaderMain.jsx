import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeaderMain.module.scss";
export default function HeaderMain() {
      return (
            <header className={styles.header}>
                  <div className={styles.imgs}>
                        <Image src="/../public/imgs/logoNovo.png" alt="logo" layout="fill" />
                        <Image src="/../public/imgs/cinedev_escrito_branco.png" layout="fill" alt="img" />
                  </div>
                  <div className={styles.btnSair}>
                        <span>
                              <Link href="/">
                                    <a>Sair</a>
                              </Link>
                        </span>
                  </div>
            </header>
      );
}
