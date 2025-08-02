interface Transition {
    duration: number;
    ease?: number[];
    delay?: number;
}

interface AnimationState {
    x?: string | number;
    scale?: number;
    transition?: Transition;
}

interface Animation {
    initial?: AnimationState;
    enter?: AnimationState | ((i: number) => AnimationState);
    exit?: AnimationState | ((i: number) => AnimationState);
    open?: AnimationState;
    closed?: AnimationState;
}

export const menuSlide: Animation = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

export const slide: Animation = {
    initial: { x: 80 },
    enter: (i: number) => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
};

export const scale: Animation = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
};