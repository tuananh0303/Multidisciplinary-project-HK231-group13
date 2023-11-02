import { Button, TextField } from '@mui/material';
import styles from './Signup.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleInputFirstname = (e) => {
        setFirstname(e.target.value);
    };
    const handleInputLastname = (e) => {
        setLastname(e.target.value);
    };
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const handleInputEmail = (e) => {
        setEmail(e.target.value);
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
                    <div className={cx('name')}>
                        <TextField
                            label="First Name"
                            type="text"
                            variant="filled"
                            size="normal"
                            sx={
                                ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                                {
                                    '& label': { fontSize: '1.4rem' },
                                })
                            }
                            onChange={handleInputFirstname}
                        />
                        {console.log(firstname)}
                        <TextField
                            label="Last Name"
                            type="text"
                            variant="filled"
                            size="normal"
                            sx={
                                ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                                {
                                    '& label': { fontSize: '1.4rem' },
                                })
                            }
                            onChange={handleInputLastname}
                        />
                        {console.log(lastname)}
                    </div>
                    <TextField
                        label="Username"
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
                        onChange={handleInputUsername}
                    />
                    {console.log(username)}
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
