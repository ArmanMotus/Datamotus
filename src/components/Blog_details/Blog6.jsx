import React, { useEffect, useRef } from 'react';

const Article_6 = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.frameHeight) {
        iframeRef.current.style.height = `${event.data.frameHeight}px`;
      }

      if (event.data && event.data.scrollReactAppToTop) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    const sendHeight = () => {
      const height = document.body.scrollHeight;
      window.parent.postMessage({ frameHeight: height }, '*');
    };

    sendHeight();

    window.addEventListener('resize', sendHeight);

    return () => {
      window.removeEventListener('resize', sendHeight);
    };
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        src="https://datamotusblog.netlify.app/notes/2020/2019-10-15-propensity-score-matching/"
        width="100%"
        height="1000"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="1"
      ></iframe>
    </div>
  );
};

export default Article_6;
