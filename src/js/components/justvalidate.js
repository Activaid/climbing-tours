new window.JustValidate(".feedback__form", {
  colorWrong: "#f06666",
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      required: true,
      email: true
    },
  },
});
