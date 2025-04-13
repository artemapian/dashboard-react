import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ChevronDownIcon } from "lucide-react"
const EnglishIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full" width='25px' height='25px' viewBox="0 0 512 512"><g><path fill="#eee" d="m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"></path><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"></path><path fill="#d80027" d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"></path></g></svg>
)}
const GermanIcon = () => {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full" width='25px' height='25px' viewBox="0 0 512 512"><g><path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z"></path><path fill="#d80027" d="m0 167 255-23 257 23v178H0z"></path><path fill="#333" d="M0 0h512v167H0z"></path></g></svg>
)}
const ItalianIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full" width='25px' height='25px' viewBox="0 0 512 512"><g><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"></path><path fill="#6da544" d="M0 0h167v512H0z"></path><path fill="#d80027" d="M345 0h167v512H345z"></path></g></svg>
    )
}
const FrenchIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full" width='25px' height='25px' viewBox="0 0 512 512"><g><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"></path><path fill="#0052b4" d="M0 0h167v512H0z"></path><path fill="#d80027" d="M345 0h167v512H345z"></path></g></svg>
        )
}
const RussianIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full" width='25px' height='25px' viewBox="0 0 512 512"><g><path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"></path><path fill="#eee" d="M512 0v170H0V0Z"></path><path fill="#d80027" d="M512 342v170H0V342Z"></path></g></svg>
        )
}

export const MenuBar = ({handleBellClick, language}: {handleBellClick: (e: React.MouseEvent, language: boolean) => void, language: boolean}) => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger><div className="flex w-full items-center gap-1"><EnglishIcon /><ChevronDownIcon className="w-4 h-4 text-gray-400" /></div></MenubarTrigger>
                <MenubarContent>
                    <MenubarItem active = {true}><EnglishIcon />English</MenubarItem>
                    <MenubarItem onClick={(e: React.MouseEvent) => !language && handleBellClick(e, true)}><GermanIcon/>German</MenubarItem>
                    <MenubarItem onClick={(e: React.MouseEvent) => !language && handleBellClick(e, true)}><ItalianIcon />Italian</MenubarItem>
                    <MenubarItem onClick={(e: React.MouseEvent) => !language && handleBellClick(e, true)}><FrenchIcon/>French</MenubarItem>
                    <MenubarItem onClick={(e: React.MouseEvent) => !language && handleBellClick(e, true)}><RussianIcon />Russian</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}