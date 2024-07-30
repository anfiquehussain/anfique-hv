const SocialLink = ({ icon: Icon, name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm text-light hover:bg-backgroundHover hover:text-white"
  >
    <Icon />
    <span>{name}</span>
  </a>
);

export default SocialLink;
