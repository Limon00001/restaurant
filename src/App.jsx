/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-05
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Dependencies
import Hero from './components/Hero';
import HotDessert from './components/HotDessert';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
    </main>
  );
};

// Export
export default App;
