'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrambleTextPlugin } from 'gsap/all';
import styles from './index.module.css';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

interface ScrambleTextProps {
  texts: string[]; // Array of text strings to be scrambled
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ texts }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      id: 'text-scramble',
      defaults: { ease: 'none' },
    });

    const cursorTl = gsap.timeline({ repeat: -1 });

    // Hide the original text
    gsap.set('#scramble-text-original', {
      opacity: 0,
    });

    // Cursor blinking animation
    cursorTl
      .to('#scramble-cursor', {
        opacity: 0,
        duration: 0.5,
        ease: 'none',
        delay: 0.2,
      })
      .to('#scramble-cursor', {
        opacity: 1,
        duration: 0.5,
        ease: 'none',
        delay: 0.2,
      });

    // Scramble text animation
    texts.forEach((text, index) => {
      const scrambleChars =
        index === 2
          ? 'Ousman' // Numbers for the third text
          : index === 3
          ? 'Jobe' // Uppercase for the fourth text
          : index === 4
          ? 'lowerCase' // Lowercase for the fifth text
          : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Default scramble characters

      const scrambleSpeed = index === 3 || index === 4 ? 0.3 : 0.6; // Adjust speed for specific texts

      tl.to(`#scramble-text-${index + 1}`, {
        scrambleText: {
          text,
          chars: scrambleChars,
          speed: scrambleSpeed,
        },
        duration: 3,
      });
    });

    tl.add(cursorTl);

    // Replay animation on click
    //window.onclick = () => tl.play(0);
  }, [texts]);

  return (
    <div className={styles.textScrambleContent}>
      <p id="scramble-text-original">{texts.join(' ')}</p>

      <p className={`${styles.textScrambleText} font-ailerons`} aria-hidden="true">
        {texts.map((_, index) => (
          <span key={index} id={`scramble-text-${index + 1}`}></span>
        ))}
      </p>
    </div>
  );
};

export default ScrambleText;