import Button from "./Button";
import data from "../data.json";
import styles from "./MapImage.module.css";

function MapImage() {
  return (
    <main className={styles.map}>
      {
        data.map((caffe, index) => {
          return (
            <Button caffe={caffe} key={index} />
          )
        })
      }

      <img
        className={styles.map_image}
        src="https://mblogthumb-phinf.pstatic.net/20120130_136/praxsis_1327855884869Ocl6w_PNG/%BE%E7%C3%B5%B1%B8%C7%E0%C1%A4%B1%B8%BF%AA.png?type=w2"
        alt=""
      />
    </main>
  )
}

export default MapImage;