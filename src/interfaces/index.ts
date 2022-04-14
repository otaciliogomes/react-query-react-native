export interface Post {
  id: string
  name: string
  url: string
  created_at: string
}

export type Player = {
  name: string
  image: string
  height: number
  weight: number | null
  position: string
}

export type TeamsLeague = {
  id: number
  name: string
  nickname: string
  code: string
  city: string
  logo: string
  players: Player[]
  colorTeam: string
}