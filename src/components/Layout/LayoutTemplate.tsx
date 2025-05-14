import * as React from "react";

interface ILayoutTemplateProps {
  children: React.ReactNode;
  header: React.ReactNode;
  machineState: React.ReactNode;
}

const LayoutTemplate: React.FunctionComponent<ILayoutTemplateProps> = ({
  header,
  machineState,
  children,
}) => {
  return (
    <div className="bg-zinc-800 flex flex-col items-center w-screen h-screen max-w-screen max-h-screen gap-4 overflow-hidden p-">
      <div className="flex h-[7vh] w-full bg-zinc-900 flex-col px-6">
        <div className="flex flex-col h-full">{header}</div>
      </div>
      <div className="flex h-[7vh] w-full flex-col px-6">
        <div className="flex flex-col h-full">{machineState}</div>
      </div>
      <div className="bg-zinc-700 flex h-[80%] w-full flex-col px-6">
        {children}
      </div>
    </div>
  );
};

export default LayoutTemplate;
