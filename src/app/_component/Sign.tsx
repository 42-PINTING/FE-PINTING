'use client';
import styles from '../_styles/Sign.module.scss';

export default function Sign() {
  const serverLoginEndpoint = process.env.NEXT_PUBLIC_SERVER_LOGIN_ENDPOINT;

  return (
    <form
      action={serverLoginEndpoint}
      method='post'
      className={styles.signInForm}
    >
      <label htmlFor='email' className={styles.emailLabel}>
        이메일
      </label>
      <input type='email' className={styles.emailInput} id='email' required />
      <label htmlFor='password' className={styles.passwordLabel}>
        비밀번호
      </label>
      <input
        type='password'
        className={styles.passwordInput}
        id='password'
        required
      />
      <div className={styles.signBtnGroup}>
        <input className={styles.signBtn} type='submit' value='로그인' />
        <button className={styles.signBtn}>회원가입</button>
      </div>
    </form>
  );
}
