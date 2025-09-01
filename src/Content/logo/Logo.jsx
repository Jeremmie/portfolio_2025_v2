import { useEffect, useRef, createScope, useState } from 'react'
import { animate, svg, utils } from 'animejs'

function logo({ points1, points2 }) {
    const path1 = useRef()
    const path2 = useRef()
    useEffect(() => {
        animate(path1.current, {
            points: svg.morphTo(path2.current),
            ease: 'inOutCirc',
            duration: 500,
        });
    })

    return (
        <>
            <svg viewBox="0 0 304 112">
                <g strokeWidth="2" stroke="black" strokeLinejoin="round" fill="black" fillRule="evenodd">
                    <polygon ref={path1} points={points1}></polygon>
                    <polygon style={{ opacity: "0" }} ref={path2} points={points2}></polygon>
                </g>
            </svg>
        </>
    )
}
export default logo