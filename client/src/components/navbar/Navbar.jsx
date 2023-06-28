import { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineShoppingCart,
} from "react-icons/ai";

//styles
import styles from "./navbar.module.css";

//components
import Cart from "./Cart";
import NavbarMenu from "./NavbarMenu";
import Login from "./Login";
import { isAuthenticated } from "../../hooks/useAuthentication";

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [authenticated, setAuthenticated] = useState(isAuthenticated());

	//Login Logic
	const handleLogin = async () => {
		try {
			const formData = new FormData(document.getElementById("loginForm"));
			const email = formData.get("email");
			const password = formData.get("password");

			const response = await fetch("http://localhost:4000/api/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				// console.log("Error Data:", errorData);
				throw new Error(errorData.error);
			}

			const data = await response.json();
			// console.log("Response Data:", data.user);
			const token = data.token;
			const user = data.user;

			// Set the token in session storage
			sessionStorage.setItem("token", token);
			sessionStorage.setItem("userId", user.id);
			setAuthenticated(true);
		} catch (error) {
			// Login error handling
			console.error(error);
		}
	};

	// Logout Logic
	const handleLogout = () => {
		// Clear the token from session storage or perform any other necessary cleanup
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("userId");
		setAuthenticated(false);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				{/* logo */}
				<Link to="/" className={styles.logo}>
					<span>MyChoiceShop</span>
				</Link>

				<div className={styles.icons}>
					{/* login, menu and cart icon */}
					{authenticated ? (
						<BiLogOut onClick={handleLogout} />
					) : (
						<BiLogIn
							onClick={() => {
								if (showMenu || showCart) {
									setShowMenu(false);
									setShowCart(false);
								}
								setShowLogin(true);
							}}
						/>
					)}

					{!showCart && (
						<AiOutlineShoppingCart
							onClick={() => {
								if (setShowMenu || showLogin) {
									setShowLogin(false);
									setShowMenu(false);
								}
								setShowCart(true);
							}}
						/>
					)}
					{showCart && (
						<AiOutlineShoppingCart
							onClick={() => {
								setShowCart(false);
							}}
						/>
					)}

					{!showMenu && (
						<AiOutlineMenu
							onClick={() => {
								if (showLogin || showCart) {
									setShowLogin(false);
									setShowCart(false);
								}
								setShowMenu(true);
							}}
						/>
					)}
					{showMenu && <AiOutlineClose onClick={() => setShowMenu(false)} />}
				</div>

				{/* menu  links*/}
				{showMenu && <NavbarMenu setShowMenu={setShowMenu} />}

				{/* Login */}
				{showLogin && (
					<Login handleLogin={handleLogin} setShowLogin={setShowLogin} />
				)}

				{/* cart */}
				{showCart && <Cart />}
			</div>
		</nav>
	);
}
