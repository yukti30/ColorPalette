import { useState } from "react";
import ColorOptions from "./ColorOptions";
import styles from "../static/ColorPalette.module.css";
const ColorPalette = () => {
  const rainbow = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];
  const [selectedColor, setSelectedColor] = useState("white");
  return (
    <>
      <div className={styles.colorOptions}>
        {rainbow.map((color, index) => (
          <div
            className={styles.colors}
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => {
              setSelectedColor(color);
            }}
          >
            {color}
          </div>
        ))}
      </div>
      <ColorOptions color={selectedColor} />
    </>
  );
};

export default ColorPalette;
