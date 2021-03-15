export const state = () => ({
  list: []
})

export const mutations = {
  add(state, obj) {
    const array1 = state.list
    if (array1.filter((item) => item.title === obj.title).length === 0) {
      state.list.push({
        ...obj,
        amount: 1,
        done: false,
        id: Date.now()
      })
    }
  },
  remove(state, cart) {
    state.list = state.list.filter((item) => item.id !== cart.id)
  },
  toggle(state, cart) {
    cart.done = !cart.done
  }
}
