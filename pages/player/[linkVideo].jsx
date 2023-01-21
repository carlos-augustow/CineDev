import { useRouter } from "next/router";
import styles from "../../styles/Player.module.scss";
// import ReactPlayer from "react-player";
import SublimeVideo from "react-sublime-video";
export default function VideoPlayer(props) {
  const router = useRouter();
  const link = router.query.linkVideo;
  //   console.log("link_router: ", link);
  // pegar o width e height da tela
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <video src={link} width={width} height={height} controls />

    // <div className={styles.main}>
    //       <SublimeVideo autoPlay loop src={link} />

    // </div>
  );
}
