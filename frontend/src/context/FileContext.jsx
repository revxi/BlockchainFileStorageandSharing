import { createContext, useContext, useState, useCallback } from 'react';
import { fileService } from '../services/file.service';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshFiles = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fileService.getAllFiles();
      setFiles(data);
    } catch (err) {
      console.error("Failed to sync vault");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addFileOptimistic = (newFile) => {
    setFiles((prev) => [newFile, ...prev]);
  };

  return (
    <FileContext.Provider value={{ files, isLoading, refreshFiles, addFileOptimistic }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFiles = () => useContext(FileContext);