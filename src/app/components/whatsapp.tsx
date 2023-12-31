"use client";
import React, { useState } from 'react';
import Image from "next/image"; // Import your CSS

const WhatsAppWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="whatsapp-widget">
            <div className={`chat-box ${isOpen ? 'open' : ''}`}>
                <div className="whatsapp-header">
                    <div className="whatsapp-kanchivaram-logo">
                        <Image
                            src="/logo.png"
                            alt="Kanchivaram Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="whatsapp-header-content">
                        <h5>Kanchivaram</h5>
                        <p>Typically replies in minutes</p>
                    </div>
                </div>
                <div className='chat-bubble'>
                    <p>Hi, how may I help you?</p>
                </div>
                <div className = "whatsapp-footer">
                    <a href="https://wa.me/+918921243414" target="_blank" rel="noopener noreferrer">
                        <button className="start-chat-button">Start Chat</button>
                    </a>
                </div>
            </div>
            <div className="logo-container" onClick={handleOpen}>
               <Image
                   src="/whatsapp-widget/whatsapp-logo.png"
                   alt="WhatsApp Logo"
                     width={50}
                        height={50}
               />
            </div>
        </div>
    );
};

export default WhatsAppWidget;
