import { useEffect, useState } from 'react'
import { GithubLogo } from '@phosphor-icons/react'

import data from '../assets/data.json'

export function Header() {
  const [visibleTags, setVisibleTags] = useState(4)

  function handleResizeWindow() {
    if (window.innerWidth >= 640) {
      setVisibleTags(data.person.tags.length)
    } else {
      setVisibleTags(4)
    }
  }

  window.addEventListener('resize', handleResizeWindow)

  useEffect(() => {
    handleResizeWindow()
  }, [])

  return (
    <header className="flex flex-col items-center gap-1 rounded-sm bg-gray-950 p-2 md:gap-2 md:rounded-md md:p-4 lg:gap-4 lg:rounded-lg lg:p-6">
      <img
        width={400}
        height={400}
        className="lg:64 w-16 rounded-full outline-2 outline-green-700 md:w-32 md:outline-3 lg:outline-4"
        src="/profile.jpg"
        alt="profile picture"
      />
      <h1 className="text-2xl md:text-4xl lg:text-6xl">{data.person.shortname}</h1>
      <a
        className="inline-flex items-center"
        href={data.person.links.github.url}
        target="_blank"
        rel="noreferrer"
      >
        @{data.person.links.github.user} on &nbsp;
        <GithubLogo className="size-4 md:size-6 lg:size-8" alt="GitHub logo" />
      </a>
      <address>
        <small className="text-base">
          <a href={`mailto:${data.person.links.email}`}>{data.person.links.email}</a>
        </small>
        <h3 className="md:text-3xl">
          {data.person.role.web} | {data.person.role.pj}
        </h3>
        <h4>
          {data.person.address.city} - {data.person.address.state.uf}
        </h4>
      </address>
      <ul className="flex gap-1 md:gap-2">
        {data.person.tags.slice(0, visibleTags).map((tag) => (
          <li
            key={tag.name}
            className={`min-w-16 rounded-full p-2 text-sm lg:text-lg ${tag.bg.tailwind}`}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </header>
  )
}
