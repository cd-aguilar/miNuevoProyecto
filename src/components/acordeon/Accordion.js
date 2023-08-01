import React, { useState } from 'react';
import section4Image from '../img/section4-image.png';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <section className="home4">
        <img src={section4Image} className="img4" />
        <div className="container11">
          <div className="acordeon">
            <div className={`bloque ${activeIndex === 0 ? 'active' : ''}`}>
              <h2 className="h2" onClick={() => toggleAccordion(0)}>
              Sed ut perspiciatis
              </h2>
              {activeIndex === 0 && <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>}
            </div>
            <div className={`bloque ${activeIndex === 1 ? 'active' : ''}`}>
              <h2 className="h2" onClick={() => toggleAccordion(1)}>
              Sed ut perspiciatis2
              </h2>
              {activeIndex === 1 && <p className="contenido">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>}
            </div>
            <div className={`bloque ${activeIndex === 2 ? 'active' : ''}`}>
              <h2 className="h2" onClick={() => toggleAccordion(2)}>
              Sed ut perspiciatis3
              </h2>
              {activeIndex === 2 && <p className="contenido">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordion;
