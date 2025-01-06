import Head from "next/head";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio - Projects</title>
      </Head>
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <Card style={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Project 1
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Up and Down counter Project
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              During my studies, I had the opportunity to take part in various projects from the very first year.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              This project consisted of creating a down-counter based on a block diagram we had seen in class. Together we drew up a new block diagram containing the electrical board with its added components, the communication board and the computer.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Then, we organised our ideas into a MIND MAP and were able to draw up a plan, as well as doing some general thinking to find a real application for the project, counting up and down boxes.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              The tasks were divided into several blocks: the code, the assembly, the communication board, the report and finally the PowerPoint. My task was to make the board based on an electrical diagram and to understand how the communication board worked so that I could create a link between the computer and the board.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Finally, we wrote a report on the various stages. The project ended with an oral presentation and demonstration.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              With this experience, I was confronted for the first time with real teamwork in which I easily found my place. Knowing how to carry out your own task while taking into account those of others with a common goal. Communication and team spirit are essential here, and I didn't have to try very hard.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Project 2
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Microcontroller and Website Design
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Following the same procedure, we received the instructions, drew up a block diagram and organised our work on the basis of a MIND MAP.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Due to special circumstances, the amount of personal work was much greater and I had to devote myself to the design of the project. In other words, the microcontroller part, followed by the creation of the website and the design of the model, which will be finalised with the help of a collaborator. After an initial presentation of our project to an external jury, we again had to present our work to the teaching staff, but this time mainly in English.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Although based on similar foundations, this project proved to be more stressful for different reasons, in particular because of constraints directly linked to the project in question, such as the more limited time in the face of greater technological complexity or a presentation in English. But also having to take on this project mainly on my own took me out of my comfort zone, forcing me to operate autonomously and take responsibility.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Of course, I realised that my English wasn't up to scratch, but despite everything, I managed to adapt and deal with the stress so that I could finalise the project properly and realise that while the support of a team can be comfortable, working independently can save a project when the team is compromised. I find this personally rewarding.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Project 3
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              MIC Tech Goes Wild (Hackathon 2024)
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              In addition to these school projects, I took the initiative with some friends to take part in the MIC Tech Goes Wild project (Hackathon 2024) in Mons. The aim was to complete a project on the theme of AI in 1 weekend and present it to a panel of judges made up of active members of Microsoft.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              The weekend began with an explanation of the expected project and different possible directions, followed by coaching on AI and the provision of a list of useful technologies.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              In concrete terms, the project chosen by our team aimed to make the AI capable of reading a PDF, storing similar data in its memory in the form of a vector and making it available for future searches.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              To split the PDF into vectors, we chose LangChain technology with FAISS and created the program as follows:
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              1. AI implementation<br />
              2. Importing FAISS<br />
              3. Coding the acquisition of a file
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              Then, everyone had to create an additional tool for this site. My part consisted of upgrading the programme to make it possible to acquire an industrial image and to obtain a technical description of it by the AI from the vector information extracted from the PDF.
            </Typography>
            <Typography variant="body1" color="text.primary" style={{ marginTop: '20px' }}>
              This experience was personally enriching, although I had already carried out team projects, but this time I didn't have the assistance and advice of a teacher. I was aware of my responsibility for the cohesion of the group and the choices made. But instead of feeling stressed as soon as I understood the principle of new technologies, I felt reassured. The urgency of the situation didn't affect my confidence. On the contrary, it made me more efficient, in particular by choosing the fastest possible precedents with the same functionality to improve performance. I felt a great deal of pleasure, enthusiasm and satisfaction both during the creation of the project and in front of the jury during the presentation of the project for which we were awarded third place!
            </Typography>
          </CardContent>
        </Card>
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Yohann Vanden Eynde | Page 2
          </Typography>
        </footer>
      </Container>
    </>
  );
}