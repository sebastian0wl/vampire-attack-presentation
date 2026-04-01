"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X, Download, ExternalLink, FileText, Loader2 } from "lucide-react";

interface FileViewerProps {
  filePath: string;
  fileName: string;
  onClose: () => void;
}

export default function FileViewer({ filePath, fileName, onClose }: FileViewerProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [filePath]);

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const isCSV = fileName.endsWith(".csv");

  return (
    <div className="fixed inset-0 z-[100] flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-4xl bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/95 backdrop-blur px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <FileText size={18} className="text-blue-400 shrink-0" />
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-white truncate">{fileName}</h2>
              <p className="text-[10px] text-zinc-500 font-mono truncate">{filePath}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors"
            >
              <Download size={12} />
              Download
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={24} className="text-blue-400 animate-spin" />
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
              <FileText size={32} className="mb-3" />
              <p className="text-sm">File not found or unable to load</p>
              <p className="text-xs mt-1 font-mono">{filePath}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="px-8 py-6">
              {isCSV ? (
                <CSVTable content={content} />
              ) : (
                <div className="prose prose-invert prose-sm max-w-none
                  prose-headings:text-white prose-headings:font-semibold
                  prose-h1:text-2xl prose-h1:border-b prose-h1:border-zinc-800 prose-h1:pb-3 prose-h1:mb-6
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-zinc-300 prose-p:leading-relaxed
                  prose-li:text-zinc-300
                  prose-strong:text-white
                  prose-em:text-zinc-400
                  prose-code:text-blue-300 prose-code:bg-zinc-800 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-xs
                  prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
                  prose-blockquote:border-blue-500/50 prose-blockquote:bg-zinc-900/50 prose-blockquote:rounded-r-lg prose-blockquote:py-1
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                  prose-hr:border-zinc-800
                  prose-table:text-sm
                  prose-th:text-zinc-200 prose-th:font-medium prose-th:bg-zinc-800/50 prose-th:px-3 prose-th:py-2
                  prose-td:text-zinc-300 prose-td:px-3 prose-td:py-2 prose-td:border-zinc-800
                ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

function CSVTable({ content }: { content: string }) {
  const rows = content.trim().split("\n").map((row) => row.split(",").map((cell) => cell.trim()));
  const headers = rows[0] || [];
  const data = rows.slice(1);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 bg-zinc-800/50 text-zinc-200 font-medium border-b border-zinc-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-zinc-900/30" : ""}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-zinc-300 border-b border-zinc-800/50">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
