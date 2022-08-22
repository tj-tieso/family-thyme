export default function Navbar () {
    return <nav className="nav">
     <a href="/" className="site-title">Family Thyme</a>
     <ul>
         <li className="">
            <a href="/shopping-cart">Shopping Cart</a>
         </li>
         <li>
            <a href="/profile">Profile</a>
         </li>
         <li>
            <a href="/sign-in">Sign In</a>
         </li>
         <li>
            <a href= "/calendar">Calendar</a>
         </li>
     </ul>
    </nav>
 }