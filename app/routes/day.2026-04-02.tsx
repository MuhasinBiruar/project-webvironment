import { Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import img2 from '../images/Apr2/1.jpg';

interface Picture {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

const pictures: Picture[] = [
  {
    itemImageSrc: img2,
    thumbnailImageSrc: img2,
    alt: 'April 2 Image 1',
    title: 'Image 1'
  },
];

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'April 2, 2026 - WebVironment' },
    { name: 'description', content: 'Development entry for April 2, 2026' },
  ];
}

export default function DayPage() {
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
        <h1 className="text-4xl font-bold mb-2">📝 Daily Entry</h1>
        <p className="text-xl text-green-100">Thursday, April 2, 2026</p>
        {/* Navigation */}
        <div className="flex gap-4 justify-between p-2">
          <Link
            to="/day/2026-04-01"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous Day
          </Link>
          <Link
            to="/day/2026-04-03"
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
            <p className="text-gray-800 mb-4">So I told myself yesterday to clean my room after making the trashcans but I didn’t because I was lazy so I segregated all the trash around my room today April 2, 2026.</p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> The challenge for me was separating the trash from Biodegradable, Residual, and Recyclable. Oh yea also being fat and lazy. 
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps: </strong> I will definitely throw my trash immediately and not let it pile up around my room for real. Also I will of course consistently throw my trash and segregate properly.
               
            </p>
          </div>
        </div>

        {/* SECTION 2: Developers Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

          <ul className="space-y-2">
            <li className="text-gray-800 font-semibold">Geoff Buison</li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 w-150 lg:ml-50">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-center items-center">
            <figure className="flex flex-col items-center">
              <Image
                src={img2}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Threw all my trash finally</figcaption>
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
              <p className="text-gray-800"> Being an environmental steward is about mindful daily choices. After setting up my new sorting bins on April 1st, I promised myself I'd clean my room. True to form, I put it off. But on April 2nd, I finally took responsibility and segregated all the accumulated trash scattered around my room.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Cleaning and sorting my own space is the foundation of broader environmental care.</li>
                <li>Taking responsibility for the spaces we live in fosters a better environment for everyone.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Just do It!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Throw trash away immediately (fr tho I tripped over my trash one time) |
✅ Build sustainable, everyday habits |
✅ Consistently use the bins to segregate properly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
