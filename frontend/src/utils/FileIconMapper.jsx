import { FileText, Image, Video, Music, FileCode, File, Type } from 'lucide-react';

export const getFileIcon = (extension, size = 24) => {
  const ext = extension?.toLowerCase();
  
  const iconProps = {
    size,
    strokeWidth: 1.5,
    className: "text-slate-600"
  };

  switch (ext) {
    case 'pdf':
      return <Type {...iconProps} className="text-rose-500" />; // PDF specific color
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'svg':
      return <Image {...iconProps} className="text-blue-500" />;
    case 'mp4':
    case 'mov':
      return <Video {...iconProps} className="text-indigo-500" />;
    case 'mp3':
    case 'wav':
      return <Music {...iconProps} className="text-purple-500" />;
    case 'js':
    case 'sol':
    case 'html':
    case 'css':
      return <FileCode {...iconProps} className="text-emerald-500" />;
    default:
      return <File {...iconProps} />;
  }
};