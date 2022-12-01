
export const childrenDelay = (reducedMotion) => {
  return !reducedMotion ? {
    initiate: {
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
      },
    },
    onScreen: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.08,
      }
    },
    out: {
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.02,
      }
    }
  } : {
    initiate: {opacity: 0, x: 0},
    onScreen: {opacity: 1, x: 0},
    out: {opacity: 0, x: 0},
  }
}

export const textAnimation = (reducedMotion) => {
  return !reducedMotion ? {
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
  } : {
    initiate: {opacity: 0, x: 0},
    onScreen: {opacity: 1, x: 0},
    out: {opacity: 0, x: 0},
  }
}

export const consoleDecorationText = (reducedMotion) => {
  return !reducedMotion ? {
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
  } : {
    initiate: {opacity: 0, x: 0},
    onScreen: {opacity: 1, x: 0},
    out: {opacity: 0, x: 0},
  }
}

//navigation 

export const navAnimation = (reduceMotion) => {
  return !reduceMotion ? {
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
  } : {
    initial: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    }  
  }
}

export const navButtonsAnimation = (reduceMotion) => {
  return !reduceMotion ? {
    initial: (side)=> ({
      x: side ? -30 : 30,
      opacity: 0,
    }),
    open: {
      x: 0,
      opacity: 1,
    },
  } : {
    initial: {opacity: 0, x: 0},
    open: {opacity: 1, x: 0},
  }
}