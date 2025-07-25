import React from "react";

const Experience = () => {
  const experiences = [

    {
      role: "Graduate Research Associate",
      company: "Performance Research and Optimization on Networks(PROTON) Lab, ASU",
      duration: "May 2025 – Present",
      points: [
        "Conducting thesis research on Over-the-Air Computation using game theory and reinforcement learning to optimize distributed signal processing in wireless edge networks",
        "Developing Python-based simulations for power control and resource allocation, enabling efficient multi-agent coordination under dynamic channel conditions."
      ]
    },
    {
      role: "Data Engineer",
      company: "ZS Associates, India",
      duration: "Sep 2023 - June 2024",
      points: [
        "Created procedural flows with SQL queries and used Microsoft Excel to generate insights on sales data of medical representatives.",
        "Designed and optimized ETL workflows and SQL-based data pipelines to improve execution time by 30%, enabling faster analytics and reporting.",
        "Designed parallel Excel workbooks for Quality Checks at various project stages, ensuring 100% methodology validation throughout the process, contributing to a 25% reduction in error rates in the SQL database.",
      
      ]
    },
    {
      role: "Summer Research Fellow",
      company: "IISc Bangalore",
      duration: "May 2022 – July 2022",
      points: [
        "Analyzed EEG signals using time-frequency decomposition and implemented Matching Pursuit for sparse signal representation to enhance feature extraction.",
        "Built MATLAB scripts for preprocessing and visualizing physiological datasets, supporting statistical modeling of non-stationary biomedical signals.",
      
      ]
    },
    
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-[#1b1b2f] to-[#1b1b2f] text-white px-10 py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden font-sans">
       <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-fuchsia-400 mb-20 tracking-wide font-mono">
  Experience
</h2>


        <div className="space-y-12">
          {experiences.map((exp, index) => (
           <div key={index} className="flex flex-col md:flex-row md:gap-10 gap-4 bg-[#0f172a] border-l-4 border-fuchsia-500 pl-6 pr-4 py-6 rounded-xl">
           <div className="text-sm md:text-base text-gray-400 md:w-1/4 text-center md:text-left font-medium">
             {exp.duration}
           </div>
           <div className="md:w-3/4">
             <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
               {exp.role}{" "}
               <span className="text-fuchsia-400 font-medium">– {exp.company}</span>
             </h3>
             <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2 leading-relaxed text-[15px]">
               {exp.points.map((point, i) => (
                 <li key={i}>{point}</li>
               ))}
             </ul>
           </div>
         </div>
         
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Experience;