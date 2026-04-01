"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X, Download, FileText, Loader2, Tag, Clock, Users } from "lucide-react";
import { blufMap } from "@/lib/bluf";

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
  const bluf = blufMap[filePath];

  return (
    <div className="fixed inset-0 z-[100] flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-4xl bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <FileText size={16} className="text-blue-400" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-white truncate">{fileName}</h2>
                <p className="text-[11px] text-zinc-500 font-mono truncate mt-0.5">{filePath}</p>
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

          {/* BLUF Card */}
          {bluf && (
            <div className="px-8 pb-4">
              <div className="rounded-xl bg-blue-950/30 border border-blue-500/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">BLUF</span>
                  <span className="text-[10px] text-zinc-600">Bottom Line Up Front</span>
                </div>
                <p className="text-sm text-zinc-200 leading-relaxed">{bluf.bluf}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                    <Tag size={9} className="text-blue-400" />
                    {bluf.type}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                    <Clock size={9} className="text-emerald-400" />
                    {bluf.phase}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                    <Users size={9} className="text-amber-400" />
                    {bluf.audience}
                  </span>
                </div>
              </div>
            </div>
          )}
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
            <div className="px-10 py-8">
              {isCSV ? (
                <CSVTable content={content} />
              ) : (
                <div className="prose prose-invert prose-base max-w-none
                  prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
                  prose-h1:text-[1.75rem] prose-h1:border-b prose-h1:border-zinc-800 prose-h1:pb-4 prose-h1:mb-8
                  prose-h2:text-[1.35rem] prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-zinc-100
                  prose-h3:text-[1.1rem] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-zinc-200
                  prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-zinc-300
                  prose-p:text-[15px] prose-p:text-zinc-300 prose-p:leading-[1.8] prose-p:mb-4
                  prose-li:text-[15px] prose-li:text-zinc-300 prose-li:leading-[1.7] prose-li:my-1
                  prose-ul:my-4 prose-ol:my-4
                  prose-strong:text-white prose-strong:font-semibold
                  prose-em:text-zinc-400 prose-em:italic
                  prose-code:text-blue-300 prose-code:bg-zinc-800/80 prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[13px] prose-code:font-normal
                  prose-pre:bg-zinc-900/80 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl prose-pre:p-5
                  prose-blockquote:border-l-2 prose-blockquote:border-blue-500/50 prose-blockquote:bg-blue-950/20 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:my-6 prose-blockquote:not-italic
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  prose-hr:border-zinc-800 prose-hr:my-8
                  prose-table:text-sm prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden
                  prose-thead:bg-zinc-800/60
                  prose-th:text-zinc-200 prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:border-b prose-th:border-zinc-700
                  prose-td:text-zinc-300 prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-zinc-800/60
                  prose-img:rounded-xl prose-img:border prose-img:border-zinc-800
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
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 bg-zinc-800/60 text-zinc-200 font-semibold border-b border-zinc-700 first:rounded-tl-xl last:rounded-tr-xl">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={`transition-colors hover:bg-zinc-800/30 ${i % 2 === 0 ? "bg-zinc-900/30" : ""}`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-zinc-300 border-b border-zinc-800/40">
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
