import { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

  return (
    <section id="hero">
        <div className="">
            <h1>
                MacBook Pro
            </h1>
            <img src="/title.png" alt="MacBook title" />

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
            <button>Comprar</button>
            <p>De R$20.999 por 12x de R$1.749,92</p>
        </div>
    </section>
  )
}

export default Hero