import Image from "next/image";
import { useState } from "react";
import HeaderMain from "../components/HeaderMain";
import CarouselCards from "../components/CarouselCards";
import Modal from "../components/Modal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";

export const getStaticProps = async () => {
      const api = "https://api.pexels.com/videos";
      const qtd_videos = 20;
      const conteudo = {};
      // rever se o for é a melhor forma de fazer isso
      for (let page = 1; page < 6; page++) {
            const res = await fetch(`${api}/popular?per_page=${qtd_videos}&page=${page}`, {
                  headers: {
                        // Authorization: "563492ad6f91700001000001ab6eb3dda42d46a8a0d200cb85026f38",
                        Authorization: "563492ad6f9170000100000105794547f653409aa7d404968b70b419",
                  },
            });
            const data = await res.json();
            let newData;
            if (data.videos) {
                  newData = data.videos.filter((video) => video.width === 1920);
            }
            // console.log("newData: ", newData);
            // conteudo[`videosPg${page}`] = data.videos;
            conteudo[`videosPg${page}`] = newData;
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

      const [ativaModal, setAtivaModal] = useState(false);
      const [video, setVideo] = useState(null);
      console.log("conteudooooooooooo: ", conteudo);

      // useEffect(() => {
      //       const teste = async () => {
      //             const api = "https://api.pexels.com/videos";
      //             const qtd_videos = 20;
      //             const conteudo = {};

      //             for (let page = 1; page < 6; page++) {
      //                   const res = await fetch(`${api}/popular?per_page=${qtd_videos}&page=${page}`, {
      //                         headers: {
      //                               // Authorization: "563492ad6f91700001000001ab6eb3dda42d46a8a0d200cb85026f38",
      //                               Authorization: "563492ad6f9170000100000105794547f653409aa7d404968b70b419",
      //                         },
      //                   });
      //                   const data = await res.json();
      //                   let newData = data.videos.filter((video) => video.width === 1920);
      //                   console.log("newData: ", newData);
      //                   conteudo[`videosPg${page}`] = data.videos;
      //             }
      //       };
      //       teste();
      // }, []);

      return (
            <>
                  <Modal video={video} ativaModal={ativaModal} setAtivaModal={setAtivaModal} />
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
                              <Image src="/imgs/prodev/1.png" width={widthImgs} height={heightImgs} alt="img" />
                        </div>
                        <div>
                              <Image src="/imgs/cinedev_banner.png" width={widthImgs} height={heightImgs} alt="img" />
                        </div>
                  </Carousel>

                  <CarouselCards setAtivaModal={setAtivaModal} setVideo={setVideo} conteudo={conteudo.videosPg1} />
                  <CarouselCards setAtivaModal={setAtivaModal} setVideo={setVideo} conteudo={conteudo.videosPg2} />
                  <CarouselCards setAtivaModal={setAtivaModal} setVideo={setVideo} conteudo={conteudo.videosPg3} />
                  <CarouselCards setAtivaModal={setAtivaModal} setVideo={setVideo} conteudo={conteudo.videosPg4} />
                  <CarouselCards setAtivaModal={setAtivaModal} setVideo={setVideo} conteudo={conteudo.videosPg5} />
            </>
      );
}
export default Main;
