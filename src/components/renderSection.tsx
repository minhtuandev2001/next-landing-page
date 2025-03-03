import { getSampleDataWithOutTheme } from "@/utils/common";
import T01_Header from "./sections/T01_Header";
import T01_Banner from "./sections/T01_Banner";
import T01_Fact from "./sections/T01_Fact";
import T01_Service from "./sections/T01_Service";
import T01_About from "./sections/T01_About";
import T01_Story from "./sections/T01_Story";
import T01_Support from "./sections/T01_Support";
import T01_Team from "./sections/T01_Team";
import T01_Footer from "./sections/T01_Footer";
import T03_Header from "./sections/T03_Header";
import T03_About from "./sections/T03_About";
import T03_Banner from "./sections/T03_Banner";
import T03_Categorys from "./sections/T03_Categorys";
import T03_Trends from "./sections/T03_Trends";
import T03_Story from "./sections/T03_Story";
import T03_Review from "./sections/T03_Review";
import T03_Contact from "./sections/T03_Contact";
import T03_Footer from "./sections/T03_Footer";

export const renderSection = (section: any) => {
  let props = null;
  if (section.component !== "Hidden") {
    props = getSampleDataWithOutTheme(section);
  }
  switch (section?.component) {
    case "T01_Header":
      return <T01_Header {...props}></T01_Header>;
    case "T01_Banner":
      return <T01_Banner {...props}></T01_Banner>;
    case "T01_Fact":
      return <T01_Fact {...props}></T01_Fact>;
    case "T01_Service":
      return <T01_Service {...props}></T01_Service>;
    case "T01_About":
      return <T01_About {...props}></T01_About>;
    case "T01_Story":
      return <T01_Story {...props}></T01_Story>;
    case "T01_Support":
      return <T01_Support {...props}></T01_Support>;
    case "T01_Team":
      return <T01_Team {...props}></T01_Team>;
    case "T01_Footer":
      return <T01_Footer {...props}></T01_Footer>;
    case "T03_Header":
      return <T03_Header {...props}></T03_Header>;
    case "T03_About":
      return <T03_About {...props}></T03_About>;
    case "T03_Banner":
      return <T03_Banner {...props}></T03_Banner>;
    case "T03_categorys":
      return <T03_Categorys {...props}></T03_Categorys>;
    case "T03_Trends":
      return <T03_Trends {...props}></T03_Trends>;
    case "T03_Story":
      return <T03_Story {...props}></T03_Story>;
    case "T03_Review":
      return <T03_Review {...props}></T03_Review>;
    case "T03_Contact":
      return <T03_Contact {...props}></T03_Contact>;
    case "T03_Footer":
      return <T03_Footer {...props}></T03_Footer>;
    case "Hidden": // trường hợp để làm trình giữ chỗ
      return <div></div>;
    default:
      return <div>Không tìm thấy {section.component} trong dự án</div>;
  }
};
