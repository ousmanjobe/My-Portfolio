import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale } from '../../anim'; // Ensure scale is of type Variants or replace it with a valid Variants object
import { Variants } from 'framer-motion';

const slide: Variants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

interface Data {
  title: string;
  href: string;
  index: number;
}

interface Props {
  data: Data;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Index({ data, isActive, setSelectedIndicator }: Props) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
    >
      <motion.div
        variants={scale as Variants} // Cast scale to Variants type if it is compatible
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
      <Link href={href} className='font-urbanist'>{title}</Link>
    </motion.div>
  );
}