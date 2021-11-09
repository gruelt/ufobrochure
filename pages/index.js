import Layout from "../components/layout/layout";

export default function Home({data}) {

    const api = process.env.API_URL;
    console.log(api);


  return (
      <Layout>

        contenus {api}

      </Layout>
  )
}