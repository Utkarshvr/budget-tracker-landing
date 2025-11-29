"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

export function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl bg-[#111827] border ${
          isOpen ? "border-[#22c55e]" : "border-[#1f2937]"
        } text-[#f9fafb] focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all flex items-center justify-between`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? "text-[#f9fafb]" : "text-[#6b7280]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 rounded-xl bg-[#111827] border border-[#1f2937] shadow-2xl shadow-black/50 overflow-hidden">
          <ul
            role="listbox"
            className="py-2 max-h-60 overflow-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#22c55e #111827",
            }}
          >
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  value === option.value
                    ? "bg-[#22c55e]/20 text-[#22c55e]"
                    : "text-[#f9fafb] hover:bg-[#1f2937]"
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hidden input for form validation */}
      <input
        type="hidden"
        id={id}
        value={value}
        required={required}
      />
    </div>
  );
}

