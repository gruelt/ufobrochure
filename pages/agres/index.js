import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import {Button} from "@mui/material";
import Image from "next/image";
import {Grid} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";


export async function getStaticProps(context) {
    const res = await fetch(process.env.API_URL+'/api/agres');
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}



export default function Agres({ data }) {



    return (
        <Layout>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>



                <Grid container spacing={3}>




                    {data.map((agres) => (
                        <Link href={'agres/'+agres.id}>
                            <div style={{
                                backgroundColor: agres.color,

                            }}>



                                <Card sx={{ minWidth: 800 ,maxWidth:150}} style={{
                                    backgroundColor: agres.color , color:'white' , fontFamily: 'Roboto', fontSize:'30px'

                                }}
                                className={'agrestitle'}
                                >
                                    <CardContent>


                                        <Typography variant="body2">
                                            <Image
                                                width={75}
                                                height={90}
                                                src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + agres.image}

                                            ></Image>
                                        </Typography>
                                        <div className={'agrestitle'}>
                                            {agres.name}
                                        </div>
                                    </CardContent>

                                </Card>









                            </div>
                        </Link>
                    ))}

                </Grid>


            </section>
        </Layout>
    )
}