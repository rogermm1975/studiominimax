
import { useState, useEffect } from 'react';

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setCompletion(currentProgress / scrollHeight);
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return completion;
};

export default useScrollProgress;
