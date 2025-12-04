import React, { useState } from "react";

const Calendar = () => {
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [bannerEvents, setBannerEvents] = useState(null);

  // ================================
  //  SRIYOG IT COMPANY EVENTS (2025)
  // ================================
  const events = [
    {
      date: new Date(2025, 0, 5),
      title: "Sprint Planning Meeting",
      time: "10:00",
      description: "Team plans upcoming sprint tasks and priorities."
    },
    {
      date: new Date(2025, 0, 15),
      title: "Client Project Demo",
      time: "14:00",
      description: "Demonstration of new features to the client."
    },
    {
      date: new Date(2025, 0, 25),
      title: "Code Review Session",
      time: "11:00",
      description: "Internal code review for quality improvement."
    },
    {
      date: new Date(2025, 1, 7),
      title: "UI/UX Design Discussion",
      time: "09:00",
      description: "Design team discusses new dashboard updates."
    },
    {
      date: new Date(2025, 1, 21),
      title: "Backend Optimization Meetup",
      time: "13:00",
      description: "Developers review API performance and caching."
    },
    {
      date: new Date(2025, 2, 3),
      title: "Server Maintenance",
      time: "12:00",
      description: "Scheduled downtime for system upgrades."
    },
    {
      date: new Date(2025, 2, 18),
      title: "Tech Workshop",
      time: "15:00",
      description: "Advanced workshop on MERN stack."
    },
    {
      date: new Date(2025, 3, 7),
      title: "Security Audit Review",
      time: "14:00",
      description: "Team evaluates security improvements."
    },
    {
      date: new Date(2025, 3, 16),
      title: "Product Strategy Meeting",
      time: "16:00",
      description: "Planning next quarter releases."
    },
    {
      date: new Date(2025, 4, 18),
      title: "Team Building Meetup",
      time: "14:30",
      description: "Fun activities to improve team coordination."
    },
    {
      date: new Date(2025, 5, 3),
      title: "New Feature Deployment",
      time: "09:00",
      description: "Launching new module for Sriyog."
    },
    {
      date: new Date(2025, 6, 10),
      title: "API Testing Session",
      time: "10:00",
      description: "Full testing coverage for REST APIs."
    },
    {
      date: new Date(2025, 7, 5),
      title: "Client Onboarding Webinar",
      time: "14:00",
      description: "Training session for new Sriyog clients."
    },
    {
      date: new Date(2025, 8, 12),
      title: "Database Optimization",
      time: "09:00",
      description: "Improving DB indexing and query performance."
    },
    {
      date: new Date(2025, 9, 8),
      title: "React Performance Workshop",
      time: "12:00",
      description: "Training for frontend performance enhancements."
    },
    {
      date: new Date(2025, 10, 15),
      title: "Annual Tech Meetup",
      time: "09:00",
      description: "Company-wide event with guest speakers."
    },
    {
      date: new Date(2025, 11, 20),
      title: "Year-End Review",
      time: "13:00",
      description: "Summarizing achievements and next-year planning."
    }
  ];

  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else setSelectedMonth(selectedMonth - 1);
    setBannerEvents(null);
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else setSelectedMonth(selectedMonth + 1);
    setBannerEvents(null);
  };

  const handleToday = () => {
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
    setSelectedDate(currentDate);
    setBannerEvents(null);
  };

  const isToday = (day) => {
    return (
      day === currentDate.getDate() &&
      selectedMonth === currentDate.getMonth() &&
      selectedYear === currentDate.getFullYear()
    );
  };

  const handleDayClick = (day) => {
    if (!day) return;
    const dayEvents = events.filter(
      (e) =>
        e.date.getDate() === day &&
        e.date.getMonth() === selectedMonth &&
        e.date.getFullYear() === selectedYear
    );
    setBannerEvents(dayEvents.length > 0 ? dayEvents : null);
  };

  return (
    <div className="h-full bg-gray-50 py-12 px-2 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 md:gap-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {monthNames[selectedMonth]}{" "}
            <span className="text-gray-500">{selectedYear}</span>
          </h2>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
            <button onClick={handlePrevMonth}
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <img src="/icons/chevron-left.svg" className="w-4 h-4" />
            </button>

            <button onClick={handleNextMonth}
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <img src="/icons/chevron-right.svg" className="w-4 h-4" />
            </button>

            <button onClick={handleToday}
              className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium transition">
              Today
            </button>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="appearance-none px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              {monthNames.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* DAYS OF WEEK */}
        <div className="grid grid-cols-7 text-xs md:text-sm font-medium text-gray-600 border-b border-gray-200 mb-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center py-2">
              {day}
            </div>
          ))}
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 text-xs sm:text-sm">
          {days.map((day, index) => {
            const dayHasEvents = events.some(
              (e) =>
                e.date.getDate() === day &&
                e.date.getMonth() === selectedMonth &&
                e.date.getFullYear() === selectedYear
            );

            return (
              <div
                key={index}
                onClick={() => handleDayClick(day)}
                className={`min-h-[70px] sm:min-h-[100px] p-1 sm:p-2 flex flex-col border border-gray-100 relative 
                ${day === null ? "bg-gray-50" : "bg-white cursor-pointer"} 
                ${isToday(day) ? "bg-blue-50 border-blue-300" : ""}
              `}
              >
                {day && (
                  <>
                    <div
                      className={`self-center flex items-center justify-center ${
                        isToday(day)
                          ? "w-7 h-7 rounded-full bg-blue-500 text-white font-bold text-sm mt-1"
                          : "text-[10px] sm:text-xs text-gray-500"
                      }`}
                    >
                      {day}
                    </div>

                    {dayHasEvents && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* EVENT BANNER */}
      {bannerEvents && (
        <div className="fixed md:absolute bottom-0 md:top-10 left-0 md:left-0 z-50 w-full md:w-80 max-h-[60vh] md:max-h-none overflow-y-auto p-4 bg-white border border-gray-200 rounded-t-lg md:rounded-md shadow-lg transition-all">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base md:text-lg font-semibold">
              Event Details
            </h3>

            <button onClick={() => setBannerEvents(null)}>
              <img src="/icons/cross.svg" className="w-4 h-4" />
            </button>
          </div>

          {bannerEvents.map((event, index) => (
            <div key={index} className="mb-3 p-2 border-b border-gray-100">
              <p className="font-medium text-sm md:text-base">
                {event.time} · {event.title}
              </p>
              <p className="text-[12px] md:text-sm text-gray-600">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
