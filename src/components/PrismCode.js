import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-sql.js';

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
