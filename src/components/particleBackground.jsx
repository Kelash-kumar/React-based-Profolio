// import  Particles  from 'react-particles';
import Particles from 'particles.js';
import particleConfig from "./config/config";

const ParticleBackground = () => {
  return (
    <Particles params={particleConfig} />
  );
};

export default ParticleBackground;
