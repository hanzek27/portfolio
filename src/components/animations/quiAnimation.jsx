export const orchestration = {
  initiate: {
    transition: {
      staggerChildren: 0.2,
      when: "afterChildren"
    }
  },
  onScreen: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
      when: "beforeChildren"
    }
  }
}

export const imageAnimation = {
  initiate: {
    opacity: 0,
    scale: 10,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
  onScreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 5,
      restDelta: 0.001
    }
  }
}

export const textAnimation = {
  initiate: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
  }
}
