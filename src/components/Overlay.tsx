import styled, { keyframes } from 'styled-components';
import React from 'react';

// inline fadeOut keyframes
// const fadeOut = keyframes`
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `;

// export const Overlayyy = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: white;
//   z-index: 9999;
//   animation: ${fadeOut} 2s ease-in 0.4s forwards;
// `;

export const Overlay = () => (
    <>
        <style>
            {`
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 9999;
            animation: fadeOut 2s ease-in 0.4s forwards;
        }
        @keyframes fadeOut {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
        `}
        </style>
        <div id="overlay" />
    </>
);