import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { GreenButton } from "../components/GreenButton";
import { postTradeProduct } from "../api/api";
export const AddProduct = () => {
  const [image, setImage] = useState("");
  const [view, setView] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check file type
    const fileType = file.type.split("/")[0];
    if (fileType !== "image") {
      alert("The selected file is not an image.");
      return;
    }

    // Check file size
    const maxSize = 3 * 1024 * 1024; // 3 MB
    if (file.size > maxSize) {
      alert("File size is too large. Please select a file under 3 MB.");
      return;
    }
    // console.log(file);

    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setView(reader.result);
    };
  };

  return (
    <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
      <div className="flex flex-col justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex relative justify-center rounded-sm items-center mb-4 mt-12 ">
            <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageChange} />
            <label htmlFor="imageInput" className="cursor-pointer absolute inset-0 w-full h-full" title="Upload Image"></label>

            {view ? (
              <img className="w-full h-full rounded-rounded-sm object-cover shadow-md" src={view} alt="" />
            ) : (
              <div className="flex justify-center items-center rounded-sm  shadow-sm">
                <BsCardImage />
              </div>
            )}
          </div>
        </div>
      </div>
      <GreenButton clickHandler={() => postTradeProduct(image)} />
    </div>
  );
};
