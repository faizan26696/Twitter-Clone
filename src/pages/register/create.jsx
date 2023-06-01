import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import styles from './create.module.css'
import { BsTwitter } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { createState } from '../../atoms/atoms'
import { useNavigate } from 'react-router-dom'
import Divider from '@mui/material/Divider';
// import CloseIcon from '@mui/icons-material/Close';

export function Create() {


    const [create, setCreate] = useRecoilState(createState)

    const navigate = useNavigate();

    function handleCreate() {
        setCreate(!create)
    }

    return (
        <div className={styles.main}>

            <div className={styles.btnContainer}>
                {/* <span className={styles.closeCreateButton} onClick={(e) => navigate('/')}><CloseIcon /></span> */}
                <BsTwitter style={{ color: "#1D9BF0", fontSize: '1.5rem' }} />
                <h2 className={styles.createHead}>Join Twitter today</h2>

                <button className={styles.btn}><FcGoogle />Sign up with Google</button>

                <button className={styles.btn}><BsApple />Sign up with Apple</button>


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <span style={{ flexGrow: 1, width: '9vw' }}>
                        <Divider />
                    </span>
                    <span style={{ margin: '0 8px' }}>or</span>
                    <span style={{ flexGrow: 1, width: '9vw' }}>
                        <Divider />
                    </span>
                </div>

                <div className={styles.termsdiv}>
                    <button onClick={handleCreate} className={styles.btnAccount}>Create account</button>

                    <p className={styles.terms}>By signing up, you agree to the<span className={styles.conditions}>Terms of Service</span>
                        and <span className={styles.conditions}>Privacy Policy</span>, including <span className={styles.conditions}>Cookie Use</span></p>
                    <p className={styles.haveAcc}>Have an account already?<span onClick={() => navigate('/sign-in')} className={styles.login}>Log in</span></p>
                </div>

            </div>
        </div>
    );
}