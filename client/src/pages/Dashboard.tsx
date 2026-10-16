import StatCard from "../components/statCard";

const stats = [
    {id: 1, value: 68, label:"Ukupno aktivnih zadataka"},
    {id: 2, value: 3, label:"Prekoračena roka"},
    {id: 3, value:"74%", label:"Kvartalni OKR progres"},
    {id: 4, value:34, label:"Aktivnih volontera"}
];

function Dashboard () {
    return (
        <div className="p-8">
            <h1 className="font-bold text-2xl">Kontrolna tabla</h1>
            <div className="mt-6">
                {
                    stats.map((stat) =>
                    <StatCard key={stat.id} value={stat.value} label={stat.label} />
                    )
                }
                
            </div>
        </div>
    )
}

export default Dashboard;