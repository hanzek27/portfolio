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
      when: "beforeChildren"
    }
  },
  out: {
    transition: {
      staggerChildren: 0.2,
      when: "afterChildren"
    }
  }
}

export const itemEnterAnimation = {
  initiate: {
    opacity: 0,
    x: 200,
  },
  onScreen: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 200,
  }
}