import { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { BiLogIn } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

//styles
import styles from "./navbar.module.css";

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [showLogin, setShowLogin] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				{/* logo */}
				<Link to="/" className={styles.logo}>
					<span>MyChoiceShop</span>
				</Link>

				<div className={styles.icons}>
					{/* login and menu icon */}
					{!showLogin && <BiLogIn onClick={() => setShowLogin(true)} />}
					{showLogin && <BiLogIn onClick={() => setShowLogin(false)} />}

					{!showMenu && <AiOutlineMenu onClick={() => setShowMenu(true)} />}
					{showMenu && <AiOutlineClose onClick={() => setShowMenu(false)} />}
				</div>

				{/* menu */}
				{showMenu && (
					<ul>
						<li>
							<Link to="/" onClick={() => setShowMenu(false)}>
								Forside
							</Link>
						</li>
						<li>
							<Link to="/category/1" onClick={() => setShowMenu(false)}>
								Laptops
							</Link>
						</li>
						<li>
							<Link to="/category/2" onClick={() => setShowMenu(false)}>
								Kategori #2
							</Link>
						</li>
						<li>
							<Link to="/category/3" onClick={() => setShowMenu(false)}>
								Kategori #3
							</Link>
						</li>
						<li>
							<Link to="/category/4" onClick={() => setShowMenu(false)}>
								Kategori #4
							</Link>
						</li>
						<li>
							<Link to="/category/5" onClick={() => setShowMenu(false)}>
								Kategori #5
							</Link>
						</li>
					</ul>
				)}

				{/* Login */}
				{showLogin && (
					<div className={styles.loginFormContainer}>
						<form className={styles.loginForm}>
							<div className={styles.formGroup}>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									className={styles.emailInput}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									name="password"
									className={styles.passwordInput}
								/>
							</div>
							<button
								type="submit"
								className={styles.loginButton}
								onClick={(e) => {
									e.preventDefault();
									setShowLogin(false);
								}}
							>
								Login
							</button>
						</form>
					</div>
				)}
			</div>
		</nav>
	);
}
