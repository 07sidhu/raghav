import mongoose, { Schema, model, models } from "mongoose";

// This describes the data for TypeScript
export interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  github?: string;
  createdAt: Date;
  content: string;
  challenge: string;
  solution: string;
}

// This describes the data for MongoDB
const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  techStack: { type: [String], default: [] },
  link: { type: String },
  github: { type: String },
  content: { type: String },
  challenge: { type: String }, 
  solution: { type: String }, 
}, { timestamps: true });

// Check if the model exists already, otherwise create it
const Project = models.Project || model("Project", ProjectSchema);

export default Project;