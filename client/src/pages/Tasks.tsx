import KanbanBoard from "../components/tasks/KanbanBoard";
import { INITIAL_TASKS, MEMBERS } from "../data/mockTasks";

function Tasks() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Zadaci i projekti</h1>
      <p className="mt-1 mb-6 text-sm text-slate-500 dark:text-slate-400">
        Pregled, prioriteti i koordinacija zadataka kroz timove i faze rada.
      </p>
      <KanbanBoard tasks={INITIAL_TASKS} members={MEMBERS} />
    </div>
  );
}

export default Tasks;