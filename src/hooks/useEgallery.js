import { useEffect, useState } from "react";
import { fetchGallery } from "../services/Egallery.js";

function useEGallery(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetchGallery(page);
        setGallery(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadGallery();
  }, [page]);

  return { gallery, loading, error };
}

export { useEGallery };
