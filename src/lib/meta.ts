export function setDocumentMeta(title?: string, description?: string) {
  if (title !== undefined) document.title = title;
  if (description !== undefined) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }
}
