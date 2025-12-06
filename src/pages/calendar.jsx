import React, { useState } from "react";
import { events } from "../data/CalendarEvents";

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
    <div className="h-full  py-12 px-2 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 md:gap-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold ">
            {monthNames[selectedMonth]}{" "}
            <span className="">{selectedYear}</span>
          </h2>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
            <button onClick={handlePrevMonth}
              className="flex items-center justify-center pb-2 px-2 rounded-md border card h-[36px] hover:bg-gray-100 transition">
              <span className="text-4xl">‹</span>
            </button>

            <button onClick={handleNextMonth}
              className="flex items-center justify-center pb-2 px-2 card rounded-md border h-[36px] border-gray-300 hover:bg-gray-100 transition">
              <span className="text-4xl">›</span>
            </button>

            <button onClick={handleToday}
              className="px-3 card py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium transition">
              Today
            </button>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="appearance-none card px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
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
            <div key={day} className="text-center py-2 card">
              {day}
            </div>
          ))}
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-px  border border-gray-200 text-xs sm:text-sm">
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
                className={`min-h-[70px] sm:min-h-[80px] p-1 sm:p-2 flex flex-col border border-gray-100 relative 
                ${day === null ? "border-none" : "calendar cursor-pointer"} 
                ${isToday(day) ? "bg-blue-50 border-blue-300" : ""}
              `}
              >
                {day && (
                  <>
                    <div
                      className={`self-center flex items-center justify-center ${
                        isToday(day)
                          ? " rounded-full bg-blue-500 px-2 py-px text-white font-bold text-xs "
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
        <div className="footer absolute bottom-0 top-0 left-0  z-50 w-64 h-full md:w-80 md:max-h-none overflow-y-auto p-4 bg-white border border-gray-200 rounded-t-lg md:rounded-md shadow-lg transition-all">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base md:text-lg font-semibold">
              Event Details
            </h3>

            <button onClick={() => setBannerEvents(null)}>
              <img src="/icons/cross.svg" className="w-4 h-4" />
            </button>
          </div>

          {bannerEvents.map((event, index) => (
            <div key={index} className="card2 mb-3 p-2 border-b border-gray-100">
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
