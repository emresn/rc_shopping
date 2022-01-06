import { ImageResizeRule } from '@/constants/imageResizeRules';

export function generateResizeImageHref(href: string, rule: ImageResizeRule) {
  const splitted = href.split('/upload/');
  const beforeStr = splitted[0] + '/upload';

  const scaleRule = `c_${rule.method},g_center,h_${rule.height},w_${rule.width}`;
  const scaledPath = `${beforeStr}/${scaleRule}/${splitted[1]}`;

  return scaledPath;
}
