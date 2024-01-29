import type Credentials from "./types/LoginDTO"
import type RegistrationDTO from "./types/RegistrationDTO"
import type TokenDTO from "./types/TokenDTO"
import type User from "./types/User"

export async function login(credentials: Credentials): Promise<TokenDTO> {
  const res = await fetch("api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  })
  // реджектим промис если вернулся ошибочный статус
  if (res.status >= 400) {
    // достаем текст ошибки из ответа
    // измените ключ error на message - когда поправите бэкенд
    const { error }: { error: string } = await res.json()
    throw new Error(error)
  }
  return res.json()
}

export async function user(): Promise<User> {
  const token = localStorage.getItem("accessToken")
  const res = await fetch("api/v1/users/this", {
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  })
  if (res.status >= 400) {
    const { error }: { error: string } = await res.json()
    throw new Error(error)
  }
  return res.json()
}

export async function register(data: RegistrationDTO): Promise<TokenDTO> {
  const res = await fetch("api/v1/auth/registration", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  })
  // interface Error {
  //   message: string
  //   field: string
  //   rejectedValue: string
  // }
  // if (res.status >= 400) {
  //   const { errors }: { errors: Error[] } = await res.json()
  //   errors.forEach(err => {
  //     throw new Error(`${err.field} ${err.rejectedValue} ${err.message}`)
  //   })
  // }
  return res.json()
}
