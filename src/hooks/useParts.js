import { useEffect, useState } from "react";

const useParts = (id) => {
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);

  return [part, setPart];
};

export default useParts;
