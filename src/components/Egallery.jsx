import React from "react";
import styles from "../components/Egallery.module.css";
import { useEGallery } from "../hooks/useEgallery.js";
import Loading from "./Loading.jsx";
import PaginationButton from "./PaginationButton.jsx";
import { useState } from "react";

const Egallery = () => {
  const [page, setPage] = useState(1);

  const onSetPageInc = () => {
    setPage((prev) => prev + 1);
  };

  const onSetPageDec = () => {
    setPage((prev) => prev - 1);
  };

  const { gallery, loading, error } = useEGallery(page);
  if (loading) return <Loading />;

  if (error) return <span>Error occured</span>;

  if (gallery.length === 0)
    return (
      <span
        style={{
          position: "relative",
          left: "38%",
          top: "50%",
          textAlign: "center",
          width: "100%",
        }}
      >
        That all we have for today, Come back tomorrow :)
      </span>
    );

  return (
    <>
      <div className={styles.parentCard}>
        <h1>Snapify</h1>
        {gallery.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <img loading="lazy" src={item.download_url} alt="picture" />
              <span className={styles.authorSpan}>{item.author}</span>
            </div>
          );
        })}
      </div>
      <PaginationButton
        page={page}
        setPageInc={onSetPageInc}
        setPageDec={onSetPageDec}
      />
    </>
  );
};

export default Egallery;
