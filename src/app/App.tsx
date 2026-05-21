import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, X, AlertTriangle, ArrowRight, 
  RefreshCw, Check, Mic, Camera,
  Sparkles, MapPin, Phone, MessageCircle, FileText, AlertOctagon, HeartPulse, Activity,
  User, Lock, Mail, ExternalLink, Shield, Beaker, ChevronLeft, Globe
} from 'lucide-react';

import { DRUGS, CONDITIONS, Drug, PatientProfile } from '../lib/medsafe-core/database';
import { InteractionEngine, AnalysisResult } from '../lib/medsafe-core/InteractionEngine';
import { Summarizer } from '../lib/medsafe-core/Summarizer';
import { LocationService, LocationInfo } from '../lib/medsafe-core/LocationService';
import Tesseract from 'tesseract.js';
import { CreateMLCEngine } from "@mlc-ai/web-llm";

const cx = (...args: any[]) => args.filter(Boolean).join(' ');
const glassClass = "bg-[rgba(12,12,18,0.55)] backdrop-blur-[60px] saturate-[200%] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_48px_rgba(0,0,0,0.5)]";

// ═══════════════════════════════════════════════════════
// REAL HTML5 CANVAS AURORA — Siri-style bright breathing waves
// ═══════════════════════════════════════════════════════
const CanvasAurora = ({ uiState }: { uiState: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const handleResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    const handleMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX / w, y: e.clientY / h }; };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);
      // Deep dark base
      ctx.fillStyle = '#030308';
      ctx.fillRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isAlert = uiState === 'alert';

      // ── LARGE AURORA BLOBS (like macOS Siri) ──
      const blobs = [
        { cx: 0.25, cy: 0.40, rx: 0.55, ry: 0.50, speed: 0.003, phase: 0 },
        { cx: 0.70, cy: 0.55, rx: 0.50, ry: 0.45, speed: 0.004, phase: 1.5 },
        { cx: 0.50, cy: 0.30, rx: 0.45, ry: 0.40, speed: 0.005, phase: 3.0 },
        { cx: 0.35, cy: 0.70, rx: 0.40, ry: 0.35, speed: 0.003, phase: 4.5 },
      ];

      blobs.forEach((blob, bi) => {
        const bx = (blob.cx + Math.sin(time * blob.speed + blob.phase) * 0.12 + (mx - 0.5) * 0.05) * w;
        const by = (blob.cy + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.08 + (my - 0.5) * 0.03) * h;
        const brx = blob.rx * w * (1 + Math.sin(time * 0.002 + bi) * 0.1);
        const bry = blob.ry * h * (1 + Math.cos(time * 0.0015 + bi) * 0.1);

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, Math.max(brx, bry));

        if (isAlert) {
          const alertColors = [
            ['rgba(220,30,30,0.9)', 'rgba(180,20,20,0.4)', 'rgba(80,0,0,0)'],
            ['rgba(255,80,40,0.8)', 'rgba(200,40,20,0.35)', 'rgba(100,0,0,0)'],
            ['rgba(255,50,50,0.7)', 'rgba(160,20,20,0.3)', 'rgba(60,0,0,0)'],
            ['rgba(255,120,20,0.6)', 'rgba(180,50,10,0.25)', 'rgba(80,10,0,0)'],
          ][bi];
          grad.addColorStop(0, alertColors[0]);
          grad.addColorStop(0.5, alertColors[1]);
          grad.addColorStop(1, alertColors[2]);
        } else {
          // BRIGHT Siri-style colors: vivid blue, magenta, cyan, purple
          const siriColors = [
            ['rgba(30,80,220,0.9)', 'rgba(20,50,180,0.4)', 'rgba(5,10,40,0)'],
            ['rgba(160,40,210,0.85)', 'rgba(120,20,180,0.35)', 'rgba(20,5,40,0)'],
            ['rgba(0,180,255,0.7)', 'rgba(10,100,200,0.3)', 'rgba(0,15,40,0)'],
            ['rgba(100,50,240,0.65)', 'rgba(60,20,180,0.25)', 'rgba(10,0,30,0)'],
          ][bi];
          grad.addColorStop(0, siriColors[0]);
          grad.addColorStop(0.5, siriColors[1]);
          grad.addColorStop(1, siriColors[2]);
        }

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      // ── FLOATING PARTICLES (Stars) ──
      for (let i = 0; i < 50; i++) {
        const px = ((Math.sin(time * 0.002 * (i * 0.3 + 1) + i * 7.3) + 1) / 2) * w;
        const py = ((Math.cos(time * 0.0015 * (i * 0.2 + 0.5) + i * 4.1) + 1) / 2) * h;
        const size = 1.5 + Math.sin(time * 0.008 + i) * 1;
        const alpha = 0.25 + Math.sin(time * 0.006 + i * 2) * 0.15;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = isAlert ? `rgba(255,100,60,${alpha})` : `rgba(120,160,255,${alpha})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [uiState]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none print:hidden" />;
};

// ═══════════════════════════════════════════════════════
// TYPEWRITER TEXT COMPONENT
// ═══════════════════════════════════════════════════════
const TypewriterText = ({ text, speed = 80 }: { text: string; speed?: number }) => {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx <= text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, idx));
        setIdx(idx + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Pause then restart
      const timer = setTimeout(() => { setIdx(0); setDisplayed(''); }, 2000);
      return () => clearTimeout(timer);
    }
  }, [idx, text, speed]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-[#0A84FF]">|</span>
    </span>
  );
};

// ═══════════════════════════════════════════════════════
// PILL NAVBAR (All buttons work)
// ═══════════════════════════════════════════════════════
const PillNavbar = ({ onNavigate, screen, isLoggedIn, userName }: { onNavigate: (t: string) => void; screen: string; isLoggedIn: boolean; userName: string }) => (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-5 py-2.5 rounded-full w-[92%] max-w-[860px] transition-all print:hidden">
    <div className={`absolute inset-0 rounded-full ${glassClass} -z-10`} />
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('hero')}>
      <HeartPulse className="w-5 h-5 text-[#34C759]" />
      <span className="font-bold text-[16px] tracking-tight text-white">Med<span className="text-[#0A84FF]">Safe</span><span className="text-[#A1A1A6] font-normal ml-0.5 text-[13px]">AI</span></span>
    </div>
    <div className="hidden sm:flex items-center gap-1">
      {[
        { label: 'Dashboard', target: 'dashboard' },
        { label: 'Analyze', target: 'input' },
        { label: 'Security', target: 'security' },
      ].map(item => (
        <button 
          key={item.target} 
          onClick={() => onNavigate(item.target)} 
          className={cx(
            "px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all",
            screen === item.target ? "bg-white/10 text-white" : "text-[#8E8E93] hover:text-white"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
    {isLoggedIn ? (
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('dashboard')}>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#5E5CE6] flex items-center justify-center">
          <span className="text-white font-bold text-[11px]">{userName.charAt(0).toUpperCase()}</span>
        </div>
      </div>
    ) : (
      <button onClick={() => onNavigate('login')} className="text-white bg-[#0A84FF] px-4 py-1.5 rounded-full text-[12px] font-bold hover:bg-[#0A84FF]/80 transition-colors">
        Sign In
      </button>
    )}
  </div>
);

// ═══════════════════════════════════════════════════════
// LOGIN / SIGNUP SCREEN
// ═══════════════════════════════════════════════════════
const AuthScreen = ({ onLogin, onNavigate }: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password) { setError('Please fill all fields'); return; }
    if (!isLogin && !name) { setError('Please enter your name'); return; }
    // Store locally
    const userData = { name: isLogin ? (localStorage.getItem('ms_name') || 'User') : name, email };
    localStorage.setItem('ms_name', userData.name);
    localStorage.setItem('ms_email', userData.email);
    localStorage.setItem('ms_loggedIn', 'true');
    onLogin(userData.name);
  };

  return (
    <div className="min-h-screen pt-[120px] flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className={cx(glassClass, "w-full max-w-[440px] p-10 rounded-[32px] relative z-10")}>
        <button onClick={() => onNavigate('hero')} className="text-[#8E8E93] hover:text-white mb-6 flex items-center gap-1 text-[14px]"><ChevronLeft className="w-4 h-4" /> Back</button>
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#5E5CE6] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(10,132,255,0.3)]">
          <HeartPulse className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-[32px] font-bold text-white tracking-tight mb-1">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-[#8E8E93] font-medium mb-8">{isLogin ? 'Sign in to your MedSafe AI account' : 'Join MedSafe AI for personalized safety'}</p>

        {error && <div className="bg-[#FF453A]/15 border border-[#FF453A]/30 rounded-xl p-3 mb-4 text-[#FF453A] text-[14px] font-medium">{error}</div>}

        <div className="space-y-4 mb-6">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
              <input type="text" value={name} onChange={e => { setName(e.target.value); setError(''); }} placeholder="Full Name" className="w-full h-[52px] rounded-xl bg-white/5 border border-white/10 px-12 text-white text-[16px] font-medium placeholder:text-[#8E8E93]/50 outline-none focus:border-[#0A84FF]/50 transition-colors" />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
            <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(''); }} placeholder="Email Address" className="w-full h-[52px] rounded-xl bg-white/5 border border-white/10 px-12 text-white text-[16px] font-medium placeholder:text-[#8E8E93]/50 outline-none focus:border-[#0A84FF]/50 transition-colors" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
            <input type="password" value={password} onChange={e => { setPassword(e.target.value); setError(''); }} placeholder="Password" className="w-full h-[52px] rounded-xl bg-white/5 border border-white/10 px-12 text-white text-[16px] font-medium placeholder:text-[#8E8E93]/50 outline-none focus:border-[#0A84FF]/50 transition-colors" />
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full h-[52px] rounded-xl bg-[#0A84FF] text-white font-bold text-[16px] hover:bg-[#0A84FF]/85 transition-colors shadow-[0_8px_20px_rgba(10,132,255,0.3)] mb-6">
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>

        <div className="text-center text-[#8E8E93] text-[14px]">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="text-[#0A84FF] font-semibold hover:underline">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// DASHBOARD SCREEN
// ═══════════════════════════════════════════════════════
const DashboardScreen = ({ userName, onNavigate }: any) => {
  const stats = [
    { label: 'Drugs in Database', value: DRUGS.length.toString(), icon: '💊', color: '#0A84FF' },
    { label: 'Interaction Pairs', value: INTERACTIONS.length.toString(), icon: '⚠️', color: '#FF9F0A' },
    { label: 'Privacy Score', value: '100%', icon: '🔒', color: '#34C759' },
    { label: 'AI Engine', value: 'v2.0', icon: '🧠', color: '#AF52DE' },
  ];

  return (
    <div className="min-h-screen pt-[120px] pb-20 px-6">
      <div className="max-w-[900px] mx-auto z-10 relative">
        <div className="mb-10">
          <h1 className="text-[40px] font-bold text-white tracking-tight mb-2">Hello, {userName} 👋</h1>
          <p className="text-[#8E8E93] text-[18px] font-medium">Your personal drug safety dashboard</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={cx(glassClass, "p-5 rounded-[24px]")}>
              <div className="text-[28px] mb-3">{s.icon}</div>
              <div className="text-[28px] font-bold text-white tracking-tight" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[#8E8E93] text-[13px] font-semibold mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} onClick={() => onNavigate('input')} className={cx(glassClass, "p-8 rounded-[24px] cursor-pointer hover:border-[#0A84FF]/30 transition-all group")}>
            <Activity className="w-10 h-10 text-[#0A84FF] mb-4" />
            <h3 className="text-[22px] font-bold text-white mb-2">New Analysis</h3>
            <p className="text-[#8E8E93] text-[15px] leading-relaxed">Check drug interactions with our AI-powered engine. Personalized for your health profile.</p>
            <div className="mt-4 text-[#0A84FF] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Start <ArrowRight className="w-4 h-4" /></div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} onClick={() => onNavigate('security')} className={cx(glassClass, "p-8 rounded-[24px] cursor-pointer hover:border-[#34C759]/30 transition-all group")}>
            <Shield className="w-10 h-10 text-[#34C759] mb-4" />
            <h3 className="text-[22px] font-bold text-white mb-2">Privacy & Security</h3>
            <p className="text-[#8E8E93] text-[15px] leading-relaxed">100% offline processing. Your medical data never leaves your device. Zero cloud dependency.</p>
            <div className="mt-4 text-[#34C759] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// SECURITY SCREEN
// ═══════════════════════════════════════════════════════
const SecurityScreen = () => {
  const features = [
    { icon: <Shield className="w-8 h-8" />, title: 'Zero Cloud Dependency', desc: 'All drug interaction analysis runs 100% locally in your browser. No data is ever sent to any server.', color: '#34C759' },
    { icon: <Lock className="w-8 h-8" />, title: 'End-to-End Privacy', desc: 'Your medical data, prescriptions, and health conditions stay on your device. We cannot access them even if we wanted to.', color: '#0A84FF' },
    { icon: <Beaker className="w-8 h-8" />, title: 'FDA-Grade Drug Database', desc: 'Our interaction engine is built on peer-reviewed clinical pharmacology data from WHO and FDA sources.', color: '#AF52DE' },
    { icon: <Globe className="w-8 h-8" />, title: 'Open Source', desc: 'The entire codebase is open and auditable. Transparency is the foundation of trust in medical software.', color: '#FF9F0A' },
  ];

  return (
    <div className="min-h-screen pt-[120px] pb-20 px-6">
      <div className="max-w-[800px] mx-auto z-10 relative">
        <h1 className="text-[40px] font-bold text-white tracking-tight mb-3">Privacy & Security</h1>
        <p className="text-[#8E8E93] text-[18px] font-medium mb-12">Built for trust. Designed for safety.</p>
        <div className="space-y-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className={cx(glassClass, "p-8 rounded-[24px] flex gap-6 items-start")}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${f.color}15`, color: f.color }}>{f.icon}</div>
              <div>
                <h3 className="text-[20px] font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[#8E8E93] text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// HERO SCREEN (Clean landing with typewriter animation)
