import Card from "./card"

const cardsRender = () => {
  const dataCards = [
    {
      name: "Вася",
      email: "vasya@mail.ru",
      message: "Сообщение от Василия Пупкина.",
    },
    {
      name: "Маруся",
      email: "marysia@mail.ru",
      message: "Всем привет, я Маруся",
    },
    {
      name: "Вася",
      email: "vasya@mail.ru",
      message: "Сообщение от Василия Пупкина.",
    },
    {
      name: "Маруся",
      email: "marysia@mail.ru",
      message: "Всем привет, я Маруся",
    },
    {
      name: "Вася",
      email: "vasya@mail.ru",
      message: "Сообщение от Василия Пупкина.",
    },
  ]

  dataCards.forEach((item) => {
    new Card(item.name, item.email, item.message).render()
  })
}

export default cardsRender
