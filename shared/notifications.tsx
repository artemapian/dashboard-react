import { X } from "lucide-react";
import {Notification} from './header';
import { cn } from "@/lib/utils";
export const NoticeNotifications = ({ notifications, handleCloseClick, disabledLanguage }: { 
    notifications: Notification[]; 
    handleCloseClick: (e: React.MouseEvent, id: number) => void;
    disabledLanguage: boolean;
  }) => {
    return (
        <>
            <div className={cn("fixed flex flex-col gap-2 z-50", notifications[0]?.languageIs ? 'right-6 top-5' : ' left-6 top-5')}>
                {notifications.map((notification) => (
                <div
                    key={notification.id}
                    style={{
                    animation: '0.3s ease-out slideIn'
                }}
                className="bg-white rounded-lg shadow-lg border border-gray-100 w-100"
            >
                    <div className="flex items-center justify-between p-5 border-b border-gray-100">
                        <div className="flex gap-4">
                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", notification?.languageIs ? 'bg-red-500' : 'bg-orange-400')}>
                                <span className="text-white">{notification?.languageIs ? <X size={15} /> : '!'}</span>
                            </div>
                            <span className="font-medium">{notification?.languageIs ? 'Failed to update profile locale' : 'Notifications'} <p className="pt-2 text-gray-600">{notification?.languageIs ? 'Network Error' : 'Not implemented yet!'}</p></span>
                        </div>
                        <button 
                            onClick={(e) => disabledLanguage ? null : handleCloseClick(e, notification.id)}
                            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
                ))}
            </div>
            <style jsx>{`
            @keyframes slideIn {
              from {
                transform: ${notifications[0]?.languageIs ? 'translateX(40px)' : 'translateX(-40px)'};
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }`}
            </style>
        </>         
    )
}