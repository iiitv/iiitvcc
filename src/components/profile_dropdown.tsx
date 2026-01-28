"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import "./profile_dropdown.css";

interface ProfileDropdownProps {
  username: string | null;
  email: string | null;
  onLogout: () => void;
}

export function ProfileDropdown({
  username,
  email,
  onLogout,
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="profile-dropdown-wrapper" ref={dropdownRef}>
      <button
        className="profile-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="profile-avatar">{getInitials(username)}</div>
        <ChevronDown className={`chevron ${isOpen ? "open" : ""}`} size={16} />
      </button>

      {isOpen && (
        <div className="profile-dropdown-menu">
          <div className="profile-dropdown-header">
            <div className="profile-avatar-large">{getInitials(username)}</div>
            <div className="profile-info">
              <div className="profile-username">{username || "User"}</div>
              <div className="profile-email">{email || "user@email.com"}</div>
            </div>
          </div>

          <div className="profile-dropdown-divider" />

          <Link
            href="/profile"
            className="profile-dropdown-item"
            onClick={() => setIsOpen(false)}
          >
            <User size={16} />
            <span>Profile</span>
          </Link>

          <Link
            href="/profile/account"
            className="profile-dropdown-item"
            onClick={() => setIsOpen(false)}
          >
            <Settings size={16} />
            <span>Settings</span>
          </Link>

          <div className="profile-dropdown-divider" />

          <button
            className="profile-dropdown-item"
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
}
