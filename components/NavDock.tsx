import { useState, useEffect } from "react";
import Dock from "@/components/blocks/Components/Dock/Dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { MdLightMode, MdDarkMode } from "react-icons/md";

// Define el toggle de tema
export default function NavDock() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => alert("Home!") },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: isDark ? <MdLightMode size={18}/> : <MdDarkMode size={18}/>,
      label: "Toggle Theme",
      onClick: toggleTheme,
    },
  ];

  return <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />;
}
