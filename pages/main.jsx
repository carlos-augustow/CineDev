import callingApi from "./api/pexels";
import styles from "../styles/Main.module.scss";
import CardMovie from "../components/CardMovie";
import Image from "next/image";
import HeaderMain from "../components/HeaderMain";
import CarouselCards from "../components/CarouselCards";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const getStaticProps = async () => {
      const api = "https://api.pexels.com/videos";
      const qtd_videos = 20;
      const conteudo = {};

      for (let page = 1; page <= 5; page++) {
            const res = await fetch(`${api}/popular?per_page=${qtd_videos}&page=${page}`, {
                  headers: {
                        Authorization: "563492ad6f91700001000001ab6eb3dda42d46a8a0d200cb85026f38",
                  },
            });
            const data = await res.json();
            conteudo[`videosPg${page}`] = data.videos;
      }

      return {
            props: {
                  conteudo,
            },
      };
};

function Main({ conteudo }) {
      const widthImgs = 2400;
      const heightImgs = 900;
      console.log("videos: ", conteudo);
      return (
            <>
                  <HeaderMain />
                  <Carousel
                        interval={4000}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={false}
                        width={"100%"}
                        stopOnHover={false}
                        showStatus={false}
                  >
                        <div>
                              <Image
                                    src="/../public/imgs/prodev/1.png"
                                    width={widthImgs}
                                    height={heightImgs}
                                    alt="img"
                              />
                        </div>
                        <div>
                              <Image
                                    src="/../public/imgs/cinedev_banner.png"
                                    width={widthImgs}
                                    height={heightImgs}
                                    alt="img"
                              />
                        </div>
                  </Carousel>

                  <CarouselCards conteudo={conteudo.videosPg1} />
                  <CarouselCards conteudo={conteudo.videosPg2} />
                  <CarouselCards conteudo={conteudo.videosPg3} />
                  <CarouselCards conteudo={conteudo.videosPg4} />
                  <CarouselCards conteudo={conteudo.videosPg5} />
            </>
      );
}
export default Main;
