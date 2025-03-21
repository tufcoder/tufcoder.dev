import { FooterListItem } from './FooterList'

export function Footer() {
  return (
    <footer className="rounded-sm bg-gray-950 p-2 md:rounded-md md:p-4 lg:rounded-lg lg:p-6">
      <ul className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
        <li>⚛️ Desenvolvido utilizando as tecnologias:</li>
        <FooterListItem text="Vite" icon="/vite.svg" url="https://vite.dev/guide" alt="vite logo" />
        <FooterListItem
          text="React"
          alt="react logo"
          icon="/react.svg"
          url="https://react.dev/learn"
        />
        <FooterListItem
          text="Tailwind"
          alt="tailwind logo"
          icon="/tailwind.svg"
          url="https://tailwindcss.com/docs/installation/using-vite"
        />
      </ul>
      <small className="text-gray-500">
        ©{new Date().getFullYear()} &nbsp;
        <p className="text-base">
          <a
            href="https://github.com/tufcoder/tufcoder.dev/blob/master/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHANGELOG
          </a>
        </p>
      </small>
    </footer>
  )
}
