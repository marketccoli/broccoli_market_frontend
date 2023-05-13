import { useLocation, useNavigate } from "react-router-dom";
import { Broccoli } from "../assets/icons/Broccoli";
import { useEffect, useState } from "react";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");
  const [memberOption, setMemberOption] = useState(false);
  console.log(searchWord);
  const handleSearch = () => {
    navigate(`/search?keyword=${encodeURIComponent(searchWord)}`);
    setSearchWord("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handlePageChange = (newValue) => {
    const pages = ["/", "/products", "/region", "/addproduct", "/login", "/mypage", "/chats"];
    navigate(pages[newValue]);
    setMemberOption(false);
  };

  const isProductsPage = location.pathname === "/products";
  const isProductsByRegionPage = location.pathname === "/region";
  useEffect(() => {
    setMemberOption(false);
  }, [navigate]);
  return (
    <div className="bg-white text-gray-600 body-font shadow relative min-w-[700px]">
      <div className=" flex p-1 flex-row items-center justify-between px-4">
        <div className="flex p-5 items-center justify-center">
          <div onClick={() => handlePageChange(0)} className="cursor-pointer flex title-font font-bold items-center text-green-900 mb-0">
            <Broccoli width={"30px"} height={"30px"} />
            <span className="ml-3 text-xl">Broccoli Market</span>
          </div>
          <nav className=" ml-4 py-1 pl-4  border-l rounded-l-xs border-green-400 border-opacity-40 flex flex-wrap items-center text-base justify-center">
            <div
              onClick={() => handlePageChange(1)}
              className={`cursor-pointer mr-5 font-bold ${
                isProductsPage ? "text-green-600" : "text-green-800"
              } hover:text-green-600 transition-colors duration-200 ease`}
            >
              중고 거래
            </div>
            <div
              onClick={() => handlePageChange(2)}
              className={`cursor-pointer mr-5 font-bold ${
                isProductsByRegionPage ? "text-green-600" : "text-green-800"
              } hover:text-green-600 transition-colors duration-200 ease`}
            >
              지역 매물
            </div>
          </nav>
          <div className="relative ml-10 pr-3 flex items-center ">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-[#f4fff5] border-2 placeholder-green-600  border-green-300 h-10 px-5 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-[#daffdb] outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
              placeholder="Search..."
            />

            <button
              onClick={handleSearch}
              className="absolute right-9 text-sm  font-bold opacity-80 border-0 py-1 px-3 focus:outline-none text-green-600 hover:text-green-400 rounded transition-colors duration-300 ease-in-out"
            >
              검색
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* show on login */}
          <div className="flex">
            <button
              onClick={() => handlePageChange(3)}
              className="bg-[#156016]  text-white mr-6 min-w-[50px]  border-0 py-1 px-3 focus:outline-none hover:bg-[#3c993d] rounded transition-colors duration-300 ease-in-out"
            >
              상품 등록
            </button>
            {/* profile icon */}
            <div onClick={() => setMemberOption(true)} className="flex w-10 h-10 rounded-full justify-center items-center">
              <div className="rounded-full h-8 w-8 bg-[#23551a]"></div>
            </div>
          </div>
          <button
            onClick={() => handlePageChange(4)}
            className="bg-[#156016]  text-white mr-6 min-w-[50px]  border-0 py-1 px-3 focus:outline-none hover:bg-[#3c993d] rounded transition-colors duration-300 ease-in-out"
          >
            로그인
          </button>
        </div>
      </div>
      {/* Selector */}
      {memberOption && <div className="fixed inset-0" onClick={() => setMemberOption(false)}></div>}
      {memberOption && (
        <div className="flex flex-col  absolute top-14 right-8 w-36 h-20  bg-white rounded-md overflow-hidde">
          <div
            className="flex flex-row justify-start items-center h-1/2 pl-4 gap-3 rounded-md text-black  hover:bg-mainPurple hover:text-white cursor-pointer"
            onClick={() => handlePageChange(5)}
          >
            <div>마이페이지</div>
          </div>
          <div
            className="flex flex-row justify-start items-center h-1/2 pl-4 gap-3 rounded-md text-black  hover:bg-mainPurple hover:text-white cursor-pointer"
            onClick={() => handlePageChange(6)}
          >
            <div>채팅</div>
          </div>
          <div
            className="flex flex-row justify-start items-center h-1/2 pl-4 gap-3 rounded-md text-black  hover:bg-mainPurple hover:text-white cursor-pointer"
            onClick={() => handlePageChange(0)}
          >
            <div>로그아웃</div>
          </div>
        </div>
      )}
    </div>
  );
};
