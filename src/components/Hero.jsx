/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-06
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { motion } from 'motion/react';
import { BsCartPlus } from 'react-icons/bs';

// Internal Dependencies
import Banana from '../assets/banana2.png';
import Food from '../assets/food.png';
import Leaf from '../assets/leaf.png';
import Spoon from '../assets/spoon.png';
import { SlideUp } from '../utils/animate';

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* Left Content */}
          <div className="space-y-8 !mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold relative uppercase text-outline text-transparent"
            >
              Yummy
              <img
                src={Leaf}
                alt="leaf"
                className="absolute w-[50px] top-0 right-0 md:right-[100px]"
              />
            </motion.h1>
            <motion.h1
              variants={SlideUp(1)}
              initial="initial"
              whileInView="animate"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              Breakfast
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="initial"
              whileInView="animate"
              className="text-sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              debitis culpa expedita.
            </motion.p>
            <motion.button
              variants={SlideUp(2)}
              initial="initial"
              whileInView="animate"
              className="btn-primary inline-block cursor-pointer hover:ring hover:ring-green-700 hover:ring-offset-2"
            >
              <BsCartPlus className="inline mr-2" />
              Order Now
            </motion.button>
          </div>

          {/* Image */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Food}
              alt=""
              className="w-[450px] img-shadow "
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Spoon}
              alt="spoon"
              className="w-[350px] absolute bottom-[-120px] left-16 rotate-[75deg] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Banana}
              alt="banana"
              className="w-[400px] absolute img-shadow top-[-30px] right-[-130px] md:right-[-160px]"
            />
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="w-[2500px] h-[2500px] bg-[#f2ce72] left-[49%] md:left-[60%] top-[-30%] absolute rounded-3xl z-0 rotate-45"></div>
    </section>
  );
};

export default Hero;
