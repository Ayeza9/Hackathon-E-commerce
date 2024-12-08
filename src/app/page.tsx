import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center bg-light-gray py-6 px-4 text-center">
        <h2 className="text-2xl font-bold">Hello Nike App</h2>
        <p className="mt-2 text-gray-700">
          Download the app to access everything Nike.{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Main Section */}
      <section className="px-4 md:px-10 mt-6">
        {/* Banner Image */}
        <div className="w-full">
          <Image
            src="/images/nike-banner.png"
            alt="Nike Air Max Pulse"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority // Ensures optimized loading for above-the-fold images
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center mt-8 text-center">
          <h3 className="text-lg text-gray-600">First Look</h3>
          <h2 className="text-3xl md:text-5xl uppercase font-bold mt-2">
            Nike Air Max Pulse
          </h2>
          <p className="w-full md:w-3/4 lg:w-1/2 text-gray-700 mt-4">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push you past your limits and help you go to the
            max.
          </p>
        </div>
      </section>
    </>
  );
}
