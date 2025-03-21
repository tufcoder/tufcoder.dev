export function FooterList() {
  return (
    <ul className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
      <li>⚛️ Desenvolvido utilizando as tecnologias:</li>
      <li>
        <a
          href="https://vite.dev/guide"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-baseline gap-1"
        >
          <img src="/vite.svg" alt="vite logo" className="size-4 self-center" />
          <span>Vite</span>
        </a>
      </li>
      <li>
        <a
          href="https://react.dev/learn"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-baseline gap-1"
        >
          <img src="/react.svg" alt="react logo" className="size-4 self-center" />
          <span>React</span>
        </a>
      </li>
      <li>
        <a
          href="https://tailwindcss.com/docs/installation/using-vite"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-baseline gap-1"
        >
          <img src="/tailwind.svg" alt="tailwind logo" className="size-4 self-center" />
          <span>Tailwind</span>
        </a>
      </li>
    </ul>
  )
}
