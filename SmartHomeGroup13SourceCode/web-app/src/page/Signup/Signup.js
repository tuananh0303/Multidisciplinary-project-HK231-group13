import { Button, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.scss';

const cx = classNames.bind(styles);
function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmpassword, setComfirmpassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleInputFullname = (e) => {
        setFullname(e.target.value);
    };
    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };
    
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const handleInputComfirmpassword = (e) => {
        setComfirmpassword(e.target.value);
    };
    const handleInputPhone = (e) => {
        setPhone(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <img src={require('../../assets/img/home.png')} alt="BG" className={cx('background')} />
            <div className={cx('form-signup')}>
                <h2 className={cx('title')}>SIGN UP</h2>
                <div className={cx('input')}>
                    
                    <TextField
                        label="Fullname"
                        fullWidth
                        type="text"
                        variant="filled"
                        size="normal"
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                marginTop: 2,
                            })
                        }
                        InputLabelProps={{
                            style: { fontSize: 14 }, // Set font size here
                        }}
                        onChange={handleInputFullname}
                    />
                    {console.log(fullname)}
                    <TextField
                        label="Email"
                        fullWidth
                        type="email"
                        variant="filled"
                        size="normal"
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                marginTop: 2,
                            })
                        }
                        InputLabelProps={{
                            style: { fontSize: 14 }, // Set font size here
                        }}
                        onChange={handleInputEmail}
                    />
                        {console.log(email)}
                    <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        variant="filled"
                        size="normal"
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                marginTop: 2,
                            })
                        }
                        InputLabelProps={{
                            style: { fontSize: 14 }, // Set font size here
                        }}
                        onChange={handleInputPassword}
                    />
                    {console.log(password)}
                        <TextField
                            label="Comfirm Password"
                            fullWidth
                            type="password"
                            variant="filled"
                            size="normal"
                            sx={
                                ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                                {
                                    marginTop: 2,
                                })
                            }
                            InputLabelProps={{
                                style: { fontSize: 14 }, // Set font size here
                            }}
                            onChange={handleInputComfirmpassword}
                        />
                        {console.log(comfirmpassword)}
                    <TextField
                        label="Phone"
                        fullWidth
                        type="text"
                        variant="filled"
                        size="normal"
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                marginTop: 2,
                            })
                        }
                        InputLabelProps={{
                            style: { fontSize: 14 }, // Set font size here
                        }}
                        onChange={handleInputPhone}
                    />
                    {console.log(phone)}
                </div>
                <Link to={'/MyDashboard'}>
                    <Button
                        className={cx('btn')}
                        variant="contained"
                        disableElevation
                        size="small"
                        sx={{ marginTop: 2 }}
                    >
                        Sign up
                    </Button>
                </Link>
                <div className={cx('login')}>
                    <a href={'/login'}>Log in</a>
                </div>
            </div>
        </div>
    );
}

export default Signup;
