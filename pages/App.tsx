import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import BookList from './components/BookList';
import AdminDashboard from './components/AdminDashboard';
import UpdateBook from './components/updateBook';
import DeleteBook from './components/DeleteBook';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import IssuedPage from './components/IssuedPage';
import ReadBookPage from './components/ReadBookPage';
import 'tailwindcss/tailwind.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/updatebook" element={
          <UpdateBook 
            title={''} 
            details={''} 
            cover={''} 
            onUpdate={(title, details, cover) => {
              // Replace this with your implementation
              console.log(`Updated book: ${title}, ${details}, ${cover}`);
            }} 
          />} 
        />
        <Route path="/deletebook" element={
          <DeleteBook 
            cover={''} 
            onDelete={() => {
              // Replace this with your implementation
              console.log('Deleted book');
            }} 
          />} 
        />
        <Route path="/addbook" element={
          <AddBook 
            onAdd={(title, author, details, cover) => {
              // Replace this with your implementation
              console.log(`Added book: ${title}, ${author}, ${details}, ${cover}`);
            }} 
          />} 
        />
        <Route path="/issued" element={<IssuedPage />} />
        <Route
        path="/readbook"
        element={<ReadBookPage pdfUrl="https://drive.google.com/file/d/1v3oxcbp74PkUFoP4EoxIl2EWVdzaoYlV/view?usp=sharing" />}
      />
      </Routes>
    </Router>
  );
};

export default App;