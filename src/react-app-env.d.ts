/// <reference types="react-scripts" />
interface User {
  userLogin: string,
  userPassword: string
  savedPasswords: Password[]
}

interface Password {
  id: number,
  nameOfApp: string,
  userLogin: string,
  userPassword: string,
}
