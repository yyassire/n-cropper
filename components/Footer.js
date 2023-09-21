import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Made with 💖 by{' '}
        <a
          href='https://github.com/yyassire'
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          Yassire
        </a>
      </p>
    </div>
  )
}

export default Footer
