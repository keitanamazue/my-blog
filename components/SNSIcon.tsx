import Link from 'next/link'

export const SNSIcon = () => {
  const SNS_ICONS = [
    {
      href: 'https://www.linkedin.com/in/keita-namazue-b57383230',
      img: '/linkedin.png',
    },
    {
      href: 'https://twitter.com/nianjiang1752',
      img: '/twitter.png',
    },
  ]
  return (
    <div className="flex gap-3">
      {SNS_ICONS.map((sns, index) => {
        return (
          <Link href={sns.href} key={index}>
            <a target="_blank" rel="noreferrer">
              <img className="h-6 w-6 cursor-pointer " src={sns.img} alt="" />
            </a>
          </Link>
        )
      })}
    </div>
  )
}
