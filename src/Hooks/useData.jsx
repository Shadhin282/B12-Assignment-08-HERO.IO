import { useState, useEffect } from "react";
import axios from "axios";
import LoadingLoader from "../component/LoadingLoader";


const useData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true)
      setTimeout(async() => {
        axios("/data.json")
          .then((data) => setAppData(data.data))
          .catch(err => setError(err))
      .finally(()=>setLoading(false))
      },1000)
      
  }, []);

  return { appData, loading, error };
};

export default useData;
