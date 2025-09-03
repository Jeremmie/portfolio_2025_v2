import { Html } from "@react-three/drei"
import "./MarvelousDesigner.css"

function MarvelousDesigner() {

    return (<>
        <Html>
            <div className="MD_container">
                <div className="MD_container_1">
                    <div className="MD_container_2">
                        <div className="MD_container_3">
                            <img src="./render_HD_square.jpg" draggable="false" alt="" />
                            <img src="./render_HD_square1.jpg" draggable="false" alt="" />
                        </div>
                        <img className="MD_container_4" draggable="false" src="./render_HD.jpg" alt="" />
                    </div>
                    <img className="MD_paysage_img" draggable="false" src="./render_HD_paysage.jpg" alt="" />
                </div>
                <div className="MD_container_5">
                    <h1>Cloth Simulation</h1>
                    <p>Made in marvelous designer.</p>
                </div>
            </div>
        </Html>
    </>)
}
export default MarvelousDesigner