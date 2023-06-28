import { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { BiLogIn } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

//styles
import styles from "./navbar.module.css";

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [showCart, setShowCart] = useState(false);

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
			// console.log("Response Data:", data);
			const token = data.token;

			// Set the token in session storage
			sessionStorage.setItem("token", token);
		} catch (error) {
			// Login error handling
			console.error(error);
		}
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
					{!showLogin && <BiLogIn onClick={() => {
                        if(showMenu || showCart){
                            setShowMenu(false)
                            setShowCart(false)
                        }
                        setShowLogin(true)
                    }} />}
					{showLogin && <BiLogIn onClick={() => setShowLogin(false)} />}

                    {!showCart && <AiOutlineShoppingCart onClick={() => {
                        if(setShowMenu || showLogin){
                            setShowLogin(false)
                            setShowMenu(false)
                        }
                        setShowCart(true)
                    }}/>}
                    {showCart && <AiOutlineShoppingCart onClick={() => {
                        setShowCart(false)
                    }}/>}

					{!showMenu && <AiOutlineMenu onClick={() => {
                        if(showLogin || showCart){
                            setShowLogin(false)
                            setShowCart(false)
                        }
                        setShowMenu(true)
                        }} />}
					{showMenu && <AiOutlineClose onClick={() => setShowMenu(false)} />}
                        

				</div>

				{/* menu  links*/}
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
								Telefoner
							</Link>
						</li>
					</ul>
				)}

				{/* Login */}
				{showLogin && (
					<div className={styles.loginFormContainer}>
						<form id="loginForm" className={styles.loginForm}>
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
									handleLogin();
								}}
							>
								Login
							</button>
						</form>
					</div>
				)}

                {/* cart */}
                {showCart && (
                <div className={styles.cart}>
                    <div className={styles.cartCard}>
                        <img src="https://images.samsung.com/is/image/samsung/p6pim/hk_en/galaxy-book/feature/hk_en-feature-thin-as-a-smartphone--powerful-as-a-pc-430327739?$FB_TYPE_A_MO_JPG$" alt="img" />
                        <div className={styles.cartText}>
                            <h4>Samsung galaxy book</h4>
							<span> 
								<p>kr 400</p>
								<p>x1</p>
							</span>
                        </div>
                    </div>
                </div>
                )}


			</div>
		</nav>
	);
}
