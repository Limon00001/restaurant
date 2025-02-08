/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-08
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { motion } from 'motion/react';

// Internal Dependencies
import BannerImage from '../assets/banner.png';
import { SlideUp } from '../utils/animate';

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 15, x: 50, y: -50 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={BannerImage}
              alt=""
              className="w-80 relative z-10 img-shadow cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] w-[320px] h-[320px] bg-[#f2ce72] rounded-full"
            ></motion.div>
          </div>
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={SlideUp(1)}
              initial="initial"
              whileInView="animate"
              className="text-6xl uppercase font-semibold"
            >
              The best food in the town
            </motion.h1>
            <motion.p
              variants={SlideUp(1.3)}
              initial="initial"
              whileInView="animate"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              exercitationem reprehenderit quisquam!
            </motion.p>
            <motion.button
              variants={SlideUp(1.6)}
              initial="initial"
              whileInView="animate"
              className="btn-primary"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
