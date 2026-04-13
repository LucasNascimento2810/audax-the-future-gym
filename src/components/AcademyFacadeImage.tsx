import { useState } from "react";
import gymTraining from "@/assets/optimized/gym-training.jpg";

type AcademyFacadeImageProps = {
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
};

const facadeImagePath = "/audax-fachada.jpg";

const AcademyFacadeImage = ({
  alt = "Imagem da Academia Audax",
  className = "",
  loading = "lazy",
}: AcademyFacadeImageProps) => {
  const [src, setSrc] = useState(facadeImagePath);

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => {
        if (src !== gymTraining) {
          setSrc(gymTraining);
        }
      }}
    />
  );
};

export default AcademyFacadeImage;
