import { Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import img1 from '../images/Apr1/2.jpg';
import img2 from '../images/Apr1/1.jpg';

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
    alt: 'April 1 Image 1',
    title: 'Image 1'
  },
  {
    itemImageSrc: img1,
    thumbnailImageSrc: img1,
    alt: 'April 1 Image 2',
    title: 'Image 2'
  }
];

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'April 1, 2026 - WebVironment' },
    { name: 'description', content: 'Development entry for April 1, 2026' },
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
        <p className="text-xl text-green-100">Wednesday, April 1, 2026</p>
        {/* Navigation */}
        <div className="flex gap-4 justify-between p-2">
          <Link
            to="/day/2026-03-31"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous Day
          </Link>
          <Link
            to="/day/2026-04-02"
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
              On April 1, 2026, I got an email from our condominium telling us our trash chute is now accessible for us to use. Usually we would just leave our trash in front of the chute for someone to pick up, segregated or not. Included in the email were new guidelines suggesting us to segregate our trash. From that, I decided to reuse this old trashcan I first used as a first year to have more trash cans for better segregation.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> Probably my challenge was getting my fat lazy body to put the trashbags in the trashcan, holy week really alters your mind.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps: </strong> 
               I'll continue to consistently use the 2 trash cans to segregate my trash.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            <figure className="flex flex-col items-center">
              <Image
                src={img2}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Old Small Trashcan</figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img1}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">More Trashcans for segregation</figcaption>
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
              <p className="text-gray-800">
Being an environmental steward isn't always about grand gestures. It's about mindful daily choices and straying from 
our old habit of leaving mixed trash in the hallway. Taking this to heart, 
I repurposed an old trash can from my 1st year to set up a proper sorting system in my room.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Reusing an old bin to separate trash has a real, immediate impact.</li>
                <li>Environmental responsibility is everyone's job, not just the building staff's.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Every little action matters, start now and it'll snowball.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Consistently use both bins to segregate trash |
✅ Build sustainable, everyday habits |
✅ Set a positive example for others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
