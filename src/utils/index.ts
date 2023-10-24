export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

export async function loadImageUrl(coverImg: any) {
  if (coverImg instanceof Promise) {
    const res = await coverImg;
    return res.default;
  } else {
    return coverImg;
  }
}
