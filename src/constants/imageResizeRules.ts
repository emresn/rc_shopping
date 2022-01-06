export interface ImageResizeRule {
  width: number;
  height: number;
  method: string;
}

export const thumbnailResize: ImageResizeRule = {
  height: 200,
  width: 200,
  method: 'thumb',
};

export const mdImageResize: ImageResizeRule = {
  height: 500,
  width: 500,
  method: 'fill',
};
