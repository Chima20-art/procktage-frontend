import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import { createClient } from 'next-sanity'

export default function Home() {
    return (
        <div>
            <Header />
        </div>
    )
}
