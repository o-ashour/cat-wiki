import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // we're destructuring the location object to assign the 'pathname' value to a 'pathname' variable
  const { pathname } = useLocation();

  // "document.documentElement.scrollTo" is the magic for React Router Dom v6
  // in js, Element.scrollTo() scrolls to the specified coordinates within the given element
  // we will use useEffect to render depending on if the 'pathname', or current route, changes
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // this is to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}
