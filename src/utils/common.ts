export const generateMediaLink = (id: string) => {
  let newUrl = `${process.env.NEXT_PUBLIC_MEDIA_SERVER_URL}/files/media/${id}`;
  return newUrl;
};

export const getSampleDataWithOutTheme = (data: {
  configs?: { prop: string; sample: any }[];
}) => {
  const result: { [key: string]: any } = {}; // Đảm bảo kiểu của `result`

  if (data?.configs) {
    data.configs.forEach((item) => {
      result[item.prop] = item.sample; // item.prop có kiểu string
    });
  }

  return result;
};

export const handleColorChange = (defaultTheme: any) => {
  if (typeof document !== "undefined") {
    const htmlElement = document.documentElement;
    Object.keys(defaultTheme).forEach((key) => {
      if (defaultTheme[key] !== "")
        htmlElement.style.setProperty(key, defaultTheme[key]);
    });
  }
};
