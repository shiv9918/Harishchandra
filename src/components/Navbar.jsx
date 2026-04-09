import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  FlaskConical,
  BookOpen,
  Award,
  Phone,
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  Presentation,
  Users,
  Mic,
  Briefcase,
  Trophy,
  Image,
  FileText,
  Calendar,
  Book,
  Cpu,
  Globe,
  Link as LinkIcon
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [teachingOpen, setTeachingOpen] = useState(false);
  const [mobileTeachingOpen, setMobileTeachingOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [mobileAchievementsOpen, setMobileAchievementsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#913c07] shadow-sm relative group">
      {/* Lighter animation on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
           style={{
             backgroundSize: '200% 100%',
             animation: 'lightSweep 2s ease-in-out'
           }} />
      
      <style>{`
        @keyframes lightSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (min-width: 1024px) {
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
      
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between relative z-10">

        {/* Left: Logo */}
        <div>
          <div className="text-lg sm:text-xl md:text-2xl font-secondary italic text-white items-center whitespace-nowrap">
            Dr. Harish Chandra
          </div>
          <div className="text-xs sm:text-sm text-white font-primary">
            Assistant Professor
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/profile" icon={<User size={16} />} label="Profile" />
          
          {/* Teaching Dropdown */}
          <div 
            className="relative group/teaching"
            onMouseEnter={() => setTeachingOpen(true)}
            onMouseLeave={() => setTeachingOpen(false)}
          >
            <button
              className="
                group relative flex items-center gap-1.5 px-3 py-2 rounded-md
                text-white font-primary text-base whitespace-nowrap
                hover:bg-white/10
                hover:shadow-md
                transition-all duration-300 ease-out
                before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                before:w-0 before:h-0.5 before:bg-white
                before:transition-all before:duration-300 before:ease-out
                hover:before:w-full
                after:absolute after:inset-0 after:rounded-md after:bg-white/5
                after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
            >
              <span className="relative z-10">
                <GraduationCap size={18} />
              </span>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">
                Teaching
              </span>
              <ChevronDown size={16} className="relative z-10" />
            </button>
            
            {teachingOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-44 bg-[#563c29] shadow-lg rounded-md border border-[#913c07] overflow-hidden z-50 group/box"
                style={{ animation: 'slideFromLeft 0.3s ease-out' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/box:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                <DropdownItem to="/teaching" icon={<GraduationCap size={16} />} label="Teaching" />
                <DropdownItem to="/assignments" icon={<FileText size={16} />} label="Assignments" />
                <DropdownItem to="/class-calendar" icon={<Calendar size={16} />} label="Class Calendar" />
                <DropdownItem to="/resources" icon={<Globe size={16} />} label="Resources" />
                <DropdownItem to="/web-links" icon={<LinkIcon size={16} />} label="Web Links" />
              </div>
            )}
          </div>
          
          {/* Research Dropdown */}
          <div 
            className="relative group/research"
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <button
              className="
                group relative flex items-center gap-1.5 px-3 py-2 rounded-md
                text-white font-primary text-base whitespace-nowrap
                hover:bg-white/10
                hover:shadow-md
                transition-all duration-300 ease-out
                before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                before:w-0 before:h-0.5 before:bg-white
                before:transition-all before:duration-300 before:ease-out
                hover:before:w-full
                after:absolute after:inset-0 after:rounded-md after:bg-white/5
                after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
            >
              <span className="relative z-10">
                <FlaskConical size={18} />
              </span>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">
                Research
              </span>
              <ChevronDown size={16} className="relative z-10" />
            </button>
            
            {researchOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-56 bg-[#563c29] shadow-lg rounded-md border border-[#913c07] overflow-hidden z-50 group/box"
                style={{ animation: 'slideFromLeft 0.3s ease-out' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/box:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                <DropdownItem to="/research" icon={<FlaskConical size={16} />} label="Research Projects" />
                <DropdownItem to="/publications" icon={<BookOpen size={16} />} label="Publications" />
                <DropdownItem to="/workshops" icon={<Briefcase size={16} />} label="Workshop" />
                <DropdownItem to="/paper-presentation" icon={<Presentation size={16} />} label="Paper Presentation" />
                <DropdownItem to="/participation" icon={<Users size={16} />} label="Miscellaneous Participation" />
                <DropdownItem to="/talks" icon={<Mic size={16} />} label="Talk Delivered" />
                <DropdownItem to="/extra-academic-activity" icon={<Trophy size={16} />} label="Extra Academic Activity" />
                <DropdownItem to="/books" icon={<Book size={16} />} label="Books" />
                <DropdownItem to="/software" icon={<Cpu size={16} />} label="Software" />
              </div>
            )}
          </div>
          
          {/* Achievements Dropdown */}
          <div 
            className="relative group/achievements"
            onMouseEnter={() => setAchievementsOpen(true)}
            onMouseLeave={() => setAchievementsOpen(false)}
          >
            <button
              className="
                group relative flex items-center gap-1.5 px-3 py-2 rounded-md
                text-white font-primary text-base whitespace-nowrap
                hover:bg-white/10
                hover:shadow-md
                transition-all duration-300 ease-out
                before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                before:w-0 before:h-0.5 before:bg-white
                before:transition-all before:duration-300 before:ease-out
                hover:before:w-full
                after:absolute after:inset-0 after:rounded-md after:bg-white/5
                after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
            >
              <span className="relative z-10">
                <Award size={18} />
              </span>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">
                Achievements
              </span>
              <ChevronDown size={16} className="relative z-10" />
            </button>
            
            {achievementsOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-44 bg-[#563c29] shadow-lg rounded-md border border-[#913c07] overflow-hidden z-50 group/box"
                style={{ animation: 'slideFromLeft 0.3s ease-out' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/box:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                <DropdownItem to="/achievements" icon={<Award size={16} />} label="Achievements" />
                <DropdownItem to="/awarded" icon={<Trophy size={16} />} label="Awarded" />
              </div>
            )}
          </div>
          
          <NavItem to="/gallery" icon={<Image size={18} />} label="Gallery" />
          <NavItem to="/contact" icon={<Phone size={18} />} label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-hamburger lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#563c29] border-t shadow-md relative z-10 block">
          <MobileNavItem to="/" label="Home" icon={<Home size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/profile" label="Profile" icon={<User size={16} />} onClick={() => setOpen(false)} />
          
          {/* Mobile Teaching Dropdown */}
          <div className="w-full block">
            <button
              onClick={() => setMobileTeachingOpen(!mobileTeachingOpen)}
              className="
                w-full text-left group relative flex items-center gap-3 px-6 py-3 overflow-hidden block
                text-white font-primary
                hover:bg-[#913c07] hover:text-white
                transition-all duration-300 ease-out
              "
            >
              <span className="relative z-10">
                <GraduationCap size={16} />
              </span>
              <span className="relative z-10 inline-block transition-all duration-300 grow">
                Teaching
              </span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileTeachingOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileTeachingOpen && (
              <div className="bg-[#3d2a1f]">
                <MobileSubNavItem to="/teaching" label="Teaching" icon={<GraduationCap size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/assignments" label="Assignments" icon={<FileText size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/class-calendar" label="Class Calendar" icon={<Calendar size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/resources" label="Resources" icon={<Globe size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/web-links" label="Web Links" icon={<LinkIcon size={16} />} onClick={() => setOpen(false)} />
              </div>
            )}
          </div>
          
          {/* Mobile Research Dropdown */}
          <div className="w-full block">
            <button
              onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
              className="
                w-full text-left group relative flex items-center gap-3 px-6 py-3 overflow-hidden block
                text-white font-primary
                hover:bg-[#913c07] hover:text-white
                transition-all duration-300 ease-out
              "
            >
              <span className="relative z-10">
                <FlaskConical size={16} />
              </span>
              <span className="relative z-10 inline-block transition-all duration-300 grow">
                Research
              </span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileResearchOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileResearchOpen && (
              <div className="bg-[#3d2a1f]">
                <MobileSubNavItem to="/research" label="Research Projects" icon={<FlaskConical size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/publications" label="Publications" icon={<BookOpen size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/workshops" label="Workshop" icon={<Briefcase size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/paper-presentation" label="Paper Presentation" icon={<Presentation size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/participation" label="Miscellaneous Participation" icon={<Users size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/talks" label="Talk Delivered" icon={<Mic size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/extra-academic-activity" label="Extra Academic Activity" icon={<Trophy size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/books" label="Books" icon={<Book size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/software" label="Software" icon={<Cpu size={16} />} onClick={() => setOpen(false)} />
              </div>
            )}
          </div>
          
          {/* Mobile Achievements Dropdown */}
          <div className="w-full block">
            <button
              onClick={() => setMobileAchievementsOpen(!mobileAchievementsOpen)}
              className="
                w-full text-left group relative flex items-center gap-3 px-6 py-3 overflow-hidden block
                text-white font-primary
                hover:bg-[#913c07] hover:text-white
                transition-all duration-300 ease-out
              "
            >
              <span className="relative z-10">
                <Award size={16} />
              </span>
              <span className="relative z-10 inline-block transition-all duration-300 grow">
                Achievements
              </span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAchievementsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileAchievementsOpen && (
              <div className="bg-[#3d2a1f]">
                <MobileSubNavItem to="/achievements" label="Achievements" icon={<Award size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/awarded" label="Awarded" icon={<Trophy size={16} />} onClick={() => setOpen(false)} />
              </div>
            )}
          </div>
          
          <MobileNavItem to="/gallery" label="Gallery" icon={<Image size={16} />} onClick={() => setOpen(false)} />
            <MobileNavItem to="/contact" label="Contact" icon={<Phone size={16} />} onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="
      group relative flex items-center gap-1.5 px-3 py-2 rounded-md
      text-white font-primary text-base whitespace-nowrap
      hover:bg-white/10
      hover:shadow-md
      transition-all duration-300 ease-out
      before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
      before:w-0 before:h-0.5 before:bg-white
      before:transition-all before:duration-300 before:ease-out
      hover:before:w-full
      after:absolute after:inset-0 after:rounded-md after:bg-white/5
      after:scale-0 after:transition-transform after:duration-300
      hover:after:scale-100
    "
  >
    <span className="relative z-10">
      {icon}
    </span>
    <span className="relative z-10 transition-all duration-300">
      {label}
    </span>
  </Link>
);

const MobileNavItem = ({ to, label, onClick, icon }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      group relative flex items-center gap-3 px-6 py-3 overflow-hidden
      text-white w-full font-primary
      hover:bg-[#913c07] hover:text-white
      transition-all duration-300 ease-out
      before:absolute before:left-0 before:top-0 before:h-full before:w-1.5
      before:bg-white
      before:scale-y-0 before:origin-top before:transition-transform before:duration-300
      hover:before:scale-y-100
      after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2
      after:w-0 after:h-0 after:bg-white/10 after:rounded-full
      after:transition-all after:duration-300
      hover:after:w-full hover:after:h-full
    "
  >
    {icon && (
      <span className="relative z-10 transition-transform duration-300">
        {icon}
      </span>
    )}
    <span className="relative z-10 inline-block transition-all duration-300">
      {label}
    </span>
  </Link>
);

const DropdownItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="
      relative flex items-center gap-3 px-4 py-3 text-white font-primary
      hover:bg-[#913c07]
      transition-all duration-300
      border-b border-white/10 last:border-b-0
      z-10 block w-full
    "
  >
    <span className="text-white relative z-10">
      {icon}
    </span>
    <span className="transition-all duration-300 text-sm relative z-10">
      {label}
    </span>
  </Link>
);

const MobileSubNavItem = ({ to, label, onClick, icon }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      group relative flex items-center gap-3 px-10 py-2.5 overflow-hidden
      text-white text-sm bg-[#3d2a1f] w-full font-primary
      hover:bg-[#913c07] hover:text-white
      transition-all duration-300 ease-out
    "
  >
    {icon && (
      <span className="transition-transform duration-300 text-white/80 group-hover:text-white group-hover:scale-110">
        {icon}
      </span>
    )}
    <span className="relative z-10 inline-block transition-all duration-300">
      {label}
    </span>
  </Link>
);

export default Navbar;
