import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { routeTitles } from "../utils/pageTitles";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "Foodie";
    document.title = title;
  }, [location]);

  return null;
};

export default TitleUpdater;
