import { useEffect, useState } from "react";

export default function withFetchTitle(Component, url) {
  return function FetchComponent(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((resData) => {
          setData(resData);
          document.title = resData[0].title;
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} data={data} loading={loading} />;
  };
}
