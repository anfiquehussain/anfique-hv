export default function SkillIcon({ Icon, name }) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-secondary p-4 hover:bg-backgroundHover hover:text-white">
      <Icon className="mb-2 text-5xl" />
      <p className="text-lg">{name}</p>
    </div>
  );
}
