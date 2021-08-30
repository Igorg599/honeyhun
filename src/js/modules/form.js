import Card from "./card"
import colorCards from "./color"

const form = () => {
  const form = document.querySelector("form"),
    inputs = document.querySelectorAll("input"),
    textarea = document.querySelector("textarea")

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = ""
    })
    textarea.value = ""
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      message: form.querySelector("textarea").value,
    }

    const res = await fetch("assets/question.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })

    clearInputs()

    if (res.status === 200) {
      new Card(formData.name, formData.email, formData.message).render()
    } else {
      alert(`${res.status} (${res.statusText})`)
    }

    colorCards()
  })
}

export default form
