// pages/index.js
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
  ];

  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index} className={styles.galleryItem}>
          <Image 
            src={src}
            alt={`Gallery Image ${index + 1}`}
            layout="responsive"
            width={500}
            height={400}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}
