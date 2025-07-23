import photoGrid from "@/components/PhotoGrid/photoGrid.module.scss";
import { CardImage } from "@/types/services/card";
import Image from "next/image";

interface PhotoGridProps {
  images: CardImage[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
  return (
    <div className={photoGrid.container} data-testid="photoGrid">
      {images.map((img, idx) => (
        <div key={idx} className={photoGrid.imageWrapper}>
          <Image
            src={img.url}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className={photoGrid.image}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
