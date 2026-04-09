import { useState, useEffect } from "react";

const ProfileSidebar = () => {
  const [slideClass, setSlideClass] = useState("-translate-x-full");

  useEffect(() => {
    const timer = setTimeout(() => setSlideClass("translate-x-0"), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="w-full lg:w-1/4 mb-6 lg:mb-0">

      {/* Profile Image */}
      <div className="p-1 sm:p-2 overflow-hidden">
        <img
          src="/profile.jpeg"
          alt="Dr. Harish Chandra"
          className={`w-full aspect-square object-cover shadow-secondary transition duration-300 z-10 shadow-lg sm:shadow-xl rounded-lg sm:rounded-xl ${slideClass}`}
        />
      </div>

      {/* Office Hours */}
      <div className="mt-3 sm:mt-4 text-center bg-bgColorDark/30 p-3 sm:p-4 rounded-lg">
        <h3 className="font-semibold text-base sm:text-lg text-[#913c07] font-secondary mb-2">
          Office Hours
        </h3>
        <div className="text-secondary text-xs sm:text-sm font-primary leading-relaxed space-y-3">
          <div className="flex flex-col items-center">
            <div className="font-medium mb-1">Monday to Friday</div>
            <div style={{ fontFamily: 'Times New Roman, serif' }} className="tracking-wide">9:30 AM to 5:00 PM</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium mb-1">Saturday</div>
            <div style={{ fontFamily: 'Times New Roman, serif' }} className="tracking-wide">9:30 AM to 1:00 PM</div>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default ProfileSidebar;


