import EducationSchool from "./EducationSchool";
import EducationUniversity from "./EducationUniversity";

export default function Education() {
  
  return (
    <div className="flex flex-col justify-start gap-10">
      <EducationUniversity/>
      <EducationSchool/>
    </div>
  )
}
