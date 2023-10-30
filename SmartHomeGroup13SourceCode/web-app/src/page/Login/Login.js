import { Button, TextField } from '@mui/material';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import Checkbox from '@mui/material/Checkbox';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h2 className={cx('title')}> Log In</h2>
                <div className={cx('input')}>
                    <TextField label="Usename" fullWidth variant="outlined" size = 'normal'/>
                    <TextField label="Password" fullWidth  variant="outlined" size = 'normal' margin='normal'/>
                </div>
                <Button className={cx('btn-login')} variant="contained" disableElevation size = 'small'>
                    Login
                </Button>
                <div className={cx('footer')}>
                    <div className={cx('checkbox')}> 
                        <Checkbox label = "Remember Me"  defaultChecked/>Remember Me
                    </div>
                    <a href = '/'>Forgot Password</a>
                </div>
            </div>
        </div>
    );
}

export default Login;