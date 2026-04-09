import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { addDates } from '~/util/addDates';
import { Image } from 'primereact/image';
import img1 from '~/images/2026-03-25/1.jpg';

const fileDate = import.meta.url.match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? '';

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Day ${fileDate || params.date} - WebVironment` },
    {
      name: 'description',
      content: `Development entry for ${fileDate || params.date}`,
    },
  ];
}

export default function DayPage() {
  const params = useParams<{ date: string }>();
  const dateStr = fileDate || params.date || '';

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
        {/* Navigation */}
        <div className="flex gap-4 justify-between p-2">
          <Link
            to={`/day/${addDates(dateStr, -1)}`}
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous Day
          </Link>
          <Link
            to={`/day/${addDates(dateStr, 1)}`}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Next Day →
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        {/* ===== EDIT BELOW THIS LINE ===== */}

        {/* SECTION 1: Action Description / Synthesis Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Action Description
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

          <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4">
              During the day, I found a discarded yellow sticky note with the
              number “81” (or possibly “18”) written in the classroom. I picked
              it up and properly disposed of it in the appropriate waste bin.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> There was uncertainty regarding the
              marking on the sticky note (whether it read “81” or “18”), but it
              did not affect the proper disposal process (as it doesn't really
              matter).
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps:</strong> Continue practicing environmental
              awareness by regularly picking up small pieces of litter and
              promoting responsible behavior among others.
            </p>
          </div>
        </div>

        {/* SECTION 2: Member/s Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

          <ul className="space-y-2">
            <li className="text-gray-800">Cyril John P. Cole</li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🖼️ Images</h2>

          <div className="p-4 rounded text-gray-500 italic">
            <figure className="flex flex-col items-center">
              <Image
                src={img1}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">
                Trash in the classroom
              </figcaption>
            </figure>
          </div>
        </div>

        {/* SECTION 4: Videos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🎥 Videos</h2>

          <div className="p-4 flex justify-center items-center bg-gray-50 rounded text-gray-500 italic">
            <video controls>
              <source src="/videos/2026-03-25/1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* SECTION 5: Key Metrics / Notes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            📊 Additional Information
          </h2>

          <div className="space-y-3">
            <p className="text-gray-800">
              <strong>Time Spent:</strong> ~1-2 minutes
            </p>
            <p className="text-gray-800">
              <strong>Type of Task:</strong> Environmental maintenance /
              cleanliness
            </p>
            <p className="text-gray-800">
              <strong>Impact:</strong> Helped maintain a clean classroom
              environment and reinforced proper waste disposal habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
