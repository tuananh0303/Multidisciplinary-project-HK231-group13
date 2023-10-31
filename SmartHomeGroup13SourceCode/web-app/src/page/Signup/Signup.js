import { Button, TextField } from '@mui/material';
import styles from './Signup.scss';
import classNames from 'classnames/bind';
import Checkbox from '@mui/material/Checkbox';

const cx = classNames.bind(styles);
function Signup() {
    return (
        <div className={cx('wrapper')}>
            <img src={require('../../assets/img/home.png')} alt="BG" className={cx('background')} />
            <div className={cx('form')}>
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
                        />
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
                        />
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
                    />
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
                    />
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
                    />
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
                    />
                </div>
                <Button
                    className={cx('btn')}
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ marginTop: 2, marginBottom: 1 }}
                >
                    Sign up
                </Button>
                <Button
                    className={cx('btn')}
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ marginBottom: 4 }}
                >
                    Log in
                </Button>
            </div>
        </div>
    );
}

export default Signup;
