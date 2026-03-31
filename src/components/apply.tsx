import { motion } from "framer-motion";
import { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    position: "",
    cover: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add API submission here
  };

  return (
    <section
      id="apply"
      className="relative flex items-center justify-center min-h-screen bg-blue-50 px-4"
    >
      <div className="w-full max-w-Xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-center text-gray-800"
        >
          Apply Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 text-gray-600"
        >
          Fill out the form below and start your journey with Rolpa Polytechnic
          Institute
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Position */}
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Course</option>
            <option value="developer">Diploma in Information Technology</option>
            <option value="designer">Animal Science</option>
            <option value="manager">Agriculture Science</option>
            <option value="intern">Pre-Diploma in IT</option>
          </select>

          {/* Cover Letter */}
          <textarea
            name="cover"
            placeholder="Cover Letter"
            value={formData.cover}
            onChange={handleChange}
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Submit Application
          </motion.button>
        </form>
      </div>
    </section>
  );
}
