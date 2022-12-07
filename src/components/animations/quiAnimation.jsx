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
  }
}

export const sidesEnter = {
  initiate: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
  }
}

export const textItems = {
  initiate: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
  }
}
