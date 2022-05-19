import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CardMovie.module.css";

const CardMovie = ({ video }) => {
      return (
            <>
                  <div className={styles.card}>
                        <div className={styles.heart}>
                              <Image className={styles.image} src={video.image} width={500} height={272} alt="img" />
                              <div className={styles.div_info}>
                                    <p className={styles.movieMaker}>{video.user.name}</p>
                                    <p className={styles.id}> Video {video.id}</p>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default CardMovie;
