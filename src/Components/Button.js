import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Button.module.css";

function Button({caffe}) {
  console.log(caffe)
  const [visible, setVisible] = useState(false);

  const popupToggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={styles.caffe_button}
        onClick={popupToggle}
        style={{
          top: caffe.position[0],
          left: caffe.position[1]
        }}
      >
        <FontAwesomeIcon icon={faLocationDot} />
      </button>

      {
        visible && (
          <div
            className={styles.caffe_detail}
          >
            <div className={styles.overlay} onClick={popupToggle}></div>

            <div className={styles.detail_box}>
              <button className={styles.close__detail} onClick={popupToggle}>
                <FontAwesomeIcon icon={faX} />
              </button>

              <h1 className={styles.detail_title}>
                {caffe.title}
              </h1>

              <p className={styles.detail_summary}>
                {caffe.sumary}
              </p>

              <p className={styles.hashtag}>
                {
                  caffe.hashtag.map((hash, index) => {
                    return (
                      `#${hash} `
                    )
                  })
                }
              </p>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Button;