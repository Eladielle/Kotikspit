import type Credentials from "./LoginDTO"

export default interface RegisterData extends Credentials {
  // email и password - подтягиваются от Credentials
  // здесь указываете остальные поля
}
