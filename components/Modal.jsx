import Link from "next/link";

import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
      console.log(props)
      console.log("props.video: ", props.video);
      if (props.video) {
            console.log("props.video.video_files: ", props.video.video_files);
      }
      const alteraSetStates = () => {
            props.setAtivaModal(false);
            console.log("props.setAtivaModal: ", props.setAtivaModal);
            // props.setVideo(props.video);
            // console.log("props.setVideo: ", props.setVideo);
      };
      //   let videoFile = props.video.videos_files;
      //   console.log("videoFile____: ", videoFile);
      // se props.ativaModal for true, então o modal será aberto
      if (props.ativaModal && props.video) {
            return (
                  <div className={styles.modal}>
                        <div className={styles.close}><span onClick={alteraSetStates}>( X )</span></div>
                        <h3 className={styles.modal_text}>Escolha a qualidade do video:</h3>
                        <div className={styles.modal_buttons}>
                              {props.video.video_files.map((video, index) => {
                                    return (
                                          <Link
                                                key={index}
                                                href={{
                                                      pathname: "/player/[link]",
                                                      query: { link: video.link },
                                                }}
                                          >
                                                <div className={styles.modal_button}>
                                                      <span>{video.height}</span>
                                                </div>
                                          </Link>
                                    );
                              })}
                        </div>
                  </div>
            );
      }
};

export default Modal;