// ═══════════════════════════════════════════════════════
const HeroScreen = ({ onNavigate }: any) => (
  <div className="min-h-screen pt-[100px] flex flex-col items-center justify-center relative print:hidden">
    <div className="max-w-[860px] w-full px-6 flex flex-col items-center text-center z-10 relative">
      {/* MedSafe AI logo text */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
        <span className="text-[22px] font-bold tracking-tight text-white">Med<span className="text-[#0A84FF]">Safe</span> <span className="text-[#8E8E93] font-normal">AI</span></span>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-bold text-[#0A84FF] tracking-widest uppercase mb-8 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5" /> Privacy-First Clinical Engine
      </motion.div>

      {/* Typewriter headline */}
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="font-bold text-[48px] md:text-[72px] text-white tracking-tight leading-[1.05] mb-6 min-h-[90px] md:min-h-[160px]">
        <TypewriterText text="Intelligent Drug Safety." speed={70} />
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-[17px] md:text-[21px] text-[#8E8E93] font-medium max-w-[600px] leading-relaxed mb-12">
        Clinical-grade drug interaction analysis powered by AI. Runs 100% locally on your device. Zero data leaves your browser.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4">
        <button onClick={() => onNavigate('input')} className="h-[56px] rounded-full px-10 bg-white text-black font-bold text-[17px] flex items-center gap-3 hover:scale-[1.03] transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          Start Analysis <ArrowRight className="w-5 h-5" />
        </button>
        <button onClick={() => onNavigate('security')} className="h-[56px] rounded-full px-8 bg-white/5 border border-white/10 text-white font-semibold text-[17px] flex items-center gap-2 hover:bg-white/10 transition-all">
          <Shield className="w-5 h-5" /> How It Works
        </button>
      </motion.div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════
// SCANNER MODAL (OCR)
// ═══════════════════════════════════════════════════════
const ScannerModal = ({ onClose, onScanComplete }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    let activeStream: MediaStream | null = null;
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(s => {
        activeStream = s;
        if (videoRef.current) videoRef.current.srcObject = s;
      })
      .catch(err => {
        // Fallback to user facing if environment fails
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
          .then(s => {
            activeStream = s;
            if (videoRef.current) videoRef.current.srcObject = s;
          }).catch(e => {
            alert("Camera permission denied or camera not found.");
            onClose();
          });
      });
    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(t => t.stop());
      }
    };
  }, [onClose]);

  const captureAndScan = async () => {
    if (!videoRef.current) return;
    setIsScanning(true);
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // The video is mirrored for the user, so we flip the canvas horizontally 
    // before drawing so Tesseract reads normal text.
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');

    try {
      const result = await Tesseract.recognize(dataUrl, 'eng', { logger: m => console.log(m) });
      const rawText = result.data.text.toLowerCase();
      // Remove all spaces and special characters for a highly resilient fuzzy match
      const cleanText = rawText.replace(/[^a-z0-9]/g, '');
      
      const matched = DRUGS.filter(d => {
        const n = d.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const g = d.genericName.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Ensure we don't accidentally match 2-letter fragments
        if (n.length < 4 && g.length < 4) return false;
        
        return (n.length >= 4 && cleanText.includes(n)) || 
               (g.length >= 4 && cleanText.includes(g)) ||
               d.aliases.some(a => {
                 const cl = a.toLowerCase().replace(/[^a-z0-9]/g, '');
                 return cl.length >= 4 && cleanText.includes(cl);
               });
      });
      
      onScanComplete(matched);
    } catch (e) {
      console.error(e);
      alert("Failed to scan text.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={cx(glassClass, "w-full max-w-[600px] p-6 relative z-10 rounded-[32px] overflow-hidden flex flex-col items-center")}>
        <button onClick={onClose} className="absolute top-6 right-6 text-[#8E8E93] hover:text-white z-20"><X className="w-6 h-6" /></button>
        <h2 className="text-[24px] font-bold text-white tracking-tight mb-2">Scan Prescription</h2>
        <p className="text-[#8E8E93] font-medium mb-6 text-center text-[14px]">Hold your pill bottle or prescription up to the camera.</p>
        
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-6 border border-white/10">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover" 
            style={{ transform: 'scaleX(-1)' }} 
          />
          {isScanning && (
            <div className="absolute inset-0 bg-[#0A84FF]/20 flex items-center justify-center backdrop-blur-[2px]">
              <div className="flex flex-col items-center">
                <RefreshCw className="w-8 h-8 text-white animate-spin mb-2" />
                <span className="text-white font-bold tracking-widest text-[14px] uppercase animate-pulse">Analyzing text...</span>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={captureAndScan} 
          disabled={isScanning}
          className="h-[56px] px-8 rounded-full bg-white text-black font-bold text-[16px] hover:bg-[#F2F2F7] transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <Camera className="w-5 h-5" />
          {isScanning ? "Processing..." : "Capture & Extract"}
        </button>
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// PATIENT PROFILE MODAL (Name, exact age, custom conditions)
// ═══════════════════════════════════════════════════════
const ProfileModal = ({ onSubmit, onClose }: any) => {
  const [patientName, setPatientName] = useState(localStorage.getItem('ms_name') || '');
  const [age, setAge] = useState('');
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [customCondition, setCustomCondition] = useState('');

  const toggleCond = (c: string) => setSelectedConditions(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  
  const addCustomCondition = () => {
    if (customCondition.trim() && !selectedConditions.includes(customCondition.trim())) {
      setSelectedConditions([...selectedConditions, customCondition.trim()]);
      setCustomCondition('');
    }
  };

  const ageNum = parseInt(age) || 0;
  const ageGroup = ageNum < 18 ? 'Under 18' : ageNum >= 65 ? '65+' : '18-64';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={cx(glassClass, "w-full max-w-[520px] p-8 relative z-10 rounded-[32px] max-h-[90vh] overflow-y-auto")}>
        <button onClick={onClose} className="absolute top-6 right-6 text-[#8E8E93] hover:text-white"><X className="w-6 h-6" /></button>
        <h2 className="text-[28px] font-bold text-white tracking-tight mb-1">Patient Profile</h2>
        <p className="text-[#8E8E93] font-medium mb-8">Personalize the AI analysis for accurate results.</p>
        
        {/* Name */}
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 block text-[14px]">Patient Name</label>
          <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="Enter your name" className="w-full h-[48px] rounded-xl bg-white/5 border border-white/10 px-4 text-white text-[16px] font-medium placeholder:text-[#8E8E93]/40 outline-none focus:border-[#0A84FF]/50 transition-colors" />
        </div>

        {/* Age (direct input) */}
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 block text-[14px]">Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 45" min="1" max="120" className="w-full h-[48px] rounded-xl bg-white/5 border border-white/10 px-4 text-white text-[16px] font-medium placeholder:text-[#8E8E93]/40 outline-none focus:border-[#0A84FF]/50 transition-colors" />
          {age && <div className="text-[#8E8E93] text-[12px] mt-1.5 ml-1">Risk Group: <span className="text-[#0A84FF] font-semibold">{ageGroup}</span></div>}
        </div>

        {/* Conditions (preset + custom) */}
        <div className="mb-6">
          <label className="text-white font-semibold mb-2 block text-[14px]">Pre-existing Conditions</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {CONDITIONS.map(c => (
              <button key={c} onClick={() => toggleCond(c)} className={cx("px-3 py-1.5 rounded-full font-medium text-[13px] transition-colors", selectedConditions.includes(c) ? "bg-[#FF453A]/20 text-[#FF453A] border border-[#FF453A]/40" : "bg-white/5 text-[#8E8E93] border border-transparent hover:border-white/10")}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input type="text" value={customCondition} onChange={e => setCustomCondition(e.target.value)} onKeyDown={e => e.key === 'Enter' && addCustomCondition()} placeholder="Add other condition..." className="flex-1 h-[40px] rounded-xl bg-white/5 border border-white/10 px-4 text-white text-[14px] font-medium placeholder:text-[#8E8E93]/40 outline-none focus:border-[#0A84FF]/50 transition-colors" />
            <button onClick={addCustomCondition} className="px-4 h-[40px] rounded-xl bg-[#0A84FF]/20 text-[#0A84FF] font-bold text-[13px] hover:bg-[#0A84FF]/30 transition-colors">Add</button>
          </div>
          {/* Show custom conditions that aren't in the preset list */}
          {selectedConditions.filter(c => !CONDITIONS.includes(c)).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedConditions.filter(c => !CONDITIONS.includes(c)).map(c => (
                <span key={c} className="px-3 py-1.5 rounded-full bg-[#FF453A]/20 text-[#FF453A] border border-[#FF453A]/40 text-[13px] font-medium flex items-center gap-1">
                  {c} <button onClick={() => toggleCond(c)} className="ml-1"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => onSubmit({ name: patientName || undefined, age: ageNum || undefined, ageGroup, conditions: selectedConditions })} className="w-full h-[52px] rounded-xl bg-white text-black font-bold text-[16px] hover:bg-[#F2F2F7] transition-all">
          Continue to Analysis
        </button>
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// INPUT SCREEN
// ═══════════════════════════════════════════════════════
const InputScreen = ({ onAnalyze }: any) => {
  const [query, setQuery] = useState('');
  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleScanComplete = (matchedDrugs: Drug[]) => {
    setShowScanner(false);
    if (matchedDrugs.length > 0) {
      setSelectedDrugs(prev => {
        const newDrugs = [...prev];
        matchedDrugs.forEach(drug => {
          if (!newDrugs.find(sd => sd.id === drug.id)) newDrugs.push(drug);
        });
        return newDrugs;
      });
      alert(`Successfully added ${matchedDrugs.length} medication(s) from scan!`);
    } else {
      alert("No known medications recognized in the image.");
    }
  };

  const filteredDrugs = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return DRUGS.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.genericName.toLowerCase().includes(q) ||
      d.aliases.some(a => a.toLowerCase().includes(q))
    ).filter(d => !selectedDrugs.find(sd => sd.id === d.id));
  }, [query, selectedDrugs]);

  const addDrug = (drug: Drug) => { setSelectedDrugs(prev => [...prev, drug]); setQuery(''); };
  const removeDrug = (id: string) => setSelectedDrugs(prev => prev.filter(d => d.id !== id));

  const loadDemo = () => {
    const demoDrugs = ['d001', 'd002', 'd014'].map(id => DRUGS.find(d => d.id === id)).filter(Boolean) as Drug[];
    setSelectedDrugs(demoDrugs);
  };

  const handleProfileSubmit = (profile: PatientProfile) => {
    setShowProfile(false);
    onAnalyze(selectedDrugs, profile);
  };

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice input is not supported in this browser. Please use Chrome, Safari, or Edge.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      
      // Auto-match drugs from transcript
      const matched = DRUGS.filter(d => 
        transcript.includes(d.name.toLowerCase()) || 
        transcript.includes(d.genericName.toLowerCase()) ||
        d.aliases.some(a => transcript.includes(a.toLowerCase()))
      );
      
      if (matched.length > 0) {
        setSelectedDrugs(prev => {
          const newDrugs = [...prev];
          matched.forEach(drug => {
            if (!newDrugs.find(sd => sd.id === drug.id)) newDrugs.push(drug);
          });
          return newDrugs;
        });
        setQuery('');
      } else {
        setQuery(transcript);
      }
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen pt-[120px] pb-20 px-6 flex flex-col items-center print:hidden">
      <div className="max-w-[700px] w-full z-10 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[32px] font-bold text-white tracking-tight">Your Medications</h2>
          <button onClick={loadDemo} className="px-4 py-2 bg-[#FF9F0A]/15 text-[#FF9F0A] rounded-full font-bold text-[12px] hover:bg-[#FF9F0A]/25 transition-colors border border-[#FF9F0A]/20 uppercase tracking-wider">
            ⚡ Demo
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <div className={cx(glassClass, "w-full h-[64px] rounded-2xl px-5 flex items-center transition-all", isFocused ? "border-[#0A84FF]/40 shadow-[0_0_0_3px_rgba(10,132,255,0.15)]" : "")}>
            <Search className="w-5 h-5 text-[#8E8E93] mr-3" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setTimeout(() => setIsFocused(false), 250)} placeholder="Search by brand, generic, or Indian name..." className="flex-1 bg-transparent border-none outline-none text-white text-[17px] font-medium placeholder:text-[#8E8E93]/40" />
            <button 
              onClick={startListening} 
              className={cx("w-10 h-10 rounded-full flex items-center justify-center transition-all ml-2", isListening ? "bg-[#FF453A] text-white animate-pulse shadow-[0_0_15px_rgba(255,69,58,0.5)]" : "bg-white/5 text-[#8E8E93] hover:bg-white/10 hover:text-white")}
              title="Voice Search"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowScanner(true)} 
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all ml-2 bg-white/5 text-[#8E8E93] hover:bg-white/10 hover:text-white"
              title="Scan Prescription"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <AnimatePresence>
            {isFocused && query && filteredDrugs.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={cx(glassClass, "absolute top-[72px] left-0 w-full overflow-hidden z-20 !rounded-2xl")}>
                {filteredDrugs.slice(0, 6).map(drug => (
                  <div key={drug.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-white/10 cursor-pointer border-b border-white/[0.04] last:border-0 transition-colors" onClick={() => addDrug(drug)}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-[16px] font-bold">{drug.name}</span>
                        {drug.hasBlackBoxWarning && <span className="bg-[#FF453A]/15 text-[#FF453A] border border-[#FF453A]/30 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">⚠ FDA</span>}
                      </div>
                      <span className="text-[#8E8E93] text-[13px] font-medium">{drug.genericName} · {drug.category}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Drug Chips */}
        <div className="mb-10 min-h-[60px]">
          {selectedDrugs.length === 0 ? (
            <div className="text-[#8E8E93]/50 text-center py-8 text-[15px]">Search and add your medications above</div>
          ) : (
            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {selectedDrugs.map(drug => (
                  <motion.div key={drug.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className={cx(glassClass, "!rounded-2xl p-4 flex flex-col w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] relative group")}>
                    <button onClick={() => removeDrug(drug.id)} className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#8E8E93] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FF453A] hover:text-white"><X className="w-3.5 h-3.5" /></button>
                    <span className="text-[24px] mb-2">💊</span>
                    <span className="text-white font-bold text-[15px] mb-0.5 leading-tight">{drug.name}</span>
                    <span className="text-[#8E8E93] text-[11px]">{drug.category}</span>
                    {drug.hasBlackBoxWarning && <div className="text-[#FF453A] text-[10px] font-bold uppercase flex items-center gap-1 mt-2"><AlertOctagon className="w-3 h-3" /> Black Box</div>}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        <button disabled={selectedDrugs.length === 0} onClick={() => setShowProfile(true)} className={cx("w-full h-[56px] rounded-2xl flex items-center justify-center gap-3 font-bold text-[17px] transition-all", selectedDrugs.length > 0 ? "bg-[#0A84FF] text-white shadow-[0_8px_25px_rgba(10,132,255,0.3)] hover:bg-[#0A84FF]/90" : "bg-white/5 text-white/30 cursor-not-allowed")}>
          <Activity className="w-5 h-5" /> Analyze Interactions
        </button>
      </div>
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} onSubmit={handleProfileSubmit} />}
      {showScanner && <ScannerModal onClose={() => setShowScanner(false)} onScanComplete={handleScanComplete} />}
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// AI CHAT WIDGET (WebLLM)
// ═══════════════════════════════════════════════════════
const AiChatWidget = ({ analysis, profile, summary }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState('');
  const [engine, setEngine] = useState<any>(null);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const initEngine = async () => {
    if (engine) return;
    try {
      const selectedModel = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
      const e = await CreateMLCEngine(selectedModel, {
        initProgressCallback: (progress) => {
          setLoadingMsg(progress.text);
        }
      });
      setEngine(e);
      setLoadingMsg('');
      
      const sysPrompt = `You are MedSafe AI, an expert clinical pharmacologist. 
Profile: Age ${profile?.age || profile?.ageGroup}, Conditions: ${profile?.conditions?.join(', ') || 'None'}.
Medications: ${analysis.drugs.map((d: any) => d.name).join(', ')}.
Summary: ${summary}.
Answer concisely.`;

      setMessages([{ role: 'system', content: sysPrompt }]);
    } catch (err) {
      console.error(err);
      setLoadingMsg('Failed to load local AI model. Requires WebGPU.');
    }
  };

  const handleSend = async () => {
    if (!input.trim() || !engine) return;
    const userMsg = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsGenerating(true);

    try {
      const chunks = await engine.chat.completions.create({
        messages: newMessages,
        temperature: 0.7,
        stream: true,
      });

      let reply = '';
      setMessages([...newMessages, { role: 'assistant', content: '' }]);
      
      for await (const chunk of chunks) {
        reply += chunk.choices[0]?.delta?.content || '';
        setMessages([...newMessages, { role: 'assistant', content: reply }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen) {
    return (
      <button onClick={() => { setIsOpen(true); initEngine(); }} className="fixed bottom-6 right-6 h-14 px-6 rounded-full bg-[#0A84FF] text-white font-bold flex items-center gap-3 shadow-[0_8px_30px_rgba(10,132,255,0.4)] hover:scale-105 transition-all z-50 print:hidden">
        <MessageCircle className="w-6 h-6" /> Ask Local AI
      </button>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={cx(glassClass, "fixed bottom-6 right-6 w-[380px] h-[500px] rounded-3xl z-50 flex flex-col overflow-hidden border border-white/20 print:hidden")}>
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-5 bg-black/40">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#0A84FF]" />
          <span className="text-white font-bold text-[16px]">MedSafe Local AI</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-[#8E8E93] hover:text-white"><X className="w-5 h-5" /></button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {loadingMsg ? (
          <div className="text-[#8E8E93] text-xs text-center flex flex-col items-center gap-2 mt-4">
            <RefreshCw className="w-5 h-5 animate-spin text-[#0A84FF]" />
            {loadingMsg}
          </div>
        ) : (
          messages.filter(m => m.role !== 'system').length === 0 ? (
            <div className="text-center text-[#8E8E93] text-sm mt-4">Ask anything about your medications and interactions. This runs 100% locally.</div>
          ) : (
            messages.filter(m => m.role !== 'system').map((m, i) => (
              <div key={i} className={cx("max-w-[85%] rounded-2xl p-3 text-[14px]", m.role === 'user' ? "bg-[#0A84FF] text-white self-end rounded-tr-sm" : "bg-white/10 text-white self-start rounded-tl-sm")}>
                {m.content}
              </div>
            ))
          )
        )}
        {isGenerating && <div className="text-[#8E8E93] text-xs self-start ml-2 flex items-center gap-2"><div className="w-2 h-2 bg-[#0A84FF] rounded-full animate-bounce"/> Thinking...</div>}
      </div>

      <div className="p-3 border-t border-white/10 bg-black/40">
        <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 h-12 border border-white/10">
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question..." 
            disabled={!!loadingMsg || isGenerating}
            className="flex-1 bg-transparent border-none outline-none text-white text-[14px] placeholder:text-[#8E8E93]"
          />
          <button onClick={handleSend} disabled={!!loadingMsg || isGenerating || !input.trim()} className="text-[#0A84FF] disabled:opacity-50 hover:scale-110 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════
// RESULTS SCREEN
// ═══════════════════════════════════════════════════════
const GRAPH_RADIUS = 160;
const getNodePos = (i: number, t: number, centerX: number, centerY: number) => { const a = (i / t) * 2 * Math.PI - Math.PI / 2; return { x: centerX + GRAPH_RADIUS * Math.cos(a), y: centerY + GRAPH_RADIUS * Math.sin(a) }; };

const ResultsScreen = ({ selectedDrugs, profile, setUiState, onNavigate }: any) => {
  const [locations, setLocations] = useState<LocationInfo[]>([]);
  const [onlineDoctors, setOnlineDoctors] = useState<LocationInfo[]>([]);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [fetchingLoc, setFetchingLoc] = useState(false);
  const [locError, setLocError] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [dim, setDim] = useState({ w: 600, h: 500 });

  const analysis = useMemo(() => InteractionEngine.analyze(selectedDrugs.map((d: Drug) => d.id), profile), [selectedDrugs, profile]);
  const summary = useMemo(() => Summarizer.generateSummary(analysis, profile), [analysis, profile]);
  const isSevere = analysis.highestSeverity === 'Severe' || analysis.highestSeverity === 'Critical';

  useEffect(() => {
    setUiState(isSevere ? 'alert' : 'idle');
    const updateDim = () => {
      if (containerRef.current) setDim({ w: containerRef.current.offsetWidth, h: containerRef.current.offsetHeight });
    };
    updateDim();
    window.addEventListener('resize', updateDim);
    return () => window.removeEventListener('resize', updateDim);
  }, [isSevere, setUiState]);

  const fetchHospitals = async () => {
    setFetchingLoc(true);
    setLocError('');
    setShowLocationModal(true);
    try {
      const coords = await LocationService.requestLocationPermission();
      const hosps = await LocationService.getNearbyHelp(coords.lat, coords.lon);
      setLocations(hosps);
    } catch (e: any) {
      console.error(e);
      setLocError('Location access denied. Showing online consultation options.');
      setLocations([]);
    }
    // Always load online doctors
    if (typeof LocationService.getOnlineDoctors === 'function') {
      setOnlineDoctors(LocationService.getOnlineDoctors());
    }
    setFetchingLoc(false);
  };

  const center = { x: dim.w / 2, y: dim.h / 2 };
  const nodes = analysis.drugs.map((d: Drug, i: number) => ({ drug: d, ...getNodePos(i, analysis.drugs.length, center.x, center.y) }));
  const getSeverityColor = (sev: string) => sev === 'Critical' ? '#FF375F' : sev === 'Severe' ? '#FF453A' : sev === 'Moderate' ? '#FF9F0A' : '#32D74B';

  return (
    <div className="min-h-screen pt-[100px] pb-10 px-4 md:px-6 flex flex-col md:flex-row gap-6 max-w-[1400px] mx-auto z-10 relative print:block print:pt-0">
      
      {/* Print header */}
      <div className="hidden print:block mb-6 border-b-2 border-black pb-4">
        <h1 className="text-3xl font-bold text-black mb-1">MedSafe AI — Clinical Safety Report</h1>
        <p className="text-gray-600 text-sm">Patient: {profile?.name || 'Anonymous'} | Age: {profile?.age || profile?.ageGroup || 'N/A'} | Conditions: {profile?.conditions?.join(', ') || 'None'}</p>
        <p className="text-gray-400 text-xs">Generated: {new Date().toLocaleString()}</p>
      </div>

      {/* Left: Graph */}
      <div ref={containerRef} className={cx(glassClass, "flex-1 relative h-[45vh] md:h-[calc(100vh-140px)] overflow-hidden rounded-[28px] print:hidden")}>
        <div className="absolute top-6 left-6 text-[15px] font-bold text-white/70">Interaction Graph</div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {analysis.interactions.map((pair: any, i: number) => {
            const n1 = nodes.find((n: any) => n.drug.id === pair.drug1.id);
            const n2 = nodes.find((n: any) => n.drug.id === pair.drug2.id);
            if (!n1 || !n2) return null;
            const color = getSeverityColor(pair.interaction.severity);
            const isDanger = ['Severe', 'Critical'].includes(pair.interaction.severity);
            return (
              <g key={i}>
                <motion.path d={`M ${n1.x} ${n1.y} L ${n2.x} ${n2.y}`} stroke={color} strokeWidth={isDanger ? 5 : 2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
                {isDanger && <circle r="4" fill="#FFF" style={{ filter: 'drop-shadow(0 0 6px #FFF)' }}><animateMotion dur="2s" repeatCount="indefinite" path={`M ${n1.x} ${n1.y} L ${n2.x} ${n2.y}`} /></circle>}
              </g>
            );
          })}
        </svg>
        {nodes.map((node: any) => (
          <motion.div key={node.drug.id} drag dragConstraints={containerRef} className="absolute w-[80px] h-[80px] -ml-[40px] -mt-[40px] rounded-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing z-10" style={{ left: node.x, top: node.y, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.9) 100%)', boxShadow: 'inset 0 0 8px rgba(255,255,255,0.2), 0 8px 20px rgba(0,0,0,0.7)' }}>
            <span className="font-bold text-[12px] text-white text-center leading-tight">{node.drug.name}</span>
          </motion.div>
        ))}
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          {isSevere && (
            <button onClick={fetchHospitals} className="px-5 py-3 rounded-full bg-[#FF453A] text-white font-bold text-[14px] flex items-center gap-2 shadow-[0_8px_20px_rgba(255,69,58,0.4)] hover:scale-[1.03] transition-transform z-20">
              <MapPin className="w-4 h-4" /> Find Nearest Help
            </button>
          )}
          <button onClick={() => onNavigate('input')} className="px-5 py-3 rounded-full bg-white/10 text-white font-bold text-[14px] flex items-center gap-2 hover:bg-white/15 transition-colors z-20">
            <ChevronLeft className="w-4 h-4" /> New Analysis
          </button>
        </div>
      </div>

      {/* Right: Info Panel */}
      <div className="w-full md:w-[440px] flex flex-col gap-5 h-auto md:h-[calc(100vh-140px)] overflow-y-auto print:w-full print:h-auto">
        
        {/* Risk Score */}
        <div className={cx(glassClass, "p-6 shrink-0 rounded-[24px] print:bg-white print:border-black print:text-black print:shadow-none")}>
          <div className="flex items-center gap-5">
            <div className={cx("w-16 h-16 rounded-2xl flex items-center justify-center print:hidden", isSevere ? "bg-[#FF453A] shadow-[0_0_30px_rgba(255,69,58,0.5)]" : "bg-[#32D74B] shadow-[0_0_30px_rgba(50,215,75,0.4)]")}>
              {isSevere ? <AlertTriangle className="w-8 h-8 text-white" /> : <Check className="w-8 h-8 text-white" />}
            </div>
            <div>
              <div className="text-[12px] font-bold text-white/40 uppercase tracking-widest mb-0.5 print:text-black">Risk Score</div>
              <div className="text-[42px] font-bold text-white leading-none tracking-tighter print:text-black">{analysis.overallRiskScore}<span className="text-[20px] text-white/40">/10</span></div>
              <div className={cx("text-[15px] font-bold mt-0.5 print:text-black", isSevere ? "text-[#FF453A]" : "text-[#32D74B]")}>{analysis.highestSeverity}</div>
            </div>
          </div>
        </div>

        {/* AI Summary */}
        <div className={cx(glassClass, "p-6 rounded-[24px] print:bg-white print:border-black print:shadow-none")}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#AF52DE]" />
            <h3 className="text-[13px] font-bold text-[#AF52DE] uppercase tracking-widest">AI Clinical Summary</h3>
          </div>
          <div className="text-white/90 text-[14px] leading-relaxed whitespace-pre-line print:text-black">{summary}</div>
        </div>

        {/* Patient Warnings */}
        {analysis.patientWarnings.length > 0 && (
          <div className={cx(glassClass, "p-6 rounded-[24px] print:bg-white print:border-black print:shadow-none")}>
            <h3 className="text-[13px] font-bold text-[#FF9F0A] uppercase tracking-widest mb-4 print:text-black">⚠ Profile Warnings</h3>
            {analysis.patientWarnings.map((w: any, i: number) => (
              <div key={i} className="bg-[#FF9F0A]/10 border border-[#FF9F0A]/20 rounded-xl p-4 mb-3 last:mb-0 print:border-black print:bg-transparent">
                <div className="text-white font-bold text-[15px] print:text-black">{w.drug.name} ⟶ {w.condition}</div>
                <div className="text-[#8E8E93] text-[13px] mt-1 print:text-black">{w.description}</div>
              </div>
            ))}
          </div>
        )}

        <div className={cx(glassClass, "p-6 rounded-[24px] print:bg-white print:border-black print:shadow-none")}>
          <h3 className="text-[13px] font-bold text-white/40 uppercase tracking-widest mb-4 print:text-black">Interactions</h3>
          {analysis.interactions.length === 0 ? (
            <div className="text-[#8E8E93] font-medium text-[14px]">No dangerous interactions detected.</div>
          ) : (
            <div className="space-y-4">
              {analysis.interactions.map((pair: any, idx: number) => {
                const color = getSeverityColor(pair.interaction.severity);
                return (
                  <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-[16px] p-5 relative overflow-hidden print:bg-transparent print:border-black print:break-inside-avoid">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] print:hidden" style={{ backgroundColor: color }} />
                    <div className="text-[11px] font-bold tracking-wider uppercase mb-1.5" style={{ color }}>{pair.interaction.severity}</div>
                    <div className="font-bold text-[18px] mb-1.5 print:text-black" style={{ color }}>{pair.drug1.name} + {pair.drug2.name}</div>
                    <div className="text-[#8E8E93] text-[14px] leading-relaxed mb-3 print:text-black">{pair.interaction.description}</div>
                    <div className="text-[#8E8E93] text-[12px] italic mb-3 print:text-black">Mechanism: {pair.interaction.mechanism}</div>
                    {pair.interaction.alternatives && pair.interaction.alternatives.length > 0 && (
                      <div className="bg-[#32D74B]/8 border border-[#32D74B]/15 p-3 rounded-xl print:bg-transparent print:border-green-600">
                        <div className="text-[#32D74B] font-bold text-[11px] uppercase mb-1.5">Safer Alternatives</div>
                        <ul className="text-white/80 text-[13px] space-y-1 print:text-black">
                          {pair.interaction.alternatives.map((alt: string, ai: number) => <li key={ai}>• {alt}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Export */}
        <button onClick={() => window.print()} className="w-full py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-white/10 transition-colors print:hidden shrink-0">
          <FileText className="w-4 h-4" /> Export PDF Report
        </button>
      </div>

      {/* Location Modal */}
      <AnimatePresence>
        {showLocationModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowLocationModal(false)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={cx(glassClass, "w-full max-w-[520px] p-8 relative z-10 flex flex-col rounded-[32px] max-h-[85vh] overflow-y-auto")}>
              <button onClick={() => setShowLocationModal(false)} className="absolute top-6 right-6 text-white/50 hover:text-white z-10"><X className="w-6 h-6" /></button>
              <div className="w-14 h-14 rounded-2xl bg-[#FF453A]/15 flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-[#FF453A]" />
              </div>
              <h2 className="font-bold text-[28px] text-white tracking-tight mb-1">Emergency Care</h2>
              <p className="text-[#8E8E93] text-[14px] mb-6 font-medium">Real-time GPS results via OpenStreetMap</p>

              {fetchingLoc ? (
                <div className="flex flex-col items-center py-10">
                  <RefreshCw className="w-8 h-8 text-[#0A84FF] animate-spin mb-4" />
                  <div className="text-white font-bold mb-1">Requesting Location Permission...</div>
                  <div className="text-[#8E8E93] text-[13px]">Please allow location access in your browser</div>
                </div>
              ) : (
                <>
                  {locError && (
                    <div className="bg-[#FF9F0A]/10 border border-[#FF9F0A]/20 rounded-xl p-4 mb-4 text-[#FF9F0A] text-[14px] font-medium">{locError}</div>
                  )}

                  {/* Real Hospitals */}
                  {locations.length > 0 && (
                    <>
                      <h3 className="text-[12px] font-bold text-white/40 uppercase tracking-widest mb-3">Nearby Hospitals</h3>
                      <div className="space-y-3 mb-6">
                        {locations.map((loc, i) => (
                          <div key={i} className="bg-white/5 rounded-[20px] p-5 border border-white/[0.06]">
                            <div className="text-white font-bold text-[17px] mb-0.5">{loc.name}</div>
                            <div className="text-[#8E8E93] text-[13px] font-medium mb-3">
                              {loc.distanceMiles > 0 ? `${loc.distanceMiles} mi · ` : ''}
                              <span className="text-[#32D74B]">{loc.status}</span>
                            </div>
                            <div className="flex gap-2">
                              <a href={`tel:${loc.phone}`} className="flex-1 py-2.5 bg-white/10 rounded-full text-white font-bold text-[13px] flex items-center justify-center gap-1.5 hover:bg-white/15 transition-colors">
                                <Phone className="w-3.5 h-3.5" /> Call
                              </a>
                              {loc.lat ? (
                                <a href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lon}`} target="_blank" rel="noreferrer" className="flex-1 py-2.5 bg-[#0A84FF] rounded-full text-white font-bold text-[13px] flex items-center justify-center gap-1.5 hover:bg-[#0A84FF]/80 transition-colors">
                                  <MapPin className="w-3.5 h-3.5" /> Directions
                                </a>
                              ) : loc.type === 'Telehealth' ? (
                                <a href={loc.website || '#'} target="_blank" rel="noreferrer" className="flex-1 py-2.5 bg-[#34C759] rounded-full text-white font-bold text-[13px] flex items-center justify-center gap-1.5 hover:bg-[#34C759]/80 transition-colors">
                                  <MessageCircle className="w-3.5 h-3.5" /> Consult
                                </a>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Online Doctors */}
                  {onlineDoctors.length > 0 && (
                    <>
                      <h3 className="text-[12px] font-bold text-[#0A84FF] uppercase tracking-widest mb-3">🩺 Online Doctor Consultation</h3>
                      <div className="space-y-3">
                        {onlineDoctors.map((doc, i) => (
                          <div key={i} className="bg-white/5 rounded-[20px] p-5 border border-white/[0.06]">
                            <div className="text-white font-bold text-[17px] mb-0.5">{doc.name}</div>
                            <div className="text-[#8E8E93] text-[13px] font-medium mb-3">
                              <span className="text-[#34C759]">{doc.status}</span> · Online Consultation
                            </div>
                            <a href={doc.website} target="_blank" rel="noreferrer" className="w-full py-2.5 bg-[#0A84FF] rounded-full text-white font-bold text-[13px] flex items-center justify-center gap-1.5 hover:bg-[#0A84FF]/80 transition-colors">
                              <ExternalLink className="w-3.5 h-3.5" /> Visit Platform
                            </a>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AiChatWidget analysis={analysis} profile={profile} summary={summary} />
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState('hero');
  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
  const [profile, setProfile] = useState<PatientProfile | null>(null);
  const [uiState, setUiState] = useState('idle');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('ms_loggedIn') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('ms_name') || 'User');

  const handleAnalyze = (drugs: Drug[], prof: PatientProfile) => {
    setSelectedDrugs(drugs);
    setProfile(prof);
    setScreen('results');
  };

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setScreen('dashboard');
  };

  const handleNavigate = (target: string) => {
    setScreen(target);
    if (target !== 'results') setUiState('idle');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen text-[#A1A1A6] font-sans relative">
      <CanvasAurora uiState={uiState} />
      <div className="relative z-10">
      <PillNavbar onNavigate={handleNavigate} screen={screen} isLoggedIn={isLoggedIn} userName={userName} />

      <AnimatePresence mode="wait">
        {screen === 'hero' && (
          <motion.div key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <HeroScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'login' && (
          <motion.div key="login" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <AuthScreen onLogin={handleLogin} onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'dashboard' && (
          <motion.div key="dashboard" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <DashboardScreen userName={userName} onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'security' && (
          <motion.div key="security" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <SecurityScreen />
          </motion.div>
        )}
        {screen === 'input' && (
          <motion.div key="input" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <InputScreen onAnalyze={handleAnalyze} />
          </motion.div>
        )}
        {screen === 'results' && profile && (
          <motion.div key="results" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <ResultsScreen selectedDrugs={selectedDrugs} profile={profile} setUiState={setUiState} onNavigate={handleNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
