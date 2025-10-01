'use client';

import { useState } from 'react';
import styles from '../../styles/components/blog/CodeBlock.module.css';

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatCode = (code) => {
    return code.split('\n').map((line, index) => (
      <div key={index} className={styles.codeLine}>
        {line.split(/(\s+|[(){}[\];,.]|\/\/.*$)/).map((part, i) => {
          if (part.match(/^\/\/.*$/)) return <span key={i} className={styles.comment}>{part}</span>;
          if (['const', 'let', 'var', 'function', 'class', 'import', 'export', 'default', 'return', 'if', 'else', 'for', 'while', 'try', 'catch', 'finally', 'async', 'await'].includes(part)) {
            return <span key={i} className={styles.keyword}>{part}</span>;
          }
          if (part.match(/^['"`].*['"`]$/)) return <span key={i} className={styles.string}>{part}</span>;
          if (part.match(/^[A-Z][a-zA-Z]*$/)) return <span key={i} className={styles.function}>{part}</span>;
          return <span key={i}>{part}</span>;
        })}
      </div>
    ));
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeLanguage}>{language}</span>
        <button className={styles.codeCopy} onClick={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className={styles.codeContent}>
        {formatCode(code)}
      </div>
    </div>
  );
};

export default CodeBlock;