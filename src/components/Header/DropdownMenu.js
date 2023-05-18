import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../api/auth";
import { DELETE_TOKEN } from "../../redux/modules/authSlice";

export const DropdownMenu = ({ onClickHandler }) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);
  // dropdown menu component, with navigate handler passed as props
  return (
    <div className="flex flex-col  absolute top-14 right-8  bg-white rounded-md border border-green-200 border-opacity-60 z-50">
      <div className="rounded-t-md px-4 py-1  border-b border-green-200  text-black ">
        <span>Signed in as </span>
        <span className="font-bold">{user_id}</span>
      </div>
      <div className="px-4 py-1  dropdownItemStyle" onClick={() => onClickHandler(5)}>
        <div>Mypage</div>
      </div>
      <div className="px-4 py-1 dropdownItemStyle" onClick={() => onClickHandler(6)}>
        <div>Chats</div>
      </div>
      <div
        className="  rounded-b-md px-4 py-1 border-t border-green-200  dropdownItemStyle"
        onClick={() => {
          dispatch(DELETE_TOKEN());
          onClickHandler(0);
        }}
      >
        <div>Logout</div>
      </div>
    </div>
  );
};
