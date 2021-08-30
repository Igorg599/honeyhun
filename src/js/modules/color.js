const colorCards = () => {
  const items = document.querySelectorAll(".comments_name")

  items.forEach((item, index) => {
    if ((index + 1) % 2 === 0) item.style.background = "#58AD52"
  })
}

export default colorCards
