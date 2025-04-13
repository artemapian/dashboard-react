'use client'
import { Widget } from "./widget"
import { useState } from 'react';
import { TaskIcon } from './icons/TaskIcon';
import { OpenIcon } from './icons/OpenIcon';
import { SearchIcon } from "./icons/SearchIcon";
import { WidgetComponents } from "./widget-components";

export interface Layout {
    i: string;
    key: number;
    x: number;
    y: number;
    w: number;
    h: number;
}
export default function PanelWidgets({isEdited, setIsEdited}: {isEdited: boolean, setIsEdited: (isEdited: boolean) => void}) {
    const [searchQuery, setSearchQuery] = useState('');
    const widgets = [
        { id: 1, text: "Task projects", icon: <TaskIcon /> },
        { id: 2, text: "Open Tasks" },
        { id: 3, text: "New Tasks" },
        { id: 4, text: "Due Today" },
        { id: 5, text: "Due This Week" },
        { id: 6, text: "Overdue Tasks" },
        { id: 7, text: "Red Flag Tasks" },
        { id: 8, text: "Delay Project Completion" },
        { id: 9, text: "Open Tasks by Health", icon: <OpenIcon /> },
        { id: 10, text: "Open Tasks by Priority", icon: <OpenIcon /> },
        { id: 11, text: "Open Tasks by Assignee", icon: <OpenIcon /> },
        { id: 12, text: "Approval Tasks", icon: <TaskIcon /> },
        { id: 13, text: "Review Tasks", icon: <TaskIcon /> },
        { id: 14, text: "Task Completion", icon: <TaskIcon /> },
        { id: 15, text: "Task Status", icon: <TaskIcon /> },
        { id: 16, text: "Task Deadlines", icon: <TaskIcon /> },
        { id: 17, text: "Task Dashboard", icon: <TaskIcon /> }
    ];

    const filteredWidgets = widgets.filter(widget => 
        widget.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [layout, setLayout] = useState<Layout[]>([]);
    return (
        <>
        {
            isEdited && (
            <div className="flex px-6 py-4 flex-col bg-white rounded-2xl h-auto min-h-[320px]">
                <p className='text-md font-semibold'>Manage Widgets</p>
                <div className="flex flex-col gap-4">
                    <div className="flex mt-4 gap-2">
                        <div className="flex justify-between w-full h-9 items-center border-1 border-gray-300 rounded-md">
                            <input 
                                className="hover:border-1 hover:border-blue-400 w-full outline-none border-r-1 rounded-l-md pl-3 py-4 h-full border-gray-300" 
                                type="text" 
                                placeholder="Search" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="flex items-center h-full px-3 bg-gray-100 cursor-pointer"><SearchIcon /></span>
                        </div>
                    </div>
                    <div className="flex flex-wrap max-h-[200px] mb-2 overflow-y-auto gap-3 pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {filteredWidgets.map(widget => (
                            <Widget
                                key={widget.id}
                                setLayout={setLayout}
                                widgetKey={widget.id}
                                text={widget.text}
                                image={widget.icon}
                                layout={layout}
                            />
                        ))}
                    </div>  
                </div>
            </div>
            ) 
        }
        {
            layout.length > 0 && (
                <WidgetComponents layout={layout} setLayout={setLayout}/>
            ) 
        }
        {
            !isEdited && layout.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-20">
                    <svg width="145" height="80" viewBox="0 0 146 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="18" width="130" height="61" rx="8" fill="#D8ECFF" stroke="#1890FF" strokeDasharray="8 8"></rect><rect y="9.51953" width="129.986" height="60.8" rx="8" transform="rotate(-4.19979 0 9.51953)" fill="#1890FF"></rect><path d="M32.4372 17.8322C32.1957 16.1931 33.3316 14.6473 34.9883 14.6259C38.5302 14.5802 42.0481 15.3715 45.2488 16.9536C49.35 18.9808 52.7358 22.2099 54.9548 26.2106C57.1738 30.2112 58.1205 34.7932 57.6688 39.3457C57.2171 43.8981 55.3884 48.2047 52.4265 51.6913C49.4646 55.1779 45.5103 57.6788 41.0907 58.8605C36.6712 60.0422 31.9964 59.8486 27.6896 58.3056C23.3829 56.7625 19.6489 53.9433 16.9854 50.2238C14.9066 47.3209 13.5571 43.9773 13.0296 40.4745C12.7829 38.8361 14.1247 37.4653 15.7813 37.4386L19.8113 37.3736C21.4679 37.3469 22.7972 38.6877 23.2179 40.2902C23.6018 41.7526 24.2506 43.1411 25.1406 44.3839C26.6167 46.4453 28.6861 48.0077 31.0729 48.8629C33.4597 49.718 36.0504 49.8253 38.4998 49.1704C40.9491 48.5155 43.1406 47.1295 44.7821 45.1972C46.4235 43.265 47.437 40.8783 47.6873 38.3553C47.9377 35.8323 47.413 33.293 46.1832 31.0758C44.9534 28.8587 43.077 27.0691 40.8042 25.9456C39.4338 25.2683 37.9587 24.8525 36.4535 24.71C34.804 24.5539 33.2659 23.4589 33.0245 21.8197L32.4372 17.8322Z" fill="#F3F4F7"></path><path d="M15.8588 35.3586C14.2088 35.2086 12.9728 33.7417 13.3408 32.1262C14.1348 28.6411 15.7515 25.3802 18.0734 22.6249C20.3953 19.8696 23.335 17.7237 26.6352 16.3506C28.1649 15.7141 29.8201 16.6835 30.2476 18.2843L31.2875 22.1783C31.715 23.7791 30.7364 25.3937 29.2836 26.1904C27.9423 26.9258 26.7403 27.9059 25.7435 29.0886C24.7468 30.2714 23.9846 31.6222 23.4871 33.0687C22.9483 34.6355 21.5228 35.8735 19.8728 35.7235L15.8588 35.3586Z" fill="#F3F4F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M74.6814 21.6943C71.9274 21.8965 69.8588 24.293 70.061 27.047C70.2632 29.801 72.6597 31.8696 75.4137 31.6674L109.322 29.1774C112.076 28.9752 114.145 26.5787 113.943 23.8247C113.741 21.0707 111.344 19.002 108.59 19.2043L74.6814 21.6943ZM75.9264 38.6486C73.1724 38.8508 71.1038 41.2473 71.306 44.0013C71.5082 46.7554 73.9047 48.824 76.6587 48.6217L88.6265 47.7429C91.3805 47.5407 93.4491 45.1442 93.2469 42.3902C93.0447 39.6362 90.6482 37.5676 87.8942 37.7698L75.9264 38.6486Z" fill="#F3F4F7"></path></svg>
                        <p className="font-semibold text-xl mt-7">No widgets added yet</p>
                        <p className='text-sm mt-3'>Click {'"Manage Widgets"'} to add a new widget</p>
                    <button onClick={() => setIsEdited(true)} className="bg-blue-500 cursor-pointer text-white px-4 text-[15px] py-2 rounded-md mt-6">Edit Dashboard</button>
                </div>
            )
        }
        </>
    )
}
