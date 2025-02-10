import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl, additionalDetails }: any) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitleCenter}>{title}</h3>
      <img className={styles.cardImage} src={imageUrl} alt={title} />

      <div className={styles.cardContent}>
        <p className={styles.cardDescription}>{description}</p>
        {additionalDetails ? (
          <p className={styles.cardPrice}>{additionalDetails}</p>
        ) : (
          <p> &nbsp;</p>
        )}
      </div>
    </div>
  );
};

export default Card;
