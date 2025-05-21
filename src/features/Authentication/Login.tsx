import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthStore } from "./authStore";
import Input from "../../components/Input";
import SetupButton from "../Production/ProductionSetup/SetupButton";
import ProdIQLogo from "../../components/ProdIQLogo";
import { useMachineStore } from "../MachineState/machineStore";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof schema>;

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setMachine = useMachineStore((state) => state.setMachine);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    const response = {
      token: "mocked.jwt.token",
      tenant_id: "tenant-001",
      machine_id: "M123",
      machine_code: "MC-01",
      operator_id: "op-001",
      operator_name: data.username,
    };

    setAuth(response.token, {
      tenantId: response.tenant_id,
      operatorId: response.operator_id,
      operatorName: response.operator_name,
    });
    setMachine({
      tenantId: response.tenant_id,
      machineId: response.machine_id,
      machineCode: response.machine_code,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-800 flex flex-col items-center justify-center h-screen px-4"
    >
      <div className="w-full max-w-md bg-zinc-700 p-6 rounded-md shadow-lg grid grid-cols-1 gap-4">
        <div className="m-auto">
          <ProdIQLogo />
        </div>

        <Input
          type="text"
          label="Username"
          registration={register("username")}
          disabledField={false}
        />
        <Input
          type="password"
          label="Password"
          registration={register("password")}
          disabledField={false}
        />

        <SetupButton
          type="submit"
          label="LOGIN"
          color="sky"
          disabled={!isValid}
        />
      </div>
    </form>
  );
}
