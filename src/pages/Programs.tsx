
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="section-padding">
          <h1 className="text-4xl font-bold text-center mb-8">Our Programs</h1>
          <p className="text-center text-gray-600">
            Coming soon - Programs page content
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
