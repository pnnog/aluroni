export type BackgroundTypes = 'massas' | 'carnes' | 'combos' | 'veganos'

export type TagProps ={
  background?:BackgroundTypes
  highlight?:boolean
  children: React.ReactNode
}