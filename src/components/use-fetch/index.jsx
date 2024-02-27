import { useState, useEffect } from "react";

const UseFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const dataResult = await response.json();
      setData(dataResult);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error} Some Error occurred!`);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default UseFetch;
