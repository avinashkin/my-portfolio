import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleConfig } from "./commom";

const ParticleBackground = () => {
    const loadParticles = async (main) => {
        console.log('asasa', main);
        await loadFull(main);
    }

    return (
        <Particles
            id="tsparticles"
            className="container"
            init={loadParticles}
            options={particleConfig}
        />
    )
}

export default ParticleBackground;