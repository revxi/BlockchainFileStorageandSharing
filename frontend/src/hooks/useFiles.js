import { useState, useEffect } from 'react';
import { fileService } from '../services/file.service';

export const useFiles = (view = 'all') => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const data = await fileService.getAllFiles(view);
      setFiles(data);
    } catch (err) {
      console.error("Failed to load files");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchFiles(); }, [view]);

  const removeFile = async (id) => {
    const originalFiles = [...files];
    setFiles(files.filter(f => f.id !== id)); // Optimistic UI
    try {
      await fileService.deleteFile(id);
    } catch (err) {
      setFiles(originalFiles); // Rollback on error
    }
  };

  return { files, loading, removeFile, refresh: fetchFiles };
};