'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type VideoData = {
    src: string;
    isVisible: boolean;
    isLoaded?: boolean; // Новое поле (необязательное)

};

type VideoContextType = {
    videos: VideoData[];
    setVideos: React.Dispatch<React.SetStateAction<VideoData[]>>;
};

const VideoContext = createContext<VideoContextType>({
    videos: [],
    setVideos: () => {},
});

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
    const [videos, setVideos] = useState<VideoData[]>([]);

    // Восстановление данных из localStorage при загрузке
    useEffect(() => {
        const savedVideos = localStorage.getItem('cachedVideos');
        if (savedVideos) {
            setVideos(JSON.parse(savedVideos));
        }
    }, []);

    // Сохранение данных в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('cachedVideos', JSON.stringify(videos));
    }, [videos]);

    return (
        <VideoContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideoContext = () => useContext(VideoContext);
