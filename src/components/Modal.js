import { useState } from "react";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GreenButton } from "../components/common/GreenButton";
import { postTradeProduct } from "../api/product";
import { TextInputField } from "../components/common/TextInputField";
import { useInput } from "../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { async } from "q";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { LoadingSpinner } from "../utils/LoadingSpinner";

export const Modal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState("");
  const [view, setView] = useState("");

  const [title, handleTitleChange] = useInput("");
  const [content, handleContentChange] = useInput("");
  const [price, handlePriceChange] = useInput("");
  const [category, handleCategoryChange] = useInput("");

  const queryClient = useQueryClient();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];

    // ----------- Image validation -------------
    if (!file) return;
    if (fileType !== "image") {
      alert("The selected file is not an image.");
      return;
    }
    const maxSize = 3 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File size is too large. Please select a file under 3 MB.");
      return;
    }
    // ---------------------------------------
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setView(reader.result);
    };
  };

  const addProductMutate = useMutation(postTradeProduct, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("productList");
      toast.success("작성 성공!");
      onClose();
    },
    onError: (error) => {
      toast.error(error.response.data.errorMessage);
    },
  });

  const handleSubmit = () => {
    addProductMutate.mutate({ title, content, price, category, photo: image });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center ${isOpen ? "" : "hidden"}`}
    >
      {addProductMutate.isLoading && <LoadingSpinner />}
      <div className="fixed inset-0 bg-black opacity-75" onClick={() => onClose()}></div>
      <div className="fixed p-4 pb-7 flex flex-col justify-center items-center text-gray-600 max-w-[700px] rounded-lg bg-white shadow">
        <h2 className="px-56 text-xl my-3">상품등록</h2>
        <div className="flex flex-col">
          {/* image part */}
          <div className="flex justify-center items-center rounded-lg w-[500px] h-[300px]">
            <label
              htmlFor="imageInput"
              className="flex items-center justify-center rounded-lg object-cover shadow w-full h-full mx-10 bg-[#f1ffe9] hover:bg-[#e5f2dd] transition-colors duration-200 ease"
              title="Upload Image"
            >
              {view ? "" : "이미지 업로드"}
              <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageChange} />
              {view ? (
                <img className="rounded-lg object-cover shadow w-full h-full " src={view} alt="" />
              ) : (
                <div className="flex justify-center items-center rounded-lg ml-3">
                  <MdOutlinePhotoLibrary />
                </div>
              )}
            </label>
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
    </motion.div>
  );
};
