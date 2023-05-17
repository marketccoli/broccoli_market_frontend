export const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="absolute inset-0 bg-black opacity-75" onClick={() => onClose()}></div>
      <div className="fixed inset-0 flex items-center justify-center" onClick={() => onClose()}>
        <img alt="product" className="p-12 object-cover max-h-full max-w-full" src={image} />
      </div>
    </div>
  );
};
