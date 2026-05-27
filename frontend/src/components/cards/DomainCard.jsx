import { motion } from "framer-motion";

function DomainCard({ title, description, skills, iconColor, shapeColor }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition overflow-hidden"
    >
      {/* Background Shape */}
      <div
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 ${shapeColor}`}
      ></div>

      {/* Icon Box */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg text-white mb-6 ${iconColor}`}
      >
        {"</>"}
      </div>

      <h3 className="text-xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-6">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
          Key Skills
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default DomainCard;