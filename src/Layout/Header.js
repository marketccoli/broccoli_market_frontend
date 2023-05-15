import { useLocation, useNavigate } from "react-router-dom";
import { Broccoli } from "../assets/icons/Broccoli";
import { useEffect, useState } from "react";
import { GreenButton } from "../components/common/GreenButton";
import { DropdownMenu } from "../components/DropdownMenu";
import { ClickableTextHighlight } from "../components/common/ClickableTextHighlight";
import { useSelector } from "react-redux";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");
  const [dropdownState, setDropdownState] = useState(false);
  const isAuth = useSelector((state) => state.auth.authenticated);

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
    setDropdownState(false);
  };

  const isProductsPage = location.pathname === "/products";
  const isProductsByRegionPage = location.pathname === "/region";

  useEffect(() => {
    setDropdownState(false);
  }, [navigate]);

  return (
    <div className="absolute bg-white text-gray-600 body-font shadow w-full min-w-[700px]">
      <div className=" flex p-1 flex-row items-center justify-between px-4 h-16">
        <div className="flex p-5 items-center justify-center">
          <div onClick={() => handlePageChange(0)} className="cursor-pointer flex title-font font-bold items-center text-green-900 mb-0">
            <div className="min-w-[30px]">
              <Broccoli width={"30px"} height={"30px"} />
            </div>
            <span className="ml-3 text-xl">Broccoli Market</span>
          </div>
          <nav className=" ml-4 py-1 pl-4  border-l rounded-l-xs border-green-400 border-opacity-40 flex flex-wrap items-center text-base justify-center">
            <ClickableTextHighlight onClickHandler={() => handlePageChange(1)} selectionHighlight={isProductsPage}>
              중고 거래
            </ClickableTextHighlight>
            <ClickableTextHighlight onClickHandler={() => handlePageChange(2)} selectionHighlight={isProductsByRegionPage}>
              지역 매물
            </ClickableTextHighlight>
          </nav>
          <div className="relative ml-5 pr-3 flex items-center min-w-[120px]">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-[#f4fff5] border-2 placeholder-green-600  border-green-300 h-10 px-4 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-[#daffdb] outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
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
          {isAuth ? (
            <div className="flex items-center">
              <div className="min-w-[60px] my-3">
                <GreenButton buttonText="상품등록" size="sm" clickHandler={() => handlePageChange(3)} />
              </div>
              {/* profile icon */}
              <div onClick={() => setDropdownState(true)} className="flex w-10 h-10 ml-3 rounded-full justify-center items-center">
                <div className="flex justify-center items-center cursor-pointer rounded-full h-10 w-10 bg-[#23551a] shadow-md">
                  <Broccoli width="30px" height="30px" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center min-w-[100px] my-3">
              <GreenButton buttonText="로그인" size="sm" clickHandler={() => handlePageChange(4)} />
            </div>
          )}
        </div>
      </div>
      {/* Selector */}
      {dropdownState && <div className="fixed inset-0" onClick={() => setDropdownState(false)}></div>}
      {dropdownState && <DropdownMenu onClickHandler={handlePageChange} />}
    </div>
  );
};
