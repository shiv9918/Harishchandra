import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar as CalendarIcon } from "lucide-react";
import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const ClassCalendar = () => {
  const { data } = useContent('class-calendar');
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const today = new Date();
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 sm:p-3"></div>);
    }

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <div
          key={day}
          className={`
            p-2 sm:p-3 text-center border border-[#913c07]/20 rounded
            flex items-center justify-center
            ${isToday(day)
              ? 'bg-[#913c07] text-white font-bold shadow-md'
              : 'bg-white text-secondary hover:bg-[#fff4dc] transition-colors'
            }
          `}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc]">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-3 sm:mb-4 flex items-center gap-2">
        <CalendarIcon size={28} />
        Class Calendar
      </h2>

      {/* Calendar Widget */}
      <div className="bg-white border border-[#913c07] rounded-lg p-4 sm:p-6 mb-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-[#fff4dc] rounded-full transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={24} className="text-[#913c07]" />
          </button>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#913c07]">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>

          <button
            onClick={nextMonth}
            className="p-2 hover:bg-[#fff4dc] rounded-full transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={24} className="text-[#913c07]" />
          </button>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center font-semibold text-[#913c07] text-xs sm:text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-sm sm:text-base">
          {renderCalendar()}
        </div>

        {/* Today indicator */}
        <div className="mt-4 text-center text-xs sm:text-sm text-secondary font-primary">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 bg-[#913c07] rounded"></span>
            Today: {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* CMS Content */}
      {(data?.content || data?.blocks?.length > 0) && (
        <div className="bg-white border border-[#913c07] rounded-lg p-4 sm:p-6 mb-6">
          <CmsContent content={data.content} blocks={data.blocks} />
        </div>
      )}

      {/* Google Drive Link (Original - only show if no CMS content) */}
      {!(data?.content || data?.blocks?.length > 0) && (
        <div className="bg-white border border-[#913c07] rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-[#913c07] mb-4">
            Class Schedule & Events
          </h3>
          <p className="text-base sm:text-lg text-secondary font-primary mb-4">
            Access the complete class calendar, schedules, and important dates
          </p>

          <a
            href="https://drive.google.com/drive/u/0/folders/0B7Lzs_siOkGZSGRaZ2IwSTgtZWc"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3
              bg-[#913c07] text-white font-primary font-semibold
              rounded-md shadow-md
              hover:bg-[#7a3306] hover:shadow-lg
              transition-all duration-300 ease-out
              transform hover:scale-105
            "
          >
            <span>View Class Calendar on Google Drive</span>
            <ExternalLink size={18} />
          </a>
        </div>
      )}

    </div>
  );
};

export default ClassCalendar;

