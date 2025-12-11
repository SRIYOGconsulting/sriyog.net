import React, { useEffect, useCallback } from 'react';

const Lightbox = ({ data, setLightbox, lightbox, setIndex, index }) => {

  // Memoized close function
  const closeLightbox = useCallback(() => {
    setLightbox(false);
  }, [setLightbox]);

  // Memoized previous and next handlers
  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  }, [data.length, setIndex]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % data.length);
  }, [data.length, setIndex]);

  
  useEffect(() => {
    if (lightbox) {
      document.body.classList.remove('showScroll');
      document.body.classList.add('hideScroll');
    } else {
      document.body.classList.remove('hideScroll');
      document.body.classList.add('showScroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hideScroll');
      document.body.classList.add('showScroll');
    };
  }, [lightbox]);

  return (
    <>
      <button onClick={goPrev} className='fixed left-5 top-[44%] z-[9999] text-white text-7xl'>‹</button>
      <div className="fixed top-0 left-0 right-0 h-screen bg-black/100 z-[999] flex flex-col items-center justify-center">
        <button onClick={closeLightbox} className='absolute top-3 right-5 text-5xl rounded-full w-10 h-10 text-white'>×</button>
        <h1 className='text-white z-40 pb-8'>{index + 1}/{data.length}</h1>
        <img
          src={data[index].img}
          alt={index}
          className="max-w-[75%] max-h-[75%] rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
        /> 
      </div>
      <button onClick={goNext} className='fixed right-5 top-[44%] z-[9999] text-white text-7xl'>›</button>
    </>
  );
};

export default Lightbox;
