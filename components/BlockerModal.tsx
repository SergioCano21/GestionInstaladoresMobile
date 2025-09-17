import { View } from "react-native";
import CardHeader from "./ui/CardHeader";
import { CalendarIcon } from "./ui/Icons";
import { InputTextArea, InputTimeAndDate, Label } from "./ui/Inputs";
import { PrimaryButton } from "./ui/Buttons";
import {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";

interface Props {
  isVisible: boolean;
  showModal: (isOpen: boolean) => void;
}

export default function BlockerModal({ isVisible, showModal }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%"], []);

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [isVisible]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      onDismiss={() => showModal(false)}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        />
      )}
    >
      <BottomSheetView>
        <View className="bg-white rounded-lg p-4 gap-3">
          <CardHeader Icon={CalendarIcon}>Bloquear Horario</CardHeader>
          <View className="flex-row">
            <View className={`flex-1 gap-1`}>
              <Label>Fecha de Inicio *</Label>
              <InputTimeAndDate />
            </View>
          </View>
          <View className="flex-row">
            <View className={`flex-1 gap-1`}>
              <Label>Fecha Final *</Label>
              <InputTimeAndDate />
            </View>
          </View>
          <View className="flex-row">
            <View className={`flex-1 gap-1`}>
              <Label>Descripción</Label>
              <InputTextArea placeholder="Descripción del bloqueo de horario (opcional)" />
            </View>
          </View>
          <View className="mt-4 mb-8">
            <PrimaryButton onPress={() => null}>Agregar Bloqueo</PrimaryButton>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
