// GlobalStyles.js
import React from 'react';

const GlobalStyles = () => (
  <style>{`
    html, body {
      overflow-x: hidden !important;
      width: 100%;
    }
    * {
      box-sizing: border-box;
      max-width: 100vw;
    }

    /* Only apply for normal laptop screens (1024px–1439px) */
    @media (min-width: 1024px) and (max-width: 1439px) {
      header .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      header .logo-section {
        margin-left: 0;
        text-align: left;
      }

      header .nav-section {
        margin-right: 0;
        text-align: right;
      }
    }
  `}</style>
);

export default GlobalStyles;