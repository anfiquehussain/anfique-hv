const ContactField = ({
  icon: Icon,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="relative mb-4">
    <Icon className="absolute left-3 top-3 text-gray-400" />
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border-0 bg-secondary py-2 pl-10 pr-4 focus:outline-none"
    />
  </div>
);

export default ContactField;
