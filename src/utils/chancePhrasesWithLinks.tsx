import ExternalLink from '@/components/ExternalLink'

type TextToLink = { text: string; url: string }

export default function chancePhrasesWithLinks(
  words: TextToLink[],
  paragraph: string
) {
  const indexs = words.map(({ text }) => paragraph.search(text))
  const paragraphAndLinks: (string | JSX.Element)[] = []

  paragraphAndLinks.push(paragraph.substring(0, indexs[0]))
  for (let i = 0; i < indexs.length; i++) {
    paragraphAndLinks.push(
      <ExternalLink href={words[i].url} key={crypto.randomUUID()}>
        {paragraph.substring(indexs[i], indexs[i] + words[i].text.length)}
      </ExternalLink>
    )
    paragraphAndLinks.push(
      paragraph.substring(indexs[i] + words[i].text.length, indexs[i + 1])
    )
  }

  return paragraphAndLinks
}
