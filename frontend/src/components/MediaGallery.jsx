export default function MediaGallery({ media }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {media.map((url, index) => {
                if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
                    return (
                        <img
                            key={index}
                            src={url}
                            alt={`media-${index}`}
                            className="w-full h-auto rounded shadow"
                        />
                    );
                } else if (url.match(/\.(mp4|webm|ogg)$/i)) {
                    return (
                        <video
                            key={index}
                            src={url}
                            controls
                            className="w-full h-auto rounded shadow"
                        />
                    );
                } else return null;
            })}
        </div>
    );
}