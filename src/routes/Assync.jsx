import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MovieList } from "../pages/MovieList"
import { MovieDetail } from "../pages/MovieDetail"

export const Assync = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  )
}
