import { Button, TextField } from '@mui/material';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handdleInputUsername = (e) => {
        return setUsername(e.target.value);
    };
    const handdleInputPassword = (e) => {
        return setPassword(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <img src={require('../../assets/img/home.png')} alt="BG" className={cx('background')} />
            <div className={cx('form')}>
                <h2 className={cx('title')}> LOG IN</h2>
                <div className={cx('input')}>
                    <TextField
                        label="Usename"
                        type="text"
                        fullWidth
                        variant="filled"
                        size="normal"
                        onChange={handdleInputUsername}
                        sx={
                            ({ input: { fontSize: '1.4rem', padding: '20px 12px 4px' } },
                            {
                                '& label': { fontSize: '1.4rem' },
                            })
                        }
                    />
                    {console.log(username)}
                    <TextField
                        label="Password"
                        fullWidth
                        type="text"
                        variant="filled"
                        size="normal"
                        margin="normal"
                        onChange={handdleInputPassword}
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
                </div>
                <Button
                    className={cx('btn-login')}
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ margin: 2 }}
                >
                    Login
                </Button>
                <div className={cx('footer')}>
                    <div className={cx('checkbox')}>
                        <Checkbox label="Remember Me" defaultChecked />
                        Remember Me
                    </div>
                    <a href="/" className={cx('forgot')}>
                        Forgot Password
                    </a>
                </div>
                <div className={cx('signup')}>
                    <p className={cx('title-3')}>Need an account?</p>
                    <a href={'/signup'}>Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
