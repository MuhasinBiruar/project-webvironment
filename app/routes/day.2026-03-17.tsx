import { Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import img1 from '../images/Mar17/1.jpg';
import img2 from '../images/Mar17/2.jpg';

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
    alt: 'March 17 Image 1',
    title: 'Image 1'
  },
  {
    itemImageSrc: img1,
    thumbnailImageSrc: img1,
    alt: 'March 17 Image 2',
    title: 'Image 2'
  }
];

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'March 17, 2026 - WebVironment' },
    { name: 'description', content: 'Development entry for March 17, 2026' },
  ];
}

export default function DayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <style>{`
        .p-image-mask {
          background-color: rgba(0, 0, 0, 0.95) !important;
        }
      `}</style>
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
        {/* Navigation */}
        <div className="flex gap-4 justify-between p-2">
          <Link
            to="/day/2026-03-16"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous Day
          </Link>
          <Link
            to="/day/2026-03-18"
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
              On March 17, 2026, I observed trash in the classroom, that was left there by the previous class, and voluntarily threw it away, contributing to a cleaner environment. 
              This action was motivated by a desire to maintain a tidy space and set a positive example for others. It might be a small action, but it reflects my commitment to environmental responsibility.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> None, as this was a voluntary action taken in the moment. Only challenge is trying to think of more impactful actions to take in the future.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps:</strong> Continue to look for opportunities to contribute to a cleaner environment, both in the classroom and in daily life. Consider organizing or participating in larger clean-up efforts to make a more significant impact.
            </p>
          </div>
        </div>

        {/* SECTION 2: Developers Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

          <ul className="space-y-2">
            <li className="text-gray-800 font-semibold">Muhaisin Biruar</li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 w-150 lg:ml-50">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            <figure className="flex flex-col items-center">
              <Image
                src={img2}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Observed random trash in classroom</figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img1}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Voluntarily threw away trash</figcaption>
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
            📊 Short Reflection
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Environmental Stewardship</h3>
              <p className="text-gray-800">
                Being a steward of the environment means taking responsibility for the spaces we live in and the world around us. 
                Today's small action of cleaning up trash in the classroom reminds us that environmental care is not about grand gestures, but rather
                it's about consistent, mindful choices in our daily lives.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Small actions can have a big impact</li>
                <li>Environmental responsibility is everyone's duty</li>
                <li>Setting a positive example influences others</li>
                <li>Clean spaces foster positive learning environments</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Caring, whether big or small, shape our future. If we don't care now, who will?
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Continue daily environmental actions | ✅ Inspire others through example | ✅ Seek larger impact opportunities | ✅ Build sustainable habits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
