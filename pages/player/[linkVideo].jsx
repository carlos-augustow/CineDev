import { useRouter } from "next/router";
import styles from "../../styles/Player.module.scss";
// import ReactPlayer from "react-player";
import SublimeVideo from "react-sublime-video";
export default function VideoPlayer(props) {
      const router = useRouter();
      const link = router.query.linkVideo;
      //   console.log("link_router: ", link);

      return (
            <div className={styles.main}>
                  <SublimeVideo autoPlay loop src={link} />

            </div>
      )
}
