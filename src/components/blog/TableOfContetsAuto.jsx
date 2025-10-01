"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/blog/TableOfContents.module.css";
import GithubSlugger from "github-slugger"; // ensures IDs match rehype-slug
// npm i github-slugger

const HEADING_SELECTOR = "h2";

const TableOfContentsAuto = ({ containerId, fallbackItems }) => {
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

export default TableOfContentsAuto;

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import GithubSlugger from "github-slugger";
// import styles from "@/styles/components/blog/TableOfContents.module.css";

// /**
//  * Props:
//  * - containerId: string (id of element that wraps the MDX output) - recommended
//  * - selector: string (default "h2, h3")
//  * - updateHash: boolean (default true)
//  * - headerOffset: number (px) sticky header height; applied via scroll-margin-top (default 80)
//  */
// const TableOfContentsAuto = ({
//   containerId = "post-article",
//   selector = "h2, h3",
//   updateHash = true,
//   headerOffset = 80,
//   fallbackItems = [],
// }) => {
//   const [items, setItems] = useState([]); // flat list with level
//   const [activeId, setActiveId] = useState("");
//   const rootRef = useRef(null);
//   const observerRef = useRef(null);
//   const mutationRef = useRef(null);

//   // Build a nested tree (h3 children under previous h2)
//   const tree = useMemo(() => {
//     const out = [];
//     let currentH2 = null;
//     for (const it of items) {
//       if (it.level === 2) {
//         currentH2 = { ...it, children: [] };
//         out.push(currentH2);
//       } else if (it.level === 3) {
//         if (!currentH2) {
//           // No preceding h2; promote to top-level to avoid dropping it
//           out.push({ ...it, children: [] });
//         } else {
//           currentH2.children.push({ ...it, children: [] });
//         }
//       } else {
//         out.push({ ...it, children: [] });
//       }
//     }
//     return out;
//   }, [items]);

//   // Utility: ensure all headings have IDs that match rehype-slug, and set scroll-margin
//   const scanHeadings = () => {
//     const root = containerId ? document.getElementById(containerId) : document;
//     if (!root) return [];

//     rootRef.current = root;
//     const slugger = new GithubSlugger();
//     slugger.reset();

//     const headings = Array.from(root.querySelectorAll(selector));
//     const built = headings.map((h) => {
//       const text = (h.textContent || "").trim();
//       let id = h.getAttribute("id");
//       if (!id) {
//         id = slugger.slug(text);
//         h.setAttribute("id", id);
//       }
//       // Set scroll-margin-top so fixed headers don't cover headings
//       const existing = h.style.scrollMarginTop;
//       if (!existing) {
//         h.style.scrollMarginTop = `${headerOffset}px`;
//       }
//       const level = h.tagName.toLowerCase() === "h3" ? 3 : 2;
//       return { id, title: text, level };
//     });

//     return built.length ? built : fallbackItems;
//   };

//   // Build ToC initially and whenever MDX content changes (e.g., hydration, client transforms)
//   useEffect(() => {
//     setItems(scanHeadings());

//     // Watch for DOM mutations inside the container (MDX changes, collapses, etc.)
//     const root = containerId ? document.getElementById(containerId) : document;
//     if (!root) return;

//     mutationRef.current = new MutationObserver(() => {
//       // Re-scan when headings change
//       setItems(scanHeadings());
//     });

//     mutationRef.current.observe(root, {
//       childList: true,
//       subtree: true,
//       characterData: false,
//     });

//     return () => {
//       mutationRef.current?.disconnect();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [containerId, selector, headerOffset]);

//   // Observe visibility to set activeId
//   useEffect(() => {
//     if (!items.length) return;

//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const id = entry.target.getAttribute("id");
//           if (entry.isIntersecting && id) {
//             setActiveId(id);
//             if (updateHash && typeof window !== "undefined") {
//               // only update hash if user scrolled (avoid fight with click scroll)
//               window.history.replaceState(null, "", `#${id}`);
//             }
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "-20% 0px -70% 0px",
//         threshold: [0, 1.0],
//       }
//     );

//     observerRef.current = io;

//     items.forEach(({ id }) => {
//       const el = document.getElementById(id);
//       if (el) io.observe(el);
//     });

//     return () => io.disconnect();
//   }, [items, updateHash]);

//   // On initial load, if there's a hash in the URL, scroll to it (after headings exist)
//   useEffect(() => {
//     if (!items.length) return;
//     if (typeof window === "undefined") return;
//     const hash = decodeURIComponent(window.location.hash || "").replace(/^#/, "");
//     if (!hash) return;
//     const el = document.getElementById(hash);
//     if (el) {
//       // Defer to allow paint
//       requestAnimationFrame(() => {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//         setActiveId(hash);
//       });
//     }
//   }, [items]);

//   const onClick = (e, id) => {
//     e.preventDefault();
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//     setActiveId(id);
//     if (updateHash && typeof window !== "undefined") {
//       window.history.replaceState(null, "", `#${id}`);
//     }
//   };

//   if (!items.length) return null;

//   return (
//     <nav className={styles.tocContainer} aria-label="Table of contents">
//       <h3 className={styles.tocTitle}>📋 Table of Contents</h3>
//       <ul className={styles.tocList}>
//         {tree.map((item) => (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               onClick={(e) => onClick(e, item.id)}
//               className={`${styles.tocLink} ${activeId === item.id ? styles.active : ""}`}
//               aria-current={activeId === item.id ? "true" : "false"}
//             >
//               {item.title}
//             </a>
//             {item.children?.length ? (
//               <ul className={styles.tocSubList}>
//                 {item.children.map((child) => (
//                   <li key={child.id} className={styles.nested}>
//                     <a
//                       href={`#${child.id}`}
//                       onClick={(e) => onClick(e, child.id)}
//                       className={`${styles.tocLink} ${activeId === child.id ? styles.active : ""}`}
//                       aria-current={activeId === child.id ? "true" : "false"}
//                     >
//                       {child.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : null}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default TableOfContentsAuto;
