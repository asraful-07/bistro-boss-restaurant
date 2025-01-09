import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const UpdateItem = () => {
  const { name, image, category, recipe, price, _id } = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: data.image,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been successfully updated.`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Failed to update ${data.name}.`,
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error updating menu item:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `An error occurred: ${error.message}`,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
      <SectionTitle heading="Update an Item" subHeading="Refresh info" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: "Recipe Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
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
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>

            {/* Price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                className="input input-bordered w-full"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Details about the recipe"
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Image URL*</span>
            </label>
            <input
              type="text"
              defaultValue={image}
              placeholder="Image URL"
              {...register("image", { required: "Image URL is required" })}
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary mt-4" type="submit">
            Update Menu Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
