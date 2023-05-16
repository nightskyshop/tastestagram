import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Button.module.css";

function Button({caffe}) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoverVisible, setHoverVisible] = useState(false);

  console.log(hoverVisible);

  const popupToggle = () => {
    setPopupVisible(!popupVisible);
  };

  const onMouseEnter = () => {
    setHoverVisible(true)
  };

  const onMouseLeave = () => {
    setHoverVisible(false);
  };

  return (
    <>
      <button
        className={styles.caffe_button}
        onClick={popupToggle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          top: caffe.position[0],
          left: caffe.position[1]
        }}
      >
        <FontAwesomeIcon icon={faLocationDot} />
      </button>

      {
        hoverVisible && (
          <div
            className={styles.caffe_overview}
            style={{
              top: caffe.position[0] + 20,
              left: caffe.position[1] + 20
            }}
          >
            <h1 className={styles.overview_title}>{caffe.title}</h1>
          </div>
        )
      }

      {
        popupVisible && (
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