import { Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.scss';

const cx = classNames.bind(styles);
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleInputEmail = (e) => {
        return setEmail(e.target.value);
    };
    const handleInputPassword = (e) => {
        return setPassword(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <img src={require('../../assets/img/home.png')} alt="BG" className={cx('background')} />
            <div className={cx('form')}>
                <h2 className={cx('title')}> LOG IN</h2>
                <div className={cx('input')}>
                    <TextField
                        label="Email"
                        type="text"
                        fullWidth
                        variant="filled"
                        size="normal"
                        onChange={handleInputEmail}
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                '& label': { fontSize: '1.4rem' },
                            })
                        }
                    />
                    {console.log(email)}
                    <TextField
                        label="Password"
                        fullWidth
                        type="text"
                        variant="filled"
                        size="normal"
                        margin="normal"
                        onChange={handleInputPassword}
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                '& label': { fontSize: '1.4rem' },
                            },
                            {
                                marginTop: 4,
                            })
                        }
                    />
                    {console.log(password)}
                </div>
                <Link to={'/MyDashBoard'}>
                    <Button
                        className={cx('btn-login')}
                        variant="contained"
                        disableElevation
                        size="small"
                        sx={{ margin: 2 }}
                    >
                        Login
                    </Button>
                </Link>
                <div className={cx('footer')}>
                    <div className={cx('checkbox')}>
                        <Checkbox label="Remember Me" defaultChecked />
                        Remember Me
                    </div>
                    <Link to="/" className={cx('forgot')}>
                        Forgot Password
                    </Link>
                </div>
                <div className={cx('signup')}>
                    <p className={cx('title-3')}>Need an account?</p>
                    <Link to={'/signup'}>Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
