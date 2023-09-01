import { Button, Typography } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

export default function About() {
    return (
        <main>
            <Typography variant="h1" component="h2" gutterBottom>
                Do you know this singer?
            </Typography>
            <Image
                src="/an_singer_song_writer.png"
                alt="An Songer"
                width={640}
                height={480}
            />
            <h1 style={{fontSize: 100, color: "red"}}>
                He is a Japanese Local Singer Song Writer!
            </h1>
            <Button
            variant="contained"
            LinkComponent={Link}
            href="http://www3.tokai.or.jp/noritaka/"
            >I want to know more about him!!!!!!!</Button>
        </main>
    );
}