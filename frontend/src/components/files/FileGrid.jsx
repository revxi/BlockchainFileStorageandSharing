import React from 'react';
import FileCard from './FileCard';
import { motion } from 'framer-motion';

const FileGrid = ({ files, onFileSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
    >
      {files.map((file, index) => (
        <motion.div
          key={file.id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <FileCard 
            file={file} 
            onSelect={onFileSelect} 
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FileGrid;