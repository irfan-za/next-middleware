/*
import Sapa from "../../../components/sapa"
daripada menggunakan relative import seperti di atas. Lebih baik menggunakan absolute import & aliases path.
settinganya dapat diubah di jsconfig.json file
*/
import Sapa from "@/components/sapa"


function Index() {
  return (
    <div>
      <h1>MY portfolio</h1>
      <Sapa user={"Irfan"} />
    <iframe src="https://irfan-za.com" height={500} width={600} ></iframe>
    </div>
  )
}

export default Index