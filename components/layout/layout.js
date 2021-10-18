import Head from "next/head";
import styles from './layout.module.css'
import Image from "next/image";
import {Button} from "@mui/material";

export default function Layout({children, home}){
    return (
        <div className={styles.container}>


            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>


            <header className={styles.header}>
                <Image
                    src={"/images/fjep.png"}
                    width={"250"}
                    height={"100"}
                ></Image>

            </header>



            <main>{children}</main>

            <Button variant="contained">Hello World</Button>


        </div>





    )
}