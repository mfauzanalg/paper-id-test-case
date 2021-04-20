/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const useAxios = (config) => {
  const { enqueueSnackbar } = useSnackbar();

  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(config)
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setError(error?.response?.data?.message);
          enqueueSnackbar(error?.response?.data?.message, {
            variant: 'error',
          });
        }
        setLoading(false);
      });
  }, []);

  return { response, error, loading };
};

export default useAxios;
