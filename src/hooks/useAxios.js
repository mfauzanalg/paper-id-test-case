/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookie from 'js-cookie';
import ls from 'local-storage';

const useAxios = (config) => {
  const { enqueueSnackbar } = useSnackbar();
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = ls.get('data')?.token;
  const axiosInstace = axios.create({
    baseURL: 'https://development.paper.id:3500/test-case/api/v1',
    headers: { Authorization: `Bearer ${token}` },
  });

  const fetch = () => {
    setLoading(true);
    axiosInstace(config)
      .then((res) => {
        setError('');
        setResponse(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response?.data?.error?.message) {
            setError(error.response.data.error.message);
            enqueueSnackbar(error.response.data.error.message, {
              variant: 'error',
            });
          } else {
            setError(error?.response?.data?.message);
            enqueueSnackbar(error?.response?.data?.message, {
              variant: 'error',
            });
          }
          if (error?.response?.status === 401) {
            Cookie.remove('token');
            ls.remove('data');
          }
        }
        setLoading(false);
      });
  };

  return { response, error, loading, fetch };
};

export default useAxios;
