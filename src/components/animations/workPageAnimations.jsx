export const workButtonOrchestration = {
  initiate: {
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
}

export const workButtonAnimation = {
  initiate: {
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
}

export const iconsAnimation = {
  initiate: {
    x: -500,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: 500,
    opacity: 0,
  }
}