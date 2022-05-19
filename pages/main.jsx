import callingApi from "./api/pexels";
import styles from "../styles/Main.module.css";
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
                        interval={2000}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={false}
                        width={"50%"}
                  >
                        <div>
                              <Image
                                    src={`https://images.pexels.com/videos/1550080/free-video-1550080.jpg?auto=compress&cs=tinysrgb&fit=crop&h=${heightImgs}&w=${widthImgs}`}
                                    width={widthImgs}
                                    height={heightImgs}
                                    alt="img"
                              />
                        </div>
                        <div>
                              <Image
                                    src={`https://images.pexels.com/videos/3163534/free-video-3163534.jpg?auto=compress&cs=tinysrgb&fit=crop&h=${heightImgs}&w=${widthImgs}`}
                                    width={widthImgs}
                                    height={heightImgs}
                                    alt="img"
                              />
                        </div>
                        <div>
                              <Image
                                    src={`https://images.pexels.com/videos/857195/free-video-857195.jpg?auto=compress&cs=tinysrgb&fit=crop&h=${heightImgs}&w=${widthImgs}`}
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
                  <Carousel
                        interval={2000}
                        autoPlay={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={true}
                        width={"90%"}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={100}
                        className={styles.carouselMovies}
                  >
                        {videos.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </Carousel>
            </>
      );
}
export default Main;
