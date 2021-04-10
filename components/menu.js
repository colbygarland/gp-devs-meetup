import MenuItem from "./menuItem";

export function Menu() {
  return (
    <nav className="px-4 py-4 bg-gradient-to-r from-yellow-400 to-primary mb-10 lg:from-green-400 lg:to-red-500">
      <ul className="lg:flex">
        <MenuItem url="/" title="Home" />
        <MenuItem url="/about" title="About" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
        <MenuItem url="/contact" title="Contact" />
      </ul>
    </nav>
  );
}
