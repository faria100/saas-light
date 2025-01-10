import React, { useRef } from 'react';
import productImage from '../assets/product-image.png';
import pyramidImage from '../assets/pyramid.png';
import tubeImage from '../assets/tube.png';
import { motion , useScroll , useTransform} from 'framer-motion';

function Productshowcase() {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end' , 'end start']
  })

  const translateY = useTransform(scrollYProgress , [0,1],[150,-150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container relative mx-auto">
        {/* Text Content */}
        <div className="section-heading text-center">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive Saas website in just minutes with this template.
          </p>
        </div>

        {/* Product Image and Decorative Images */}
        <div className="relative ">
          {/* Product Image */}
          <img
            src={productImage}
            alt="Product Image"
            className="mt-10"
          />

          {/* Pyramid Image */}
          <motion.img
            src={pyramidImage}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY
            }}
          />

          {/* Tube Image */}
          <motion.img
            src={tubeImage}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Productshowcase;
