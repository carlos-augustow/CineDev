import styles from "../styles/Input.module.css";

function Input() {
      return (
            <div className={styles.supra_input}>
                  <div className={styles.junta_input}>
                        <input className={styles.input} type="email" placeholder="E-mail" />
                        <div className={styles.input_btn}>
                              <span>Vamos lá</span>
                        </div>
                  </div>
            </div>
      );
}

export default Input;
