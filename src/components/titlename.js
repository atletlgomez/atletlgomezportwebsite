import { Link } from "react-router-dom"
import { useState } from "react";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import DownloadButton from "./downloadbutton";

export default function TitleName () {

    const [state, toggle] = useState(true)
    const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 100 }
    })

    return (
        <div>
    <div id="nameAndIntro">
      <h4 className="focus"><Link to="/">ATLETL GOMEZ VARGAS </Link>
      <div id="clickbutton" onClick={() => toggle(!state)}>
      <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}>
       <DownloadButton></DownloadButton>
      </animated.div>
    </div></h4>
    </div>

        </div>
    )
}