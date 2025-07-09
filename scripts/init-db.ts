import { db } from "../server/db.js";
import { profiles } from "../shared/schema.js";

async function initializeDatabase() {
  try {
    // Insert default profile data
    await db.insert(profiles).values({
      name: "Piyush Shukla",
      title: "Frontend Developer",
      description: "Passionate frontend developer with expertise in React, TypeScript, and modern web technologies.",
      github: "https://github.com/piyushshukla",
      linkedin: "https://linkedin.com/in/piyushshukla",
      email: "piyush@example.com",
      cgpa: "8.5",
      problemsSolved: "500+",
      about1: "I'm a passionate frontend developer with a love for creating beautiful and functional user interfaces.",
      about2: "I have experience with React, TypeScript, Next.js, and modern web development practices.",
      about3: "I enjoy solving complex problems and learning new technologies to build better web experiences.",
    }).onConflictDoNothing();

    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

initializeDatabase();
