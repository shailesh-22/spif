import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Swal from "sweetalert2";
import { Box, styled, Typography } from "@mui/material";


const Image = styled('img')(({ theme}) => ({
    width: "100%",
    [ theme.breakpoints.down('md')] : {
        display : 'none'
    }
}))

const RightComponent = styled(Box)(({ theme }) => ({
    
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const Heading = styled(Typography)(({ theme}) => ({
    fontSize : '40px',
    marginTop: 0 ,
    [theme.breakpoints.down('md')]: {
        fontSize: '25px'
    }
}))

const BottomHeading = styled(Box)(({ theme}) => ({
     marginTop : '10px',
      textAlign : 'center',
    [theme.breakpoints.up('md')]: {
    
        display: 'none',
    }
})) 



const Login = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const url = "http://103.160.153.38:8020/accounts/auth/";

            const { data: res } = await axios.post(url, data);
            if (res.is_admin === true)
             {
                localStorage.setItem("token", JSON.stringify(res));
                // Swal.fire({
                //     title: "Done!",
                //     text: "Login Successfull !",
                //     icon: "success",
                //     button: "Ok",
                //   });
                navigate("/dashboard"); 
                console.log(res.is_admin)
            } else if(res.is_admin === false) 
            {
                localStorage.setItem("token", JSON.stringify(res));
                // Swal.fire({
                //     title: "Done!",
                //     text: "Login Successfull !",
                //     icon: "success",
                //     button: "Ok",
                //   });
                navigate("/register2");
             
            }
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                Swal.fire({
                    title: "Invalid !",
                    text: "Username or password !",
                    icon: "error",
                    button: "Ok",
                  });
            }
        }
    };

    return (
        <div className={styles.login_container} >
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <img className="logo" src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={180}/>

                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <Heading>Login to Your Account</Heading>
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
                            Sign In
                        </button>
                        <BottomHeading>
                        <Typography >Forgot password?</Typography>
                        <Typography  style={{ color: '#393f81' }}>Don't have an account? <Link to="/signup" style={{ color: '#393f81' }}>Register here</Link></Typography>
                        </BottomHeading>
                    </form>
                </div>
                <RightComponent className={styles.right}>
                    <Image src="https://www.spif.in/wp-content/uploads/2021/09/mains.jpg" alt="right_image" width={300} />
                    <h1>New Here ?</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </RightComponent> 
            </div>
        </div>
    );
};

export default Login;