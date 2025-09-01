import { Text3D } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { animate, createSpring, eases } from "animejs"
import { useFrame } from "@react-three/fiber"


function Numa() {

    const numa3D = useRef()
    const rotationClick = useRef(0)
    const [rotate, setRotate] = useState(false)
    console.log(rotate);


    function idle() {
        animate(numa3D.current.rotation, {
            x: [
                { to: -1, ease: 'out', duration: 500 },
                { to: 1, ease: "inOut(3)", duration: 500 },
                { to: 0, ease: 'in', duration: 500 },
            ],
            loop: true,

        })
    }

    useEffect(() => {
        idle()
    }, [])

    function sendAnim() {
        if (!rotate) {
            animate(numa3D.current.rotation, {
                x: [
                    { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    { to: 1, ease: createSpring({ stiffness: 300 }) }
                ],
                y: [
                    { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    { to: 1, ease: createSpring({ stiffness: 300 }) }]

            })
            setRotate(true)
        } else {
            animate(numa3D.current.rotation, {
                x: [
                    { to: 1, ease: 'inOut(1)', duration: 0 },
                    { to: 0, ease: createSpring({ stiffness: 300 }) }
                ],
                y: [
                    { to: 1, ease: 'inOut(1)', duration: 0 },
                    { to: 0, ease: createSpring({ stiffness: 300 }) }]

            })
            setRotate(false)
        }
    }

    return (
        <group ref={numa3D} position={[4, 0, 0]} onClick={sendAnim}>
            <Text3D position={[-2, -0.5, 0]} font="./Roboto_Regular.json">
                NUMA
                <meshStandardMaterial color="red" />
            </Text3D>
        </group>
    )
}


export default Numa
