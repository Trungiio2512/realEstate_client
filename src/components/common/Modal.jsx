import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Portal from "./Portal";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
const defaultFn = () => {};

function Modal({
  isOpen = false,
  shouldCloseOverlayClick = false,
  children,
  id,
  onRequestClose = defaultFn,
}) {
  const [closesing, setClosing] = useState(false);
  const containerRef = useRef();

  const handleRequestClose = useCallback(() => {
    setClosing(true);
    containerRef.current.addEventListener(
      "animationend",
      (e) => {
        e.stopPropagation();
        setClosing(false);
        onRequestClose();
      },
      { once: true }
    );
  }, [onRequestClose]);

  useEffect(() => {
    const handleClickOnKeyboard = (e) => {
      if (isOpen && e.code === "Escape") {
        handleRequestClose();
      }
    };
    document.addEventListener("keydown", handleClickOnKeyboard);

    return () => {
      document.removeEventListener("keydown", handleClickOnKeyboard);
    };
  }, [isOpen, handleRequestClose]);

  if (!isOpen) return null;

  return (
    <Portal containerId={id}>
      <div className={`fixed z-[999] w-full h-full top-0 left-0 flex items-center justify-center `}>
        <div
          className="absolute  top-0 left-0 right-0 bottom-0 bg-black-05"
          onClick={shouldCloseOverlayClick ? handleRequestClose : defaultFn}
        />
        <div
          className={`${
            closesing ? "animate-scale-down-center" : "animate-scale-up-center"
          } bg-white m-auto max-w-[700px] w-full mx-5 p-[30px] relative overflow-y-auto rounded-md`}
          ref={containerRef}>
          <Button
            onHanldeClick={handleRequestClose}
            className="text-base float-right hover:text-main p-2 border border-gray-300 hover:border-red-500 rounded-md absolute top-2 right-2">
            <IoClose />
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  shouldCloseOverlayClick: PropTypes.bool,
  children: PropTypes.element.isRequired,
  id: PropTypes.string,
  onRequestClose: PropTypes.func,
};

export default Modal;
