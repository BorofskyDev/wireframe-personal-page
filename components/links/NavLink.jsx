import Link from "next/link"

const NavLink = ({ children, href}) => {
  return (
    <Link href={href} className="">{children}</Link>
    // Add tailwind classes for styling
    // Use your blue/indigo
    // Add hover classes
    // Add transition classes
    // Add active classes
    // Add focus classes

  )
}
export default NavLink