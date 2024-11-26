import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Akshra Portfolio</h1>
            <p className="text-lg mb-6">
              Discover my creative world 
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

          {/* 3D Spline Scene */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Spline scene="https://prod.spline.design/tSS4s3Zy839eX2DE/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}
