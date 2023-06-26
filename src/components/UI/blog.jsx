import React, { useEffect, useRef } from 'react';
import '../../styles/blog.css';

const Blog = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleMessage = (event) => {
            if (typeof event.data === 'object' && event.data.frameHeight) {
                iframeRef.current.style.height = `${event.data.frameHeight}px`;
            }
        }

        window.addEventListener('message', handleMessage);
        
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div style={{width: "100%", overflow: 'hidden'}}>
            <iframe
                ref={iframeRef}
                src="https://datamotusblog.netlify.app/"
                width="100%"
                height="1000"
                frameBorder="0"
                // scrolling="no"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="1"
            ></iframe>
        </div>
    )
}
export default Blog;
