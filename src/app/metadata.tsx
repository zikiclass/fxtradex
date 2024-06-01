// metadata.tsx
import { Metadata } from "next";
import { project_name } from "../../../env";

interface MetadataProps {
  pageTitle: string;
}

const metadata = ({ pageTitle }: MetadataProps): Metadata => {
  return {
    title: pageTitle + " - " + project_name,
    description:
      "Forex, Stocks, ETFs and Options | " +
      project_name +
      " - Online Trading Platform",
  };
};

export default metadata;
