import Image from "next/image";

export default function Home() {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
      color: "#333",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>🚧 Under Construction 🚧</h1>
    <p style={{ fontSize: "1.2rem" }}>We're working hard to bring you something amazing. Stay tuned!</p>
  </div>
  );
}
