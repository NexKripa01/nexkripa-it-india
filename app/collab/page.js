// import Link from "next/link";
// import Reveal from "@/components/Reveal";

// export const metadata = {
//   title: "Collaborations",

//   description:
//     "Explore people, creators, developers, professionals and brands NexKripa IT INDIA has collaborated with.",

//   alternates: {
//     canonical: "/collab",
//   },
// };

// const collaborators = [
//   {
//     image: "/collabs/collab-01.jpg",

//     initials: "C1",

//     name: "COLLABORATOR NAME",

//     role: "CREATOR / DEVELOPER",

//     company: "INDEPENDENT",

//     description:
//       "Collaborated with NexKripa on digital ideas, creative execution and technology-driven projects.",

//     linkedin: "",

//     instagram: "",

//     website: "",

//     status: "COLLABORATED",
//   },

//   // Future collaborator
//   // {
//   //   image: "/collabs/collab-02.jpg",
//   //
//   //   initials: "C2",
//   //
//   //   name: "COLLABORATOR 02",
//   //
//   //   role: "DESIGNER",
//   //
//   //   company: "STUDIO NAME",
//   //
//   //   description:
//   //     "Worked together with NexKripa on a collaborative digital project.",
//   //
//   //   linkedin: "https://linkedin.com/...",
//   //
//   //   instagram: "https://instagram.com/...",
//   //
//   //   website: "",
//   //
//   //   status: "ONGOING COLLAB",
//   // },
// ];

// export default function CollabPage() {
//   return (
//     <section className="collab-page">
//       <div className="collab-inner">

//         {/* =========================
//             HEADING
//         ========================= */}

//         <Reveal>
//           <div className="collab-heading">
//             <h1>COLLABORATIONS</h1>

//             <p>
//               People we <strong>create</strong> with.{" "}
//               Ideas we <strong>build</strong> together.
//             </p>
//           </div>
//         </Reveal>

//         {/* =========================
//             COLLAB CARDS
//         ========================= */}

//         <div className="collab-grid">

//           {collaborators.map((collab, index) => (
//             <Reveal
//               key={collab.name}
//               delay={index * 0.05}
//             >
//               <article className="collab-card">

//                 {/* IMAGE */}

//                 <div className="collab-visual">

//                   <span className="collab-status">
//                     {collab.status}
//                   </span>

//                   <div className="collab-avatar">

//                     {collab.image ? (
//                       <img
//                         src={collab.image}
//                         alt={collab.name}
//                         className="collab-image"
//                       />
//                     ) : (
//                       <span>
//                         {collab.initials}
//                       </span>
//                     )}

//                   </div>

//                 </div>

//                 {/* DESCRIPTION */}

//                 <p className="collab-copy">
//                   {collab.description}
//                 </p>

//                 {/* PROFILE */}

//                 <div className="collab-meta">

//                   <div>
//                     <h2>
//                       {collab.name}
//                     </h2>

//                     <span>
//                       {collab.role}
//                     </span>

//                     {collab.company && (
//                       <small>
//                         {collab.company}
//                       </small>
//                     )}
//                   </div>

//                   {/* SOCIAL LINKS */}

//                   <div className="collab-links">

//                     {collab.linkedin && (
//                       <a
//                         href={collab.linkedin}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         LINKEDIN ↗
//                       </a>
//                     )}

//                     {collab.instagram && (
//                       <a
//                         href={collab.instagram}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         INSTAGRAM ↗
//                       </a>
//                     )}

//                     {collab.website && (
//                       <a
//                         href={collab.website}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         WEBSITE ↗
//                       </a>
//                     )}

//                   </div>

//                 </div>

//               </article>
//             </Reveal>
//           ))}

//           {/* =========================
//               CTA CARD
//           ========================= */}

//           <Reveal delay={0.15}>
//             <Link
//               href="/contact"
//               className="collab-card collab-cta-card"
//               aria-label="Collaborate with NexKripa IT INDIA"
//             >

//               <div className="collab-visual">

//                 <span className="collab-status">
//                   LET&apos;S BUILD
//                 </span>

//                 <div className="collab-avatar">
//                   <span>+</span>
//                 </div>

//               </div>

//               <p className="collab-copy">
//                 Have an idea, skill, audience or project that could
//                 become something bigger together? Let&apos;s explore
//                 a collaboration with NexKripa.
//               </p>

//               <div className="collab-meta">

//                 <div>
//                   <h2>
//                     COLLAB WITH NEXKRIPA
//                   </h2>

//                   <span>
//                     LET&apos;S WORK TOGETHER
//                   </span>
//                 </div>

//                 <span className="collab-cta-arrow">
//                   ↗
//                 </span>

//               </div>

//             </Link>
//           </Reveal>

//         </div>

//       </div>
//     </section>
//   );
// }