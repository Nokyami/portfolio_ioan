import Head from "next/head";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Internship() {
  return (
    <>
      <Head>
        <title>Portfolio - Internship</title>
      </Head>
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <Card style={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Internship
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              TechnoCampus Mons
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              On February, I&apos;ll be doing a new placement for which I&apos;ve already had an initial interview. I&apos;m going into familiar territory, having already completed various training courses at TechnoCampus in Mons. My project will consist of replacing the operating screens on the PLCs in (Mini-usine 3) using Ignition SCADA software, with access via a mobile phone or tablet. I&apos;m already very enthusiastic and looking forward to discover new technologies, learning how to use them and carrying out tests.
            </Typography>
          </CardContent>
        </Card>
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Yohann Vanden Eynde | Page 3
          </Typography>
        </footer>
      </Container>
    </>
  );
}