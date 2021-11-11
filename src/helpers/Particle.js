import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 380,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: true,
                        opacity: 0.02,
                    },
                    move: {
                        direction: "right",
                        speed: 0.07,
                    },
                    size: {
                        value: 2,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            paricles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;