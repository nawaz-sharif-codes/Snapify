import React from "react";
import styles from "../components/Egallery.module.css";
import { useEGallery } from "../hooks/useEgallery.js";

const Egallery = () => {
  const { gallery, loading, error } = useEGallery();

  if (loading) return <span>Loading...</span>;

  if (error) return <span>Error occured</span>;

  return (
    <>
      <div className={styles.parentCard}>
        <h1>Snapify</h1>
        {gallery.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <img loading='lazy' src={item.download_url} alt="picture" />
              <span className={styles.authorSpan}>{item.author}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Egallery;
