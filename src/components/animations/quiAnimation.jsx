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
  },
  onScreen: {
    opacity: 1,
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