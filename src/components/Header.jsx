import { useState } from "react";
import { GithubLogo } from "phosphor-react";
import { data } from "../assets/data";

export function Header() {
  const [visibleTags, setVisibleTags] = useState(4);

  function handleResizeWindow() {
    if (window.innerWidth >= 640) {
      setVisibleTags(data.person.tags.length);
    } else {
      setVisibleTags(4);
    }
  }

  window.addEventListener("resize", handleResizeWindow);

  return (
    <header className="bg-gray-950 flex flex-col items-center rounded-sm md:rounded-md lg:rounded-lg p-2 md:p-4 lg:p-6 gap-1 md:gap-2 lg:gap-4">
      <img
        className="w-16 md:w-32 lg:64 rounded-full outline-2 md:outline-3 lg:outline-4 outline-green-700"
        src="/profile.jpg"
        alt="profile picture"
      />
      <h1 className="text-2xl md:text-4xl lg:text-6xl">
        {data.person.shortname}
      </h1>
      <a
        className="inline-flex items-center"
        href={data.person.links.github.url}
        target="_blank"
        rel="noreferrer"
      >
        @{data.person.links.github.user} on{" "}
        <GithubLogo className="size-4 md:size-6 lg:size-8" alt="GitHub logo" />
      </a>
      <address>
        <small>
          <a href={`mailto:${data.person.links.email}`}>
            {data.person.links.email}
          </a>
        </small>
        <h3>
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
            className={`p-2 min-w-16 rounded-full text-sm lg:text-lg ${tag.bg.tailwind}`}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </header>
  );
}
