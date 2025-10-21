// Minimal markdown-to-HTML helper: supports **bold**, *italic*, `code`, and links [text](url)
export function mdToHtml(markdown: string | undefined) {
  if (!markdown) return '';
  // Escape HTML
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Helper that applies inline markdown transforms on already-escaped text
  const applyInlineMarkdown = (text: string) => {
    let t = text;
    // Links: [text](url)
    t = t.replace(/\[(.+?)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    // Bold: **text**
    t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Italic: *text*
    t = t.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Inline code: `code`
    t = t.replace(/`(.+?)`/g, '<code class="px-1 py-0.5 bg-gray-100 rounded">$1</code>');
    // Newlines to <br>
    t = t.replace(/\n/g, '<br/>');
    return t;
  };

  // Extract any <span style="color:#hex">...</span> produced by the CMS editor and replace with placeholders.
  // We'll process inner content safely and then re-insert the final span HTML after processing the rest of the markdown.
  // Support tokens like [color=#ff0000]texto[/color] as used by the token-based admin.
  const tokenPattern = /\[color=(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}))\]([\s\S]*?)\[\/color\]/g;
  const spans: string[] = [];
  let placeholderIndex = 0;
  const withPlaceholders = markdown.replace(tokenPattern, (_match, color: string, inner: string) => {
    const innerEsc = esc(inner);
    const innerHtml = applyInlineMarkdown(innerEsc);
    const finalSpan = `<span style="color:${color}">${innerHtml}</span>`;
    const placeholder = `__COLOR_SPAN_${placeholderIndex++}__`;
    spans.push(finalSpan);
    return placeholder;
  });

  // Escape the rest of the markdown (placeholders are safe tokens and won't be escaped into entities)
  let out = esc(withPlaceholders);

  // Apply inline markdown transforms on the escaped content
  out = applyInlineMarkdown(out);

  // Restore span placeholders with the pre-rendered, safe HTML
  out = out.replace(/__COLOR_SPAN_(\d+)__/g, (_m, idx) => {
    const i = Number(idx);
    return spans[i] ?? '';
  });

  return out;
}
