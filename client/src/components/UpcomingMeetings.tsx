import { CalendarDays, MapPin, Video } from "lucide-react";
import type { Meeting } from "../data/mockDashboard";

type Props = { meetings: Meeting[] };

function UpcomingMeetings({ meetings }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Predstojeći sastanci</h2>
        <CalendarDays size={18} />
      </div>

      <div className="mt-4 space-y-3">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="rounded-full bg-blue-100 px-2 py-0.5 font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                {meeting.when}
              </span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                {meeting.online ? <Video size={14} /> : <MapPin size={14} />}
                {meeting.place}
              </span>
            </div>

            <h3 className="mt-2 font-bold">{meeting.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {meeting.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              {meeting.attendees.length > 0 ? (
                <div className="flex -space-x-2">
                  {meeting.attendees.map((a) => (
                    <span
                      key={a}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-slate-50 dark:ring-slate-900"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {meeting.confirmed} potvrđenih članova
                </span>
              )}

              <button className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400">
                {meeting.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingMeetings;