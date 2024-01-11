export const FourByFour = ({testplant, testplant2, testplant3, testplant4}) => {
    return (
    <>
   <div className=" mx-24 grid grid-cols-2 grid-rows-2 gap-1">
      {/* Section 1 */}
      <div className="border border-black p-4 aspect-w-1 aspect-h-1">
       {testplant}
      </div>

      {/* Section 2 */}
      <div className="border border-black p-4 aspect-w-1 aspect-h-1">
      {testplant2}
      </div>

      {/* Section 3 */}
      <div className="border border-black p-4 aspect-w-1 aspect-h-1">
      {testplant3}
      </div>

      {/* Section 4 */}
      <div className="border border-black p-4 aspect-w-1 aspect-h-1">
      {testplant4}
      </div>
    </div>
     
    </>)
}