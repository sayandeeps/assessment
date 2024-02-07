// SavedPhotosPage.js
import React from "react";
import { useSelector } from "react-redux";
import { selectSavedPhotos } from "../store/photoSlice";

const SavedPhotosPage = () => {
  const savedPhotos = useSelector(selectSavedPhotos);

  return (
    <div>
      <h1>Saved Photos</h1>
      <ul>
        {savedPhotos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedPhotosPage;
