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
              On February, I&apos;ll be doing a new placement for which I&apos;ve already had an initial interview. I&apos;m going into familiar territory, having already completed various training courses at TechnoCampus in Mons. My project will consist of replacing the operating screens on the PLCs in (Mini-usine 2) using Ignition SCADA software, with access via a mobile phone or tablet. I&apos;m already very enthusiastic and looking forward to discover new technologies, learning how to use them and carrying out tests. <br />
            </Typography>
             <div style={{ height: 32 }} />
            <Typography variant="h4" component="div" gutterBottom>
              4 months into my internship
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Before I started my internship, I was very anxious, to the point of spending sleepless nights thinking about it. So the first few days were particularly stressful. Fortunately, my supervisor quickly noticed my state of mind and was able to reassure me. As the days went by, I managed to relax and gain confidence. In the end, despite the difficult start, it was a very good experience. Here&apos;s a summary of what I was able to do and learn during those 4 months.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Right from the start, even under stress, I tried to stay active. I was shown around the premises, met the staff and, most importantly, given a detailed tour of mini-factory 2. This mini-factory produces either masks or paper cups, with several production areas, each controlled by a PLC.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              The first zone heats the water and mixes it with the paper.<br />
              The second stores the mixture.<br />
              The third moulds the mask or cup, as required.<br />
              The fourth dries the moulded objects.<br />
              The fifth stores them.<br />
              And finally, the sixth recovers the waste water to filter the paper and purify it.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              After this visit, I set about creating a test board, on the advice of my course leader. Once it was finished, I connected to it via Unity Pro XL, a PLC programming software. I then created a few variables in the PLC which I then retrieved via the ModBus TCP protocol in Ignition SCADA, to prepare the supervision interface for mini-plant 2.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              But along the way, something unexpected happened: after a meeting, my supervisor advised me to switch to another supervisory software package, Envision SCADA - a Belgian package that was still under development, but worked in a similar way to Ignition. I was put in touch with Stijn, the lead developer, which enabled me to quickly get to grips with the tool. In just one month, I managed to put in place a supervision system that was functional, clear and, above all, useful for the operators.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              To make supervision accessible on tablets, I also installed a Wi-Fi card on a dedicated PC. This allows the tablets to connect to the same network and access the interface via a simple web browser, using the right link.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              To sum up, although the start of the course was stressful, I didn&apos;t give up. I managed to complete the project, adapt to the change of software and deliver effective supervision. I&apos;m proud to have satisfied my supervisor, and even prouder to see that my work has attracted the attention of other professionals in the sector.
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