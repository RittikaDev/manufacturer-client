import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/parts").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Min. Quantity</th>
              <th>Max. Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._key}
                product={product}
                index={index}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteModal
          deleteProduct={deleteProduct}
          refetch={refetch}
          setDeleteProduct={setDeleteProduct}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;
