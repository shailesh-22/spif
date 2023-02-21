import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import styles from "./styles.module.css";
import { Box, styled, Typography } from "@mui/material";


const LeftComponent = styled(Box)(({ theme }) => ({
    
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const BottomHeading = styled(Box)(({ theme}) => ({
    marginBottom : '5px',
     textAlign : 'center',
   [theme.breakpoints.up('md')]: {
   
       display: 'none',
   }
})) 



const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    // const navigate = useNavigate();
    // const navigate = NavLink();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://103.160.153.38:8010/accounts/auth/";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", JSON.stringify(res.data));
            // navigate("/login");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <LeftComponent className={styles.left}>
                <img src="https://www.spif.in/wp-content/uploads/2021/08/contact-image.png" alt="left_image" width={300} />
                    <h1>Welcome</h1>
                    <Link to="/">
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </LeftComponent>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                    <img className="logo" src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={160}/>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                         Sign Up
                        </button>

                        <BottomHeading>
                        <Typography >Allready have an account?</Typography>
                        <Typography  style={{ color: '#393f81' }}><Link to="/" style={{ color: '#393f81' }}>Sign In here</Link></Typography>
                        </BottomHeading> 
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Signup;