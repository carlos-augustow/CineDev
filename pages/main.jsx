import callingApi from "./api/pexels";
import styles from "../styles/Main.module.scss";
import CardMovie from "../components/CardMovie";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const getStaticProps = async () => {
      const api = "https://api.pexels.com/videos";
      const qtd_videos = 15;
      const page = 1;
      const res = await fetch(`${api}/popular?per_page=${qtd_videos}&page=${page}`, {
            headers: {
                  Authorization: "563492ad6f91700001000001ab6eb3dda42d46a8a0d200cb85026f38",
            },
      });
      const data = await res.json();
      const videos = data.videos;
      return {
            props: {
                  videos,
            },
      };
};

function Main({ videos }) {
      const widthImgs = 2400;
      const heightImgs = 900;
      console.log("videos: ", videos);
      return (
            <>
                  <Carousel
                        interval={4000}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={false}
                        width={"100%"}
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
                                    src="/../public/imgs/sharbaz_+_banner.png"
                                    width={widthImgs}
                                    height={heightImgs}
                                    alt="img"
                              />
                        </div>
                  </Carousel>

                  {/* <main className={styles.main}>
                        {videos.videos.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </main> */}
                  <div className={styles.main}>
                  <Carousel
                        showThumbs={false}
                        autoPlay={false}
                        infiniteLoop={true}
                        showArrows={true}
                        width={"100%"}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={100}
                        className={styles.carouselMovies}
                        showStatus={false}
                  >
                        {videos.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </Carousel>
                  </div>
                  <div className={styles.main}>
                  <Carousel
                        showThumbs={false}
                        autoPlay={false}
                        infiniteLoop={true}
                        showArrows={true}
                        width={"100%"}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={100}
                        className={styles.carouselMovies}
                        showStatus={false}
                  >
                        {videos.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </Carousel>
                  </div>
                  <div className={styles.main}>
                  <Carousel
                        showThumbs={false}
                        autoPlay={false}
                        infiniteLoop={true}
                        showArrows={true}
                        width={"100%"}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={100}
                        className={styles.carouselMovies}
                        showStatus={false}
                  >
                        {videos.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </Carousel>
                  </div>
                  <div className={styles.main}>
                  <Carousel
                        showThumbs={false}
                        autoPlay={false}
                        infiniteLoop={true}
                        showArrows={true}
                        width={"100%"}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={100}
                        className={styles.carouselMovies}
                        showStatus={false}
                  >
                        {videos.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </Carousel>
                  </div>
            </>
      );
}
export default Main;
