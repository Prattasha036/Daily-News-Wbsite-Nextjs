import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our News Portal
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay informed with real-time updates, breaking headlines, and in-depth
          coverage from around the world—all in one place.
        </p>
      </div>

      {/* Image + Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
          alt="News room"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg w-full h-75 object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We are a modern digital news platform delivering accurate, fast, and
            engaging news content across multiple categories including business,
            sports, technology, and health.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our mission is to keep our audience informed with reliable
            information while maintaining simplicity and accessibility.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 border rounded-xl shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast Updates</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get breaking news instantly with real-time updates.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">🔍 Smart Search</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Easily find news by category or keyword.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">🌍 Global Coverage</h3>
          <p className="text-gray-600 dark:text-gray-400">
            News from around the world in one place.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="text-center bg-gray-100 dark:bg-gray-800 p-10 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our goal is to create a trusted platform where users can explore news
          effortlessly, stay updated, and gain knowledge without unnecessary
          complexity.
        </p>
      </div>
    </div>
  );
}
