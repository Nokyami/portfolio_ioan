import Head from "next/head";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Introduction</title>
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Card style={{ display: 'flex', flexDirection: 'column', maxWidth: 600, marginBottom: '20px' }}>
          <div style={{ display: 'flex', marginBottom: '40px' }}>
            <CardMedia
              component="img"
              image="/moi.jpg"
              alt="Yohann Vanden Eynde"
              style={{ width: 150, height: 'auto', objectFit: 'cover', marginRight: '20px' }}
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Who am I?
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                My name is Yohann Vanden Eynde, born on 4 August 2024. I'm an industrial IT student fascinated by video games, programming, microcontrollers, etc. 
                Although I&apos;m also very interested in technology in general, ideally I&apos;d like to work in automation. 
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex' }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Qualities
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                As a worthy representative of the GEEK generation, I&apos;m open-minded and always keen to learn new things to complement my versatility. 
                I have a great ability to manage my work on my own, but I&apos;m also very sociable by nature. 
                I&apos;m also able to pool my ideas and work easily as part of a team to achieve a common goal.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="/quality.jpg"
              alt="Yohann Vanden Eynde"
              style={{ width: 150, height: 'auto', objectFit: 'cover', marginLeft: '20px' }}
            />
          </div>
        </Card>
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Yohann Vanden Eynde | Page 1
          </Typography>
        </footer>
      </div>
    </>
  );
}