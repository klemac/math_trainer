import React, { useEffect, useState } from "react";
import classes from "./MyInputFile.module.css";

const MyInputFile = React.forwardRef((props, ref) => {
  const [fileHere, setFileHere] = useState(props.file);
  console.log(props.file);

  

  useEffect(() => {
    setFileHere(props.file)
  }, [props.file]);

  const cutFileName = (filename) => {
    const parts = filename.split('.')
    const newName = parts[0].slice(0, 5) + "..." + parts[0].slice(-1) + '.' + parts[1]
    return newName
  }

  return (
    <label className={classes.inputFile}>
      <input ref={ref} {...props} />
      <div >
        <span className={classes.inputFileBtn}>{fileHere ? cutFileName(fileHere.name) : "Выберите файл"}</span>
      </div>
    </label>
  );
});

export default MyInputFile;

