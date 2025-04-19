import Opinion from "./Opinion";
import WeatherCalendar from "./WeatherCalender"; // تأكد من التسمية

const PageLayout = () => {
    return (
      <div className="container flex flex-col lg:flex-row lg:gap-4 gap-2 p-4">
        {/* التقويم - ياخد المساحة الأكبر */}
        <div className="lg:w-[72%] w-full">
          <WeatherCalendar />
        </div>
  
        {/* استطلاع الرأي */}
        <div className="lg:w-[28%] w-full">
          <Opinion />
        </div>
      </div>
    );
  };
  

export default PageLayout;

