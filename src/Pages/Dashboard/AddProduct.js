import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "7604a899eb6db7654709cbb41d5beedf";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            image: img,
            description: data.description,
            minquantity: data.minquantity,
            availquantity: data.maxquantity,
            price: data.price,
          };
          console.log(product);
          // Post to server
          fetch("http://localhost:5000/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("New Product Added Successfully");
                reset();
              } else {
                toast.error("Failed To Add A New Product");
              }
            });
        }
      });
  };
  return (
    <form
      className="inventory-text mx-16 my-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="inventory-textbox mb-1">
        <h4 className="text-center font-bold">Add A Product</h4>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", {
              required: { value: true, message: "Product Name is required" },
            })}
          />
        </p>
        <p className="inventory-textbox">
          <input
            type="text"
            placeholder="Description"
            {...register("description", {
              required: { value: true, message: "Description is required" },
            })}
          />
        </p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input
            type="text"
            placeholder="Minimum Quantity"
            {...register("minquantity", {
              required: {
                value: true,
                message: "Minimum Quantity is required",
              },
            })}
          />
        </p>
        <p className="inventory-textbox">
          <input
            type="text"
            placeholder="Maximum Quantity"
            {...register("maxquantity", {
              required: {
                value: true,
                message: "Maximum Quantity is required",
              },
            })}
          />
        </p>
      </div>
      <div className="grid grid-cols-2 mt-1">
        <p className="inventory-textbox">
          <input
            type="number"
            placeholder="Price"
            {...register("price", {
              required: { value: true, message: "Price is required" },
            })}
          />
        </p>
        <p className="inventory-textbox">
          <input
            type="file"
            placeholder="Image"
            {...register("image", {
              required: { value: true, message: "Image is required" },
            })}
          />
        </p>
      </div>
      <div className="text-center py-2">
        <button className="btn py-2">Add</button>
      </div>
    </form>
  );
};

export default AddProduct;
