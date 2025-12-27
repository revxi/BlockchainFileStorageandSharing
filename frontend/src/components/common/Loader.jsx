import React from 'react';

/**
 * A collection of skeleton loaders for the "Snow & Slate" UI.
 */
const Loader = {
  // A generic shimmering box
  Skeleton: ({ className }) => (
    <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
  ),

  // Mimics a single FileCard
  FileCardSkeleton: () => (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-slate-100 rounded-xl animate-pulse" />
        <div className="w-16 h-5 bg-slate-100 rounded-full animate-pulse" />
      </div>
      <div className="space-y-2">
        <div className="w-3/4 h-4 bg-slate-100 rounded animate-pulse" />
        <div className="w-1/2 h-3 bg-slate-50 rounded animate-pulse" />
      </div>
      <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between">
        <div className="w-8 h-8 bg-slate-50 rounded-full animate-pulse" />
        <div className="w-8 h-8 bg-slate-50 rounded-full animate-pulse" />
      </div>
    </div>
  ),

  // Full Grid Loader for the Dashboard
  FileGridLoader: ({ count = 6 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <Loader.FileCardSkeleton key={i} />
      ))}
    </div>
  )
};

export default Loader;