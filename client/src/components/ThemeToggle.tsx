import { useEffect, useState } from "react";

function ThemeToggle () {
  
const [isDark, setIsDark] = useState(
  () => localStorage.getItem("theme") === "dark"
);
    useEffect(()=>{
        document.documentElement.classList.toggle("dark",isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    },[isDark])
    return (
        <button className="cursor-pointer" onClick={()=>setIsDark(!isDark)}>
            {isDark? "Svijetla tema" : "Tamna tema"}
        </button>
    );
}

export default ThemeToggle;