import { PlusIcon } from "lucide-react"
import {ChevronDownIcon} from 'lucide-react'
import { SearchIcon } from "./icons/SearchIcon"
export default function Filters({isEdited, setIsEdited}: {isEdited: boolean, setIsEdited: (isEdited: boolean) => void}) {
    
    const EditIcon = () => {
        return <svg width="15px" height="15px" viewBox="0 0 16 17" color="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.2075 5.08572L11.4144 2.29322C11.3215 2.20034 11.2113 2.12666 11.0899 2.07639C10.9686 2.02612 10.8385 2.00024 10.7072 2.00024C10.5759 2.00024 10.4458 2.02612 10.3245 2.07639C10.2031 2.12666 10.0929 2.20034 10 2.29322L2.29313 10.0001C2.19987 10.0926 2.12593 10.2028 2.0756 10.3241C2.02528 10.4455 1.99959 10.5756 2.00001 10.707V13.5001C2.00001 13.7653 2.10536 14.0197 2.2929 14.2072C2.48043 14.3947 2.73479 14.5001 3.00001 14.5001H13.5C13.6326 14.5001 13.7598 14.4474 13.8536 14.3536C13.9473 14.2599 14 14.1327 14 14.0001C14 13.8675 13.9473 13.7403 13.8536 13.6465C13.7598 13.5528 13.6326 13.5001 13.5 13.5001H7.20751L14.2075 6.50009C14.3004 6.40723 14.3741 6.29698 14.4243 6.17564C14.4746 6.0543 14.5005 5.92425 14.5005 5.79291C14.5005 5.66156 14.4746 5.53151 14.4243 5.41017C14.3741 5.28883 14.3004 5.17858 14.2075 5.08572ZM5.79313 13.5001H3.00001V10.707L8.50001 5.20697L11.2931 8.00009L5.79313 13.5001ZM12 7.29322L9.20751 4.50009L10.7075 3.00009L13.5 5.79322L12 7.29322Z" fill="currentColor"></path></svg>
    }
    const MainIcon = () => {
        return <svg width="15px" height="15px" viewBox="0 0 24 24" color="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M21 18C21 18.5967 20.7629 19.169 20.341 19.591C19.919 20.0129 19.3467 20.25 18.75 20.25H8.25C8.84674 20.25 9.41903 20.0129 9.84099 19.591C10.2629 19.169 10.5 18.5967 10.5 18C10.5 17.0625 9.75 16.5 9.75 16.5H20.25C20.25 16.5 21 17.0625 21 18Z" fill="currentColor"></path><path d="M9 9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9H15.75C15.9489 9 16.1397 9.07902 16.2803 9.21967C16.421 9.36032 16.5 9.55109 16.5 9.75C16.5 9.94891 16.421 10.1397 16.2803 10.2803C16.1397 10.421 15.9489 10.5 15.75 10.5H9.75C9.55109 10.5 9.36032 10.421 9.21967 10.2803C9.07902 10.1397 9 9.94891 9 9.75ZM9.75 13.5H15.75C15.9489 13.5 16.1397 13.421 16.2803 13.2803C16.421 13.1397 16.5 12.9489 16.5 12.75C16.5 12.5511 16.421 12.3603 16.2803 12.2197C16.1397 12.079 15.9489 12 15.75 12H9.75C9.55109 12 9.36032 12.079 9.21967 12.2197C9.07902 12.3603 9 12.5511 9 12.75C9 12.9489 9.07902 13.1397 9.21967 13.2803C9.36032 13.421 9.55109 13.5 9.75 13.5ZM21.75 18C21.75 18.7956 21.4339 19.5587 20.8713 20.1213C20.3087 20.6839 19.5456 21 18.75 21H8.25C7.45435 21 6.69129 20.6839 6.12868 20.1213C5.56607 19.5587 5.25 18.7956 5.25 18V6C5.25 5.60218 5.09196 5.22064 4.81066 4.93934C4.52936 4.65804 4.14782 4.5 3.75 4.5C3.35218 4.5 2.97064 4.65804 2.68934 4.93934C2.40804 5.22064 2.25 5.60218 2.25 6C2.25 6.53813 2.70281 6.90188 2.7075 6.90563C2.83163 7.00115 2.92273 7.13313 2.96804 7.28306C3.01334 7.43299 3.01057 7.59335 2.96011 7.74162C2.90965 7.8899 2.81404 8.01866 2.68668 8.10983C2.55933 8.201 2.40663 8.25002 2.25 8.25C2.08781 8.25028 1.93003 8.19725 1.80094 8.09906C1.69219 8.01937 0.75 7.27594 0.75 6C0.75 5.20435 1.06607 4.44129 1.62868 3.87868C2.19129 3.31607 2.95435 3 3.75 3H16.5C17.2956 3 18.0587 3.31607 18.6213 3.87868C19.1839 4.44129 19.5 5.20435 19.5 6V15.75H20.25C20.4123 15.75 20.5702 15.8026 20.7 15.9C20.8125 15.9806 21.75 16.7241 21.75 18ZM9.02437 16.2638C9.07562 16.1125 9.17342 15.9813 9.30376 15.889C9.4341 15.7968 9.59031 15.7481 9.75 15.75H18V6C18 5.60218 17.842 5.22064 17.5607 4.93934C17.2794 4.65804 16.8978 4.5 16.5 4.5H6.34594C6.61119 4.95535 6.75064 5.47302 6.75 6V18C6.75 18.3978 6.90804 18.7794 7.18934 19.0607C7.47064 19.342 7.85218 19.5 8.25 19.5C8.64782 19.5 9.02936 19.342 9.31066 19.0607C9.59196 18.7794 9.75 18.3978 9.75 18C9.75 17.4619 9.29719 17.0981 9.2925 17.0944C9.16469 17.0029 9.06963 16.8729 9.02136 16.7233C8.97308 16.5738 8.97414 16.4127 9.02437 16.2638ZM20.25 18C20.2406 17.7221 20.1334 17.4565 19.9472 17.25H11.1347C11.2101 17.4929 11.2483 17.7457 11.2481 18C11.2488 18.5267 11.1101 19.0443 10.8459 19.5H18.75C19.1478 19.5 19.5294 19.342 19.8107 19.0607C20.092 18.7794 20.25 18.3978 20.25 18Z" fill="currentColor"></path></svg>
    }
    return (
        <div className="flex min-h-[120px] bg-white rounded-2xl justify-between px-6 py-4">
            <div className="flex gap-4 h-20">
                <h1 className="flex text-md font-semibold mt-2">Filters</h1>
                <div className="flex flex-col gap-3 ">
                    <div className="flex justify-between w-full h-9 items-center border-1 border-gray-300 rounded-md">
                       <input className="hover:border-1 focus:border-1 focus:border-blue-400 hover:border-blue-400 focus:shadow-sm focus:shadow-blue-200 outline-none border-r-1 rounded-l-md pl-3 py-4 h-full border-gray-300" type="text" placeholder="Search" />
                        <span className="flex items-center h-full px-3 bg-gray-100 cursor-pointer"><SearchIcon /></span>
                    </div>
                    <button className="flex hover:border-blue-400 hover:text-blue-400 text-sm gap-2 cursor-pointer h-8 w-27 justify-center items-center border-1 border-gray-300 rounded-md">
                        <PlusIcon size={19} />
                        Add Filter
                    </button>
                </div>
            </div>
            <div className="flex gap-2">
                {isEdited ? (
                <>
                <button onClick={() => setIsEdited(false)} className="flex hover:border-blue-400 hover:text-blue-400 text-sm gap-2 px-2 cursor-pointer h-8 w-25 justify-center items-center border-1 border-gray-300 rounded-md">
                    Cancel
                </button>
                <button onClick={() => setIsEdited(false)} className="flex hover:bg-blue-400 bg-blue-500 text-white text-sm gap-2 px-2 cursor-pointer h-8 w-32 justify-center items-center border-1 rounded-md">
                    Save Changes
                </button>
                </>
                ) : (
                    <button onClick={() => setIsEdited(true)} className="flex hover:border-blue-400 hover:text-blue-400 text-sm gap-2 px-2 cursor-pointer h-8 w-38 justify-center items-center border-1 border-gray-300 rounded-md">
                    <EditIcon />
                    Edit Dashboard
                </button>
                )}
                <button className="flex hover:bg-gray-100 text-sm gap-2 px-2 cursor-pointer h-8 w-46 justify-center items-center border-1 border-gray-300 rounded-md">
                    <MainIcon />
                    Map Prohect view
                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </button>
            </div>
        </div>
    )
}
