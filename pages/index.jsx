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
                  </main>
                  <section className={styles.dispositivos}>
                        <h2>Dispositivos compativeis:</h2>
                        <Image
                              className={styles.img_dispositivos}
                              src="/https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
                              // width={480}
                              // height={115}
                              layout="fill"
                              alt="dispositivos"
                        />
                        <h3>Compativel com SmarTV&apos;s, Computadores, Smartphones, Tablet</h3>
                        <h3>ou qualquer outro dispositivo com acesso à internet</h3>
                  </section>
                  <Footer />
            </>
      );
}
