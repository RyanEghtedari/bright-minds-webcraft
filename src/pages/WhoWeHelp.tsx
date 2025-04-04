
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GraduationCap, Brain, School, BookOpen, Lightbulb, Shapes, PenTool, HeartHandshake } from "lucide-react";

const WhoWeHelp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-16">
          <div className="container-padding max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Who We Help</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              At Bright Minds Tutoring, we're committed to supporting students of all ages, 
              backgrounds, and learning styles on their educational journey.
            </p>
          </div>
        </div>

        {/* Student Categories */}
        <div className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Elementary Students */}
              <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <School className="h-8 w-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold">Elementary Students</h3>
                </div>
                <p className="text-gray-600">
                  We nurture young learners' curiosity and establish strong academic foundations. 
                  Our tutors make learning fun and engaging, helping students develop confidence 
                  in reading, writing, math, and science while fostering a lifelong love of learning.
                </p>
              </div>
              
              {/* Middle School Students */}
              <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold">Middle School Students</h3>
                </div>
                <p className="text-gray-600">
                  As subjects become more complex and academic demands increase, 
                  we help students navigate this crucial transition period. Our tutors 
                  provide support in developing strong study habits, organizational skills, 
                  and deeper subject comprehension across the curriculum.
                </p>
              </div>
              
              {/* High School Students */}
              <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold">High School Students</h3>
                </div>
                <p className="text-gray-600">
                  We support teens tackling advanced coursework, AP/IB programs, and 
                  college preparation. Our tutors help students master challenging subjects, 
                  prepare for standardized tests, and develop the independent learning skills 
                  needed for college success.
                </p>
              </div>
              
              {/* College Students */}
              <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold">College Students</h3>
                </div>
                <p className="text-gray-600">
                  Our support extends to undergraduate and graduate students navigating 
                  complex coursework. We offer specialized tutoring in higher-level math, 
                  science, programming, and writing to help college students excel in their 
                  academic pursuits and prepare for their future careers.
                </p>
              </div>
              
              {/* Students with Learning Differences */}
              <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold">Students with Learning Differences</h3>
                </div>
                <p className="text-gray-600">
                  We embrace diverse learning styles and provide personalized approaches for 
                  students with ADHD, dyslexia, and other learning differences. Our tutors are 
                  trained to adapt teaching methods, provide accommodations, and create supportive 
                  learning environments that help every student succeed.
                </p>
              </div>
              
              {/* Advanced & Gifted Students */}
              <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Shapes className="h-8 w-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold">Advanced & Gifted Students</h3>
                </div>
                <p className="text-gray-600">
                  We challenge high-achieving students who need more enrichment than traditional 
                  classrooms provide. Our tutors offer accelerated learning opportunities, 
                  complex problem-solving challenges, and creative projects that nurture exceptional 
                  abilities and prevent academic boredom.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Challenges */}
        <div className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How We Support Different Learning Needs</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">Academic Challenges We Address</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <PenTool className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Struggling with specific subjects:</span>
                      <p className="text-gray-600 mt-1">
                        Whether it's difficulties with math concepts, science principles, writing skills, 
                        or language acquisition, our tutors identify gaps in understanding and build 
                        knowledge step-by-step.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PenTool className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Test anxiety and preparation:</span>
                      <p className="text-gray-600 mt-1">
                        We teach effective study strategies, time management techniques, and 
                        stress-reduction methods while providing ample practice with personalized feedback.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PenTool className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Organization and executive function:</span>
                      <p className="text-gray-600 mt-1">
                        Our tutors help students develop systems for managing assignments, studying effectively, 
                        and planning long-term projects to build crucial lifelong skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PenTool className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Attention and focus issues:</span>
                      <p className="text-gray-600 mt-1">
                        We employ engaging teaching methods with frequent breaks, varied activities, 
                        and clear goals to help students with attention challenges stay focused and productive.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">Our Personalized Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <HeartHandshake className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Initial assessment:</span>
                      <p className="text-gray-600 mt-1">
                        We begin with a comprehensive evaluation to understand each student's strengths, 
                        challenges, learning style, and specific needs before creating a personalized plan.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <HeartHandshake className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Custom learning plans:</span>
                      <p className="text-gray-600 mt-1">
                        Rather than one-size-fits-all approaches, we develop individualized strategies 
                        and materials tailored to each student's needs, preferences, and goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <HeartHandshake className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Regular progress monitoring:</span>
                      <p className="text-gray-600 mt-1">
                        We continuously track improvement, adjust strategies as needed, and provide 
                        regular updates to parents and students about achievements and next steps.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <HeartHandshake className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Communication with schools:</span>
                      <p className="text-gray-600 mt-1">
                        When appropriate and with permission, we coordinate with teachers and school 
                        support staff to ensure a consistent and collaborative approach to each student's education.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-brand-blue text-white py-16">
          <div className="container-padding max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              No matter where your child is on their educational journey, we're here to help them reach their full potential.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3 rounded-md font-bold transition-colors"
              >
                Get In Touch Today
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeHelp;
