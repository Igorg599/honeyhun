class Card {
  constructor(name, email, message) {
    this.name = name
    this.email = email
    this.message = message
    this.parent = document.querySelector(".comments_cards")
  }

  render() {
    const element = document.createElement("div")

    element.classList.add("col-md-4")

    element.innerHTML = `
              <div class="comments_name">${this.name}</div>
              <div class="comments_content">
                <div class="comments_mail">${this.email}</div>
                <div class="comments_message">${this.message}</div>
              </div>
          `
    this.parent.append(element)
  }
}

export default Card
