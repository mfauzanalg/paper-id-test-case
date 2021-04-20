/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const useAxios = (config) => {
  const { enqueueSnackbar } = useSnackbar();

  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosInstace = axios.create({
    baseURL: 'https://development.paper.id:3500/test-case/api/v1',
  });

  const fetch = () => {
    setLoading(true);
    axiosInstace(config)
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
  };

  return { response, error, loading, fetch };
};

export default useAxios;
