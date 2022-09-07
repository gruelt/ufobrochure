import Head from "next/head";
import styles from './layout.module.css'
import Image from "next/image";
import {Button, Link} from "@mui/material";
import SimpleBadge from "../includes/appbar";


export default function Layout({children, home}){
    return (
        <div className={styles.container}>


            <Head>
                {/*<link*/}
                {/*    rel="stylesheet"*/}
                {/*    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"*/}
                {/*/>*/}
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
            </Head>



            <header className={styles.header}>
                <Link href={"/"}>
                <Image
                    src={"/images/fjep.png"}
                    width={"200"}
                    height={"90"}
                ></Image>

                </Link>
                <div className={styles.title}>Elements Ufolep</div>

            </header>

            {/*<header className={'header'}>*/}
            {/*    <div className="overlay">*/}
            {/*        <h1>Simply The Best</h1>*/}
            {/*        <h3>Reasons for Choosing US</h3>*/}
            {/*        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque*/}
            {/*            ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui*/}
            {/*            magnam consequatur ab.</p>*/}
            {/*        <br/>*/}
            {/*            <button>READ MORE</button>*/}
            {/*    </div>*/}
            {/*</header>*/}



            <main>{children}</main>




        </div>





    )
}