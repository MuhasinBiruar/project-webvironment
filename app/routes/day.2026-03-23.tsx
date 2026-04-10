<<<<<<< HEAD
import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import { addDates } from '~/util/addDates';
import img1 from '~/images/2026-03-23/1.jpg'; // Make sure this path matches your folder structure
=======
// TEMPLATE

// COPY THIS TEMPLATE AND CUSTOMIZE IT TO YOUR LIKING FOR EACH DAY'S ENTRY.
// JUST MAKE SURE TO UPDATE THE FILENAME TO MATCH THE DATE (e.g., day.2026-03-16.tsx)
// AND FILL IN THE SECTIONS BELOW WITH YOUR CONTENT.

import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { addDates } from '~/util/addDates';
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72

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
<<<<<<< HEAD
      <style>{`
        .p-image-mask {
          background-color: rgba(0, 0, 0, 0.95) !important;
        }
      `}</style>
      
=======
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
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
<<<<<<< HEAD
        
=======
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
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
<<<<<<< HEAD
        {/* SECTION 1: Action Description */}
=======
        {/* ===== EDIT BELOW THIS LINE ===== */}

        {/* SECTION 1: Action Description / Synthesis Summary */}
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Action Description
          </h2>

<<<<<<< HEAD
            <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4">
              Today, instead of ordering takeout, we decided to pool our resources and cook a shared group dinner at a friend's house. We made a hearty curry for four, we've nicknamed it "FND" (Fat Night Dinner) We used a convenient curry base paired with fresh carrots and potatoes, but I believe the most impactful choice was repurposing leftover meat as our main protein. We actively prevented food waste by giving these leftovers a delicious second life, while also simultaneously avoiding the single-use plastics and transportation emissions associated with ordering delivery.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> Balancing the proportions was a fun challenge, we had to make sure the amount of fresh vegetables and curry base paired perfectly with the specific amount of leftover meat we had on hand, ensuring absolutely nothing went to waste.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps: </strong> 
              Continue finding creative ways to "upcycle" leftovers into our group meals. In the future, we might also try making our own curry base from scratch using local ingredients to further reduce our reliance on packaged, store-bought items.
=======
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
            <p className="text-gray-800 mb-4">{/* TODO: Add to me */}</p>
            <p className="text-gray-800">
              <strong>Challenges:</strong>
              {/* TODO: Add to me */}
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Next Steps:</strong>
              {/* TODO: Add to me */}
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
            </p>
          </div>
        </div>

<<<<<<< HEAD
        {/* SECTION 2: Developers Involved */}
=======
        {/* SECTION 2: Member/s Involved */}
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

<<<<<<< HEAD
          <ul className="space-y-2">
            <li className="text-gray-800 font-semibold">Carl Jovit M Garzon</li>
            <li className="text-gray-800 font-semibold">Lloyd Joshua Matobato</li>
            <li className="text-gray-800 font-semibold">Albert Geoff Buison</li>
=======
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
            <li className="text-gray-500 italic">
              [Member 1 - Replace with your name]
            </li>
            <li className="text-gray-500 italic">
              [Member 2 - Replace with your name]
            </li>
            <li className="text-gray-500 italic">
              [Member 3 - Replace with your name]
            </li>
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
          </ul>
        </div>

        {/* SECTION 3: Images */}
<<<<<<< HEAD
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 w-150 lg:ml-50">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🖼️ Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-center items-center">
            <figure className="flex flex-col items-center">
              <Image
                src={img1}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="400"
                preview
              />
              <figcaption className="text-sm text-gray-600 mt-3">Home-cooked group dinner (Fried Rice)</figcaption>
            </figure>
=======
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

          <div className="p-4 bg-gray-50 rounded text-gray-500 italic">
            [Developer - Add image elements here]
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
          </div>
        </div>

        {/* SECTION 4: Videos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
<<<<<<< HEAD
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
=======
          <h2 className="text-2xl font-bold text-green-800 mb-4">🎥 Videos</h2>

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
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
          </div>
        </div>

        {/* SECTION 5: Key Metrics / Notes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
<<<<<<< HEAD
            📊 Short Reflection
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Environmental Stewardship</h3>
              <p className="text-gray-800">
                To be completely honest, our group usually just eats out or orders food online most of the time. But this time, we decided to step up and put our cooking skills to the test. With a bit of guidance from our friend who actually knows their way around a kitchen, we made it happen. It made me realize that being an environmental steward isn't always about grand gestures. Just by choosing to cook together instead of tapping a delivery app, we completely bypassed the mountain of single-use plastics that usually clutters our trash, and saved a bit of money in the process.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Key Reflections</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Skipping the delivery apps completely removes the carbon emissions from riders transporting food to our door, a small win, but the mindset is the biggest gain from this.</li>
                <li>Proper meal planning is absolutely essential to ensure large batch cooking doesn't just result in accidental food waste.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Personal Growth</h3>
              <p className="text-gray-800">
                Breaking out of our usual routine of just buying food was genuinely rewarding. Learning new kitchen skills from a friend turned a basic necessity into a fun, shared experience. It proved that making sustainable choices doesn't have to feel like a chore; it actually brought us closer together.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">Future Commitment</h3>
              <p className="text-gray-800">
                ✅ Make group cooking a regular habit |
                ✅ Always bring reusable containers for leftovers |
                ✅ Source ingredients locally when possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
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

        {/* ===== EDIT ABOVE THIS LINE ===== */}
      </div>
    </div>
  );
}
>>>>>>> 868d1ce666efae2fc5bf795bdb82bd12b48e6a72
