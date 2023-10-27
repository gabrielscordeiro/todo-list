import { Header } from "./components/navbar/Header.tsx";
import { Search } from "./components/Search.tsx";
import { Tasks } from "./components/tasks/Tasks.tsx";

function App() {

    return (
        <>
            <Header />

            <div className="max-w-3xl mx-auto mt-2 xl:-mt-7">
                <Search />
                <Tasks />
            </div>
        </>
    )
}

export default App
