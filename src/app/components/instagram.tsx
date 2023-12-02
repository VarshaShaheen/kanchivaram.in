"use client"
import React, { useEffect } from 'react';

const CuratorFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.charset = 'UTF-8';
        script.src = 'https://cdn.curator.io/published/25965c47-aa72-4e55-a051-75640fc02741.js';

        // Append the script to the document body
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="curator-feed-default-feed-layout">
            <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">
                Powered by Curator.io
            </a>
        </div>
    );
};

export default CuratorFeed;

