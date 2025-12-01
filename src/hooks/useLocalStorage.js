import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // 1) State wird initialisiert – aber wir prüfen zuerst, ob etwas im localStorage gespeichert ist.

  // Versuche, aus localStorage den Wert zu holen
  // Falls vorhanden → parse JSON und benutze ihn.
  // Falls nicht vorhanden → benutze initialValue.
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      // Wenn ein gespeicherter Wert existiert → zurückgeben
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error("LocalStorage Error:", err);
      return initialValue; // Sicherheitsfallback
    }
  });

  // 2) Speichern bei Änderungen
  //  useEffect läuft jedes Mal, wenn: value ,der key sich ändert
  //  Dann speichern wir die Daten automatisch wieder in den localStorage,als JSON-String.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("LocalStorage Write Error:", err);
    }
  }, [key, value]);

  // Rückgabe: genau wie useState – nur erweitert mit Storage
  return [value, setValue];
}
