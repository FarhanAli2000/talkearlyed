import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Parenting from "./pages/Parenting";
import EarlyEducation from "./pages/EarlyEducation";
import PreschoolLists from "./pages/PreschoolLists";
import "./App.css";

function App() {
  const getRoute = () => window.location.hash.replace("#", "") || "home";
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const pages = {
    about: <About />,
    "advice-for-new-moms-complete-postpartum-survival-recovery-guid": <BlogDetail />,
    "advice-for-new-moms-complete-postpartum-survival-recovery-guide": <BlogDetail />,
    "creative-lunch-ideas-for-toddlers": <BlogDetail />,
    "toddler-lunch-box-ideas-a-complete-guide-for-parents": <BlogDetail />,
    "early-childhood-education-guide": <BlogDetail />,
    "low-sugar-breakfast-ideas-for-kids": <BlogDetail />,
    "lunch-ideas-for-picky-eaters": <BlogDetail />,
    "daycare-vs-stay-at-home-guide": <BlogDetail />,
    "first-year-at-daycare-what-to-expect": <BlogDetail />,
    "positive-parenting-tips-for-toddlers": <BlogDetail />,
    "what-are-two-positive-parenting-tips-for-middle-childhood-6-8-years": (
      <BlogDetail />
    ),
    "building-healthy-snack-habits-for-toddlers-tips-for-parents": (
      <BlogDetail />
    ),
    "practical-tips-for-promoting-healthy-eating-habits-in-children": (
      <BlogDetail />
    ),
    "positive-parenting-tips-for-children-aged-5-12": <BlogDetail />,
    "crafts-for-kids": <BlogDetail />,
    "outdoor-sensory-play-ideas-for-babies-and-toddlers": <BlogDetail />,
    "indoor-sensory-activities-for-infants-during-rainy-days": <BlogDetail />,
    "learning-toys-for-4-year-olds": <BlogDetail />,
    "how-sensory-play-helps-infant-motor-skill-development": <BlogDetail />,
    "best-educational-toys": <BlogDetail />,
    "how-to-choose-the-right-centers-for-your-child": <BlogDetail />,
    "blog-detail": <BlogDetail />,
    contact: <Contact />,
    parenting: <Parenting />,
    "early-education": <EarlyEducation />,
    "preschool-lists": <PreschoolLists />,
    "preschools-list": <PreschoolLists />,
  };

  return <div className="app">{pages[route] || <Home />}</div>;
}

export default App;
