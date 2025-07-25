import React from "react";
import { Github, ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Smart Task Prioritizer (LLM-based Productivity Agent) ",
    desc: `• Built an ML-powered clinical decision support system to predict hospital readmissions in diabetic patients using real-world EHR data.
• Applied SHAP for global and local explanations, improving model transparency and interpretability.
• Designed an interactive Streamlit dashboard showcasing prediction scores, patient-level insights, and dynamic SHAP plots.
• Deployed the complete system on Streamlit Cloud, enabling public access and real-time model exploration.`,
    tech: ["Python", "Streamlit", "LangChain"],
    image: "projects/smartTaskPrioritizer.png",
    github: "https://github.com/debachaks/SmartTaskPrioritizer/tree/main",
    live: "https://smarttaskprioritizer-deba.streamlit.app/"
  },
  {
    title: "FoodVision",
    desc: `•  Developed and deployed an end-to-end food vision model on Hugging Face using EfficientNet-B2 feature extractor,
capable of predicting over 100 food classes achieving 95 % accuracy.
• Conducted trade-off analysis between EfficientNet-B2 and ViT extractors, selecting EfficientNet-B2 based on model size,
accuracy, and prediction time thus optimizing for real time application performance.
`,
    tech: ["Python", "PyTorch", "Hugging Face"],
    image: "projects/plant.png",
    github: "https://github.com/shrey-Bish/plant-disease-detection",
    live: "https://plant-disease-detection-ls8e.onrender.com",
    paper: "https://iarjset.com/wp-content/uploads/2023/05/IARJSET.2023.10597.pdf"
  },
  {
    title: "Analysis of Seizure Types using Deep Learning",
    desc: `• Performed sentiment classification on Hinglish code-mixed datasets using MLP and CNN models, improving accuracy by 10% through advanced vectorization.
• Applied TF-IDF and Word2Vec embeddings alongside custom preprocessing including emoji normalization and language filtering.
• Demonstrated the superiority of CNN architectures over traditional ML on noisy, multilingual data.`,
    tech: ["Python", "TF-IDF", "Word2Vec", "CNN"],
    image: "projects/sentiment.png",
    github: "https://github.com/shrey-Bish/hinglish-sentiment",
    paper: "https://iarjset.com/wp-content/uploads/2023/01/IARJSET.2023.10130.pdf"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-[#1b1b2f] to-[#1b1b2f] text-white px-10 py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden font-sans">
       <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-fuchsia-400 mb-20 tracking-wide font-mono">
          Projects
        </h2>

        <div className="space-y-20">
          {projects.map((p, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 bg-[#12121c] p-6 rounded-2xl shadow-md shadow-fuchsia-900/30"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover rounded-xl border border-fuchsia-900/20"
                />
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-3xl font-semibold text-white-300 font-mono">{p.title}</h3>
                <p className="text-slate-300 text-[15px] leading-relaxed font-light">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-fuchsia-900/20 text-fuchsia-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-inner"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 flex-wrap">
  {p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-200 transition"
    >
      <Github size={18} /> GitHub
    </a>
  )}
  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-200 transition"
    >
      <ExternalLink size={18} /> Live Demo
    </a>
  )}
  {p.paper && (
    <a
      href={p.paper}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-200 transition"
    >
      <FileText size={18} /> Research Paper
    </a>
  )}
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
