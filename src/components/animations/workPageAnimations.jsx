export const workButtonOrchestration = (reduceMotion) => {
  return !reduceMotion ? {
    initial: {
      transition: {
        when: "afterChildren",
        staggerChildren: 0.03,
      },
    },
    onScreen: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }
    },
    out: {
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    }
  } : {
    initial: {opacity: 0},
    onScreen: {opacity: 1},
    out: {opacity: 0}
  }
}

export const workButtonAnimation = (reduceMotion) => {
  return !reduceMotion ? {
    initial: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: 50,
      opacity: 0,
    }
  } : {
    initial: {opacity: 0, x: 0},
    onScreen: {opacity: 1, x: 0},
    out: {opacity: 0, x: 0},
  }
}

export const iconsAnimation = (reduceMotion) => {
  return !reduceMotion ? {
    initial: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    leave: {
      x: 500,
      opacity: 0,
    }
  } : {
    initial: {opacity: 0},
    visible: {opacity: 1},
    leave: {opacity: 0},
  }
}