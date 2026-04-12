import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { addDates } from '~/util/addDates';
import { Image } from 'primereact/image';
import img1 from '~/images/2026-03-28/image.png';

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
          </h2>Since today is Maundy Thursday, there were no classes, giving us a rare, unhurried pause in what had otherwise been a very packed online class week. Rather than letting the holiday go entirely undocumented, the group made time to hop on a Discord call to reflect on everything we had done over the past few days and check in with one another. It was a low-key but meaningful moment, five people, each coming from their own corners of the week, gathering virtually to talk about what we had learned and where we wanted to go next.

Looking back, this week's actions were small but deliberate. We cooked a group meal from leftovers to cut down on food waste and delivery emissions, took the public bus for errands instead of defaulting to ride-hailing, tended to indoor plants as a quiet act of daily care, cleaned and sorted through accumulated room waste, and even tackled the deeply personal challenge of letting go of hoarded scratch paper. None of these were grand gestures, but that was kind of the point.

          <div className="prose prose-green max-w-none">
            <p className="text-gray-800 mb-4"></p>
            <p className="text-gray-800">
              <strong>Key Findings from the Week: </strong>
              This week made one thing very clear: environmental stewardship doesn't have to be grand to be meaningful. Across five days of online classes, the group carried out a range of small but deliberate actions, cooking a shared meal from leftovers to cut down on food waste, taking the public bus instead of ride-hailing apps, watering and tending to indoor plants, clearing out and properly sorting accumulated room waste, and even confronting the surprisingly personal habit of hoarding scratch paper. Each action, taken on its own, might seem insignificant, but together they paint a picture of a group that is slowly but genuinely building environmental awareness into their everyday routines. The week also reinforced how much waste two people living together can unconsciously generate, and how conscious consumption starts with simply paying attention.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Group Meeting: </strong>
              During our check-in this Maundy Thursday, the team reflected on the week and agreed that the most valuable takeaway wasn't any single action, but the shift in mindset that's starting to take root. We're becoming more observant, noticing the trash we generate, the choices we make when commuting, the food we almost let go to waste. The group also acknowledged that a busy academic schedule is a real barrier to consistency, and that it's okay for our actions to be small as long as they are intentional. The holiday gave us a moment to breathe and recognize that even in a week as hectic as this one, we still showed up for the advocacy.
            </p>
            <p className="text-gray-800 mt-4">
              <strong>Recommendations: </strong>
              Moving forward, the team recommends establishing more consistent personal routines around waste management and mindful consumption, rather than relying on one-off cleanup sessions. Members are also encouraged to document their actions more proactively throughout the week, so that synthesis days feel less like a scramble and more like a genuine reflection. Lastly, as Holy Week continues, the break presents a good opportunity to observe household habits more closely, consumption, waste, energy use, and come back after the holiday with fresh observations and renewed momentum for the weeks ahead.
            </p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
              <figure className="flex flex-col items-center">
                <Image 
                  src={img1}
                  alt="fuhhh"
                  className="hover:brightness-50 transition-all cursor-pointer"
                  width="100%"
                  preview 
                />
                <figcaption className="text-sm text-gray-600 mt-3">Scratch Paper Trash</figcaption>
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
              <strong>Time Spent:</strong> ~10-15 minutes
            </p>
            <p className="text-gray-800">
              <strong>Type of Task:</strong> Cleanliness / Self - Discipline
            </p>
            <p className="text-gray-800">
              <strong>Notes:</strong> None. Most of the day was spent together with the family for the Maundy Thursday celebrations, so there wasn't much time for additional tasks or reflections outside of our group check-in. The focus was really on taking a moment to pause, reflect, and connect with each other after a busy week of online classes and advocacy actions.
            </p>
          </div>
        </div>

        {/* ===== EDIT ABOVE THIS LINE ===== */}
      </div>
    </div>
  );
}
