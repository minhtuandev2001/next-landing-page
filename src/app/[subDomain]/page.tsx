import { getLandingPageBySubDomain } from "@/apiRequests/landing-page";
import AddTheme from "@/components/AddTheme";
import { renderSection } from "@/components/renderSection";

type Props = {
  params: {
    subDomain: string;
  };
};
export default async function page(context: Props) {
  const { subDomain } = context.params;
  let landingPage = null;
  if (subDomain) {
    landingPage = await getLandingPageBySubDomain(subDomain);
  }
  let resPonselistSectionsRender = [];
  if (landingPage) {
    // xử lý data
    let dataConfig: { [key: string]: any } = {}; // {componentName: dataConfig}
    landingPage?.configs?.sections.forEach(
      (section: { component: string; data: any }) => {
        dataConfig[section.component] = section.data;
      }
    );
    // lấy danh sách sectionRender
    resPonselistSectionsRender = landingPage?.template?.sections
      ? landingPage?.template?.sections
          .filter((section: any) =>
            landingPage?.configs?.sections.some(
              (sectionConfig: any) =>
                sectionConfig.component === section.component
            )
          )
          .map((section: any) => {
            let sectionTemp = section;
            sectionTemp.configs = sectionTemp.configs.map((config: any) => {
              config.sample = dataConfig[sectionTemp.component]
                ? dataConfig[sectionTemp.component][config.prop]
                : config.sample;
              return config;
            });
            return sectionTemp;
          })
      : [];
  }
  return (
    <div>
      <AddTheme theme={landingPage?.configs?.defaultTheme}></AddTheme>
      <div>
        {resPonselistSectionsRender &&
          resPonselistSectionsRender.length > 0 &&
          resPonselistSectionsRender.map((section: any, index: number) => {
            return <div key={index}>{renderSection(section)}</div>;
          })}
      </div>
    </div>
  );
}
