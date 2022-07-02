import appStyles from "./App.module.css";
import Header from "./pages/Header/Header";
import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <InfoPage />
    </div>
  );
}

export default App;
