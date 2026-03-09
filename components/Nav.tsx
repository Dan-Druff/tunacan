type NavProps = {
  email?:string,
  displayName?:string,
  userId?:string
}
export function Nav({ email, displayName, userId }: NavProps) {
  const isLoggedIn = Boolean(email)
  return (
      <nav>
    <a href="/" class="nav-logo">Tuna Can Comedy</a>
    <ul class="nav-links">
      <li><a href="#shows">Shows</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="#performers">Performers</a></li>
      <li><a href="#tickets">Tickets</a></li>
    </ul>
  </nav>

  )
}