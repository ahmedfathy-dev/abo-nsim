import React from 'react';

// مصفوفة البيانات لمحاكاة الموجود في الصورة
const coursesData = [
  {
    id: 1,
    title: "HTML & CSS",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500",
    videos: 120,
    teachers: 2,
    price: 20,
    views: "1,500",
    badge: "Best Course"
  },
  {
    id: 2,
    title: "Photographer",
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=500",
    videos: 100,
    teachers: 2,
    price: 20,
    views: "1,500",
    badge: "Best Course"
  },
  {
    id: 3,
    title: "JavaScript",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500",
    videos: 120,
    teachers: 2,
    price: 20,
    views: "1,500",
    badge: "Best Course"
  },
  {
    id: 4,
    title: "Desain Grafis",
    image: "ccc.png",
    videos: 100,
    teachers: 2,
    price: 20,
    views: "1,500",
    badge: "Best Course"
  }
];

const CourseSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* شبكة الكروت - Left Side */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
              {/* Image Header */}
              <div className="relative h-55 w-full">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#5D5FEF] text-white text-[13px] font-bold px-4 py-2 rounded-lg">
                  {course.badge}
                </div>
                {/* Price Tag Overlay */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end p-4">
                  <span className="text-white font-bold text-xl">
                    $ {course.price} <span className="text-sm font-normal opacity-90">USD</span>
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-2xl font-extrabold text-[#111827]">{course.title}</h3>
                  <span className="text-[#5D5FEF] text-[13px] font-semibold">{course.views} Views</span>
                </div>
                
                <div className="flex items-center text-gray-400 text-[15px] font-medium gap-6">
                  <span>{course.videos} Videos</span>
                  <span>{course.teachers} Teacher</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الجزء النصي - Right Side */}
        <div className="lg:w-1/3 flex flex-col justify-start pt-4">
          <span className="text-[#5D5FEF] text-sm font-bold tracking-widest uppercase mb-4">
            Available For You
          </span>
          <h2 className="text-5xl font-black text-[#111827] mb-6 leading-tight">
            Available <br /> Courses
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
          </p>
          <button className="bg-[#5D5FEF] hover:bg-[#4a4cdb] text-white font-bold py-4 px-10 rounded-xl w-fit transition-all shadow-lg shadow-indigo-100">
            See all
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseSection;