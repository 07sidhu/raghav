import { Schema, model, models } from "mongoose";

export interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  github?: string;
  createdAt?: Date;
}

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  techStack: { type: [String], default: [] },
  link: { type: String },
  github: { type: String },
}, { timestamps: true });

const Project = models.Project || model("Project", ProjectSchema);
export default Project;