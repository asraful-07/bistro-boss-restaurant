import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: data.image,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);

      if (menuRes?.data?.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error details:", error.response || error.message || error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: "Recipe name is required" })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: "Category is required" })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: "Price is required" })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Marathon Image</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              {...register("image", { required: "Image URL is required" })}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Adding..." : "Add Item"} <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
