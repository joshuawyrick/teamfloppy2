import { useEffect } from 'react';
import { setDocumentMeta } from '@/lib/meta';

export function useMeta(title: string, description: string) {
  useEffect(() => {
    setDocumentMeta(title, description);
  }, [title, description]);
}
