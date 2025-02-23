import { useContext } from "react";
import "./Popup.css";
import { PopupContext } from "../../contexts/PopupContext";
import { useEffect } from "react";

export default function Popup(props) {
  const { onClose, title, children } = props;
  const { popupRef, handleClosePopup } = useContext(PopupContext);

  useEffect(() => {
    const handleClick = (e) => {
      if (!popupRef.current.contains(e.target)) {
        console.log(popupRef.current);
        handleClosePopup();
      }
    };

    const handleKeypress = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeypress);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKeypress);
    };
  });

  return (
    <div className="popup">
      <div className="popup__content" ref={popupRef}>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
