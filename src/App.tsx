import appStyles from "./App.module.css";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <InfoPage />
      <Footer />
    </div>
  );
}

export default App;
