import { useEffect, useState } from "react";
import { fetchGallery } from "../services/Egallery.js";

function useEGallery() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetchGallery();
        setGallery(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadGallery();
  }, []);

  return { gallery, loading, error };
}

export { useEGallery };
