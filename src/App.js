import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";
import CollectionMoment from "./pages/CollectionPage/moment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="story" element={<StoryPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="collection/moment" element={<CollectionMoment />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
