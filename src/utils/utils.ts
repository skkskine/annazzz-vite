// add domain to image path
export function getImagePath(imagePath: string) {
  const imgRemoteUrl = import.meta.env.VITE_PAYLOAD_REMOTE_URL;

  return imgRemoteUrl + imagePath;
}
