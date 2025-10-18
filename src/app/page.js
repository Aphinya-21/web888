import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* ===== ของใหม่ (Todo List App) ===== */}
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Todo List App</h1>

          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              placeholder="Enter a new task..."
              style={{
                padding: "6px",
                width: "200px",
                border: "1px solid gray",
                borderRadius: "4px",
              }}
            />
            <button
              style={{
                padding: "6px 10px",
                marginLeft: "5px",
                border: "1px solid gray",
                borderRadius: "4px",
                backgroundColor: "#f0f0f0",
                cursor: "pointer",
              }}
            >
              Add
            </button>
          </div>

          <ul style={{ listStyleType: "none", padding: "10px 0", lineHeight: "1.8" }}>
            <li>
              <input type="checkbox" /> Sleep
            </li>
            <li>
              <input type="checkbox" defaultChecked />{" "}
              <span style={{ textDecoration: "line-through" }}>Join React class</span>
            </li>
            <li>
              <input type="checkbox" /> Do react homework
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
