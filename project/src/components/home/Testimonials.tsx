import React from 'react';

const testimonials = [
  {
    quote: "Gatherly took care of every detail for our wedding. From the venue to the decorations, everything was perfect. Our guests are still talking about it!",
    author: "Sarah Johnson",
    role: "Bride",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=100",
  },
  {
    quote: "Our company's annual conference was a huge success thanks to Gatherly. The team was professional, responsive, and truly understood our vision.",
    author: "Michael Chen",
    role: "Marketing Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=100",
  },
  {
    quote: "I planned my daughter's sweet sixteen through Gatherly and couldn't be happier. The platform made it so easy to customize everything, and the event was absolutely magical!",
    author: "Lisa Rodriguez",
    role: "Parent",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=100",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in creating memorable experiences for our clients. Here's what they have to say about us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <svg className="h-10 w-10 text-purple-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;