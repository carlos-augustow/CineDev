import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeaderMain.module.scss";
export default function HeaderMain() {
      return (
            <header className={styles.header}>
                  <div className={styles.imgs}>
                        <Image src="/imgs/logoNovo.png" alt="logo" width={50} height={50} layout="fill" />
                        <Image src="/imgs/cinedev_escrito_branco.png" width={150} height={50} layout="fill" alt="img" />
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
