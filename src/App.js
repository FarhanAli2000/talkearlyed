import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Parenting from "./pages/Parenting";
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
    "how-to-choose-the-right-centers-for-your-child": <BlogDetail />,
    "blog-detail": <BlogDetail />,
    contact: <Contact />,
    parenting: <Parenting />,
    "preschool-lists": <PreschoolLists />,
    "preschools-list": <PreschoolLists />,
  };

  return <div className="app">{pages[route] || <Home />}</div>;
}

export default App;
