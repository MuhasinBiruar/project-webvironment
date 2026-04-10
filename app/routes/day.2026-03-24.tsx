import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import { addDates } from '~/util/addDates';
import img1 from '~/images/2026-03-24/1.jpg'; 
import img2 from '~/images/2026-03-24/2.jpg'; 
import img3 from '~/images/2026-03-24/3.jpg'; 

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
              For this day, I'm showcasing how I navigate using the DC Bus and why I try to catch it whenever possible. Since I had online classes this afternoon today, I didn't have my usual school commute, but I still had to run some errands to get supplies. Thankfully, there are two buses routed right around my barangay. 
            </p>
            <p className="text-gray-800 mb-4">
            Choosing public transportation over riding a private vehicle or booking a ride-hailing service is one of the most practical ways to reduce individual carbon footprints. A single fully loaded bus takes dozens of cars off the road, which drastically cuts down on traffic congestion and greenhouse gas emissions in the city.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> The biggest hurdle right now is dealing with the unpredictable schedule and lack of proper infrastructure. Taking the bus requires a lot of extra buffer time and patience since you never quite know exactly when it will arrive.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps: </strong> 
              Continue supporting the public transit system by riding the bus, while adapting my daily schedule to accommodate the unpredictable wait times. 
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            <figure className="flex flex-col items-center">
              <Image
                src={img2}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="600"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Morning Bus</figcaption>
            </figure>

            <figure className="flex flex-col items-center">
              <Image
                src={img3}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="600"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Inside Morning Bus</figcaption>
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
                Riding the bus is a direct contribution to a greener city. Even with its flaws, consistently choosing to support the public transit system over relying on private vehicles is an essential step towards reducing urban air pollution and lowering our collective reliance on fossil fuels. 
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>On a highly positive note, it is incredibly refreshing to ride a single bus that can carry the equivalent of several traditional jeepneys. It is a huge environmental win that directly cuts down on the thick, choking smoke those older jeeps usually leave behind on our roads.</li>
                <li>The city is definitely taking some good steps. For example, adding police to the intake point where they pick up passengers at the first stop makes things feel much safer and more organized.</li>
                <li>However, the system desperately needs proper integration with actual, dedicated bus stops rather than informal waiting areas along the road.</li>
                <li>The biggest issue right now is the scheduling. The arrival times are so inconsistent that catching a ride often feels like a "good luck with it" situation.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Learning to navigate the public transit system has definitely taught me patience. It forces you to slow down, plan ahead, and share a communal space with others, which is a humbling shift from the isolation and convenience of a private car.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Continue prioritizing the bus for daily commutes |
                ✅ Buffer extra travel time for inconsistent schedules |
                ✅ Advocate for better transit infrastructure and proper bus stops
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}