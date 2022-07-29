import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CardMovie.module.css";
import Modal from "../components/Modal";

const CardMovie = (props) => {
      console.log("videoProps : ", props.video);
      let videoFile = props.video.video_files;
      console.log("videoFile____: ", videoFile);
      let vrb = "Carlos";

      const alteraSetStates = () => {
            props.setAtivaModal(true);
            console.log("props.setAtivaModal: ", props.setAtivaModal);
            props.setVideo(props.video);
            console.log("props.setVideo: ", props.setVideo);
      };

      return (
            <>
                  <div className={styles.heart} onClick={alteraSetStates}>
                        <Image className={styles.image} src={props.video.image} width={500} height={272} alt="img" />
                        <div className={styles.div_info}>
                              <p className={styles.movieMaker}>{props.video.user.name}</p>
                              <p className={styles.id}> Video {props.video.id}</p>
                        </div>
                  </div>
            </>
      );
};

export default CardMovie;
