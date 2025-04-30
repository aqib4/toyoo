import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import Drawer from "../Mobile/Drawer";
import Forms from "./Forms";
import HeaderPrivacy from "../privacyPolicy/HeaderPrivacy";
import HomeOneHeader from "../HomeOne/HomeOneHeader";

const Contact = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);

  useEffect(() => {
    document.body.classList.add("appie-init");
    if (darkMode) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }
    return () => {
      document.body.classList.remove("appie-dark");
    };
  }, [darkMode]);  // Make sure to re-run when darkMode changes

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />

      <HomeOneHeader
        className={darkMode ? "appie-header-area-dark" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      
      {/* Pass darkMode to Forms component */}
      <Forms darkMode={darkMode} />

      <FooterHomeOne
        className={darkMode ? "appie-footer-area-dark" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      
      <BackToTop />
    </>
  );
};

export default Contact;
