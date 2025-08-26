import * as React from "react";
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Text,
    Section,
} from "@react-email/components";

interface EmailTemplateProps {
    email: string;
    name: string;
}

export default function EmailTemplate({ name, email }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>Thank you for contacting us, we will respond shortly.</Preview>
            <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}>
                <Container
                    style={{
                        margin: "20px auto",
                        padding: "20px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        maxWidth: "600px",
                    }}
                >
                    <Heading
                        style={{
                            fontSize: "24px",
                            marginBottom: "16px",
                            color: "#333",
                        }}
                    >
                        Hi {name},
                    </Heading>

                    <Section>
                        <Text style={{ fontSize: "16px", marginBottom: "8px", color: "#333" }}>
                            Thank you for reaching out!
                        </Text>
                        <Text style={{ fontSize: "16px", marginBottom: "8px", color: "#333" }}>
                            I appreciate your interest in collaborating. I will get back to you as
                            soon as possible.
                        </Text>
                    </Section>

                    <Section>
                        <Text style={{ fontSize: "14px", marginTop: "32px", color: "#888" }}>
                            This email was sent to: {email}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
