//INI GA DIPAKE




import React from 'react';

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 font-inter text-gray-800 flex flex-col">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white shadow-sm p-2 rounded-lg bg-blue-600/70">
          Your Logo
        </div>
        {/* Navigation (optional, can be added later) */}
        {/* <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-blue-100 transition-colors">Home</a></li>
            <li><a href="#" className="text-white hover:text-blue-100 transition-colors">About</a></li>
            <li><a href="#" className="text-white hover:text-blue-100 transition-colors">Contact</a></li>
          </ul>
        </nav> */}
      </header>

      {/* Main Content - Clouds Section */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cloud 1 */}
          <Cloud
            title="Vision"
            description="Our ultimate goal and guiding principle."
            internalText="Future Forward"
          />
          {/* Cloud 2 */}
          <Cloud
            title="Mission"
            description="What we do and why it matters."
            internalText="Empower Progress"
          />
          {/* Cloud 3 */}
          <Cloud
            title="Strategy"
            description="How we plan to achieve our objectives."
            internalText="Smart Growth"
          />
          {/* Cloud 4 */}
          <Cloud
            title="Impact"
            description="The positive change we aim to create."
            internalText="Positive Change"
          />
          {/* Cloud 5 */}
          <Cloud
            title="Innovation"
            description="Our commitment to continuous improvement."
            internalText="Creative Solutions"
          />
        </div>
      </main>

      {/* Roadmap Section */}
      <section className="bg-blue-600/30 p-8 mt-auto rounded-t-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Our Roadmap</h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical Line for Roadmap */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white rounded-full hidden md:block"></div>

          {/* Roadmap Milestones */}
          <Milestone
            year="Q1 2025"
            title="Concept & Design Phase"
            description="Initial ideation, wireframing, and UI/UX design."
            position="left"
          />
          <Milestone
            year="Q2 2025"
            title="Core Development"
            description="Building the foundational features and backend."
            position="right"
          />
          <Milestone
            year="Q3 2025"
            title="Alpha Testing & Feedback"
            description="Internal testing and gathering initial user feedback."
            position="left"
          />
          <Milestone
            year="Q4 2025"
            title="Public Beta Launch"
            description="Releasing a beta version to a wider audience."
            position="right"
          />
          <Milestone
            year="Q1 2026"
            title="Official Product Launch"
            description="Full public release with all core features."
            position="left"
          />
        </div>
      </section>
    </div>
  );
};

// Cloud Component
const Cloud = ({ title, description, internalText }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Cloud Shape */}
      <div className="relative bg-white rounded-full px-8 py-6 shadow-xl
                      before:content-[''] before:absolute before:top-2 before:left-10 before:w-16 before:h-16 before:bg-white before:rounded-full before:shadow-xl
                      after:content-[''] after:absolute after:top-8 after:right-8 after:w-12 after:h-12 after:bg-white after:rounded-full after:shadow-xl
                      hover:scale-105 transition-transform duration-300">
        <div className="relative z-10 text-xl font-semibold text-blue-700">
          {internalText}
        </div>
      </div>
      {/* Description outside cloud */}
      <h3 className="mt-6 text-2xl font-bold text-white drop-shadow-md">{title}</h3>
      <p className="mt-2 text-md text-white/90 max-w-xs">{description}</p>
    </div>
  );
};

// Milestone Component
const Milestone = ({ year, title, description, position }) => {
  const isLeft = position === 'left';
  return (
    <div className={`flex w-full justify-center md:justify-start ${isLeft ? 'md:pr-8' : 'md:pl-8'} mb-10`}>
      <div className={`hidden md:block w-1/2 ${isLeft ? 'text-right pr-4' : 'text-left pl-4'} relative flex-shrink-0`}>
        {isLeft && (
          <>
            <div className="font-bold text-white text-xl mb-1">{year}</div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-white/90">{description}</p>
          </>
        )}
      </div>

      {/* Dot on the timeline */}
      <div className="relative flex-shrink-0">
        <div className="w-6 h-6 bg-yellow-400 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10 border-2 border-white"></div>
      </div>

      <div className={`w-full md:w-1/2 ${isLeft ? 'md:text-left md:pl-4' : 'md:text-right md:pr-4'} text-center md:text-left`}>
        {!isLeft && (
          <>
            <div className="font-bold text-white text-xl mb-1 md:hidden">{year}</div>
            <h3 className="text-2xl font-semibold text-white md:hidden">{title}</h3>
            <p className="text-white/90 md:hidden">{description}</p>

            <div className="font-bold text-white text-xl mb-1 hidden md:block">{year}</div>
            <h3 className="text-2xl font-semibold text-white hidden md:block">{title}</h3>
            <p className="text-white/90 hidden md:block">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};


export default App;
