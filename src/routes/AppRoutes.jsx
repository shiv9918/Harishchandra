import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Teaching from "../pages/Teaching";
import Assignments from "../pages/Assignments";
import ClassCalendar from "../pages/ClassCalendar";
import Research from "../pages/Research";
import Publications from "../pages/Publications";
import Workshops from "../pages/Workshops";
import PaperPresentation from "../pages/PaperPresentation";
import Participation from "../pages/Participation";
import Talks from "../pages/Talks";
import ExtraAcademicActivity from "../pages/ExtraAcademicActivity";
import Achievements from "../pages/Achievements";
import Awarded from "../pages/Awarded";
import Gallery from "../pages/Gallery";
import Contact from "../pages/ContactMe";
import Books from "../pages/books";
import Software from "../pages/Software";
import Resources from "../pages/Resources";
import WebLinks from "../pages/WebLinks"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/class-calendar" element={<ClassCalendar />} />
      <Route path="/research" element={<Research />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/paper-presentation" element={<PaperPresentation />} />
      <Route path="/participation" element={<Participation />} />
      <Route path="/talks" element={<Talks />} />
      <Route path="/extra-academic-activity" element={<ExtraAcademicActivity />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/awarded" element={<Awarded />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Books />} />
      <Route path="/software" element={<Software />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/web-links" element={<WebLinks />} />
    </Routes>
  );
};

export default AppRoutes;
