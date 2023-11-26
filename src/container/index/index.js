document.addEventListener('DOMContentLoaded', () => {
  if (window.session) {
    const { user } = window.session
    console.log(user)

    if (user.isConfirm) {
      location.assign('/home')
    } else {
      location.assign('/signup-confirm')
    }
  } else {
    location.assign('/signup')
  }
})
