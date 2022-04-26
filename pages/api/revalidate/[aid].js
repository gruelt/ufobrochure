export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
        console.log(JSON.stringify(req.query))
        console.log(process.env.REVALIDATE_TOKEN);
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        console.log('console');
        await res.unstable_revalidate('/agres/8')
        return res.json({ revalidated: true })
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating' + JSON.stringify(err))
    }
}