import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <PageTitle>TODO APP</PageTitle>
        {/* <SearchBar /> */}

        <AppHeader />
        <br />
        <AppContent />
      </div>
    </>
  );
}

export default App;
