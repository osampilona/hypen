import photoGrid from "@/components/PhotoGrid/photoGrid.module.scss";
import Image from "next/image";

interface PhotoGridProps {
  images: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
  return (
    <div className={photoGrid.container} data-testid="photoGrid">
      <div className={photoGrid.grid}>
        {images.map((image, index) => (
          <div key={index} className={photoGrid.imageWrapper}>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className={photoGrid.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
