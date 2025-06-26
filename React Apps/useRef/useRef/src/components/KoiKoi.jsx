import React, { useState, useRef } from 'react'

const KoiKoi = () => {
    let [play, setPlay] = useState(false);
    let videoRef = useRef();

    let handlePlay = () => {
        setPlay(!play)
        if (play) {
            videoRef.current.pause();
        } else {
            videoRef.currentPlay();
        }
    }

    return (
        <div>
            <video src="" ref={videoRef} height={300} width={400}></video>
            <button onClick={handlePlay}>{play ? "pause" : "play"}</button>
        </div>
    )

}

export default KoiKoi;