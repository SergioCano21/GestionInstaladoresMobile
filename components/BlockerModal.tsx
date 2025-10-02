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
import { useQueryClient } from "@tanstack/react-query";
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

  const onSubmit = async () => {
    setLoading(true);

    try {
      await apiAddBlocker(form);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
      showModal(false);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const onEdit = async () => {
    setLoading(true);

    try {
      await apiEditBlocker(data?._id!, form);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
      showModal(false);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    setLoading(true);

    try {
      await apiDeleteBlocker(data?._id!);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE] });
      showModal(false);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

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
                  <RedButton loading={loading} onPress={onDelete}>
                    Eliminar
                  </RedButton>
                </View>
                <View className="flex-1">
                  <PrimaryButton loading={loading} onPress={onEdit}>
                    Editar
                  </PrimaryButton>
                </View>
              </View>
            ) : (
              <PrimaryButton loading={loading} onPress={onSubmit}>
                Agregar Bloqueo
              </PrimaryButton>
            )}
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
