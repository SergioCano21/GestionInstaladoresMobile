import { apiAddBlocker } from "@/api/schedule";
import { AddBlockerForm } from "@/types/types";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { Alert, View } from "react-native";
import { PrimaryButton } from "./ui/Buttons";
import CardHeader from "./ui/CardHeader";
import { CalendarIcon } from "./ui/Icons";
import { InputTextArea, InputTimeAndDate, Label } from "./ui/Inputs";

interface Props {
  isVisible: boolean;
  showModal: (isOpen: boolean) => void;
}

const initialState: AddBlockerForm = {
  startTime: "",
  endTime: "",
  type: "Block",
};

export default function BlockerModal({ isVisible, showModal }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [form, setForm] = useState<AddBlockerForm>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(form);

  const onSubmit = async () => {
    setLoading(true);

    try {
      await apiAddBlocker(form);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
      setForm(initialState);
    }
  }, [isVisible]);

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
              />
            </View>
          </View>
          <View className="mt-4 mb-8">
            <PrimaryButton loading={loading} onPress={onSubmit}>
              Agregar Bloqueo
            </PrimaryButton>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
