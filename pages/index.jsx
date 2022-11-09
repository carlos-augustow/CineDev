import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Input from "../components/Input";
import Footer from "../components/Footer";
export default function Home() {
      return (
            <>
                  <main className={styles.main}>
                        <Header />
                        <div className={styles.supra_text}>
                              <div className={styles.primary_text}>
                                    <h1 className={styles.h1_1}>Filmes, séries e muito</h1>
                                    <h1 className={styles.h1_2}>mais. Sem limites.</h1>
                              </div>
                              <div className={styles.secondary_text}>
                                    <h3>Assista onde quiser. Cancele quando quiser.</h3>
                              </div>
                              <div className={styles.tertiary_text}>
                                    <h4>
                                          Pronto para assistir? Informe seu email para criar ou recriar sua assinatura.
                                    </h4>
                              </div>
                        </div>
                        <Input />
                  </main>
                  <section className={styles.dispositivos}>
                        <h2>Dispositivos compativeis:</h2>
                        <Image
                              className={styles.img_dispositivos}
                              src="../public/imgs/dispositivos.png"
                              width={480}
                              height={115}
                              alt="dispositivos"
                        />
                        <h3>Compativel com SmarTV&apos;s, Computadores, Smartphones, Tablet</h3>
                        <h3>ou qualquer outro dispositivo com acesso à internet</h3>
                  </section>
                  <Footer />
            </>
      );
}
