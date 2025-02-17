export default function FeatureCard({ title, description, image, customStyles }) {
    return (
      <div
        className={`relative bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-left flex items-end border-gray-300 dark:border-gray-600`}
        style={{ ...customStyles, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
  
        {/* Content */}
        <div className="relative z-10 text-white p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    );
  }
  