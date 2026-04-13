import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { addDates } from '~/util/addDates';
import { Image } from 'primereact/image';
import img1 from '~/images/Apr4/image.png';

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
          We started the week with 2 face-to-face classes on Monday and Tuesday, which was followed up by holy week. We mainly segregated and threw out ours's and other's trash. We worked on the website and shared reflections on our experience on discord for not only this week but the entire month of being stewards for the environment. 
          <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4"></p>
            <p className="text-gray-800">
              <strong>Key Findings from the Week: </strong>
              We demonstrated a well-rounded approach to being stewards for the environment by effectively combining physical action with digital collaboration. During our in-person classes early in the week, we took direct initiative by actively managing and segregating both our own and others' waste. As we shifted into the Holy Week break, we successfully transitioned online to finalize our website and used Discord for a comprehensive reflection, evaluating not just the week's specific tasks, but our overall growth, teamwork, and impact over our entire month of environmental stewardship.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Group Meeting: </strong>
              During our online group meeting on Discord, we shifted our focus from the hands-on work we did earlier in the week to our digital and reflective tasks. We first collaborated to at least finalize the design and content of our website, ensuring everything was complete and ready to go. Once the website was sorted, we opened up the floor for a team reflection. We took turns sharing our thoughts and takeaways, looking back not just on our recent trash segregation efforts during our face-to-face classes, but on our entire month-long journey acting as stewards for the environment.            </p>
            <p className="text-gray-800 mt-4">
              <strong>Recommendations: </strong>
              Moving forward, we recommend sustaining our active waste segregation efforts to set a continuous positive example for our peers on campus. Alongside this, we should actively promote and update our newly finalized website, using it as a living platform to share our reflections and resources on environmental stewardship. And if we can't, we recommend maintaining regular group check-ins on Discord, as taking the time to evaluate our progress has proven highly effective in keeping us aligned, motivated, and aware of our overall impact.            </p>
          </div>
        </div>

        {/* SECTION 2: Member/s Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

          {/* 
            ============================================
            TODO: Add member names here
            
            Format: List your names as members working on this day
            Example:
            - John Doe
            - Jane Smith
            - Alex Johnson
            ============================================
          */}

          <ul className="space-y-2">
            <li className="text-gray-800">
              Lloyd Joshua M. Matobato
            </li>
            <li className="text-gray-800">
              Muhaisin Xavier Biruar
            </li>
            <li className="text-gray-800">
              Carl Jovit Garzon
            </li>
            <li className="text-gray-800">
              Cyril John Cole
            </li>
            <li className="text-gray-800">
              Albert Geoff Buison
            </li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🖼️ Images</h2>

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

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-center items-center">
              <figure className="flex flex-col items-center">
                <Image 
                  src={img1}
                  alt="fuhhh"
                  className="hover:brightness-50 transition-all cursor-pointer"
                  width="100%"
                  preview 
                />
                <figcaption className="text-sm text-gray-600 mt-3">Group Discussion</figcaption>
              </figure>
            </div>

          <div className="p-4 bg-gray-50 rounded text-gray-500 italic">
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
                  <p>Video: No video for this day</p>
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

          <div className="space-y-3">
            <p className="text-gray-800">
              <strong>Time Spent:</strong> ~30-45 minutes
            </p>
            <p className="text-gray-800">
              <strong>Type of Task:</strong> Cleanliness / Self - Discipline
            </p>
            <p className="text-gray-800">
              <strong>Notes:</strong> Final Entry for this Website! We had a great time reflecting on our journey as stewards for the environment, and we look forward to continuing our efforts beyond this project.
            </p>
          </div>
        </div>

        {/* ===== EDIT ABOVE THIS LINE ===== */}
      </div>
    </div>
  );
}
