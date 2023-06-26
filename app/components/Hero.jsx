"use client"

import React from 'react';

import createGlobe from 'cobe';
import { useRef, useEffect } from 'react';

export default function Hero() {
    const canvasRef = useRef();

    useEffect(() => {
      let phi = 0;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 860 * 2,
        height: 860 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [1.74, 1.89, 0],
        glowColor: [0.174, 0.189, 0],
        markers: [
          { location: [41.038284, 28.970329], size: 0.05 }
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        }
      });
  
      return () => {
        globe.destroy();
      };
    }, []);

    return (
        <div className="hero-container flex justify-center">
            <div className="hero-inner mt-[64px] w-full">
            <div className="svg-world-container relative overflow-hidden w-full">
                <div className="available bg-[#3B604D]/[.35] w-fit py-2 px-4 rounded-3xl absolute left-1/2 top-[10%] translate-x-[-50%]">
                    <div className="available-inner flex row items-center gap-2">
                        <div className="online-dot-container">
                            <div className="online-dot rounded w-1.5 h-1.5 bg-[#69FF97]"></div>
                        </div>
                        <div className="available-text text-[#69FF97]">Available for new projects</div>
                    </div>
                </div>
                <svg viewBox="0 0 1063 815" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M1059.05 814.111L3.50418 814.092C-2.83803 779.044 -0.0296898 745.196 11.9292 712.549C18.703 694.049 30.6931 675.962 38.5552 656.824C60.828 602.638 57.2441 542.823 29.9801 491.02C21.1485 474.234 16.7265 465.835 16.714 465.822C-34.8868 350.095 38.4614 218.963 161.665 197.668C180.654 194.385 201.614 196.355 221.391 193.39C275.293 185.285 318.475 159.88 350.937 117.177C353.339 114.012 358.155 106.482 365.385 94.5867C435.318 -20.39 597.251 -33.749 682.177 72.4282C692.891 85.8059 704.206 107.683 713.963 119.766C752.842 167.911 803.023 193.046 864.506 195.173C879.967 195.698 887.723 195.961 887.773 195.961C967.614 202.809 1034.66 260.072 1055.88 337.111C1068.16 381.641 1064.55 425.564 1045.05 468.88C1040.51 478.975 1031.64 493.234 1026.81 504.266C1005.84 552.223 1004.37 601.406 1022.42 651.815C1028.22 667.988 1041.39 688.983 1047.34 702.605C1062.79 738.004 1066.69 775.172 1059.05 814.111Z" fill="#18221D"/>
                    <path d="M38.9888 301.696H116.173C117.133 306.496 120.973 310.72 137.677 310.72C154.573 310.72 157.453 307.648 157.453 304.768C157.453 302.08 155.149 299.2 132.301 297.856C56.2688 294.208 41.2928 279.04 41.2928 254.272C41.2928 229.696 62.9888 208 133.069 208C203.341 208 228.109 233.344 230.029 261.952H153.229C152.077 257.344 148.237 253.12 133.261 253.12C117.901 253.12 114.829 256 114.829 258.88C114.829 261.952 117.325 264.448 139.981 266.176C218.893 270.016 233.485 284.608 233.485 309.568C233.485 333.76 211.405 355.84 137.869 355.84C63.9488 355.84 40.5248 332.032 38.9888 301.696ZM422.246 352H262.886V211.84H421.094V255.808H332.966V266.944H418.406V296.32H332.966V307.648H422.246V352ZM619.889 260.992L549.425 300.544H620.273V352H452.657V302.848L523.697 263.296H453.809V211.84H619.889V260.992ZM811.834 352H652.474V211.84H810.682V255.808H722.554V266.944H807.994V296.32H722.554V307.648H811.834V352ZM1021 328.384V334.528C1021 343.744 1022.15 347.776 1025.99 352H948.421C944.965 348.544 942.661 343.552 942.661 334.528V320.32C942.661 313.408 940.549 311.296 934.405 311.296H914.821V352H844.549V211.84H950.725C1005.44 211.84 1024.45 230.464 1024.45 254.656C1024.45 279.04 1004.1 289.6 983.365 292.864V293.248C1011.01 295.744 1021 304.96 1021 328.384ZM914.821 274.816H940.549C949.189 274.816 952.069 271.936 952.069 267.328C952.069 262.528 949.189 259.84 940.549 259.84H914.821V274.816Z" fill="#AEBD00"/>
                </svg>
                <canvas
                    ref={canvasRef}
                    style={{ width: 860, height: 860, maxWidth: "100%", aspectRatio: 1 }}
                    className='absolute left-[50%] bottom-[-48%] translate-x-[-50%]'
                />
            </div>
            </div>
        </div>
    )
}
