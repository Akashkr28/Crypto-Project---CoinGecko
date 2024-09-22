import React, { useState, useEffect } from "react";

function ThemeSwapBtn() {

    let [checked, setChecked] = useState(false);

    useEffect(() => {
        const htmlEle = document.getElementsByTagName("html");
        if (checked) {
            htmlEle[0].setAttribute("data-theme", "light");
        } else {
            htmlEle[0].setAttribute("data-theme", "forest");
        }
    }, [checked]);

    return (
        <label className="swap swap-flip text-2xl btn btn-ghost btn-circle">

            <input type="checkbox" onClick={(e) => setChecked(e.target.checked)} />

            <div className="swap-on">☀️</div> 
            <div className="swap-off">🌙</div>
        </label>
    );
}

export default ThemeSwapBtn;