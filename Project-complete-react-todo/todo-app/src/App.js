import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <>
      <div className="App">
        <PageTitle>TODO APP</PageTitle>
        <AppHeader />
        <br />
        <AppContent />
      </div>
    </>
  );
}

export default App;
