'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './index.module.css';
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.0,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

/*
const customOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            45,     // max tilt rotation (degrees)
	perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.2,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          2000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           "X",   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.2, .8, .3, .1)",    // Easing on enter/exit.
}
*/

interface CardProps {
    imageSrc?: string | StaticImageData;
	cardLabel: string;
	description?: string;
    width?: number;
    height?: number;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: number | string;
    left?: number | string;
    scale?: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, cardLabel, description, width, height, top, left, scale = 1 }) => {
    return (
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', position: 'relative', top, left }}>
        <Tilt options={defaultOptions}>
            <div className={styles.rectangleParent} style={{ width, height }}>
      			<div className={styles.imageContainer}>
                    <Image
                     src={imageSrc as string | StaticImageData}
                     alt="Card Image"
                     className={styles.cardImage}
                     // width={500} automatically provided
                     // height={500} automatically provided
                     // blurDataURL="data:..." automatically provided
                     // placeholder="blur" // Optional blur-up while loading
                    />
                </div>
      			<div className={styles.descriptionSection}>
					<div className={styles.descriptionText}>
						{description}
					</div>
				</div>
				
      			<div className={styles.barcodeTitle}>{ cardLabel }</div>
    		</div>
        </Tilt>
        </div>
    );
}

export default Card;