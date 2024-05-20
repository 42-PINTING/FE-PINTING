// TODO: sign up page 만들기
// TODO: email, email 검증, password, password 검증, submit 버튼 만들기
export default function SignUp() {
  return (
    <form
      action={process.env.NEXT_PUBLIC_BASE_URL + '/signUp'}
      method='post'
      className={styles.signUpForm}
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
        autoFocus
        required
      />
      <div className={styles.signBtnGroup}>
        <input className={styles.signBtn} type='submit' value='로그인' />
        <Link href='/signUp' className='styles.signBtn'>
          signUp
        </Link>
      </div>
    </form>
  );
}
