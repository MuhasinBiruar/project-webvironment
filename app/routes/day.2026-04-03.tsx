import { Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import img1 from '../images/Apr3/2.jpg';
import img2 from '../images/Apr3/1.jpg';

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
    alt: 'April 3 Image 1',
    title: 'Image 1'
  },
  {
    itemImageSrc: img1,
    thumbnailImageSrc: img1,
    alt: 'April 3 Image 2',
    title: 'Image 2'
  }
];

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'April 3, 2026 - WebVironment' },
    { name: 'description', content: 'Development entry for April 3, 2026' },
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
        <p className="text-xl text-green-100">Friday, April 3, 2026</p>
        {/* Navigation */}
        <div className="flex gap-4 justify-between p-2">
          <Link
            to="/day/2026-04-02"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous Day
          </Link>
          <Link
            to="/day/2026-04-04"
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
              On April 3, 2026, I decided to take out the segregated trash while also labeling what contents are in each trashbag for convenience of the staff.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> Labeling it was not that hard other than that I can walk and throw my trash in our chute.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps: </strong> 
               I'll continue to consistently label my trash before throwing it.
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
              <figcaption className="text-sm text-gray-600 mt-3">Bio and Residue Trashbags</figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img1}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Recyclables Trashbag</figcaption>
            </figure>
          </div>
        </div>

        {/* SECTION 4: Videos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🎥 Videos</h2>

          <div className="p-4 bg-gray-50 rounded text-gray-500 italic flex justify-center">
            <video controls width="400" className="rounded-lg">
              <source src="/videos/Apr3/1.mp4" type="video/mp4" />
            </video>
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
              <p className="text-gray-800"> Being an environmental steward is a continuous process of mindful choices. After setting up my sorting bins on April 1st and pushing past my laziness to finally segregate the accumulated trash in my room on April 2nd, I finished the job on April 3rd. I took the sorted bags to our newly opened chute and took the extra step to label the contents of each one to make things easier for the building staff.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Cleaning, sorting, and labeling might seem minor, but they have a direct impact on efficient waste management.</li>
                <li>Labeling the bags is a simple gesture that shows respect for the building staff who handle our waste.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Caring about our surroundings shapes our future. If we don't care now, who will?
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Consistently label trash bags before throwing them out |
✅ Throw trash away immediately instead of letting it pile up around the room |
✅ Consistently segregate waste properly into the designated bins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
