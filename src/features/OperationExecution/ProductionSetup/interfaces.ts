import type { ConfigFormData } from "./schema";

export interface IProductionSetupProps {
  onSend: (data: ConfigFormData) => void;
  onCancel: () => void;
}

export interface ISetupButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  color?: "zinc" | "sky" | "rose" | "emerald" | "amber";
}
