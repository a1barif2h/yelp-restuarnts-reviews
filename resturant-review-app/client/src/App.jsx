import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RestaurantProvider } from "./context/restaurantContext";
import HomePage from "./routes/HomePage";
import RestaurantDetailPage from "./routes/RestaurantsDetailPage";
import RestaurantUpdatePage from "./routes/RestaurantUpdatePage";

const App = () => {
  return (
    <div>
      <RestaurantProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
            <Route
              path="/restaurant/:id/update"
              element={<RestaurantUpdatePage />}
            />
          </Routes>
        </Router>
      </RestaurantProvider>
    </div>
  );
};

export default App;
