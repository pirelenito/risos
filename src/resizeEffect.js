export default store => {
  window.addEventListener('resize', () => {
    store.resizeWindow({ width: window.innerWidth, height: window.innerHeight })
  })
}
