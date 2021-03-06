import { useEffect, useState } from "react";

const useParts = (id) => {
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-ridge-78563.herokuapp.com/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);

  return [part, setPart];
};

export default useParts;
