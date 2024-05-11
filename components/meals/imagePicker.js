'use client';

import { useRef, useState } from 'react';
import classes from './imagePicker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  const handelClick = () => {
    imageInput.current.click();
  };

  const handelImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt='image selected by the user' fill />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          onChange={handelImageChange}
          required
        />
        <button className={classes.button} type='button' onClick={handelClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
