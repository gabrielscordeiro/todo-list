import { Header } from "./components/navbar/Header.tsx";
import { Search } from "./components/Search.tsx";

function App() {

    return (
        <>
            <Header />

            <div className="max-w-3xl mx-auto mt-2 xl:-mt-7">
                <Search />
            </div>
        </>
    )
}

export default App
