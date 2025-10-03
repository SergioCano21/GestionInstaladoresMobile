import {
  apiAddBlocker,
  apiDeleteBlocker,
  apiEditBlocker,
} from "@/api/schedule";
import { QUERY_KEYS } from "@/constants/Constants";
import { BlockerForm, Schedule } from "@/types/types";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Alert, View } from "react-native";
import { PrimaryButton, RedButton } from "./ui/Buttons";
import CardHeader from "./ui/CardHeader";
import { CalendarIcon } from "./ui/Icons";
import { InputTextArea, InputTimeAndDate, Label } from "./ui/Inputs";

interface Props {
  isVisible: boolean;
  showModal: (isOpen: boolean) => void;
  data: Schedule | null;
}

const initialState: BlockerForm = {
  startTime: null,
  endTime: null,
  type: "Block",
};

export default function BlockerModal({ isVisible, showModal, data }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [form, setForm] = useState<BlockerForm>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: apiAddBlocker,
    onMutate: () => setLoading(true),
    onSuccess: () => {
      showModal(false);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
      setLoading(false);
    },
    onError: (error: any) => Alert.alert("Error", error.message),
  });

  const editMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: BlockerForm }) =>
      apiEditBlocker(id, data),
    onMutate: () => setLoading(true),
    onSuccess: () => {
      showModal(false);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
      setLoading(false);
    },
    onError: (error: any) => Alert.alert("Error", error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => apiDeleteBlocker(id),
    onMutate: () => setLoading(true),
    onSuccess: () => {
      showModal(false);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
      setLoading(true);
    },
    onError: (error: any) => Alert.alert("Error", error.message),
  });

  const handleAdd = () => addMutation.mutate(form);
  const handleEdit = () =>
    data?._id && editMutation.mutate({ id: data._id, data: form });
  const handleDelete = () => data?._id && deleteMutation.mutate(data._id);

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.present();

      if (data) {
        const startTime = new Date(`${data.startDate}T${data.startTime}`);
        const endTime = new Date(`${data.endDate}T${data.endTime}`);

        setForm({
          startTime,
          endTime,
          type: "Block",
          ...(data.description ? { description: data.description } : {}),
        });
      } else setForm(initialState);
    } else {
      bottomSheetRef.current?.dismiss();
      setForm(initialState);
    }
  }, [isVisible, data]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enablePanDownToClose={!loading}
      onDismiss={() => showModal(false)}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior={loading ? "none" : "close"}
        />
      )}
    >
      <BottomSheetView>
        <View className="bg-white rounded-lg p-4 gap-3">
          <CardHeader Icon={CalendarIcon}>Bloquear Horario</CardHeader>
          <View className="flex-row">
            <View className={`flex-1 gap-1`}>
              <Label>Fecha de Inicio *</Label>
              <InputTimeAndDate
                loading={loading}
                name="startTime"
                setValue={setForm}
                value={form.startTime}
              />
            </View>
          </View>
          <View className="flex-row">
            <View className={`flex-1 gap-1`}>
              <Label>Fecha Final *</Label>
              <InputTimeAndDate
                loading={loading}
                name="endTime"
                setValue={setForm}
                value={form.endTime}
              />
            </View>
          </View>
          <View className="flex-row">
            <View className={`flex-1 gap-1`}>
              <Label>Descripción</Label>
              <InputTextArea
                placeholder="Descripción del bloqueo de horario (opcional)"
                loading={loading}
                name="description"
                setValue={setForm}
                value={form.description ?? ""}
              />
            </View>
          </View>
          <View className="mt-4 mb-8">
            {data ? (
              <View className="flex-row gap-3">
                <View className="flex-1">
                  <RedButton loading={loading} onPress={handleDelete}>
                    Eliminar
                  </RedButton>
                </View>
                <View className="flex-1">
                  <PrimaryButton loading={loading} onPress={handleEdit}>
                    Editar
                  </PrimaryButton>
                </View>
              </View>
            ) : (
              <PrimaryButton loading={loading} onPress={handleAdd}>
                Agregar Bloqueo
              </PrimaryButton>
            )}
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
