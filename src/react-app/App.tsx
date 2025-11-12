import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ServicesPage from "@/react-app/pages/Services";
import ProjectsPage from "@/react-app/pages/Projects";
import GetInvolvedPage from "@/react-app/pages/GetInvolved";
import ContactPage from "@/react-app/pages/Contact";
import ApplyNowPage from "@/react-app/pages/ApplyNow";
import BecomePartnerPage from "@/react-app/pages/BecomePartner";
import CorporateSponsorshipPage from "@/react-app/pages/CorporateSponsorship";
import ExploreOurMissionPage from "@/react-app/pages/ExploreOurMission";
import DonateNowPage from "@/react-app/pages/DonateNow";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply-now" element={<ApplyNowPage />} />
        <Route path="/become-partner" element={<BecomePartnerPage />} />
        <Route path="/corporate-sponsorship" element={<CorporateSponsorshipPage />} />
        <Route path="/explore-mission" element={<ExploreOurMissionPage />} />
        <Route path="/donate" element={<DonateNowPage />} />
      </Routes>
    </Router>
  );
}
