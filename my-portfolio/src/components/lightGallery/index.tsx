'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgHash from 'lightgallery/plugins/hash';

import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import Masonry from 'masonry-layout';
import 'lightgallery/css/lightgallery-bundle.css';

interface LightGalleryProps {
  images: { src: string; alt: string }[];
}

const LightGallery: React.FC<LightGalleryProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // Ensure this code runs only on the client
    if (typeof window === 'undefined') return;
    
    // Initialize LightGallery
    if (galleryRef.current) {
      lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom, lgHash, lgFullscreen, lgRotate, lgAutoplay],
        speed: 500,
        mode: 'lg-fade',
        thumbnail: true,
        zoom: true,
      });
    }

    // Initialize Masonry Layout
    if (galleryRef.current) {
        imagesLoaded(galleryRef.current, () => {
      masonryInstance.current = new Masonry(galleryRef.current, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-item',
        percentPosition: true,
        gutter: 10,
      });
    });
    }

    // Cleanup Masonry on unmount
    return () => {
        masonryInstance.current?.destroy();
      };
    }, [images]);

  return (
    <div
      ref={galleryRef}
      className="lightgallery"
      style={{ position: 'relative', width: '100%' }}
    >
      {images.map((image, index) => (
        <div key={index} style={{ width: '30%' }}>
          <a href={image.src}>
            <Image src={image.src} alt={image.alt} fill style={{ objectFit: 'contain' }} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default LightGallery;