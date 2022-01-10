import axios from "axios";
import React, { useState, useEffect } from "react";
import { View } from "react-native";

function useFetch(url) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setDatas(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {datas, loading, error}
};

export default useFetch;
