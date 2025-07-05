import React from "react";
import EventForm from "../components/eventform";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
          Welcome to the Event Management Website!
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-slide-up">
          This website is a one-stop shop for all your event management needs.
          You can use it to create and manage events. To get started, simply
          create an account and then click on the "Create Event" button. You
          will then be guided through the process of creating your event. We
          hope you find this website to be a helpful tool for managing your
          events. If you have any questions, please do not hesitate to contact
          us.
        </p>
        <div className="mb-12">
          <p className="text-xl font-medium text-gray-700 mb-4 animate-fade-in-delay">
            If you want to Create your own Event Please Fill the Form to Create
            Events
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <EventForm />
        </div>
      </div>
    </div>
  );
};

// Animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes fadeInDelay {
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  .animate-fade-in { animation: fadeIn 1s ease-out; }
  .animate-slide-up { animation: slideUp 1s ease-out; }
  .animate-fade-in-delay { animation: fadeInDelay 1s ease-out; }
`;
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Home;