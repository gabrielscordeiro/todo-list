import { Logo } from "./Logo.tsx";

export const Header = () => {
    return (
        <header className="flex justify-center items-center h-24 xl:h-48 bg-gray-700">
            <Logo />
        </header>
    )
}