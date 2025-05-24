import styles from "../static/ColorOptions.module.css";

interface Props {
  color: string;
}
const ColorOptions = ({ color }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <h1>Color Selected</h1>
        <div className={styles.outputColor} style={{ backgroundColor: color }}>
          {color}
        </div>
      </div>
    </>
  );
};

export default ColorOptions;
