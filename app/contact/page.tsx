import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
          alt="Contact"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg w-full h-75 object-cover"
        />

        {/* Form */}
        <form className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Info Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">📍 Address</h3>
          <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">📧 Email</h3>
          <p className="text-gray-600 dark:text-gray-400">
            support@newsportal.com
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">📞 Phone</h3>
          <p className="text-gray-600 dark:text-gray-400">+880 1234 567 890</p>
        </div>
      </div>
    </div>
  );
}
