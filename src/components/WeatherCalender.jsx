import React, { useState, useEffect } from 'react';

// دالة لحساب الوقت الحالي
const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

// دالة لجلب مواقيت الصلاة
const getPrayerTimes = (city) => {
    const prayerTimes = {
        جدة: { fajr: "5:00 AM", dhuhr: "12:30 PM", asr: "4:15 PM", maghrib: "6:45 PM", isha: "8:00 PM" },
        الرياض: { fajr: "5:10 AM", dhuhr: "12:35 PM", asr: "4:20 PM", maghrib: "6:50 PM", isha: "8:10 PM" },
        مكة: { fajr: "5:00 AM", dhuhr: "12:25 PM", asr: "4:10 PM", maghrib: "6:40 PM", isha: "7:55 PM" },
        الدمام: { fajr: "5:05 AM", dhuhr: "12:40 PM", asr: "4:25 PM", maghrib: "6:55 PM", isha: "8:05 PM" },
        المدينة: { fajr: "5:00 AM", dhuhr: "12:30 PM", asr: "4:10 PM", maghrib: "6:40 PM", isha: "7:50 PM" }
    };
    return prayerTimes[city] || {};
};

// دالة لجلب الأحوال الجوية
const getWeatherForCities = () => {
    return {
        جدة: "25°C, Sunny",
        الرياض: "30°C, Cloudy",
        مكة: "28°C, Clear",
        الدمام: "33°C, Windy",
        المدينة: "24°C, Rainy"
    };
};

const WeatherCalendar = () => {
    const [currentView, setCurrentView] = useState("calendar"); // لعرض التقويم أو الأحوال الجوية أو مواقيت الصلاة
    const [currentTime, setCurrentTime] = useState(getCurrentTime()); // لعرض الوقت الحالي
    const [selectedDate, setSelectedDate] = useState(new Date()); // تاريخ مختار من التقويم
    const [city, setCity] = useState("جدة"); // المدينة الافتراضية
    const [prayerTimes, setPrayerTimes] = useState(getPrayerTimes(city)); // مواقيت الصلاة
    const [weatherData, setWeatherData] = useState(getWeatherForCities()); // الأحوال الجوية

    // تحديث الساعة كل ثانية
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        // تنظيف الـ timer عند مغادرة المكون
        return () => clearInterval(timer);
    }, []);

    // تغيير العرض بناءً على الزر الذي يتم الضغط عليه
    const handleButtonClick = (view) => {
        setCurrentView(view);
    };

    // التعامل مع تغيير التاريخ في التقويم
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // التعامل مع تغيير المدينة للحصول على مواقيت الصلاة
    const handleCityChange = (e) => {
        const newCity = e.target.value;
        setCity(newCity);
        setPrayerTimes(getPrayerTimes(newCity));
    };

    // دالة للحصول على اسم الشهر والسنة الحاليين
    const getMonthYear = () => {
        const months = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        const month = months[selectedDate.getMonth()];
        const year = selectedDate.getFullYear();
        return `${month} ${year}`;
    };

    return (
        <div className="bg-gradient-to-r bg-red-800 text-white p-6 rounded-xl shadow-lg w-full h-full">
            {/* البوكس الخاص بالتقويم ومواقيت الصلاة */}
            <div className="flex-1 bg-gradient-to-r bg-red-800 text-white p-6 rounded-xl shadow-lg">
                <div className="flex gap-6 justify-center mb-6">
                    <button
                        onClick={() => handleButtonClick("calendar")}
                        className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-red-900 transition duration-300"
                    >
                        التقويم
                    </button>
                    <button
                        onClick={() => handleButtonClick("weather")}
                        className="px-4 py-2 border border-white hover:bg-white hover:text-red-900 rounded-lg transition duration-300"
                    >
                        مواقيت الصلاة
                    </button>
                    <button
                        onClick={() => handleButtonClick("weatherForecast")}
                        className="px-4 py-2 border border-white hover:bg-white hover:text-red-900 rounded-lg transition duration-300"
                    >
                        الأحوال الجوية
                    </button>
                </div>

                {/* عرض المحتوى بناءً على الزر */}
                {currentView === "calendar" && (
                    <div>
                        {/* عرض الشهر والسنة */}
                        <div className="text-center text-xl font-bold mb-4">
                            {getMonthYear()}
                        </div>
                        
                        <div className="mb-4">
                            {/* تم تنسيق التقويم على شكل جدول */}
                            <div className="grid grid-cols-7 gap-2 text-center">
                                <div className="font-semibold">الأحد</div>
                                <div className="font-semibold">الاثنين</div>
                                <div className="font-semibold">الثلاثاء</div>
                                <div className="font-semibold">الأربعاء</div>
                                <div className="font-semibold">الخميس</div>
                                <div className="font-semibold">الجمعة</div>
                                <div className="font-semibold">السبت</div>

                                {/* حساب الأيام في التقويم */}
                                {Array.from({ length: 42 }, (_, index) => {
                                    const day = index - new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() + 1;
                                    const isToday = day === new Date().getDate() && selectedDate.getMonth() === new Date().getMonth() && selectedDate.getFullYear() === new Date().getFullYear();
                                    return (
                                        <div
                                            key={index}
                                            className={`p-3 rounded-full cursor-pointer ${isToday ? 'bg-white text-red-900' : ''}`}
                                            onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                                        >
                                            {day > 0 && day <= new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate() ? day : ''}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold">الوقت الحالي</h3>
                            <p className="text-2xl">{currentTime}</p>
                        </div>
                    </div>
                )}

                {currentView === "weather" && (
                    <div>
                        <div className="flex justify-center mb-4">
                            <select
                                onChange={handleCityChange}
                                value={city}
                                className="p-2 bg-gray-800 text-white rounded-lg"
                            >
                                <option value="جدة">جدة</option>
                                <option value="الرياض">الرياض</option>
                                <option value="مكة">مكة</option>
                                <option value="الدمام">الدمام</option>
                                <option value="المدينة">المدينة</option>
                            </select>
                        </div>
                        <table className="min-w-full text-center table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">الصلاة</th>
                                    <th className="px-4 py-2">الوقت</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">الفجر</td>
                                    <td className="px-4 py-2">{prayerTimes.fajr}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">الظهر</td>
                                    <td className="px-4 py-2">{prayerTimes.dhuhr}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">العصر</td>
                                    <td className="px-4 py-2">{prayerTimes.asr}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">المغرب</td>
                                    <td className="px-4 py-2">{prayerTimes.maghrib}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">العشاء</td>
                                    <td className="px-4 py-2">{prayerTimes.isha}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {currentView === "weatherForecast" && (
                    <div>
                        <table className="min-w-full text-center table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">المدينة</th>
                                    <th className="px-4 py-2">الطقس</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(weatherData).map((city) => (
                                    <tr key={city}>
                                        <td className="px-4 py-2">{city}</td>
                                        <td className="px-4 py-2">{weatherData[city]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            

        </div>
    );
};

export default WeatherCalendar;

