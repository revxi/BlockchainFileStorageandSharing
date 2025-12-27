import React from 'react';

const PermissionBadge = ({ role }) => {
  const isOwner = role === 'owner';
  const isEditor = role === 'editor';

  return (
    <span className={`
      px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider
      ${isOwner ? 'bg-indigo-100 text-indigo-700' : 
        isEditor ? 'bg-emerald-100 text-emerald-700' : 
        'bg-slate-100 text-slate-600'}
    `}>
      {role}
    </span>
  );
};

export default PermissionBadge;