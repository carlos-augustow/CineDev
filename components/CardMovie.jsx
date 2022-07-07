import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CardMovie.module.css";

const CardMovie = ({ video }) => {
      console.log("videoProps : ", video);
      let videoFile = video.video_files;
      console.log("videoFiles : ", videoFile);
      let link;

      const videocom1080 = videoFile.find((video) => video.width === 1920);

      if (videocom1080 !== undefined) {
            // console.log("videocom1080 : ", videocom1080);
            link = videocom1080.link;
      }

      if (videocom1080) {
            return (
                  <>
                        <Link href={`/player/${link}`}>
                              <div className={styles.heart}>
                                    <Image
                                          className={styles.image}
                                          src={video.image}
                                          width={500}
                                          height={272}
                                          alt="img"
                                    />
                                    <div className={styles.div_info}>
                                          <p className={styles.movieMaker}>{video.user.name}</p>
                                          <p className={styles.id}> Video {video.id}</p>
                                    </div>
                              </div>
                        </Link>
                  </>
            );
      }
      //    else {
      //         return (
      //               <div className={styles.card}>
      //                     <p className={styles.erroMensagem}>Não foi possível carregar o vídeo.</p>
      //               </div>
      //         );
      //   }
};

export default CardMovie;
