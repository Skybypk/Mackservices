import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppBubble from './WhatsAppBubble';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <WhatsAppBubble />
      <div className="mb-6">
        <TopBar />
      </div>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
} 