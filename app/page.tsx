import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/LDwXwJdMmgSKHrSP/scene.splinecode" />
      </div>

      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black/60 to-black/80 text-white text-center p-6 pt-20">
        <div>
          <h1 className="text-5xl font-bold mb-6">Akshra Portfolio</h1>
          <p className="text-lg mb-8">
            Experience creativity through interactive .
          </p>
          <a
            href="https://www.instagram.com/akshra1582/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 hover:text-white transition"
          >
            Visit My Instagram
          </a>
        </div>
      </div>
    </div>
  );
}