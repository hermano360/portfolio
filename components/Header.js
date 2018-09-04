import Link from 'next/link'

const styles = {
  linkStyle : {
    marginRight: 15
  },
  navbar: {
    position: 'absolute'
  }
}

const Header = () => (
    <div style={styles.navbar}>
        {/* <Link href="/">
          <a style={styles.linkStyle}>Home</a>
        </Link>
        <Link href="/budsy">
          <a style={styles.linkStyle}>Budsy</a>
        </Link> */}
    </div>
)

export default Header
