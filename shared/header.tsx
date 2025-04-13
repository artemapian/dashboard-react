'use client'
import { useState } from 'react';
import { Bell, Search } from "lucide-react";
import {NoticeNotifications} from './notifications';
import { MenuBar } from './menubar';

export interface Notification {
    id: number;
    languageIs: boolean;
  }

export default function Header() {
    /**Функции для уведомлений изменения языка и уведомлений */
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [disabledLanguage, setDisabledLanguage] = useState<boolean>(false);
    const [disabledNotifications, setDisabledNotifications] = useState<boolean>(false);
    const handleBellClick = (e: React.MouseEvent, language: boolean) => {
        if (language) {
            setDisabledNotifications(true);
        } else {
            setDisabledLanguage(true);
        }
        setTimeout(() => {
            e.stopPropagation();
            const newNotification = {
                id: Date.now(),
                languageIs: language
            };
            setNotifications(prev => [newNotification, ...prev].slice(0, 3));
            setTimeout(() => {
                setNotifications(prev => prev.filter(notif => notif.id !== newNotification.id));
                if(notifications.length === 0) {
                    setDisabledNotifications(false);
                    setDisabledLanguage(false);
                }
            }, 3000);
        }, 1000);
    };

    const handleCloseClick = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        setNotifications(prev => prev.filter(notif => notif.id !== id));
        if(notifications.length === 0) {
            setDisabledNotifications(false);
            setDisabledLanguage(false);
        }
    };
    
    return (        
        <div className = 'justify-between items-center flex'>
            <div className="flex items-center gap-3 rounded-2xl h-11 p-4 w-[360px] shadow-xs bg-white">
                <Search size={20} /> 
                <input type="text" placeholder="Search anything | LIQN" className="outline-none"/>
            </div>
            <div className="flex p-2 w-[160px] items-center justify-between">
                <div className="flex items-center h-[25px] border-x border-gray-300 px-2">
                    <span 
                        className="relative flex items-center justify-center cursor-pointer w-13 h-13 hover:bg-gray-200 rounded-full"
                        onClick={(e) => !disabledNotifications && handleBellClick(e, false)}
                    >
                        <Bell className="text-gray-400" size={25} />
                        <div className="absolute -top-0 right-1 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[#3385ff] text-xs font-medium text-white">
                            12
                        </div>
                    </span>
                </div>
                <MenuBar handleBellClick={handleBellClick} language={disabledLanguage}/>
            </div>
            {/* Уведомления */}
            <NoticeNotifications notifications={notifications} handleCloseClick={handleCloseClick} disabledLanguage={disabledLanguage}/>
        </div>
        
    )
}