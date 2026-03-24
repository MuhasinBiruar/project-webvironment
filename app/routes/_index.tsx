import { Link } from 'react-router';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'WebVironment: Actions of Tomorrow' },
    { name: 'description', content: 'WebVironment: Actions of Tomorrow' },
  ];
}

interface CalendarDay {
  date: Date;
  day: number;
  isSynthesis: boolean;
  isEmpty?: boolean;
}

function CalendarGrid({
  title,
  days,
  editedDates = new Set<string>(),
}: {
  title: string;
  days: CalendarDay[];
  editedDates?: Set<string>;
}) {
  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-8">{title}</h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3">
        {/* Day headers - starting with Monday */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div
            key={day}
            className="text-center font-bold text-green-700 p-3 text-sm"
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((dayObj, idx) => {
          if (dayObj.isEmpty) {
            return (
              <div
                key={`empty-${idx}`}
                className="p-4 rounded-lg bg-gray-50"
              ></div>
            );
          }

          const dateStr = formatDate(dayObj.date);
          const hasEdits = editedDates.has(dateStr);
          //how routing works: the [date] part of the route will match this dateStr and render the corresponding day page
          return (
            <Link
              key={dateStr}
              to={`/day/${dateStr}`}
              className={`p-4 rounded-lg transition-all duration-300 cursor-pointer aspect-square flex flex-col items-center justify-center relative ${
                dayObj.isSynthesis
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-gradient-to-br from-green-100 to-emerald-100 text-green-800 shadow hover:shadow-lg hover:scale-105'
              }`}
            >
              {hasEdits && (
                <div className="absolute top-1 right-1 text-lg">🌳</div>
              )}
              <div className="flex flex-col items-center gap-1">
                <div className="text-3xl font-bold">{dayObj.day}</div>
                {dayObj.isSynthesis && (
                  <div className="text-xs font-semibold bg-white bg-opacity-20 px-2 py-1 rounded whitespace-nowrap">
                    SYNTHESIS
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  // Days that have been edited by developers
  const editedDates = new Set<string>([
    '2026-03-16',
    '2026-03-17',
  ]);

  // Generate March days (March 16-31, 2026)
  const marchDays: CalendarDay[] = [];

  // March 16, 2026 is a Monday, so no empty cells needed
  for (let day = 16; day <= 31; day++) {
    const date = new Date(2026, 2, day);
    const isSaturday = date.getDay() === 6;
    marchDays.push({
      date,
      day,
      isSynthesis: isSaturday,
    });
  }

  // Generate April days (April 1-30, 2026)
  const aprilDays: CalendarDay[] = [];

  // April 1, 2026 - find what day of week it is to add empty cells
  const april1 = new Date(2026, 3, 1);
  const april1DayOfWeek = april1.getDay(); // 0=Sun, 1=Mon, etc.

  // Add empty cells before April 1 (if needed)
  // 0=Sun (skip Sun slot), 1=Mon (0 empty), 2=Tue (1 empty), etc.
  const emptyBefore =
    april1DayOfWeek === 0 ? 6 : april1DayOfWeek - 1;
  for (let i = 0; i < emptyBefore; i++) {
    aprilDays.push({
      date: new Date(),
      day: 0,
      isSynthesis: false,
      isEmpty: true,
    });
  }

  // Add April days
  for (let day = 1; day <= 30; day++) {
    const date = new Date(2026, 3, day);
    const isSaturday = date.getDay() === 6;
    aprilDays.push({
      date,
      day,
      isSynthesis: isSaturday,
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-6xl font-bold text-green-800 mb-2">
          WebVironment: Actions of Tomorrow
        </h1>
        <p className="text-green-600 text-lg">
          Track collaborative development progress
        </p>
      </div>

      {/* March Calendar */}
      <div className="max-w-6xl mx-auto mb-12">
        <CalendarGrid title="March 2026" days={marchDays} editedDates={editedDates} />
      </div>

      {/* April Calendar */}
      <div className="max-w-6xl mx-auto mb-12">
        <CalendarGrid title="April 2026" days={aprilDays} editedDates={editedDates} />
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="w-4 h-4 rounded bg-green-500 mb-3"></div>
          <h3 className="font-semibold text-green-800 mb-2">Daily Entry</h3>
          <p className="text-sm text-gray-600">
            Click on any day to document your work with images, videos, and descriptions
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="w-4 h-4 rounded bg-emerald-600 mb-3"></div>
          <h3 className="font-semibold text-green-800 mb-2">Synthesis Days</h3>
          <p className="text-sm text-gray-600">
            Saturdays are reserved for synthesis and team reviews
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="w-4 h-4 rounded bg-emerald-500 mb-3"></div>
          <h3 className="font-semibold text-green-800 mb-2">Collaboration</h3>
          <p className="text-sm text-gray-600">
            Multiple developers can contribute to each day's entry
          </p>
        </div>
      </div>
    </div>
  );
}
