"use client";

import { useState } from "react";

export default function Preferences() {
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");
  const [accent, setAccent] = useState("purple");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
     
      <h2 className="text-lg font-semibold mb-1">Appearance</h2>
      <p className="text-sm text-gray-500 mb-4">
        Set or customize your preferences for the system
      </p>
      <hr className="mb-4 border-gray-200" />

      <div className="mb-4">
        <label className="text-sm font-medium">Language</label>
        <p className="text-xs text-gray-500 mb-2">
          Select the language of the platform
        </p>
        <select
          className="w-full mt-1 p-2 border rounded-lg"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
        </select>
      </div>
      <hr className="mb-4 border-gray-200" />

      
      <div className="mb-4">
        <label className="text-sm font-medium">Interface theme</label>
        <p className="text-xs text-gray-500 mb-2">
          Customize your application appearance
        </p>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {["Auto", "Light", "Dark"].map((t) => (
            <div
              key={t}
              className={`flex flex-col items-center p-3 rounded-xl border cursor-pointer ${
                theme === t
                  ? "border-purple-500 bg-purple-50 text-purple-600"
                  : "border-gray-300"
              }`}
              onClick={() => setTheme(t)}
            >
              <div className="w-16 h-12 bg-gray-200 rounded-md mb-2"></div>
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-4 border-gray-200" />

     
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Accent color</p>
          <p className="text-xs text-gray-500">
            Pick your platform&apos;s main color
          </p>
        </div>
        <div className="flex gap-3">
          {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
            <button
              key={c}
              className={`w-6 h-6 rounded-full border-2 ${
                accent === c ? "border-gray-800" : "border-transparent"
              }`}
              style={{ backgroundColor: c }}
              onClick={() => setAccent(c)}
            />
          ))}
        </div>
      </div>
      <hr className="mb-4 border-gray-200" />

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-sm">✨ Reduce motion</span>
          <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full">
            <div className="w-5 h-5 bg-white rounded-full shadow ml-0.5"></div>
          </div>
        </div>
        <hr className="border-gray-200" />

        <div className="flex items-center justify-between">
          <span className="text-sm">▶ Auto play</span>
          <div className="w-10 h-5 flex items-center bg-purple-500 rounded-full">
            <div className="w-5 h-5 bg-white rounded-full shadow ml-5"></div>
          </div>
        </div>
        <hr className="border-gray-200" />

        <div className="flex items-center justify-between">
          <span className="text-sm">🖼 High quality photo</span>
          <div className="w-10 h-5 flex items-center bg-purple-500 rounded-full opacity-50">
            <div className="w-5 h-5 bg-white rounded-full shadow ml-5"></div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />

   
      <div className="flex justify-between items-center">
        <button className="text-sm text-gray-500">Reset to default</button>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-100">Cancel</button>
          <button className="px-4 py-2 rounded-lg bg-purple-600 text-white">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
