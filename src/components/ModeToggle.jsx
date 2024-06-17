import React, { useContext } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { themeContext } from './Context';

function ModeToggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({ type: "toggle" });
    };

    return (
        <div className="flex items-center">
            {darkMode ? (
                <IoSunnyOutline className="text-orange-500 cursor-pointer lg:text-2xl" onClick={handleClick} />
            ) : (
                <FaRegMoon className="text-orange-500 cursor-pointer lg:text-2xl" onClick={handleClick} />
            )}
            <div
                className="relative flex items-center border-3 border-orange-500 rounded-lg p-0.5 cursor-pointer"
                onClick={handleClick}
            >
            </div>
        </div>
    )
}

export default ModeToggle
