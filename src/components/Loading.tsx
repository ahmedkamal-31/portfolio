function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 text-white"
    >
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
        <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center text-xs font-mono font-bold text-blue-400">
          AK
        </div>
      </div>
      <p className="text-xs font-mono text-slate-400 tracking-wider uppercase">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
