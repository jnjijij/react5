import React from 'react';
import './ImageGallery.css'; // Створіть файл ImageGallery.css для стилізації

const images = [
  'https://th.bing.com/th?id=OIP.TtZZQYPjaYyB1duv3WzcMQHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.-M9gl3t2lG8XPwdUtHzmIAAAAA&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  // Додайте інші посилання на зображення за потребою
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((imageUrl, index) => (
        <a key={index} href={`шлях_до_сторінки_з_акторським_складом.html`} className="image-link">
          <img src={imageUrl} alt={`Зображення ${index + 1}`} />
        </a>
      ))}
    </div>
  );
};

export default ImageGallery;
