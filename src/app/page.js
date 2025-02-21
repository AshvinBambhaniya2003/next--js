import Navbar from "@/components/Navabar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-600">
            This is a sample home page. You can customize this content according to your needs.
          </p>
        </div>
      </div>
    </main>
  );
}
