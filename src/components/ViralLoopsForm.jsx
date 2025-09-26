import { useState, useEffect } from "react";

const ViralLoopsForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for Viral Loops events
    const handleViralLoopsEvent = (event) => {
      if (event.detail && event.detail.type) {
        switch (event.detail.type) {
          case 'user_subscribed':
            setIsSuccess(true);
            setIsLoading(false);
            break;
          case 'form_submitted':
            setIsLoading(true);
            break;
          case 'error':
            setIsLoading(false);
            break;
        }
      }
    };

    window.addEventListener('vl-event', handleViralLoopsEvent);
    
    return () => {
      window.removeEventListener('vl-event', handleViralLoopsEvent);
    };
  }, []);

  const handleReset = () => {
    setIsSuccess(false);
    setIsLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto relative z-10 px-4">
      {/* Glowing Border Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-2xl blur opacity-20 animate-pulse"></div>
      
      <div className="relative bg-n-8/40 backdrop-blur-xl rounded-2xl p-3 border border-n-6/30">
        {isSuccess ? (
          <div className="bg-gradient-to-r from-color-1/10 to-color-5/10 border border-color-1/30 rounded-xl p-6 text-center relative overflow-hidden">
            {/* Success Animation Particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`success-${i}`}
                  className="absolute w-1 h-1 bg-color-1 rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
            <div className="text-4xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-xl font-bold text-color-1 mb-2 drop-shadow-lg">Welcome to Virtura AI!</h3>
            <p className="text-n-3 drop-shadow mb-4">You are on the waitlist!</p>
            <p className="text-sm text-n-4 mb-4">Share your unique link to climb the leaderboard and win prizes!</p>
            <button 
              onClick={handleReset}
              className="text-color-1 underline hover:text-color-5 transition-colors"
            >
              Join another email
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Viral Loops Embed Form */}
            <div className="viral-loops-form-container">
              <form-widget ucid='NQzMMcmWkzfMxBYRr6VqTUVjB9o'></form-widget>
            </div>
            
            {/* Loading State Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-n-8/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-color-1 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-color-1 font-semibold">Joining waitlist...</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViralLoopsForm;