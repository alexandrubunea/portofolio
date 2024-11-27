import './Terminal.css';
import React from 'react';
import Typed from 'typed.js';

function Terminal() {
    const type_anim_element = React.useRef(null);

    React.useEffect(() => {
        if (type_anim_element.current) {
            const typed = new Typed(type_anim_element.current, {
                strings: ['Test first sentence', '_ test second sentence'],
                typeSpeed: 50,
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <div className="bg-blue-900 rounded-3xl w-[20em] h-[20em] md:h-[30em] xl:w-[40em] xl:h-[30em] 2xl:w-[70em] 2xl:h-[40em]
        p-5 text-zinc-100">
            <div className="leading-none mb-5 hidden 2xl:inline-block">
                ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
                ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
                ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
                ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
                ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
                ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
            </div>
            <div className="font-bold mb-5">~ Probably is your first time around here! If you want to learn more about me try to push those buttons :P</div>
            <div className="lowercase font-extrabold">visitor@terminal: <span className="blink-cursor text-xl font-black">|</span></div>
        </div>
    );
}

export default Terminal;
