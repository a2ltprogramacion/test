import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });

export async function mdToHtml(markdown: string | undefined) {
  if (!markdown) return '';
  return marked.parse(markdown) as string;
}
