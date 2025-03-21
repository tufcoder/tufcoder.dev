import { FooterList } from './FooterList'

export function Footer() {
  return (
    <footer className="rounded-sm bg-gray-950 p-2 md:rounded-md md:p-4 lg:rounded-lg lg:p-6">
      <FooterList />
      <small className="text-gray-500">
        &copy;{new Date().getFullYear()}&nbsp;
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
