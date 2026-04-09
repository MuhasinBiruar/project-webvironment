import { useParams, Link } from 'react-router';
import type { Route } from './+types/day.$date';
import { Image } from 'primereact/image';
import { addDates } from '~/util/addDates';
import img1 from '../images/Mar17/1.jpg';
import img2 from '../images/Mar17/2.jpg';
import img3 from '~/images/2026-03-18/1.jpg';
import img4 from '~/images/2026-03-19/1.jpg';
import img5 from '~/images/2026-03-20/1.jpg';
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
            Synthesis
          </h2>
          <div className="text-justify space-y-4">
            <p>
              This week was a start of a new journey for us in terms of our project. We started to do some actions that are related to our project, and we also started to document our actions by taking pictures and videos of our actions.
              Our actions this week mainly composed of voluntarily cleaning the classroom, where we noticed random trash lying around. We were mostly limited by this due to the fact our schedules are really tight (monday until thursday starts in the morning and we typically end at night around 8:30pm).
            </p>
            <p>
              We mostly thought that actions do not have to be necessarily big and impactful, as long as we are doing something then it counts. It is way better than not doing anything. Moreover, neglect is one of the main reasons our world is suffering. Therefore, if we
              care to do even the smallest of things, then it can already make a difference because it can encourage others to do the same and it can also create a more positive environment for everyone.
            </p>
            <p>
              Lastly, even though our acts are just this, we are still happy that we are doing something and
              we are still learning a lot from doing these actions. We would like to remind that this website is an advocacy rather than just a blog or documentation or something like that.
            </p>
            <p>
              Our <b>GOAL</b> is to encourage others to do the same and our contents show how we can help even in small actions, therefore we call on you to also do the same and to also share your actions to others so that we can all help each other and we can all create a more positive environment for everyone.
            </p>
            <p>
              <b>PROJECT WEBVIRONMENT</b> is a website built to remind everyone to not just focus on helping our environment solely because of our 
              future, but because it is the rightful thing to do for every living or non-living thing in this world. We are all connected and we 
              are all responsible for each other, therefore we should all care for each other and we should all care for our environment as well.
            </p>
            <p>
              We are all in this together, and we can all make a difference if we all do our part. So let us all do our part and let us all help each other to create a more positive environment for everyone.
            </p>
            <p className="text-gray-800">
              <strong>Challenges:</strong> March 16 does not have any content since we formally started our project on March 17. Aside from this, March 16 was a non-working holiday, so the members were our with their families.
            </p>
          </div>
        </div>

        {/* SECTION 2: Member/s Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            👥 Member/s Involved
          </h2>

          <ul className="space-y-2">
            <li className="text-gray-800">Muhaisin Xavier E. Biruar</li>
            <li className="text-gray-800">Cyril John P. Cole</li>
            <li className="text-gray-800">Jovit Garzon</li>
          </ul>
        </div>

        {/* SECTION 3: Images */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🖼️ Images</h2>

          <div className="p-4 rounded text-gray-500 italic flex flex-row justify-evenly flex-wrap gap-4">
            <figure className="flex flex-col items-center">
              <Image
                src={img1}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />

            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img2}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />

            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img3}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />

            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img4}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />

            </figure>
            <figure className="flex flex-col items-center">
              <Image
                src={img5}
                className="hover:brightness-50 transition-all cursor-pointer"
                width="200"
                preview
              />

            </figure>
          </div>
        </div>

        {/* SECTION 4: Videos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🎥 Videos</h2>

          <div className="p-4 bg-gray-50 rounded text-gray-500 italic space-y-2 flex flex-row justify-center items-center flex-wrap gap-4">
            <video controls style={{ width: '300px', height: '200px' }}>
              <source src="/videos/2026-03-18/1.mp4" type="video/mp4" />
            </video>
            <video controls style={{ width: '300px', height: '360px' }}>
              <source src="/videos/2026-03-19/1.mp4" type="video/mp4" />
            </video>
            <video controls style={{ width: '300px', height: '360px' }}>
              <source src="/videos/2026-03-20/1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        

        {/* ===== EDIT ABOVE THIS LINE ===== */}
      </div>
    </div>
  );
}
