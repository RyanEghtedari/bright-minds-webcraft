
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Parent of High School Student",
      content:
        "Bright Minds Tutoring transformed my son's academic experience. His grades improved dramatically, but more importantly, his confidence soared. The tutors really connect with students and make learning engaging.",
      rating: 5,
    },
    {
      name: "Michael Peterson",
      role: "College Student",
      content:
        "I was struggling with advanced calculus and nearly dropped the course. After just a month with my Bright Minds tutor, I not only passed the class but ended up with an A-. Their teaching methods made complex concepts much easier to understand.",
      rating: 5,
    },
    {
      name: "Rebecca Torres",
      role: "Parent of Middle School Student",
      content:
        "My daughter was reluctant to get tutoring at first, but after her first session with Bright Minds, she actually looks forward to it! Her reading comprehension has improved tremendously, and her teacher has noticed the difference too.",
      rating: 5,
    },
    {
      name: "David Chang",
      role: "High School Student",
      content:
        "Preparing for the SAT was stressful until I started working with Bright Minds. My tutor taught me strategies that helped me raise my score by over 200 points. I got into my first-choice college thanks to their help!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-brand-blue text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Students and Parents Say
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Discover how we've helped students achieve academic success and build confidence.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-brand-orange fill-brand-orange" />
            ))}
          </div>

          <blockquote className="text-lg md:text-xl mb-6 text-center italic">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="text-center">
            <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
            <p className="text-blue-200">{testimonials[currentIndex].role}</p>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
