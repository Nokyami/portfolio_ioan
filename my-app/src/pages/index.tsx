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
                My name is Yohann Vanden Eynde, born on 4 August 2003. I&apos;m an industrial IT student fascinated by video games, programming, microcontrollers, etc. 
                Although I&apos;m also very interested in technology in general, ideally I&apos;d like to work in automation. 
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex', marginBottom: '40px' }}>
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
          <div style={{ display: 'flex', marginBottom: '40px' }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                My Background
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                It all began just over six years ago. Without knowing it at the time, technology was to become a central part of my life. 
                My father, who was passionate about video games and programming, was spending hours in front of his computer. 
                Curious, I watched him playing, coding, tinkering... And sometimes he let me touch his precious PC. 
                I&apos;d get up to all sorts of mischief, but that&apos;s how I learned to turn on a computer, launch applications, recognise the keys on the keyboard, connect a mouse or headset... 
                In short, I fell into it.
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                At the same time, I had guitar lessons every Thursday. 
                But to tell the truth, my mind was elsewhere. 
                Little by little, music gave way to gaming. I made this choice, a little reluctantly, but I couldn&apos;t help myself.
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                During my primary school years, my school results were... OK, but nothing more than that. 
                The truth is, I came home from school and go straight to my console or PC. Homework and revision? Not really on the agenda. 
                This behaviour often earned me remarks like: ‘Your child has potential, but he lacks commitment’. And they weren&apos;t wrong.
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                But everything changed when I was 14. 
                I failed my second year of secondary school - the reasons are mine alone - and it was a real shock. 
                Deprived of my screens, my games, my PC... I was forced to refocus. 
                And against all odds, it did me a world of good. 
                My results went up quickly and my parents, relieved, gradually gave me back their confidence.
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                At 16, I started to lose interest in gaming. A new page was being turned. 
                So I set off into a completely different world: programming. At first I was interested in creating websites, then video games. 
                At the time, Unreal Engine 4 was all the rage. It was on this engine that I designed my first games. 
                Honestly? They were far from good. But they were mine, and I was learning.
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                At a crossroads in my career, I had to make a choice: what direction should I take? At first I tried science, thinking that it would reflect my childhood interest. 
                But after a year I realised that it wasn&apos;t for me. IT, on the other hand, seemed more and more obvious to me.
              </Typography>
              <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
                At the age of 19, with a computer science degree in my pocket, I had to make a new choice: scientific or industrial computing? 
                After some thought - and several discussions with my parents - I opted for the latter. And today, I don&apos;t regret it for a single second. 
                I&apos;m about to graduate, and I&apos;m more motivated than ever to keep going.
              </Typography>
            </CardContent>
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