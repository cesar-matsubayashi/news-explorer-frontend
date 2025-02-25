import { useContext } from "react";
import "./Popup.css";
import { PopupContext } from "../../contexts/PopupContext";
import { useEffect } from "react";

export default function Popup(props) {
  const { onClose, title, children, isNavigation } = props;
  const { popupRef, handleClosePopup } = useContext(PopupContext);

  useEffect(() => {
    const handleClick = (e) => {
      if (!popupRef.current.contains(e.target)) {
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
    <div className={`popup ${isNavigation ? "popup_navigation" : ""}`}>
      <div
        className={`popup__content ${
          isNavigation ? "popup__content_navigation" : ""
        }`}
        ref={popupRef}
      >
        <button
          type="button"
          className={`popup__close ${
            isNavigation ? "popup__close_navigation" : ""
          }`}
          onClick={onClose}
        ></button>
        <h3
          className={`popup__title ${
            isNavigation ? "popup__title_navigation" : ""
          }`}
        >
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
