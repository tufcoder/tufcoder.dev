import { FooterListItem } from "./FooterList";

export function Footer() {
  return (
    <footer className="bg-gray-950 rounded-sm md:rounded-md lg:rounded-lg p-2 md:p-4 lg:p-6">
      <ul className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
        <li>⚛️ Desenvolvido utilizando as tecnologias:</li>
        <FooterListItem
          text="Vite"
          icon="/vite.svg"
          url="https://vite.dev/guide"
          alt="vite logo"
        />
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
      <small className="text-gray-500">©{new Date().getFullYear()}</small>
    </footer>
  );
}
