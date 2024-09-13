import React from 'react';
import './App.css';
import logo from './image/BB.png';

const courses = [
  {
    id: 1,
    title: 'DSA in Python',
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221128000406/Complete-Data-Structure-and-Algorithms-with-Python.png',
    description: 'Learn the basics of data structure & algorithm.'
  },
  // {
  //   id: 2,
  //   title: 'Advanced JavaScript',
  //   image: 'https://via.placeholder.com/150',
  //   description: 'Deep dive into JavaScript.'
  // },
  // Add more courses as needed
];

const liveClasses = [
  {
    id: 1,
    title: 'React Live Workshop',
    image: 'https://i.ytimg.com/vi/qvkq7Dhmz0U/maxresdefault.jpg',
    description: 'Join us for a live React workshop.'
  },
  {
    id: 2,
    title: 'JavaScript Bootcamp',
    image: 'https://th.bing.com/th/id/OIP.y20z6j6diGgdYvbr9qBVRQHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    description: 'Live JavaScript Bootcamp.'
  },
  // Add more live classes as needed
];

const allCourses = [
  {
    id: 1,
    title: 'Full Stack Development',
    image: 'https://oilab.in/public/img/courses/full-stack-web-developer.jpg',
    description: 'Complete course on full-stack development.'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    image: 'https://th.bing.com/th/id/OIP.vxG9QBwqBaI-h97fgOIHpwHaEo?rs=1&pid=ImgDetMain',
    description: 'Design stunning user interfaces.'
  },
  {
    id: 2,
    title: 'REACT JS',
    image: 'https://www.creativeitinstitute.com/images/course/course_1674371266.jpg',
    description: 'Learn the basics of REACT JS'
  },
  {
    id: 2,
    title: 'AI & ML',
    image: 'https://th.bing.com/th/id/OIP.gRlePYCr_W-M81y68PdA1AHaEK?rs=1&pid=ImgDetMain',
    description: 'The altimate course for AI & ML'
  },
  // Add more courses as needed
];

function App() {
  const studentName = 'HARSHIT'; // This would be dynamically set in a real app

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo"/>
          <input type="text" placeholder="Search courses..." className="search-bar" />
        </div>
        <div className="header-right">
          <div className="notification-icon">🔔</div>
          <div className="login-circle">👤</div>
        </div>
      </header>

      <section className="welcome-section">
        <h1>Welcome to our website</h1>
        <h4>Welcome back, {studentName}</h4>
      </section>

        <h2>Continue Learning</h2>
      <section className="courses-section">
        <div className="card-container1">
          {courses.map(course => (
            <div key={course.id} className="card1">
              <img src={course.image} alt={course.title} className="card-image" />
              
            </div>
          ))}
        </div>
        <div className="card-text1">
                <h3>DSA in Python</h3>
                <p>Learn the basics of Data Structure & Algorithm</p>
                <button>PURCHASED</button>
              </div>
      </section>

      <section className="live-classes-section">
        <h2>Upcoming Live Classes</h2>
        <div className="card-container">
          {liveClasses.map(liveClass => (
            <div key={liveClass.id} className="card">
              <img src={liveClass.image} alt={liveClass.title} className="card-image" />
              <div className="card-text">
                <h3>{liveClass.title}</h3>
                <p>{liveClass.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="all-courses-section">
        <h2>Courses</h2>
        <div className="card-container">
          {allCourses.map(course => (
            <div key={course.id} className="card">
              <img src={course.image} alt={course.title} className="card-image" />
              <div className="card-text">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr style={{ width: '100%', height: '2px' }} />

      </section>
      <footer className="footer">
        <p>&copy; 2024 E-learning Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
