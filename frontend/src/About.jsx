import { motion } from "framer-motion";

const teamMembers = [
  { name: "Amit Sharma", role: "Founder", img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg" },
  { name: "Neha Gupta", role: "Designer", img: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { name: "Rahul Verma", role: "Developer", img: "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Priya Singh", role: "Marketing Head", img: "https://images.pexels.com/photos/3954441/pexels-photo-3954441.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];

export default function About() {
  return (
    <motion.div 
      className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.h1 
        className="text-4xl font-bold text-black mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {/* Description */}
      <motion.p 
        className="text-lg text-black max-w-3xl text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Welcome to our brand! We are a team of passionate individuals dedicated to delivering high-quality products and services. Our goal is to bring creativity and innovation into everything we do.
      </motion.p>

      {/* Image Section */}
      <motion.img 
        src="https://images.pexels.com/photos/5698848/pexels-photo-5698848.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        alt="About Us" 
        className="mt-8 rounded-lg shadow-lg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />

      {/* Team Section */}
      <motion.h2 
        className="text-3xl font-bold text-blue-600 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Meet Our Team
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-4 gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.img} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.button 
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}
