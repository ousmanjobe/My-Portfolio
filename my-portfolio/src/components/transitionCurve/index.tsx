import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { slide, opacity, perspective } from './anim';

const anim = (variants: Variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants,
    };
};

interface LayoutProps {
    children: ReactNode;
}

export default function Inner({ children }: LayoutProps): JSX.Element {
    return (
        <div className="inner">
            <motion.div className="slide" {...anim(slide)} />
            <motion.div className="page" {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                   
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}