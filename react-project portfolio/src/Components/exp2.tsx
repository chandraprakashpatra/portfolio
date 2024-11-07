import { useRef, useEffect, useState } from 'react';
import './exp2.css'
import erainterfacesLogo from './eralogo.png'; // Add the logo for Eranterfaces


function EranterfacesSection() {
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

        <section className="erainterfaces-section">
        <div className={`erainterfaces-image ${isVisible ? 'active' : ''}`} ref={imageRef}>
            <div className="logocontain">
                <img className="e_logo" src={erainterfacesLogo} alt="Eranterfaces Logo" />
            </div>
            <div className="description">
                <p>" At Era Interfaces, I worked on building a face detection model for AI-powered online exam proctoring. This project focused on enhancing security and fairness in remote assessments, leveraging advanced machine learning techniques to detect faces accurately and reliably. "</p>
            </div>
        </div>
        </section>
    </div>
  );
}

export default EranterfacesSection;
