import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leaderboardData] = useState([
    { rank: 1, name: "Alex M.", referrals: 47, prize: "MacBook Pro M3" },
    { rank: 2, name: "Sarah K.", referrals: 32, prize: "Gaming Setup" },
    { rank: 3, name: "Mike R.", referrals: 28, prize: "Meta Quest Pro" },
    { rank: 4, name: "Emily C.", referrals: 24, prize: "iPhone 15 Pro" },
    { rank: 5, name: "David L.", referrals: 19, prize: "AirPods Pro" },
    { rank: 6, name: "Jessica W.", referrals: 15, prize: "iPad Pro" },
    { rank: 7, name: "Chris B.", referrals: 12, prize: "Apple Watch" },
    { rank: 8, name: "Amanda T.", referrals: 8, prize: "AirTag Pack" }
  ]);

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        
        <section className="pt-32 pb-20 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Futuristic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8"></div>
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-color-1/10 to-transparent animate-pulse"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-color-1 rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-color-5 rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Holographic Circles */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-color-1/20 to-color-5/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-color-5/20 to-color-6/20 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-color-1/10 to-color-6/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
          
          {/* Scanning Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-color-1 to-transparent opacity-60" style={{
              animation: 'scanLine 4s linear infinite'
            }}></div>
            <div className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-color-5 to-transparent opacity-40" style={{
              animation: 'scanColumn 6s linear infinite',
              animationDelay: '2s'
            }}></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Animated Title with Glow Effect */}
              <div className="relative mb-6">
                <h1 className="text-4xl sm:text-6xl font-bold text-n-1 mb-6 relative z-10 animate-pulse">
                  <span className="bg-gradient-to-r from-white via-color-1 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    Virtura AI
                  </span>
                </h1>
                <div className="absolute inset-0 text-4xl sm:text-6xl font-bold text-color-1 opacity-20 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}>
                  Virtura AI
                </div>
              </div>
              
              {/* Enhanced Subtitle with Motion */}
              <div className="relative mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold mb-8 relative z-10 whitespace-nowrap sm:whitespace-normal">
                  <span className="bg-gradient-to-r from-color-1 via-color-5 to-color-6 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                    Where Identity Evolves
                  </span>
                </h2>
                {/* Animated Underline */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-color-1 to-color-6" style={{
                  animation: 'expandWidth 3s ease-out infinite'
                }}></div>
              </div>

              {/* Enhanced Description */}
              <p className="text-lg sm:text-xl text-n-3 mb-8 max-w-3xl mx-auto relative z-10 drop-shadow-lg px-4">
                <span className="sm:hidden">Join our waitlist today for a chance to win amazing prizes.</span>
                <span className="hidden sm:inline">Join our waitlist today for a chance to win amazing prizes <br></br>and be one of the first to try our revolutionary software.</span>
              </p>

              {/* Enhanced Call-to-Action Button */}
              <div className="relative group">
                {/* Holographic Border Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-color-1/30 via-color-5/30 to-color-6/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative w-full max-w-md mx-auto block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative py-5 px-8 bg-gradient-to-r from-color-1 to-color-5 text-white font-bold text-lg rounded-2xl hover:from-color-1/90 hover:to-color-5/90 transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                    <div className="flex items-center justify-center gap-3">
                      <span>Join Waitlist</span>
                      <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                        <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                  </div>
                </button>

                {/* Floating Benefits */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    { text: "Win Prizes", delay: "0s" },
                    { text: "Early Access", delay: "0.2s" },
                    { text: "VIP Support", delay: "0.4s" }
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-n-8/40 backdrop-blur-xl border border-n-6/30 rounded-full text-n-3 hover:text-n-1 hover:border-color-1/30 transition-all duration-300"
                      style={{ animationDelay: benefit.delay }}
                    >
                      <span className="text-lg animate-pulse" style={{ animationDelay: benefit.delay }}>
                        {benefit.icon}
                      </span>
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Leaderboard Section with Futuristic Graphics & Motion */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-n-8/20 to-transparent relative overflow-hidden">
          {/* Futuristic Background Effects for Leaderboard */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-n-8/30 via-transparent to-n-7/30"></div>
            {/* Data Flow Lines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-10 left-20 w-32 h-px bg-gradient-to-r from-green-400 to-transparent animate-pulse"></div>
              <div className="absolute top-10 left-52 w-px h-20 bg-gradient-to-b from-green-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-30 left-52 w-24 h-px bg-gradient-to-r from-green-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="absolute bottom-20 right-20 w-28 h-px bg-gradient-to-l from-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-40 right-20 w-px h-16 bg-gradient-to-t from-blue-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Floating Data Nodes */}
            <div className="absolute top-16 left-16 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-32 right-24 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-24 left-32 w-4 h-4 border border-green-400/50 rounded-full animate-spin" style={{ animationDuration: '6s' }}></div>
            
            {/* Scanning Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
                animation: 'gridMove 15s linear infinite'
              }}></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 relative">
                {/* Enhanced Title with Holographic Effect */}
                <div className="relative">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-n-1 relative">
                      <span className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent drop-shadow-2xl">
                        Live Leaderboard
                      </span>
                    </h2>
                    <div className="relative">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex"></span>
                      <span className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></span>
                    </div>
                  </div>
                  {/* Holographic Shadow */}
                  <div className="absolute inset-0 text-3xl sm:text-4xl font-bold text-green-400 opacity-10 blur-sm animate-pulse" style={{ animationDelay: '1s' }}>
                    Live Leaderboard
                  </div>
                </div>
                
                <p className="text-n-3 text-lg drop-shadow-lg">Top referrers competing for prizes</p>
                
                {/* Data Stream Indicator */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-4 bg-green-400 rounded-full animate-pulse"
                        style={{ 
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.3 + (i * 0.15)
                        }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs text-green-400 font-mono">LIVE DATA</span>
                </div>
              </div>

              {/* Enhanced Leaderboard Container */}
              <div className="relative">
                {/* Holographic Border Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-green-400/20 rounded-3xl blur opacity-60 animate-pulse"></div>
                
                <div className="bg-gradient-to-br from-n-7/40 to-n-8/40 backdrop-blur-xl border border-n-6/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                  {/* Data Matrix Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 text-xs font-mono text-green-400 animate-pulse">
                      MATRIX_V2.1
                    </div>
                    <div className="absolute bottom-4 left-4 text-xs font-mono text-blue-400 animate-pulse" style={{ animationDelay: '1s' }}>
                      SYNC_ACTIVE
                    </div>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 animate-pulse" style={{
                    animation: 'scanHorizontal 3s ease-in-out infinite'
                  }}></div>
                  
                  <div className="space-y-3 relative z-10">
                    {leaderboardData.map((user, index) => {
                      const isTopThree = index < 3;
                      const rankColors = {
                        1: 'from-yellow-400 to-yellow-600',
                        2: 'from-gray-300 to-gray-500', 
                        3: 'from-amber-600 to-amber-800'
                      };
                      
                      return (
                        <div 
                          key={user.rank}
                          className={`
                            flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group
                            ${isTopThree 
                              ? 'bg-gradient-to-r from-color-1/15 to-color-5/15 border border-color-1/30 shadow-lg' 
                              : 'bg-n-7/30 border border-n-6/20 hover:bg-n-7/40'
                            }
                          `}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {/* Particle Trail Effect */}
                          <div className="absolute inset-0 overflow-hidden">
                            {isTopThree && [...Array(3)].map((_, i) => (
                              <div
                                key={`trail-${index}-${i}`}
                                className="absolute w-1 h-1 bg-color-1 rounded-full opacity-20 animate-ping"
                                style={{
                                  left: `${10 + Math.random() * 80}%`,
                                  top: `${20 + Math.random() * 60}%`,
                                  animationDelay: `${i * 0.8}s`
                                }}
                              ></div>
                            ))}
                          </div>
                          
                          {/* Data Flow Line */}
                          <div className={`absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          
                          <div className="flex items-center gap-4 relative z-10">
                            <div className={`
                              w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm relative overflow-hidden
                              ${isTopThree 
                                ? `bg-gradient-to-r ${rankColors[user.rank]} text-white shadow-xl` 
                                : 'bg-n-6/80 text-n-2 backdrop-blur-sm'
                              }
                            `}>
                              {/* Rank Glow Effect */}
                              {isTopThree && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
                              )}
                              
                              <span className="relative z-10">
                                {isTopThree ? (
                                  <span className="text-lg animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                                    {user.rank === 1 ? '👑' : user.rank === 2 ? '🥈' : '🥉'}
                                  </span>
                                ) : (
                                  user.rank
                                )}
                              </span>
                            </div>
                            
                            <div>
                              <p className={`font-semibold transition-colors ${isTopThree ? 'text-n-1' : 'text-n-2 group-hover:text-n-1'}`}>
                                {user.name}
                              </p>
                              <div className="flex items-center gap-2">
                                <p className="text-sm text-n-4">
                                  {user.referrals} referrals
                                </p>
                                {isTopThree && (
                                  <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-green-400 font-mono">ACTIVE</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="text-right relative z-10">
                            <p className={`text-sm font-medium transition-colors ${isTopThree ? 'text-color-1' : 'text-n-3 group-hover:text-n-2'}`}>
                              {user.prize}
                            </p>
                            {isTopThree && (
                              <div className="flex items-center gap-1 justify-end mt-1">
                                <span className="w-1 h-1 bg-color-1 rounded-full animate-pulse"></span>
                                <span className="text-xs text-n-4 font-mono">LEADING</span>
                                <div className="w-3 h-3 border border-color-1/50 rounded-full animate-spin ml-1" style={{ animationDuration: '2s' }}></div>
                              </div>
                            )}
                            
                            {/* Progress Bar */}
                            <div className="mt-2 w-16 h-1 bg-n-6/30 rounded-full overflow-hidden ml-auto">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  isTopThree ? 'bg-gradient-to-r from-color-1 to-color-5' : 'bg-n-5'
                                }`}
                                style={{ 
                                  width: `${Math.min(100, (user.referrals / 50) * 100)}%`,
                                  animationDelay: `${index * 0.2}s`
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Real-time Update Indicator */}
                  <div className="mt-6 flex items-center justify-center gap-3 text-xs text-n-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-mono">Last updated: 2s ago</span>
                    </div>
                    <div className="w-px h-4 bg-n-6"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <span className="font-mono">Auto-refresh: ON</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simple tips under leaderboard */}
              <div className="mt-8 text-center">
                <div className="flex flex-wrap justify-center gap-4 text-xs text-n-5">
                  <div className="flex items-center space-x-1">
                    <span className="w-1 h-1 bg-color-1 rounded-full"></span>
                    <span>Share to climb ranks</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-1 h-1 bg-color-5 rounded-full"></span>
                    <span>Track your position</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HD Prizes Section with Real Images & Futuristic Effects */}
        <section className="py-24 bg-gradient-to-b from-transparent to-n-8/10 relative overflow-hidden">
          {/* Futuristic Background Effects for Prizes */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-n-8/50 via-transparent to-n-7/50"></div>
            {/* Animated Circuit Lines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-color-1 to-transparent animate-pulse"></div>
              <div className="absolute top-52 left-10 w-20 h-px bg-gradient-to-r from-color-1 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-40 right-20 w-px h-24 bg-gradient-to-b from-color-5 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-40 right-10 w-16 h-px bg-gradient-to-l from-color-6 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            {/* Floating Geometric Shapes */}
            <div className="absolute top-32 left-20 w-4 h-4 border border-color-1/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-32 right-32 w-6 h-6 border border-color-5/30 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 relative">
                {/* Holographic Title Effect */}
                <div className="relative">
                  <h2 className="text-4xl font-bold text-n-1 mb-4 relative z-10">
                    <span className="bg-gradient-to-r from-white via-color-1 to-white bg-clip-text text-transparent drop-shadow-2xl">
                      Prizes
                    </span>
                  </h2>
                  <div className="absolute inset-0 text-4xl font-bold text-color-1 opacity-15 blur-sm animate-pulse" style={{ animationDelay: '1s' }}>
                    Prizes
                  </div>
                </div>
                <p className="text-n-3 text-lg mb-2 drop-shadow-lg">Top 3 Prizes - $10K+ Total Value</p>
                <div className="w-24 h-0.5 bg-gradient-to-r from-color-1 via-color-5 to-color-6 mx-auto animate-pulse"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* 1st Prize - MacBook Pro M3 with HD Image */}
                <div className="group relative">
                  {/* Holographic Aura */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-color-1/20 via-transparent to-color-5/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="bg-gradient-to-br from-n-8/95 to-n-7/98 backdrop-blur-2xl border border-color-1/40 rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-color-1/25 relative">
                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-color-1 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
                    
                    <div className="p-8 text-center relative z-10">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-color-1 to-color-5 rounded-full text-xs font-bold text-white mb-6 shadow-lg animate-pulse">
                        FIRST PLACE
                      </div>
                      
                      {/* HD MacBook Image Container */}
                      <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="relative w-64 h-40 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                          {/* MacBook Screen Glow */}
                          <div className="absolute inset-2 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 rounded-xl animate-pulse"></div>
                          {/* MacBook Base */}
                          <div className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-b-2xl"></div>
                          {/* Screen Reflection */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl"></div>
                        </div>
                        {/* Floating Particles around MacBook */}
                        <div className="absolute inset-0">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={`mac-particle-${i}`}
                              className="absolute w-1 h-1 bg-color-1 rounded-full animate-ping"
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${i * 0.5}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl group-hover:text-color-1 transition-colors">
                        MacBook Pro M3 Max
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors drop-shadow-lg">
                        16&quot; Space Black • 1TB SSD • 36GB RAM
                      </p>
                      
                      <div className="border-t border-color-1/30 pt-4 mt-6">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-300 group-hover:text-color-1 transition-colors">
                          <span className="w-2 h-2 bg-color-1 rounded-full animate-pulse"></span>
                          <span>M3 Max • Liquid Retina XDR • ProRes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2nd Prize - Gaming Setup with HD Image */}
                <div className="group relative">
                  {/* Holographic Aura */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-color-5/20 via-color-6/20 to-color-1/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="bg-gradient-to-br from-n-8/95 to-n-7/98 backdrop-blur-2xl border border-color-5/40 rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-2xl group-hover:shadow-color-5/25 relative">
                    {/* RGB Light Strip */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-color-5 via-color-6 to-color-1 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                    
                    <div className="p-8 text-center relative z-10">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-color-5 to-color-6 rounded-full text-xs font-bold text-white mb-6 shadow-lg animate-pulse">
                        SECOND PLACE
                      </div>
                      
                      {/* HD Gaming Setup Image Container */}
                      <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="relative w-64 h-40 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          {/* Monitor */}
                          <div className="absolute top-4 left-8 right-8 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-gray-700">
                            {/* Screen with RGB effect */}
                            <div className="absolute inset-1 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-lg animate-pulse"></div>
                            {/* Game Scene */}
                            <div className="absolute inset-2 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-lg"></div>
                          </div>
                          {/* Keyboard */}
                          <div className="absolute bottom-8 left-12 right-12 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-md">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-md animate-pulse"></div>
                          </div>
                          {/* Mouse */}
                          <div className="absolute bottom-6 right-6 w-6 h-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full">
                            <div className="absolute inset-0 bg-red-500/50 rounded-full animate-pulse"></div>
                          </div>
                          {/* PC Tower */}
                          <div className="absolute bottom-4 left-4 w-8 h-16 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-gray-600">
                            <div className="absolute top-2 left-1 right-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-pulse"></div>
                            <div className="absolute bottom-2 left-1 right-1 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                        {/* RGB Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={`gaming-particle-${i}`}
                              className={`absolute w-1 h-1 rounded-full animate-ping ${
                                i % 3 === 0 ? 'bg-color-5' : i % 3 === 1 ? 'bg-color-6' : 'bg-color-1'
                              }`}
                              style={{
                                left: `${15 + Math.random() * 70}%`,
                                top: `${15 + Math.random() * 70}%`,
                                animationDelay: `${i * 0.3}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl group-hover:text-color-5 transition-colors">
                        Ultimate Gaming Rig
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors drop-shadow-lg">
                        RTX 4090 • 64GB RAM • 4K 240Hz
                      </p>
                      
                      <div className="border-t border-color-5/30 pt-4 mt-6">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-300 group-hover:text-color-5 transition-colors">
                          <span className="w-2 h-2 bg-color-5 rounded-full animate-pulse"></span>
                          <span>RTX 4090 • Intel i9 • RGB Everything</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3rd Prize - Meta Quest Pro with HD Image */}
                <div className="group relative">
                  {/* Holographic Aura */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-color-6/20 via-color-1/20 to-color-5/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="bg-gradient-to-br from-n-8/95 to-n-7/98 backdrop-blur-2xl border border-color-6/40 rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-color-6/25 relative">
                    {/* VR Light Effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-color-6 via-color-1 to-color-5 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                    
                    <div className="p-8 text-center relative z-10">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-color-6 to-color-1 rounded-full text-xs font-bold text-white mb-6 shadow-lg animate-pulse">
                        THIRD PLACE
                      </div>
                      
                      {/* HD Meta Quest Pro Image Container */}
                      <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="relative w-64 h-40 mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black">
                          {/* VR Headset */}
                          <div className="absolute top-8 left-12 right-12 h-16 bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-2xl border border-gray-400 shadow-xl">
                            {/* Lenses */}
                            <div className="absolute top-3 left-4 w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-inner">
                              <div className="absolute inset-1 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute top-3 right-4 w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-inner">
                              <div className="absolute inset-1 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                            </div>
                            {/* Meta Logo Area */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-70"></div>
                          </div>
                          {/* Head Strap */}
                          <div className="absolute top-12 left-8 w-4 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-l-full"></div>
                          <div className="absolute top-12 right-8 w-4 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-r-full"></div>
                          {/* Controllers */}
                          <div className="absolute bottom-8 left-16 w-6 h-12 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full transform rotate-12">
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute bottom-8 right-16 w-6 h-12 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full transform -rotate-12">
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                          {/* VR Space Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
                        </div>
                        {/* VR Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={`vr-particle-${i}`}
                              className={`absolute w-1 h-1 rounded-full animate-ping ${
                                i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-400'
                              }`}
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${i * 0.4}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl group-hover:text-color-6 transition-colors">
                        Meta Quest Pro
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors drop-shadow-lg">
                        Mixed Reality • Eye Tracking • 256GB
                      </p>
                      
                      <div className="border-t border-color-6/30 pt-4 mt-6">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-300 group-hover:text-color-6 transition-colors">
                          <span className="w-2 h-2 bg-color-6 rounded-full animate-pulse"></span>
                          <span>Horizon Workrooms • Hand Tracking • 4K+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
      <ButtonGradient />
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default App;