import React from 'react';

const AuthPagesSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white section-padding">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sign Up */}
          <div className="group">
            <div className="bg-slate-700 rounded-2xl p-1 mb-6 hover:scale-105 transition-transform duration-300">
              <div className="bg-slate-900 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 w-48 text-center text-slate-900 shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">✨</span>
                  </div>
                  <h4 className="font-bold mb-4">Get Started Now!</h4>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-semibold hover:bg-orange-600 transition-colors cursor-pointer">
                      Create Account
                    </div>
                    <div className="text-xs text-slate-500">
                      Sign Up And Be Part Of Something Extraordinary!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center">Sign Up</h3>
          </div>

          {/* Sign In */}
          <div className="group">
            <div className="bg-slate-700 rounded-2xl p-1 mb-6 hover:scale-105 transition-transform duration-300">
              <div className="bg-slate-900 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 w-48 text-center text-slate-900 shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">👋</span>
                  </div>
                  <h4 className="font-bold mb-4">Sign In Aurexa</h4>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-semibold hover:bg-orange-600 transition-colors cursor-pointer">
                      Sign In
                    </div>
                    <div className="text-xs text-slate-500">
                      Say Hello To A Better Experience, Login Now!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center">Sign In</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPagesSection;