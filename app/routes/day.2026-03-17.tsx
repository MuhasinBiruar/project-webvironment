import { Link } from 'react-router';
import type { Route } from './+types/day.$date';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'March 17, 2026 - WebVironment' },
    { name: 'description', content: 'Development entry for March 17, 2026' },
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
        <p className="text-xl text-green-100">Tuesday, March 17, 2026</p>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        {/* SECTION 1: Action Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Action Description
          </h2>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4">
              Continued development on the WebVironment calendar system. Implemented the calendar grid layout with responsive design and added route templates for individual day pages.
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Accomplishments:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>Implemented 7-column calendar grid with Monday start</li>
              <li>Created separate March and April calendar sections</li>
              <li>Built dynamic route system for day pages (/day/[date])</li>
              <li>Added synthesis day detection for Saturdays</li>
              <li>Implemented hover effects and transitions</li>
              <li>Fixed TypeScript configuration issues</li>
            </ul>
            <p className="text-gray-800">
              <strong>Challenges:</strong> Initially had baseUrl deprecation warning in TypeScript config, resolved by removing deprecated option.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps:</strong> Populate day pages with content and create developer guide for template usage.
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
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure>
              <div className="bg-gradient-to-br from-green-300 to-emerald-300 p-8 rounded-lg h-40 flex items-center justify-center">
                <span className="text-4xl">📅</span>
              </div>
              <figcaption className="text-sm text-gray-600 mt-3">Calendar Component - March Month View</figcaption>
            </figure>
            <figure>
              <div className="bg-gradient-to-br from-teal-200 to-cyan-200 p-8 rounded-lg h-40 flex items-center justify-center">
                <span className="text-4xl">⚙️</span>
              </div>
              <figcaption className="text-sm text-gray-600 mt-3">Architecture Diagram - Route Structure</figcaption>
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
              <h3 className="font-semibold text-green-800 mb-3">Calendar Walkthrough & Day Page Template</h3>
              <div className="bg-gray-800 p-8 rounded-lg h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <span className="text-6xl block mb-4">▶️</span>
                  <p>Video: Calendar Feature Demo (8 mins)</p>
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
              <p className="text-gray-800">Total: 7 hours</p>
              <p className="text-gray-600 text-sm">Calendar Implementation: 4 hours | Route System: 2 hours | Testing & Debug: 1 hour</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Features Completed</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>✅ Calendar Grid (7 columns, Monday-first)</li>
                <li>✅ Synthesis Day Detection (Saturdays)</li>
                <li>✅ Dynamic Routing System</li>
                <li>✅ Responsive Design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Issues Resolved</h3>
              <p className="text-gray-800">Fixed TypeScript baseUrl deprecation warning by removing deprecated option.</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Code Quality</h3>
              <p className="text-gray-800">✅ All TypeScript checks passing | ✅ Component properly typed | ✅ Tailwind CSS optimized</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <Link
            to="/day/2026-03-16"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous Day
          </Link>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Back to Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
