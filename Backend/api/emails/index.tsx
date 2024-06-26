import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  
  export const welcomemail = () => (
    <Html>
      <Head />
      <Preview>You're now ready to make live transactions with Stripe!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>

            <Img
              src="https://mediakwest.com/wp-content/uploads/2023/10/JO-2024-Mediakwest-1024x576.jpeg"
              width="100%"
              height="300px"
              alt="JO24"
            />
            <Hr style={hr} />
            <Head>
             <title>Paris 2024 ! </title>
            </Head>
            <Text style={paragraph}>
              Bienvenue sur JO 2024. Decouvrez nos offres pour assiter aux jeux olympiques de Paris 2024 ! 
            </Text>
            <Text style={paragraph}>
             Vous pouvez acceder à notre billeterie ici : 👇
            </Text>
            <Button style={button} href="http://localhost:5173/offre">
              Billeteries / offres
            </Button>
            <Hr style={hr} />
            </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default welcomemail;
  
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
  };
  
  const box = {
    padding: "0 48px",
  };
  
  const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  };
  
  const paragraph = {
    color: "#525f7f",
  
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
  };
  
  const anchor = {
    color: "#556cd6",
  };
  
  const button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    padding: "10px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
  };
  