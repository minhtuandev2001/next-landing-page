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
    case "Hidden": // trường hợp để làm trình giữ chỗ
      return <div></div>;
    default:
      return <div>Không tìm thấy {section.component} trong dự án</div>;
  }
};
