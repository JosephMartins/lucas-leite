import { useEffect } from "react";

export function useOutSideClick(ref: any, callback: () => void) {
  useEffect(() => {
    /**
     * Executa funçao se houver click fora do ref
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    // Bind no event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind no event listener e clean limpa e executa o callback
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
