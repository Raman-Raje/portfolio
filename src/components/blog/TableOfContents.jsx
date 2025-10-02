"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/blog/TableOfContents.module.css";
import GithubSlugger from "github-slugger"; // ensures IDs match rehype-slug
// npm i github-slugger

const HEADING_SELECTOR = "h2";

const TableOfContents = ({ containerId, fallbackItems }) => {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState("");

  // Build items by scanning the actual headings rendered by MDX
  useEffect(() => {
    const root = containerId
      ? document.getElementById(containerId)
      : document;

    if (!root) return;

    const slugger = new GithubSlugger();
    slugger.reset();

    const headings = Array.from(root.querySelectorAll(HEADING_SELECTOR));

    const built = headings.map((h) => {
      const text = (h.textContent || "").trim();
      // Use existing id from rehype-slug; if not present, generate and set it
      let id = h.getAttribute("id");
      if (!id) {
        id = slugger.slug(text);
        h.setAttribute("id", id);
      }
      const level = h.tagName.toLowerCase() === "h3" ? 3 : 2;
      return { id, title: text, level };
    });

    // If nothing found but user provided fallbackItems (e.g., frontmatter), use those
    setItems(built.length ? built : (fallbackItems || []));
  }, [containerId, fallbackItems]);

  // Observe which heading is currently active
  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting && id) {
            setActiveId(id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1.0] }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const onClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!items.length) return null;

  return (
    <nav className={styles.tocContainer} aria-label="Table of contents">
      <h3 className={styles.tocTitle}>📋 Table of Contents</h3>
      <ul className={styles.tocList}>
        {items.map(({ id, title, level }) => (
          <li key={id} className={level === 3 ? styles.nested : undefined}>
            <button
              onClick={() => onClick(id)}
              className={`${styles.tocLink} ${activeId === id ? styles.active : ""}`}
              aria-current={activeId === id ? "true" : "false"}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;