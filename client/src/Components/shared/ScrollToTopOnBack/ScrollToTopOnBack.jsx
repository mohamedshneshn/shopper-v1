import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnBack = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay scroll to top by a short period of time
    setTimeout(() => {
      // console.log("Scrolling to top");
      window.scrollTo(0, 0);
    }, 10);
  }, [pathname]);

  return null; // This component renders nothing
};

export default ScrollToTopOnBack;
