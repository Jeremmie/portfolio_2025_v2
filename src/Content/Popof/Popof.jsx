import { Html } from "@react-three/drei"
import "./Popof.css"
import { useEffect, useRef } from "react";

function Popof() {



    return (<>
        <Html>
            <div className="Popof_container">
                <div className="Popof_container_2">
                    <iframe className="Popof_video_embbed_big" src="https://player.vimeo.com/video/1115404697?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                    <div className="Popof_container_5">
                        <h1>Popof ?</h1>
                        <p>Project made in three month for my diploma project.</p>
                    </div>
                    <div className="Popof_container_3">
                        <iframe draggable="false" id="Popof_video_embbed_small_start" className="Popof_video_embbed_small" src="https://player.vimeo.com/video/1115222586?badge=0&autoplay=1&loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                        <iframe draggable="false" className="Popof_video_embbed_small" src="https://player.vimeo.com/video/1115225051?badge=0&autoplay=1&loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                        <iframe draggable="false" id="Popof_video_embbed_small_end" className="Popof_video_embbed_small" src="https://player.vimeo.com/video/1115225099?badge=0&autoplay=1&loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                </div>
            </div>
        </Html >
    </>)
}
export default Popof