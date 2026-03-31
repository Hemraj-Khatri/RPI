import { motion } from "framer-motion";
import heroImg from "../assets/her.jpg";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-slate-600"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 via-blue-400/80 to-blue-200/70" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Welcome to RPI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow">
            Learn, grow, and achieve greatness with us
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-raspberry  text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-accent-papaya transition-all duration-300 shadow-lg hover:text-red-600 hover:shadow-xl"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
