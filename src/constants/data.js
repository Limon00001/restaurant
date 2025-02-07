/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-05
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Dependencies
import FoodItem3 from '../assets/banner.png';
import FoodItem1 from '../assets/food.png';
import FoodItem2 from '../assets/food2-plate.png';

const NavbarItems = [
  {
    id: crypto.randomUUID(),
    name: 'Home',
    link: '/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Categories',
    link: '/categories',
  },
  {
    id: crypto.randomUUID(),
    name: 'Blog',
    link: '/blog',
  },
  {
    id: crypto.randomUUID(),
    name: 'Contact',
    link: '/contact',
  },
];

const HotDessertData = [
  {
    id: crypto.randomUUID(),
    name: 'Angel Cake',
    img: FoodItem1,
    price: '$5.00',
    delay: 1.2,
  },
  {
    id: crypto.randomUUID(),
    name: 'Apple Cake',
    img: FoodItem2,
    price: '$7.00',
    delay: 0.8,
  },
  {
    id: crypto.randomUUID(),
    name: 'Mocha Fudge',
    img: FoodItem3,
    price: '$9.00',
    delay: 1.5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Eclairs Cake',
    img: FoodItem3,
    price: '$9.00',
    delay: 1.5,
  },
];

// Export
export { HotDessertData, NavbarItems };
