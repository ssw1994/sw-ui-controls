import React, { useEffect, useId, useMemo, useState, Fragment } from "react";
import FileUploaderStyle from "./FileUploader.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Card, CardMedia } from "../Card";
import { Modal } from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faTrash,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const ImagePreview = ({ img }) => {
  const id = useId();
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById(id).src = e.target.result;
    };
    reader.readAsDataURL(img);
  }, [img]);
  return (
    <Card style={{ width: "200px", height: "200px" }}>
      <CardMedia style={{ height: "100% !important" }}>
        <img id={id} />
      </CardMedia>
    </Card>
  );
};

const PreviewImages = ({ files }) => {
  return (
    <div className={FileUploaderStyle.sw_preview_images}>
      {files.map((img) => (
        <ImagePreview img={img} key={img.name} />
      ))}
    </div>
  );
};

const DropZone = ({ getFiles }) => {
  const onDrop = (event) => {
    event?.preventDefault();
    const droppedFile = Array.from(event.dataTransfer.files);
    if (getFiles && typeof getFiles === "function") {
      getFiles(droppedFile);
    }
  };

  const onDragOver = (event) => {
    event?.preventDefault();
  };

  return (
    <div
      className={FileUploaderStyle.sw_file_uploader_drag_drop}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <p>Drag and drop a file here</p>
    </div>
  );
};

export const FileUploader = (props) => {
  const [preview, setPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const { label, dragDrop, uploadedFiles, ...otherProps } = props;
  const [images, updateImages] = useState([]);
  const id = useId();

  const [previewLocation, updatePreviewLocation] = useState(null);

  useEffect(() => {
    if (images && typeof uploadedFiles === "function") {
      uploadedFiles(images);
    }
  }, [images.length, uploadedFiles]);

  const removeImage = (event, number) => {
    event?.stopPropagation();
    updateImages(images.filter((_, index) => index !== number));
  };

  const mouseHover = (event, file) => {
    updatePreviewLocation({
      position: "fixed",
      top: event.clientY,
      left: event.clientX,
    });
    setPreviewImage(file);
  };

  const PreviewView = previewImage ? (
    <div
      style={{ ...previewLocation }}
      className={FileUploaderStyle.sw_preview_image}
    >
      <Button style={{ float: "right" }} onClick={() => setPreviewImage(null)}>
        <FontAwesomeIcon icon={faWindowClose} />
      </Button>
      <ImagePreview img={previewImage} />
    </div>
  ) : null;

  const ImageListTemplate = (
    <ul className={FileUploaderStyle.sw_file_list}>
      {images.map((file, index) => {
        return (
          <li
            key={file.name}
            onClick={(e) => mouseHover(e, file)}
            title="Click to Preview"
          >
            {file.name}
            <Button onClick={(e) => removeImage(e, index)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </li>
        );
      })}
    </ul>
  );

  const fileSelected = (event) => {
    const { target } = event;
    updateImages([...images, ...target.files]);
  };

  if (dragDrop) {
    const getFiles = (files) => {
      updateImages([...images, ...files]);
    };
    return (
      <div className={FileUploaderStyle.sw_drop_zone}>
        <DropZone getFiles={getFiles} />
        {ImageListTemplate}
        {PreviewView}
        {/* <Modal open={preview} onClose={() => setPreview(false)}>
          <PreviewImages files={images} />
        </Modal> */}
      </div>
    );
  }

  return (
    <div className={FileUploaderStyle.sw_file_uploader}>
      <Input
        type="file"
        hidden
        id={id}
        {...otherProps}
        onChange={fileSelected}
      />
      <div>
        {/* <Input
          disabled={true}
          placeholder="Choose file"
          {...otherProps}
          onChange={fileSelected}
        /> */}
        <label htmlFor={id}>{label}</label>
        {ImageListTemplate}
        {PreviewView}
      </div>
      {/* <Modal open={preview} onClose={() => setPreview(false)}>
        <PreviewImages files={images} />
      </Modal> */}
    </div>
  );
};
