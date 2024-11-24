import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageUrl} alt={title} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a href={link} className={styles.cardLink}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
