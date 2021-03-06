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
        done: false
      })
    }
  },
  increase(state, id) {
    const index = state.list.findIndex((p) => p.id === id)
    state.list[index].amount++
  },
  decrease(state, id) {
    const index = state.list.findIndex((p) => p.id === id)
    if (state.list[index].amount !== 1) {
      state.list[index].amount--
    }
  },
  reset(state) {
    state.list = []
  },
  setamount(state, obj) {
    const index = state.list.findIndex((p) => p.id === obj.id)
    const amount = parseInt(obj.amount)
    state.list[index].amount = amount < 1 ? 1 : amount
  },
  remove(state, cart) {
    state.list = state.list.filter((item) => item.id !== cart.id)
  },
  toggle(state, cart) {
    cart.done = !cart.done
  }
}
