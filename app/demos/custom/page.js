// export const metadata = {
//   title: "Custom Website Demo",

//   description:
//     "Explore a custom website demo by NexKripa featuring a modern layout, program listings, and responsive design.",

//   alternates: {
//     canonical: "/demos/custom",
//   },

//   robots: {
//     index: false,
//     follow: true,
//   },
// };

// export default function CustomPage() {
//   return (
//     <main
//       style={{
//         width: "100%",
//         height: "100vh",
//         background: "#000",
//         overflow: "hidden",
//       }}
//     >
//       <iframe
//         src="https://crow-mustard-kany.squarespace.com/"
//         title="Custom Website Demo by NexKripa"
//         style={{
//           width: "100%",
//           height: "100%",
//           border: "0",
//           display: "block",
//         }}
//         allowFullScreen
//       />
//     </main>
//   );
// }


export const metadata = {
  title: "Custom Website Demo",

  description:
    "Explore a custom website demo by NexKripa.",

  alternates: {
    canonical: "/demos/custom",
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function CustomDemoPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Custom Demo Coming Soon</h1>
    </main>
  );
}
