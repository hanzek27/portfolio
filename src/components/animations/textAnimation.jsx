
export const reducedMotionObject = {
  initiate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  onScreen: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  out: {
    x: 0,
    y: 0,
    opacity: 1,
  }
}


export const childrenDelay = {
  initiate: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
  onScreen: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    }
  },
  out: {
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.01,
    }
  }
}

export const textAnimation = {
  initiate: {
    x: 50,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {

      type: 'spring',
      damping: 12,
      stiffness: 100,
    }
  },
  out: {
    x: 50,
    opacity: 0,
  }
}

export const consoleDecorationText = {
  initiate: {
    x: -50,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: -10,
    opacity: 0,
  } 
}

//navigation 

export const navAnimation = {
  initial: {
    scale: 0, 
    originY: 0,  
    originX: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  open: {
    scale: 1, 
    originY: 0,  
    originX: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  }
}

export const navButtonsAnimation = {
  initial: (side)=> ({
    x: side ? -30 : 30,
    opacity: 0,
  }),
  open: {
    x: 0,
    opacity: 1,
  },
}