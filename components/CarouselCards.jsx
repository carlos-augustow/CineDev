import CardMovie from "./CardMovie";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselCards(props) {
      console.log("conteudo video: ", props.conteudo);
      //   const conteudo1920 = conteudo.video.map((video) => {
      //         if (video.width === 1920) {
      //               return video;
      //         }
      //   });
      //   console.log("conteudo1920: ", conteudo1920);
      return (
            <div>
                  <Carousel
                        showStatus={false}
                        showThumbs={false}
                        autoPlay={false}
                        infiniteLoop={false}
                        showArrows={true}
                        width={"100%"}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={28}
                        showIndicators={false}
                  >
                        {props.conteudo.map((video) => (
                              <CardMovie
                                    setAtivaModal={props.setAtivaModal}
                                    setVideo={props.setVideo}
                                    key={video.id}
                                    video={video}
                              />
                        ))}
                  </Carousel>
            </div>
      );
}
