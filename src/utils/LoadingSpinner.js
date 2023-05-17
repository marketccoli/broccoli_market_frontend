import { Broccoli } from "../assets/icons/Broccoli";

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[rgba(21,48,19,0.4)] flex justify-center items-center z-50 ">
      <div className="flex justify-center items-center animate-bounce h-52 w-52 bg-green-600 rounded-full ">
        <div className="flex justify-center items-center animate-spin h-40 w-40 bg-green-500 rounded-full ">
          <Broccoli width="100px" height="100px" />
        </div>
      </div>
    </div>
  );
};
