export default function EntryCard({ entry, onClick }) {
  return (
    <div
      className="bg-base-100 rounded-2xl shadow-xl overflow-hidden cursor-pointer 
      transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          //   src={entry.image}
          alt={entry.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text area */}
      <div className="p-4 bg-primary-light bg-amber-100">
        <h2 className="text-lg font-bold ">{entry.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{entry.date}</p>
      </div>
    </div>
  );
}

// export default function EntryCard({ entry }) {
//   return (
//     <div className="rounded-xl overflow-hidden bg-base-content shadow-md">
//       {/* Bild */}
//       <div className="h-32 bg-amber-50 "></div>

//       {/* Text */}
//       <div className="p-3 ">
//         <h2 className="font-semibold text-color-green-dark">{entry.title}</h2>
//         <p className="text-xs text-emerald-950">{entry.date}</p>
//       </div>
//     </div>
//   );
// }
