import { Award, ThumbsUp } from "lucide-react";
import type {VolunteerOfMonth} from "../data/mockDashboard"

type Props = {volunteer : VolunteerOfMonth}
function CommunityRecognition({volunteer} : Props){

    return (
   <section className="rounded-xl border border-purple-200 bg-linear-to-br from-purple-100 to-blue-50 p-6 dark:border-purple-900 dark:from-purple-950 dark:to-slate-900">
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-700 dark:text-purple-300">
        <Award size={16} />
        Priznanje zajednice
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
  {volunteer.name.split(" ").map((part) => part[0]).join("")}
</div>
        <div>
          <span className="inline-block rounded-full bg-purple-600 px-2 py-0.5 text-xs font-bold text-white">
  Volonter mjeseca 🎉
</span>
          <div className="font-bold">{volunteer.name}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{volunteer.team}</div>
        </div>
      </div>
     <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{volunteer.description}</p>
      <div className="mt-4 flex items-center justify-between">
       <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-blue-700 hover:bg-slate-50 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-slate-700">
            <ThumbsUp size={14} />
            Čestitaj {volunteer.name.split(" ")[0]}
        </button>
            <span className="text-xs text-slate-500 dark:text-slate-400">Dodijeljeno {volunteer.date}</span>
        <span className="text-xs text-gray-400 /* TODO: siva */">Dodijeljeno {volunteer.date}</span>
      </div>
    </section>
  );
}
export default CommunityRecognition;