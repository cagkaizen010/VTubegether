import Swipe from "./swipe.js"
import Buttons from "./button.js"
export default function Frame() {
    return(
        <>
        <div id="scroll-container">
            <h1 align="center">VTubeGether</h1>
            <Swipe/>
            <Buttons style={{flex: 1}}/>
        </div>
        </>
    )
}