import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Um chip decolar</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Apresentamos o {" "}
                                <span className="text-white">
                                    M4, a nova geração do chip da Apple Silicon
                                </span>
                                . O M4 impulsiona 
                            </p>
                            <p>
                                a Apple Intelligence no iPad Pro, para você escrever, criar e realizar muito mais com facilidade. Tudo em um design incrivelmente fino, leve e poderoso.
                            </p>
                            <p>
                                Um novo mecanismo de exibição entrega precisão, fidelidade de cor e brilho de encher os olhos. E a GPU de última geração, com traçado de raios acelerado por hardware, traz gráficos de nível de console para a ponta dos seus dedos.
                            </p>
                            <p className="text-primary">Saiba mais sobre a Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Até</p>
                            <h3>4x mais rápido</h3>
                            <p>em desempenho de renderização profissional do que o M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Até</p>
                            <h3>1.5x mais rápido</h3>
                            <p>em desempenho de CPU que o M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase