import { useEffect, useState } from "react";
import axios from "axios";
export default function useApi(url, payload = null, method = "GET") {
  const { meta, setMeta } = useState(null);

  const apiCall = async () => {
    let response = null;
    switch (method) {
      case "GET": {
        response = await axios.get();
        break;
      }
      case "POST": {
        response = await axios.post(url, payload);
      }
    }
    return response;
  };

  const callApi = async () => {
    try {
      setMeta({ loading: true });
      const response = await apiCall();
      setMeta({
        status: response?.status,
        data: response?.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      setMeta({
        status: response?.status,
        data: null,
        error,
        loading: false,
      });
    }
  };

  useEffect(() => {
    callApi();
  }, []);
}
