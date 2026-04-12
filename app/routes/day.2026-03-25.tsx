import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import { addDates } from '~/util/addDates'; 
import img2 from '~/images/2026-03-25/1.jpg'; 
import img3 from '~/images/2026-03-25/2.jpg';  

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
      <style>{`
        .p-image-mask {
          background-color: rgba(0, 0, 0, 0.95) !important;
        }
      `}</style>
      
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
        {/* SECTION 1: Action Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Action Description
          </h2>

            <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4">
              For this day, I focused on the quieter side of environmental stewardship. Since it was a Wednesday, I had a free afternoon after my online classes. I spent that time catching up on household chores. My main task was watering my indoor plants. Tending to these plants cultivates a calmer space. It serves as a daily reminder that living things rely on our care.
            </p>
            <p className="text-gray-800 mb-4">
              Plants are powerful partners in building a stewardship mindset. They actively improve our indoor air quality. Taking direct responsibility for their daily needs builds a strong connection to the natural world.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> The biggest hurdle is maintaining strict consistency. Caring for plants requires deep patience. It demands a reliable routine. You have to be mindful to notice small changes in their health over time.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps: </strong>
              Establish a firmer schedule for my weekly watering chores. Spend more intentional time observing plant growth. Continue building the habit of stewardship through these quiet acts of care.
            </p>
          </div>
        </div>

        {/* SECTION 2: Member/s Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

          <ul className="space-y-2">
            <li className="text-gray-800 font-semibold">Carl Jovit M Garzon</li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>

          <div className="grid grid-cols-1 md:grid-rows-2 gap-6 justify-center items-center">
            <figure className="flex flex-col items-center">
              <Image
                src={img2}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="600"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Plants around my garden (Monstera, Dumb Cane, Anthurium, Bougainvillea)</figcaption>
            </figure>

            <figure className="flex flex-col items-center">
              <Image
                src={img3}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="600"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Close-up of a thriving plant with a cat in the background</figcaption>
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
              <h3 className="font-semibold text-green-800 mb-3">There are no videos for this day</h3>
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
            📊 Short Reflection
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Environmental Stewardship</h3>
              <p className="text-gray-800">
                Being an environmental steward is about daily habits. Since it was a Wednesday, I had the afternoon free after my online classes wrapped up. I spent that time catching up on chores around the house, specifically taking the time to properly water and tend to my indoor plants. Making sure they are healthy is a simple but consistent way to practice responsibility for the natural world right inside my own home.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Taking an afternoon to focus on the quiet needs of your plants teaches you to be much more observant of nature in general.</li>
                <li>Routine chores aren't always glamorous, but keeping up with watering and maintenance directly creates a healthier and more grounded living space.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Tending to living things after a busy morning of classes forces you to slow down. It builds a sense of empathy and patience that changes how you view your impact on the world.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Water my plants when I can (like in online class) |
                ✅ Pay closer attention to small changes in my plant's health |
                ✅ Continue making my personal space a greener environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}