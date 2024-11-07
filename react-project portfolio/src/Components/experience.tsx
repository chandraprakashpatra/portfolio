
import {LinearGradient as Lg} from 'react-text-gradients'
// import './experience.css'
// function experience(){

//     return (
//         <div>
//            
//             {/* here is the sliding part */}

//         </div>
//     )
// }
// export default experience;

import { useRef, useEffect, useState } from 'react';
import './experience.css'
import ntnx from './ntnx.png'


function NutanixSection() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div>
        <h1 className="header">
            <Lg className="exp" gradient={["to left","#eb3f3f, #5e56fb"]}>Experiences </Lg> 
        </h1>
        <section className="nutanix-section">
        <div className={`nutanix-image ${isVisible ? 'active' : ''}`} ref={imageRef}>
            <div className="logocontain">
            <img className="n_logo" src={ntnx} alt="Nutanix Logo" />
            </div>
            <div className="description">
            {/* <h2>My Work at Nutanix</h2> */}
            <p>At Nutanix, I contributed to UberTower, a key project I helped manage and develop. My role involved overseeing complex tasks and actively participating in the project’s growth. I honed my skills in troubleshooting and problem-solving within data center environments and deployments, gaining valuable experience in real-world systems and applications.</p>
            </div>
        </div>
        </section>
        
    </div>
  );
}

export default NutanixSection;

