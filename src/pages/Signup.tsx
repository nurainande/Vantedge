import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [planSelected, setPlanSelected] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    country: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGetOnboard = () => {
    if (planSelected) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle account creation
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="pt-40 pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10" />
        
        {/* Stepper */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4 group">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                  step >= 1
                    ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                    : "bg-white/5 text-white/20 border border-white/10"
                }`}
              >
                {step > 1 ? <Check size={24} strokeWidth={3} /> : "01"}
              </div>
              <span
                className={`text-xs font-semibold transition-colors ${
                  step >= 1 ? "text-primary" : "text-white/20"
                }`}
              >
                Choose Plan
              </span>
            </div>

            {/* Connector Line */}
            <div className="flex-1 mx-4 mb-8">
              <div className="h-[1px] bg-white/10 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-primary transition-all duration-1000 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                  style={{ width: step >= 2 ? "100%" : "0%" }}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4 group">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                  step >= 2
                    ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                    : "bg-white/5 text-white/20 border border-white/10"
                }`}
              >
                02
              </div>
              <span
                className={`text-xs font-semibold transition-colors ${
                  step >= 2 ? "text-primary" : "text-white/20"
                }`}
              >
                Account Details
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Form/Plan */}
            <div className="flex-1 lg:w-[55%]">
              {step === 1 ? (
                /* ============ STEP 1: CHOOSE PLAN ============ */
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-white/40">Getting Started</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Select Your <span className="text-primary">Plan</span>.
                  </h1>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
                    Choose the level of access that works best for your creative goals. 
                    You can always change your plan later.
                  </p>

                  {/* Plan Card */}
                  <div
                    className={`relative bg-white/5 rounded-[2.5rem] border-2 p-10 transition-all duration-500 cursor-pointer group ${
                      planSelected
                        ? "border-primary shadow-[0_0_50px_-12px_rgba(14,165,233,0.25)] bg-white/[0.07]"
                        : "border-white/5 hover:border-white/20"
                    }`}
                    onClick={() => setPlanSelected(true)}
                  >
                    {/* Top Row: Checkbox + Badge + Price */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-6">
                        {/* Checkbox */}
                        <div
                          className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
                            planSelected
                              ? "bg-primary border-primary scale-110"
                              : "border-white/20 bg-transparent"
                          }`}
                        >
                          {planSelected && <Check size={18} strokeWidth={4} className="text-primary-foreground" />}
                        </div>

                        {/* Save Badge */}
                        <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                          Priority Access
                        </span>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-4xl font-bold text-white">$12</div>
                        <div className="text-xs text-white/40 font-semibold">Per Month</div>
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                      Vantedge Elite
                    </h3>

                    {/* Description + Button Row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                      <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        Full access to all tools and features. 
                        Includes high-quality streaming and advanced analytics.
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGetOnboard();
                        }}
                        className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-sm hover:brightness-110 transition-all shadow-xl shadow-primary/20 whitespace-nowrap"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* ============ STEP 2: CREATE ACCOUNT ============ */
                <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-white/40">Account Setup</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Create Your <span className="text-primary">Account</span>.
                  </h1>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
                    Tell us a bit about yourself to get started on the platform.
                  </p>

                  <form onSubmit={handleCreateAccount} className="space-y-6">
                    {/* First Name & Last Name (side by side) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-white/50 text-xs font-semibold ml-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-white/50 text-xs font-semibold ml-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <label className="block text-white/50 text-xs font-semibold ml-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="johndoe123"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-white/50 text-xs font-semibold ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium"
                      />
                    </div>

                    {/* Phone & Country (side by side) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-white/50 text-xs font-semibold ml-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 234 567 890"
                          className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-white/50 text-xs font-semibold ml-1">
                          Region
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all appearance-none font-medium"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff40' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 24px center",
                          }}
                        >
                          <option value="" disabled className="bg-background">Select Region</option>
                          <option value="US" className="bg-background">North America</option>
                          <option value="GB" className="bg-background">Europe</option>
                          <option value="NG" className="bg-background">Africa</option>
                          <option value="SG" className="bg-background">Asia Pacific</option>
                          <option value="OTHER" className="bg-background">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-white/50 text-xs font-semibold ml-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium pr-14"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-primary transition-colors"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-white/50 text-xs font-semibold ml-1">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium pr-14"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-primary transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start gap-4 pt-4 group/terms">
                      <button
                        type="button"
                        onClick={() => setAgreedToTerms(!agreedToTerms)}
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500 ${
                          agreedToTerms
                            ? "bg-primary border-primary"
                            : "border-white/10 bg-transparent group-hover/terms:border-white/30"
                        }`}
                      >
                        {agreedToTerms && <Check size={14} strokeWidth={4} className="text-primary-foreground" />}
                      </button>
                      <p className="text-white/40 text-xs leading-relaxed">
                        I agree to the{" "}
                        <a href="#" className="text-white font-bold underline hover:text-primary transition-colors">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-white font-bold underline hover:text-primary transition-colors">
                          Privacy Policy
                        </a>
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-sm hover:brightness-110 transition-all shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)] mt-6"
                    >
                      Create Account
                    </button>

                    {/* Already have account */}
                    <p className="text-center text-white/30 text-xs pt-4">
                      Already have an account?{" "}
                      <a href="#" className="text-primary hover:underline transition-all font-semibold">
                        Sign In
                      </a>
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column - Premium Visual */}
            <div className="hidden lg:block lg:w-[40%] relative">
              <div className="sticky top-40">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[700px] border border-white/5 group">
                  <img
                    src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2070"
                    alt="Vantedge Future"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="w-12 h-1 bg-primary mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-2">Join the Community</h4>
                    <p className="text-white/60 text-xs leading-relaxed">
                      Join a network of thousands of creators building the next generation of digital content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;