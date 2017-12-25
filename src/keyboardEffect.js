export default store => {
  document.addEventListener('keydown', event => {
    const keyName = event.key
    if (keyName === 'ArrowDown') {
      store.highlightNext()
    }

    if (keyName === 'ArrowUp') {
      store.highlightPrevious()
    }

    if (keyName === 'Enter' || keyName === ' ') {
      store.selectHighlighted()
    }

    if (keyName === 'Escape') {
      store.cancelSelection()
    }
  })
}
