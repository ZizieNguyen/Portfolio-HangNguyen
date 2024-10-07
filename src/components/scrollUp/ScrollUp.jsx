import { useEffect } from 'react';
import './scrollUp.css'

import { HashLink } from "react-router-hash-link"

export const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 560) {
                scrollUp.classList.add('show-scroll');
            } else {
                scrollUp.classList.remove('show-scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <HashLink to='#' className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </HashLink>
  )
}