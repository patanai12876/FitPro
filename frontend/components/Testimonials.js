export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Member since 2022',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'FitPro Gym has completely transformed my fitness journey. The trainers are knowledgeable and supportive!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Member since 2023',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'The facilities are top-notch and the community here is amazing. Highly recommend to anyone!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mike Brown',
      role: 'Member since 2021',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'Best decision I made for my health. The trainers really know how to push you to your limits.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Member Testimonials</h2>
          <p className="text-gray-600 text-lg">Hear from our satisfied members</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4 text-yellow-400">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
