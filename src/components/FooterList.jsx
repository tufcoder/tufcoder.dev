import PropTypes from "prop-types";

export function FooterListItem({ url, icon, alt, text }) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex gap-1 items-baseline"
      >
        <img src={icon} alt={alt} className="size-4 self-center" />
        <span>{text}</span>
      </a>
    </li>
  );
}

FooterListItem.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
