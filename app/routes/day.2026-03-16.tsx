//SAMPLE ENTRY FOR MARCH 16, 2026
import { Link } from 'react-router';
import type { Route } from './+types/day.$date';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'March 16, 2026 - WebVironment' },
    { name: 'description', content: 'Development entry for March 16, 2026' },
  ];
}

export default function DayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 shadow-lg">
        <Link
          to="/"
          className="inline-block mb-4 text-green-100 hover:text-white transition"
        >
          ← Back to Calendar
        </Link>
        <h1 className="text-4xl font-bold mb-2">📝 Daily Entry</h1>
        <p className="text-xl text-green-100">Monday, March 16, 2026</p>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        {/* SECTION 1: Action Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Action Description
          </h2>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4">
              Today we kicked off the WebVironment project! Started by setting up the React Router framework and establishing the core project structure.
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Accomplishments:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>Initialized React + Vite project</li>
              <li>Configured React Router with dynamic date-based routes</li>
              <li>Created calendar component spanning March 16 - April 30</li>
              <li>Designed green gradient UI theme</li>
              <li>Set up Tailwind CSS for styling</li>
            </ul>
            <p className="text-gray-800">
              <strong>Next Steps:</strong> Create template pages for daily entries and implement sample content.
            </p>
          </div>
        </div>

        {/* SECTION 2: Developers Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Developers Involved
          </h2>
          
          <ul className="space-y-2">
            <li className="text-gray-800 font-semibold">Muhsin Biruar</li>
            <li className="text-gray-800 font-semibold">Cyril Santos</li>
            <li className="text-gray-800 font-semibold">Alex Johnson</li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure>
              <div className="bg-gradient-to-br from-green-200 to-emerald-200 p-8 rounded-lg h-40 flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <figcaption className="text-sm text-gray-600 mt-3">Project Planning Board - Initial Sprint Setup</figcaption>
            </figure>
            <figure>
              <div className="bg-gradient-to-br from-blue-200 to-cyan-200 p-8 rounded-lg h-40 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <figcaption className="text-sm text-gray-600 mt-3">UI/UX Design Mockup - Calendar Layout</figcaption>
            </figure>
          </div>
        </div>

        {/* SECTION 4: Videos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🎥 Videos
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-3">Project Demo Overview</h3>
              <div className="bg-gray-800 p-8 rounded-lg h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <span className="text-6xl block mb-4">▶️</span>
                  <p>Video: Project Walkthrough (5 mins)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: Key Metrics / Notes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            📊 Additional Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Time Spent</h3>
              <p className="text-gray-800">Total: 8 hours</p>
              <p className="text-gray-600 text-sm">Setup & Configuration: 3 hours | Design: 2 hours | Development: 3 hours</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Repository</h3>
              <p className="text-blue-600">
                <a href="https://github.com/MuhasinBiruar/project-webvironment" target="_blank" rel="noopener noreferrer" className="underline">
                  github.com/MuhasinBiruar/project-webvironment
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Blockers / Notes</h3>
              <p className="text-gray-800">None at this time. Project structure is solid and ready for development.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <Link
            to="/"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Back to Calendar
          </Link>
          <Link
            to="/day/2026-03-17"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  );
}
