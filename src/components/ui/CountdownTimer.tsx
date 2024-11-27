import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        const year = new Date().getFullYear();
        const difference = +new Date(`January 1, ${year + 1} 00:00:00`) - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                'Дней': Math.floor(difference / (1000 * 60 * 60 * 24)),
                'Часов': Math.floor((difference / (1000 * 60 * 60)) % 24),
                'Минут': Math.floor((difference / 1000 / 60) % 60),
                'Секунд': Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div
                key={interval}
                className="flex flex-col items-center justify-center bg-light-green text-dark-bg rounded-lg shadow-lg w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2"
            >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{timeLeft[interval]}</div>
                <div className="text-sm md:text-base font-semibold">{interval}</div>
            </div>
        );
    });

    return (
        <div className="relative flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-6 p-4 bg-forest-green rounded-xl shadow-xl">
            {/* Таймер */}
            {timerComponents.length ? (
                timerComponents
            ) : (
                <span className="text-xl font-bold text-light-green">С Новым годом!</span>
            )}

            {/* PNG Деда Мороза */}
            <img
                src={require('../../assets/Remove-bg.ai_1732636937213.png')}
                alt="Дед Мороз"
                className="absolute right-0 bottom-0 md:right-4 lg:right-8 w-24 md:w-32 lg:w-40"
            />
        </div>
    );
};

export default CountdownTimer;
