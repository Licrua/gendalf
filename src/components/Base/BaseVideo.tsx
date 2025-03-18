const BaseVideo = ({ src }: { src: string }) => (
  <iframe
    className="base__iframe"
    src={src}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
);
export default BaseVideo;
