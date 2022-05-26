import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductRow = ({ product, index, refetch, setDeleteProduct }) => {
  const { name, minquantity, availquantity, image, price } = product;
  //   console.log(product);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{minquantity}</td>
      <td>{availquantity}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setDeleteProduct(product)}
          for="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
