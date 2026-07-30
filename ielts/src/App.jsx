import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import LibraryPage from "./pages/LibraryPage";
import MockTestPage from "./pages/MockTestPage";
import ArenaPage from "./pages/ArenaPage";
import AICheckerPage from "./pages/AICheckerPage";
import VocabularyPage from "./pages/VocabularyPage";
import DashboardPage from "./pages/DashboardPage";


function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route 
        path="/test" 
        element={<TestPage />} 
      />

      <Route
        path="/library"
        element={<LibraryPage />}
      />


      <Route
        path="/mock-test"
        element={<MockTestPage />}
      />


      <Route
        path="/arena"
        element={<ArenaPage />}
      />


      <Route
        path="/ai-checker"
        element={<AICheckerPage />}
      />


      <Route
        path="/vocabulary"
        element={<VocabularyPage />}
      />


      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />


    </Routes>

  );
}


export default App;