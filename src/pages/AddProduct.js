import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { GreenButton } from "../components/common/GreenButton";
import { postTradeProduct } from "../api/api";
import { TextInputField } from "../components/common/TextInputField";
import { useInput } from "../hooks/useInput";

export const AddProduct = () => {
  const [image, setImage] = useState("");
  const [view, setView] = useState("");
  const [title, handleTitleChange] = useInput("");
  const [content, handleContentChange] = useInput("");
  const [price, handlePriceChange] = useInput("");
  const [category, handleCategoryChange] = useInput("");
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
  const handleSubmit = () => {
    postTradeProduct({ title, content, price, category, photo: image });
  };
  return (
    <div className="flex  ">
      <div className="px-5 grid gap-8 grid-cols-1 lg:grid-cols-2 py-24 mx-auto text-gray-900 rounded-lg min-w-[700px] h-full">
        {/* image part */}

        <div className="flex w-full justify-center items-center px-10 ">
          <div className="flex relative justify-center rounded-lg items-center mb-4 mt-12 ">
            <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageChange} />
            <label htmlFor="imageInput" className="cursor-pointer absolute inset-0 w-full h-full rounded-lg" title="Upload Image"></label>

            {view ? (
              <img className="w-full h-full rounded-lg object-cover shadow-md" src={view} alt="" />
            ) : (
              <div className="flex justify-center items-center rounded-lg  shadow-sm">
                <BsCardImage />
              </div>
            )}
          </div>
        </div>

        {/* body part */}
        <div className="flex flex-col items-center justify-center">
          <TextInputField
            autofocus={true}
            inputLabel="Title"
            inputType="text"
            placeholderText="제목"
            value={title}
            handleInputChange={handleTitleChange}
          />
          <TextInputField inputLabel="Content" inputType="text" placeholderText="내용" value={content} handleInputChange={handleContentChange} />
          <TextInputField inputLabel="Price" inputType="text" placeholderText="가격" value={price} handleInputChange={handlePriceChange} />
          <TextInputField
            inputLabel="Category"
            inputType="text"
            placeholderText="카테고리"
            value={category}
            handleInputChange={handleCategoryChange}
          />
          <div className="w-2/3 px-4 mt-5">
            <GreenButton buttonText="추가" clickHandler={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
