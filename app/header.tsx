import { Logo } from "./logo";
import { Navlinks } from "./navlinks";
import { UserSettings } from "./user-settings";

export async function Header() {
  return (

      <nav className="pr-10 pl-10 bg-black text-[#E7C7A1] flex list-none w-full items-center justify-beetween h-24 transition-all ">
        <Logo />
        <Navlinks />
        { <UserSettings />}
      </nav>

  )
}