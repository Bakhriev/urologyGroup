const dropdownInit = () => {
  document.addEventListener('click', e => {
    let currentDropdown
    if (e.target.closest('[data-dropdown]')) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('active')
    })
  })
}