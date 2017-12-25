export default store => {
  document.addEventListener('keydown', event => {
    const keyName = event.key
    if (keyName === 'ArrowDown') {
      store.highlightNext()
    }

    if (keyName === 'ArrowUp') {
      store.highlightPrevious()
    }
  })
}
