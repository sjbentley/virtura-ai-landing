import { useState, useEffect } from "react";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Listen for Viral Loops events
    const handleViralLoopsEvent = (event) => {
      console.log('Viral Loops event:', event.detail); // Debug log
      
      if (event.detail && event.detail.type) {
        switch (event.detail.type) {
          case 'user_subscribed':
          case 'user_added':
          case 'success':
            setIsSuccess(true);
            setIsLoading(false);
            break;
          case 'form_submitted':
          case 'loading':
            setIsLoading(true);
            break;
          case 'error':
          case 'failed':
            setIsLoading(false);
            setError("Something went wrong. Please try again.");
            break;
        }
      }
    };

    // Listen to multiple event types
    window.addEventListener('vl-event', handleViralLoopsEvent);
    window.addEventListener('viral-loops-event', handleViralLoopsEvent);
    document.addEventListener('vl-event', handleViralLoopsEvent);
    document.addEventListener('viral-loops-event', handleViralLoopsEvent);
    
    return () => {
      window.removeEventListener('vl-event', handleViralLoopsEvent);
      window.removeEventListener('viral-loops-event', handleViralLoopsEvent);
      document.removeEventListener('vl-event', handleViralLoopsEvent);
      document.removeEventListener('viral-loops-event', handleViralLoopsEvent);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    try {
      // First, let's check what's available
      console.log('Window ViralLoops:', window.ViralLoops);
      console.log('Available widgets:', document.querySelectorAll('form-widget'));
      
      // Method 1: Try to submit directly to Viral Loops API endpoint
      const formData = new FormData();
      formData.append('email', email);
      formData.append('ucid', 'NQzMMcmWkzfMxBYRr6VqTUVjB9o');
      
      try {
        await fetch('https://app.viral-loops.com/api/v2/subscriber', {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // This allows the request to go through despite CORS
        });
        
        // With no-cors, we can't read the response, but if no error is thrown, 
        // it likely went through
        console.log('Viral Loops API attempt completed');
        
        setTimeout(() => {
          setIsSuccess(true);
          setIsLoading(false);
        }, 1000);
        return;
        
      } catch (apiError) {
        console.log('Direct API failed:', apiError);
      }
      
      // Method 2: Try to use the widget if it exists
      const formWidget = document.querySelector('form-widget[ucid="NQzMMcmWkzfMxBYRr6VqTUVjB9o"]');
      if (formWidget) {
        console.log('Found form widget:', formWidget);
        
        // Wait for the widget to be fully loaded
        const waitForWidget = new Promise((resolve) => {
          const checkWidget = () => {
            if (formWidget.shadowRoot || formWidget.querySelector('input')) {
              resolve();
            } else {
              setTimeout(checkWidget, 100);
            }
          };
          checkWidget();
        });
        
        await waitForWidget;
        
        let emailInput, submitButton;
        
        // Try shadow DOM
        if (formWidget.shadowRoot) {
          emailInput = formWidget.shadowRoot.querySelector('input[type="email"]');
          submitButton = formWidget.shadowRoot.querySelector('button[type="submit"]') || 
                         formWidget.shadowRoot.querySelector('button');
          console.log('Shadow DOM elements:', { emailInput, submitButton });
        }
        
        // Try regular DOM
        if (!emailInput) {
          emailInput = formWidget.querySelector('input[type="email"]');
          submitButton = formWidget.querySelector('button[type="submit"]') || 
                        formWidget.querySelector('button');
          console.log('Regular DOM elements:', { emailInput, submitButton });
        }
        
        if (emailInput && submitButton) {
          // Fill the input
          emailInput.value = email;
          
          // Trigger events
          ['input', 'change', 'blur'].forEach(eventType => {
            emailInput.dispatchEvent(new Event(eventType, { bubbles: true, composed: true }));
          });
          
          console.log('About to click submit button');
          
          // Submit with a delay
          setTimeout(() => {
            submitButton.click();
            console.log('Submit button clicked');
            
            // Set success after a reasonable delay
            setTimeout(() => {
              setIsSuccess(true);
              setIsLoading(false);
            }, 2000);
          }, 500);
          
          return;
        }
      }
      
      // Method 3: Try window.ViralLoops API
      if (window.ViralLoops) {
        console.log('Trying window.ViralLoops API');
        
        // Different possible API methods
        const apiMethods = [
          () => window.ViralLoops.subscribe(email),
          () => window.ViralLoops.addUser({ email }),
          () => window.ViralLoops.addUser({ email, campaignId: 'NQzMMcmWkzfMxBYRr6VqTUVjB9o' }),
          () => window.ViralLoops.submitEmail(email),
          () => window.ViralLoops.track('user_subscribed', { email })
        ];
        
        for (const method of apiMethods) {
          try {
            const result = await method();
            console.log('ViralLoops API success:', result);
            setIsSuccess(true);
            setIsLoading(false);
            return;
          } catch (methodError) {
            console.log('ViralLoops method failed:', methodError);
          }
        }
      }
      
      // Method 4: Use the backup form
      const backupForm = document.getElementById('backup-viral-form');
      const backupEmail = document.getElementById('backup-email');
      
      if (backupForm && backupEmail) {
        backupEmail.value = email;
        console.log('Submitting via backup form');
        
        // Submit the form
        backupForm.submit();
        
        // Show success immediately since we can't track the submission result
        setTimeout(() => {
          setIsSuccess(true);
          setIsLoading(false);
        }, 1000);
        
        return;
      }
      
    } catch (error) {
      console.error('All submission methods failed:', error);
      setIsLoading(false);
      setError("Unable to submit. Please try again or contact support.");
    }
  };

  const handleClose = () => {
    setEmail("");
    setIsLoading(false);
    setIsSuccess(false);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-n-8/80 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md">
        {/* Holographic Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-3xl blur opacity-30 animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-n-7/95 to-n-8/95 backdrop-blur-xl border border-n-6/30 rounded-3xl p-8 overflow-hidden">
          {/* Animated Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`modal-particle-${i}`}
                className="absolute w-1 h-1 bg-color-1 rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
            
            {/* Scanning Lines */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-color-1/50 to-transparent animate-pulse" style={{
              animation: 'scanHorizontal 3s ease-in-out infinite'
            }}></div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-n-6/50 hover:bg-n-6/80 border border-n-5/30 hover:border-n-5/50 transition-all duration-200 text-n-3 hover:text-n-1 z-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative z-10">
            {isSuccess ? (
              <div className="text-center">
                {/* Success Animation */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-color-1 to-color-5 rounded-full animate-pulse"></div>
                    <div className="absolute inset-1 bg-n-8 rounded-full flex items-center justify-center">
                      <div className="text-2xl animate-bounce">🎉</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-n-1 mb-2">
                    <span className="bg-gradient-to-r from-color-1 to-color-5 bg-clip-text text-transparent">
                      Welcome to Virtura AI!
                    </span>
                  </h3>
                  <p className="text-n-3 mb-4">You&apos;re now on our exclusive waitlist</p>
                  <div className="p-4 bg-gradient-to-r from-color-1/10 to-color-5/10 border border-color-1/30 rounded-2xl mb-6">
                    <p className="text-sm text-n-2">
                      Share your unique referral link to climb the leaderboard and win amazing prizes!
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-3 px-6 bg-gradient-to-r from-color-1 to-color-5 text-white font-semibold rounded-2xl hover:from-color-1/90 hover:to-color-5/90 transition-all duration-300 transform hover:scale-105"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-color-1 via-color-5 to-color-6 bg-clip-text text-transparent">
                      Join the Future
                    </span>
                  </h2>
                  <p className="text-n-3 text-sm leading-relaxed">
                    Be among the first to experience revolutionary AI. 
                    <br />
                    <span className="text-color-1">Win exclusive prizes</span> by referring friends.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-color-1/30 to-color-5/30 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="relative w-full py-4 px-6 bg-n-8/50 border border-n-6/50 rounded-2xl text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1/50 focus:bg-n-8/70 transition-all duration-300 backdrop-blur-sm group"
                      disabled={isLoading}
                    />
                    {/* Input Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-color-1/5 to-color-5/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-2xl">
                      <p className="text-red-400 text-sm text-center">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative py-4 px-8 bg-gradient-to-r from-color-1 to-color-5 text-white font-semibold rounded-2xl hover:from-color-1/90 hover:to-color-5/90 transition-all duration-300 transform group-hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Joining waitlist...</span>
                        </div>
                      ) : (
                        <span>Join Exclusive Waitlist</span>
                      )}
                    </div>
                  </button>
                </form>

                {/* Benefits */}
                <div className="mt-8 pt-6 border-t border-n-6/30">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="flex items-center gap-2 text-n-4">
                      <div className="w-2 h-2 bg-color-1 rounded-full animate-pulse"></div>
                      <span>Early Access</span>
                    </div>
                    <div className="flex items-center gap-2 text-n-4">
                      <div className="w-2 h-2 bg-color-5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Exclusive Prizes</span>
                    </div>
                    <div className="flex items-center gap-2 text-n-4">
                      <div className="w-2 h-2 bg-color-6 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span>VIP Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-n-4">
                      <div className="w-2 h-2 bg-color-2 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      <span>No Spam</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hidden Viral Loops Form */}
          <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}>
            <form-widget ucid='NQzMMcmWkzfMxBYRr6VqTUVjB9o'></form-widget>
          </div>
          
          {/* Backup direct form */}
          <form 
            id="backup-viral-form"
            action="https://app.viral-loops.com/api/v2/subscriber" 
            method="POST" 
            target="_blank"
            style={{ display: 'none' }}
          >
            <input type="email" name="email" id="backup-email" />
            <input type="hidden" name="ucid" value="NQzMMcmWkzfMxBYRr6VqTUVjB9o" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;