import Link from "next/link";

interface WardCardProps {
  ID: number;
}

function WardCard({ ID }: WardCardProps) {
  return (
<<<<<<< HEAD:app/components/ward/WardCard.tsx
    <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md relative">
      <Link
        href={`../Search/${ID}`}
        className="no-underline text-black block w-full h-full"
      >
        <div className="bg-blue-600 w-full h-44 rounded-t-lg"></div>
        <div className="mx-8 py-3">
          <div className="">ชื่อ: </div>
        </div>
      </Link>
=======
    <div>
      <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md relative">
           <Link
             href="../Search"
             className="no-underline text-black block w-full h-full"
           >
             <div className="bg-blue-600 w-full h-40 rounded-t-lg"></div>
             <div className="mx-8 py-3">
               <div className="">ชื่อ: </div>
             </div>
           </Link>
         </div>
>>>>>>> b660da93dca378526ba5f55f402f3cc7bda61c38:component/ward/WardCard.tsx
    </div>
  );
}

export default WardCard;
