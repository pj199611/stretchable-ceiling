// import Image from "next/image";
import styles from "./Card.module.css";

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CategoryCard = ({ title, description, imageUrl }: CategoryCardProps) => {
  return (
    <div className={styles.cardCategory}>
      <img className={styles.cardImageCategory} src={imageUrl} alt={title} />
      {/* <Image
        src={imageUrl}
        width={"30vw"}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Picture of the author"
      /> */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
