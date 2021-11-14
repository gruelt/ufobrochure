import Layout from "../components/layout/layout";
import {Button} from "@mui/material";
import Link from 'next/link'


export default function Home({data}) {

    const api = process.env.API_URL;
    console.log(api);


  return (
      <Layout>

        contenus {api}


          <Link href="/elements">
              <Button variant="contained" >Elements</Button>
          </Link>

          <Link href="/agres">
              <Button variant="contained" >Agrès</Button>
          </Link>

      </Layout>
  )
}