import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const stringToDate = (date: string) => new Date(date)

export const dateISO = (date: string) => stringToDate(date).toISOString()

export const dateFormatted = (date: string) =>
  format(stringToDate(date), "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

export const dateRelativeToNow = (date: string) =>
  formatDistanceToNow(stringToDate(date), {
    locale: ptBR,
    addSuffix: true,
  })
