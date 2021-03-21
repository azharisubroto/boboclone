export const state = () => ({
  cartsidebar: false
})

export const mutations = {
  sidebar(state, toggle) {
    state.cartsidebar = toggle
  }
}
