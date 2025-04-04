
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const tutors = [
    {
      name: "Shry",
      education: "Computer Science at San Jose State University",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=387",
      subjects: "Computer Science, Math, Programming"
    },
    {
      name: "Adi",
      education: "Mathematics at UC San Diego",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480",
      subjects: "Mathematics, Calculus, Statistics"
    },
    {
      name: "Ryan",
      education: "Computer Science at UC Santa Barbara",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1480",
      subjects: "Programming, Web Development, Python"
    },
    {
      name: "Aneesh",
      education: "Biology at UC Berkeley",
      image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?auto=format&fit=crop&q=80&w=1480",
      subjects: "Biology, Chemistry, Life Sciences"
    },
    {
      name: "Aadarsh",
      education: "Computer Science at UCLA",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1480",
      subjects: "Computer Science, Programming, Math"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
          <div className="container-padding max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Bright Minds Tutoring</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              A team of passionate educators committed to helping students achieve their academic goals
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Bright Minds Tutoring, we aren't a major corporation with a one-size-fits-all approach. 
              We're a dedicated team of passionate educators who believe in personalized learning experiences 
              tailored to each student's unique needs and learning style. Our tutors are current students 
              or recent graduates from top universities who relate to the challenges students face and know 
              how to overcome them.
            </p>
            <p className="text-lg text-gray-700">
              We focus on building confidence, developing critical thinking skills, and fostering a 
              genuine love of learning that extends far beyond the classroom. Our tailored approach 
              means we meet students where they are and help them reach their full potential through 
              encouragement, expertise, and dedication.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-padding max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose Bright Minds?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2">Expert Tutors</h3>
                  <p className="text-gray-600">
                    Our tutors are pursuing degrees at top universities and are experts in their subject areas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 mx-auto text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                  <p className="text-gray-600">
                    We create customized learning plans based on each student's unique needs and goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 mx-auto text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    We offer online and in-person sessions with timing that works for your busy schedule.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2">Local Focus</h3>
                  <p className="text-gray-600">
                    We're based in San Diego and understand the local school systems and curriculum.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tutors.map((tutor, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={tutor.image} 
                    alt={`Tutor ${tutor.name}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{tutor.name}</h3>
                  <p className="text-brand-blue font-medium mb-3">{tutor.education}</p>
                  <p className="text-gray-600">Specializes in: {tutor.subjects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-brand-orange/10 py-16">
          <div className="container-padding max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to empower students to reach their full academic potential through 
              individualized support, building confidence, and fostering a genuine love for learning. 
              We believe that every student deserves access to high-quality education support that 
              addresses their specific needs and learning style.
            </p>
            <p className="text-lg text-gray-700">
              We're not just tutors—we're mentors who are invested in the long-term success of our 
              students, both in and out of the classroom. We measure our success not just by improved 
              grades, but by the growth in confidence and independence we see in our students.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
