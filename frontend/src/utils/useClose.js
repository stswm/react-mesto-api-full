import { useEffect } from "react";

export default function useClose(isOpen, handleClose) {
  useEffect(() => {
    if (!isOpen) return;

    function handleCloseTrigger(e) {
      if (e.key === "Escape" || e.target === e.currentTarget) {
        handleClose();
      }
    }

    document.addEventListener("keydown", handleCloseTrigger);
    document
      .querySelectorAll(".popup")
      .forEach((popup) => popup.addEventListener("mousedown", handleCloseTrigger));

    return () => {
      document.removeEventListener("keydown", handleCloseTrigger);
      document
        .querySelectorAll(".popup")
        .forEach((popup) =>
          popup.removeEventListener("mousedown", handleCloseTrigger)
        );
    };
  }, [isOpen]);
}
