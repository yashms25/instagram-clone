import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "./config/FirebaseConfig";
import Index from "./Index";

export default function App() {
  useEffect(() => {
    const app = initializeApp(FirebaseConfig);
  }, []);
  return <Index />;
}
