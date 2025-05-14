import { useForm } from "react-hook-form";

interface IFinishModalProps {
  onConfirm: (data: { good: number; defective: number }) => void;
  onCancel: () => void;
}

const FinishModal: React.FunctionComponent<IFinishModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      good: 0,
      defective: 0,
    },
  });

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-white">
          Finalizar Ordem / Operação
        </h2>

        <form onSubmit={handleSubmit(onConfirm)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">
              Qtd. de Peças Boas
            </label>
            <input
              type="number"
              {...register("good", { valueAsNumber: true })}
              className="p-2 rounded bg-slate-700 text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">
              Qtd. de Defeitos
            </label>
            <input
              type="number"
              {...register("defective", { valueAsNumber: true })}
              className="p-2 rounded bg-slate-700 text-white"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinishModal;
