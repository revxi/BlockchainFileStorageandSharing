import React from 'react';
import EmptyVaultIllustration from '../../assets/illustrations/EmptyState';
import Button from './Button';

const EmptyStateView = ({ title, description, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-dashed border-slate-200 rounded-3xl">
      <EmptyVaultIllustration className="w-64 h-64 mb-6" />
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm mb-8">{description}</p>
      {onAction && (
        <Button onClick={onAction} variant="primary">
          Upload your first file
        </Button>
      )}
    </div>
  );
};

export default EmptyStateView;