import CardMovie from "./CardMovie";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselCards({ conteudo }) {
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
                        {conteudo.map((video) => (
                              <CardMovie key={video.id} video={video} />
                        ))}
                  </Carousel>
            </div>
      );
}
