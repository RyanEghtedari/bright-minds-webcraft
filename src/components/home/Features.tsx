
import { BookOpen, Users, Award, Clock, Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-brand-blue" />,
      title: "Personalized Learning",
      description:
        "Customized learning plans tailored to each student's unique needs, strengths and learning style.",
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: "Expert Tutors",
      description:
        "Highly qualified tutors with advanced degrees and years of teaching experience.",
    },
    {
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      title: "Proven Results",
      description:
        "Our methods have helped thousands of students improve their grades and test scores.",
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-blue" />,
      title: "Flexible Scheduling",
      description:
        "Online and in-person sessions available at times that work for your family.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="text-brand-blue">Bright Minds</span> Tutoring?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our comprehensive approach to education goes beyond traditional tutoring, focusing on building both academic skills and confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-blue"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Academic Advantage</h3>
            <p className="text-gray-600 mb-6">
              At Bright Minds Tutoring, we provide a comprehensive educational experience designed to help students thrive in school and beyond.
            </p>
            <ul className="space-y-3">
              {[
                "Customized learning plans for each student",
                "Regular progress reports and feedback",
                "Study skills and time management coaching",
                "Test preparation for SAT, ACT, and AP exams",
                "College application and essay support",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-brand-orange mr-2 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Student learning" 
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
