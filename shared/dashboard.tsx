'use client'
import { useState } from "react";
import Filters from "./filters";
import PanelWidgets from "./panel-widgets";
export default function Dashboard() {
    const [isEdited, setIsEdited] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            <Filters setIsEdited = {setIsEdited} isEdited = {isEdited}/>
            <PanelWidgets setIsEdited = {setIsEdited} isEdited = {isEdited} />
        </div>
    )
}
