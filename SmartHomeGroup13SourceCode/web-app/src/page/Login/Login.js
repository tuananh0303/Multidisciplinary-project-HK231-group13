import { Button, TextField } from '@mui/material';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import { CheckBox } from '@mui/icons-material';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wapper')}>
            <TextField className={cx('input')} label="Usename" variant="filled" />
            <TextField className={cx('input')} label="Password" variant="filled" />
            <Button variant="contained" disableElevation>
                Login
            </Button>
            <div>
                <CheckBox label="Remember Me" />
            </div>
        </div>
    );
}

export default Login;
