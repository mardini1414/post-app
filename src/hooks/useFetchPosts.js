import { useEffect, useState } from 'react';
import client from '../libs/axios/client';
import { useDebounce } from 'use-debounce';

const useFetchPost = (search) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title] = useDebounce(search, 500);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.get('/posts?title_like=' + title);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  return { data, error, loading };
};

export default useFetchPost;
