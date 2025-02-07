/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-07
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { motion } from 'motion/react';

// Internal Dependencies
import { HotDessertData } from '../constants/data';
import { SlideUp } from '../utils/animate';

const HotDessert = () => {
  return (
    <section>
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <motion.h3
          variants={SlideUp(0)}
          initial="initial"
          whileInView="animate"
          className="text-2xl font-semibold text-green-700 uppercase py-8"
        >
          Hot Dessert
        </motion.h3>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {HotDessertData.map((item) => (
            <motion.div
              variants={SlideUp(item.delay)}
              initial="initial"
              whileInView="animate"
              key={item.id}
              className="group bg-white/50 shadow-md p-3 flex items-center gap-3 rounded-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-xl text-yellow-500">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
