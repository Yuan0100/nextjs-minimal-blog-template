import Link from "next/link"
import styles from "./header.module.scss"
import { SITE_TITLE } from "../consts"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          {SITE_TITLE}
        </Link>
      </div>
    </header>
  )
}