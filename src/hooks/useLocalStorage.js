import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // 1) State wird initialisiert – aber wir prüfen zuerst, ob etwas im localStorage gespeichert ist.
  const [value, setValue] = useState(() => {
    try {
      // Versuche gespeicherten Wert zu holen

      const stored = localStorage.getItem(key);
      // Wenn etwas existiert → benutze es
      // Wenn nicht → initialValue (z.B. leeres Array)
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error("LocalStorage Error:", err);
      return initialValue;
    }
  });

  // 2) Immer wenn "value" sich ändert, speichern wir es
  //    automatisch im localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("LocalStorage Write Error:", err);
    }
  }, [key, value]);
  // Abhängig von: wenn sich key ODER value ändert

  // Rückgabe: genau wie useState – nur erweitert mit Storage
  return [value, setValue];
}
