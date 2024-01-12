import Markdown from 'react-markdown'
import { ContentContainer } from './styles'

interface ContentProps {
  body: string
}

export default function Content({ body }: ContentProps) {
  return (
    <ContentContainer>
      <Markdown>{body}</Markdown>
    </ContentContainer>
  )
}
