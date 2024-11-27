import React from 'react';

const CookieConsent: React.FC = () => {
    return (
        <div className="fixed bottom-6 left-6 right-6 md:right-auto bg-dark-bg text-white p-4 rounded-lg shadow-lg z-40">
            <p className="text-sm">
                Этот сайт использует файлы cookie для улучшения вашего взаимодействия. Продолжая использовать сайт, вы соглашаетесь с нашей политикой.
            </p>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                Принять
            </button>
        </div>
    );
};

export default CookieConsent;
