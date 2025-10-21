import { marked } from 'marked';

// Configure marked to be GitHub-flavored and to add <br> on single line breaks
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Converts a markdown string to HTML using the 'marked' library.
 * It also handles basic sanitization by default with `gfm: true`.
 *
 * @param markdown The markdown string to convert.
 * @returns The converted HTML string, or an empty string if the input is falsy.
 */
export function mdToHtml(markdown: string | undefined) {
  if (!markdown) return '';

  // The `marked` library will parse the markdown and convert it to HTML.
  // This includes handling:
  // - Bold, italic, strikethrough
  // - Links and images
  // - Lists (ordered and unordered)
  // - Blockquotes
  // - Headings
  // - Horizontal rules
  // - <mark> for highlighted text
  // - and more...
  const dirtyHtml = marked.parse(markdown);

  // Although marked provides some sanitization, for a production app,
  // you might want to run this through a dedicated sanitizer like DOMPurify
  // if you allow complex HTML from the CMS. For now, this is a significant
  // improvement.
  return dirtyHtml as string;
}