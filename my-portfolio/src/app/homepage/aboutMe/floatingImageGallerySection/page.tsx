'use client';
import styles from './index.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import gsap from 'gsap';
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from '@/dataInterests';

export default function FloatingImageGallery() {
  const plane1 = useRef<HTMLDivElement | null>(null);
  const plane2 = useRef<HTMLDivElement | null>(null);
  const plane3 = useRef<HTMLDivElement | null>(null);
  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number): number =>
    start * (1 - amount) + target * amount;

  const animate = (): void => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    if (plane1.current) {
      gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    }
    if (plane2.current) {
      gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    }
    if (plane3.current) {
      gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });
    }

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    }
  };


  const container = useRef<HTMLDivElement | null>(null); // Type the ref as HTMLDivElement or null
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });


  return (
    <div
    ref={container} 
    className='relative flex items-center justify-center h-screen overflow-hidden'
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
    <main onMouseMove={(e) => manageMouseMove(e)} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
        <Image src={floating1} alt="image" width={260} />
        <Image src={floating2} alt="image" width={300} />
        <Image src={floating7} alt="image" width={325} />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image src={floating4} alt="image" width={250} />
        <Image src={floating6} alt="image" width={200} />
        <Image src={floating8} alt="image" width={225} />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image src={floating5} alt="image" width={250} />
        <Image src={floating3} alt="image" width={200} />
      </div>
      <div className={styles.title}>
        <h1>Other Passions & Interests</h1>
        <p>Digital Art | Interior Design | Pool</p>
        <p>Film | Speech/Public Speaking | Baking</p>
        <p>Philosophy | Outdoor Volleyball | Cycling</p>
      </div>
    </main>
    </div>
  );
}