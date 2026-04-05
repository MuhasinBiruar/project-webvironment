// TEMPLATE

//YOU CAN COPY THIS TEMPLATE AND CUSTOMIZE IT TO YOUR LIKING FOR EACH DAY'S ENTRY. JUST MAKE SURE TO UPDATE THE FILENAME TO MATCH THE DATE (e.g., day.2026-03-16.tsx) AND FILL IN THE SECTIONS BELOW WITH YOUR CONTENT.


import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Day ${params.date} - WebVironment` },
    { name: 'description', content: `Development entry for ${params.date}` },
  ];
}

export default function DayPage() {
  const params = useParams<{ date: string }>();
  const dateStr = params.date || '';

  function isSynthesisDay(dateStr: string): boolean {
    const date = new Date(dateStr);
    return date.getDay() === 6; // Saturday
  }

  const formatDateDisplay = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const synthesis = isSynthesisDay(dateStr);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white p-8 shadow-lg">
        <Link
          to="/"
          className="inline-block mb-4 text-green-100 hover:text-white transition"
        >
          ← Back to Calendar
        </Link>
        <h1 className="text-4xl font-bold mb-2">
          {synthesis ? '🔄 Synthesis Day' : '📝 Daily Entry'}
        </h1>
        <p className="text-xl text-green-100">{formatDateDisplay(dateStr)}</p>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        {/* ===== EDIT BELOW THIS LINE ===== */}

        {/* SECTION 1: Action Description / Synthesis Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            {synthesis ? 'Synthesis Summary' : 'Action Description'}
          </h2>
          
          {/* 
            ============================================
            TODO: Add your description here
            
            Replace this comment with:
            - What was accomplished today
            - Challenges faced
            - Progress made
            - Next steps
            
            For Synthesis Days:
            - Key findings from the week
            - Team discussion outcomes
            - Recommendations
            ============================================
          */}
          
          <p className="text-gray-500 italic p-4 bg-gray-50 rounded">
            [Developer - Add your description here]
          </p>
        </div>

        {/* SECTION 2: Developers Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Developers Involved
          </h2>
          
          {/* 
            ============================================
            TODO: Add developer names here
            
            Format: List your names as developers working on this day
            Example:
            - John Doe
            - Jane Smith
            - Alex Johnson
            ============================================
          */}
          
          <ul className="space-y-2">
            <li className="text-gray-500 italic">
              [Developer 1 - Replace with your name]
            </li>
            <li className="text-gray-500 italic">
              [Developer 2 - Replace with your name]
            </li>
            <li className="text-gray-500 italic">
              [Developer 3 - Replace with your name]
            </li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>
          
          {/* 
            ============================================
            TODO: Add images here
            
            You can use:
            1. Local images from /public folder: /images/filename.jpg
            2. External URLs: https://example.com/image.jpg
            3. React <img> tags
            
            Example:
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <figure>
                <img src="/images/screenshot.png" alt="Screenshot description" />
                <figcaption className="text-sm text-gray-600 mt-2">Screenshot of feature demo</figcaption>
              </figure>
              <figure>
                <img src="/images/result.png" alt="Result" />
                <figcaption className="text-sm text-gray-600 mt-2">Final result</figcaption>
              </figure>
            </div>
            ============================================
          */}
          
          <div className="p-4 bg-gray-50 rounded text-gray-500 italic">
            [Developer - Add image elements here]
          </div>
        </div>

        {/* SECTION 4: Videos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🎥 Videos
          </h2>
          
          {/* 
            ============================================
            TODO: Add videos here
            
            You can use:
            1. HTML5 video: <video controls width="100%"><source src="..." type="video/mp4" /></video>
            2. YouTube embed: <iframe width="100%" height="400" src="https://www.youtube.com/embed/..." title="..."></iframe>
            3. Vimeo or other platforms
            
            Example:
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Demo Video</h3>
                <video controls width="100%" className="rounded-lg">
                  <source src="/videos/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            ============================================
          */}
          
          <div className="p-4 bg-gray-50 rounded text-gray-500 italic">
            [Developer - Add video elements here]
          </div>
        </div>

        {/* SECTION 5: Key Metrics / Notes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            📊 Additional Information
          </h2>
          
          {/* 
            ============================================
            TODO: Add any additional info
            
            Examples:
            - Time spent on tasks
            - Performance metrics
            - Bug fixes
            - Features implemented
            - Links to documentation
            - Code repositories
            ============================================
          */}
          
          <div className="space-y-3">
            <p className="text-gray-500 italic">
              [Developer - Add any additional notes or metrics here]
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-800 text-sm">
            ✏️ <strong>Edit this file directly:</strong> Replace the placeholders above with your own content. No UI forms needed!
          </p>
        </div>

        {/* ===== EDIT ABOVE THIS LINE ===== */}
      </div>
    </div>
  );
}
