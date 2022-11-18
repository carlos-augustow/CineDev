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
                              src="https://i.pinimg.com/236x/22/19/9d/22199de0f18648c8207152589aed247d.jpg"
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
