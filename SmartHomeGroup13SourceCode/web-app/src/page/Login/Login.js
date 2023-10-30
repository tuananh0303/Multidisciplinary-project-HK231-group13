import { Button, TextField } from '@mui/material';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import Checkbox from '@mui/material/Checkbox';
import { useFormControl } from '@mui/material/FormControl';


const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <img src = {require('../../assets/img/home.png')} alt='BG' className={cx('background')}/>
            <div className={cx('form')}>
                <h2 className={cx('title')}> LOG IN</h2>
                <div className={cx('input')}>
                    <TextField className={cx('username-input')} label="Usename" fullWidth variant="filled" size = 'normal'/>
                    <TextField label="Password" className={cx('password-input')}  fullWidth  variant="filled" size = 'normal' margin="normal"/>
                </div>
                <Button className={cx('btn-login')} variant="contained" disableElevation size = 'small'>
                    Login
                </Button>
                <div className={cx('footer')}>
                    <div className={cx('checkbox')}> 
                        <Checkbox label = "Remember Me"  defaultChecked/>Remember Me
                    </div>
                    <a href = '/' className={cx('forgot')}>Forgot Password</a>
                </div>
            </div>
        </div>
    );
}

export default Login;