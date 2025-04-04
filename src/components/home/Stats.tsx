
import { Users, BookOpen, Award, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      value: "2,500+",
      label: "Students Tutored",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-brand-blue" />,
      value: "25+",
      label: "Subject Areas",
    },
    {
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      value: "95%",
      label: "Success Rate",
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-blue" />,
      value: "50,000+",
      label: "Tutoring Hours",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
