"use client";

import { useEffect, useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("lummeni-sidebar-open");

    if (savedState === "true") {
      setIsSidebarOpen(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lummeni-sidebar-open", String(isSidebarOpen));
  }, [isSidebarOpen]);

  function toggleSidebar() {
    setIsSidebarOpen((currentState) => !currentState);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2E2E2E]">
      <AdminSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div
        className={`flex min-h-screen flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-72" : "lg:ml-0"
        }`}
      >
        <AdminHeader
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}