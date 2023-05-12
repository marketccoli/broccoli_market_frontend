import { Broccoli } from "../icons/Broccoli";
export const Header = () => {
  return (
    <div class="text-gray-600 body-font shadow relative">
      <div class="min-w-[540px] flex p-1 flex-row items-center justify-between  pr-4">
        <div className="flex p-5 flex-row items-center justify-center">
          <a class="flex title-font font-bold items-center text-green-900 mb-0">
            <Broccoli />
            <span class="ml-3 text-xl">Broccoli Market</span>
          </a>
          <nav class=" ml-4 py-1 pl-4  border-l rounded-l-xs border-green-800 border-opacity-60 flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 font-bold text-green-800 hover:text-green-600 transition-colors duration-300 ease">중고 거래</a>
            <a class="mr-5 font-bold text-green-800 hover:text-green-600 transition-colors duration-300 ease">인기 매물</a>
          </nav>
          <div className="relative ml-10 pr-3 flex items-center ">
            <input
              type="text"
              className="bg-green-50 h-10 px-5 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-[#daffdb] outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
              placeholder="검색"
            />

            <button class="absolute right-9 text-white text-sm bg-[#156016] border-0 py-1 px-3 focus:outline-none hover:bg-[#3c993d] rounded mt-0 transition-colors duration-300 ease-in-out">
              검색
            </button>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full justify-center items-center">
          <div class="rounded-full h-8 w-8 bg-[#23551a]"></div>
        </div>
      </div>
    </div>
  );
};
