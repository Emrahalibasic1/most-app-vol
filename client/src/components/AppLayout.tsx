import  Sidebar  from "./Sidebar";
import { Outlet } from "react-router-dom";


function AppLayout () {
    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <Sidebar />
        <main className="flex-1"> 
            <Outlet/>
        </main>

        </div>
        
    );
}

export default AppLayout;