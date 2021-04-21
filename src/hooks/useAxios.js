/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

const useAxios = (config) => {
  const { enqueueSnackbar } = useSnackbar();
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = Cookies.get('token');
  const axiosInstace = axios.create({
    baseURL: 'https://development.paper.id:3500/test-case/api/v1',
    headers: { Authorization: `Bearer ${token}` },
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
          setError(error?.response?.data?.error?.message);
          enqueueSnackbar(error?.response?.data?.error.message, {
            variant: 'error',
          });
        }
        setLoading(false);
      });
  };

  return { response, error, loading, fetch };
};

export default useAxios;
