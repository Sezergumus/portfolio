import React from 'react'
import Image from 'next/image'
import collect from '../../public/collect.png'
import yanindayim from '../../public/yanindayim.png'
import sphere from '../../public/sphere.png'
import celebchat from '../../public/celebchat.png'
import scribble from '../../public/scribble.png'
import qr from '../../public/qr.png'
import { Archivo_Black } from 'next/font/google';

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})


export default function Projects() {
  return (
    <div className="projects-container mt-[128px]" id="crafts">
        <h1 className={`${archivo.className} title text-yellow text-[64px] mb-32px`}>Crafts</h1>
        <p className="mb-[32px] text-[24px]">Great projects are like puzzle pieces they connect together. 🧩</p>

        {/* 6 projects 2 columns */}
        <div className="projects-content grid grid-cols-2 gap-4">
            {/* Collect */}
            <div className="project-item border-solid border-8 border-[#0A0A0A] rounded-lg shadow-inner">
                <a href="https://www.collect.com.tr" target='_blank' className="project-item-inner bg-[#090707] h-full">
                    <div className="project-image">
                        <Image src={collect} alt="collect" className="p-8" />
                    </div>
                    <div className="project-name-date flex justify-between items-center">
                        <h1 className="text-[16px] pl-4 pb-2 text-white">Collect</h1>
                        <p className="text-[16px] pr-4 pb-2 text-white">Jan, 2023</p>
                    </div>
                </a>
            </div>
            {/* Yanındayım */}
            <div className="project-item border-solid border-8 border-[#0A0A0A] rounded-lg shadow-inner">
                <a href="https://www.yanindayim.co" target='_blank' className="project-item-inner bg-[#5734A8]">
                    <div className="project-image">
                        <Image src={yanindayim} alt="yanindayim" className="p-8" />
                    </div>
                    <div className="project-name-date flex justify-between items-center">
                        <h1 className="text-[16px] pl-4 pb-2 text-white">Yanındayım</h1>
                        <p className="text-[16px] pr-4 pb-2 text-white">Apr, 2023</p>
                    </div>
                </a>
            </div>
            {/* Sphere */}
            <div className="project-item border-solid border-8 border-[#0A0A0A] rounded-lg shadow-inner">
                <a href="https://threejs-sphere.sezergumus.dev" target='_blank' className="project-item-inner bg-[#060606]">
                    <div className="project-image">
                        <Image src={sphere} alt="sphere" className="p-8" />
                    </div>
                    <div className="project-name-date flex justify-between items-center">
                        <h1 className="text-[16px] pl-4 pb-2 text-white">Sphere</h1>
                        <p className="text-[16px] pr-4 pb-2 text-white">May, 2023</p>
                    </div>
                </a>
            </div>
            {/* Celebchat */}
            <div className="project-item border-solid border-8 border-[#0A0A0A] rounded-lg shadow-inner">
                <a href="https://celebchat.sezergumus.dev" target='_blank' className="project-item-inner bg-[#3A57FF]">
                    <div className="project-image">
                        <Image src={celebchat} alt="celebchat" className="p-8" />
                    </div>
                    <div className="project-name-date flex justify-between items-center">
                        <h1 className="text-[16px] pl-4 pb-2 text-white">Celebchat</h1>
                        <p className="text-[16px] pr-4 pb-2 text-white">Feb, 2023</p>
                    </div>
                </a>
            </div>
            {/* Scribble */}
            <div className="project-item border-solid border-8 border-[#0A0A0A] rounded-lg shadow-inner">
                <a href="https://scribble.sezergumus.dev/" target='_blank' className="project-item-inner bg-[#002BFF]">
                    <div className="project-image">
                        <Image src={scribble} alt="scribble" className="p-8" />
                    </div>
                    <div className="project-name-date flex justify-between items-center">
                        <h1 className="text-[16px] pl-4 pb-2 text-white">Scribble It!</h1>
                        <p className="text-[16px] pr-4 pb-2 text-white">Jan, 2022</p>
                    </div>
                </a>
            </div>
            {/* QR Code */}
            <div className="project-item border-solid border-8 border-[#0A0A0A] rounded-lg shadow-inner">
                <a href="https://qr.sezergumus.dev/" target='_blank' className="project-item-inner bg-[#002BFF]">
                    <div className="project-image">
                        <Image src={qr} alt="qr" className="p-8" />
                    </div>
                    <div className="project-name-date flex justify-between items-center">
                        <h1 className="text-[16px] pl-4 pb-2 text-white">QR Generator</h1>
                        <p className="text-[16px] pr-4 pb-2 text-white">Dec, 2021</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
