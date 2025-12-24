'use client';
import React from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const  ThemeSetting = () => {
  const { setTheme, theme } = useTheme();
  const [settingOpen, setSettingOpen] = React.useState(false);
  
  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
  };
  return (
 <>
 </>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false
})
