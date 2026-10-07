import { useState } from "react";

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState("overview");

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "blue",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "purple",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "pink",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2024-03-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2024-03-25",
      status: "in-progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const stats = [
    { label: "Average Grade", value: "88%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 sm:px-10 lg:px-20">
      {/* header */}
      <div className=" shadow-sm flex bg-white justify-between items-center p-4 mb-8 mt-7 rounded-lg">
        {/* left */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 ">
            Welcome Back, Student!
          </h1>
          <span className="text-gray-600">
            Here's what's happening with your courses today.
          </span>
        </div>

        {/* right */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            <button className="p-2 text-gray-400 hover:text-gray-500">
              🔔
            </button>
          </div>

          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white     font-semibold">
            S
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-4 border border-gray-200"
          >
            <div>
              <div className="text-xl mb-2">{stat.icon}</div>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-500">
                {stat.label}
              </h3>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Progress */}
      {/* main */}
      <div className="grid grid-cols-1 md:grid-cols-5  grid-rows-2 gap-6">
        <div className="mb-8 bg-white p-4 grid gap-5   col-span-3 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-xl font-bold text-gray-700 mb-4">
            Course Progress
          </h1>
          <div className="flex flex-col gap-6">
            {/* col 1 */}
            <div className="bg-white gap-6 p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3>React Fundamentals</h3>
                <span className="text-xs text-gray-500"> 75%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">Next: Components&Props</p>
                <span className="text-xs text-gray-500 ">Ahmed Abdinuur</span>
              </div>
            </div>

            {/* col 2 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3>JavaScript Advanced</h3>
                <span className="text-xs text-gray-500"> 60%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">Next: Async/Await</p>
                <span className="text-xs text-gray-500 ">John Doe</span>
              </div>
            </div>

            {/* Col 3 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3>UI/UX Design</h3>
                <span className="text-xs text-gray-500"> 90%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">Next: color Theory</p>
                <span className="text-xs text-gray-500 "> mike Johnson</span>
              </div>
            </div>
          </div>
        </div>

        {/* sidebar */}
     

       
        <div className="flex flex-col gap-6   col-span-2 row-span-2">

         

          <div className="h-70 bg-white  flex flex-col flex-wrap shadow-sm border rounded-lg border-gray-200 p-5 mb-1 ">
             <h1 className=" font-semibold text-gray-700 mb-4">Upcoming Assignments</h1>
            {/* line1 */}
            <div className="flex justify-between items-center mb-2">
              <h2>Build a Todo App</h2>
              <span className="bg-rose-100 text-rose-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                pending
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">React Fundamentals</p>
              <p className=" text-sm text-gray-500 "> Due: 2024-03-20 </p>
            </div>
            {/* line2 */}
            <div className="flex justify-between items-center mb-2">
              <h2>API Integration</h2>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                pending
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">JavaScript Advanced</p> 
              <p className=" text-sm text-gray-500 "> Due: 2024-03-20 </p>
            </div>
            {/* line3 */}
            <div className="flex justify-between items-center mb-2">
              <h2>Desing System</h2>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                pending
              </span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">UI/UX Design</p>
              <p className=" text-sm text-gray-500 "> Due: 2024-03-20 </p>
            </div>
          
          </div>

                {/* Announcement */}
            <div className="bg-white shadow-sm   flex flex-col flex-wrap border rounded-lg border-gray-200">
                <h1 className="font-semibold mx-4 my-4 text-gray-700 mb-4">Announcements</h1>
             {/* line1 */}
            <div className="border-l-4 border-blue-500 p-4 mt-3">
                
              <p className="text-sm font-semibold text-gray-700">
                New Course Available </p>
                <p className="text-sm text-gray-600"> Check out our new TypeScript course!</p>
                <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
                {/* line2 */}
            <div className="border-l-4 border-blue-500 p-4 mt-3">
                
              <p className="text-sm font-semibold text-gray-700">
               Maintenance Notice </p>
                <p className="text-sm text-gray-600"> Platform updates scheduled for to night</p>
                <span className="text-xs text-gray-500">5 hours ago</span>
            </div>

      </div>
            </div>
        
            
            
         </div>

         
    </div>
  );
};

export default StudentDashboard;
