import { Header } from "./components/navbar/Header.tsx";
import { CreateTask } from "./components/tasks/CreateTask.tsx";
import { Tasks } from "./components/tasks/Tasks.tsx";

import { ITask } from "./types/ITask.types.ts";

import { useGlobalState } from "./store/tasks-store.ts";
import { ToasterProvider } from "./providers/ToastProvider.tsx";

function App() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
         useGlobalState.setState({
             tasks: JSON.parse(tasks) as ITask[]
         });
    }

    return (
        <>
            <ToasterProvider />
            <Header />

            <div className="max-w-3xl mx-auto mt-2 xl:-mt-7">
                <CreateTask />
                <Tasks />
            </div>
        </>
    )
}

export default App
