import React from 'react';

const CompartilharWhatsApp = () => {
    const texto = 'Olá, este é um texto de exemplo para compartilhar no WhatsApp!';

    const handleShare = () => {
        const whatsappUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button onClick={handleShare}>
            Compartilhar no WhatsApp Web
        </button>
    );
};

export default CompartilharWhatsApp;
