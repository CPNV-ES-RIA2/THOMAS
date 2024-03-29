import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const dropzoneStyle = {
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  borderWidth: "2px",
  borderRadius: "8px",
  borderColor: "white",
  borderStyle: "dashed",
  color: "#aaaaaa",
  cursor: "pointer",
};

const activeDropzoneStyle = {
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  borderWidth: "2px",
  borderRadius: "8px",
  borderColor: "lightgreen",
  borderStyle: "dashed",
  color: "#aaaaaa",
  cursor: "pointer",
  backgroundColor: "#7d8795",
};

const DropzoneComponent = ({ setImage, setError }) => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

    setImage(acceptedFiles[0]);
    setError(false);
  }, [setImage, setError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    maxFiles: 1
  });

  const { t } = useTranslation();

  const fileList = files.map((file) => (
    <li key={file.name}>
      <img className="object-contain w-40 h-40 mx-auto" src={file.preview} alt={file.name} />
      <span data-testid="cypress-img-preview">{file.name}</span>
    </li>
  ));

  return (
    <div style={isDragActive ? activeDropzoneStyle : dropzoneStyle}
      {...getRootProps()}>
      <input id='image-input' data-testid="dragdrop" {...getInputProps()} />
      {
        isDragActive ?
          <p>{t('drop_file')}</p> :
          <p>{t('dragdrop_here')}</p>
      }
      <ul>{fileList}</ul>
    </div>
  );
};

export default DropzoneComponent;